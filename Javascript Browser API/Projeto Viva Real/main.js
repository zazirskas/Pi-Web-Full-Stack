const cityInput = document.querySelector("#city-input");

const containerMainResultsFindings = document.querySelector(
	".container-main-results-findings"
);
const searchedCity = document.querySelector("#searched-city");

let errorStatus;

const cityTag = document.querySelector(".city-tag");

const containerMainResultsQuantity = document
	.querySelector(".container-main-results-quantity")
	.querySelector("p");

const amenities = {
	AIR_CONDITIONING: "Ar Condicionado",
	AMERICAN_KITCHEN: "Cozinha Americana",
	BARBECUE_GRILL: "Churrasqueira",
	BICYCLES_PLACE: "Bicicletário",
	CINEMA: "Cinema",
	ELECTRONIC_GATE: "Portaria Eletrônica",
	ELEVATOR: "Elevador",
	FIREPLACE: "Lareira",
	FURNISHED: "Mobiliado",
	GARDEN: "Jardim",
	GATED_COMMUNITY: "Condomínio Fechado",
	GYM: "Academia",
	LAUNDRY: "Lavanderia",
	PARTY_HALL: "Salão de Festas",
	PETS_ALLOWED: "Aceita PETS",
	PLAYGROUND: "Playground",
	POOL: "Piscina",
	SAUNA: "Sauna",
	SPORTS_COURT: "Quadra de Esportes",
	TENNIS_COURT: "Quadra de Tênis",
};

const translateCity = {
	"são paulo": {
		city: "sao-paulo",
		state: "sp",
		combination: "São Paulo - SP",
	},
	"sao paulo": {
		city: "sao-paulo",
		state: "sp",
		combination: "São Paulo - SP",
	},
	"rio de janeiro": {
		city: "rio-de-janeiro",
		state: "rj",
		combination: "Rio de Janeiro - SP",
	},
	manaus: { city: "manaus", state: "am" },
};

let searchResults, quantityResults;

const resetElement = (element) => {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};

const buildHtml = (searchResults, quantityResults) => {
	searchedCity.innerText = `${
		translateCity[cityInput.value.toLowerCase()].combination
	} X`;
	cityTag.innerText = `${
		translateCity[cityInput.value.toLowerCase()].combination
	} X`;

  cityTag.classList = 'city-tag';

	containerMainResultsQuantity.innerHTML = `<p><strong>${quantityResults}</strong> Imóveis à venda em ${
		translateCity[cityInput.value.toLowerCase()].combination
	}</p>`;

	resetElement(containerMainResultsFindings);

	console.log(searchResults);

	searchResults.forEach((estate) => {
		const estateCard = document.createElement("div");
		estateCard.className = "estate-card";

		const estateCardImageContainer = document.createElement("div");
		estateCardImageContainer.className = "estate-card-image-container";

		const img = document.createElement("img");
		img.src = estate.medias[0].url;

		estateCardImageContainer.appendChild(img);
		estateCard.appendChild(estateCardImageContainer);

		const estateCardContainer = document.createElement("div");
		estateCardContainer.className = "estate-card-container";

		const estateCardInfo = document.createElement("div");
		estateCardInfo.className = "estate-card-info";

		const estateAdressContainer = document.createElement("div");
		estateAdressContainer.className = "estate-adress-container";

		let span = document.createElement("span");

		span.innerText = `${estate.listing.address.street}, ${
			estate.listing.address.streetNumber
				? estate.listing.address.streetNumber
				: estate.listing.address.complement
		} - ${estate.listing.address.neighborhood}, ${
			estate.listing.address.city
		} - ${estate.listing.address.stateAcronym}`;

		estateAdressContainer.appendChild(span);
		estateCardInfo.appendChild(estateAdressContainer);

		const estateDescriptionContainer = document.createElement("div");
		estateDescriptionContainer.className = "estate-description-container";

		span = document.createElement("span");
		span.innerText = `${estate.link.name}`;

		estateDescriptionContainer.appendChild(span);
		estateCardInfo.appendChild(estateDescriptionContainer);

		const estateSpecificationContainer = document.createElement("div");
		estateSpecificationContainer.className = "estate-specification-container";

		const p = document.createElement("p");
		p.innerHTML = `<strong>${estate.listing.usableAreas}</strong> m² <strong>${estate.listing.bedrooms}</strong> quartos
    <strong>${estate.listing.bathrooms}</strong> banheiros <strong>${estate.listing.parkingSpaces}</strong> vagas`;

		estateSpecificationContainer.appendChild(p);
		estateCardInfo.appendChild(estateSpecificationContainer);

		const estateFeatureContainer = document.createElement("div");
		estateFeatureContainer.className = "estate-feature-container";

		const features = estate.listing.amenities;

		features.forEach((feature) => {
			span = document.createElement("span");
			span.className = "feature";
			span.innerText = `${amenities[feature]}`;

			estateFeatureContainer.appendChild(span);
		});

		estateCardInfo.appendChild(estateFeatureContainer);

		estateCardContainer.appendChild(estateCardInfo);
		estateCard.appendChild(estateCardContainer);
		containerMainResultsFindings.appendChild(estateCard);

		const estateCardInfo2 = document.createElement("div");
		estateCardInfo2.className = "estate-card-info-2";

		const estateCardPriceContainer = document.createElement("div");
		estateCardPriceContainer.className = "estate-card-price-container";

		const h3 = document.createElement("h3");

		const preco = new Intl.NumberFormat("pt-BR");

		h3.innerText = `R$${preco.format(estate.listing.pricingInfos[0].price)}`;

		span = document.createElement("span");
		span.innerHTML = `Condomínio: <strong>R$ ${estate.listing.pricingInfos[0].monthlyCondoFee}</strong>`;

		estateCardPriceContainer.appendChild(h3);

		estate.listing.pricingInfos[0].monthlyCondoFee
			? estateCardPriceContainer.appendChild(span)
			: "";

		estateCardInfo2.appendChild(estateCardPriceContainer);
		estateCardContainer.appendChild(estateCardInfo2);
	});
};

const httpRequest = (city) => {
	if (!translateCity[city]) {
		translateCity[city] = { city: "error", state: "error" };
	}

	const response = fetch(
		`https://private-9e061d-piweb.apiary-mock.com/venda?state=${translateCity[city].state}&city=${translateCity[city].city}`
	)
		.then((response) => {
      if (!response.ok) {
        errorStatus = response.status;
      }
			return response.json();

		})
		.then((data) => {
			const httpResponse = data;

			console.log(httpResponse);

			searchResults = httpResponse.search.result.listings;

			quantityResults = httpResponse.search.totalCount;

			buildHtml(searchResults, quantityResults);
		})
		.catch((error) => {
			console.log(error);
      searchedCity.innerText = ''
			resetElement(containerMainResultsFindings);
			resetElement(containerMainResultsQuantity);

      cityTag.remove();
			let h1 = document.createElement("h1");
      h1.style.textAlign = 'center';
			h1.innerText = `OOOOPS! ALGO DEU ERRADO NA SUA BUSCA`;
			containerMainResultsFindings.appendChild(h1);
      
      h1 = document.createElement('h1');
      h1.style.textAlign = 'center';
      h1.style.color = 'red';
      h1.innerText = `STATUS ${errorStatus}`;
      containerMainResultsFindings.appendChild(h1);

      h1 = document.createElement('h1');
      h1.style.textAlign = 'center';
      h1.innerText = `POR FAVOR, TENTE NOVAMENTE.`;
      containerMainResultsFindings.appendChild(h1);



		});
};

cityInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		httpRequest(cityInput.value.toLowerCase());
	}
});

cityInput.value = "São Paulo";

httpRequest(cityInput.value.toLowerCase());

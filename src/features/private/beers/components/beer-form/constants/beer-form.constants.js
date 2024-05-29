const constants = {
  FORM_FIELDS: [
    {
      label: "Nombre",
      name: "name",
      placeholder: "Nombre de la cerveza",
      type: "text",
    },
    {
      accept: "image/*",
      label: "Imagen",
      name: "image",
      placeholder: "Imagen de la cerveza",
      type: "file",
    },
    {
      items: [
        "Ambar",
        "Dorado",
        "Marron",
        "Negro",
        "Palido",
        "Rojo",
        "Amarillo",
        "Rosado",
        "Naranja",
      ],
      label: "Color",
      name: "color",
      placeholder: "Color de la cerveza",
      type: "select",
    },
    {
      items: ["Complejo", "Ligero", "Medio"],
      label: "Cuerpo",
      name: "body",
      placeholder: "Cuerpo",
      type: "select",
    },
    {
      items: [
        "Afrutado",
        "Ahumado",
        "Café",
        "Caramelizado",
        "Caramelo",
        "Cereal",
        "Chocolate",
        "Crisp",
        "Cítrico",
        "Delicado",
        "Dulce",
        "Especiado",
        "Espresso",
        "Floral",
        "Frutado",
        "Frutal",
        "Frutas Oscuras",
        "Frutas Secas",
        "Herbal",
        "Herbáceo",
        "Limón",
        "Lúpulo",
        "Malta",
        "Malteada",
        "Malteado",
        "Manzana",
        "Miel",
        "Notas a Chocolate",
        "Notas a Plátano",
        "Refrescante",
        "Resinoso",
        "Seco",
        "Suave",
        "Sutil Floral",
        "Terroso",
        "Tostado",
        "Vainilla",
        "Vino",
      ],
      label: "Sabor",
      name: "flavor",
      placeholder: "Perfil de Sabor",
      type: "select",
    },
    {
      label: "Alcohol",
      name: "alcohol",
      placeholder: "Graduacion Alcoholica",
      type: "number",
    },
    {
      items: [
        "Afganistán",
        "Albania",
        "Alemania",
        "Andorra",
        "Angola",
        "Antigua y Barbuda",
        "Arabia Saudita",
        "Argelia",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaiyán",
        "Bahamas",
        "Bangladés",
        "Barbados",
        "Baréin",
        "Bélgica",
        "Belice",
        "Benín",
        "Bielorrusia",
        "Birmania",
        "Bolivia",
        "Bosnia y Herzegovina",
        "Botsuana",
        "Brasil",
        "Brunéi",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Bután",
        "Cabo Verde",
        "Camboya",
        "Camerún",
        "Canadá",
        "Catar",
        "Chad",
        "Chile",
        "China",
        "Chipre",
        "Ciudad del Vaticano",
        "Colombia",
        "Comoras",
        "Corea del Norte",
        "Corea del Sur",
        "Costa de Marfil",
        "Costa Rica",
        "Croacia",
        "Cuba",
        "Dinamarca",
        "Dominica",
        "Ecuador",
        "Egipto",
        "El Salvador",
        "Emiratos Árabes Unidos",
        "Eritrea",
        "Eslovaquia",
        "Eslovenia",
        "España",
        "Estados Unidos",
        "Estonia",
        "Etiopía",
        "Filipinas",
        "Finlandia",
        "Fiyi",
        "Francia",
        "Gabón",
        "Gambia",
        "Georgia",
        "Ghana",
        "Granada",
        "Grecia",
        "Guatemala",
        "Guyana",
        "Guinea",
        "Guinea ecuatorial",
        "Guinea-Bisáu",
        "Haití",
        "Honduras",
        "Hungría",
        "India",
        "Indonesia",
        "Irak",
        "Irán",
        "Irlanda",
        "Islandia",
        "Islas Marshall",
        "Islas Salomón",
        "Israel",
        "Italia",
        "Jamaica",
        "Japón",
        "Jordania",
        "Kazajistán",
        "Kenia",
        "Kirguistán",
        "Kiribati",
        "Kuwait",
        "Laos",
        "Lesoto",
        "Letonia",
        "Líbano",
        "Liberia",
        "Libia",
        "Liechtenstein",
        "Lituania",
        "Luxemburgo",
        "Madagascar",
        "Malasia",
        "Malaui",
        "Maldivas",
        "Malí",
        "Malta",
        "Marruecos",
        "Mauricio",
        "Mauritania",
        "México",
        "Micronesia",
        "Moldavia",
        "Mónaco",
        "Mongolia",
        "Montenegro",
        "Mozambique",
        "Namibia",
        "Nauru",
        "Nepal",
        "Nicaragua",
        "Níger",
        "Nigeria",
        "Noruega",
        "Nueva Zelanda",
        "Omán",
        "Países Bajos",
        "Pakistán",
        "Palaos",
        "Palestina",
        "Panamá",
        "Papúa Nueva Guinea",
        "Paraguay",
        "Perú",
        "Polonia",
        "Portugal",
        "Reino Unido",
        "República Centroafricana",
        "República Checa",
        "República de Macedonia",
        "República del Congo",
        "República Democrática del Congo",
        "República Dominicana",
        "República Sudafricana",
        "Ruanda",
        "Rumanía",
        "Rusia",
        "Samoa",
        "San Cristóbal y Nieves",
        "San Marino",
        "San Vicente y las Granadinas",
        "Santa Lucía",
        "Santo Tomé y Príncipe",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leona",
        "Singapur",
        "Siria",
        "Somalia",
        "Sri Lanka",
        "Suazilandia",
        "Sudán",
        "Sudán del Sur",
        "Suecia",
        "Suiza",
        "Surinam",
        "Tailandia",
        "Tanzania",
        "Tayikistán",
        "Timor Oriental",
        "Togo",
        "Tonga",
        "Trinidad y Tobago",
        "Túnez",
        "Turkmenistán",
        "Turquía",
        "Tuvalu",
        "Ucrania",
        "Uganda",
        "Uruguay",
        "Uzbekistán",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Yibuti",
        "Zambia",
        "Zimbabue",
      ],
      label: "País",
      name: "country",
      placeholder: "País de procedencia",
      type: "select",
    },
    {
      label: "Provincia",
      name: "province",
      placeholder: "Provincia de procedencia",
      type: "text",
    },
    {
      items: [
        "Aperitivos",
        "Barbacoas",
        "Carnes Asadas",
        "Carnes Rojas",
        "Carnes a la Parrilla",
        "Chocolate",
        "Comida Americana",
        "Comida Asiatica",
        "Comida Picante",
        "Comida Tradicional",
        "Ensaladas",
        "Mariscos",
        "Pescado",
        "Pescados",
        "Postres",
        "Pretzels",
        "Quesos",
        "Quesos Azules",
        "Quesos Añejo",
        "Quesos Fuertes",
        "Quesos Suaves",
        "Sushi",
      ],
      label: "Maridaje",
      name: "pairing",
      placeholder: "Maridaje",
      type: "select",
    },
    {
      label: "Marca",
      name: "brand",
      placeholder: "Marca de la cerveza",
      type: "text",
    },
    {
      items: [
        "Ale Ambar",
        "Ale Dorada",
        "Ale Fuerte",
        "Ale Marron",
        "Ale Roja",
        "Ale de Frutas",
        "Amber Ale",
        "Barley Wine",
        "Belgian Wit",
        "Bock",
        "Coffee Beer",
        "Doppelbock",
        "Dunkelweizen",
        "ESB",
        "Golden Ale",
        "Hefeweizen",
        "IPA",
        "Imperial Stout",
        "Lager",
        "Lager Ambar",
        "Lager Roja",
        "Pale Ale",
        "Pilsner",
        "Porter",
        "Red Ale",
        "Saison",
        "Smoked Beer",
        "Stout",
        "Strong Ale",
        "Trappist",
        "Wheat Beer",
        "White Ale",
      ],
      label: "Clase",
      name: "type",
      placeholder: "Clase de cerveza",
      type: "select",
    },
    {
      label: "Estilo",
      name: "style",
      placeholder: "Estilo de cerveza",
      type: "text",
    },
    {
      items: ["Si", "No"],
      label: "Artesanal",
      name: "craft",
      placeholder: "Cerveza Artesanal",
      type: "select",
    },
    {
      items: ["Alta", "Baja", "Media"],
      label: "Fermentación",
      name: "fermentation",
      placeholder: "Tipo de Fermentación",
      type: "select",
    },
    {
      label: "IBUs",
      name: "ibus",
      placeholder: "Unidades de Amargor",
      type: "number",
    },
    {
      label: "Descripción",
      name: "description",
      placeholder: "Descripción de la cerveza",
      type: "text",
    },
    {
      label: "Popularidad",
      name: "popularity",
      placeholder: "Popularidad de la cerveza",
      type: "text",
    },
    {
      label: "Recomendación",
      name: "recommendation",
      placeholder: "Recomendación de la cerveza",
      type: "text",
    },
    {
      items: ["Formal", "Informal"],
      label: "Evento",
      name: "event",
      placeholder: "Tipo de evento",
      type: "select",
    },
    {
      label: "Cervecería",
      name: "brewery",
      placeholder: "Cervecería de la cerveza",
      type: "text",
    },
    {
      label: "Reputación",
      name: "reputation",
      placeholder: "Reputación de la cerveza",
      type: "text",
    },
  ],
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    showLabel: false,
    type: "submit",
  },
};

export default constants;

const constants = {
  FORM_FIELDS: [
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
      label: "¿Qué tipo de sabor prefieres en una cerveza?",
      name: "flavor",
      placeholder: "Perfil de Sabor",
      type: "select",
    },
    {
      items: ["Complejo", "Ligero", "Medio"],
      label: "¿Prefieres una cerveza ligera o con más cuerpo?",
      name: "body",
      placeholder: "Cuerpo",
      type: "select",
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
      label: "¿Cuál es tu preferencia en cuanto a color de la cerveza?",
      name: "color",
      placeholder: "Color de la cerveza",
      type: "select",
    },
    {
      items: [
        "Muy bajo (0-20)",
        "Suave y equilibrado (21-40)",
        "Amargor moderado (41-60)",
        "Amargor pronunciado (61-80)",
        "Amargor muy intenso (81-100)",
      ],
      label: "¿Cuál es tu nivel de tolerancia al amargor?",
      name: "ibus",
      placeholder: "Tolerancia al amargor",
      type: "select",
    },
    {
      items: ["Baja (1% - 4.5%)", "Media (4.6% - 7.5%)", "Alta (7.6% o más)"],
      label: "¿Qué nivel de graduación alcohólica te gustaría?",
      name: "alcohol",
      placeholder: "Graduacion Alcoholica",
      type: "select",
    },
    {
      items: ["Si", "No"],
      label: "¿Te gustaría una cerveza artesanal o comercial?",
      name: "craft",
      placeholder: "Cerveza Artesanal",
      type: "select",
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
      label: "¿Tienes alguna preferencia de país de procedencia?",
      name: "country",
      placeholder: "País de procedencia",
      type: "select",
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
      label: "¿Qué tipo de maridaje estás buscando?",
      name: "pairing",
      placeholder: "Maridaje",
      type: "select",
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
      label: "¿Tienes alguna preferencia de clase de cerveza en mente?",
      name: "type",
      placeholder: "Clase de cerveza",
      type: "select",
    },
    {
      items: ["Formal", "Informal"],
      label: "¿Hay algún evento especial para el que estás buscando una recomendación de cerveza?",
      name: "event",
      placeholder: "Tipo de evento",
      type: "select",
    },
  ],
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    showLabel: false,
    type: "submit",
  },
};

export default constants;

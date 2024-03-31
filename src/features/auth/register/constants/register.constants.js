const constants = {
  FIELD_NAME_PROPS: {
    label: "Nombre",
    name: "name",
    placeholder: "John Doe",
    type: "text",
  },
  FIELD_BIRTHDATE_PROPS: {
    label: "Fecha de nacimiento",
    name: "birthdate",
    placeholder: "YYYY-MM-DD",
    type: "date",
  },
  FIELD_EMAIL_PROPS: {
    label: "Email",
    name: "email",
    placeholder: "john.doe@example.com",
    type: "email",
  },
  FIELD_PASSWORD_PROPS: {
    label: "Password",
    name: "password",
    placeholder: "******",
  },
  FIELD_PASSWORD_TYPE_VISIBLE: "text",
  FIELD_PASSWORD_TYPE_HIDDEN: "password",
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    label: "Register",
    showLabel: false,
    type: "submit",
  },
  CARD_WRAPPER_PROPS: {
    buttonLink: {
      fullWidth: true,
      href: "/login",
      label: "Ya tienes cuenta? Inicia sesión",
    },
    title: "Registro",
    description: "Crea tu cuenta",
  },
};

export default constants;

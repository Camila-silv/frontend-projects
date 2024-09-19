const typesErrors = [
  "badInput",
  "customError",
  "patternMismatch",
  "tooShort",
  "typeMismatch",
  "valueMissing",
];

const errorMessages = {
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido. ",
    tooShort: "Por favor, preencha um email válido.  ",
    patternMismatch: "Por favor, preencha um email válido. ",
    badInput: "Por favor, preencha um email válido. ",
    customError: "Por favor, preencha um email válido. ",
  },
};


export {typesErrors, errorMessages}
import { useContext, useState } from "react";
import { MeteoraContext } from "../../../context/MeteoraContext";

const regex = `^[a-zA-Z][a-zA-Z0-9\W]{2,}@[a-zA-Z0-9\W]{2,}\.[a-zA-Z]{2,}`;

export default function RegistrationSection() {
  const { setShowModal, showModal } = useContext(MeteoraContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidator, setInputValidator] = useState(false);
  const [email, setEmail] = useState("");

  const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
  ];

  const mensagens = {
    email: {
      valueMissing: "O campo de e-mail não pode estar vazio.",
      typeMismatch: "Por favor, preencha um email válido. ",
      tooShort: "Por favor, preencha um email válido.  ",
      patternMismatch: "Por favor, preencha um email válido. ",
    },
  };

  const registration = (e) => {
    e.preventDefault();

    setShowModal({ ...showModal, showRegistrationAlert: true });
    setEmail("");
  };

  const validateEntry = (e) => {
    const campo = e.target;
    setErrorMessage("");

    tiposDeErro.forEach((erro) => {
      if (campo.validity[erro]) {
        setErrorMessage(mensagens[campo.name][erro]);
      }
    });

    setInputValidator(campo.checkValidity());
  };

  return (
    <div className="p-12 font-inter">
      <form
        className="border border-black w-full max-w-729 mx-auto p-4 pb-10 flex flex-col gap-6 md:border-2"
        onSubmit={registration}
      >
        <p className="text-center font-normal md:text-xl">
          Quer receber nossas novidades, <br className="md:hidden" /> promoções
          exclusivas e <br className="hidden md:inline" /> 10% OFF na{" "}
          <br className="md:hidden" /> primeira compra? Cadastre-se!
        </p>

        <fieldset className="flex w-full h-38 mx-auto md:w-441 ">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Digite seu e-mail."
              className="border w-full px-2 outline-none font-inter h-full"
              required
              pattern={regex}
              onInvalid={(e) => e.preventDefault()}
              name="email"
              onBlur={validateEntry}
              value={email}
              onChange={(e) => setEmail(e.value)}
            />
            <p className="text-red-700 absolute top-11 ">
              {!inputValidator ? errorMessage : null}
            </p>
          </div>

          <button type="submit" className="bg-purple-1 text-white-1 w-84 py-1">
            Enviar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

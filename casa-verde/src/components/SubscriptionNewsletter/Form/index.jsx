import { useContext, useRef, useState } from "react";
import { NewsletterContext } from "../../../context/newsletterContext";
import {
  errorMessages,
  typesErrors,
} from "../../../utils/types-of-errors-and-messages";
import emailjs from "@emailjs/browser";

export default function Form() {
  const { email, setShowRegisteredEmailAlert, setEmail } =
    useContext(NewsletterContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const inputEmail = useRef(null);

  const registration = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: "Assinante",
      message: "Obrigada por se inscrever!! Aguarde por novidades de produtos",
      email: email,
    };

    emailjs
      .send(
        import.meta.env.SERVICE_KEY,
        import.meta.env.TEMPLATE_KEY,
        templateParams,
        import.meta.env.PRIMARY_KEY
      )
      .then((response) => {
        console.log("E-mail enviado", response.status, response.text);
        setShowRegisteredEmailAlert(true);
      })
      .catch((error) => {
        console.log("Erro ao enviar e-mail: ", error);
      });
  };

  const validateEmail = () => {
    const input = inputEmail.current;
    setErrorMessage("");

    typesErrors.forEach((error) => {
      if (input.validity[error]) {
        setErrorMessage(errorMessages[input.name][error]);
      }
    });

    setShowError(input.checkValidity());
  };

  return (
    <form onSubmit={registration}>
      <fieldset className="w-full flex flex-col md-second:mb-10 md-second:mr-10">
        <div className="w-full flex mb-4 small:flex-col">
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="grow shadow-1 font-montSerrat text-base font-normal outline-none input-newsletter bg-white-1 small:h-75"
            pattern="^[a-zA-Z][a-zA-Z0-9\W]{2,}@[a-zA-Z]{2,}.[a-zA-Z]{3,}$"
            onInvalid={(e) => e.preventDefault()}
            onBlur={validateEmail}
            required
            minLength={8}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            ref={inputEmail}
          />
          <button
            className="bg-yellow-1 text-white-1 font-montSerrat  h-75 shadow-2 min-w-194"
            onClick={validateEmail}
          >
            Assinar newsletter
          </button>
        </div>

        {!showError && <p className="text-red-600">{errorMessage}</p>}
      </fieldset>
    </form>
  );
}

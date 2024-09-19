import { useContext } from "react";

import { NewsletterContext } from "../../context/newsletterContext";
import ModalBg from "../ModalBg";

export default function RegistrationConfirmationContainer() {
  const { email, setShowRegisteredEmailAlert, showRegisteredEmailAlert, setEmail } =
    useContext(NewsletterContext);

  const dynamicStyle = showRegisteredEmailAlert
    ? "visible opacity-100 bottom-2/4"
    : "invisible opacity-0 bottom-0";

  const closeAlert = (e) => {
    e.preventDefault();

    setShowRegisteredEmailAlert(false);
    setEmail("")
  };

  return (
    <ModalBg activateBg={showRegisteredEmailAlert}>
      <div
        className={` absolute bg-white-1  transition-all duration-700 ${dynamicStyle}`}
      >
        <div className="bg-yellow-1 flex justify-end py-2 px-4">
          <button
            className="text-white-1 text-xl"
            onClick={closeAlert}
          >
            x
          </button>
        </div>
        <p className="p-4">
          Obrigado pela sua assinatura, você receberá nossas novidades no e-mail{" "}
          {email}.
        </p>
      </div>
    </ModalBg>
  );
}

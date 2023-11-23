import React, { useState } from "react";
import "./style.scss";

export const ContactForm7 = ({ formId, formMarkup }) => {
  const formRef = React.useRef(null);
  const [hasSubmited, setHasSubmited] = React.useState(false);

  React.useEffect(() => {
    if (formRef?.current) {
      const formElement = formRef.current.getElementsByTagName("form")?.[0];

      if (formElement) {
        const handleSubmit = (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          console.log(formData);
          console.log("KLIKAM SUBMITA!");

          fetch(
            `${process.env.GATSBY_WP_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              } else {
                setHasSubmited(true);
              }
              // Tutaj możesz obsłużyć odpowiedź, jeśli jest OK
              // Na przykład, jeśli oczekujesz JSON, możesz użyć return response.json()
              return response.json(); // Zwróć odpowiedź jako JSON
            })
            .then((data) => {
              // Tutaj możesz obsłużyć dane z odpowiedzi serwera (jeśli jest to potrzebne)
              console.log("Sukces:", data);
            })
            .catch((error) => {
              // Tutaj obsłużysz błędy związane z siecią lub odpowiedzią serwera
              console.error("Błąd sieci:", error);
            });
        };

        formElement.addEventListener("submit", handleSubmit);

        return () => {
          formElement.removeEventListener("submit", handleSubmit);
        };
      }
    }
  }, [formRef, formId]);

  return hasSubmited ? (
    <div className="email-submited">Thank you for sending us a message!</div>
  ) : (
    <fieldset
      ref={formRef}
      className="cform-7"
      dangerouslySetInnerHTML={{ __html: formMarkup }}
    />
  );
};

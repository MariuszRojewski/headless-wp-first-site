import React from "react";
import { Wrapper } from "./SidebarMessage.styles";

import tangoMail from "../../images/mail-icon.svg";

const SidebarMessage = () => (
  <Wrapper>
    <div>
      <img src={tangoMail} alt="cakeit-mail" />
      <span>Kontakt</span>
    </div>
    <p>
      Tłumacz Online
      <br />
      Polskiego Języka Migowego
      <br />
      <br />
      <a href="mailto:kontakt@emigowy.pl">Email: kontakt@emigowy.pl</a>
      <p>Tel.: +48 785 976 866</p>
      <p>
        Adres: ul. Spółdzielców 19B, <br />
        62-510 Konin
      </p>
      <p>
        Godziny pracy: <br />
        Pn-Pt 10:00-16:00
      </p>
    </p>
  </Wrapper>
);

export default SidebarMessage;

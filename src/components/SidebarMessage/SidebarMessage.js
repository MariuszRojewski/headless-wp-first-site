import React from "react";
import "./style.scss";
import konsultant from "../../images/konsultant.png";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
const SidebarMessage = () => (
  <div className="massage-wrapper">
    <div className="inner">
      <div className="header">
        <img src={konsultant} alt="zdjecia-konsultanta" />
        <h3>Mariusz Rojewski</h3>
        <p>Specjalista ds. Obsługi Klienta</p>
        <h4>Porozmawiajmy i ustalmy plan działania!</h4>
      </div>
      <div class="contact-buttons">
        <div class="contact-phone">
          <div className="icon-box">
            <BsTelephone className="icon" />
          </div>
          <div>
            <a href="tel:+48 785 976 866">+48 785 976 866</a>
            <span>Pracujemy od 9:00 do 17:00</span>
          </div>
        </div>
        <div class="contact-mail">
          <div className="icon-box">
            <TfiEmail className="icon" />
          </div>
          <div>
            <a href="mailto:kontakt@emigowy.pl">kontakt@emigowy.pl</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SidebarMessage;

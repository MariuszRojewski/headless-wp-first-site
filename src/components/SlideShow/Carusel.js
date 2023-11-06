import React from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FaQuoteRight } from "react-icons/fa";
import { nanoid } from "nanoid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/SliderAcf.scss";

const Carusel = ({ slideshowBlocks }) => {
  const [slides, setSlides] = React.useState(Object.values(slideshowBlocks));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (slides[0].title !== null && slides[0].textArea !== "") {
    return (
      <section className="slick-container">
        <Slider {...settings}>
          {slides.map((slide) => {
            const id = nanoid();
            const { title, textArea, backgroundImage, button } = slide;
            const introText = `${textArea.substring(0, 100)}...`;

            return (
              <div key={id} className="card">
                <GatsbyImage
                  image={backgroundImage.gatsbyImage}
                  alt={title}
                  className="card-img"
                />
                <h5 className="card-title">{title}</h5>
                <p className="card-text-area">{introText}</p>
                <Link className="card-button" href={button.location.url}>
                  {button.title}
                </Link>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
};

export default Carusel;

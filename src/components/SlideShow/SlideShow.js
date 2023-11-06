import React from "react";
import { nanoid } from "nanoid";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GatsbyImage } from "gatsby-plugin-image";
import "../../style/SliderAcf.scss";

const SlideShow = ({ slideshowBlocks }) => {
  const [slides, setSlides] = React.useState(Object.values(slideshowBlocks));
  const [currentPerson, setCurrentPerson] = React.useState(0);

  const prevSlide = () => {
    setCurrentPerson((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex;
    });
    if (currentPerson <= 0) {
      setCurrentPerson(slides.length - 1);
    }
  };

  const nextSlide = () => {
    setCurrentPerson((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex;
    });
    if (currentPerson >= slides.length - 1) {
      setCurrentPerson(0);
    }
  };

  if (slides[0].title !== null && slides[0].textArea !== "") {
    return (
      <section className="slider-container">
        {slides.map((slide, slideIndex) => {
          const id = nanoid();
          const { title, textArea, backgroundImage, button } = slide;

          return (
            <article
              className="slide"
              style={{
                transform: `translateX(${100 * (slideIndex - currentPerson)}%)`,
                opacity: slideIndex === currentPerson ? 1 : 0,
                visibility: slideIndex === currentPerson ? "visible" : "hidden",
              }}
              key={id}
            >
              <GatsbyImage
                image={backgroundImage.gatsbyImage}
                alt={title}
                className="person-img"
              />
              <h5 className="name">{title}</h5>
              <p className="title">{textArea}</p>
              <a type="button" href={button.location.url}>
                {button.title}
              </a>
            </article>
          );
        })}

        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>

        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    );
  }
};

export default SlideShow;

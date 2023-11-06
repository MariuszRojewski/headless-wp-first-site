import React from "react";
import "./HeroSlider.scss";
import useHeroSliderQuery from "../../hooks/useHeroSliderQuery";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "gatsby";
import { nanoid } from "nanoid";
import "./HeroSlider.scss";

const HeroSlider = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroSliderQuery();
  const [slides, setSlides] = React.useState(Object.values(data));

  function MyNextArrow(props) {
    const { className, style, onClick } = props;
    const handleKeyPress = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        onClick();
      }
    };

    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        role="button"
      >
        <FaAngleRight className="slide-icon" />
      </div>
    );
  }

  function MyPrevArrow(props) {
    const { className, style, onClick } = props;
    const handleKeyPress = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        onClick();
      }
    };

    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        role="button"
      >
        <FaAngleLeft className="slide-icon" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <MyNextArrow />,
    prevArrow: <MyPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  if (slides[0].title !== null && slides[0].subText !== "") {
    return (
      <section className="hero-slider">
        <Slider {...settings}>
          {slides.map((slide) => {
            const id = nanoid();
            const { title, subText, button } = slide;
            const image = getImage(slide.image.gatsbyImage);
            const introText = `${subText.substring(0, 100)}...`;

            return (
              <div key={id} className="slide">
                <GatsbyImage image={image} alt={title} className="slide-img" />
                <div className="slide-center">
                  <h1 className="slide-title">{title}</h1>
                  <p className="slide-text-area">{introText}</p>
                  {button && (
                    <Link
                      className="slide-button"
                      href={button.destination.url}
                    >
                      {button.title}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
};

export default HeroSlider;

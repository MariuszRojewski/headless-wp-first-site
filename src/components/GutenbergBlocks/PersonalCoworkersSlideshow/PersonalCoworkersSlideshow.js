import React from "react";
import { nanoid } from "nanoid";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./style.scss";
import { Link } from "gatsby";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

export const PersonalCoworkersSlideshow = ({
  sliderItems,
  style,
  className,
}) => {
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <MyNextArrow />,
    prevArrow: <MyPrevArrow />,
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

  const mapedCopanySlides = sliderItems.map((slide) => {
    if (slide.image && slide.image.url) {
      if (slide.company_website_link.url) {
        return (
          <div key={nanoid()} title={slide.title} className="slide">
            <Link to={slide.company_website_link.url}>
              <LazyLoadImage
                className="image"
                alt={slide.title ? slide.title : "image"}
                src={slide.image.url}
                effect="blur"
              />
            </Link>
          </div>
        );
      } else {
        return (
          <div key={nanoid()} title={slide.title} className="slide">
            <LazyLoadImage
              className="image"
              alt={slide.title ? slide.title : "image"}
              src={slide.image.url}
              effect="blur"
            />
          </div>
        );
      }
    }
    // Jeśli slide.image lub slide.image.url nie istnieje, zwróć null, aby pominiąć ten element.
    return null;
  });

  return (
    <div style={style} className={className}>
      <div className="cooworkers">
        <Slider {...settings}>{mapedCopanySlides}</Slider>
      </div>
    </div>
  );
};

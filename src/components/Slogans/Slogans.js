import React from "react";
import useSlogansQuery from "../../hooks/useSlogansQuery";
import "./style.scss";

const Slogans = () => {
  const [randomSlogan, setRandomSlogan] = React.useState(null);

  const { wp } = useSlogansQuery();
  const allSlogans = wp.acfOptionsSlogans.slogansRotator.slogans;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  React.useEffect(() => {
    const randomIndex = getRandomInt(allSlogans.length);
    setRandomSlogan(allSlogans[randomIndex]);
  }, [allSlogans]);

  return (
    <div className="slogan">
      {randomSlogan && (
        <blockquote>
          {randomSlogan.label} <cite>- Autor: {randomSlogan.author}</cite>
        </blockquote>
      )}
    </div>
  );
};

export default Slogans;

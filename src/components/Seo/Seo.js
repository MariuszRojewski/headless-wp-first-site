import React from "react";
import useHomePageSiteMetadata from "../../hooks/useHomePageSiteMetadata";

export const Seo = ({ title, description }) => {
  // W WOLENJ CHWILI MOŻNA NAPISAĆ JESZCZE OBSŁUGĘ KEYWORDS

  const data = useHomePageSiteMetadata();
  const generalSettings = data.wp.generalSettings;
  const generalTitle = generalSettings.title
    ? generalSettings.title
    : "Elektroniczny Migacz Online - dla kultury i oświat";
  const generalDescription = generalSettings.description
    ? generalSettings.description
    : "Migacz Online, to dostęp Online to tłuamcza jezyka migowego kiedy tylko chcesz! Migacz dla kultury i oświaty";

  return (
    <>
      <title>{title ? title : generalTitle}</title>
      <meta
        name="description"
        content={description ? description : generalDescription}
      />
    </>
  );
};

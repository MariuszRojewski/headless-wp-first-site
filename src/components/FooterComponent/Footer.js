import React from "react";
import "./style.scss";
import useFooterQuery from "../../hooks/useFooterQuery";
import { nanoid } from "nanoid";
import { Link } from "gatsby";

const Footer = () => {
  const { wp } = useFooterQuery();
  const siteInfoName = wp.acfOptionsFooter.ACF_Footer.siteInfoCol;
  const columns = wp.acfOptionsFooter.ACF_Footer.columns;

  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="single-col site-info">
            {siteInfoName?.name && (
              <h3 className="title">{siteInfoName.name}</h3>
            )}
            {siteInfoName?.copywrite && (
              <p className="text">
                {siteInfoName.copywrite}
                <br />
                <span className="dev-link">
                  {`Realizacja projektu `}
                  {siteInfoName.projectRealisation?.developerSiteLink && (
                    <Link
                      to={siteInfoName.projectRealisation.developerSiteLink}
                    >
                      {siteInfoName.projectRealisation.linkName}
                    </Link>
                  )}
                </span>
              </p>
            )}
          </div>

          {columns.map((item) => {
            const title = item.singleCol.name;
            const textArea = item.singleCol.textArea;

            const links = item.singleCol.linksGroup?.map((el) => {
              const linkTitle = el.link.title;
              const linkUrl = el.link.url;
              return (
                <li key={nanoid()}>
                  <Link to={linkUrl}>{linkTitle}</Link>
                </li>
              );
            });
            return (
              <div className="single-col" key={nanoid()}>
                {title && <h3 className="title">{title}</h3>}
                {textArea && (
                  <p
                    className="text"
                    dangerouslySetInnerHTML={{ __html: textArea }}
                  />
                )}
                {links && <ul className="links">{links}</ul>}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import useLatestBlogPost from "../../hooks/useLatestBlogPost";
import {
  Wrapper,
  LatestRealisation,
  Header,
  StyledGatsbyImage,
  Card,
  CardHeader,
} from "./LatesBlogPost.styles";

function LatestBlogPost() {
  const data = useLatestBlogPost();
  const placeholderImageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "No_Image_Available.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  `);

  const latestRealisation = data.allWpPost.edges.slice(0, 4).map((latest) => {
    const href = latest.node.uri ? `/blog${latest.node.uri}` : "#";

    const image = latest.node.featuredImage
      ? latest.node.featuredImage.node.gatsbyImage
      : placeholderImageData.file.childImageSharp.gatsbyImageData;
    const createImage = getImage(image);

    const imageAltText = latest.node.altText ? latest.node.altText : "";
    const excerpt = latest.node.excerpt;
    const words = excerpt.replace(/(<([^>]+)>)/gi, "").split(" ");
    const shortenedExcerpt = `<p class="intro-text">${words
      .slice(0, 15)
      .join(" ")}...</p>`;

    return (
      <Link className="CardWrapper" to={href} key={latest.node.id}>
        <LatestRealisation>
          <StyledGatsbyImage image={createImage} alt={imageAltText} />
          <Card>
            <CardHeader>{latest.node.title}</CardHeader>
            <div
              dangerouslySetInnerHTML={{
                __html: shortenedExcerpt,
              }}
            />
            <button>Czytaj więcej...</button>
          </Card>
        </LatestRealisation>
      </Link>
    );
  });

  return (
    <>
      <Header>Latest Blog Post</Header>
      <Wrapper>{latestRealisation}</Wrapper>
    </>
  );
}

export default LatestBlogPost;

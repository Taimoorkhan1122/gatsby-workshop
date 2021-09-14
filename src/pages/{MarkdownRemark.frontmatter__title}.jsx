import { graphql } from "gatsby";
import React from "react";

export default function Post(props) {
  const {data} = props;
  // console.log(data);
  return (
    <div>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}></div>
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      __typename
      frontmatter {
        title
      }
      html
    }
  }
`;

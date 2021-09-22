import React from "react";
import { graphql } from "gatsby";
import SanityBlockContent from "@sanity/block-content-to-react";
import Image from "gatsby-plugin-sanity-image";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const serializers = {
  types: {
    blocks: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
      }

      // Fall back to default handling
      return SanityBlockContent.defaultSerializers.types.block(props);
    },
    localeBlockContent: (props) => {
      return props.node.en.map(child => <div>{child.children[0].text}</div>);
    },
    code: (props) =>
      console.log("code block", props) || (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
  },
  list: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    )),
  listItem: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    )),
  marks: {
    strong: (props) =>
      console.log("strong", props) || <strong>{props.children}</strong>,
    em: (props) => console.log("em", props) || <em>{props.children}</em>,
    code: (props) =>
      console.log("code", props) || <code>{props.children}</code>,
  },
};


export default function Products(props) {
  const { data } = props;
  console.log(
    "from Sanity => ",
    data
  );
  return (
    <div>
      <h2>{data.sanityProduct.title}</h2>
      <SanityBlockContent
        blocks={data.sanityProduct.body}
        dataset="production"
        projectId="i6qciz63"
        serializers={serializers}
      />

      <StaticImage
      blurredOptions={true}
        src={`https://cdn.sanity.io/images/i6qciz63/production/40e5221d61bf4868ab175fcadfc0ea346d7d8283-1000x1000.png`}
        alt="gummy bears"
      />

      <Image
        asset={data.sanityProduct.defaultProductVariant._rawImages[0].asset}
        sources={data.sanityProduct.defaultProductVariant._rawImages}
        // sources={data.sanityProduct.defaultProductVariant.images}
      />
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    sanityProduct(id: { eq: $id }) {
      title
      id
      body {
        _key
        _type
        _rawEn
        _rawEs
        _rawNb
        en {
          children {
            text
          }
        }
      }
      defaultProductVariant {
      _rawImages 
    } 
    }
  }
`;

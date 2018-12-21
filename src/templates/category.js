import React from 'react'
import { graphql } from "gatsby"


export default ({data}) => {
    let cat = data.categoriesJson
    let products = data.allProductsJson ? data.allProductsJson.edges : []
    console.log(products)
    return <div>
        <h2>{cat.title}</h2>
        <ul>
            {products.map(({node}) => <li key={node.sku}>
                    <h4>{node.sku}</h4>
                    <img src={node.feature}/>
                    <dl>
                        {node.variants.map(({name, price}) => <>
                                <dt>{name}</dt>
                                <dd>{(parseFloat(price)/100).toFixed(2)}</dd>
                            </>
                        )}
                    </dl>
                </li>
            )}
        </ul>
    </div>
}

export const query = graphql`
query($title: String!) {
  categoriesJson(title: {eq: $title}) {
        internal {
          type
        }
        fields {
          slug
        }
        id
        title
  }
  allProductsJson(filter: {category: {eq: $title}}) {
    edges {
      node {
        id
        sku
        feature
        category
        internal {
          type
        }
        variants {
          name
          price
        }
      }
    }
  }
}`

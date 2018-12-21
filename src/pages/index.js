import React from "react"
import {Link} from 'gatsby'

export default ({ data }) => <div>
<ul>
    {data.allCategoriesJson.edges.map(({node}) => 
        <li key={node.id}>
            <Link to={node.fields.slug}>{node.title}</Link>
        </li>
     )}
</ul>
</div>

export const query = graphql`
  query {
    allCategoriesJson {
      edges {
        node {
          id
          fields {
            slug
          }
          title
        }
      }
    }
  }
`

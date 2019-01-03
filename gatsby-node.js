const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

/*exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `CategoriesJson`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/*exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allCategoriesJson {
          edges {
            node {
                fields {
                  slug
                }
                id
                title
            }
          }
        }
      }
    `
).then(result => {
      result.data.allCategoriesJson.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            title: node.title,
          },
        })
      })
      resolve()
    })
  })
}*/

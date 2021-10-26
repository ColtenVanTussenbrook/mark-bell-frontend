/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const PhotoTemplate = path.resolve("./src/templates/PhotoTemplate.js")
  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const PhotoPages = result.data.allWpPost.edges
  PhotoPages.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: PhotoTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}

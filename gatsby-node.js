/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const PhotoTemplate = path.resolve("./src/templates/PhotoTemplate.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const PhotoPages = result.data.allWordpressPost.edges
  PhotoPages.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: PhotoTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })
}

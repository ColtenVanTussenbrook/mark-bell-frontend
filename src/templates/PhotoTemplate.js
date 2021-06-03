import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function PhotoTemplate ({ data }) {   
  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const photos = data.wordpressPost.acf.photos;
  let key = 0;

  if (data) {
    return(
      <Layout>
          <div className="mt-14 px-8 md:px-0">
            <div className="md:hidden text-mb-blue-nav text-xl">
              {data.wordpressPost.title}
            </div>
            <Slider {...settings} className="slider-images">
              {photos.map(photo => {
                key++;
                const showPhoto = getImage(photo.photo.localFile)
                return (
                  <GatsbyImage image={showPhoto} width="750" alt="portraits of saying goodbye photo" key={key} />
                )
              })
              }
            </Slider>
          </div>
      </Layout>
    )
  }
  
  
}
export default PhotoTemplate;

export const query = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
          title
          acf {
            photos {
              photo {
                source_url
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 750
                      placeholder: BLURRED
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
    }
`
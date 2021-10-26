import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function PhotoTemplate ({ data }) { 
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const photos = data.wpPost.photos.photos;
  let key = 0;

  if (data) {
    return(
      <Layout>
          <div className="mt-14 px-8 pt-4 md:pt-0 md:px-0">
            <div className="md:hidden text-mb-blue-nav text-xl">
              {data.wpPost.title}
            </div>
            <Slider {...settings} className="slider-images">
              {photos.map(photo => {
                key++;
                const showPhoto = getImage(photo.photo.localFile)
                return (
                  <GatsbyImage image={showPhoto} alt="portraits of saying goodbye photo" key={key} />
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
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      photos {
        photos {
          photo {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 525
                  height: 700
                  quality: 100
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

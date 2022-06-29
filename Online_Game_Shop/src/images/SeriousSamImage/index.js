import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import {fill} from './layout.module.css'

const SeriousSamImage = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "Serious_Sam_home_page.jpg" }) {
       childImageSharp {
         gatsbyImageData(layout: CONSTRAINED
            )
       }
     }
   }
 `)
 return <div className={fill}><GatsbyImage image={data.myImage.childImageSharp.gatsbyImageData}/></div>
}

export default SeriousSamImage
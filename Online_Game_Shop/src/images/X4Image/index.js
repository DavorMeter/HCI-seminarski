import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import {fill} from './layout.module.css'

const X4Image = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "X4_Foundations_home_page.jpg" }) {
       childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 345
            height: 200
          )
       }
     }
   }
 `)
 return <div  className={fill}><GatsbyImage image={data.myImage.childImageSharp.gatsbyImageData}/></div>
}

export default X4Image
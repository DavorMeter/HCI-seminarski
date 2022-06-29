import React from "react"
import HomePage from "../components/HomePage"
import HeaderFooterLayout from "../layouts/headerFooter"
import HadesImage from "../images/HadesImage"
import SeriousSamImage from "../images/SeriousSamImage"
import X4Image from "../images/X4Image"

const IndexPage = () => (
  <HeaderFooterLayout activeTab='HOME'>
    <HomePage hades_image={<HadesImage/>} serious_sam_image={<SeriousSamImage/>} x4_image={<X4Image/>} />
  </HeaderFooterLayout>
)
export default IndexPage
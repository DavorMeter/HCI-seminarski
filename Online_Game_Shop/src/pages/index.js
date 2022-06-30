import React from "react"
import HomePage from "../components/HomePage"
import HeaderFooterLayout from "../layouts/headerFooter"
import HadesImage from "../images/HadesImage"
import SeriousSamImage from "../images/SeriousSamImage"
import X4Image from "../images/X4Image"
import NFSImage from "../images/NFSImage"

const IndexPage = () => (
  <HeaderFooterLayout activeTab='HOME'>
    <HomePage hades_image={<HadesImage/>} serious_sam_image={<SeriousSamImage/>} x4_image={<X4Image/>} nfs_image={<NFSImage/>} />
  </HeaderFooterLayout>
)
export default IndexPage
import React from "react";
import HeaderFooterLayout from "../layouts/headerFooter";
import StorePageSection from "../components/StorePage";

const StorePage = () => (
    <HeaderFooterLayout activeTab="STORE" >
        <StorePageSection/>
    </HeaderFooterLayout>
)

export default StorePage
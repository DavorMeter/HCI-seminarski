import React from "react";
import {
    container,
    grid_container,
    picture_thumbnail,
    title_and_tags,
    title_font,
    tags_font,
    price_box,
} from './layout.module.css'
import { storePageItems } from "../../constansts/const";
import PriceBox from "../PriceBox";

const StorePageTemplateForItems = () => (
    
    <div className={container}>
        {
        storePageItems.map(({thumbnail,title,tags,discount,full_price}) => {
        
        return(<div className={grid_container}>
            <div  className={picture_thumbnail} >
                <img src={thumbnail} alt="thumb" ></img>
            </div>
            <div className={title_and_tags}>
                <div className={title_font}>
                    {title}
                </div>
                <div className={tags_font}>
                    {tags[0]}, {tags[1]}
                </div>
            </div>
            <div className={price_box}>
                <PriceBox discount={discount} full_price={full_price}/>
            </div>
        </div>)
        })
    }
    </div>

)
export default StorePageTemplateForItems
import React from 'react'
import{
    container,
    hades_place,
    hades_info,
    hades_picture,
    hades_text,
    hades_pricebox,
    splitter,
    serious_sam_place,
    serious_sam_info,
    serious_sam_picture,
    serious_sam_text,
    serious_sam_pricebox,
    dvijeIgre,
    x4_place,
    x4_info,
    x4_picture,
    x4_text,
    igra3,
    percent_off_box,
    prices_box,
    old_price,
    new_price,
    full_price_box,
    full_price
} from './layout.module.css'

const HomePage = ({hades_image,serious_sam_image,x4_image}) => (
    <div className={container}>
        <div className={hades_place}>
            <div className={hades_picture}>
                {hades_image}
            </div>
            <div className={hades_info}>
                <div className={hades_text}>
                    HADES
                </div>
                <div className={hades_pricebox}>
                    <div className={percent_off_box}>
                        -50%
                    </div>
                    <div className={prices_box}>
                        <div className={old_price}>
                            20.99&euro;
                        </div>
                        <div className={new_price}>
                            10.49&euro;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={splitter}>
            <div className={serious_sam_place}>
                <div className={serious_sam_picture}>
                    {serious_sam_image}
                </div>
                <div className={serious_sam_info}>
                    <div className={serious_sam_text}>
                        Serious Sam: The First Encounter
                    </div>
                    <div className={serious_sam_pricebox}>
                        <div className={percent_off_box}>
                            -25%
                        </div>
                        <div className={prices_box}>
                            <div className={old_price}>
                                14.99&euro;
                            </div>
                            <div className={new_price}>
                                11.25&euro;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={dvijeIgre}>
                <div className={x4_place}>
                    <div className={x4_picture}>
                        {x4_image}
                    </div>
                    <div className={x4_info}>
                        <div className={x4_text}>
                            X4: Foundations
                        </div>
                        <div className={full_price_box}>
                            <div className={full_price}>
                                49.99&euro;
                            </div>
                        </div>
                    </div>
                </div>
                <div className={igra3}></div>
            </div>
        </div>
    </div>
)

export default HomePage
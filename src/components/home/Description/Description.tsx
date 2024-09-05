"use client"

import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';

const PLACEHOLDERIMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyle = cx('Description__button',{

        'Description__button--border': hasBorder,
    })

    console.log(buttonStyle);
    
    return(

        <section className={styles.Description}>

            <button onClick={handleClick} className={buttonStyle}>

                <div className={styles.Description__imageContainer}>

                    <Image 

                        src="/images/description.jpeg" 
                        alt="products marketplace" 
                        fill
                        placeholder='blur'
                        blurDataURL= {PLACEHOLDERIMAGE}
                    />  
                </div>

            </button>
               
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}
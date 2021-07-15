import DesignStyles from '../styles/Design.module.css'
import Image from 'next/image'
export default function Card() {
    return (
        <div className={DesignStyles.svgImage}>
        {/* {<img
            src="/images/design-mobile.svg" 
            srcSet="
            /images/design-desktop.svg 920w,
            /images/design-mobile.svg 327w
            "
            sizes="(min-width: 920px) 920px, 327px"
            alt="design"
            />} */}
        </div>
        
    )
}
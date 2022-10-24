import PropTypes from 'prop-types';
import {useState,forwardRef} from 'react'
import image from '~/assets/image'
import classNames from 'classnames'
import styles from './Image.module.scss'

// Chuyen thanh es6

const Image = forwardRef(({src,alt,className,fallback: customFallBack = image.noImage ,...props},ref) => {

    const [fallback,setFallBack] = useState('')
    const handleError = ()=>{
        setFallBack(customFallBack)
    }
    return ( 
        <img 
            ref = {ref} 
            className = {classNames(styles.wrapper,className)}
            src={fallback || src} 
            alt={alt} 
            {...props}
            onError = {handleError}
        />
     );
})

Image.propTypes={
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;
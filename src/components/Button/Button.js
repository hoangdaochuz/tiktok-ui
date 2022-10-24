import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

function Button({ 
    to, 
    href, 
    onClick, 
    primary, 
    outline, 
    rounded = false, 
    small = false, 
    large = false, 
    text = false, 
    disabled = false, 
    children, 
    className, 
    LeftIcon, 
    RightIcon, 
    ...passProps
 }) {


    // Mac dinh la button. Nhung khi button do chua link den 1 web khac hoac den 1 page khac trong web thi no khong con la button nua
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    Object.keys(props).forEach(key => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key]
        }
    })
    if (to) {
        props.to = to;
        Comp = Link
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        small,
        large,
        text,
        disabled,
        LeftIcon,
        RightIcon,

    })

    return (<Comp className={classes} onClick={onClick} {...props}>
        {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
    </Comp>);
}

Button.propTypes={
    to: PropTypes.string,
    href:   PropTypes.string,
    onClick:    PropTypes.func,
    primary:    PropTypes.bool,
    outline:    PropTypes.bool,
    rounded:    PropTypes.bool,
    small:  PropTypes.bool,
    large:  PropTypes.bool,
    text:   PropTypes.bool,
    disabled:   PropTypes.bool,
    children:   PropTypes.node.isRequired,
    className:  PropTypes.string,
    LeftIcon:   PropTypes.node,
    RightIcon:  PropTypes.node,
}

export default Button;
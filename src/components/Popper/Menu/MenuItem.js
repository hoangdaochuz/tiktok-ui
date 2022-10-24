import PropTypes from 'prop-types';
import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({item, onClick}) {
    const classes = cx('menu-item',{
        separate: item.separate
    })
    return ( 
        <Button className= {cx(classes)} to = {item.to}  LeftIcon={item.icon} onClick={onClick}>
            {item.title}
        </Button>
     );
}
MenuItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
}

export default MenuItem;
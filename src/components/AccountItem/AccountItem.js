import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image'
import {Link} from 'react-router-dom'
const cx = classNames.bind(styles)

function AccountItem({data}) {
    return ( <Link to = {`@${data.nickname}`} className={cx('wrapper')}>
        <Image className = {cx('avatar')} 
            src= {data.avatar}
            alt={data.full_name} />
        <div className = {cx('info')}>
            <h4 className = {cx('name')}>
                {data.nickname}
                {data.tick && <FontAwesomeIcon className = {cx('check')}icon={faCheckCircle}/>}
            </h4>
            <p className = {cx('user-name')}>{data.full_name} </p>
        </div>
    </Link> );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;
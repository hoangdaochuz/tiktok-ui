import className from 'classnames/bind'
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles)  

function AccountPreview({data}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar}
                        alt={data.nickname}/>
                <Button small className={cx('follow-btn')} primary children='Follow'/>
            </div>

            <div className = {cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick&& <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </h4>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>

            <div className={cx('footer')}>
                <span className={cx('value')}>
                    <strong>{data.followers_count} </strong>
                </span>
                <span className={cx('info')}>Followers</span>

                <span className={cx('value')}>
                    <strong>{data.likes_count}</strong>
                </span>
                <span className={cx('info')}>Likes</span>
            </div>
        
        </div>
    );
}

export default AccountPreview;
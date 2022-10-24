import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Popper'

import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './SuggestAccount.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';

const cx  = className.bind(styles)

function AccountItem({data}) {
    const renderPreviewAccount = (props)=>{
        
        return (
            <div className={cx('preview')} tabIndex = '-1' {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}/>
                </PopperWrapper>
            </div>

        )
        
    }


    return ( 
        <div>
            <Tippy
                interactive
                delay={[800,0]}
                render = {renderPreviewAccount}
                placement="bottom-start"
                offset={[-8,3]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick&& <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                        </h4>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object
}

export default AccountItem;
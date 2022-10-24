import classNames from "classnames/bind";
import styles from './Modal.module.scss';

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function HeaderModal({title, onBack}) {
    return ( 
        <div className={cx('header-wrapper')}>
            <button className = {cx('header-btn-box')} onClick={onBack}>
                <FontAwesomeIcon className={cx('header-btn')} icon = {faAngleLeft}/>
            </button>
            <h2 className={cx('header-modal-title')}>{title}</h2>
        </div>
    );
}

export default HeaderModal;
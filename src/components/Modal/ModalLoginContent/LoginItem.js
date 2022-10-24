import { faQrcode, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './ModalLoginContent.module.scss'

const cx = classNames.bind(styles);

function LoginItem({item, onClick}) {
    if(item.qrImage){
        return (
            <div className={cx('login-by-qr-wrapper')}>
                <div className={cx('qrImageBox')}>
                    <img className={cx('qrImage')} srcSet={item.qrImage}/>
                    <div className={cx('qr-description')}>
                        <ol className={cx('qr-desc-list-step')}>
                            <li className={cx('qr-desc-step')}>Open the TikTok app on your mobile device</li>
                            <li className={cx('qr-desc-step')}>On Profile, tap &nbsp;
                                <FontAwesomeIcon icon={faUserPlus}/>
                            </li>
                            <li className={cx('qr-desc-step')}>Tap &nbsp; 
                                <FontAwesomeIcon icon={faQrcode}/>
                                &nbsp;
                                  and scan the QR code to confirm your login</li>
                        </ol>
                    </div>
                </div>
                <div className={cx('gif-box')}>
                    <img className={cx('gif-item')} srcSet={item.gif}/>
                </div>
            </div>
        )
    }

    if(item.code==="email/phone/username"){
        return (

            <div className={cx('login-by-username-wrapper')}>
                <div className={cx('login-label-wrapper')}>
                    <strong>Phone</strong>
                    <a>Log in with email or username</a>
                </div>
                <div className={cx('login-form-wrapper')}>
                    <input className={cx('login-input')} placeholder="Phone number"/>
                    <input type={'password'} className={cx('login-input')} placeholder="Password"/>
                    <div className={cx('more-option-box')}>
                        <p className={cx('more-option-item')}>Forgot password?</p>
                        <span className={cx('separate')}>| &nbsp; &nbsp; </span>
                        <p className={cx('more-option-item')}>Log in with code</p>
                    </div>
                </div>

                <Button className={cx('log-in-btn')} primary={true}>Log in</Button>
            </div>
        )
    }


    return (
        <div className={cx('login-item')} onClick={onClick}>
            {item.icon}
            <h4 className={cx('login-item-title')}>{item.title}</h4>
        </div>
    )
}

export default LoginItem;
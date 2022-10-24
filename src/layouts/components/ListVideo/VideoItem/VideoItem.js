import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCheckCircle, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { AppleIcon,FacebookIcon,GoogleIcon,InstagramIcon, KakaoTalkIcon,LineIcon, QRcodeIcon,TweeterIcon,UserGroupIcon } from '~/components/Icon';

import classNames from "classnames/bind";
import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from './VideoItem.module.scss';
import Modal from "~/components/Modal";
import ModalLoginContent from "~/components/Modal/ModalLoginContent";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx  = classNames.bind(styles)
function VideoItem({srcImg,nickname,first_name, last_name, desc, srcVid, music,tick, like_count, comment_count, share_count}) {
    // console.log(nickname);

    const currentUser = false;

    const openModal = ()=>{
        setOpenModal(true);
    }

    const closeModal = ()=>{
        setOpenModal(false);
    }

    const [isOpenModal, setOpenModal] = useState(false);

    const LOGIN_LIST = [
        {
            title: "Use QR code",
            icon: <QRcodeIcon className={cx('login-icon')}/>,
            children: {
                heading: "Log in with QR code",
                data:[
                    {
                        code: 'qr',
                        qrImage: 'https://download.appmifile.com/896_updatepdf_in/01/04/2019/cf633a79-d2a8-4ee5-8cc9-6e90debe7236.png',
                        gif: 'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif',
                        // desc: 
                        
                    }
               ]
            }
        
        },
        {
            title: "Use phone/email/username",
            icon: <UserGroupIcon className={cx('login-icon')}/>,
            children:{
                heading: "Login",
                data:[{
                    code:'email/phone/username',
                }]
            }
        },
        {
            title: "Continue with Facebook",
            icon: <FacebookIcon className={cx('login-icon')}/>
        
        },
        {
            title: "Continue with Google",
            icon: <GoogleIcon className={cx('login-icon')}/>
        
        },
        {
            title: "Continue with Twitter",
            icon: <TweeterIcon className={cx('login-icon')}/>
        
        },
        {
            title: "Continue with Line",
            icon: <LineIcon className={cx('login-icon')}/>
        
        },
        {
            title: "Continue with KakaoTalk",
            icon: <KakaoTalkIcon className={cx('login-icon')}/>
        
        },
        {
            title: "Continue with Apple",
            icon: <AppleIcon className={cx('login-icon')}/>
        
        },
        {
            title: "Continue with Instagram",
            icon: <InstagramIcon className={cx('login-icon')}/>
        
        },
    
    ]
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <div className={cx('account-container')}>
                    <div className={cx('avatar-box')}>
                        <Image className={cx('avatar-img')} src={srcImg}/>
                    </div>
                    <div className={cx('info-wrapper')}>
                        <div className={cx('account-info')}>
                            <h3 className={cx('nickname')}>{nickname}{tick && <FontAwesomeIcon className={cx('check-icon')}  icon={faCheckCircle}/>}
                            </h3>
                            <span className={cx('first_last_name')}>{first_name} {last_name}</span>
                        </div>
                        <p className={cx('video-des')}>{desc}</p>
                    </div>
                </div>
                {currentUser?<Button children="Follow" outline={true}/>:<Button children="Follow" outline={true} onClick={openModal}/>}
                <Modal
                    isOpen={isOpenModal}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                >
                    <ModalLoginContent data={LOGIN_LIST}/>
                </Modal>
            </div>

            <div className={cx('music-background-box')}>
                <h4 className={cx('music-title')}>
                    <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                    <a className={cx('music-background-link')} href="#">nhạc nền - {music}</a>
                </h4>
            </div>

            <div className={cx('video-container')}>
                <video className={cx('video-item')} width="290px" height="516px" controls>
                    <source src={srcVid} type="video/mp4"></source>
                    <source src={srcVid} type="video/ogg"></source>
                </video>
                <div className={cx('video-react-container')}>
                    <div className={cx('react-container')}>
                        <div className={cx('icon-react-box')}>
                            <FontAwesomeIcon className={cx('icon-react')} icon={faHeart}/>
                        </div>
                        <div className={cx('quantity-react-box')}>
                            <p className={cx('quantity-react')}>{like_count}</p>
                        </div>
                    </div>
                    <div className={cx('react-container')}>
                        <div className={cx('icon-react-box')}>
                            <FontAwesomeIcon className={cx('icon-react')} icon={faCommentDots}/>
                        
                        </div>
                        <div className={cx('quantity-react-box')}>
                            <p className={cx('quantity-react')}>{comment_count}</p>
                        </div>
                    </div>
                    <div className={cx('react-container')}>
                        <div className={cx('icon-react-box')}>
                            <FontAwesomeIcon className={cx('icon-react')} icon={faShare}/>
                        </div>
                        <div className={cx('quantity-react-box')}>
                            <p className={cx('quantity-react')}>{share_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
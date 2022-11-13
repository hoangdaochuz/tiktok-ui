import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import image from '~/assets/image'


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

import Menu from '~/components/Popper/Menu'
import Button from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faKeyboard, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { AppleIcon,FacebookIcon, GetCoin, GoogleIcon, InboxIcon, InstagramIcon, KakaoTalkIcon, Language, LineIcon, MessageIcon, Profile, QRcodeIcon, Setting, TweeterIcon, UploadIcon, UserGroupIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search'
import config from '~/config'
import Modal from '~/components/Modal'
import ModalLoginContent from '~/components/Modal/ModalLoginContent';

const cx = classNames.bind(styles)





const LOGIN_MODAL = 'LOGIN_MODAL'

function Header() {
    const [modal, setIsOpen] = useState(null);

    function showLoginModal() {
        setIsOpen(LOGIN_MODAL);
    }
    
    
    function closeLoginModal() {
        setIsOpen(null);
    }

    const currentUser = false

    const MENU_ITEMS = [
        {
            title: 'English',
            icon: <Language />,
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'Language',
                        code: 'vi',
                        title: 'Tiếng Việt'
                    },
                    {
                        type: 'Language',
                        code: 'en',
                        title: 'English'
                    },

                ]
            }
        },
        {
            title: 'Feedback and help',
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            to: '/feedback'
        },

        {
            title: 'Keyboard shortcuts',
            icon: <FontAwesomeIcon icon={faKeyboard} />
        },


    ]

    const MENU_USER = [
        {
            title: 'View profile',
            icon: <Profile />,
            to: '/profile'
        },
        {
            title: 'Get coins',
            icon: <GetCoin />,
            to: '/coin'
        },
        {
            title: 'Setting',
            icon: <Setting />,
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <FontAwesomeIcon icon={faSignOut} />,
            to: '/logout',
            separate: true,
        },

    ]

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

    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={config.routers.home} className={cx('logo-link')}><img src={image.logo} alt={"TikTok"} /></Link>
            </div>
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy
                            content="Upload video"
                            placement="bottom-end"
                            delay={[0, 100]}
                        >
                            <button className={cx("action-btn")}>
                                <UploadIcon />
                            </button>

                        </Tippy>

                        <Tippy
                            content="Message"
                            delay={[0, 100]}
                            placement="bottom"
                        >

                            <button className={cx("action-btn")}>
                                <MessageIcon />
                            </button>
                        </Tippy>

                        <Tippy
                            content="Inbox"
                            delay={[0, 100]}
                            placement="bottom-start"
                        >
                            <button className={cx("action-btn")}>
                                <InboxIcon />
                                <span className={cx("badge")}>2</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        
                        <Button text onClick={showLoginModal}>Upload</Button>
                        <Button primary onClick={showLoginModal} >Log in</Button>

                    </>
                )}
                <Menu data={currentUser ? MENU_USER : MENU_ITEMS}>
                    {currentUser ? (
                        <Image
                            className={cx('avatar-user')}
                            src=""
                            alt="Nguyen Huu Khai"
                            fallback="https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg"
                        />
                    ) : (

                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
        <Modal
            isOpen={modal===LOGIN_MODAL}
            onRequestClose={closeLoginModal}
            shouldCloseOnOverlayClick={false}
        >

            
            {/* <div className={cx('login-modal')}>
                <div className={cx('login-container')}>
                    <div className={cx('login-wrapper')}>
                        <div className={cx('login-heading')}>
                            <h3 className={cx('login-text')}>Log in to TikTok</h3>
                        </div>
                        <div className={cx('login-item')}>
                            <QRcodeIcon className={cx('login-icon')}/>
                            <h4 className={cx('login-item-title')}>Use QR code</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <Profile className={cx('login-icon')}/>
                            <h4 className={cx('login-item-title')}>Use phone / email / username</h4>
                        </div>
                        <div className={cx('login-item')}>
                            
                            <FacebookIcon className={cx('login-icon')}/>
                            <h4 className={cx('login-item-title')}>Continue with Facebook</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <GoogleIcon className={cx('login-icon')}/>
                            
                            <h4 className={cx('login-item-title')}>Continue with Google</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <TweeterIcon className={cx('login-icon')}/>
                            <h4 className={cx('login-item-title')}>Continue with Twitter</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <LineIcon className={cx('login-icon')}/>
                            <h4 className={cx('login-item-title')}>Continue with LINE</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <KakaoTalkIcon className={cx('login-icon')}/>
                            <h4 className={cx('login-item-title')}>Continue with KakaoTalk</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <AppleIcon className={cx('login-icon')}/>
                            
                            <h4 className={cx('login-item-title')}>Continue with Apple</h4>
                        </div>
                        <div className={cx('login-item')}>
                            <InstagramIcon className={cx('login-icon')}/>
                            
                            <h4 className={cx('login-item-title')}>Continue with Instagram</h4>
                        </div>

                        
                    </div>
                    
                </div>

                <div className = {cx('login-footer')}>
                    <p>Don’t have an account?
                        <span> </span>
                        <span className={cx('signup-text')}>Sign up</span>
                    </p>
                </div>
                
            </div> */}
            {/* <LoginAccount/> */}
            <ModalLoginContent data={LOGIN_LIST}/>
        </Modal>

    </header>);
}

export default Header;
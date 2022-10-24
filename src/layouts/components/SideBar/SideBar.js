import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import Menu from './Menu'
import {MenuItem} from './Menu'
import config from '~/config'
import { HomeIcon,HomeActiveIcon,UserGroupIcon,UserGroupActiveIcon,LiveIcon,LiveActiveIcon } from '~/components/Icon'
import { AppleIcon,FacebookIcon,GoogleIcon,InstagramIcon, KakaoTalkIcon,LineIcon, QRcodeIcon, TweeterIcon} from '~/components/Icon';
import SuggestAccount from '~/components/SuggestAccount'
import FollowingAccount from '~/components/SuggestAccount/FollowingAccount'
import Button from '~/components/Button'
import { useState } from 'react'
import Modal from '~/components/Modal'
import ModalLoginContent from '~/components/Modal/ModalLoginContent'
const cx = classNames.bind(styles)

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

function SideBar() {

    const openModal = ()=>{
        setOpenModal(true)
    }

    const closeModal = ()=>{
        setOpenModal(false)
    }

    const currentUser = false;
    const [isOpenModal, setOpenModal] = useState(false);
    return ( <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem
                title="For You"
                to= {config.routers.home}
                icon={<HomeIcon/>}
                activeIcon = {<HomeActiveIcon/>}
            />
            <MenuItem
                title="Following"
                to={config.routers.following}
                icon = {<UserGroupIcon/>}
                activeIcon={<UserGroupActiveIcon/>}    
            />
            <MenuItem
                title="Live"
                to={config.routers.live}
                icon={<LiveIcon/>}
                activeIcon={<LiveActiveIcon/>}
            />
        </Menu>
        {currentUser?(
            <>
                <SuggestAccount label = 'Suggested accounts'/>
                <SuggestAccount label = 'Following accounts'/>
            
            </>
        ):(
            <>
                <div className = {cx('sidebar-login')}>
                    <p className = {cx('sidebar-text')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button className={cx('sidebar-login-btn')} large outline onClick={openModal}>Login</Button>
                </div>
                <SuggestAccount label = 'Suggested accounts'/>
                <Modal
                    isOpen={isOpenModal}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                >
                    <ModalLoginContent data={LOGIN_LIST}/>
                </Modal>

            </>)}

        {/* <div className = {cx('sidebar-login')}>
            <p className = {cx('sidebar-text')}>Log in to follow creators, like videos, and view comments.</p>
            <Button className={cx('sidebar-login-btn')} large outline>Login</Button>
        </div>
        <SuggestAccount label = 'Suggested accounts'/>
        <SuggestAccount label = 'Following accounts'/> */}
    </aside> );
}

export default SideBar;
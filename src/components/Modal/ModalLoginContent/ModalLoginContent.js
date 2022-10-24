import classNames from "classnames/bind";
import styles from './ModalLoginContent.module.scss'
import { useState } from "react";
import Modal from '~/components/Modal/Modal'
import { AppleIcon, CloseIcon, FacebookIcon, GoogleIcon, InstagramIcon, KakaoTalkIcon,  LineIcon,  Profile, QRcodeIcon,  TweeterIcon} from '~/components/Icon';
import Header from "~/components/Popper/Menu/Header";
import LoginItem from './LoginItem'
import HeaderModal from "../HeaderModal";


const cx = classNames.bind(styles)

const defaultFn = ()=>{}
function ModalLoginContent({data=[], onChange = defaultFn}) {

    // function openModal() {
    //     setIsOpen(true);
    // }
    // Phan viet them (Co the sai):
    const [history, setHistory] = useState([{data: data}])

    const current = history[history.length - 1]
    const renderLoginItem = ()=>{

        return current.data.map((item, index)=>{
            const isParent = !!item.children
            return <LoginItem item={item} key={index} onClick={()=>{
                if(isParent){
                    console.log(1)
                    console.log(item.children)
                    setHistory((prev)=>[...prev, item.children])
                    console.log(history)
                }else{
                    onChange(item)
                }   
            }}/>
        })
    }

    const handleBack = ()=>{
        setHistory((prev)=>prev.slice(0, history.length-1))
    }

    return (
        
            
            <>
                <div className={cx('login-modal')}>
                    <div className={cx('login-container')}>
                        <div className={cx('login-wrapper')}>
                            <div className={cx('login-heading')}>
                                {history.length>1? <HeaderModal onBack={handleBack} title={current.heading}/>:<h3 className={cx('login-text')}>Log in to TikTok</h3>}
                                {/* <h3 className={cx('login-text')}>Log in to TikTok</h3> */}
                            </div>

                            {renderLoginItem()}
                            {/* <div className={cx('login-item')}>
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
                            </div> */}
                            
                        </div>
                    </div>
                    <div className = {cx('login-footer')}>
                        <p>Don’t have an account?
                            <span> </span>
                            <span className={cx('signup-text')}>Sign up</span>
                        </p>
                    </div>
                </div>
            </>
       

    )
}

export default ModalLoginContent;
import {useRef, useState, useEffect, useCallback} from 'react'

import classNames from "classnames/bind";
import styles from './Modal.module.scss'

import Portal from '~/components/Portal'
import { CloseIcon } from "~/components/Icon";
const cx = classNames.bind(styles)

const defaultFn = ()=>{}

function Modal({ isOpen, children, containerID, shouldCloseOnOverlayClick=true,onRequestClose = defaultFn }) {

    const containerRef = useRef()
    const [closing, setClosing] = useState(false)

    const handleRequestClose = useCallback(()=>{
        setClosing(true)
        containerRef.current.addEventListener('animationend',()=>{
            setClosing(false)
            onRequestClose();
        }, {once: true})
    },[onRequestClose])

    useEffect(()=>{
        const handleKeyDown = (e)=>{
            if(isOpen && e.key==='Escape'){
                handleRequestClose();
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return ()=>{
            document.removeEventListener('keydown', handleKeyDown)
        }
    },[isOpen,handleRequestClose])

    if (!isOpen) {
        return null;
    }

    return (
        <Portal
            containerID={containerID}
        >
            <div className={cx('wrapper',{closing})}>
                <div className={cx('overlay')} onClick={shouldCloseOnOverlayClick?handleRequestClose:defaultFn}></div>
                <div ref={containerRef} className={cx('container')}>
                    <div className={cx('close-wrapper')} onClick={handleRequestClose}>
                        <CloseIcon className={cx('close-icon')}/>
                    </div>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal;
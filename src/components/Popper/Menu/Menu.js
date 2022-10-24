import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';


const cx = classNames.bind(styles)
const defaultFn = ()=>{}


function Menu({children, data = [],hideOnClick = false, onChange = defaultFn}) {
    const [history,setHistory] = useState([{data: data}])
    const current = history[history.length - 1]
    const renderItem = ()=>{
        return current.data.map((item,index)=>{
            const isParent = !! item.children
            return <MenuItem item={item} key={index} onClick={
                ()=>{
                    if(isParent) {
                        setHistory((prev)=>[...prev,item.children])
                    }else{
                        onChange(item)
                    }
                }
            }/>
        })
    }

    const handleResetMenu = ()=>{
        setHistory((prev)=>prev.slice(0,1))
    }
    const handleBack = ()=>{
        
        setHistory((prev)=>prev.slice(0, prev.length-1));
        
    }

    return ( 

        
        <Tippy
                interactive = {true}
                placement = 'bottom-end'
                hideOnClick = {hideOnClick}
                delay={[0,500]}
                render={attrs=>(
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className = {cx('menu-popper')}>
                            {history.length>1 && <Header 
                                    title={current.title}
                                    onBack={handleBack}
                                />}
                            
                            <div className = {cx('menu-body')}>{renderItem()}</div>
                        </PopperWrapper>
                    </div>
                )}
                onHide = {handleResetMenu}
            >
                
                {children}  
            </Tippy>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;
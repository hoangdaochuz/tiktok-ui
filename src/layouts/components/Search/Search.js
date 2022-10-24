
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner} from '@fortawesome/free-solid-svg-icons';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import {SearchBtn} from '~/components/Icon';
import {useState, useEffect, useRef} from 'react'
import {useDebounce} from '~/components/hooks'

import * as apiService from '~/services/searchService'

import styles from './Search.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)



function Search() {
    const [searchValue,setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult,setShowResult] = useState(true)
    const inputRef = useRef()
    const [loading,setLoading] = useState(false)

    const debounceValue = useDebounce(searchValue,500)

    useEffect(()=>{
        if(!debounceValue.trim()){
            setSearchResult([])
            return
        }
        
        const fetch = async  ()=>{
            setLoading(true)
            const result = await apiService.search(debounceValue)
            setSearchResult(result)
            setLoading(false)
        }

        fetch()
        
        

        
        
    },[debounceValue])

    const handleClear = ()=>{
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleHideResult = ()=>{
        setShowResult(false)
    }

    const handleChange = (e)=>{
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }
    }

    return ( 
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                    visible={showResult && searchResult.length >0}
                    interactive = {true}
                    render={attrs=>(
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Account</h4>
                                {
                                    searchResult.map((item)=>{
                                        return (<AccountItem key = {item.id} data = {item}/>)
                                    })
                                }
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside = {handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            value = {searchValue}
                            placeholder={"Tìm kiếm tài khoản và video"}
                            onChange={handleChange}
                            onFocus = {()=>setShowResult(true)}
                            ref = {inputRef}
                        />
                        {
                        !!searchValue && !loading &&
            
                            <button
                                className = {cx('clear')}
                                onClick = {handleClear}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        }
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                        <button className = {cx('search-btn')} onMouseDown={(e)=>e.preventDefault()}>
                            <SearchBtn/>
                        </button>
                    </div>
                </HeadlessTippy>
        </div>

    );
}

export default Search;
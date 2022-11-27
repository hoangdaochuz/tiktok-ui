import PropTypes from 'prop-types'
import className from 'classnames/bind'
import styles from './SuggestAccount.module.scss'
import AccountItem from './AccountItem'

import {getSuggestUser} from '~/services/userService'
import {useState, useEffect} from 'react'

const cx = className.bind(styles)

function SuggestAccount({label}) {
    const [suggestAccount,setSuggestAccount] = useState([])

    useEffect(()=>{
        getSuggestUser({page: 1, perPage: 5}).then((data)=>{
            // console.log(data);
            setSuggestAccount(data);
        })
    },[])

    return ( 
        <div className = {cx('wrapper')}>
            <p className = {cx('label')}>{label}</p>
            {suggestAccount.length > 0 && suggestAccount.map((account)=>{
                return (<AccountItem key={account.id} data={account}/>)
            })}
            <p className = {cx('more')}>See all</p>
        </div>
     );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired
}
export default SuggestAccount;
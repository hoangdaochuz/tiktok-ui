import PropTypes from 'prop-types'
import className from 'classnames/bind'
import styles from '../SuggestAccount.module.scss'
import AccountItem from '../AccountItem'

import {getFollowingList} from '~/services/followingService'
import {useState, useEffect} from 'react'

const cx = className.bind(styles)

function FollowingAccount({label}) {
    const [followingAccount,setFollowingAccount] = useState([])

    useEffect(()=>{
        getFollowingList({page: 1, perPage: 5}).then((data)=>{
            console.log(data);
            setFollowingAccount(data);
        })
    },[])

    return ( 
        <div className = {cx('wrapper')}>
            <p className = {cx('label')}>{label}</p>
            {followingAccount.map((account)=>{
                return (<AccountItem key={account.id} data={account}/>)
            })}
            <p className = {cx('more')}>See all</p>
        </div>
     );
}

FollowingAccount.propTypes = {
    label: PropTypes.string.isRequired
}
export default FollowingAccount;
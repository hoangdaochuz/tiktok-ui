import { useEffect } from "react";
import axios from "axios";
import API from "./API"
import { getFollowingList } from "~/services/followingService";
function Test(quality) {
    // Cach 1: Dùng cách fetch thông thường
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then((respond)=>{
    //             return respond.json()
    //         })
    //         .then((result)=>{
    //             console.log(result);
    //         })
    // },[])

    // Cach 2: Dung async/await
    // const getUser = async ()=>{
    //     const respond = await fetch(`https://api.thingspeak.com/channels/1803132/feeds.json?api_key=II11ULVHP7T46WDG&results=2`)
    //     const result = await respond.json()
    //     console.log(result.feeds)
    // }
    // getUser()

    // Cach3: Dung axios
    
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //     .then((respond)=>{
    //         console.log(respond.data)
    //     })

    getFollowingList(1).then((response)=>{
        console.log(response)
    })
    
    // const getComments = async ()=>{
    //     try{
    //         const response = await API.get(`comments`)
    //         const result = response.data
    //         console.log(result)

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // getComments()

    // API.get(`comments`)
    //     .then((response) => {
    //         console.log(response.data)
    //     })
    
}

export default Test;
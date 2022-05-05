import Home from '~/pages/Home';
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profile from '~/pages/Profile'
import {OnlyHeader} from '~/layouts'
import Search from '~/pages/Search'
const publicRouters = [
    { path: "/", component: Home},
    {path: "/following", component: Following},
    {path: '/upload', component: Upload, layout: OnlyHeader},
    {path: '/profile', component: Profile, layout: OnlyHeader},
    {path: '/search', component: Search, layout:null}
]

const privateRouters = [

]

export {publicRouters, privateRouters} 
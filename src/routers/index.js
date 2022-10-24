import Home from '~/pages/Home';
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profile from '~/pages/Profile'
import {OnlyHeader} from '~/layouts'
import Live from '~/pages/Live';

import config from '~/config'
import Search from '~/pages/Search'
const publicRouters = [
    { path: config.routers.home, component: Home},
    {path: config.routers.following, component: Following},
    {path: config.routers.upload, component: Upload, layout: OnlyHeader},
    {path: config.routers.profile, component: Profile, layout: OnlyHeader},
    {path: config.routers.search, component: Search, layout:null},
    {path: config.routers.live, component: Live}
]

const privateRouters = [

]

export {publicRouters, privateRouters} 
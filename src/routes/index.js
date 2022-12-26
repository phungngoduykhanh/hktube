import { HeaderOnly } from '@/components/Layout'

import Home from '@/pages/Home';
import Subscriptions from '@/pages/Subscriptions';
import Shorts from '@/pages/Shorts';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';


const publicRoutes=[
    {path: '/',component:Home},
    {path: '/Subscriptions',component:Subscriptions},
    {path: '/Shorts',component:Shorts},
    {path: '/Upload',component:Upload, layout: HeaderOnly},
    {path: '/Search',component:Search, layout:null},

]
const privateRoutes=[
    
]

export {publicRoutes,privateRoutes}
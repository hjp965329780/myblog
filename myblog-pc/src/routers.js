import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import archive from './pages/archive'
import apply from './pages/apply'
import signin from './pages/signin'
import login from './pages/login'
import user from './pages/user'

const routes = [
{
	path:'/',
    component:home
},
{
	path:'/home',
	name:'home',
    component:home
},
{
	path:'/signin',
	name:'signin',
    component:signin
},
{
	path:'/login',
	name:'login',
    component:login
},
{
	path:'/user',
	name:'user',
    component:user
},
{
    path:'/about',
    name:'about',
    component:about
},
{
    path:'/archive',
    name:'archive',
    component:archive
},
{
    path:'/cateId/:cateId',
    name:'tag',
    component:home
},
{
    path:'/article',
    name:'article',
    component:article
},
{
    path:'/apply',
    name:'apply',
    component:apply
},
{
    path:'*',
    redirect:'/'
}
]
export default routes;

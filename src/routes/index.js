import Home from '../containers/Home'
import Tasks from '../containers/Tasks'
import Loader from '../containers/Loader'
import Login from '../containers/Login'

export default [
    {
        path: 'Home',
        component: Home,
    },
    {
        path: 'Tasks',
        component: Tasks,
    },
    {
        path: 'Loader',
        component: Loader,
    },
    {
        path: 'Login',
        component: Login,
    }
]
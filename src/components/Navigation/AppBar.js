import { useSelector } from 'react-redux'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import AuthNav from './AuthNav'
import { getIsLoggedIn } from '../../redux/auth/authSelectors'
import s from './Navigation.module.css'



export default function AppBar () {

    const isLoggedIn = useSelector(getIsLoggedIn)

    return (
    <div className={s.nav}>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </div>
    )
}
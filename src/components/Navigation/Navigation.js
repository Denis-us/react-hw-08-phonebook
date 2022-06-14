import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {getIsLoggedIn} from '../../redux/auth/authSelectors'
import s from './Navigation.module.css'

const setActive = ({ isActive }) => isActive ? 'active-link' : ''

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (
        <ul className={s.navigation}>
            <NavLink to="/"
            className={setActive}>
                Главная
            </NavLink>

            {isLoggedIn &&
            <NavLink to="/contacts"
            className={setActive}>
                Контакты
            </NavLink>}     
        </ul>
    )
}

export default Navigation
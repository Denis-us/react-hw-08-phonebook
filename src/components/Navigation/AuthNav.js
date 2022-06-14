import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'

const setActive = ({ isActive }) => isActive ? 'active-link' : ''

const AuthNav = () => {
    return (
        <ul className={s.authNav}>
            <NavLink to="/register"
            className={setActive}>
                Регистрация
            </NavLink>

            <NavLink to="/login"
            className={setActive}>
                Логин
            </NavLink>
        </ul>
    )
}

export default AuthNav
import { NavLink } from "react-router-dom";

export default function Navigation () {
    return (
        <>
            <ul>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/register ">Регистрация</NavLink>
                <NavLink to="/login ">Логин</NavLink>
                <NavLink to="/contacts">Контакты</NavLink>
            </ul>
        </>
    )
}
import { useSelector, useDispatch } from "react-redux"
import {Button, Avatar} from '@mui/material'
import {getUsername} from '../../redux/auth/authSelectors'
import authOperations from "../../redux/auth/authOperations"
import s from './Navigation.module.css'
import avatar from '../../img/sunny.svg'

const UserMenu = () => {

const dispatch = useDispatch()

const name = useSelector(getUsername)

    return (
        <div className={s.userMenu}>
            <Avatar
                alt="Remy Sharp"
                src={avatar}
                sx={{ width: 50, height: 50 }}
                className={s.avatar}
                
            />
            <p className={s.userText}>Добро пожаловать, {name}!</p>
            <Button variant="outlined" className={s.button} onClick={() => dispatch(authOperations.logout())}>Выйти</Button>
        </div>
    )
}

export default UserMenu
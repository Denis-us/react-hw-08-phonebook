import { useSelector, useDispatch } from "react-redux"
import {Button} from '@mui/material'
import {getUsername} from '../../redux/auth/authSelectors'
import authOperations from "../../redux/auth/authOperations"
import s from './Navigation.module.css'

const UserMenu = () => {

const dispatch = useDispatch()

const name = useSelector(getUsername)

    return (
        <div className={s.userMenu}>
            <p>Добро пожаловать, {name}!</p>
            <Button variant="outlined" className={s.button} onClick={() => dispatch(authOperations.logout())}>Выйти</Button>
        </div>
    )
}

export default UserMenu
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Button, TextField } from '@mui/material';
import authOperations from '../../redux/auth/authOperations'
import s from './LoginView.module.css'

export default function Login () {

    const {register, handleSubmit, formState: { errors }} = useForm()
    const dispatch = useDispatch()
      
    const handleLoginUser = async values => {
          try {
              await dispatch(authOperations.login(values))
            }
          catch (error) {
            console.log(error)
          }
    }

    return (
        <div className={s.container}>
        <h1 className={s.header}>Логин</h1>
        <form className={s.form} onSubmit={handleSubmit(handleLoginUser)}>
            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Почта" variant="outlined" type="email" className={s.textField}
            {...register("email", { required: true })}/>
            </div>
            {errors.email?.type && <p className={s.error}>Введите почту</p>}

            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Пароль" variant="outlined" type="password" className={s.textField}
            {...register("password", { required: true })}/>
            </div>
            {errors.password?.type && <p className={s.error}>Введите пароль</p>}

            <Button variant="contained" type="submit" className={s.button}>Отправить</Button>
        </form>
        </div>
    )
}
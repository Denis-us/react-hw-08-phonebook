import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Button, TextField } from '@mui/material';
import authOperations from '../../redux/auth/authOperations'
import s from './RegisterView.module.css'

export default function Register () {

    const {register, handleSubmit, formState: { errors }} = useForm()

    const dispatch = useDispatch()

      
    const handleAddUser = async values => {
          try {
              await dispatch(authOperations.registration(values))
            }
          catch (error) {
            console.log(error)
          }
    }

    return (
        <div className={s.container}>
        <h1>Регистрация</h1>
        <form className={s.form} onSubmit={handleSubmit(handleAddUser)}>
            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Имя" variant="outlined" className={s.textField}
                {...register("name", { required: true })}
            />
            </div>
            {errors.name?.type && <p className={s.error}>Введите имя</p>}

            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Почта" variant="outlined" className={s.textField}
                {...register("email", { required: true })}
            />
            </div>
            {errors.email?.type && <p className={s.error}>Введите почту</p>}

            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Пароль" variant="outlined" className={s.textField}
                {...register("password", { required: true })}
            />
            </div>
            {errors.password?.type && <p className={s.error}>Введите пароль</p>}

            <Button variant="contained" type="submit" className={s.button}>Отправить</Button>
        </form>
        </div>
    )
}
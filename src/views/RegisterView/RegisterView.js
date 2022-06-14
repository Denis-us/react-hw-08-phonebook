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
            {/* <label className={s.label}> Имя</label>
                <input className={s.input} {...register("name", { required: true })}
                /> */}
            </div>
            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Почта" variant="outlined" className={s.textField}
                {...register("email", { required: true })}
            />
            {/* <label className={s.label}> Почта</label>
                <input className={s.input} {...register("email", { required: true })}
                /> */}
            </div>
            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Пароль" variant="outlined" className={s.textField}
                {...register("password", { required: true })}
            />
            {/* <label className={s.label}> Пароль </label>
                <input className={s.input} {...register("password", { required: true })}
                /> */}
            </div>
            <Button variant="contained" type="submit" className={s.button}>Отправить</Button>
            {/* <button type="submit" className={s.btn}>Отправить</button> */}
        </form>
        </div>
    )
}
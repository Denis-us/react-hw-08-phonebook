import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Button, TextField } from '@mui/material';
import authOperations from '../../redux/auth/authOperations'
import s from './LoginView.module.css'

{/* <TextField id="outlined-basic" label="Имя" variant="outlined"/> */}
{/* <Button variant="contained" type="submit" className={s.button}>Отправить</Button> */}

// name:"denis"
// email:"denisusus@mail.ru"
// pass: 123123123

//dancerer
//dancerer@ukr.net
//123456789

// denisenko
// denisenko@ukr.net
// 123123123

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
            <TextField id="outlined-basic" label="Почта" variant="outlined" className={s.textField}
            {...register("email", { required: true })}/>

            {/* <label className={s.label}> Почта </label>
                <input className={s.input} {...register("email", { required: true })}
                /> */}

            </div>
            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Пароль" variant="outlined" className={s.textField}
            {...register("password", { required: true })}/>

            {/* <label className={s.label}> Пароль</label>
                <input className={s.input} {...register("password", { required: true })}
                /> */}

            </div>

            {/* <button type="submit" className={s.btn}>Отправить</button> */}

            <Button variant="contained" type="submit" className={s.button}>Отправить</Button>
        </form>
        </div>
    )
}
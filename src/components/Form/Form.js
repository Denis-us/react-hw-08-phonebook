import { toast } from 'react-toastify'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField } from '@mui/material'
import {getContacts} from '../../redux/contacts/contactsSelectors'
import contactsOperations from '../../redux/contacts/contactsOperations'
import s from "./Form.module.css"


const Form = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  

  const handleAddContact = async values => {
    try {
      if(contacts.find(contact => (contact.name === values.name))) {
        return toast.error('Такой контакт уже есть')
      } else {
        await dispatch(contactsOperations.addContact(values))
        reset()
        toast.success('Контакт добавлен')
      }
    } catch (error) {
      toast.error('Ошибка при добавлении контакта')
    }
  }

    return (
      <form onSubmit={handleSubmit(handleAddContact)} className={s.form}>
        <div className={s.blockForm}>
        <TextField id="outlined-basic" label="Имя" variant="outlined" type="text" className={s.textField} {...register("name", {
          required: true,
          pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        })}/>
          </div>
      {errors.name?.type === 'required' && <p className={s.error}>Имя может состоять только из букв, апострофа, тире и пробелов</p>}
        

        <div className={s.blockForm}>
        <TextField id="outlined-basic" label="Телефон" variant="outlined" type="tel" className={s.textField} {...register("number", {
        required: true,
        pattern: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
      })}/>
        </div>
      {errors.number?.type && <p className={s.error}>Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +</p>}
        
      <Button variant="contained" type="submit" className={s.button}>Отправить</Button>
      </form>
    )
  }

export default Form

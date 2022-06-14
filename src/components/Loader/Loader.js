import { TailSpin } from  'react-loader-spinner'
import s from './Loader.module.css'

const Loader = () => {
    <div className={s.loader}>
            <TailSpin 
          height="100"
          width="100"
          color="#1677e7"
          ariaLabel="loading"
         />
    </div>
}

export default Loader
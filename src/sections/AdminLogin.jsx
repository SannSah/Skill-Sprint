import {cuLogo} from '../constants';
import LoginInfo from '../components/LoginInfo';

const Login = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-5 h-screen">
        <img src={cuLogo} className='mt-10' width={230} />
        <div className="w-[500px] min-h-[400px] bg-highlight rounded-lg shadow-neo">
          <LoginInfo />
        </div>
    </div>
  )
}

export default Login
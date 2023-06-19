import { useCounterState } from '../../conext/CounterContext';
import './login-info.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
const Login_info=()=>{

    const counterState=useCounterState()
    const navigate = useNavigate();


    const navigateToContacts1 = () => {
        // 👇️ navigate to /contacts
        navigate('/');
    };

    const navigateToContacts2 = () => {
        // 👇️ navigate to /contacts
        navigate('/login');
    };

    return(

        
        <div className='container_ w-100 d-flex justify-content-center align-items-center '>

                <div className='w-50 h-50 d-flex flex-column bg_ justify-content-center align-items-center gap-5  '>

                            <label className='w-100 margin_ d-flex  flex-row justify-content-start align-items-center gap-1'>
                                Name:
                                <input  className='rounded infooo d-flex p-2' value={counterState.login_info[counterState.login_info.length-1].name} />
                            </label>
                            <label className='w-100 margin_ d-flex flex-row justify-content-start align-items-center gap-1'>
                                Family:
                                <input  className='infooo rounded bordebottom_ d-flex p-2' value={counterState.login_info[counterState.login_info.length-1].family} />
                            </label>
                            <label className='w-100 margin_ d-flex flex-row justify-content-start align-items-center gap-1'>
                                Phone:
                                <input  className='rounded infooo bordebottom_ d-flex p-2' value={counterState.login_info[counterState.login_info.length-1].phone} />
                            </label>
                            <label className='w-100 margin_ d-flex flex-row justify-content-start align-items-center gap-1'>
                                Password:
                                <input  className='rounded infooo bordebottom_ border-0 d-flex p-2' value={counterState.login_info[counterState.login_info.length-1].password} />
                            </label>
                            <button className='btn btn-info d-flex bg-info rounded p-1  justify-content-center ' onClick={navigateToContacts1}>Home</button>
                            <button className='btn btn-info d-flex bg-info rounded p-1  justify-content-center ' onClick={navigateToContacts2}>Login</button>





                </div>
        </div>




    )




}

export default Login_info
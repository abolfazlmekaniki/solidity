import React, { useState  } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useCounterState } from '../../conext/CounterContext';
import './LogIn.css'



const Log_in=()=>{

    
    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const counterState=useCounterState()

    const click_handler=event=>{
        event.preventDefault();
        const found =counterState.login_info.filter(obj => {
            return obj.name === name;
        });

        const found2 =found.filter(obj => {
            return obj.password === password;
        });

        console.log(found2)

        if(found2.length){

            console.log("success")
            navigate('/')
        }

        else{

            alert("Username or password is not correct ! please try again")

        }
    }

    return(

        <div className="container_ w-100 d-flex justify-content-center align-items-center ">

            <div className='form_box h-75 weith_ mt-5 mb-5 d-flex flex-column flew-wrap bg-light border-2 rounded-1'>

                    <p className='w-100 d-flex fs-1 justify-content-center align-items-center'>Login</p>
                    <form className='w-100 d-flex flex-column gap-5 p-0 justify-content-center align-items-center rounded'>
                        <label className='w-100 margin_ d-flex flex-row justify-content-start align-items-center gap-1'>
                            Name:
                            <input  className='rounded border-bottom_ d-flex p-2' onChange={event => { setname(event.target.value);console.log(name)}}  type="text" name="name" placeholder='Alex' />
                        </label>
                        <label className='w-100 margin_ d-flex flex-row gap-1 justify-content-start align-items-center'>
                            Password:
                            <input className='rounded d-flex p-2 border-bottom_' type="password" name="name" onChange={event => setpassword(event.target.value)} />
                        </label>
                        <button className='btn btn-info d-flex bg-info rounded p-1  justify-content-center ' onClick={click_handler} >Login</button>
                    </form>

            </div>




        </div>

    )




}


export default Log_in
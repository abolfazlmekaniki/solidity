import React, { useState  } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useCounterState } from '../../conext/CounterContext';
import './Signin.css'



// let login_info=[];

const Singin_1=()=>{


    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const navigate = useNavigate();

    const counterState=useCounterState()
    console.log(counterState.login_info)
    const [name, setname] = useState('');
    const [family, setfamily] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');

    const click_handler=event=>{
        event.preventDefault();
        const result= strongRegex.test(password);
        if(!result){
    
            alert("The string must contain at least 1 lowercase alphabetical character,1 uppercase alphabetical character,1 numeric character,one special character ")
    
        }

        else{
            alert("You login successfully!!")
            counterState.login_info.push({name:name, family:family, phone:phone, password:password});
            console.log(counterState.login_info[counterState.login_info.length-1].name);
            navigate('/logn_info')
            

        }


    }

    // const navigateToContacts = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('/');
    //   };

    return(


        <div className="container_ w-100 d-flex justify-content-center align-items-center ">

                <div className='form_box h-75 weith_ mt-5 mb-5 d-flex flex-column flew-wrap bg-light border-2 rounded-1'>

                        <p className='w-100 d-flex fs-1 justify-content-center align-items-center'>Signin</p>
                        <form className='w-100 d-flex flex-column gap-5 p-0 justify-content-center align-items-center rounded'>
                            <label className='w-100 margin_ d-flex flex-row justify-content-start align-items-center gap-1'>
                                Name:
                                <input  className='rounded border-bottom_ d-flex p-2' onChange={event => { setname(event.target.value);console.log(name)}}  type="text" name="name" placeholder='Alex' />
                            </label>
                            <label className='w-100 margin_ d-flex flex-row  gap-1 justify-content-start align-items-center'>
                                LastName:
                                <input className='rounded d-flex border-bottom_ p-2' type="text" name="name"onChange={event => setfamily(event.target.value)} placeholder='Morgan' />
                            </label>
                            <label className='w-100 margin_  d-flex flex-row gap-1  justify-content-start align-items-center'>
                                PhoneNumber:
                                <input className='rounded d-flex border-bottom_ p-2' type="number" name="name" onChange={event => setphone(event.target.value)} placeholder='09339051952' />
                            </label>
                            <label className='w-100 margin_ d-flex flex-row gap-1 justify-content-start align-items-center'>
                                Password:
                                <input className='rounded d-flex p-2 border-bottom_' type="password" name="name" onChange={event => setpassword(event.target.value)} />
                            </label>
                            <button className='btn btn-info d-flex bg-info rounded p-1  justify-content-center ' onClick={click_handler}>Signin</button>
                        </form>

                </div>




        </div>
    )



}


export default Singin_1
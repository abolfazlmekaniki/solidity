import {FaBitcoin} from "react-icons/fa";
import {useState} from 'react'
import {FaMapMarked} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
// import Market_1 from './pages/Market/Market1'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'
import React from 'react';
import { Link } from "react-router-dom";





const HomePage= (props) => {


    
    const email_= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


    const [input1value , setvalue] = useState("");
    const [regexerror , setregexerror] = useState(false)

    function click_handler(){

        const result= email_.test(input1value);
        if(result){

            console.log("True");
            setregexerror(true);

        }
        else{
            console.log("False")
            setregexerror(false);
        }

    }

    return (
        
        <div className='container_'>

                <div className="container6">
                    <nav className="navbar text-danger navbar-expand-lg navbar-light p-2 d-flex flex-row g-2 justify-content-start align-items-center">
                        <Link to="/Market" className="link_">
                            <a className="navbar-brand d-flex  " style={{"color":"antiquewhite"}} href="/Market">Market</a>
                        </Link>

                        <Link to="/Singin" className="link_">
                        <a className="navbar-brand d-flx " style={{"color":"antiquewhite"}} href="/Singin">Singin</a>
                        </Link>
                        
                        <a className="navbar-brand d-flex " style={{"color":"antiquewhite"}} href="#">Contact</a>
                    </nav>
                </div>

                <div className='main-banner'>

                    <video  autoPlay muted loop id='my_video' src={props.video_link} type="video/mp4">
                        {/* {console.log("Confirm")} */}
                    </video>
                    <div className="div1">

                            <div className="text1 font-weight-bold h1" style={{"whiteSpace":"pre"}}>
                                The Ocean NFT
                            </div>

                            <form  className='form_ '>

                                <input type="email"  className=" label_set1 select_"  placeholder="Enter Email Address..."  value={input1value} onChange={(event)=> setvalue(event.target.value)}/>
                                
                                <button type="button"   onClick={click_handler} className="btn btn-secondary btt" >Register</button>
                                <small  className={` text-center  w-25 bg-danger ml-4 ${regexerror ? 'd-none' : 'd-block'}`}>invalid !</small>

                            </form>
                    
                    </div>

                </div>


                <div  className='d-flex w-100  justify-content-center align-items-center'>

                    <div className='w-100  middle_text'>


                        <p className="text-black d-flex flex-row justify-content-between gap-5">
                        <FaBitcoin className="fs-1 text-black"/> Do you want to see under the sea? <FaBitcoin className="fs-1 text-black"/> 
                        </p>


                    </div>

                </div>


                <div className='d-flex w-100 container2'>

                        <a className="items_1 d-flex flex-column justify-content-end  " href="http://www.google.com">

                            <p className="d-flex w-100">stationary</p>

                            <p className="d-flex w-100">a yellow pencil with white envelpoe</p>

                        </a>

                        <a className="items_2 d-flex flex-column justify-content-end" href="http://www.google.com">

                            <p className="d-flex w-100">stationary</p>

                            <p className="d-flex w-100">a yellow pencil with white envelpoe</p>

                        </a>

                        <a className="items_3 d-flex flex-column justify-content-end" href="http://www.google.com">
                                <p className="d-flex w-100">stationary</p>

                                <p className="d-flex w-100">a yellow pencil with white envelpoe</p>



                        </a>


                        <a className="items_4 d-flex flex-column justify-content-end" href="http://www.google.com">



                                <p className="d-flex w-100">stationary</p>

                                <p className="d-flex w-100">a yellow pencil with white envelpoe</p>                 


                        </a>
                    

                </div>


                <div className="container3 d-flex flex-column justify-content-center align-items-start p-5">


                    <p  className='w-100 d-flex flex-row justify-content-center '>

                            
                    </p>

                    <div className="w-100 d-flex flex-row justify-content-between align-items-center">


                        <div className="d-flex w-25 bg-light flex-column justify-content-center align-items-center mt-- border rounded opacity-75">

                            <FaMapMarked className="d-flex mt-5 coll"/>
                            <p className="d-flex">Address</p>
                            <p className="d-flex">--------------</p>
                            <p className="d-flex mb-5">Tehran,Iran</p>
                                
                        </div>

                        
                        <div className="d-flex w-25 bg-light flex-column justify-content-center align-items-center mt-- border rounded opacity-75">

                            <FaMailBulk className="d-flex mt-5 coll"/>
                            <p className="d-flex">Email</p>
                            <p className="d-flex">--------------</p>
                            <p className="d-flex mb-5">abolfazlmikaniki6@gmail.com</p>
                                
                        </div>

                        
                        <div className="d-flex w-25 bg-light flex-column justify-content-center align-items-center mt-- border rounded opacity-75">

                            <FaPhone className="d-flex mt-5 coll"/>
                            <p className="d-flex">Phone</p>
                            <p className="d-flex">--------------</p>
                            <p className="d-flex mb-5">+989339051952</p>
                                
                        </div>




                    </div>


                </div>

        </div>


    )


}

export default HomePage
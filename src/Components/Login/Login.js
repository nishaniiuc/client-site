import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import './Login.css'

const Login = () => {
   
    return (
        <div>
            <div className="text-center mt-5" >
            <img height="50" src="https://i.ibb.co/1s6Jxc3/logo.png" alt=""/>
            </div>
            <div className="d-flex login align-items-center mx-auto my-5">
                <div>
                    <h3 className="text-center mb-4">Login with</h3>
                    <div style={{cursor:"pointer"}} className="google p-2 d-flex align-items-center">
                        <img className="" src="https://i.ibb.co/x5wzGKp/google.png" alt="" />
                        <strong className="ml-5">Continiue with google</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
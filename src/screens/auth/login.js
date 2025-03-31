import React from "react";
import { loginEndpoint } from "../../spotify";
import './login.css';

export default function Login(){
    return (
        <div className="login-page">
            <img src="https://i.pinimg.com/736x/08/e9/4e/08e94e36b8724ff7ddc8ddeb845726a4.jpg" alt="logo-spotify" className="logo" />
            <a href = {loginEndpoint}><div className="login-btn">LOG IN</div></a>
        </div>
    );
}
import React from "react";
import loginImage from "../../Images/login.jpeg"


export class Login extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImage} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="enter your username"/>
                    </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="enter your password"/>
                        </div>
                </div>
                </div>
            </div>
    }
}
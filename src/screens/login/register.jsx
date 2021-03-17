import React from "react";


export class Register extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src="" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="enter your username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="enter your email"/>
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
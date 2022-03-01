import React from "react";

function Login() {

    return (
        <div>
            <form>
                <div>
                    <label for="email-input">Email</label>
                    <input type="password" id="email-input"/>
                </div>
                <div>
                    <label htmlFor="password-input">Password</label>
                    <input id="password-input"/>
                </div>
            </form>
        </div>
    );

}

export default Login;
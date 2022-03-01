import React from "react";

function Register() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name-input">Name</label>
                    <input id="name-input"/>
                </div>
                <div>
                    <label htmlFor="email-input">Email</label>
                    <input type="password" id="email-input"/>
                </div>
                <div>
                    <label htmlFor="password-input">Password</label>
                    <input id="password-input" type="password"/>
                </div>
                <div>
                    <label htmlFor="password-confirm">Confirm Password</label>
                    <input id="password-confirm" type="password"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default Register;
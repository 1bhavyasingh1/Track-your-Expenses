import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";


function SignIn() {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (

        <div>
            {value ? <Home /> :
                <div className="box">
                    <section>
                        <h2>Track Your Expenses</h2>

                        <button class="login-with-google-btn" onClick={handleClick}>Sign in with Google</button>

                        <i>©Bhavya Singh</i>
                    </section>

                </div>

            }
        </div>

    );
}
export default SignIn;
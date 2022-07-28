import { useState } from 'react';
import Logo from "../../components/logo";
import React from "react";

const SignUp = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="py-5 px-36 bg-cream h-[100vh]">
            <div className="w-40 md:w-20 mb-5">
                <Logo />
             </div>

            <div className="flex items-center justify-center h-[70vh] mr-auto ml-auto">
             <div>
             <div className="flex justify-center flex-col items-center">
                <h1 className="text-3xl mb-6">Make the most of your professional life</h1>
                <form className="w-[400px] bg-white rounded-lg p-6">
                    <div className="mb-3">
                        <label className="text-grey" >Email</label><br/>
                            <input
                            type="email"
                            htmlfor="email"
                            value={email}
                            className="border rounded-sm w-[100%] p-[0.15em] border-current"
                            />
                    </div>
                    <div className="mb-4 relative">
                        <label className="text-grey">Password</label><br/>
                            <input
                            type="password"
                            htmlfor="password"
                            value={password}
                            className="border rounded-sm w-[100%] p-[0.15em] border-current"
                            />
                            <span className="text-grey absolute right-[8px] top-[25.5px]">show</span>
                    </div>
                    <div className="mb-3">
                        <p className="text-grey text-xs text-center">By clicking Agree & Join, you agree to the LinkedIn  
                             <span className="text-blue font-bold hover:underline"><a href='/'> User Agreement</a></span>,
                             <span className="text-blue font-bold hover:underline"><a href='/'>Privacy Policy</a></span>,
                             and <span className="text-blue font-bold hover:underline"><a href='/'>Cookie Policy</a></span>.</p>
                    </div>
                    <div className="mb-6">
                        <button className="rounded-3xl bg-blue p-3 text-white w-[100%] text-center hover:bg-blue-9">Agree & Join</button>
                    </div>
                    <div className="mb-5 text-center overflow-hidden before:content-[''] before:h-[0.5px] before:bg-gray-200 before:w-[50%] before:inline-block before:relative before:align-middle before:ml-[-50%] before:right-[0.5em]
                    after:content-[''] after:h-[0.5px] after:bg-gray-200 after:w-[50%] after:inline-block after:relative after:align-middle after:mr-[-50%] after:left-[0.5em]">or</div>
                    <button className="mb-3 flex justify-between w-[100%] rounded-3xl border-inherit border py-2 px-3 hover:bg-sky-50">
                        <p className='text-base font-normal'>Sign up with Google</p>
                        <img src="images/google.svg"/>
                    </button>
                    <p className='text-center text-base'>Already on LinkedIn? <span className='text-blue font-bold hover:underline'><a href="/">Sign in</a></span></p>
                </form>
              </div>
              </div>
            </div>
        </div>
    )
}

export default SignUp;
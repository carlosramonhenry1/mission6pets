import React from 'react'
import Greynavy from '../components/Navbar/Greynav';
import Navbar from '../components/Navbar/Navbar'
import './signin.css'

function SignIn() {
    return (
        <>
        <div>
            <Navbar />
            <Greynavy />
        </div>

        <div className='context'>
        Login or create an account to check your purchasing history
            </div>


            <div className='context2'>
            If you already have an account with us, please login:
            </div>


            <div className='context3'>
                EMAIL
            </div>


            <form className='context4'>
            <input type="email" name="email" id="email"/>
            </form>


            <div className='context5'>
                PASSWORD
            </div>


            <form className='context6'>
            <input type="email" name="email" id="email"/>
            </form>


            <div className='context7'>
            Forgot your password?
            </div>


            <div className='context8'>
                <div className='context9'>
                LOGIN
                </div>
            </div>


            <div className='context10'>
                <div className='context11'>
                OR
                </div>
            </div>


            <div className='context12'>
            If you havent got an account yet, sign up now:
            </div>


            <div className='context13'>
                <div className='context14'>
                SIGN UP NOW, ITS EASY!
                </div>
            </div>

            <div className='oneline'></div>


            </>
         

           
    )
}

export default SignIn;

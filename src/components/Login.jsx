import React from 'react'
import loginImage from '../images/login-image.jpg'
import bodyImage from '../images/body-image.jpg'
// create components login
function Login() {
    return (
        <div className='flex h-full' style={{
            backgroundImage: `url(${bodyImage})`,
        }}>
            <div className='w-1/2 flex flex-col px-48' style={{
                backgroundImage: `url(${bodyImage})`,
            }}>
               <div className='h-[50%] flex justify-center items-center'>
                <span className='text-3xl font-500'>DCI WEB PLATFORM</span>
               </div>
                <div className=' h-[70%] flex-col items-center  justify-center'>
                    <h1 className='font-bold text-center'>LOGIN</h1>
                    <input type="text" placeholder="Username" className='px-3 py-2 border-gray-300 border-2 border-solid rounded-md w-full mt-3' />
                    <input type="text" placeholder="Password" className='mt-2 px-3 py-2 border-gray-300 border-2 border-solid rounded-md w-full' />
                    <p className='text-center'>OR</p>
                    <input />
                    <button className='w-full mt-3 bg-blue-500 text-white rounded-lg px-5 py-2 uppercase we'>login</button>
                </div>
                <span className=' h-auto text-center pb-3'>2023 DCI, All right Reserved</span>
            </div>
            <div className='w-1/2 p-3'>
                <img src={loginImage} className='rounded-2xl h-full w-full' />
            </div>
        </div>
    )
}

export default Login

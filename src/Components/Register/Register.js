import React from 'react';

const Register = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Registration</h1>

<form >
    <div className="text-center mt-8">
        <label htmlFor='email' className="font-semibold">Email </label>
        <input
            type='email'
            id='email'
            placeholder='Your Email'
            className="my-4 border-4"
        />
    </div>
    <div className="text-center mt-2">
        <label htmlFor='password' className="font-semibold">Password </label>
        <input
            type='password'
            id='password'
            placeholder='Your Password'
            className="my-4 border-4"
        />
    </div>
    <div className="text-center mt-2">
        <label htmlFor='password' className="font-semibold">Confirm Password </label>
        <input
            type='password'
            id='password'
            placeholder='Your Password'
            className="my-4 border-4"
        />
    </div>

    <div className="text-center mb-20">
       <button className=" font-bold bg-green-700 text-gray-200 px-4 py-1 rounded ">
            Register
       </button>
       
    </div>
</form>
</div>

        
    );
};

export default Register;
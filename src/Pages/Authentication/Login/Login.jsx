import React from 'react';
import { useForm } from 'react-hook-form';
import  useAuth  from '../../../Hooks/useAuth';


const Login = () => {
    const {setUser, loginUser} = useAuth();
    
    
    const {
        register,
        handleSubmit,

    } = useForm()

    const onSubmit = data => {
        console.log(data)
        loginUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error => console.error(error))
    }

    return (


        <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-3xl p-4'>Login Please</h1>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true }) } className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" {...register("password")} className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </form>

    );
};

export default Login;
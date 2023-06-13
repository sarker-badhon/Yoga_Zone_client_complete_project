import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaGoogle, FaEye, } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const onSubmit = (data) => {
        setIsLoading(true);
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setIsLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Navigate to the desired page
                // navigate(from,{replace:true});
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                reset();
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password',
                    confirmButtonText: 'OK',
                });
            });
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {

                const user = result.user;

            }).catch((error) => {
                const errorMessage = error.message;

            });
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left"></div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold">Please Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                name="email"
                                placeholder="Email"
                                className={`input input-bordered w-96 h-16 ${errors.email ? 'input-error' : ''}`}
                            />
                            {errors.email && <span className="error">Email is required.</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: true })}
                                    placeholder="Password"
                                    className={`input input-bordered w-96 h-16 ${errors.password ? 'input-error' : ''
                                        }`}
                                />
                                <div
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    <p className='mr-3 text-2xl'> {showPassword ? <FaRegEyeSlash /> : <FaEye />}</p>
                                </div>
                            </div>
                            {errors.password && <span className="error">Password is required.</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input
                                className="btn bg-[#ff91b8] font-bold h-16"
                                type="submit"
                                value={isLoading ? 'Logging in...' : 'Login'}
                                disabled={isLoading}
                            />
                        </div>
                    </form>
                    <p className="text-center pb-4 text-[#ff91b8]">
                        New to Yoga zone?
                        <Link className="link text-blue-500" to="/register">
                            Create an Account
                        </Link>
                    </p>
                    <div className="w-96 text-center mb-8">
                        <button  onClick={handleGoogleSignIn} className="btn btn-outline h-16 hover:bg-[#ff91b8] font-bold w-[390px]  ml-10">
                            <FaGoogle className="text-yellow-500 text-4xl hover:text-white" /> Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

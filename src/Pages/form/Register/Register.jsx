import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { createUser, updateUserProfile ,googleSignIn} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    createUser(data.email, data.password)
      .then((result) => {        
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL)
        setIsLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Registered successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Failed to register user.',
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

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl font-bold">Please Register</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                name="name"
                placeholder="Name"
                className={`input input-bordered w-96 h-16 ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <span className="error">Name is required.</span>}
            </div>

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
              <input
                type="password"
                {...register('password', {  required: true,
                    minLength: 6,
                    pattern: /(?=.*[!@#$&*])(?=.*[a-z])/ })}
                placeholder="Password"
                className={`input input-bordered w-96 h-16 ${errors.password ? 'input-error' : ''} `}
                />
                 {errors.password?.type === 'minLength' && <p className="text-red-600">Minimum length should be 6 characters.</p>}
                 {errors.password?.type === 'pattern' && <p className="text-red-600"> Should have at least one capital letter ,</p>}
                 {errors.password?.type === 'pattern' && <p className="text-red-600">  one special character.</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register('confirmPassword', { required: true , minLength: 6,
                    pattern: /(?=.*[!@#$&*])(?=.*[a-z])/})}
                placeholder="Confirm Password"
                className={`input input-bordered w-96 h-16 ${errors.password ? 'input-error' : ''} `}
              />
              {errors.password?.type === 'minLength' && <p className="text-red-600">Minimum length should be 6 characters.</p>}
                 {errors.password?.type === 'pattern' && <p className="text-red-600"> Should have at least one capital letter.</p>}
                 {errors.password?.type === 'pattern' && <p className="text-red-600"> one special character.</p>}
              {errors.confirmPassword && (
                <span className="error">Confirm Password is required.</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register('photoURL', { required: true })}
                placeholder="Photo URL"
                className={`input input-bordered w-96 h-16 ${errors.photoURL ? 'input-error' : ''}`}
              />
              {errors.photoURL && <span className="error">Photo URL is required.</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register('address', { required: true })}
                placeholder="Address"
                className={`input input-bordered w-96 h-16 ${errors.address ? 'input-error' : ''}`}
              />
              {errors.address && <span className="error">Address is required.</span>}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-[#ff91b8] font-bold h-16"
                type="submit"
                value={isLoading ? 'Registering...' : 'Register'}
                disabled={isLoading}
              />
            </div>
          </form>
          <p className="text-center pb-4 text-[#ff91b8]">
            Already have an account?{' '}
            <Link className="link text-blue-500" to="/login">
              Login
            </Link>
          </p>
          <div className="w-96 text-center mb-8">
            <button onClick={handleGoogleSignIn} className="btn btn-outline h-16 hover:bg-[#ff91b8] font-bold w-[390px]  ml-10">
              <FaGoogle className="text-yellow-500 text-4xl hover:text-white" /> Sign up with
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

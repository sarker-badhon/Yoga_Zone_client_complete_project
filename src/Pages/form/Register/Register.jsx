import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {
  const { register, handleSubmit,reset ,formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL);

        // Send user registration data to API
        fetch('https://yoga-zone-server-iota.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              setIsLoading(false);
              Swal.fire({
                icon: 'success',
                title: 'Registered successfully!',
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              throw new Error('Failed to register user.');
            }
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
            reset()
            Swal.fire({
              icon: 'error',
              title: 'Registration Failed',
              text: 'Failed to register user.',
              confirmButtonText: 'OK',
            });
          });
      })
      .catch((error) => {
        console.log(error.errorMessage);
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
        fetch('https://yoga-zone-server-iota.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {

              navigate('/')
            }
          })
      })
  }

  return (
    <div className="hero min-h-screen  bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl font-bold text-center mb-4">Please Register</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  name="name"
                  placeholder="Name"
                  className={`input input-bordered w-80 ${errors.name ? 'input-error' : ''}`}
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
                  className={`input input-bordered w-80 ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error">Email is required.</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[!@#$&*])(?=.*[a-z])/
                  })}
                  placeholder="Password"
                  className={`input input-bordered w-80 ${errors.password ? 'input-error' : ''} `}
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
                  {...register('confirmPassword', {
                    required: true, minLength: 6,
                    pattern: /(?=.*[!@#$&*])(?=.*[a-z])/
                  })}
                  placeholder="Confirm Password"
                  className={`input input-bordered w-80 ${errors.password ? 'input-error' : ''} `}
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
                  className={`input input-bordered w-80 ${errors.photoURL ? 'input-error' : ''}`}
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
                  className={`input input-bordered w-80 ${errors.address ? 'input-error' : ''}`}
                />
                {errors.address && <span className="error">Address is required.</span>}
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-[#ff91b8] font-bold h-14"
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
          <div className="lg:w-full text-center mb-8 ">
            <button onClick={handleGoogleSignIn} className="btn btn-outline h-14 hover:bg-[#ff91b8] font-bold lg:w-[390px]  lg:ml-10">
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

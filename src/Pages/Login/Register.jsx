import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import RegisterSpinner from '../../Components/Spinner/RegisterSpinner';
import { useState } from 'react';
import { set } from 'react-hook-form';
import { getAuth } from 'firebase/auth';
import auth from '../../config/firebase.config';

const Register = () => {
    const navigate = useNavigate();
    const { user, signUpWithEmailPassword, updateUserProfile, loading } = useAuth();
    // const auth = getAuth(app)
    const [registerSpinner, setRegisterSpinner] = useState(false)

    const handleRegister = (e) => {
        setRegisterSpinner(true)

        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const imageUrl = e.target.imageUrl.value;
        const password = e.target.password.value;

        const userInfo = {
            name, email, imageUrl, password
        }

        // Password Validation
        if (password.length < 6) {
            toast.error('Email must be at least 6 characters long')
            return
        }
        // Email Validation
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            toast.error('Please enter a valid email')
            return
        }

        //create user
        signUpWithEmailPassword(email, password)
            .then(result => {
                console.log("Hello Success")
                updateUserProfile({ displayName: name, photoURL: imageUrl })
                    .then(() => {
                        // auth.currentUser.reload()
                        // navigate('/')
                        console.log("you update profile")
                        // toast.success('Registration successful')
                    })
                    .catch(err => toast.error(err.message))
            })
            .catch(err => toast.error(err.message))


        // update user profile
        // if (user) {
        //     updateUserProfile({ displayName: name, photoURL: imageUrl })
        //         .then(() => {
        //             // navigate('/')
        //             console.log("you update profile")
        //             // toast.success('Registration successful')
        //         })
        //         .catch(err => toast.error(err.message))
        // }

    }


    // console.log("register jsx authStateChange",loading)
    console.log("register jsx authStateChange", loading, user)

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full name" className="input input-bordered" name="name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="image url" className="input input-bordered" name='imageUrl' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Register </button>
                                </div>
                            </form>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>

            {
                loading && <RegisterSpinner />
            }
        </>
    );
};

export default Register;
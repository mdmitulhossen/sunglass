import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
    const {user,signInWithEmailPassword} = useAuth();
   
const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Password Validation
    if(password.length < 6){
        toast.error('Email must be at least 6 characters long')
        return
    }
    // Email Validation
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        toast.error('Please enter a valid email')
        return  
    }

    // Sign In 
    signInWithEmailPassword(email,password)
    .then(result => {
        navigate('/')
        toast.success('Login successful')
    })
    .catch(err=>toast.error("Please enter a valid email and password"))
}

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name="password" required/>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button type='submit' className="btn btn-neutral">Login</button>
                                </div>
                            </form>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
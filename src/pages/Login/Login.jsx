import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className='main'>
                <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                    <div className="bg-green-600 rounded-lg md:mt-0 xl:p-0">
                        <div className="p-6 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                                Sign in to your account
                            </h1>

                            <div className='flex flex-start gap-10'>
                                <div className='flex-shrink-0'>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required=""></input>
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                                        </div>
                                        <div className="flex items-center justify-between">

                                            <a href="#" className="text-sm font-medium text-white hover:underline">Forgot password?</a>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-green-500 hover:bg-white hover:text-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                        <p className="text-sm font-light text-white">
                                            Don’t have an account yet? <Link to='/register' className="font-medium text-white hover:underline dark:text-primary-500">Sign up</Link>
                                        </p>
                                    </form>
                                </div>
                                <div className='flex-shrink-0 self-center'>
                                    <div className="flex items-center justify-center">
                                        <span className='text-white text-sm font-medium'>Or</span>

                                    </div>
                                    <div className='flex gap-2 text-white'>
                                        <Link><button className='p-2 px-8 mt-4 bg-green-800 rounded-lg text-sm font-medium'><FontAwesomeIcon icon={faGoogle} /><span className='px-3'>Google</span></button></Link>
                                        <Link><button className='p-2 px-5 mt-4 bg-blue-700 rounded-lg text-sm font-medium'><FontAwesomeIcon icon={faFacebookF} /><span className='px-3'>Facebook</span></button></Link>
                                    </div>

                                </div>
                            </div>





                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
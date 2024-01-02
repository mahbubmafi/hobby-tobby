import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='main'>
                <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                    <div className="bg-green-600 rounded-lg md:mt-0 xl:p-0">
                        <div className="p-6 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold text-white md:text-2xl">
                                Sign up now!
                            </h1>
                            <form className="md:space-y-6 flex justify-between gap-10" action="#">
                                <div className='flex-shrink-0'>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Full name</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your full name" required=""></input>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required=""></input>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Phone number</label>
                                        <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your phone number" required=""></input>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                                    </div>
                                </div>

                                <div className='flex-shrink-0'>
                                    
                                    <div className='flex flex-start justify-between gap-2'>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-white">Birthdate</label>
                                            <input type="date" name="birthDate" id="birthDate" className="bg-gray-50 border border-gray-300 text-gray-400 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-white">Gender:</label>
                                            <div className="bg-gray-50 border border-gray-300 text-gray-400 sm:text-sm rounded-lg block w-full p-2.5">
                                                <input type="radio" id="male" name="gender" value="male"></input>
                                                <label className='px-1'>Male</label>

                                                <input type="radio" id="female" name="gender" value="female"></input>
                                                <label className='px-1'>Female</label>

                                                <input type="radio" id="other" name="gender" value="other"></input>
                                                <label className='px-1'>Other</label>
                                            </div>
                                        </div>
                                    </div>


                                    <button type="submit" className="my-2 w-full text-white bg-green-500 hover:bg-white hover:text-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                                    <p className="text-sm font-light text-white">
                                        Already have an account? <Link to='/login' className="font-medium text-white hover:underline dark:text-primary-500">Sign in</Link>
                                    </p>
                                    <div className="flex items-center justify-center mt-3 mb-2">
                                        <span className='text-white text-sm font-medium'>Or</span>
                                
                                    </div>
                                    
                                    <div className='flex justify-between text-white '>
                                        <Link><button className='p-2 px-8 bg-green-800 rounded-lg text-sm font-medium'><FontAwesomeIcon icon={faGoogle} /><span className='px-3'>Google</span></button></Link>
                                        <Link><button className='p-2 px-5 bg-blue-700 rounded-lg text-sm font-medium'><FontAwesomeIcon icon={faFacebookF} /><span className='px-3'>Facebook</span></button></Link>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
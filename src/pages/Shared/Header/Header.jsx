import { Link } from 'react-router-dom';
import logo from '../../../assets/hobby-tobby-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faHeart, faBagShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header-main'>
            <div className='main'>
                <div className='flex flex-2 items-center justify-items-center justify-between'>
                    <div>
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className='flex flex-row'>
                        <form className='p-4'>
                            <input type="text" placeholder='Search Items' className='rounded-l pl-1'></input>
                            <button className='bg-white text-green-700 rounded-r pr-1'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </form>
                        <Link to='/profile' className='p-4 text-white'><FontAwesomeIcon icon={faUser} /></Link>
                        <Link to='/inbox' className='p-4 text-white'><FontAwesomeIcon icon={faEnvelope} /></Link>
                        <Link to='wishlist' className='p-4 text-white'><FontAwesomeIcon icon={faHeart} /></Link>
                        <Link to='/cart' className='p-4 text-white'><FontAwesomeIcon icon={faBagShopping} /></Link>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <Link to='/community' className='p-2 text-white'>Community</Link>
                    <Link to='/mall' className='p-2 text-white'>Mall</Link>
                    <Link to='/exchange' className='p-2 text-white'>Exchange</Link>
                    <Link to='/lookingFor' className='p-2 text-white'>Looking for</Link>
                </div>
            </div>

        </div>


    );
};

export default Header;
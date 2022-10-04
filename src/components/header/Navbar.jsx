import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className='w-full flex justify-center gap-10 py-[25px] text-yellow-300 font-[400] text-lg line-through'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'pokemon'}>Pokemon</NavLink>
                </li>
                <li>
                    <NavLink to={'help'}>Help</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className='w-full flex justify-center gap-10 py-[25px] text-white font-[400] text-lg'>
                <li>
                    <NavLink
                        to={'/'}
                        end
                        className='hover:duration-300 hover:text-[rgb(255,255,0)] line-through'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/pokemon'}
                        end
                        className='hover:duration-300 hover:text-[rgb(255,255,0)] line-through'>
                        Pokemon
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/help'}
                        end
                        className='hover:duration-300 hover:text-[rgb(255,255,0)] line-through'>
                        Help
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

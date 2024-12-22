
import React from 'react';

const NavBar = () => {
    return (
        <nav className=' h-[50px] w-full bg-black text-white'>
            <div className='flex justify-between items-center h-full px-4'>
                <h1>Logo</h1>

                <ul className='flex gap-4'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>

            </div>
        </nav>
    );
}
export default NavBar;
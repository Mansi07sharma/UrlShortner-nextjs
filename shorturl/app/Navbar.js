import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='bg-purple-500 p-5 flex justify-between items-center w-full h-[10vh]'>
            <div className='flex items-center gap-3'>
                <h1 className='text-white text-2xl font-bold text'>UrlShortener</h1>
                <img className='w-15 h-15 rounded-full' src="https://icon2.cleanpng.com/20180501/zje/kisspng-web-page-clip-art-unlimited-5ae893816f80c9.2246922615251915534567.jpg" alt="img" />
            </div>
            <nav>
                <ul className='flex justify-between items-center gap-5'>
                    <li className='text-white text-xl font-bold'><Link href={'/'}>Home</Link></li>
                    <li className='text-white text-xl font-bold'><Link href={'/About'}>About</Link></li>
                    <li className='text-white text-lg font-bold bg-purple-400 border-2 border-purple-500 rounded-2xl p-3'><Link href={'/TryNow'}>Try Now</Link></li>
                    <li className='text-white text-lg font-bold  bg-purple-400 border-2 border-purple-500 rounded-2xl p-3'><Link href={'https://www.github.com/Mansi07sharma'}>Github</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

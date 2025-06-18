import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className='bg-purple-200 p-5 h-[90vh] flex flex-col justify-center items-center'>
        <div className='text-4xl font-bold text-center p-5 underline text-shadow-lg text-shadow-purple-400'>URL SHORTNER</div>
        <p className=' text-center text-xl m-1'>Welcome to the URL Shortener application. Here you can shorten your long URLs easily.</p>
        <p className=' text-center text-xl m-1'>To get started, navigate to the Shortener page and enter your long URL to generate a short link.</p>
        <p className=' text-center text-xl m-1'>Enjoy using our service!</p>
        <p className=' text-center text-xl m-1'>For more information, visit our: <Link className='text-purple-500' href="/about">About</Link> page.</p>
        <div className='flex justify-center items-center gap-5 m-5'>
          <button className='text-white text-lg font-bold bg-purple-400 border-2 border-purple-500 rounded-2xl p-3'><Link href={'/TryNow'}>Try Now</Link></button>
          <button className='text-white text-lg font-bold  bg-purple-400 border-2 border-purple-500 rounded-2xl p-3'><Link href={'https://www.github.com/Mansi07sharma'}>Github</Link></button>        </div>
      </div>
    </>
  );
}

"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

function TryNow() {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('')
    const [loading, setLoading] = useState(false);
    const [urls, setUrls] = useState([])

    useEffect( () => {
        getUrls();
    })

    const getUrls = async () => {
        const res = await fetch('api/generate', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            const allUrls = await res.json();
            setUrls(allUrls.urls)
            setLoading(false);
        }
    }

    const handleGenerate = async () => {
        if (!url || !shortUrl) {
            alert('Please enter both URL and Short URL');
            return;
        }
        setLoading(true);
        await fetch('api/generate', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                longurl: url,
                shorturl: shortUrl
            })
        })
        setUrl('');
        setShortUrl('');
        toast('🦄 Saved Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div>
                <div className='rounded-2xl mt-15 bg-purple-300 w-1/2 m-auto p-10 flex flex-col justify-center items-center gap-5'>
                    <h1 className="text-center text-xl font-bold underline">Url shortner...</h1>
                    <div className='flex justify-between items-center w-[30vw]'>
                        <label className='text-lg font-bold ' htmlFor="url">Url:</label>
                        <input onChange={(e) => setUrl(e.target.value)} value={url} className='border-2 bg-purple-200 rounded-2xl border-purple-400 ml-2 p-3 text-lg w-[25vw] ' type="text" placeholder='enter url' />
                    </div >
                    <div className='flex justify-between items-center w-[30vw]'>
                        <label className='text-lg font-bold ' htmlFor="shorturl">ShortUrl:</label>
                        <input onChange={(e) => setShortUrl(e.target.value)} value={shortUrl} className='border-2 bg-purple-200 rounded-2xl border-purple-400 ml-2 p-3 text-lg w-[25vw] ' type="text" name="shorturl" id="shorturl" placeholder='enter shorturl' />
                    </div>
                    <button onClick={handleGenerate} className='w-1/3 rounded-2xl font-bold text-lg m-auto p-4 bg-cyan-500 hover:bg-purple-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white'>Generate</button>
                </div>

                <div className='flex flex-col gap-10 mt-5 mb-5 m-auto w-1/2'>
                    <h1 className='text-2xl bg-purple-500 text-center p-3  text-white font-medium'>Your generated short urls...</h1>
                    {loading ? <p className='text-lg font-bold text-blue-500'>Generating...</p> :
                        <div className='flex gap-5'>
                            {urls.length != 0 ? urls.map((item, idx) => {
                                return (
                                    <Link target='_blank' key={idx} className='text-white text-lg font-bold  bg-purple-400 border-2 border-purple-500 rounded-2xl p-3' href={`${item.longurl}`}>{item.shorturl}</Link>
                                )
                            }) :
                                <p className='text-lg font-bold text-red-500'>No urls generated yet...</p>
                            }
                        </div>
                    }
                </div>
                
            </div>
        </>
    )
}

export default TryNow

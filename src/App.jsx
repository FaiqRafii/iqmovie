import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1 className="font-bold text-white text-4xl">Web Film</h1>
        <input type="text" className="bg-zinc-800 rounded-md w-72 px-3 py-2 text-white shadow-none focus:outline-none mt-5 " placeholder='Cari film...' />

        <div className='flex-wrap flex gap-10 items-center justify-center mt-10'>
          <div className='bg-zinc-800 rounded-lg w-72'>
            <div className='text-white font-semibold'>Judul Film</div>
            <img src="" alt="Poster film" />
            <div className='text-zinc-500'>Tanggal</div>
            <div className='text-white'>Rating</div>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default App

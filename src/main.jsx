import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-rose-50 '>
    <div className='max-w-screen-xl mx-auto '>
    <RouterProvider router={router}/>
    </div>
    </div>
  </React.StrictMode>,
)

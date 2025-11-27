import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function AdminDashBoard() {
    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <div className='w-full flex flex-col'>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

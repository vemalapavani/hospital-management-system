import { Avatar, Text } from '@mantine/core'
import {
    IconHeartbeat,
    IconLayoutDashboard,
    IconUsers,
    IconCalendar
} from '@tabler/icons-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const links = [
    { name: 'Dashboard', url: "/patient/dashboard", icon: <IconLayoutDashboard size={20} stroke={1.5} /> },
    { name: 'Profile', url: "/patient/profile", icon: <IconUsers size={20} stroke={1.5} /> },
    { name: 'Appointments', url: "/patient/appointments", icon: <IconCalendar size={20} stroke={1.5} /> },
    { name: 'Bookings', url: "/patient/bookings", icon: <IconCalendar size={20} stroke={1.5} /> },
]
export default function Sidebar() {
    const user = useSelector((state: any) => state.user);
    return (
        <div>
            <div className='w-64 flex'>

            </div>
            <div className='bg-dark h-screen overflow-y-auto scrollbar-zero w-64 flex flex-col items-center'>
                <div className='fixed py-3 z-[50] bg-dark flex gap-1 text-primary-400 items-center'>
                    <IconHeartbeat size={40} stroke={2} />
                    <span className='font-heading text-3xl font-semibold'>Pulse</span>
                </div>

                {/* User Profile Section */}
                <div className='flex flex-col gap-5 mt-20'>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='p-1 bg-white rounded-full shadow-xl'>
                            <Avatar variant='filled' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHORVLY3-9bljdur2Lmf-bFufXufDUrwF92g&s" size="xl" alt="it's me" />
                        </div>
                        <span className='text-lg text-white'>{user.name}</span>
                        <Text c="dimmed" fs="initial" className='text-light'>{user.role}</Text>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {
                            links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.url}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 w-full font-medium text-neutral-900 px-5 py-3 rounded-lg ${isActive ? 'bg-primary-400' : 'hover:bg-gray-200 hover:text-dark text-light'
                                        }`
                                    }
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

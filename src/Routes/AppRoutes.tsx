import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ramdom from '../Ramdom';
import AdminDashBoard from '../Layout/AdminDashBoard';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import PatientDashboard from '../Layout/PatientDashboard';
import PatientProfilePage from '../Pages/Patient/PatientProfilePage';
import DoctorDashboard from '../Layout/DoctorDashboard';
import DoctorProfile from '../components/Doctor/Profile/DoctorProfile';
import DoctorProfilePage from '../Pages/Doctor/DoctorProfilePage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<PublicRoutes><LoginPage /></PublicRoutes>} />
                <Route path='/register' element={<PublicRoutes><RegisterPage /></PublicRoutes>} />

                <Route path='/' element={<ProtectedRoutes><AdminDashBoard /></ProtectedRoutes>}>
                    <Route path="**" element={<Ramdom />} />
                    <Route path="/dashboard" element={<Ramdom />} />
                    <Route path="/doctors" element={<Ramdom />} />
                    <Route path="/patients" element={<Ramdom />} />
                    <Route path="/appointments" element={<Ramdom />} />
                    <Route path="/pharmacy" element={<Ramdom />} />
                </Route>
                {/* Doctor */}
                <Route path='/doctor' element={<ProtectedRoutes><DoctorDashboard /></ProtectedRoutes>}>
                    <Route path="dashboard" element={<Ramdom />} />
                    <Route path="profile" element={<DoctorProfilePage />} />
                    <Route path="patients" element={<Ramdom />} />
                    <Route path="appointments" element={<Ramdom />} />
                    <Route path="pharmacy" element={<Ramdom />} />
                </Route>

                {/* Patient */}
                <Route path='/patient' element={<ProtectedRoutes><PatientDashboard /></ProtectedRoutes>}>
                    <Route path="dashboard" element={<Ramdom />} />
                    <Route path="profile" element={<PatientProfilePage />} />
                    <Route path="appointments" element={<Ramdom />} />
                    <Route path="bookings" element={<Ramdom />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

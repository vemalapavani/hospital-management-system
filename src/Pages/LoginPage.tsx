import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconHeartbeat } from '@tabler/icons-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../Service/UserService';
import { errorNotification, successNotification } from '../utility/Notification';
import { useDispatch } from 'react-redux';
import { setJwt } from '../Slices/JwtSlice';
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../Slices/UserSlice';

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: String) => (value.length >= 6 ? null : 'Password must be at least 6 characters long'),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        setLoading(true);
        loginUser(values).then((response) => {
            successNotification('Login successful');
            navigate(`/dashboard`);
            dispatch(setJwt(response));
            dispatch(setUser(jwtDecode(response)));
        }).catch((error) => {
            errorNotification(error?.errorMessage || 'Login failed');
        }).finally(() => {
            setLoading(false);
        });
    };
    return (
        <div style={{ background: 'url("/Login.jpg")' }} className="h-screen w-screen !bg-cover !bg-centre !bg-no-repeat flex flex-col items-center justify-center">
            <div className='py-3 z-[500] bg-white rounded-t-lg flex gap-1 w-[470px] justify-center text-primary-400 items-center'>
                <IconHeartbeat size={40} stroke={2} />
                <span className='font-heading text-4xl font-semibold'>Pulse</span>
            </div>
            <div className="w-[470px] rounded-b-lg bg-white p-10 py-2 pb-5">
                <form className="flex flex-col gap-5" onSubmit={form.onSubmit(handleSubmit)}>
                    <div className='self-center font-medium font-heading text-dark text-xl'>Login</div>
                    <TextInput
                        size='md'
                        radius='md'
                        placeholder="Email"
                        withAsterisk
                        label="Enter your Email"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        size='md'
                        radius='md'
                        placeholder="Password"
                        label="Enter your Password"
                        withAsterisk
                        {...form.getInputProps('password')}
                    />
                    <Button loading={loading} type='submit'>Login</Button>
                    <div className='self-center text-sm text-gray-500'>
                        Don't have an account? <Link to="/register" className='text-primary-400 hover:underline'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

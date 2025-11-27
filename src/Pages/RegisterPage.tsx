import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconHeartbeat } from '@tabler/icons-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../Service/UserService';
import { errorNotification, successNotification } from '../utility/Notification';

export default function RegisterPage() {

    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const form = useForm({
        mode: 'controlled',
        initialValues: {
            name: '',
            role: "PATIENT",
            email: '',
            password: '',
            confirmpassword: '',
        },

        validate: {
            name: (value: string) =>
                value.trim().length > 0 ? null : 'Name is required',
            email: (value: string) =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email',
            password: (value: string) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value)
                    ? null
                    : 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character',
            confirmpassword: (value: string, values: { password: string }) =>
                value === values.password ? null : 'Passwords do not match',
        }

    });

    const handleSubmit = (values: typeof form.values) => {
        setLoading(true);
        const transformedValues = {
            ...values,
            role: values.role.toUpperCase(), // Convert role to uppercase
        };
        registerUser(transformedValues).then((response) => {
            successNotification('User registered successfully');
            navigate('/login');
        }).catch((error) => {
            errorNotification(error?.errorMessage || 'Registration failed');
        }).finally(() => {
            setLoading(false)
        });
    };
    return (
        <div style={{ background: 'url("/Login.jpg")' }} className="h-screen w-screen !bg-cover !bg-centre !bg-no-repeat flex flex-col items-center justify-center">
            <div className='py-3 z-[50] bg-white rounded-t-lg flex gap-1 w-[470px] justify-center text-primary-400 items-center'>
                <IconHeartbeat size={40} stroke={2} />
                <span className='font-heading text-4xl font-semibold'>Pulse</span>
            </div>
            <div className="w-[470px] rounded-b-lg bg-white p-10 py-2 pb-5">
                <form className="flex flex-col gap-5" onSubmit={form.onSubmit(handleSubmit)}>
                    <div className='self-center font-medium font-heading text-dark text-xl'>Register</div>
                    <SegmentedControl
                        color="cyan"
                        {...form.getInputProps("role")}
                        size="md"
                        radius="md"
                        data={[
                            { value: 'PATIENT', label: 'PATIENT' },
                            { value: 'DOCTOR', label: 'DOCTOR' },
                            { value: 'ADMIN', label: 'ADMIN' },
                        ]}
                    />
                    <TextInput
                        size='md'
                        radius='md'
                        placeholder="Name"
                        withAsterisk
                        label="Enter Name"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        size='md'
                        radius='md'
                        placeholder="Email"
                        withAsterisk
                        label="Enter Email"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        size='md'
                        radius='md'
                        placeholder="Password"
                        label="Enter Password"
                        withAsterisk
                        {...form.getInputProps('password')}
                    />
                    <PasswordInput
                        size='md'
                        radius='md'
                        placeholder="Password"
                        label="Enter Confirm Password"
                        withAsterisk
                        {...form.getInputProps('confirmpassword')}
                    />
                    <Button loading={loading} type='submit'>Register</Button>
                    <div className='self-center text-sm text-gray-500'>
                        Have an account? <Link to="/login" className='text-primary-400 hover:underline'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


import { Avatar, Button, Divider, Modal, NumberInput, Select, Table, TagsInput, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BloodGroupData, DoctorDepartments, DoctorSpecializations } from '../../../Data/DropDownData';
import { useDisclosure } from '@mantine/hooks';
import DoctorDashboard from '../../../Layout/DoctorDashboard';

// Sample doctor data
const sampleUser = {
    name: 'Dr. Swapnil Patil',
    email: 'pranav.khaire@example.com',
    dob: '1999-12-20',
    phone: '+91 9876543210',
    address: 'Pune, Maharashtra, India',
    licenseNo: 'MH123456',
    bloodGroup: 'B+',
    specializations: ['Cardiology', 'Internal Medicine'],
    department: 'Cardiology',
    experience: 5
}

export default function DoctorProfile() {
    const doctor = useSelector((state: any) => state.user);
    // const doctor = sampleUser;
    const [editMode, setEditMode] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className="px-4 py-2">
            <div className="flex gap-4 items-center justify-between px-6">
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col align-center justify-center'>
                        <Avatar
                            variant="filled"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHORVLY3-9bljdur2Lmf-bFufXufDUrwF92g&s"
                            size={150}
                            alt="it's me"
                        />
                        {
                            editMode && <Button onClick={open} variant='filled'>Upload</Button>
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-medium text-neutral-700">{doctor.name}</div>
                        <div className="text-xl font-medium text-neutral-700">{doctor.email}</div>
                    </div>
                </div>
                {
                    editMode ? (
                        <Button onClick={() => setEditMode(false)} variant='filled'>Submit</Button>
                    ) : (
                        <Button onClick={() => setEditMode(true)} variant='filled' leftSection={<IconEdit />}>Edit</Button>
                    )
                }
            </div >

            <Divider my={15} />

            <div className='overflow-y-auto'>
                <div className="text-2xl py-2 font-medium text-neutral-900">Personal Information</div>
                <Table striped withColumnBorders highlightOnHover>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td className="text-xl">Date of Birth</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <DatePickerInput
                                            placeholder="Date of Birth"
                                            onChange={(date) => {
                                                // Handle date change
                                            }}
                                            clearable
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.dob}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Phone</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <NumberInput
                                            placeholder="Enter your phone number"
                                            hideControls
                                            maxLength={10}
                                            clampBehavior='strict'
                                            onChange={(value) => {
                                                // Handle phone number change
                                            }}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.phone}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Address</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <TextInput
                                            placeholder="Pune, Maharashtra India"
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.address}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Licensce No</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <NumberInput
                                            hideControls
                                            placeholder="2123-4567-8901"
                                            maxLength={12}
                                            clampBehavior='strict'
                                            onChange={(value) => {
                                                // Handle Aadhar number change
                                            }}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.licenseNo}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Specializations</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <Select
                                            // label="Blood Group"
                                            placeholder="Select Specializations"
                                            data={DoctorSpecializations}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.specializations}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Department</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <Select
                                            placeholder="Select Department"
                                            data={DoctorDepartments}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.department}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Total Experience</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <NumberInput
                                            placeholder="Total Experience in Years"
                                            hideControls
                                            maxLength={2}
                                            max={50}
                                            clampBehavior='strict'
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{doctor.experience} Years</Table.Td>
                                )
                            }
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>

            <Modal opened={opened} onClose={close} centered title={<span className='text-xl font-medium'>Upload Profile picture</span>}></Modal>
        </div >
    );
}

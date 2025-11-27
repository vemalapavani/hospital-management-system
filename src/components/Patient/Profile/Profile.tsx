
import { Avatar, Button, Divider, Modal, NumberInput, Select, Table, TagsInput, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BloodGroupData } from '../../../Data/DropDownData';
import { useDisclosure } from '@mantine/hooks';

// Sample user data
const sampleUser = {
    name: 'Pranav Khaire',
    email: 'pranav.khaire@example.com',
    dob: '1999-12-20',
    phone: '+91 9876543210',
    address: 'Pune, Maharashtra, India',
    aadharNo: '1234-5678-9012',
    bloodGroup: 'B+',
    allergies: 'Dust, Pollen',
    chronicDisease: 'None',
};

export default function Profile() {
    // const user = useSelector((state: any) => state.user);
    const user = sampleUser;
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
                        <div className="text-3xl font-medium text-neutral-700">{user.name}</div>
                        <div className="text-xl font-medium text-neutral-700">{user.email}</div>
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
                                    <Table.Td className="text-xl">{user.dob}</Table.Td>
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
                                    <Table.Td className="text-xl">{user.phone}</Table.Td>
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
                                    <Table.Td className="text-xl">{user.address}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Aadhar No</Table.Td>
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
                                    <Table.Td className="text-xl">{user.aadharNo}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Blood Group</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <Select
                                            // label="Blood Group"
                                            placeholder="Select blood group"
                                            data={BloodGroupData}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{user.bloodGroup}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Allergies</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <TagsInput
                                            placeholder="Add allergy"

                                            onChange={(value) => {
                                                // Handle allergies change
                                            }}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{user.allergies}</Table.Td>
                                )
                            }
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-xl">Chronic Disease</Table.Td>
                            {
                                editMode ? (
                                    <Table.Td className="text-xl">
                                        <TagsInput
                                            placeholder="Add chronic disease"

                                            onChange={(value) => {
                                                // Handle allergies change
                                            }}
                                        />
                                    </Table.Td>
                                ) : (
                                    <Table.Td className="text-xl">{user.chronicDisease}</Table.Td>
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

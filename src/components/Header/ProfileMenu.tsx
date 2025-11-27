import { Menu, Text, Avatar } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import { useSelector } from 'react-redux';

export default function ProfileMenu() {
    const user = useSelector((state: any) => state.user);
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <span className='font-medium text-lg text-neutral-900'>{user.name}</span>
                    <Avatar variant='filled' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHORVLY3-9bljdur2Lmf-bFufXufDUrwF92g&s" size={40} alt="it's me" />
                </div>
            </Menu.Target>


            <Menu.Dropdown>
                <Menu.Item>
                    <IconSettings size={14} style={{ marginRight: 8 }} />
                    Settings
                </Menu.Item>
                <Menu.Item>
                    <IconMessageCircle size={14} style={{ marginRight: 8 }} />
                    Messages
                </Menu.Item>
                <Menu.Item>
                    <IconPhoto size={14} style={{ marginRight: 8 }} />
                    Gallery
                </Menu.Item>
                <Menu.Item rightSection={<Text size="xs" color="dimmed">⌘K</Text>}>
                    <IconSearch size={14} style={{ marginRight: 8 }} />
                    Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item>
                    <IconArrowsLeftRight size={14} style={{ marginRight: 8 }} />
                    Transfer my data
                </Menu.Item>
                <Menu.Item color="red">
                    <IconTrash size={14} style={{ marginRight: 8 }} />
                    Delete my account
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
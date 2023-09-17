import { DropdownProps } from "../Dropdown/Dropdown";

export const CreateSettingDropdownItems = () : DropdownProps['dropdownItems'] => {
    return [
        {
            items: [
                {
                    label: 'View profile',
                    endpoint: '/profile',
                },
                {
                    label: 'Settings',
                    endpoint: '/settings/overview',
                },
                {
                    label: 'Download desktop app',
                    endpoint: '/app',
                },
            ],
        },
        {
            items: [
                {
                    label: 'Help',
                    endpoint: '/app',
                },
                {
                    label: 'Discord community',
                    endpoint: '/app',
                },
                {
                    label: 'Documentation',
                    endpoint: '/app',
                },
                {
                    label: 'Changelog',
                    endpoint: '/app',
                }
            ],
        },
        {
            items: [
                {
                    label: 'Log out',
                    endpoint: '/app',
                }
            ],
        },
    ];
}



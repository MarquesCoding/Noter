import { SettingsSideMenuProps } from "./SettingsSideMenu";

export const SettingsSelection = (): SettingsSideMenuProps => {
    return {
        navigationItems: [
            {
                name: "Organisation",
                items: [
                    {
                        name: "Overview",
                        url: "/settings/overview",
                    },
                    {
                        name: "General",
                        url: "/settings/organisation/general",
                        available: true
                    },
                    {
                        name: "Members",
                        url: "/settings/organisation/members",
                        available: true
                    },
                    {
                        name: "Labels",
                        url: "/settings/organisation/labels",
                        available: true
                    },
                    {
                        name: "Roadmaps",
                        url: "/settings/organisation/roadmaps",
                        available: true
                    },
                    {
                        name: "Plans",
                        url: "/settings/plans",
                    },
                    {
                        name: "Billing",
                        url: "/settings/billing",
                        available: true
                    },
                ]
            },
            {
                name: "My Account",
                items: [
                    {
                        name: "Profile",
                        url: "/settings/profile",
                    },
                    {
                        name: "Preferences",
                        url: "/settings/preferences",
                        available: true
                    },
                    {
                        name: "Linked accounts",
                        url: "/settings/linked-accounts",
                        available: true
                    },
                    {
                        name: "Notifications",
                        url: "/settings/notifications",
                        available: true
                    },
                    {
                        name: "Applications",
                        url: "/settings/applications",
                        available: true
                    },
                    {
                        name: "API",
                        url: "/settings/api",
                        available: true
                    },
                ]
            }
        ],
    }
}
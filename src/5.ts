export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

type roleDescription = Record<UserRole, string>


export const RoleDescription: roleDescription = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
};
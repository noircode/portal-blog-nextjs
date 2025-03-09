export interface User {
    ID: number;
    name: string;
    email: string;
    password: string;
}


export interface UpdatePasswordInterface {
    current_password: string;
    new_password: string;
    confirm_password: string;
}
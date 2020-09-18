export class CreateUserDto {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    isActive: boolean;
}
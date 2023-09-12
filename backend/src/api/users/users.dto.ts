import { Transform } from 'class-transformer';
import {IsEmail, IsNotEmpty, MaxLength, MinLength} from 'class-validator';

export class UserLoginDto {
	@IsEmail()
	@Transform((email) => email.value.toLowerCase())
	email!: string;

	@IsNotEmpty() password!: string;
}

export class CreateUserDto {
	@IsEmail()
	@Transform((email) => email.value.toLowerCase())
	email!: string

	@Transform((username) => username.value.toLowerCase())
	@MinLength(6) username!: string;

	@MinLength(6) passwordHash!: string;
}

export class UserInfoDto {
	id!: string;
	email!: string;
}

export class EmailDto {
	@IsEmail()
	@Transform((email) => email.value.toLowerCase())
	email!: string;
}

export class PasswordDto {
	@MinLength(6) password!: string;
	token!: string;
}

export class UpdateUserDto {
	@MaxLength(10) name!: string;
	@MaxLength(10) surname!: string;
	@IsEmail()
	@Transform((email) => email.value.toLowerCase())
	email!: string;
}

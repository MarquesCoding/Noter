import {Body, Controller, Get, Patch, Post, Session, UseGuards, UseInterceptors, Headers} from '@nestjs/common';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { AuthGuard } from '../auth/auth.guard';
import {CreateUserDto, UpdateUserDto} from './users.dto';
import { UserService } from './users.service';
import {SentryInterceptor} from "../../util/SentryInterceptor";
import {PrismaService} from "../../db/prisma/prisma.service";

@UseInterceptors(SentryInterceptor)
@Controller('users')
export class UserController {
	private connectedClients: Map<string, WebSocket> = new Map<string, WebSocket>();

	constructor(private readonly userService: UserService, private readonly prisma: PrismaService) {}

	// @Get('me')
	// @UseGuards(AuthGuard)
	// async getUser(@Session() session: SessionContainer) {
	// 	return this.userService.getUserInfo(session.getUserId());
	// }

	@Post('create')
	async createUser(@Body() createUserDto: CreateUserDto) {
		return this.userService.createUser(createUserDto);
	}

	// @Patch('update')
	// @UseGuards(AuthGuard)
	// async updateUser(@Session() session: SessionContainer, @Body() updateUserDto: UpdateUserDto, @Headers('X-Socket-ID') socketId: string) {
	// 	return this.userService.updateUser(session.getUserId(), updateUserDto, socketId);
	// }
}

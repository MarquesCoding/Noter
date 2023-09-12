import { Injectable, Logger,} from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CreateUserDto } from './users.dto';
import { hash } from 'bcrypt';
import appConfig from "../../config/app.config";
import {captureMessage} from "@sentry/node";

@Injectable()
export class UserService {
	private readonly logger = new Logger(UserService.name);

	constructor(private readonly prisma: PrismaService) {}

	async createUser(createUserDto: CreateUserDto) {

		const user = await this.prisma.user.create({
			data: {
				passwordHash: await hash(createUserDto.passwordHash, appConfig.PASSWORD_SALT_ROUNDS),
				username: createUserDto.username,
				email: createUserDto.email,
				organisation: {
					create: {
						name: `${createUserDto.username}'s organisation`,
						roles: {
							create: [
								{
									name: 'admin',
									permissions: {
										create: {
											canAssignTickets: true,
											canCreateTickets: true,
											canDeleteTickets: true,
											canViewTickets: true,
											canEditTickets: true,
											canCloseTickets: true,
											canCommentTickets: true,
											canCreateBoard: true,
											canCreateBoardTag: true,
										}
									},
								},
								{

									name: 'default',
									permissions: {
										create: {
											canAssignTickets: true,
											canCreateTickets: true,
											canDeleteTickets: false,
											canViewTickets: true,
											canEditTickets: true,
											canCloseTickets: false,
											canCommentTickets: true,
											canCreateBoard: false,
											canCreateBoardTag: false,
										}
									},
									isDefault: true,
								}
							],
						},
						boards: {
							create: {
								name: `${createUserDto.username}'s board`,
								tags: {
									create: [
										{
											name: 'default',
										},
										{
											name: 'important',
										},
										{
											name: 'work',
										},
									],
								},
								ticketColumns: {
									create: [
										{
											name: 'To Do',
											tickets: {
												create: [
													{
														title: 'Welcome to your new board!',
														description: 'This is a ticket. You can edit it, delete it, assign it to someone, close it, comment on it, and more!',
														tags: {
															connect: {
																name: 'default'
															}
														},
														status: 'OPEN',
														createdBy: {
															connect: {
																username: createUserDto.username
															}
														}
													}
												],
											}
										},
									],
								},
							}
						},
					},
				},
			},
			include: {
				organisation: {
					include: {
						roles: true,
						boards: {
							include: {
								ticketColumns: {
									include: {
										tickets: true
									},
								},
								tags: true
							}
						}
					}
				}
			}
		});
		await this.prisma.userToRoles.create({
			data: {
				userId: user.id,
				roleId: user.organisation[0].roles.find(role => role.isDefault).id,
			}
		});

		return user;
	}
}

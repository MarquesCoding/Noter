import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { Response } from 'express';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { PrismaService } from '../../db/prisma/prisma.service';
import { UserLoginDto } from '../users/users.dto';
import { AccessTokenPayload } from './auth.types';
import { STSession } from './supertokens/supertokens.types';

@Injectable()
export class AuthService {
	constructor(private readonly prisma: PrismaService) {}

	async login(userLoginDto: UserLoginDto, resp: Response, req: Request) {
		const user = await this.prisma.user.findUnique({
			where: { email: userLoginDto.email.toLowerCase() },
			select: { id: true, passwordHash: true, role: { include: { role: true } } },
		});

		if (user !== null && user.passwordHash === null) {
			throw new BadRequestException('Please reset your password');
		}

		if (user !== null && (await compare(userLoginDto.password, user.passwordHash ?? ''))) {
			const payload = user.role

			try {
				await STSession.createNewSession(req, resp , user.id, payload);
			}catch {
				throw new BadRequestException('SuperTokens failed');
			}
			return;
		}

		throw new UnauthorizedException('Invalid email or password');
	}

	async logout(session: SessionContainer) {
		await session.revokeSession();
	}

	// async sendPasswordResetTokenEmail(email: string) {
	// 	const token = createToken();
	// 	const timeLimitedToken = `${sha265hex(token)}#${(
	// 		Date.now() +
	// 		appConfig.PASSWORD_RESET_EXPIRY_MINS * 60_000
	// 	).toString()}`;
	//
	// 	const user = await this.prisma.user.update({
	// 		where: { email },
	// 		data: { passwordResetToken: timeLimitedToken },
	// 		select: { email: true, id: true }
	// 	});
	//
	// 	//TODO: SEND EMAIL FOR PASSWORD RESET
	//
	// 	this.logger.log(`User ${user.id} requested password reset`);
	// }

	// async performPasswordReset(token: string, newPassword: string) {
	// 	const user = await this.prisma.user.findFirst({ where: { passwordResetToken: { startsWith: sha265hex(token) } } });
	//
	// 	if (user === null || Number.parseInt(user.passwordResetToken?.split('#').at(1) ?? '0', 10) <= Date.now()) {
	// 		throw new UnauthorizedException('Invalid token. It may have expired.');
	// 	}
	//
	// 	await STSession.revokeAllSessionsForUser(user.id);
	//
	// 	await this.prisma.user.update({
	// 		where: { id: user.id },
	// 		data: { passwordHash: await hash(newPassword, appConfig.PASSWORD_SALT_ROUNDS), passwordResetToken: null }
	// 	});
	//
	// 	this.logger.log(`User ${user.id} successfully performed password reset`);
	// }
}

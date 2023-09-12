import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import {AccessTokenPayload} from "../auth.types";

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredPermissions = this.reflector.getAllAndOverride<any[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);

		if (!requiredPermissions || requiredPermissions.length === 0) {
			// No permissions required, allow access
			return true;
		}

		const request = context.switchToHttp().getRequest();
		const payload: AccessTokenPayload = request.session.getAccessTokenPayload();

		// Check if the user's permissions intersect with the required permissions
		const hasRequiredPermissions = requiredPermissions.some(permission =>
			payload.role.permissions.includes(permission.role.permissions[0])
		);

		return hasRequiredPermissions;
	}
}

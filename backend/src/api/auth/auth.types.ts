import { Role } from '../users/users.types';

export interface AccessTokenPayload {
	role: {
		name: string;
		permissions: {
			id: string;
			canEditTickets: boolean;
			canDeleteTickets: boolean;
			canCreateTickets: boolean;
			canCommentTickets: boolean;
			canAssignTickets: boolean;
			canCloseTickets: boolean;
			canViewTickets: boolean;
			canCreateBoardTag: boolean;
			canCreateBoard: boolean;
			createAt: Date;
			updatedAt: Date;
		}[]
	};
}

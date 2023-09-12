// Would ideally move this into a parent folder to share with associated front-end
export enum Role {
	USER = 'USER',
	ADMIN = 'ADMIN',
	RACEADMIN = 'RACEADMIN',
}
export interface User {
	id: string;
	email: string;
	name: string;
	lastname: string;
	surname: string;
}

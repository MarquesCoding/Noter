import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { AuthModuleConfig, ConfigInjectionToken } from '../config.interface';
import { STSession } from './supertokens.types';
import appConfig from "../../../config/app.config";

@Injectable()
export class SupertokensService {
	constructor(
		@Inject(ConfigInjectionToken) private readonly config: AuthModuleConfig,
		private readonly prisma: PrismaService,
	) {
		supertokens.init({
			appInfo: {
				appName: 'Noterist',
				apiDomain: 'http://localhost:8080',
				websiteDomain: 'http://localhost:5173',
				apiBasePath: '/auth',
				websiteBasePath: '/auth',
			},
			supertokens: { connectionURI: appConfig.ST_CORE_URL, apiKey: appConfig.ST_CORE_API_KEY },
			recipeList: [
				STSession.init({
					exposeAccessTokenToFrontendInCookieBasedAuth: true,
					getTokenTransferMethod: () => 'cookie'
				})
			]
		});
	}
}

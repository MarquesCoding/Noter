import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import appConfig from './config/app.config';
import { PrismaService } from './db/prisma/prisma.service';
import { UserModule } from './api/users/users.module';
import {DatabaseModule} from "./db/prisma/db.module";

@Module({
  imports: [
    AuthModule.forRoot({
      // https://supertokens.com/docs/session/appinfo
      connectionURI: appConfig.ST_CORE_URL,
      appInfo: {
        appName: appConfig.APP_NAME,
        apiDomain: appConfig.API_DOMAIN,
        websiteDomain: appConfig.WEB_DOMAIN,
        apiBasePath: '/'
      }
    }),
    DatabaseModule,
    UserModule
  ],
  providers: [PrismaService],
})
export class AppModule {}

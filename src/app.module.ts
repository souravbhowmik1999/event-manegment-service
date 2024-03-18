import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './modules/event/event.module';
import { DatabaseModule } from './common/database-modules';


@Module({
  imports: [ConfigModule.forRoot(),EventModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

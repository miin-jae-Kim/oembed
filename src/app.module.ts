import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OEmbedModule } from './o-embed/o-embed.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OEmbedModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

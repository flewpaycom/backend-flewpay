import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouchBaseAdapterModule } from './couch-base-adapter/couch-base-adapter.module';
import { CompanyModule } from './company/company.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CouchBaseAdapterModule, CompanyModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

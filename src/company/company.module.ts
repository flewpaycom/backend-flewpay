import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CouchBaseAdapterModule } from 'src/couch-base-adapter/couch-base-adapter.module';

@Module({
  imports: [CouchBaseAdapterModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}

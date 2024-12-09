import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CouchBaseAdapterService } from "../couch-base-adapter/couch-base-adapter.service";
import { Bucket, Cluster, Collection, QueryResult } from 'couchbase';

@Injectable()
export class CompanyService implements OnModuleInit{
  constructor(private couchBaseService: CouchBaseAdapterService) {}
  private collection: Collection;
  private cluster: Cluster;
  private bucket: Bucket;

  async onModuleInit(): Promise<void> {
    this.cluster = await this.couchBaseService.connectDb();
    this.bucket = await this.cluster.bucket('flewpay');
  }
  
  async create(createCompanyDto: CreateCompanyDto):Promise<any> {
    const jsonCompany= JSON.stringify(createCompanyDto);
    const collection = this.bucket
    .scope('flewpay')
    .collection('company');

    await collection.upsert(createCompanyDto.wallet, {
      name:createCompanyDto.name,
      latitude:createCompanyDto.latitude,
      longitude:createCompanyDto.longitude,
      country: createCompanyDto.country,
      type: createCompanyDto.type,
      state: createCompanyDto.state,
      wallet: createCompanyDto.wallet,
    })

    return 'This action adds a new company';
  }

  async findAll(): Promise<any> {
    const users: QueryResult = await this.bucket
      .scope('flewpay')
      .query('SELECT * FROM `company`');
    return users.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}

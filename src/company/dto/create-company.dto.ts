import { IsString, IsNumber, IsEnum } from 'class-validator';

export enum CompanyType {
    CORPORATION = 'corporation',
    LLC = 'llc',
    PARTNERSHIP = 'partnership',
  }
  

export class CreateCompanyDto {
    @IsString()
    name: string;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

    @IsString()
    country: string;

    @IsEnum(CompanyType)
    type: CompanyType;

    @IsString()
    state: string;

    @IsString()
    wallet: string; 
}

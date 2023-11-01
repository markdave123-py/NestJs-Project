import { 
    IsEmail, 
    IsNotEmpty, 
    IsNumberString, 
    IsNotEmptyObject,
    ValidateNested 
} from 'class-validator';
import { createAddressDto } from './createAddress.dto';
import { Type } from 'class-transformer';


export class createCustomerDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNumberString()
    @IsNotEmpty()
    id: number 

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => createAddressDto)
    address: createAddressDto
}
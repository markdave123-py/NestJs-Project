import {  IsNotEmpty } from 'class-validator';
export class createAddressDto  {

    @IsNotEmpty()
    line1: string;

    @IsNotEmpty()
    line2: string;

    @IsNotEmpty()
    zip: string;

}
import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res,Post, Body } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import { Response } from 'express';
import { createCustomerDto } from 'src/customers/dtos/createCustomer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService){}

    @Get(':id')
    getCustomer(@Req() req: Request, @Res() res: Response, @Param('id', ParseIntPipe) id: number) {

        
        const customer = this.customersService.findCustomer(id);
        
        if (!customer) {
            res.status(404).send('Customer not found');
        }else{
            res.status(200).send(customer);
        }
        
    }

    @Get('search/:id')
    getCustomersById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomer(id);
        if (customer) {
            return customer;
        }else{
            throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST)
        }
    }

    @Post('create')
    createCustomer(@Body() createCustomerDto: createCustomerDto){
        console.log(createCustomerDto)
    }
}

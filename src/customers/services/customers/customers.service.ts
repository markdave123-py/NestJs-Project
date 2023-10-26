import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    private customers: Customer[] = [{
        id: 1,
        email: "david@gmail.com",
        "name": "David"
        },
    {
        id: 2,
        email: "mark@gmail.com",
        "name": "Mark"
        },
    {
        id: 3,
        email: "chinedu@gmail.com",
        "name": "Chinedu"
        }
]

    findCustomer(id: number ){
        return this.customers.find(user => user.id === id);
    }

    getCustomers(){
        return this.customers
    }

    createCustomer(createCustomer: createCustomerDto){
        this.customers.push(createCustomer)
    }
}

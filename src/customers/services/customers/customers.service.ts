import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    users = [{
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
        return this.users.find(user => user.id === id);
    }
}

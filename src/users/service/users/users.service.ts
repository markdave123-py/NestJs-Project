import { Injectable } from '@nestjs/common';
import { User } from '../../types/user';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: "david",
            password: "edwen,a dnca"
        },
        {
            username: "davidmark",
            password: "edwen,anW23UO dnca"
        },
        {
            username: "CHINEDU",
            password: "ZYXWVU098776"
        }
    ];

    getusers() {
        return this.users
    }

    getUserByUsername(username: string){
        return this.users.find((user) => user.username === username)
    }

}
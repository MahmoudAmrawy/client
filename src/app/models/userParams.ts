import { User } from "./user";

export class UserParams {
    gender: string;
    minAge = 12;
    maxAge = 100;
    pageNumber = 1;
    pageSize = 6;
    orderBy = 'lastActive';

    constructor(user: User) {
        this.gender = user.Gender === 'female' ? 'male' : 'female'; 
    }
}
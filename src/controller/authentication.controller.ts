import { getManager } from "typeorm";

import { User } from "@entity/User.entity";

export class AuthenticationController {
    
    constructor() {}

    async register(req:any, res:any, next:any) {

        // get a post repository to perform operations with post
        const userRepository = getManager().getRepository(User);

        // create a real post object from post json object sent over http
        const newUser = userRepository.create(req.body);

        // save received post
        await userRepository.save(newUser);

        res.status(200).json({
            result: 'Success',
        });
    }
}
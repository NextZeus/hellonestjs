import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "../auth.service";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // we may pass an options object to specify different property names, for example:
        // super({ usernameField: 'email', passwordField: 'password', })
        super();
    }
    // For each strategy, Passport will call the verify function
    // the only significant difference in the validate() method for each strategy is how you determine if a user exists and is valid.
    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        //  If a user is found and the credentials are valid, the user is returned so Passport can complete its tasks 
        // (e.g., creating the user property on the Request object. req.user)
        return user;
    }
}
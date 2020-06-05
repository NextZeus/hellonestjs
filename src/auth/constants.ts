export const jwtConstants = {
    secret: 'secretKey'
};

export interface JwtPayload {
    userId: number;
    username: string;
}
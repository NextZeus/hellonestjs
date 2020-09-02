import { IsString, IsInt, IsNumber } from 'class-validator'

// DTO Date Transfer Object 数据传输对象

//类是 JavaScript ES6标准的一部分，因此它们在编译后的 JavaScript 中被保留为真实的实体
//由于 TypeScript 接口在发送过程中被删除，Nest 不能在运行时引用它们

export class CreateCatDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
}
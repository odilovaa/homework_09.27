import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


interface UserAttrs{
    first_name: string;
    last_name: string;
    username: string;
    hashed_password: string;
    telegram_link: string;
    email: string;
    phone: string;
    user_photo: string;
    birthday: Date;
    is_owner: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
};

@Table({ tableName: 'users'})
export class User extends Model<User, UserAttrs>{
    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
    })
    first_name: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
    })
    last_name: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    username: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
    })
    telegram_link: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    email: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    phone: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
    })
    user_photo: string;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.DATE,
    })
    birthday: Date;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_owner: boolean;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;

    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @Column({
        type: DataType.STRING,
    })
    activation_link: string;


}

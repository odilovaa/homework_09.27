import { Column, DataType, Model, Table } from "sequelize-typescript";


interface ComfortAttrs {
    name: string;
}

@Table({ tableName: 'comforts'})
export class Comfort extends Model<Comfort, ComfortAttrs>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @Column({
        type: DataType.STRING,
        unique: true
    })
    name: string;
}

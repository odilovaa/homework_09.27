import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "src/region/models/region.model";


interface DistrictAttrs {
    name: string;
    regionId: number;
}

@Table({ tableName: 'district'})
export class District extends Model<District, DistrictAttrs>{
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


    // @ForeignKey(() => Region)
    // @Column({ type: DataType.INTEGER})
    // regionId: number;

    @HasMany(() => Region)
    @Column({ type: DataType.INTEGER})
    regionId: number;
}

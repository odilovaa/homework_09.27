import { BelongsTo, BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { District } from "src/district/models/district.model";

interface RegionAttrs {
    name: string;
}

@Table({ tableName: 'regions'})
export class Region extends Model<Region, RegionAttrs>{
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

    @BelongsTo(() => District)
    district: District[];
}

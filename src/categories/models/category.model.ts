import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";


interface CategoryAttrs {
    name: string;
    parentId: number;
}

@Table({ tableName: 'category'})
export class Category extends Model<Category, CategoryAttrs>{
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

    @BelongsTo(() => Category)
    district: Category[];
    

    @HasMany(() => Category)
    @Column({ type: DataType.INTEGER})
    regionId: number;
}

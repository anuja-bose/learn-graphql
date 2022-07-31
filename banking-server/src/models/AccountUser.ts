//// src/models/Book.ts
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class AccountUser extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  fullname: string;

  @Field(() => String)
  @Column()
  username: string;

  @Field(() => String)
  @Column()
  accountNumber: string;

  @Field(() => Number)
  @Column()
  amount: Number;

}





import { InputType, Field } from "type-graphql";

@InputType()
export class AccountUserInput {

  @Field({ nullable: true })
  fullname?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  accountNumber?: string;

  @Field({ nullable: true, defaultValue : 0 })
  amount?: Number;
}
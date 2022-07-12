import { InputType, Field } from "type-graphql";

@InputType()
export class CreateAccountUserInput {

  @Field({ nullable: true })
  fullname?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  accountNumber?: string;

}
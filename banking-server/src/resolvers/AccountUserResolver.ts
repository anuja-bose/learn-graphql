import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateAccountUserInput } from "../inputs/AccountUser/CreateAccountUserInput";
import { UpdateAccountUserInput } from "../inputs/AccountUser/UpdateAccountUserInput";

import { AccountUser } from "../models/AccountUser";

@Resolver()
export class AccountUserResolver {
    @Query(() => [AccountUser])
    accountUser() {
        return AccountUser.find();
    }

    @Query(() => AccountUser)
    accountUserById(@Arg("id") id: string) {
        return AccountUser.findOne({ where: { id } });
    }
   
    @Mutation(() => AccountUser)
    async createAccountUser(@Arg("data") data: CreateAccountUserInput) {
        const accountUser = new AccountUser();
        Object.assign(accountUser, data);
        await accountUser.save();
        return accountUser;
    }

    @Mutation(() => AccountUser)
    async updateAccountUser(@Arg("id") id: string, @Arg("data") data: UpdateAccountUserInput) {
        const accountUser = await AccountUser.findOne({ where: { id } });
        if (!accountUser) throw new Error("AccountUser not found!");
        Object.assign(accountUser, data);
        await accountUser.save();
        return accountUser;
    }

    @Mutation(() => Boolean)
    async deleteAccountUser(@Arg("id") id: string) {
        const accountUser = await AccountUser.findOne({ where: { id } });
        if (!accountUser) throw new Error("AccountUser not found!");
        await accountUser.remove();
        return true;
    }
}
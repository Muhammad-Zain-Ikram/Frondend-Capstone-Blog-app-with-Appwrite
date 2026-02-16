import { Account, Client, ID } from "appwrite"
import conf from "../conf";

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password,name}) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            })

            if(userAccount){
                this.loginUser({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            console.error(error);
            
        }
    }
    async loginUser({email,password}){
        try {
            await this.account.createEmailPasswordSession({
                email,
                password
            })
        } catch (error) {
            console.error(error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.error(error);
            return null
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.error(error);
            return null
        }
    }

}


const authService = new AuthService

export default authService

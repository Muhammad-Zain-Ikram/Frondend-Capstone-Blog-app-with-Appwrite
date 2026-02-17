import { Client, Query, TablesDB } from "appwrite"
import conf from "../conf"


export class config{
    client = new Client()
    database
    bucket

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.database = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug,content, featuredImage, UserID,status}){
       try {
         return await this.database.createRow({
             databaseId: conf.appwriteDatabaseId,
             tableId: conf.appwriteCollectionId,
             rowId: slug,
             data:{
                 title,
                 content,
                 featuredImage,
                 UserID,
                 status
             }
         })
       } catch (error) {
        console.error(error);
        return null
        
       }
    }
    
    async UpdatePost(slug, {title,content, featuredImage, status}) {
        try {
             return await this.database.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            
        }
    }

    async DeletePost ({slug}){
        try {
            await this.database.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })

            return null
        } catch (error) {
            console.error(error);
            
        }
    }

    async getPost({slug}){
        try {
            await this.database.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteDatabaseId,
                rowId: slug
            })
        } catch (error) {
            console.error(error);
            return false
        }
    }

    async getAllPost(queries=[Query.equal("status", true)]){
        try {
            await this.database.listRows({
                databaseId:conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries
            })
        } catch (error) {
            console.error(error);
            
        }
    }

}


const services = new config()


export default services
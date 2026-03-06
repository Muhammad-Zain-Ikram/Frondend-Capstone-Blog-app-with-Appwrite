import { Client, Query, TablesDB } from "appwrite"
import conf from "../conf"

export const client = new Client()
export class config {
    database

    constructor() {
        client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.database = new TablesDB(client)
    }

    async createPost({ title, slug, content, featuredImage, userID, status }) {

        try {
            return await this.database.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    userID,
                    status: Boolean(status)
                }
            })
        } catch (error) {
            console.error(error);
            return null

        }
    }

    async UpdatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.database.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status: JSON.parse(status)
                }
            )
        } catch (error) {

        }
    }

    async DeletePost({ slug }) {
        try {

            await this.database.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })

            return true
        } catch (error) {
            console.error(error);

        }
    }

    async getPost(slug) {
        try {
            const post = await this.database.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
            return post
        } catch (error) {
            console.error(error);
            return false
        }
    }

    async getAllPost(queries = [Query.equal("status", true)]) {
        try {
            return await this.database.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries
            })
        } catch (error) {
            console.error(error);

        }
    }

}


const postServices = new config()


export default postServices
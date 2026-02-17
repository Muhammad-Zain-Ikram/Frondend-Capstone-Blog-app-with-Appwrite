import { Client, ID, Storage } from "appwrite"
import conf from "../conf"

export class FileService {
    client = new Client()
    bucket

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.bucket = new Storage(this.client)
    }

     async fileUpload(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file
            })
        } catch (error) {
            console.error(error);
            
        }
    }

    async DeleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId
            })
            return true
        } catch (error) {
            console.error(error);
            
        }
    }

    async FilePreview(fileId){
        try {
            return await this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId
            })
        } catch (error) {
            console.error(error);
            
        }
    }
}

const fileService = new FileService

export default fileService
import { Inngest } from "inngest";
import userModel from "../Models/userModel.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "fly-zone" });

// create user
const syncUserCreation = inngest.createFunction(
    {id:"sync-user-from-clerk"},
    {event:"clerk/user.created"},
    async ({event})=>{
        const {id , first_name , last_name , email_address , image_url} = event.data;
        const userData = {
            _id : id,
            name:`${first_name} ${last_name}`,
            email:email_address[0].email_address,
            image : image_url
        }
        await userModel.create(userData);
    }
)

// delete user
const syncUserDeletion = inngest.createFunction(
    {id : "delete-user-with-clerk"},
    {event: "clerk/user.deleted"},
    async ({event})=>{
        const {id} = event.data;
        await userModel.findByIdAndDelete(id)
    }
)

// update user
const syncUserUpdation = inngest.createFunction(
    {id : "update-user-with-clerk"},
    { event : "clerk/user.updated"},
    async ({event})=>{
        const {id , first_name , last_name , email_address , image_url} = event.data;
        const userData = {
            _id : id,
            name:`${first_name} ${last_name}`,
            email:email_address[0].email_address,
            image : image_url
        }
        await userModel.findByIdAndUpdate(id,userData)
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserCreation,syncUserDeletion,syncUserUpdation];

//guest users

import commonAPI from "./commonAPI"
import SEVERURL from "./serverURL"

//register api called by Auth component when register button clicked,By default -content-type:"application/json"
export const registerAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SEVERURL}/register`,reqBody)
}
//login api
export const loginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SEVERURL}/login`,reqBody)
}
//google-login api
export const googleloginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SEVERURL}/google-login`,reqBody)
}
//home page books api
// all career api

//authorised users api - user
//view all books
//view single book
//upload single book
//profile update
//view selled book
//purchased books
//approved books

//authorised users api - admin
//add carreer
//update admin
//list users
//approve books

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
export const getHomeBooksAPI = async ()=>{
  return await  commonAPI("GET",`${SEVERURL}/home-books`)
}
//all job api
export const getAllJobAPI = async (searchKey)=>{
  return await  commonAPI("GET",`${SEVERURL}/get-allJobs?search=${searchKey}`)
}
// all career api

//authorised users api - user
//view all books - call from all books when page starts
export const getAllBooksAPI = async (search,reqHeader)=>{
  return await  commonAPI("GET",`${SEVERURL}/all-books?search=${search}`,{},reqHeader)
}
//view single book - called by view component.
export const getSingleBookAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("GET",`${SEVERURL}/books/${bookId}/view`,{},reqHeader)
}

//upload single book
export const addBookAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SEVERURL}/add-book`,reqBody,reqHeader)
}
//ALL USER UPLOAD BOOKS books
export const getAllUserUploadBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SEVERURL}/user-books`,{},reqHeader)
}
//all user purchased books
export const getAllUserPurchasedBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SEVERURL}/user-bought-books`,{},reqHeader)
}

//Remove User Upload Books
export const removeUserUploadBooksAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("DELETE",`${SEVERURL}/user-books/${bookId}/remove`,{},reqHeader)
}
//profile update
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SEVERURL}/user-profile/edit`,reqBody,reqHeader)
}
//view selled book



//authorised users api - admin
//add carreer
//update admin
export const updateAdminProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SEVERURL}/admin-profile/edit`,reqBody,reqHeader)
}

//list users called by admin collection component
export const getAllUsersAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SEVERURL}/all-user`,{},reqHeader)
}
//approve books
export const updateBookStatusAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SEVERURL}/admin/book/approve`,reqBody,reqHeader)
}

//list all books
export const listAllBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SEVERURL}/admin-all-books`,{},reqHeader)
}

//add-Job
export const addJobAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SEVERURL}/admin/addJob`,reqBody,reqHeader)
}

export const removeJobAPI = async (jobId,reqHeader)=>{
  return await commonAPI("DELETE",`${SEVERURL}/job/${jobId}/remove`,{},reqHeader)
}



import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { getAllUsersAPI, listAllBooksAPI } from '../../services/allAPI';
import SEVERURL from '../../services/serverURL';

function ResourceAdmin() {

  const [bookListStatus, setBookListStatus] = useState(true);
  const [userListStatus, setUserListStatus] = useState(false);
  const [allUsers,setAllUsers] = useState([])
  const [token,setToken] = useState("")
  const [userBooks,setUserBooks] = useState([])

  //console.log(allUsers);

  console.log(userBooks);
  
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      //setToken(token)
      if(bookListStatus==true){
        getAllBooks(token)
      }else if(userListStatus == true){
        getAllUsers(token)
      }else{
        console.log("Something went wrong");
        
      }
    }
  },[userListStatus])
  const getAllBooks = async (userToken)=>{
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try{
      const result = await listAllBooksAPI(reqHeader)
      if(result.status == 200){
        setUserBooks(result.data)
      }else{
        console.log(result);
        
      }
    }catch(err){
      console.log(err);
      
    }
  }

  const getAllUsers = async (userToken)=>{
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try{
      const result = await getAllUsersAPI(reqHeader)
      if(result.status == 200){
        setAllUsers(result.data)
      }else{
        console.log(result);
        
      }
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-4 ">
        <div className="col-span-1">
          <AdminSideBar />
        </div>

        <div className="col-span-3 p-8 border-1">
          <div className="p-10">
            <h1 className="text-3xl text-center font-bold">All Resources</h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center items-center border-b">
            <p
              onClick={() => {
                setBookListStatus(true);
                setUserListStatus(false);
              }}
              className={`p-4 cursor-pointer ${bookListStatus
                  ? "text-blue-500 border-t border-l border-r border-gray-200"
                  : "text-gray-600"
                }`}
            >
              Book Status
            </p>

            <p
              onClick={() => {
                setBookListStatus(false);
                setUserListStatus(true);
              }}
              className={`p-4 cursor-pointer ${userListStatus
                  ? "text-blue-500 border-t border-l border-r border-gray-200"
                  : "text-gray-600"
                }`}
            >
              User Status
            </p>
          </div>

          {/* Content */}
          <div >
            {
              bookListStatus &&
              <div>
                <div className="md:grid grid-cols-4 w-full mt-5">
                  { userBooks?.length>0 ?
                    userBooks.map((items,index)=>(
                      <div key={index} className="p-3">
                    <div className="shadow">
                      <img width={"!00%"} height={"300px"} src={items?.imageUrl} alt="book" />
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-blue-700 font-bold">{items?.author}</p>
                        <p >{items?.title}</p>
                        <p>$ {items?.discountPrice}</p>
                      </div>
                    </div>
                  </div>
                    ))
                    
                  :
                  <p>No Books</p>}
                  
                </div>
              </div>
            }
            {userListStatus && 

              <div className="md:grid  grid-cols-3 w-full justify-center ms-3 mt-3 gap-3 ">
                {
                  allUsers?.length>0 ?
                   allUsers.map((items,index)=>(
                    <div key={index} className="shadow rounded p-3   w-full bg-gray-200 ">
                  <p className=' text-red-600 font-bold break-words'>userId:{items?._id}</p>
                  <div className="grid grid-cols-2 justify-center items-center">
                    <img src={items?.profile?`${SEVERURL}/uploads/${items?.profile}`:"https://tse3.mm.bing.net/th/id/OIP.1waDZ8Q2eWBkenMscI08qAHaHa?pid=Api&P=0&h=180"} alt="book" className='w-40 ' style={{ borderRadius: '50%' }} />
                    <div className='flex flex-col ml-3 w-full'>
                      <p className='text-blue-700 font-bold break-words'>{items?.username}</p>
                      <p className='break-words'>{items?.email}</p>
                    </div>


                  </div>
                </div>
                   ))
                   :
                   <p>No Users yet</p>
                  }
              </div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default ResourceAdmin
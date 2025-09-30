import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

function ResourceAdmin() {
 
  const [bookListStatus, setBookListStatus] = useState(true);
const [userListStatus, setUserListStatus] = useState(false);

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
            className={`p-4 cursor-pointer ${
              bookListStatus
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
            className={`p-4 cursor-pointer ${
              userListStatus
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
          <div className="p-3">
            <div className="shadow">
              <img width={"!00%"} height={"300px"} src="https://static.vecteezy.com/system/resources/thumbnails/001/374/950/small_2x/stack-of-books-photo.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p >Book Tilte</p>
                <p>$ 8</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="shadow">
              <img width={"!00%"} height={"300px"} src="https://static.vecteezy.com/system/resources/thumbnails/001/374/950/small_2x/stack-of-books-photo.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p >Book Tilte</p>
                <p>$ 8</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="shadow">
              <img width={"!00%"} height={"300px"} src="https://static.vecteezy.com/system/resources/thumbnails/001/374/950/small_2x/stack-of-books-photo.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p >Book Tilte</p>
                <p>$ 8</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="shadow">
              <img width={"!00%"} height={"300px"} src="https://static.vecteezy.com/system/resources/thumbnails/001/374/950/small_2x/stack-of-books-photo.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p >Book Tilte</p>
                <p>$ 8</p>
              </div>
            </div>
          </div>
        </div>
          </div>
            }
          {userListStatus && <div>👤 User List Content</div>}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

}

export default ResourceAdmin
import { useState } from "react";
import profile_pic from "../images/profile-8.jpg";
import CreatePostPage from "./CreatePostPage";
function SideBar() {
  let [createPost, setCreatePost] = useState(false);
  function handleCreatePost() {
    setCreatePost(true);
  }
  function handleClosebtn(){
    setCreatePost(false);
  }
  return (
    <>
      <div className="sidebar hidden lg:block w-[200px] py-2 absolute left-[60px] mt-3 bg-gray-900 transition-all duration-200 lg:fixed">
        <div className="flex items-center gap-5 px-2 py-1">
          <img src={profile_pic} className="w-[40px] h-[40px] rounded-full" />
          <div>
            <h1 className="text-white font-semibold">Nishanth</h1>
            <h1 className="text-white font-semibold">@nishanth123</h1>
          </div>
        </div>
        <div className="mt-3 ">
          <div className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"></path>
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"></path>
            </svg>
            <h1 className="font-semibold text-lg text-white">Home</h1>
          </div>
          <div className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"></path>
            </svg>
            <h1 className="font-semibold text-lg text-white">notifications</h1>
          </div>
          <div className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-chat-left-text"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></path>
            </svg>
            <h1 className="font-semibold text-lg text-white">Messages</h1>
          </div>

          <div className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"></path>
            </svg>
            <h1 className="font-semibold text-lg text-white">Bookmarks</h1>
          </div>

          <div className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
            </svg>
            <h1 className="font-semibold text-lg text-white">Settings</h1>
          </div>
        </div>
      </div>
      <div className="sidebar-btn hidden lg:block absolute left-[60px] top-[380px] transition-all duration-100 lg:fixed">
        <button
          onClick={handleCreatePost}
          className="w-[200px] border-none text-md rounded-full bg-rose-500 text-white sm:font-semibold sm:px-3 py-1  hover:bg-rose-700"
        >
          Create post
        </button>
      </div>
      {/* ------CreatePost page ---------  */}
      {createPost && (
        <div className="post-page w-[fit-content] bg-slate-800 absolute top-[10%] z-50 left-[50%] py-5 px-[30px] translate-x-[-50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-[98%] cursor-pointer"
            onClick={handleClosebtn}
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>

          <div className="container-one flex gap-5">
            <div className="mb-2">
              <h1 className="text-white font-semibold mb-1">Title</h1>
              <input
                type="text"
                className="input-title bg-gray-700 outline-none px-2 py-1 text-white"
              />
              <h1 className="text-white font-semibold mb-1">Location</h1>
              
              <input
                type="text"
                className="input-location bg-gray-700 outline-none px-2 py-1 text-white"
              />
            </div>
            <div>
              <h1 className="text-white font-semibold mb-1">Caption</h1>
              <textarea
                className="caption text-area outline-none bg-gray-700 py-1 px-2 text-white"
                rows="4"
                cols="30"
              ></textarea>
            </div>
          </div>
          <div className="post-footer mt-4 flex gap-5">
            <div className="">
              <h1 className="font-semibold text-white mb-2">Upload Image</h1>
              <input type="file" className="input-file text-white" />
            </div>
            <button className="post-btn mt-5 bg-rose-500 text-white h-[30px] w-[100px]  font-semibold rounded-full">
              Post
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default SideBar;

import { useRef, useState } from "react";
import profile_pic from "../images/profile-3.jpg";
import SideBar from "./SideBar";
import story from "../images/story-1.jpg";
import story_one from "../images/story-2.jpg";
import story_three from "../images/story-3.jpg";
import story_four from "../images/story-4.jpg";
import story_five from "../images/story-5.jpg";
import story_six from "../images/story-6.jpg";
import profile_one from "../images/profile-1.jpg";
import profile_two from "../images/profile-2.jpg";
import profile_three from "../images/profile-3.jpg";
import profile_four from "../images/profile-4.jpg";
import profile_five from "../images/profile-5.jpg";
import profile_six from "../images/profile-6.jpg";
import profile_seaven from "../images/profile-7.jpg";
import profile_eight from "../images/profile-8.jpg";
import profile_nine from "../images/profile-9.jpg";
import profile_ten from "../images/profile-10.jpg";
import profile_eleven from "../images/profile-11.jpg";
import SearchList from "./SearchList";
import ModalSearchBar from "./ModalSearchBar";
import CreatePostPage from "./CreatePostPage";
let names = [
  {
    id: "Nishanth",
    img: profile_eight,
    name: "@nishanth_123",
    caption:
      "Adventurous soul exploring life's wonders. Coffee connoisseur ☕️ | Nature enthusiast 🌿 | Music aficionado 🎵 | Tech geek 🖥️ | Capturing moments one click at a time 📸 | Dreamer, believer, achiever. Let's connect! #Nishanth",
  },
  {
    id: "Rakesh",
    img: profile_nine,
    name: "rakesh_2001",
    caption:
      "Wanderlust soul exploring the world's beauty. Foodie at heart 🍜 | Adventure seeker 🏞️ | Fitness enthusiast 💪 | Lifelong learner 📚 | Embracing every moment with gratitude. Let's embark on this journey together! #Rakesh",
  },
  {
    id: "Danwada",
    img: profile_five,
    name: "@danwada_komal",
    caption:
      "Free spirit dancing through life's rhythms. Art lover 🎨 | Wanderer 🌍 | Storyteller 📖 | Dreamer, believer, achiever. Capturing memories one frame at a time 📷 | Let's share laughter and create memories! #Danwada",
  },
  {
    id: "Himanshu",
    img: profile_nine,
    name: "@iam_himanshu",
    caption:
      "Explorer of life's mysteries, seeker of inner peace. Fitness enthusiast 💪 | Yoga practitioner 🧘 | Nature lover 🌳 | Passionate about personal growth 🌱 | Spreading positivity one smile at a time 😊 | Let's journey towards enlightenment! #Himanshu",
  },
  {
    id: "Arpit",
    img: profile_one,
    name: "@mr_arpit",
    caption:
      "Adventurer exploring the endless possibilities of existence. Music lover 🎶 | Dreamer 🌌 | Innovator 💡 | Embracing change and growth with open arms. Let's craft our own destiny! #Arpit",
  },
  {
    id: "john",
    img: profile_eleven,
    name: "@john_123",
    caption:
      "Curious soul wandering through life's tapestry. Bookworm 📚 | History buff 🏛️ | Tech enthusiast 🖥️ | Storyteller 📖 | Embracing diversity and cultural richness. Let's learn, grow, and inspire together! #John",
  },
  {
    id: "kunal",
    img: profile_nine,
    name: "its_kunal",
    caption:
      "Seeker of life's adventures, lover of simple joys. Food enthusiast 🍲 | Traveler ✈️ | Explorer 🌄 | Passionate about community building and empowerment. Let's make every moment count! #Kunal",
  },
  {
    id: "pranav",
    img: story_six,
    name: "@pranav",
    caption:
      "Dreamer with a heart full of wanderlust. Photography enthusiast 📸 | Adventure seeker 🌍 | Lifelong learner 📚 | Spreading positivity and kindness wherever I go. Let's embark on this journey of discovery together! #Pranav",
  },
  {
    id: "gugan kapoor",
    img: story,
    name: "@gugan_kapoor",
    caption:
      "Visionary with a passion for innovation and creativity. Entrepreneur 💼 | Tech enthusiast 🖥️ | Trendsetter 🌟 | Committed to making a difference in the world. Let's revolutionize the way we live! #GuganKapoor",
  },
  {
    id: "Arpit singh",
    img: profile_six,
    name: "@arpit_singh",
    caption:
      "Adventurous spirit on a quest for life's treasures. Outdoor enthusiast 🏕️ | Thrill-seeker 🎢 | Dreamer 🌌 | Embracing challenges and pushing boundaries. Let's write our own story of triumph! #ArpitSingh",
  },
];

function Navbar() {
  let [openCreatePost, setOpenCreatePost] = useState(false);
  let [openCreatePostSmallScreen, setOpenCreatePostSmallScreen] = useState(false);
  let searchInput = useRef();
  let [toggleMenuBar, setToggleMenuBar] = useState(false);
  let [toggleMessagePage, setToggleMessagePage] = useState(false);
  let [result, setResult] = useState([]);
  function handleSearch(e) {
    let inputName = e.target.value.trim().toLowerCase();
    if (inputName.length > 0) {
      let filteredName = names.filter((name) =>
        name.name.toLowerCase().includes(inputName)
      );
      setResult(filteredName);
    } else {
      setResult([]);
    }
  }
  function handleMenuBar() {
    console.log("running");
    setToggleMenuBar(!toggleMenuBar);
  }
  function messageBoxHandler() {
    setToggleMessagePage(!toggleMessagePage);
    handleMenuBar();
  }
  function closeMessageBox() {
    setToggleMessagePage(false);
  }
  function focusSearch() {
    searchInput.current.focus();
    setToggleMenuBar(false);
  }
  function handleCreatePostPage(){
    setOpenCreatePost(true);
  }
  function handlePostPageForSmallScreen(){
    setOpenCreatePostSmallScreen(true);
    handleMenuBar();
  }
  function handleClose(){
    setOpenCreatePostSmallScreen(false);
  }
  return (
    <>
      <div className="navbar w-[100%] fixed top-0 z-50 mx-auto sm:w-full bg-gray-900 sm:mt-0 flex gap-1 justify-between px-2 items-center py-1 sm:justify-evenly transition-all">
        <h1 className="logo text-[25px] text-white font-semibold sm:text-[30px] ">
          Connectify
        </h1>
        <div className="search-bar sm:w-[30%] bg-black rounded-full">
          <input
            ref={searchInput}
            onChange={(e) => {
              handleSearch(e);
            }}
            type="text"
            placeholder="Search for creators and inspirations..."
            className="bg-black rounded-full px-5 py-2 w-[100%] outline-none text-white focus:border border-gray-600"
          />
        </div>
        <div>
          <button onClick={handleCreatePostPage} className="hidden sm:block  w-[100px] border-none text-md bg-rose-500 text-white sm:font-semibold sm:px-3 py-1 sm:w-[130px] rounded-full hover:bg-rose-700">
            Create Post
          </button>
        </div>
        <div onClick={handleMenuBar} className="menu-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        {/* --------profile pic-------- */}
        <div className="profile-pic">
          <img src={profile_eight} className="w-[30px] h-[30px] rounded-full" />
        </div>
      </div>
      {/* ---------------------- Menu bar ------------------------------------- */}
      <div
        className={
          toggleMenuBar
            ? "menu-bar w-[180px] p-2 bg-slate-900 absolute top-[55px] right-[14px] z-50 sm:fixed"
            : "hidden"
        }
      >
        <svg
          onClick={handleMenuBar}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="ml-[90%] cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
        <div>
          <div className="mt-3 ">
            <div onClick={handleMenuBar} className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className=""
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
              <h1 className="font-semibold text-lg text-white">
                notifications
              </h1>
            </div>
            <div
              onClick={messageBoxHandler}
              className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer"
            >
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
            <div
              onClick={focusSearch}
              className="flex items-center gap-7 w-[100%] hover:bg-black py-1 px-2 mb-1 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <h1 className="font-semibold text-lg text-white">Search</h1>
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
            <div className="w-[100%] py-1 px-2 mb-1 cursor-pointer">
              <button onClick={handlePostPageForSmallScreen} className="create-post-button bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-4 py-1 rounded-full w-[100%]">Create Post</button>
            </div>
          </div>
        </div>
      </div>
      {/* ------Menu bar closing ----------  */}
      {/* ------------message Box ----------  */}
      <div>
        <div
          className={
            toggleMessagePage
              ? "message-box lg:hidden mt-2 bg-gray-900 w-[200px] p-2 rounded-md absolute top-[55px] left-[10px] z-50"
              : "hidden"
          }
        >
          <svg
            onClick={closeMessageBox}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            fill="white"
            className="mt-1 absolute right-2 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
          <h1 className="text-white w-[fit-content] m-auto mb-2 font-semibold flex items-center gap-1">
            Messages
          </h1>

          <div className="message cursor-pointer w-[100%] hover:bg-slate-950 p-1 flex items-center gap-3 relative">
            <img
              src={profile_seaven}
              className="w-[30px] h-[30px] rounded-full"
            />
            <div className="online bg-green-400 rounded-full w-[8px] h-[8px] absolute top-[10px]"></div>

            <div>
              <h1 className="text-white">@himanshu</h1>
              <h1 className="mt-[-3px] text-gray-500 text-sm">
                Good morning..
              </h1>
            </div>
          </div>
          <div className="message mt-2 w-[100%] hover:bg-slate-950 p-1 cursor-pointer flex items-center gap-3">
            <img
              src={profile_nine}
              className="w-[30px] h-[30px] rounded-full"
            />

            <div>
              <h1 className="text-white">Jorge_2001</h1>
              <h1 className="mt-[-3px] text-gray-500 text-sm">Received..</h1>
            </div>
          </div>
          <div className="message cursor-pointer w-[100%] hover:bg-slate-950 p-1 mt-2 flex items-center gap-3">
            <img
              src={profile_five}
              className="w-[30px] h-[30px] rounded-full"
            />

            <div>
              <h1 className="text-white">sandra__001</h1>
              <h1 className="mt-[-3px] text-gray-500 text-sm">Thanxx 😍</h1>
            </div>
          </div>
          <div className="message mt-2 cursor-pointer w-[100%] hover:bg-slate-950 p-1 flex items-center gap-3 relative">
            <img src={profile_six} className="w-[30px] h-[30px] rounded-full" />
            <div className="online bg-green-400 rounded-full w-[8px] h-[8px] absolute top-[10px]"></div>

            <div>
              <h1 className="text-white">@shrey!!!</h1>
              <h1 className="mt-[-3px] text-gray-500 text-sm">
                Ready for the trip
              </h1>
            </div>
          </div>
          <div className="message mt-2 cursor-pointer w-[100%] hover:bg-slate-950 p-1 flex items-center gap-3">
            <img
              src={profile_eleven}
              className="w-[30px] h-[30px] rounded-full"
            />

            <div>
              <h1 className="text-white">rakesh_danwada</h1>
              <h1 className="mt-[-3px] text-gray-500 text-sm">
                hii Brother 👋
              </h1>
            </div>
          </div>
        </div>
      </div>
      <SearchList result={result} searchInput={searchInput}/>
      {openCreatePost ? <CreatePostPage setOpenCreatePost={setOpenCreatePost}/> : ""}
      {/* =========================== small screen create post modal ===========  */}
      <div className={openCreatePostSmallScreen?"post-page w-[fit-content] bg-slate-800 absolute top-[10%] z-50 left-[50%] py-5 px-[30px] translate-x-[-50%]":"hidden"}>
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
          onClick={handleClose}
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>

        <div className="container-one flex gap-5 ">
          <div className="mb-2">
            <h1 className="text-white font-semibold mb-1">Title</h1>
            <input
              type="text"
              className="input-title bg-gray-700 outline-none px-2 py-1 text-white"
            />
            <h1 className="mb-1 text-white font-semibold mt-2">Location</h1>
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
            <input type="file" className="input-file text-gray-600" />
          </div>
          <button className="post-btn mt-5 bg-rose-500 text-white h-[30px] w-[100px]  font-semibold rounded-full">
            Post
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;

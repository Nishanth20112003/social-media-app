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



import { useEffect, useState, useRef } from "react";

function SearchList({ result,searchInput }) {
  let [profile, setProfile] = useState({});
  let [following, setFollowing] = useState(false);
  let [searchList, setSearchList] = useState(false);
  let [modal, setModal] = useState(true);
  function handleClick(name, id, imgSrc, caption) {
    console.log(name, id, imgSrc, caption);
    setProfile({ name, id, imgSrc, caption });
    setSearchList(true);
    setModal(true);
  }
  function closeModal() {
    setProfile({});
    setSearchList(false);
    setModal(false);
  }
  useEffect(() => {
    console.log("profile : ", profile);
  }, [profile]);
  function handleFollowButton(){
    setFollowing(!following)
    ;
  }
  return (
    <>
      {result.length > 0 && (
        <div
          className={
            searchList
              ? "hidden"
              : "mt-[-19px] search-list w-[70%] bg-slate-800 p-2 absolute left-[50%] rounded-md translate-x-[-50%] z-40"
          }
        >
          {result.map((names) => {
            return (
              <div
                onClick={() =>
                  handleClick(names.name, names.id, names.img, names.caption)
                }
                className="flex items-center gap-3 mb-2 cursor-pointer hover:bg-slate-900 rounded-lg p-1"
              >
                <img
                  src={names.img}
                  className="profile-img w-[30px] h-[30px] rounded-full"
                />
                <div className="">
                  <h1 className="mb-[-10px] font-semibold text-white">
                    {names.name}
                  </h1>
                  <h1 className="text-gray-400 text-sm mt-2 ml-1">
                    {names.id}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {Object.keys(profile).length > 0 && (
        <div
          className={
            modal
              ? "bg-black w-[100%] h-[8000vh] rounded-lg p-2 absolute top-0 z-50"
              : "hidden"
          }
        >
          <div>
            <div className="w-[fit-content] bg-gray-500 rounded-full p-1">
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22 "
              fill="white"
              className="cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            </div>
            <div className="text-center w-[fit-content] py-2 px-10 m-auto mb-3  shadow-lg">
              <img
                src={profile.imgSrc}
                className="rounded-full w-[160px] h-[160px] object-cover m-auto"
              />
              <h1 className="font-semibold text-white mt-2">{profile.id}</h1>
              <h1 className="text-gray-400 mt-1">{profile.name}</h1>
              <h1 className=" text-gray-500 mt-2">{profile.caption}</h1>
              <div className="flex gap-3 items-center w-[fit-content] m-auto mt-2">
              <button onClick={handleFollowButton} className="bg-blue-600 text-white font-semibold rounded-full px-2 py-1 w-[120px] m-auto mt-2 flex justify-center items-center gap-2  hover:bg-blue-800">
                {following?"Following" : "Follow"}
              </button>
              <button className="text-white border h-[32px] mt-2 px-6  font-semibold rounded-full border-none bg-gray-900">Message</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SearchList;

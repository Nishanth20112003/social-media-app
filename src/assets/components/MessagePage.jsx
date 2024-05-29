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
function MessagePage() {
  return (
    <>
      <div className="hidden lg:block bg-gray-900 w-[220px] p-2 absolute right-[15px] top-[65px] lg:fixed lg:top-[85px]">
        <h1 className="text-white w-[fit-content] m-auto mb-2 font-semibold">
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
            <h1 className="mt-[-3px] text-gray-500 text-sm">Good morning..</h1>
          </div>
        </div>
        <div className="message mt-2 w-[100%] hover:bg-slate-950 p-1 cursor-pointer flex items-center gap-3">
          <img src={profile_nine} className="w-[30px] h-[30px] rounded-full" />

          <div>
            <h1 className="text-white">Jorge_2001</h1>
            <h1 className="mt-[-3px] text-gray-500 text-sm">Received..</h1>
          </div>
        </div>
        <div className="message cursor-pointer w-[100%] hover:bg-slate-950 p-1 mt-2 flex items-center gap-3">
          <img src={profile_five} className="w-[30px] h-[30px] rounded-full" />

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
            <h1 className="mt-[-3px] text-gray-500 text-sm">hii Brother 👋</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default MessagePage;

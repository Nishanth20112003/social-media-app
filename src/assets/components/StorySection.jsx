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

function StorySection() {
  return (
    <>
      <div className="story-container px-2 w-[fit-content]  mt-[73px] m-auto flex gap-3 z-40">
        <div className="story  w-[70px] sm:w-[87px] h-[147px] relative hover:scale-110 transition-transform duration-200">
          <img src={story} className="rounded-2xl" />
          <div className="tint w-[100%] h-[100%] absolute bottom-0 rounded-2xl"></div>
          <img
            src={profile_eight}
            className="w-[30px] h-[30px] rounded-full absolute top-2 left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="story w-[70px] sm:w-[87px] h-[147px] relative hover:scale-110 transition-transform duration-200">
          <img src={story_one} className="rounded-2xl " />
          <div className="tint w-[100%] h-[100%] absolute bottom-0 rounded-2xl"></div>
          <img
            src={profile_three}
            className="w-[30px] h-[30px] rounded-full absolute top-2 left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="story w-[70px] sm:w-[87px] h-[147px] relative hover:scale-110 transition-transform duration-200">
          <img src={story_three} className="rounded-2xl " />
          <div className="tint w-[100%] h-[100%] absolute bottom-0 rounded-2xl"></div>
          <img
            src={profile_ten}
            className="w-[30px] h-[30px] rounded-full absolute top-2 left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="story w-[70px] sm:w-[87px] h-[147px] relative hover:scale-110 transition-transform duration-200">
          <img src={story_four} className="rounded-2xl " />
          <div className="tint w-[100%] h-[100%] absolute bottom-0 rounded-2xl"></div>
          <img
            src={profile_nine}
            className="w-[30px] h-[30px] rounded-full absolute top-2 left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="story w-[70px] sm:w-[87px] h-[147px] relative hover:scale-110 transition-transform duration-200">
          <img src={story_five} className="rounded-2xl " />
          <div className="tint w-[100%] h-[100%] absolute bottom-0 rounded-2xl"></div>
          <img
            src={profile_seaven}
            className="w-[30px] h-[30px] rounded-full absolute top-2 left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="story w-[70px] sm:w-[87px] h-[147px] relative hover:scale-110 transition-transform duration-200">
          <img src={story_six} className="rounded-2xl " />
          <div className="tint w-[100%] h-[100%] absolute bottom-0 rounded-2xl"></div>
          <img
            src={profile_five}
            className="w-[30px] h-[30px] rounded-full absolute top-2 left-[50%] translate-x-[-50%]"
          />
        </div>
      </div>
    </>
  );
}
export default StorySection;

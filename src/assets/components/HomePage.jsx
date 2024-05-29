import FeedSection from "./FeedSection";
import LoginForm from "./LoginForm";
import MessagePage from "./MessagePage";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import StorySection from "./StorySection";


function HomePage(){
     return(
          <>
               <Navbar/>
               <SideBar />
               <StorySection/>   
               <MessagePage/>
               <FeedSection/>
          </>
     )
}
export default HomePage;
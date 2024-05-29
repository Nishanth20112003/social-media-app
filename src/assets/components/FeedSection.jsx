import { useState } from "react";
import feed_one from "../images/feed-1.jpg";
import feed_two from "../images/feed-2.jpg";
import feed_three from "../images/feed-3.jpg";
import feed_four from "../images/feed-4.jpg";

import profile_one from "../images/profile-4.jpg";
import profile_eight from "../images/profile-8.jpg";
import profile_nine from "../images/profile-9.jpg";
import profile_ten from "../images/profile-10.jpg";

function FeedSection() {
  const [likeColors, setLikeColors] = useState([false, false, false, false]);

  const likeBtnHandler = (index) => {
    const newLikeColors = [...likeColors];
    newLikeColors[index] = !newLikeColors[index];
    setLikeColors(newLikeColors);
  };

  return (
    <div className="feed-container mt-3 w-[599px] m-auto p-2 transition-all duration-300">
      <div className="feed p-2 bg-gray-900 rounded-lg">
        <div className="header flex items-center gap-2 mb-2">
          <img src={profile_one} className="w-[30px] h-[30px] rounded-full" />
          <div>
            <h1 className="text-white font-semibold">Lana Rose</h1>
            <h1 className="text-gray-600 text-sm">Dubai, 15 mins ago</h1>
          </div>
        </div>
        <div className="content relative">
          <img src={feed_one} className="rounded-lg" />
        </div>
        <div className="footer mt-3">
          <div className="icons flex gap-3 items-center">
            <svg
              onClick={() => likeBtnHandler(0)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={likeColors[0] ? "red" : "white"}
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
            {/* Other icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              className="message-icon"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              class="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </div>
        </div>
      </div>
      {/* Other feed items */}
      <div className="feed p-2 bg-gray-900 rounded-lg mt-3">
        <div className="header flex items-center gap-2 mb-2">
          <img src={profile_nine} className="w-[30px] h-[30px] rounded-full" />
          <div>
            <h1 className="text-white font-semibold">Benjamin</h1>
            <h1 className="text-gray-600 text-sm">Us, 30 mins ago</h1>
          </div>
        </div>
        <div className="content relative">
          <img src={feed_three} className="rounded-lg" />
        </div>
        <div className="footer mt-3">
          <div className="icons flex gap-3 items-center">
            <svg
              onClick={() => likeBtnHandler(1)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={likeColors[1] ? "red" : "white"}
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
            {/* Other icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              className="message-icon"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              class="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="feed p-2 bg-gray-900 rounded-lg mt-3">
        <div className="header flex items-center gap-2 mb-2">
          <img src={profile_eight} className="w-[30px] h-[30px] rounded-full" />
          <div>
            <h1 className="text-white font-semibold">John Doe</h1>
            <h1 className="text-gray-600 text-sm">UK, 1 hour ago</h1>
          </div>
        </div>
        <div className="content relative">
          <img src={feed_two} className="rounded-lg" />
        </div>
        <div className="footer mt-3">
          <div className="icons flex gap-3 items-center">
            <svg
              onClick={() => likeBtnHandler(2)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={likeColors[2] ? "red" : "white"}
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
            {/* Other icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              className="message-icon"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              class="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="feed p-2 bg-gray-900 rounded-lg mt-3">
        <div className="header flex items-center gap-2 mb-2">
          <img src={profile_ten} className="w-[30px] h-[30px] rounded-full" />
          <div>
            <h1 className="text-white font-semibold">Daniel</h1>
            <h1 className="text-gray-600 text-sm">Uk, 2 hours ago</h1>
          </div>
        </div>
        <div className="content relative">
          <img src={feed_four} className="rounded-lg" />
        </div>
        <div className="footer mt-3">
          <div className="icons flex gap-3 items-center">
            <svg
              onClick={() => likeBtnHandler(3)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={likeColors[2] ? "red" : "white"}
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
            {/* Other icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              className="message-icon"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              class="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedSection;

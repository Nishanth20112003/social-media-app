function CreatePostPage({ setOpenCreatePost }) {
  function handleClose() {
    setOpenCreatePost(false);
  }
  return (
    <>
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
          onClick={handleClose}
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
export default CreatePostPage;

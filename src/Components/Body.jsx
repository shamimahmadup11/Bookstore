const Body = () => {
    

  return (
    <div className="bg-gray-100 max-w-screen-2xl container  max-auto md:px-20 px-4 flex flex-col md:flex-row  gap-4">
      <div className="h-auto w-full md:w-1/2 flex flex-col gap-10 my-10 order-2 md:order-1 ">
        <div className=" flex flex-col gap-3">
          <h1 className=" text-xl text-black ">
            Hello , Welcomes here to learn something{" "}
            <span className="text-pink-500"> new everyday !!!</span>
          </h1>
          <p className=" text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit repellat pariatur totam nesciunt eaque. soluta quisquam dolorum, labore nisi nemo reprehenderit ducimus assumenda, fuga voluptates adipisci quos veniam . </p>
        </div>
        <div className="bg-gray-100 border w-full ">
          <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow outline-none bg-gray-100" placeholder="Email" />
          </label>
        </div>
        <div>
        <button className="btn btn-active btn-secondary">Secondary</button>
        </div>
      </div>
      <div className="h-auto w-full md:w-1/2 order-1 my-10">
        <img
          src="https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg"
          className="w-full h-full object-cover rounded-md "
          alt="img"
        />
      </div>
    </div>
  );
};

export default Body;

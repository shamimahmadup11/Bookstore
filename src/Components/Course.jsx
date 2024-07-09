


import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Course = () => {
  const [bookData, setBookData] = useState([]); // initialize with an empty array

  const getBookData = async () => {
    try {
      const response = await axios.get('http://localhost:4002/bookstore');
    //   console.log(response.data);
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <div className="bg-gray-100 flex justify-center flex-col align-middle gap-3">
        <div className='flex flex-col justify-center align-middle gap-2'> <h1 className="text-black font-bold text-center">We are delighted to  have you
        <span className='text-pink-500'> here!:) </span> </h1>
      <p className="text-black text-center m-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere molestias amet consequatur corrupti odio harum numquam omnis voluptate maiores.
      </p> </div>
        <div className='flex flex-row justify-center align-middle'>

      <Link to="/" className='bg-pink-500 h-10 w-16 rounded p-2 text-white
       '>
        Back
      </Link>
     
        </div>
     
     
      
      <div className="flex flex-wrap justify-center align-middle">
        {bookData.map((data) => {
          return <Card data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
};

export default Course;
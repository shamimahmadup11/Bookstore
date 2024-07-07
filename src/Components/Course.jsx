


import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Course = () => {
  const [bookData, setBookData] = useState([]); // initialize with an empty array

  const getBookData = async () => {
    try {
      const response = await axios.get('http://localhost:4002/bookstore');
      console.log(response.data);
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <div className="bg-gray-100">
      <h1 className="text-black font-bold text-center">this is the heading</h1>
      <p className="text-black text-center m-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere molestias amet consequatur corrupti odio harum numquam omnis voluptate maiores.
      </p>
      <div className="flex flex-wrap justify-center align-middle">
        {bookData.map((data) => {
          return <Card data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
};

export default Course;
import DataList from "../public/DataList.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  const fiterData = DataList.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="bg-gray-100  max-w-screen-2xl container max-auto md:px-20 px-4 py-10 ">
        <h1 className="text-black font-bold ">FreeBook</h1>
        <p className="text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          blanditiis quod, iste autem porro earum sint quas maiores assumenda
          quaerat et! Distinctio alias repudiandae neque nobis dicta. Obcaecati,
          libero esse.
        </p>
        <div>
          <Slider {...settings} className=" flex my-10  " >
            {fiterData.map((data) => {
              return <Card data={data} key={data.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
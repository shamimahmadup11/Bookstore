const Card = ({ data }) => {
    
    return (
      <>
      <div className="card bg-base-100 w-64 h-74 shadow-xl">
  <figure>
    <img
      src={data.imgae}
      className="h-44 w-full"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-gray-100">
    <h2 className="card-title text-black">
      Book!
      <div className="badge badge-secondary ">{data.category}</div>
    </h2>
    <p className="text-black">{data.title}!</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"> price : {data.price}</div>
      
    </div>
  </div>
</div>
      </>
    );
  };
  
  export default Card;
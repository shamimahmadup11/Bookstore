import DataList from '../public/DataList.json'
import Card from './Card'
const Course = () => {
    console.log(DataList)
  return (
    <div className=' bg-gray-100'>
      <h1 className='text-black font-bold  text-center'>this is the heading </h1>
      <p className=' text-black  text-center m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere molestias amet consequatur corrupti odio harum numquam omnis voluptate maiores.</p>
      <div className=' flex flex-wrap justify-center align-middle'>
    {
        DataList.map((data)=>{
            return <Card data={data} key={data.id} />
        })
    }
      </div>
    </div>
  )
}

export default Course

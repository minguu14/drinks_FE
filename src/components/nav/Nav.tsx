import left from "../../img/left.png";
import right from "../../img/right.png";

export default function Nav() {
  return (
  <nav className='flex justify-center items-center mt-[150px]'>
    <div className='mr-3'>
    <img src={left} alt="leftArrow" />
    </div>
    <div className='border-2 w-[1200px] h-[300px] bg-custom-image'></div>
    <div className='ml-3'>
    <img src={right} alt="rightArrow" />
    </div>
  </nav>
  )
}

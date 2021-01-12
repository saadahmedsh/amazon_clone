import react from 'react'
import './Carousel.css'
import img1 from './Images/1.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.jpg'







const Carousel= ()=>
{


    return (
<>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide"/>
    </div>
  </div>
</div>




</>


    );


}




export default Carousel;

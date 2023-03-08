import React from 'react'
import './testimonials.css'
import Avtr1 from '../../assets/avatar1.jpg'
import Avtr2 from '../../assets/avatar2.jpg'
import Avtr3 from '../../assets/avatar3.jpg'
import Avtr4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
          modules={[ Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr1}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr2}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr3}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr4}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials

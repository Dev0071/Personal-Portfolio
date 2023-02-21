import React from 'react'
import './testimonials.css'
import Avtr1 from '../../assets/avatar1.jpg'
import Avtr2 from '../../assets/avatar2.jpg'
import Avtr3 from '../../assets/avatar3.jpg'
import Avtr4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avtr1}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avtr1}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avtr1}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avtr1}alt="Avatar 0ne" />
          </div>
            <h5 className='client__name'>Earnest Achila</h5>
            <small className='client__review'> Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto voluptate illo non accusamus autem, perspiciatis quam quod quidem 
            fuga doloremque cum expedita eligendi iure qui rem, ad eaque sequi, 
            commodi dolore deleniti?</small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials

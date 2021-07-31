import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Scrollbar, A11y,Autoplay]);


const data = [
  {
    id:1,
    username: 'Fernando Otálora',
    titulo: 'Doctor en Fisiología Sensorial',
    testimonial: 'Investigo el comportamiento sensorial de los animales desde un enfoque fisiológico y biosemiótico.',
    img:'/user-1.png'
  },
  {
    id:2,
    username: 'Elis Aldana',
    titulo: 'Doctor en Ciencias',
    testimonial: 'Profesor Titular del Departamento de Biología de la Facultad de Ciencias de la Universidad de Los Andes.',
    img:'/user-2.png'
  },
  {
    id:3,
    username: 'Ricardo Otálora',
    titulo: 'Ing. en Informática y músico',
    testimonial: 'Desarrollo de aplicaiones web en Django, Html, Css  y  músico pianista.',
    img:'/user-3.png'
  },
  {
    id:4,
    username: 'Oscar Páez',
    titulo: 'Biólogo',
    testimonial: 'Doctorante de Etología de la Facultad de Ciencias de la Universidad de Los Andes.',
    img:'/user-4.png'
  }

]

function Slider() {
  return (
  
   <div className="Slider" id = "equipo">
     <div className="titulo">Colaboradores</div>
    <Swiper  
      spaceBetween={5}
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }}
      loop={true}
      slidesPerView={1} 
      navigation
      /* pagination={{ clickable: true }} */
      scrollbar={false}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        "640": {
          "slidesPerView": 1,
          "spaceBetween": 10
        },
        "768": {
          "slidesPerView": 2,
          "spaceBetween": 10
        },
        "1024": {
          "slidesPerView": 3,
          "spaceBetween": 20
        }
      }}
    >
     { data.map(user => (
       <SwiperSlide key={user.id} className="slide">
         <div className="slide-content">
           <div className="user-image">
              <img src={user.img} alt="" className="user-photo"/>
           </div>
             <p>{user.username}</p>
             <p className="user-title">{user.titulo}</p>
             <p className="user-testimonial"> 
             "<i>{user.testimonial}</i>" 
             </p>
         </div>
       </SwiperSlide>
       
      
     ))}
    
  </Swiper>
  </div>
   
  );
}

export default Slider;
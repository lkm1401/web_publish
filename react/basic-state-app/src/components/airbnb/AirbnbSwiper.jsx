import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function AirbnbSwiper() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="https://a0.muscache.com/im/pictures/miso/Hosting-49676256/original/346eb304-91c7-4d9b-b78a-1ee1f445507e.jpeg" /></SwiperSlide>
            <SwiperSlide><img src="https://a0.muscache.com/im/pictures/miso/Hosting-49676256/original/346eb304-91c7-4d9b-b78a-1ee1f445507e.jpeg" /></SwiperSlide>
            <SwiperSlide><img src="https://a0.muscache.com/im/pictures/miso/Hosting-49676256/original/346eb304-91c7-4d9b-b78a-1ee1f445507e.jpeg" /></SwiperSlide>
            <SwiperSlide><img src="https://a0.muscache.com/im/pictures/miso/Hosting-49676256/original/346eb304-91c7-4d9b-b78a-1ee1f445507e.jpeg" /></SwiperSlide>
            
        </Swiper>
        );
}

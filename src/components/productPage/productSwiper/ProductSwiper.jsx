// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './productSwiper.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleProductSwiper = ({ shownImages }) => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={30}
            navigation={true}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className="swiper"
        >
            {shownImages.map((image) => {
                return (
                    <SwiperSlide className="swiper-slide" key={image.file_id}>
                        <img
                            src={image.img_url}
                            alt={image.referencia + image.file_id}
                            loading="lazy"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SingleProductSwiper;

import { Container } from "@mui/material";
import HeadingText from "../../Shared/HeadingText/HeadingText";
import CustomerReview from "../../Shared/CustomerReview/CustomerReview";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

const UserReview = () => {
  return (
    <div className="mb-36">
      <HeadingText
        heading1={"Our Client"}
        heading2={"Says"}
        subHeading={
          "Thank you for choosing our services! We value your feedback. Your input helps us continually improve and serves as a guide for others considering our offerings. We appreciate your time and trust in our services!"
        }
      />

      <Container>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        effect={'fade'}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={1500}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <CustomerReview
              customerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              customerName={"Mehedi Hasan"}
              reviewItem={"Luxury House in Greenville"}
              review={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis est illo nemo molestias molestiae quia labore ipsa, dolores iste doloremque ex voluptas enim laboriosam, error beatae corporis modi voluptatem quo suscipit, eveniet libero dolorem rem."
              }
            />
        </SwiperSlide>
        <SwiperSlide>
        <CustomerReview
              customerImg={
                "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
              }
              customerName={"Alif Mamun"}
              reviewItem={"Apartment with Central Park View"}
              review={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis est illo nemo molestias molestiae quia labore ipsa, dolores iste doloremque ex voluptas enim laboriosam, error beatae corporis modi voluptatem quo suscipit, eveniet libero dolorem rem."
              }
            />
        </SwiperSlide>
        <SwiperSlide>
        <CustomerReview
              customerImg={
                "https://clipart-library.com/new_gallery/45-455875_black-person-png-business-professional-man-png.png"
              }
              customerName={"Foysal Ahmed"}
              reviewItem={"Modern Condo for Sale"}
              review={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis est illo nemo molestias molestiae quia labore ipsa, dolores iste doloremque ex voluptas enim laboriosam, error beatae corporis modi voluptatem quo suscipit, eveniet libero dolorem rem."
              }
            />
        </SwiperSlide>
      </Swiper>
      </Container>
    </div>
  );
};

export default UserReview;
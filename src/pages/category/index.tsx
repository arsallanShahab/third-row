import FlexContainer from "@/components/system/flex-container";
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { A11y, Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const MUSIC_DATA = [
  {
    title: "Parallax Ballet Show",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-1.png",
    price: "$12",
  },
  {
    title: "Parallax Ballet Show",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-2.png",
    price: "$45",
  },
  {
    title: "Singers on Stage",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-3.png",
    price: "$45",
  },
  {
    title: "Street Dance Showdown",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-4.png",
    price: "$45",
  },
  {
    title: "Street Dance Showdown",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-1.png",
    price: "$45",
  },
  {
    title: "Street Dance Showdown",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-2.png",
    price: "$45",
  },
];

const Category = (props: Props) => {
  const { category } = useParams();
  const formattedCategory = category?.replace(/-/g, " ");

  const prevRefMusic = useRef(null);
  const nextRefMusic = useRef(null);

  const prevRefPopular = useRef(null);
  const nextRefPopular = useRef(null);

  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    setIsSwiperReady(true);
  }, []);

  return (
    <FlexContainer variant="column-start" gap="7xl">
      <FlexContainer
        variant="column-start"
        className="min-h-screen bg-[var(--zinc)] px-10 pb-20"
        gap="3xl"
      >
        {/* {category} */}
        {/* <img
        src="/category-bg.webp"
        alt="Category Background"
        className="w-full h-full object-cover"
      /> */}
        <FlexContainer
          variant="column-start"
          className="mt-24 py-10 border-b border-b-zinc-300"
        >
          {" "}
          <h1 className="text-6xl font-bold text-[var(--grey-dark)] capitalize">
            {formattedCategory}
          </h1>
          <p className="text-xl text-[var(--grey)]">
            Explore the best events in {formattedCategory}
          </p>
        </FlexContainer>
        <FlexContainer variant="row-between" alignItems="center">
          <h3 className="text-2xl font-semibold text-[var(--grey-dark)]">
            Trendings Events
          </h3>
          <FlexContainer alignItems="center" gap="xl">
            <button
              className="px-3 py-4 rounded-3xl bg-white cursor-pointer hidden sm:flex"
              ref={prevRefMusic}
            >
              <ChevronLeft className="w-7 stroke-2 text-[var(--grey-dark)]" />
            </button>
            <button
              className="px-3 py-4 rounded-3xl bg-white cursor-pointer hidden sm:flex"
              ref={nextRefMusic}
            >
              <ChevronRight className="w-7 stroke-2 text-[var(--grey-dark)]" />
            </button>
          </FlexContainer>
        </FlexContainer>
        {isSwiperReady && (
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={40}
            navigation={{
              prevEl: prevRefMusic?.current,
              nextEl: nextRefMusic?.current,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="w-fit slideshow"
            // thumbs={{ swiper: thumbsSwiper }}
          >
            {MUSIC_DATA.map((e, i) => {
              return (
                <SwiperSlide>
                  <FlexContainer
                    variant="column-start"
                    key={i}
                    // className="min-w-[320px]"
                  >
                    <img
                      src={e.imgSrc}
                      className="w-full h-[350px] object-cover rounded-lg"
                    />
                    <FlexContainer variant="row-between">
                      <FlexContainer alignItems="center">
                        <Calendar className="w-4 text-[var(--zinc-dark)]"></Calendar>
                        <p className="text-sm text-[var(--zinc-dark)]">
                          {e.date}
                        </p>
                      </FlexContainer>
                      <FlexContainer alignItems="center">
                        <MapPin className="w-4 text-[var(--zinc-dark)]"></MapPin>
                        <p className="text-sm text-[var(--zinc-dark)]">
                          {e.location}
                        </p>
                      </FlexContainer>
                    </FlexContainer>
                    <h3 className="text-xl font-semibold text-[var(--grey-dark)]">
                      {e.title}
                    </h3>
                  </FlexContainer>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </FlexContainer>
      <FlexContainer variant="column-start" gap="3xl" className="px-10">
        <h3 className="text-4xl font-semibold text-[var(--grey-dark)]">
          Popular
        </h3>
        {isSwiperReady && (
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={40}
            navigation={{
              prevEl: prevRefMusic?.current,
              nextEl: nextRefMusic?.current,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="w-fit slideshow"
            // thumbs={{ swiper: thumbsSwiper }}
          >
            {MUSIC_DATA.map((e, i) => {
              return (
                <SwiperSlide>
                  <FlexContainer
                    variant="column-start"
                    key={i}
                    // className="min-w-[320px]"
                  >
                    <img
                      src={e.imgSrc}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />

                    <h3 className="text-xl font-semibold text-[var(--grey-dark)]">
                      {e.title}
                    </h3>
                    <p className="text-sm">From {e.price}</p>
                  </FlexContainer>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Category;

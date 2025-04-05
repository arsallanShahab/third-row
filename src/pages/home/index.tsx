import FlexContainer from "@/components/system/flex-container";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { A11y, Autoplay, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const SPORTS_DATA = [
  {
    title: "Soccer Championship: Battle for the Cup",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/sports-1.png",
  },
  {
    title: "Regional Motocross Championship",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/sports-2.png",
  },
  {
    title: "Regional Motocross Championship",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/sports-3.png",
  },
  {
    title: "Regional Motocross Championship",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/sports-4.png",
  },
  {
    title: "Regional Motocross Championship",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/sports-1.png",
  },
  {
    title: "Regional Motocross Championship",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/gym.png",
  },
];
const MUSIC_DATA = [
  {
    title: "Parallax Ballet Show",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-1.png",
  },
  {
    title: "Parallax Ballet Show",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-2.png",
  },
  {
    title: "Singers on Stage",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-3.png",
  },
  {
    title: "Street Dance Showdown",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-4.png",
  },
  {
    title: "Street Dance Showdown",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-1.png",
  },
  {
    title: "Street Dance Showdown",
    date: "Jul 8 10:30",
    location: "New York",
    imgSrc: "/music-2.png",
  },
];

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sportsContainer = useRef<HTMLDivElement | null>(null);
  const musicContainer = useRef<HTMLDivElement | null>(null);
  return (
    <FlexContainer variant="column-start" gap="5xl">
      {/* Search Bar */}
      <FlexContainer
        variant="column-start"
        className="section bg-[var(--zinc)]"
        gap="3xl"
      >
        <FlexContainer
          variant="row-between"
          alignItems="center"
          className="p-5 bg-white rounded-[99px] border-2 border-[#D5D2D3] "
        >
          <FlexContainer
            alignItems="center"
            gap="none"
            className="w-full relative"
          >
            <Search className="-mt-0.5 w-5 h-5 text-[var(--zinc-dark)] absolute left-3" />
            <Input
              placeholder="Search Category"
              className="w-full pl-10 pr-3 py-4 text-2xl border-none shadow-none h-auto rounded-[99px] bg-transparent focus:outline-none focus:ring-0 focus:border-none"
            />
          </FlexContainer>
          <span className="h-8 w-[1px] bg-[var(--zinc-dark)]"></span>
          <FlexContainer alignItems="center">
            <FlexContainer
              alignItems="center"
              gap="none"
              className="w-full relative min-w-[280px]"
            >
              <Calendar className="-mt-0.5 w-5 h-5 text-[var(--zinc-dark)] absolute left-3" />
              <Input
                placeholder="Date"
                className="w-full pl-10 pr-3 py-4 text-2xl border-none shadow-none h-auto rounded-[99px] bg-transparent focus:outline-none focus:ring-0 focus:border-none"
              />
            </FlexContainer>
            <span className="h-8 w-[1px] bg-[var(--zinc-dark)]"></span>

            <FlexContainer
              alignItems="center"
              gap="none"
              className="w-full relative min-w-[280px]"
            >
              <MapPin className="-mt-0.5 w-5 h-5 text-[var(--zinc-dark)] absolute left-3" />
              <Input
                placeholder="Location"
                className="w-full pl-10 pr-3 py-4 text-2xl border-none shadow-none h-auto rounded-[99px] bg-transparent focus:outline-none focus:ring-0 focus:border-none"
              />
            </FlexContainer>
            <button className="btn-filled">SEARCH</button>
          </FlexContainer>
        </FlexContainer>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className="w-fit h-[600px] slideshow"
          modules={[Pagination, A11y, Autoplay, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="slide">
            <FlexContainer
              className="w-full h-full relative"
              alignItems="center"
              gap="7xl"
            >
              <FlexContainer
                variant="column-start"
                gap="5xl"
                className="min-w-[450px]"
              >
                <FlexContainer
                  variant="column-start"
                  gap="xl"
                  className="w-full"
                >
                  {" "}
                  <h1 className="text-5xl text-[var(--grey-dark)]">
                    Discover Events of{" "}
                  </h1>
                  <h1 className="text-5xl text-[var(--grey-dark)] font-bold flex">
                    Olivia Rodrigo
                  </h1>
                  <p className="text-lg text-[var(--grey-dark)] z-10">
                    Tickets for events at one place
                  </p>
                </FlexContainer>
                <FlexContainer>
                  <button className="btn-outlined">SEE TICKETS</button>
                </FlexContainer>
              </FlexContainer>
              <div className="flex-1 h-full w-full">
                <img
                  src="/slide-one.png"
                  alt="Hero"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </FlexContainer>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </FlexContainer>

      {/* Category Cards */}
      <FlexContainer
        variant="column-start"
        gap="3xl"
        className="section bg-white pb-10"
      >
        <FlexContainer variant="row-between">
          <FlexContainer variant="column-start" gap="sm">
            <p className="text-base font-medium text-[var(--zinc-dark)]">
              All the Fun starts here
            </p>
            <h3 className="text-3xl font-semibold text-[var(--grey-dark)]">
              Entertainment Guides
            </h3>
          </FlexContainer>
          <FlexContainer>
            <button className="px-5 py-10 rounded-lg bg-[#FDECF2]">
              <ChevronLeft className="w-9 h-9 stroke-2 text-[var(--grey-dark)]" />
            </button>
            <button className="px-5 py-10 rounded-lg bg-[#FDECF2]">
              <ChevronRight className="w-9 h-9 stroke-2 text-[var(--grey-dark)]" />
            </button>
          </FlexContainer>
        </FlexContainer>
        <div className="grid grid-cols-4 gap-7">
          <FlexContainer
            variant="column-center"
            className="bg-[#FEF2F2] px-5 py-10 rounded-xl"
          >
            <div className="w-[100px] height-[100px] bg-[#D96868] rounded-[99px] p-7">
              <img
                src="/assets/mask.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-base font-semibold text-[var(--grey-dark)]">
              Art & Theater
            </h4>
            <p className="text-sm text-[var(--zinc-dark)]">3 Events</p>
          </FlexContainer>
          <FlexContainer
            variant="column-center"
            className="bg-[#E7F7FF] px-5 py-10 rounded-xl"
          >
            <div className="w-[100px] height-[100px] bg-[#68B1D9] rounded-[99px] p-7">
              <img
                src="/assets/football.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-base font-semibold text-[var(--grey-dark)]">
              Sports
            </h4>
            <p className="text-sm text-[var(--zinc-dark)]">5 Events</p>
          </FlexContainer>
          <FlexContainer
            variant="column-center"
            className="bg-[#EDFFF1] px-5 py-10 rounded-xl"
          >
            <div className="w-[100px] height-[100px] bg-[#68D981] rounded-[99px] p-7">
              <img
                src="/assets/music.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-base font-semibold text-[var(--grey-dark)]">
              Concert
            </h4>
            <p className="text-sm text-[var(--zinc-dark)]">2 Events</p>
          </FlexContainer>
          <FlexContainer
            variant="column-center"
            className="bg-[#FEF2F2] px-5 py-10 rounded-xl"
          >
            <div className="w-[100px] height-[100px] bg-[#D96868] rounded-[99px] p-7">
              <img
                src="/assets/music.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-base font-semibold text-[var(--grey-dark)]">
              Concert
            </h4>
            <p className="text-sm text-[var(--zinc-dark)]">3 Events</p>
          </FlexContainer>
        </div>
      </FlexContainer>

      {/* Events */}
      <FlexContainer
        variant="column-start"
        gap="3xl"
        className="section bg-white pb-10"
      >
        <FlexContainer variant="row-between" alignItems="center">
          <FlexContainer variant="column-start" gap="sm">
            <p className="text-base font-medium text-[var(--zinc-dark)]">
              Discover the fun!
            </p>
            <h3 className="text-3xl font-semibold text-[var(--grey-dark)]">
              Upcoming Events
            </h3>
          </FlexContainer>
          <FlexContainer>
            <Link to={"/"} className="btn-underlined">
              VIEW ALL
              <ArrowRight className="w-4 h-4 text-[var(--grey-dark)]" />
            </Link>
          </FlexContainer>
        </FlexContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 *:h-[300ppx] *:relative *:rounded-lg *:overflow-hidden">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/event-1.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-end items-start gap-3 inset-0 w-full h-full p-5 bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-[rgba(0,0,0,0.9)]">
              <p className="text-base text-white">$149 - $300</p>
              <h3 className="text-2xl font-semibold text-white">
                Gujrat Titans vs Mumbai Indians
              </h3>
              <FlexContainer
                gap="xl"
                alignItems="center"
                justifyContent="start"
              >
                <FlexContainer
                  gap="sm"
                  alignItems="center"
                  justifyContent="start"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">March 29</p>
                </FlexContainer>
                <FlexContainer gap="sm" alignItems="center">
                  <MapPin className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">Chicago</p>
                </FlexContainer>
              </FlexContainer>
            </div>
          </div>
          <div className="col-span-1 relative">
            <img
              src="/event-2.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-end items-start gap-3 inset-0 w-full h-full p-5 bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-[rgba(0,0,0,0.9)]">
              <p className="text-base text-white">$149 - $300</p>
              <h3 className="text-2xl font-semibold text-white">
                Austin Neill
              </h3>
              <FlexContainer
                gap="xl"
                alignItems="center"
                justifyContent="start"
              >
                <FlexContainer
                  gap="sm"
                  alignItems="center"
                  justifyContent="start"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">March 29</p>
                </FlexContainer>
                <FlexContainer gap="sm" alignItems="center">
                  <MapPin className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">Chicago</p>
                </FlexContainer>
              </FlexContainer>
            </div>
          </div>
          <div className="col-span-1 relative">
            <img
              src="/event-3.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-end items-start gap-3 inset-0 w-full h-full p-5 bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-[rgba(0,0,0,0.9)]">
              <p className="text-base text-white">$149 - $300</p>
              <h3 className="text-2xl font-semibold text-white">
                Art & Theater
              </h3>
              <FlexContainer
                gap="xl"
                alignItems="center"
                justifyContent="start"
              >
                <FlexContainer
                  gap="sm"
                  alignItems="center"
                  justifyContent="start"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">March 29</p>
                </FlexContainer>
                <FlexContainer gap="sm" alignItems="center">
                  <MapPin className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">Chicago</p>
                </FlexContainer>
              </FlexContainer>
            </div>
          </div>
          <div className="col-span-1 relative">
            <img
              src="/event-4.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-end items-start gap-3 inset-0 w-full h-full p-5 bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-[rgba(0,0,0,0.9)]">
              <p className="text-base text-white">$149 - $300</p>
              <h3 className="text-2xl font-semibold text-white">Conference</h3>
              <FlexContainer
                gap="xl"
                alignItems="center"
                justifyContent="start"
              >
                <FlexContainer
                  gap="sm"
                  alignItems="center"
                  justifyContent="start"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">March 29</p>
                </FlexContainer>
                <FlexContainer gap="sm" alignItems="center">
                  <MapPin className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">Chicago</p>
                </FlexContainer>
              </FlexContainer>
            </div>
          </div>
          <div className="col-span-1 relative">
            <img
              src="/event-5.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-end items-start gap-3 inset-0 w-full h-full p-5 bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-[rgba(0,0,0,0.9)]">
              <p className="text-base text-white">$149 - $300</p>
              <h3 className="text-2xl font-semibold text-white">NBA</h3>
              <FlexContainer
                gap="xl"
                alignItems="center"
                justifyContent="start"
              >
                <FlexContainer
                  gap="sm"
                  alignItems="center"
                  justifyContent="start"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">March 29</p>
                </FlexContainer>
                <FlexContainer gap="sm" alignItems="center">
                  <MapPin className="w-4 h-4 text-white" />
                  <p className="text-sm text-white">Chicago</p>
                </FlexContainer>
              </FlexContainer>
            </div>
          </div>
        </div>
      </FlexContainer>

      {/* Popular Near You */}
      <FlexContainer
        variant="column-start"
        gap="3xl"
        className="section bg-white pb-10"
      >
        <FlexContainer variant="row-between" alignItems="center">
          <h3 className="text-3xl font-semibold text-[var(--grey-dark)]">
            Popular Near You
          </h3>
          <FlexContainer>
            <button className="px-4 py-2 rounded-3xl border border-[var(--grey-dark)] text-[var(--grey-dark)] text-sm cursor-pointer">
              All
            </button>
            <button className="px-4 py-2 rounded-3xl border border-[var(--zinc-dark)] text-[var(--zinc-dark)] text-sm cursor-pointer">
              Theater & Cinema
            </button>
            <button className="px-4 py-2 rounded-3xl border border-[var(--zinc-dark)] text-[var(--zinc-dark)] text-sm cursor-pointer">
              Sports
            </button>
            <button className="px-4 py-2 rounded-3xl border border-[var(--zinc-dark)] text-[var(--zinc-dark)] text-sm cursor-pointer">
              Concert
            </button>
          </FlexContainer>
          <FlexContainer>
            <Link to={"/"} className="btn-underlined">
              VIEW ALL
              <ChevronRight className="w-4 h-4 text-[var(--grey-dark)]" />
            </Link>
          </FlexContainer>
        </FlexContainer>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-10">
          <div className="col-span-1 row-span-2 bg-[var(--zinc)] rounded-lg">
            <img
              src="/gym.png"
              alt="gym"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <FlexContainer variant="column-start" className="p-5">
              <FlexContainer gap="sm">
                <Calendar className="w-4 h-4 text-[var(--zinc-dark)]" />
                <p className="text-sm text-[var(--zinc-dark)]">Nov 7</p>
                <p className="text-sm text-[var(--zinc-dark)]">10:00</p>
                <p className="text-sm text-[var(--zinc-dark)]">Sports</p>
              </FlexContainer>
              <h3 className="text-2xl font-semibold text-[var(--grey-dark)]">
                Workout with Fitness Stars
              </h3>
              <FlexContainer alignItems="center">
                <MapPin className="w-4 h-4 text-[var(--zinc-dark)]" />
                <p className="text-sm text-[var(--zinc-dark)]">Chicago</p>
              </FlexContainer>
              <FlexContainer variant="row-between" alignItems="center">
                <p className="text-3xl font-semibold text-[var(--pink)]">
                  $25.00
                </p>
                <Link
                  to={"/"}
                  className="py-2 px-3.5 border-2 rounded-xl font-medium border-[var(--grey-dark)] text-[var(--grey-dark)] hover:bg-[var(--grey-dark)] hover:text-white duration-200"
                >
                  Book now
                </Link>
              </FlexContainer>
            </FlexContainer>
          </div>
          <FlexContainer
            variant="row-between"
            className="col-span-1 bg-[var(--zinc)] rounded-lg"
          >
            <FlexContainer variant="column-between" className="p-5">
              <FlexContainer variant="column-start">
                <FlexContainer gap="sm">
                  <Calendar className="w-4 h-4 text-[var(--zinc-dark)]" />
                  <p className="text-sm text-[var(--zinc-dark)]">Nov 7</p>
                  <p className="text-sm text-[var(--zinc-dark)]">10:00</p>
                  <p className="text-sm text-[var(--zinc-dark)]">Sports</p>
                </FlexContainer>
                <h3 className="text-2xl font-semibold text-[var(--grey-dark)]">
                  Winter Fest
                </h3>
                <FlexContainer alignItems="center">
                  <MapPin className="w-4 h-4 text-[var(--zinc-dark)]" />
                  <p className="text-sm text-[var(--zinc-dark)]">Chicago</p>
                </FlexContainer>
              </FlexContainer>
              <FlexContainer variant="row-between" alignItems="center">
                <p className="text-3xl font-semibold text-[var(--pink)]">
                  $25.00
                </p>
                <Link
                  to={"/"}
                  className="py-2 px-3.5 border-2 rounded-xl font-medium border-[var(--grey-dark)] text-[var(--grey-dark)] hover:bg-[var(--grey-dark)] hover:text-white duration-200"
                >
                  Book now
                </Link>
              </FlexContainer>
            </FlexContainer>
            <img
              src="/gym.png"
              alt="gym"
              className="h-full w-[300px] object-cover rounded-lg"
            />
          </FlexContainer>
          <FlexContainer
            variant="row-between"
            className="col-span-1 bg-[var(--zinc)] rounded-lg"
          >
            <FlexContainer variant="column-between" className="p-5">
              <FlexContainer variant="column-start">
                <FlexContainer gap="sm">
                  <Calendar className="w-4 h-4 text-[var(--zinc-dark)]" />
                  <p className="text-sm text-[var(--zinc-dark)]">Nov 7</p>
                  <p className="text-sm text-[var(--zinc-dark)]">10:00</p>
                  <p className="text-sm text-[var(--zinc-dark)]">Sports</p>
                </FlexContainer>
                <h3 className="text-2xl font-semibold text-[var(--grey-dark)]">
                  Workout with Fitness Stars
                </h3>
                <FlexContainer alignItems="center">
                  <MapPin className="w-4 h-4 text-[var(--zinc-dark)]" />
                  <p className="text-sm text-[var(--zinc-dark)]">Chicago</p>
                </FlexContainer>
              </FlexContainer>
              <FlexContainer variant="row-between" alignItems="center">
                <p className="text-3xl font-semibold text-[var(--pink)]">
                  $25.00
                </p>
                <Link
                  to={"/"}
                  className="py-2 px-3.5 border-2 rounded-xl font-medium border-[var(--grey-dark)] text-[var(--grey-dark)] hover:bg-[var(--grey-dark)] hover:text-white duration-200"
                >
                  Book now
                </Link>
              </FlexContainer>
            </FlexContainer>
            <img
              src="/gym.png"
              alt="gym"
              className="h-full w-[300px] object-cover rounded-lg"
            />
          </FlexContainer>
        </div>
      </FlexContainer>

      {/* Sports Section */}
      <FlexContainer
        variant="column-start"
        gap="3xl"
        className="section bg-white pb-10"
      >
        <FlexContainer variant="row-between">
          <FlexContainer variant="column-start" gap="sm">
            <h3 className="text-3xl font-semibold text-[var(--grey-dark)]">
              Sports
            </h3>
          </FlexContainer>
          <FlexContainer alignItems="center">
            <button
              className="px-3 py-4 rounded-lg bg-[#FDECF2] cursor-pointer"
              onClick={() => {
                const ref = sportsContainer.current;
                if (ref) {
                  ref.scrollLeft -= 300;
                }
              }}
            >
              <ChevronLeft className="w-7 stroke-2 text-[var(--grey-dark)]" />
            </button>
            <button
              className="px-3 py-4 rounded-lg bg-[#FDECF2] cursor-pointer"
              onClick={() => {
                const ref = sportsContainer.current;
                if (ref) {
                  ref.scrollLeft += 300;
                }
              }}
            >
              <ChevronRight className="w-7 stroke-2 text-[var(--grey-dark)]" />
            </button>
            <Link to={"/"} className="btn-underlined">
              VIEW ALL
              <ArrowRight className="w-4 h-4 text-[var(--grey-dark)]" />
            </Link>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          gap="6xl"
          wrap="nowrap"
          className="w-full overflow-x-auto pb-5 scroll-smooth"
          ref={sportsContainer}
        >
          {SPORTS_DATA.map((e, i) => {
            return (
              <FlexContainer
                variant="column-start"
                key={i}
                className="min-w-[300px]"
              >
                <img
                  src={e.imgSrc}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <FlexContainer variant="row-between">
                  <FlexContainer alignItems="center">
                    <Calendar className="w-4 text-[var(--zinc-dark)]"></Calendar>
                    <p className="text-sm text-[var(--zinc-dark)]">{e.date}</p>
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
            );
          })}
        </FlexContainer>
      </FlexContainer>

      {/* Music Section */}
      <FlexContainer
        variant="column-start"
        gap="3xl"
        className="section bg-white pb-10"
      >
        <FlexContainer variant="row-between">
          <FlexContainer variant="column-start" gap="sm">
            <h3 className="text-3xl font-semibold text-[var(--grey-dark)]">
              Music & Dance
            </h3>
          </FlexContainer>
          <FlexContainer alignItems="center">
            <button
              className="px-3 py-4 rounded-lg bg-[#FDECF2] cursor-pointer"
              onClick={() => {
                const ref = musicContainer.current;
                if (ref) {
                  ref.scrollLeft -= 325;
                }
              }}
            >
              <ChevronLeft className="w-7 stroke-2 text-[var(--grey-dark)]" />
            </button>
            <button
              className="px-3 py-4 rounded-lg bg-[#FDECF2] cursor-pointer"
              onClick={() => {
                const ref = musicContainer.current;
                if (ref) {
                  ref.scrollLeft += 325;
                }
              }}
            >
              <ChevronRight className="w-7 stroke-2 text-[var(--grey-dark)]" />
            </button>
            <Link to={"/"} className="btn-underlined">
              VIEW ALL
              <ArrowRight className="w-4 h-4 text-[var(--grey-dark)]" />
            </Link>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          gap="6xl"
          wrap="nowrap"
          className="w-full overflow-x-auto pb-5 scroll-smooth"
          ref={musicContainer}
        >
          {MUSIC_DATA.map((e, i) => {
            return (
              <FlexContainer
                variant="column-start"
                key={i}
                className="min-w-[300px]"
              >
                <img
                  src={e.imgSrc}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <FlexContainer variant="row-between">
                  <FlexContainer alignItems="center">
                    <Calendar className="w-4 text-[var(--zinc-dark)]"></Calendar>
                    <p className="text-sm text-[var(--zinc-dark)]">{e.date}</p>
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
            );
          })}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Home;

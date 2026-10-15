"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Logo from "../icon/Logo";

const defaultSlides = [
  {
    id: 1,
    title: "Modelet e suksesshme ekonomike mbështeten tek Biznesi",
    titleLines: [
      "Modelet e suksesshme",
      "ekonomike mbështeten",
      "tek Biznesi",
    ],
    description:
      "Misioni & Prioritetet e Lobimit të Dhomës Amerikane të Tregtisë",
    descriptionLines: [
      "Misioni & Prioritetet e Lobimit të",
      "Dhomës Amerikane të Tregtisë",
    ],
    image: "/episode/png",
    logo: "/images/think-big-logo.png",
    href: "#episodi-1",
    theme: "dark",
  },
  {
    id: 2,
    title: "Modelet e suksesshme ekonomike mbështeten tek Biznesi",
    description: "Misioni & Prioritetet e Lobimit të Dhomës Amerikane të Tregtisë",
    image: "/images/think-big-episode.jpg",
    href: "#episodi-2",
    theme: "red",
  },
  {
    id: 3,
    title: "Ide që frymëzojnë biznesin dhe sipërmarrjen",
    description: "Biseda për ekonominë, inovacionin dhe të ardhmen.",
    image: "/images/think-big-episode.jpg",
    href: "#episodi-3",
    theme: "dark",
  },
  {
    id: 4,
    title: "Mendo përtej të zakonshmes",
    description: "Zbulo episodet dhe historitë e Think BIG Podcast.",
    image: "/images/think-big-episode.jpg",
    href: "#episodi-4",
    theme: "red",
  },
];

function Chevron({ right = false }) {
  return (
    <svg
      className="h-[19px] w-[19px]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={right ? "m9 6 6 6-6 6" : "m15 6-6 6 6 6"}
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="ml-[2px] h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 5.9c0-.88.96-1.42 1.73-.96l9.61 6.1c.7.44.7 1.48 0 1.92l-9.61 6.1c-.77.46-1.73-.08-1.73-.96V5.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrandLogo({ slide, red }) {
 return <Logo/>;
}

export default function Hero({ className = "", slides = defaultSlides }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  if (!slides.length) return null;

  return (
    <section
      aria-label="Think BIG Podcast"
      className={`w-full overflow-hidden bg-background pt-[36px] pb-[18px] ${className}`}
    >
      <Swiper
        className="!overflow-visible"
        slidesPerView="auto"
        centeredSlides
        loop={slides.length > 2}
        speed={650}
        grabCursor={hasMultipleSlides}
        watchSlidesProgress
        spaceBetween={48}
        breakpoints={{
          0: { spaceBetween: 16 },
          640: { spaceBetween: 24 },
          1024: { spaceBetween: 48 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide) => {
          const red = slide.theme === "red";

          return (
            <SwiperSlide
              key={slide.id}
              className="!h-auto !w-[calc(100vw-40px)] sm:!w-[86vw] lg:!w-[78vw] !max-w-[906px]"
            >
              <article
                className={`flex h-full min-h-[540px] w-full flex-col overflow-hidden rounded-[16px] lg:h-[409px] lg:min-h-0 lg:flex-row ${
                  red ? "bg-primary" : "bg-[#151413]"
                }`}
              >
                {/* Paneli i majtë */}
                <div className="flex w-full flex-1 flex-col items-start px-[26px] pt-[30px] pb-[27px] sm:px-[44px] sm:pt-[38px] lg:w-[55.4%] lg:flex-none lg:pr-[24px] lg:pb-[35px]">
                  <BrandLogo slide={slide} red={red} />

                  <div className="mt-[19px] w-full lg:mt-[18px]">
                    <h2
                      className={`text-[25px] leading-[1.34] font-bold tracking-[-0.75px] sm:text-[27px] ${
                        red ? "text-[#101014]" : "text-white"
                      }`}
                    >
                      {slide.titleLines ? (
                        <>
                          <span className="lg:hidden">{slide.title}</span>
                          <span className="hidden lg:block">
                            {slide.titleLines.map((line, i) => (
                              <span key={i} className="block whitespace-nowrap">{line}</span>
                            ))}
                          </span>
                        </>
                      ) : (
                        slide.title
                      )}
                    </h2>
                    <p
                      className={`mt-[8px] text-[16px] leading-[1.35] font-normal tracking-[-0.2px] sm:text-[18px] ${
                        red ? "text-[#101014]" : "text-white"
                      }`}
                    >
                      {slide.descriptionLines ? (
                        <>
                          <span className="lg:hidden">{slide.description}</span>
                          <span className="hidden lg:block">
                            {slide.descriptionLines.map((line, i) => (
                              <span key={i} className="block whitespace-nowrap">{line}</span>
                            ))}
                          </span>
                        </>
                      ) : (
                        slide.description
                      )}
                    </p>
                  </div>

                  <a
                    href={slide.href || "#"}
                    className="mt-[15px] inline-flex h-[50px] shrink-0 items-center gap-[13px] rounded-full bg-secondary py-[3px] pr-[4px] pl-[29px] text-[17px] font-medium whitespace-nowrap text-[#0d0c11] transition-transform duration-200 hover:scale-[1.035] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span>Shiko episodin</span>
                    <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <PlayIcon />
                    </span>
                  </a>
                </div>

                {/* Fotoja në të djathtë */}
                <div className="relative min-h-[235px] w-full overflow-hidden lg:h-full lg:min-h-0 lg:w-[44.6%]">
                  <img
                    src={"/episode.png"}
                    alt={slide.imageAlt || slide.title}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {hasMultipleSlides && (
        <nav
          aria-label="Navigimi i episodeve"
          className="mt-[35px] flex items-center justify-center gap-[30px]"
        >
          <button
            type="button"
            aria-label="Episodi i mëparshëm"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-[42px] w-[42px] items-center cursor-pointer justify-center rounded-full bg-primary text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          >
            <Chevron />
          </button>

          <div className="flex items-center gap-[9px]" role="group" aria-label="Zgjidh episodin">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Shko te episodi ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => {
                  if (swiperRef.current?.params.loop) swiperRef.current.slideToLoop(index);
                  else swiperRef.current?.slideTo(index);
                }}
                className={`h-[11px] w-[11px] rounded-full cursor-pointer transition-colors duration-300 ${
                  activeIndex === index ? "bg-primary" : "bg-[#d0d0d3] hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Episodi tjetër"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-[42px] w-[42px] items-center cursor-pointer justify-center rounded-full bg-primary text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          >
            <Chevron right />
          </button>
        </nav>
      )}
    </section>
  );
}

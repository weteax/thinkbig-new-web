"use client";

import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const defaultSeasons = [
  {
    id: 1,
    title: "Think Big Podcast - Sezoni 1",
    image: "/images/thinkbig-season-1.jpg",
    href: "/seasons/1",
  },
  {
    id: 2,
    title: "Think Big Podcast - Sezoni 2",
    image: "/images/thinkbig-season-2.jpg",
    href: "/seasons/2",
  },
];

function ChevronRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export default function Seasons({
  className = "",
  seasons = defaultSeasons,
  viewAllHref = "/seasons",
}) {
  const swiperRef = useRef(null);

  // Mban funksionale shigjetat edhe kur ekzistojnë vetëm 2 sezone,
  // ndërsa në desktop shfaqen 2 karta njëkohësisht.
  const slides = useMemo(() => {
    if (seasons.length < 2 || seasons.length >= 4) return seasons;
    return Array.from({ length: 3 }, () => seasons).flat();
  }, [seasons]);

  if (!seasons.length) return null;

  return (
    <section
      aria-labelledby="podcast-seasons-heading"
      className={`w-full overflow-hidden bg-background px-4 pt-9 pb-10 text-secondary sm:px-[37px] sm:pt-[64px] sm:pb-[40px] font-['Poppins',Arial,sans-serif] ${className}`}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <header className="mb-[26px] flex items-center justify-between gap-4 sm:mb-[37px]">
          <h2
            id="podcast-seasons-heading"
            className="text-[21px] leading-tight font-semibold tracking-[-0.6px] sm:text-[30px]"
          >
            Sezonet e ThinkBig Podcast
          </h2>
          <a
            href={viewAllHref}
            className="group inline-flex shrink-0 items-center gap-1 text-[16px] leading-tight font-semibold text-primary transition-opacity hover:opacity-80 sm:gap-2 sm:text-[30px]"
          >
            See all seasons
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-1 sm:size-6" />
          </a>
        </header>

        <Swiper
          className="!overflow-visible xl:!w-[calc(100%+24px)]"
          slidesPerView={1.08}
          spaceBetween={16}
          speed={650}
          grabCursor={slides.length > 1}
          loop={slides.length >= 4}
          rewind={slides.length > 1 && slides.length < 4}
          watchOverflow
          breakpoints={{
            640: { slidesPerView: 1.35, spaceBetween: 24 },
            900: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 2, spaceBetween: 72 },
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {slides.map((season, index) => (
            <SwiperSlide key={`${season.id ?? season.title}-${index}`} className="!h-auto">
              <article className="group h-full">
                <a
                  href={season.href || viewAllHref}
                  className="block h-full focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  aria-label={`Hap ${season.title}`}
                >
                  <div className="aspect-[679/382] w-full overflow-hidden rounded-[15px] bg-[#1e1e24]">
                    <img
                      src={season.image}
                      alt={season.imageAlt || season.title}
                      width={679}
                      height={382}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <h3 className="mt-[19px] text-[22px] leading-[1.3] font-bold tracking-[-0.5px] text-secondary sm:text-[27px] xl:text-[34px]">
                    {season.title}
                  </h3>
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {seasons.length > 1 && (
          <nav aria-label="Navigimi i sezoneve" className="mt-[43px] flex items-center justify-center gap-[26px]">
            <button
              type="button"
              aria-label="Sezoni i mëparshëm"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex size-[54px] items-center justify-center rounded-full bg-primary text-white transition duration-200 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ChevronRight className="size-[21px] rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Sezoni tjetër"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex size-[54px] items-center justify-center rounded-full bg-primary text-white transition duration-200 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ChevronRight className="size-[21px]" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

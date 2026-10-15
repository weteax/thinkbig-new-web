"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Për të shtuar evente, kalo prop-in events={[...]}.
const defaultEvents = [
  {
    id: 1,
    title: "AllWeb Conf",
    date: "6 November, 2026",
    location: "Tirana, Albania",
    image: "/images/allweb-conf.jpg",
    imageAlt: "AllWeb Conf — Ai for AllWeb for Ai, Tirana 6 November 2026",
    href: "https://allweb.digital/",
  },
];

function ChevronRight({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export default function UpcomingEvents({
  className = "",
  events = defaultEvents,
  viewAllHref = "/events",
}) {
  const swiperRef = useRef(null);
  if (!events.length) return null;

  return (
    <section
      aria-labelledby="upcoming-events-heading"
      className={`w-full overflow-hidden bg-gray-colors px-4 pt-9 pb-10 text-secondary sm:px-[38px] sm:pt-[40px] sm:pb-[60px] font-['Poppins',Arial,sans-serif] ${className}`}
    >
      <div className="w-full max-w-[1352px]">
        <header className="mb-6 flex items-center justify-between gap-4 sm:mb-[46px]">
          <h2
            id="upcoming-events-heading"
            className="text-[21px] leading-tight font-medium tracking-[-0.5px] sm:text-[30px]"
          >
            Upcoming events
          </h2>
          <a
            href={viewAllHref}
            className="group inline-flex shrink-0 items-center gap-1 text-[16px] leading-tight font-semibold text-primary transition-opacity hover:opacity-80 sm:gap-2 sm:text-[30px]"
          >
            See all events
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
          </a>
        </header>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          speed={650}
          rewind={events.length > 1}
          grabCursor={events.length > 1}
          watchOverflow
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          className="!overflow-hidden"
        >
          {events.map((event, index) => (
            <SwiperSlide key={event.id ?? index} className="!h-auto">
              <article className="group">
                <a
                  href={event.href || viewAllHref}
                  className="block focus-visible:rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  aria-label={`Shiko eventin: ${event.title}`}
                >
                  <div className="aspect-[1353/762] w-full overflow-hidden rounded-[18px] bg-[#2d2b2c] sm:rounded-[30px]">
                    <img
                      src={'/allweb.png'}
                      alt={event.imageAlt || event.title}
                      width={1353}
                      height={762}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                  <h3 className="mt-[15px] text-[27px] leading-[1.22] font-semibold tracking-[-0.9px] sm:mt-[24px] sm:text-[46px]">
                    {event.title}
                  </h3>
                  <p className="mt-[3px] flex flex-wrap items-center gap-x-4 gap-y-1 text-[16px] leading-[1.4] font-normal sm:text-[37px]">
                    <span>{event.date}</span>
                    {event.location && (
                      <>
                        <span aria-hidden="true" className="text-secondary/80">|</span>
                        <span>{event.location}</span>
                      </>
                    )}
                  </p>
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {events.length > 1 && (
          <nav aria-label="Navigimi i eventeve" className="mt-8 flex justify-center gap-[76px]">
            <button
              type="button"
              aria-label="Eventi i mëparshëm"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex size-[50px] items-center justify-center rounded-full bg-primary text-white transition hover:brightness-110 active:scale-95"
            >
              <ChevronRight className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Eventi tjetër"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex size-[50px] items-center justify-center rounded-full bg-primary text-white transition hover:brightness-110 active:scale-95"
            >
              <ChevronRight className="size-5" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

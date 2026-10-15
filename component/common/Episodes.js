
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const defaultEpisodes = [
  {
    id: 1,
    title: "Piramida Fest",
    description: "Think Big Podcast ft. Martin Mata (AADF)",
    image: "/images/episodes-piramida-fest.jpg",
    href: "/episodes/piramida-fest",
  },
  {
    id: 2,
    title: "Siguria dhe Besimi në Bankingu Dixhital",
    description:
      "Think Big Podcast ft. Tomi Kallanxhi & Ornaldo Naqellari",
    image: "/images/episodes-banking.jpg",
    href: "/episodes/siguria-dhe-besimi-ne-bankingu-dixhital",
  },
  {
    id: 3,
    title: "Modelet e suksesshme ekonomike mbështeten tek Biznesi",
    description: "Think Big Podcast ft. Neritan Mullaj",
    image: "/images/episodes-business.jpg",
    href: "/episodes/modelet-e-suksesshme-ekonomike",
  },
   {
    id: 4,
    title: "Modelet e suksesshme ekonomike mbështeten tek Biznesi",
    description: "Think Big Podcast ft. Neritan Mullaj",
    image: "/images/episodes-business.jpg",
    href: "/episodes/modelet-e-suksesshme-ekonomike",
  },
   {
    id: 5,
    title: "Modelet e suksesshme ekonomike mbështeten tek Biznesi",
    description: "Think Big Podcast ft. Neritan Mullaj",
    image: "/images/episodes-business.jpg",
    href: "/episodes/modelet-e-suksesshme-ekonomike",
  },
   {
    id: 6,
    title: "Modelet e suksesshme ekonomike mbështeten tek Biznesi",
    description: "Think Big Podcast ft. Neritan Mullaj",
    image: "/images/episodes-business.jpg",
    href: "/episodes/modelet-e-suksesshme-ekonomike",
  },
];

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-[19px] w-[19px]"
    >
      <path
        d={
          direction === "right"
            ? "m9 6 6 6-6 6"
            : "m15 6-6 6 6 6"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Episodes({
  className = "",
  episodes = defaultEpisodes,
  viewAllHref = "/episodes",
}) {
  const swiperRef = useRef(null);

  if (!episodes?.length) return null;

  return (
    <section
      aria-labelledby="latest-episodes-heading"
      className={`
        w-full overflow-hidden bg-background
        px-4 pt-[24px] pb-[15px]
        sm:px-[29px]
        font-['Poppins',Arial,sans-serif]
        ${className}
      `}
    >
      <div className="mx-auto w-full max-w-[1440px]">

        {/* HEADER */}
        <div className="mb-[28px] flex min-h-[32px] items-center justify-between gap-4">
          <h2
            id="latest-episodes-heading"
            className="text-[19px] font-semibold leading-[1.4] text-secondary sm:text-[22px]"
          >
            Latest episodes
          </h2>

          <a
            href={viewAllHref}
            className="
              group/all inline-flex shrink-0 items-center gap-[6px]
              text-[15px] font-medium leading-[1.4]
              text-primary transition-opacity duration-200
              hover:opacity-80 sm:text-[22px]
            "
          >
            <span>See all episodes</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-[17px] w-[17px] transition-transform duration-200 group-hover/all:translate-x-1 sm:h-[21px] sm:w-[21px]"
            >
              <path
                d="m9 5 7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* EPISODES SWIPER */}
        <Swiper
          className="!overflow-visible"
          slidesPerView="auto"
          spaceBetween={16}
          speed={600}
          grabCursor={episodes.length > 1}
          rewind={episodes.length > 1}
          watchOverflow
          breakpoints={{
            640: { spaceBetween: 24 },
            1024: { spaceBetween: 34 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {episodes.map((episode, index) => (
            <SwiperSlide
              key={episode.id ?? index}
              className="!h-auto !w-[86vw] sm:!w-[380px] lg:!w-[402px]"
            >
              <article className="group h-full w-full">
                <a
                  href={episode.href || "#"}
                  className="block h-full focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  aria-label={`Shiko episodin: ${episode.title}`}
                >
                  <div className="aspect-[402/227] w-full overflow-hidden bg-[#17171e]">
                    <img
                      src={"episode-single.png"}
                      alt={episode.imageAlt || episode.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                      className="
                        h-full w-full object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-[16px] text-[23px] font-semibold
                      leading-[1.34] tracking-[-0.6px]
                      text-secondary transition-colors duration-200
                      group-hover:text-white sm:text-[25px]
                    "
                  >
                    {episode.title}
                  </h3>

                  <p
                    className="
                      mt-[5px] text-[16px] font-normal
                      leading-[1.36] tracking-[-0.2px]
                      text-secondary sm:text-[18px]
                    "
                  >
                    {episode.description}
                  </p>
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SWIPER NAVIGATION */}
        {episodes.length > 1 && (
          <nav
            aria-label="Navigimi i episodeve"
            className="mt-[34px] flex items-center justify-center gap-[26px]"
          >
            <button
              type="button"
              aria-label="Episodi i mëparshëm"
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                flex h-[42px] w-[42px] shrink-0
                items-center justify-center rounded-full
                bg-primary text-white
                transition-all duration-200
                hover:brightness-110 active:scale-95
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-primary
              "
            >
              <ArrowIcon direction="left" />
            </button>

            <button
              type="button"
              aria-label="Episodi tjetër"
              onClick={() => swiperRef.current?.slideNext()}
              className="
                flex h-[42px] w-[42px] shrink-0
                items-center justify-center rounded-full
                bg-primary text-white
                transition-all duration-200
                hover:brightness-110 active:scale-95
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-primary
              "
            >
              <ArrowIcon direction="right" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

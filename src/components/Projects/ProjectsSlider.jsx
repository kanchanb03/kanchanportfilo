import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectsSlider.css";  

import { ProjectCard } from "./ProjectCard";

/**
 * Renders a Swiper carousel for >3 projects.
 * Falls back to a simple grid when ≤3.
 */
export const ProjectsSlider = ({ projects, gridClass }) => {
  if (projects.length <= 3) {
    return (
      <div className={gridClass}>
        {projects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0:   { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
      }}
      style={{ paddingBottom: "48px" }}      /* room for dots */
    >
      {projects.map((p, idx) => (
        <SwiperSlide key={idx}>
          <ProjectCard project={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

import { ArticlesResponse } from "@/types/article";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCard from "../article-card";

type HeroSectionProps = {
  data: ArticlesResponse;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination
          autoplay
          className="h-60 rounded-lg"
        >
          {data.data.data.map((article, index) => {
            if (index < 5) {
              return (
                <SwiperSlide key={index}>
                  <ArticleCard data={article} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
      <div className="space-y-4">
        {data.data.data.map((article, index) => {
          if (index > 4) {
            return <ArticleCard key={index} data={article} variant="small" />;
          }
        })}
      </div>
    </div>
  );
};

export default HeroSection;

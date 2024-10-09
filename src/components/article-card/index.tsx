import { ArticleData } from "@/types/article";
import clsx from "clsx";

type ArticleProps = {
  data: ArticleData;
  className?: string;
};

const ArticleCard = ({ data, className }: ArticleProps) => {
  return (
    <div
      className={clsx(
        "border-2 border-brand rounded-lg p-4 text-center",
        className
      )}
    >
      {data.title}
    </div>
  );
};

export default ArticleCard;

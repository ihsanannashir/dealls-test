import { ArticleData } from "@/types/article";
import clsx from "clsx";
import Link from "next/link";

type ArticleProps = {
  data: ArticleData;
  className?: string;
  variant?: "default" | "small";
};

const ArticleCard = ({
  data,
  className,
  variant = "default",
}: ArticleProps) => {
  const containerVariant = clsx({
    ["bg-brand text-white border h-52 flex items-center justify-center text-xl sm:text-2xl font-bold p-10"]:
      variant === "default",
    ["p-4 hover:border-brand"]: variant === "small",
  });
  return (
    <div>
      <Link href={`/loker/${data.slug}`}>
        <div
          className={clsx(
            "rounded-lg border transition-all duration-75 shadow-lg text-center",
            containerVariant,
            className
          )}
        >
          <span className="hover:scale-125 transition-all duration-150">
            {data.title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

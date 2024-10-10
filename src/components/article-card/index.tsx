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
    ["bg-white"]: variant === "default",
    ["border transition-all duration-75 shadow-lg hover:border-brand"]:
      variant === "small",
  });
  return (
    <div>
      <Link href={`/loker/${data.slug}`}>
        <div
          className={clsx(
            "rounded-lg p-4 text-center",
            containerVariant,
            className
          )}
        >
          {data.title}
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

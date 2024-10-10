import clsx from "clsx";

type ArticleParserProps = {
  data: string;
  className?: string;
};

const ArticleParser = ({ data, className }: ArticleParserProps) => {
  return (
    <div
      className={clsx("article", className)}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

export default ArticleParser;

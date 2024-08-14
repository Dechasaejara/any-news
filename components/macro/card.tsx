import { Article } from "@/backened/types/article-type";
import { formatPublishedDate } from "@/lib/utils";


interface CardProps {
  article: Article;
}
const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <div className=" w-full rounded-lg">
      <div className=" ">
        <img className="w-full h-64 object-center object-cover " src={article.urlToImage} alt={article.title} />
      </div>
      <div className="mx-auto flex flex-col justify-between max-h-full p-2">
        <div className="font-bold text-lg ">{article.title}</div>
        <div className="text-gray-500 flex items-center justify-between"><span >by {article.author}</span> {formatPublishedDate(article.publishedAt)}</div>
        <div className="">{article.description}</div>
        <div className="flex items-center justify-between p-2">
          <span>    Source: {article.source.name}</span>
          <a href={article.url} className="text-[#2095F2]" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>

      </div>
    </div>
  );
};

export default Card;
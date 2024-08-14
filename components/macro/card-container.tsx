
import { Article } from "@/backened/types/article-type";
import Card from "./card";
interface CardContainerProps {
    articles: Article[]
}
export const CardContainer = ({ articles }: CardContainerProps) => {
    articles = articles.filter(article => article.urlToImage !== '');
    articles = articles.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
    return <div className='flex flex-col p-4 container' >
        <article className="blog-grid-container">
            {articles && articles.map((article, index) => (
                <Card key={index} article={article} />
            ))}
        </article>
    </div>

}
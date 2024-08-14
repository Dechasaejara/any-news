"use server"
import { Article, ArticleRequest } from "../types/article-type";
export async function fetchNews(params: ArticleRequest): Promise<Article[]> {
    let news: Article[] = [];
    let mainUrl = 'https://newsapi.org/v2/everything?';
    if (params.q) {
        mainUrl = mainUrl + `q=${params.q}`
    }
    if (params.language) {
        mainUrl = mainUrl + `&language=${params.language}`
    }
    if (params.from) {
        mainUrl = mainUrl + `&from=${params.from}`
    }
    if (params.to) {
        mainUrl = mainUrl + `&to=${params.to}`
    }
    if (params.sortBy) {
        mainUrl = mainUrl + `&sortBy=${params.sortBy}`
    }
    if (params.apiKey) {
        mainUrl = mainUrl + `&apiKey=${params.apiKey}`
    }
    if (params.excludeDomains) {
        mainUrl = mainUrl + `&excludeDomains=${params.excludeDomains}`
    }
    console.log({ mainUrl })
    const data = await fetch(mainUrl, { next: { revalidate: 365465400 } });
    const { articles } = await data.json();
    if (articles) {
        news = articles;
        // console.log({ articles })
    }
    return news;
}
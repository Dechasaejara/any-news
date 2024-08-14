'use client'

import { fetchNews } from "@/backened/actions/fetch-news";
import { getLastmonthDate } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react";
import { CardContainer } from "./card-container";
import { Article } from "@/backened/types/article-type";

const initializeSearch = (keyword?: string | null | undefined) => {
    return {
        q: `${keyword ? keyword : "ethiopia"}`,
        from: getLastmonthDate(),
        language: 'en',
        sortBy: 'relevancy',
        excludeDomains: ['yahoo.com'],
        apiKey: "21a5b967c4014a4e9a7eb123e6108978" // process.env.News_API_KEY as string
    }

};

export default function Blog() {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [articles, setArticles] = useState<Article[]>([])
    const handelSearchSubmit = async () => {
        const inital = initializeSearch(searchKeyword);
        try {
            const result = await fetchNews(inital)
            setArticles(result);
            console.log(result)
            setSearchKeyword('')
        } catch (error) {
            console.log({ error })
        }
    }
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    };
    useEffect(() => {
        handelSearchSubmit()
    }, [])

    return (
        <div className="container">
            <form className="relative flex flex-1 flex-shrink-0  lg:w-1/3 mx-auto my-5 p-4" action={handelSearchSubmit}>
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <input
                    name="search"
                    type="text"
                    className="peer block w-full rounded-md  border-gray-200 py-[9px] px-10 text-sm  placeholder:text-gray-500"
                    placeholder="Enter keyword"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                />
                <MagnifyingGlassIcon className="absolute left-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                <button type="submit" className=" px-5 border bg-[#2095F2] text-white">Search</button>
            </form>
            <CardContainer articles={articles} />
        </div>
    );
}
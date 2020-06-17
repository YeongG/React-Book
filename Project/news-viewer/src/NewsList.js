import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Axios from 'axios';
import Categories from './Categories';

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;
    @media screen and (max-width:768px) {
        width:100%;
        padding:0 1rem;
    }
`;

const NewsList = ({category}) => {
    const [articles,setArticles] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        console.log("NewsList 렌더링");
    })

    useEffect(() => {
        (async() => {
            setLoading(true);
            try {
                const query = category === "all" ? '' : `&category=${category}`; 
                const res = await Axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6efa70f5fb5549f89aae27f52879b777`);
                setArticles(res.data.articles);
            } catch(err) {
                console.log(err);
            }
            setLoading(false);
        })();
    },[category]);

    return (
        <NewsListBlock>
            {loading ? "로딩" : (articles && articles.map(now => <NewsItem key={now.url} article={now} />))}
        </NewsListBlock>
    );
}

export default NewsList;
import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display:flex;
    
    .thumbnail {
        margin-right:1rem;
        img {
            display:block;
            width:160px;
            height:100px;
            object-fit:cover;
        }
    }
    .contents {
        h2 {
            margin:0;
            a {
                color:black;
            }
        }
        p {
            margin:0;
            line-height:1.5;
            margin-top:0.5rem;
            white-space: nowrap;
        }
    }
    & + & {
        margin-top:3rem;
    }
`;

const NewsItem = ({article}) => { 
    const {title,descripition,url,urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="news_link">
                        <img src={urlToImage} />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="content">
                        {title}
                    </a>
                </h2>
                <p>{descripition}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;
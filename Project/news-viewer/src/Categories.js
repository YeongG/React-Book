import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled,{css} from 'styled-components';

const categories = [
    {
        name:"all",
        text:"전체"
    }, 
    {
        name:"business",
        text:"비지니스"
    }, 
    {
        name:"entertainment",
        text:"엔터테인먼트"    
    },
    {
        name:"health",
        text:"건강"
    },
    {
        name:"science",
        text:"과학"
    },
    {
        name:"sport",
        text:"스포츠"
    },
    {
        name:"technology",
        text:"기술"
    }
];

const CategoriesBlock = styled.div`
    display:flex;
    padding:1rem;
    width:786px;
    margin:0 auto;
    @media screen and (max-width:768px) {
        width:100%;
        overflow-x:auto;
    }
`;

const Category = styled(NavLink)`
    font-size:1.125rem;
    cursor:pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;

    &:hover {
        color:#495057;
    }

    & + & {
        margin-left:1rem;
    }

    &.active {
        font-weight:600;
        border-bottom:2px solid #22b8cf;
        color:#22b8cf;
        &:hover {
            color:#3bc9db;
        }
    }
`;

const Categories = ({category}) => {
    useEffect(() => {
        console.log("카테고리 렌더링");
    })
    return (
        <CategoriesBlock>
            {categories.map(now => <Category key={now.name} activeClassName="active" exact="true" to={now.name === "all" ? '/' : `/${now.name}`} >{now.text}</Category>)}
        </CategoriesBlock>
    )
}

export default Categories;
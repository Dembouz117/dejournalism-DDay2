import Article from "./Article";
import GetArticle from "../components/getArticle";
import React from 'react';




const Articles = () => {


    return (
        <div style = {{position:"relative", backgroundColor: "#d4d4d4", paddingTop: "30px", paddingBottom: "30px"}}>
            {/* <Article></Article>
            <Article></Article> */}
            <GetArticle></GetArticle>
  
        </div>

    )

}

export default Articles;
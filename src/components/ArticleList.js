import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    const post = posts.map((title) =>{
        return (
      <Article
        keys = {title.id}
        title = {title.title}
        date = {title.date}
        preview = {title.preview}
        minutes = {title.minutes}
      />
        )
    })
    return(
      <main>
        {post}
      </main>
    )
  }
  export default ArticleList
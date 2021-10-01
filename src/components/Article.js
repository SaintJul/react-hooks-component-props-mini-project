import React from "react"

function Article({keys,title,date = "January 1, 1970",preview,minutes}){

    return(
      <article key = {title}>
        <h3 key = {title}>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    )
  }
  export default Article
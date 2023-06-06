import React from "react";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import Article from "../../components/article/Article";

const Blog = () => (
  <div className="gpt3__blog section-container">
    <h1>A lot is happening, We are blogging about it.</h1>
    <div className="gpt3__blog-content_container">
      <div className="gpt3__blog-content_blog1">
        <Article
          imgUrl={blog1}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <div className="gpt3__blog-content_sub-container"></div>
        <Article
          imgUrl={blog2}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog3}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog4}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog5}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;

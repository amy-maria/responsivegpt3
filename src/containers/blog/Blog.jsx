import React from "react";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import Article from "../../components/article/Article";

const Blog = () => (
  <div className="gpt3__blog section-container" id="blog">
    <div className="gpt3__blog-section-heading">
      <h1>A lot is happening, We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-content_container">
      <div className="gpt3__blog-content_blogA">
        <Article
          imgUrl={blog1}
          alt="blog1-image"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <div className="gpt3__blog-content_blogB"></div>
        <Article
          imgUrl={blog2}
          alt="blog2-image"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog3}
          alt="blog3-image"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog4}
          alt="blog4-image"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog5}
          alt="blog5-image"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;

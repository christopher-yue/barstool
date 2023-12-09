import React, { useState, useEffect } from "react";
import axios from "axios";

export const Barstool = () => {
  const [articles, setArticles] = useState([]);
  const jsonUrl = "https://www.jalirani.com/files/barstool.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(jsonUrl);
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="articlelist">
      <h1>Article List</h1>
      <ul>
        {articles.map((article) => (
          <li>
            <a href={article.url}>
              <h2>{article.title}</h2>
            </a>
            <img
              src={`${article.thumbnail.location}${article.thumbnail.images.small}`}
              alt={article.title}
            />
            <p>Author: {article.author.name}</p>
            <img
              src={article.author.avatar}
              alt={`${article.author.name}'s Avatar`}
            />
            <p>Comments: {article.comment_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

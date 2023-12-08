import React, { useState, useEffect } from "react";
import axios from "axios";

export const Barstool = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.jalirani.com/files/barstool.json"
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Barstool Archive</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
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

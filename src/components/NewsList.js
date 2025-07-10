import React from "react";

const NewsList = ({ articles }) => {
  return (
    <div>
      {articles.length === 0 ? <p>No articles found.</p> : null}
      {articles.map((article, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "20px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>{article.title}</h3>
          <p><strong>Source:</strong> {article.source.name}</p>
          <p>{article.description}</p>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt="news"
              style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsList;

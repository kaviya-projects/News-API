import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import NewsList from "./components/NewsList";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setFilteredArticles(data.articles);
      });
  }, []);

  useEffect(() => {
    let filtered = [...articles];

    if (category) {
      filtered = filtered.filter((a) =>
        a.title.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (source) {
      filtered = filtered.filter((a) => a.source.name === source);
    }

    setFilteredArticles(filtered);
  }, [category, source, articles]);

  const categories = ["AI", "5G", "ISRO"]; // mocked categories based on title keywords
  const sources = Array.from(new Set(articles.map((a) => a.source.name)));

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Latest News</h1>
      <Filters
        categories={categories}
        sources={sources}
        onCategoryChange={setCategory}
        onSourceChange={setSource}
      />
      <NewsList articles={filteredArticles} />
    </div>
  );
};

export default App;

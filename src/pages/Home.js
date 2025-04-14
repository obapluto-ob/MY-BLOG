import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h1>OBED EMONI LOPEYOK'S BLOG</h1>
      </header>
      <section className="hero">
        <p>
          Welcome to my blog! Here, I share insights, tutorials, and personal
          experiences on technology, programming, and more.
        </p>
        <Link to="/blog" className="nav-link">
          <button>Explore Blog</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

function Home({ setMessage }) {
  function handleClick() {
    setMessage("Welcome! You are learning React.");
  }

  return (
    <main id="main-content" tabIndex="-1" className="home-page">
      <section className="hero">
        <p className="hero-label">WELCOME TO DEVLEARN</p>

        <h1>
          Learn Programming.
          <br />
          Build Your Future.
        </h1>

        <p className="hero-description">
          Welcome to our learning platform.
          We help students improve their programming skills
          and become confident developers.
        </p>

        <button className="hero-button" onClick={handleClick}>
          Get Started
        </button>
      </section>

      <section className="home-features">
        <h2>Why Learn With DevLearn?</h2>

        <div className="feature-list">
          <article className="feature-card">
            <h3>Learn Step by Step</h3>
            <p>Start with the basics and improve your programming skills.</p>
          </article>

          <article className="feature-card">
            <h3>Practice Coding</h3>
            <p>Improve your knowledge by practicing what you learn.</p>
          </article>

          <article className="feature-card">
            <h3>Grow Your Skills</h3>
            <p>Build your confidence and prepare for your future career.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;

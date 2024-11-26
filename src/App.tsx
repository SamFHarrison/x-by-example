import "./App.css";
import { Link } from "./constants";
import { resources } from "./resources";

function App() {
  return (
    <>
      <main>
        <header>
          <h1>X by Example</h1>
          <hr />
        </header>

        <section className="intro">
          <p className="footnote">
            If, like me, you're a practical learner that gets frustrated with
            dense, lengthy docs, you might like this style of learning.
          </p>
          <p>
            A curated library of 'by example' resources for a variety of
            languages, frameworks and libraries to either help you learn or jog
            your memory.
          </p>
          <hr />
        </section>

        <ol className="resources">
          {resources.map((resource) => (
            <li className="resource">
              <h2>
                <a href={resource.url} target="_blank">
                  {resource.name}
                </a>
              </h2>
            </li>
          ))}
        </ol>

        <footer>
          <hr />

          <p className="footnote">
            Created by <a href={Link.SAM_GITHUB}>Sam F-Harrison</a> &#8226;{" "}
            <a href={Link.X_BY_EXAMPLE_GITHUB}>Source</a>
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;

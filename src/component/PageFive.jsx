const PageFive = () => {
    return (
      <div>
        {/* Section 1 */}
        <section className="bg-gray-100 py-16 text-center">
          <div className="max-w-5xl mx-auto px-4 relative">
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7ps99877wpxwhx8xncghqg5/big-star.svg"
              alt="Big Star"
              className="w-24 mx-auto mb-4"
            />
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nqhrc8jfm39crsj3xwc7g2b/sm-star.svg"
              alt="Small Star"
              className="w-12 absolute top-0 left-10"
            />
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/x8cck4gs6wxq6bp56mpgng3f/circle-checkmark.svg"
              alt="Checkmark"
              className="w-16 absolute top-0 right-10"
            />
            <h2 className="text-4xl font-semibold mb-4">
              <span className="font-light">Help us shape</span> the future of teamwork
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Atlassian, we believe the impossible is possible - together. Join us today to help us inspire teamwork anywhere and everywhere, worldwide.
            </p>
            <a
              href="/customers/advocacy"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-semibold"
            >
              Share your story
            </a>
          </div>
        </section>
  
        {/* Section 2 */}
        <div className="bg-blue-700 py-16 text-center text-white">
          <section className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-4">
              Unleash the power of <span className="font-extrabold">teamwork</span>
            </h2>
            <div className="relative w-full flex justify-center mb-4">
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nbxktx3rcznmxx5mpwx5s3q6/power-of-teamwork-stroke.svg"
                alt="Power of Teamwork"
                className="w-64"
              />
            </div>
            <p className="text-lg mb-6">Join millions teaming up on their best work</p>
            <a
              href="/try/cloud/signup?bundle=jira-software"
              className="inline-block px-6 py-3 bg-white text-blue-700 rounded-md font-semibold"
            >
              Get started for free
            </a>
          </section>
        </div>
      </div>
    );
  };
  
  export default PageFive;
  
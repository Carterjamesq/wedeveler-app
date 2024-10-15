import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { createClient } from "contentful";
import { MdArrowOutward } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";

const Cases = () => {
  const [loading, setLoading] = useState(true);
  const [casePosts, setCasePosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const client = createClient({
    space: "umsxju4f68ej",
    accessToken: "-1blGBV05WJ2AA5h7ViDEmxEE00dNxOZOtYCZ0wFmiI",
  });

  useEffect(() => {
    const getAllCaseEntries = async () => {
      try {
        const entries = await client.getEntries({ content_type: "portfolio" });
        setCasePosts(entries.items);
      } catch (error) {
        console.error(error);
      }
    };
    getAllCaseEntries();
  }, []);

  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 2);
  };

  const boxRef = useRef();

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 850,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };
    ScrollReveal().reveal(boxRef.current, config);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className="section-padding" ref={boxRef}>
      <div className="col d-flex icon">
        <div className="border rounded-5 px-4 py-2 mb-5">
          <IoIosBriefcase />
          <p>Cases</p>
        </div>
      </div>
      <h1>Portfolio</h1>
      <div className="case__list-cards">
        {casePosts.slice(0, visiblePosts).map((portfolio, index) => (
          <div className="card mb-4" key={portfolio.sys.id}>
            <div className="image-container">
              {portfolio.fields.projectImage &&
                portfolio.fields.projectImage.fields &&
                portfolio.fields.projectImage.fields.file && (
                  <img
                    className="rounded-3"
                    src={portfolio.fields.projectImage.fields.file.url}
                    alt={portfolio.fields.projectTitle}
                  />
                )}
              <div className="tags">
                {portfolio.fields.tags &&
                  portfolio.fields.tags.map &&
                  portfolio.fields.tags.map((tag, index) => (
                    <span key={index} className="badge btn-primary me-2 mb-2">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <h4>{portfolio.fields.projectTitle}</h4>
                <div className="coltext-end">
                  <a
                    className="btn btn-primary"
                    href={portfolio.fields.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < casePosts.length && (
        <div className="text-center mt-5">
          <button className="btn btn-primary rounded-5" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Cases;

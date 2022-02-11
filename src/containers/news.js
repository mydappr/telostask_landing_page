import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { News } from "../components";

function NNews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@telostask";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.items;

        setData(items);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="newsFrame">
      <News.Headline>Recent Articles</News.Headline>

      <Carousel
        swipeable={"true"}
        draggable={false}
        showDots={true}
        className="sliderFrame"
        responsive={responsive}
      >
        {data.map((post) => {
          if (
            post.thumbnail.includes(".png") ||
            post.thumbnail.includes(".jpeg")
          ) {
            return (
              <News key={post.pubDate} to={post.link.replace("https://", "//")}>
                <News.Thumbnail src={post.thumbnail} />
                <News.NewsInfo>
                  <News.Author>{post.author}</News.Author>
                  <News.Date>{post.pubDate}</News.Date>
                  <News.Title>{post.title}</News.Title>
                </News.NewsInfo>
              </News>
            );
          } else {
            console.log(post)
            return null;
           
          }
        })}

        {/* <News
          to={
            "//telostask.medium.com/how-to-fund-your-telostask-wallet-to-outsource-tasks-3403567c1e8a"
          }
        >
          <News.Thumbnail
            src={
              "https://miro.medium.com/max/1400/1*vnBEBPfUXFhzahr0N9iyDA.png"
            }
          />
          <News.NewsInfo>
            <News.Author>TelosTask</News.Author>
            <News.Date>29th December 2020</News.Date>
            <News.Title>
              A new platform to complete your online tasks
            </News.Title>
          </News.NewsInfo>
        </News>

        <News
          to={
            "//telostask.medium.com/how-to-outsource-tasks-on-telostask-8063e6d4b0f3"
          }
        >
          <News.Thumbnail
            src={"https://miro.medium.com/max/875/1*9xgf96bPQKAv8ezMHmCo1Q.png"}
          />
          <News.NewsInfo>
            <News.Author>TelosTask</News.Author>
            <News.Date>29th December 2020</News.Date>
            <News.Title>
              A new platform to complete your online tasks
            </News.Title>
          </News.NewsInfo>
        </News>

        <News
          to={
            "//telostask.medium.com/getting-started-and-earning-on-telostask-c8ceda1d62b"
          }
        >
          <News.Thumbnail
            src={"https://miro.medium.com/max/875/1*v_fVxd0LuYOFPOK4npnHqw.png"}
          />
          <News.NewsInfo>
            <News.Author>TelosTask</News.Author>
            <News.Date>29th December 2020</News.Date>
            <News.Title>
              A new platform to complete your online tasks
            </News.Title>
          </News.NewsInfo>
        </News> */}
      </Carousel>
    </div>
  );
}

export default NNews;

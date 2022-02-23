import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { News } from "../components";
import {Featured} from './Featured'

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
      <News.Headline>TelosTask In The News</News.Headline>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        className="sliderFrame"
        responsive={responsive}
      >
        {Featured.map((post, index) => {
          if (
            post.thumbnail.includes(".png") ||
            post.thumbnail.includes(".jpeg")
          ) {
            return (
              <News
                key={index}
                onClick={() => (window.location.href = `${post.link}`)}
              >
                <News.Thumbnail src={post.thumbnail} />
                <News.NewsInfo>
                  <News.Author>{post.Author}</News.Author>
                  <News.Date>{post.Date}</News.Date>
                  <News.Title>{post.Title}</News.Title>
                </News.NewsInfo>
              </News>
            );
          } else {
            console.log(post);
            return null;
          }
        })}
      </Carousel>

      <News.Headline>Recent Articles</News.Headline>

      <Carousel
        swipeable={true}
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
              <News
                key={post.pubDate}
                onClick={() => (window.location.href = `${post.link}`)}
              >
                <News.Thumbnail src={post.thumbnail} />
                <News.NewsInfo>
                  <News.Author>{post.author}</News.Author>
                  <News.Date>{post.pubDate}</News.Date>
                  <News.Title>{post.title}</News.Title>
                </News.NewsInfo>
              </News>
            );
          } else {
            console.log(post);
            return null;
          }
        })}
      </Carousel>
    </div>
  );
}

export default NNews;

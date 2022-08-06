import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { News } from "../components";
import { Featured } from "./Featured";

function NNews() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const url =
      " ";

    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.items);
    } catch (error) {
      console.log(error);
    }
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
                <News.Thumbnail src={post?.thumbnail} />
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

      
       

      <div className="sponsors">
        <a href="https://www.telos.net/" target="_blank" rel="noopener">
          <img src="https://miro.medium.com/max/1400/1*-zwjwHuIHA4LrL8lUf6KiA.png" />
        </a>
        <a href="https://bscscan.com/token/0x5090AA76fC140e20706f26e82EbC1dccB0D0438b" target="_blank" rel="noopener">
          <img src="https://www.cryptonary.com/wp-content/uploads/2022/03/Cryptonary_BNB-Chain-2.png.webp" />
        </a>

        <a href="https://app.tstarter.io/telos/pools/17/" target="_blank" rel="noopener">
          <img src="https://images.hive.blog/DQmQVYXVcMsbehJZxGJonfBTraZ8pLePWU9VvB3EuJ2aTuu/images.png" />
        </a>

        <a href="https://eos.io/" target="_blank" rel="noopener">
          <img src="https://image4.owler.com/logo/eos_owler_20190711_084620_original.jpg" />
        </a>
        <a href="https://coinmarketcap.com/" target="_blank" rel="noopener">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/splash_600x315_1.png?_=5d7538e" />
        </a>
   
      </div>
    </div>
  );
}

export default NNews;

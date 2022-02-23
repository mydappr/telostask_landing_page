import { Container, NewsInfo, Author, Date, Title, Thumbnail, Headline } from "./news";
import { Link as RounterLink } from "react-router-dom";

export default function News({ src = "true", children, ...restprops }) {
  return src ? (
    <a>
   
      <Container src={src} {...restprops}>
        {children}
      </Container>
    </a>
  ) : (
    children
  );
}

News.Thumbnail = function NewsThumbnail({ ...restprops }) {
  return <Thumbnail {...restprops} />;
};

News.NewsInfo = function NewsNewInfo({ children }) {
  return <NewsInfo>{children}</NewsInfo>;
};
News.Author = function NewsAuthor({ children }) {
  return <Author>{children}</Author>;
};

News.Date = function NewsDate({ children }) {
  return <Date>{children}</Date>;
};

News.Title = function NewsTitle({ children }) {
  return <Title>{children}</Title>;
};

News.Headline = function NewsHeadline({ children }) {
  return <Headline>{children}</Headline>;
};


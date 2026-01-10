import Container from "../component/Container";
import InlineGForm from "./home/InlineGForm";
import CoverImage from "./home/CoverImage";
import Schedule from "./home/Schedule";

/**
 * Home.tsx
 * サイトのホーム画面
 * @param { string } title ページのタイトル
 * @returns { React.ReactNode }
 */
const Home = () => (
  <Container title="北海道アナログゲーム研究会">
    <CoverImage />
    <Schedule />
    <InlineGForm />
  </Container>
);

export default Home;

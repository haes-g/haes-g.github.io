import Navigation from "./Navigation";
import PageTitle from "./PageTitle";
import '../scss/component/Header.scss';

type Props = {
  title: string;
};

/**
 * Header.tsx
 * サイトのヘッダー部の構造を定義する。
 * 
 * @param { string } title ページのタイトル
 * @returns { React.ReactNode }
 */
const Header = (props: Props) => (
  <header>
    <div>
      <h1><a href="/">北海道アナログゲーム研究会</a></h1>
      <Navigation />
    </div>
    <PageTitle title={props.title} />
  </header>
);

export default Header;
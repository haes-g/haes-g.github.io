import { useState, useEffect } from 'react';
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
const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 画面のスクロール量に応じてナビゲーションの背景色を変更する
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={isScrolled ? 'scrolled' : ''}>
        <h1><a href="/">北海道アナログゲーム研究会</a></h1>
        <Navigation />
      </div>
      <PageTitle title={props.title} />
    </header>
  );
};

export default Header;
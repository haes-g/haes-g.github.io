import '../scss/component/Navigation.scss';

/**
 * Navigation.tsx
 * サイトのナビゲーションの構造を定義する
 * 
 * @returns { React.ReactNode }
 */
const Navigation = () => (
  <nav>
    <ul className='navigation'>
      <li><a href="/">ホーム</a></li>
      <li><a href="/overview">概要</a></li>
      <li><a href="/history">沿革</a></li>
    </ul>
  </nav>
);

export default Navigation;
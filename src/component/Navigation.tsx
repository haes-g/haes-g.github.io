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
      <li><a href="https://sites.google.com/haes-g.info/homepage/%E7%AC%AC37%E5%9B%9E">第37回</a></li>
      <li><a href="https://sites.google.com/haes-g.info/homepage/%E7%AC%AC38%E5%9B%9E">第38回</a></li>
      <li><a href="https://sites.google.com/haes-g.info/homepage/%E7%AC%AC39%E5%9B%9E">第39回</a></li>
      <li><a href="/overview">概要</a></li>
      <li><a href="/history">沿革</a></li>
    </ul>
  </nav>
);

export default Navigation;
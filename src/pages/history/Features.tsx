import Section from '../../component/Section';

/**
 * Features.tsx
 * サブコンポーネント:紹介記事
 * 
 * @returns { React.ReactNode }
 */
const Features = () => (
  <Section title="紹介記事" className='features'>
    <p>いままでの当会の活動の紹介記事です</p>
    <ul>
      <li><a href="https://ichiritsukoukou.jp/6389/" target="_blank">第32回TRPG体験会（札幌市立高校ポータルサイト）</a></li>
      <li><a href="https://ichiritsukoukou.jp/6232/" target="_blank">第31回TRPG体験会（札幌市立高校ポータルサイト）</a></li>
      <li><a href="https://ichiritsukoukou.jp/5912/" target="_blank">第30回TRPG体験会（札幌市立高校ポータルサイト）</a></li>
      <li><a href="https://ichiritsukoukou.jp/4608/" target="_blank">第29回TRPG体験会（札幌市立高校ポータルサイト）</a></li>
      <li><a href="https://ichiritsukoukou.jp/4131/" target="_blank">第28回TRPG体験会（札幌市立高校ポータルサイト）</a></li>
      <li><a href="https://ichiritsukoukou.jp/3547/" target="_blank">第27回TRPG体験会（札幌市立高校ポータルサイト）</a></li>
    </ul>
  </Section>
);

export default Features;

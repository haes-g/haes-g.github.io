import Section from '../../component/Section';

/**
 * Schedule.tsx
 * サブコンポーネント:紹介記事
 * 
 * @returns { React.ReactNode }
 */
const Schedule = () => (
  <Section className='schedule'>
    <p className='align-center'>2025年度の中高生がTRPGを遊んでみる会in札幌は下記の日程で行う予定です</p>
    <ul>
      <li>第36回　8月31日（日） TKPガーデンシティプレミアム札幌大通７F</li>
      <li><a href="https://sites.google.com/haes-g.info/homepage/%E7%AC%AC37%E5%9B%9E">第37回　10月25日（土）道庁赤れんが庁舎2階赤レンガホールA</a></li>
      <li><a href="https://sites.google.com/haes-g.info/homepage/%E7%AC%AC38%E5%9B%9E">第38回　12月14日（日）　さっぽろテレビ塔ホール</a></li>
      <li><a href="https://sites.google.com/haes-g.info/homepage/%E7%AC%AC38%E5%9B%9E">第39回　1月25日（日）　カナモトホール　第2会議室</a></li>
    </ul>
  </Section>
);

export default Schedule;

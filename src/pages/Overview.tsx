import Container from "../component/Container";
import Section from "../component/Section";

/**
 * PageTitle.tsx
 * 概要画面
 * @param { string } title ページのタイトル
 * @returns 
 */
const Overview = () => (
  <Container title="概要">
    <Section title="団体概要">
      <p>
        当団体は北海道にてアナログゲームを用いた教育をテーマに活動する団体です。<br />
        <br />
        現在の主な活動は札幌市教育委員会の協力と猫の手さっぽろの後援を受けて年3回程度実施している『中高生がTRPGを遊んでみる会in札幌』（旧名称:TRPG体験会）と任意団体マザーライフサポートと協力して行っている『アナログゲーム会』です。<br />
        今年は公益財団法人 コープさっぽろ社会福祉基金の地域福祉助成を受けて活動しています。<br />
        <br />
        <br />
        『中高生がTRPGを遊んでみる会in札幌』<br />
        <br />
        この活動は学校と連携し、コミュニケーション能力向上を目的に中学生・高校生を対象にTRPGを行うというものです。<br />
        近年は独立行政法人 国立青少年教育振興機構の子どもゆめ基金などの助成金を財源に行っています。<br />
        <br />
        <br />
        『アナログゲーム会』<br />
        <br />
        不登校児も含むフリースペースにてカードゲーム、ボードゲームを半日程度遊ぶイベントです。
      </p>
    </Section>
  </Container>
);

export default Overview;

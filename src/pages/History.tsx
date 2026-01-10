import Container from "../component/Container";
import Section from "../component/Section";
import Features from "./history/Features";

/**
 * PageTitle.tsx
 * 概要画面
 * @param { string } title ページのタイトル
 * @returns 
 */
const Overview = () => (
  <Container title="沿革">
    <Section>
      <p>
        2011年<br />
        市立札幌大通高等学校よりTRPGを利用した生徒のコミュニケーション能力開発の<br />
        協力要請が北海道大学のサークル、北海道大学RPG研究会にあり、イベントとしての<br />
        ＤＯＲＩ－ＴＲＰＧ研究会が開始される。<br />
        <br />

        2015年<br />
        大学サークルのＯＢであった木村と五十嵐にイベントとしての<br />
        ＤＯＲＩ－ＴＲＰＧ研究会の運営が委任される。<br />
        <br />
        2016年<br />
        日本ＳＮＳ推進機構への助成金申請を機に団体としてのＤＯＲＩ－ＴＲＰＧ研究会が発足。木村直樹が会長就任。<br />
        また、活動の名称をTRPG体験会とする。<br />
        <br />
        2021年<br />
        新型コロナウィルス感染症の流行により、TRPG体験会の実施を休止<br />
        <br />
        2022年<br />
        五十嵐正博が会長就任。<br />
        <br />
        2023年<br />
        団体名を北海道アナログゲーム教育研究会に改める。<br />
        任意団体マザーライフサポートと協力しアナログゲーム会を開始する<br />
        <br />
        2024年<br />
        TRPG体験会の名称を中高生TRPGを遊んでみる会in札幌に改称する
      </p>
    </Section>
    <Features />
  </Container>
);

export default Overview;

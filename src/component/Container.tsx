import React from 'react';
import Header from './Header';
import '../scss/component/Container.scss';

type Props = {
  children: React.ReactNode;
  title: string;
};

/**
 * Container.tsx
 * サイト全体の構造を提供する共通コンポーネント。
 * 最上位の親コンポーネントとして定義する。
 * このコンポーネントはpagesコンポーネントから呼び出される。
 * 
 * @param { React.ReactNode } children pages単位で構築した画面のReactNode
 * @param { string } title ページのタイトル
 * @returns { React.ReactNode }
 */
const Container = (props: Props) => (
  <div>
    <Header title={props.title} />
    <article>
      <div id="container">
        {props.children}
      </div>
    </article>
  </div>
);

export default Container;

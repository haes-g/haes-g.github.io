import React from 'react';

/**
 * Container.tsx
 * サイト全体の構造を提供する共通コンポーネント。
 * 最上位の親コンポーネントとして定義する。
 * このコンポーネントはpagesコンポーネントから呼び出される。
 */

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => (
  <div>
    {children}
  </div>
);

export default Container;

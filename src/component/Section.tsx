import { isNull } from '../common/common';
import '../scss/component/Section.scss';

type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Section.tsx
 * 章を構成する単独で完結するセクションコンポーネント
 * @param { string|undefined } title 章のタイトル
 * @param { React.ReactNode } children 本文のHTML(ReactNode)
 * @returns { React.ReactNode }
 */
const Section = (props: Props) => (
  <section>
    <div className={props.className}>
      <h3 className={isNull(props.title) ? 'd-none' : ''}>{props.title}</h3>
      {props.children}
    </div>
  </section>
);

export default Section;
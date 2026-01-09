import '../scss/component/PageTItle.scss';

type Props = {
  title: string;
}

/**
 * PageTitle.tsx
 * 画面のページを表示するパーツ
 * @param { string } title ページのタイトル
 * @returns 
 */
const PageTitle = (props: Props) => (
  <h2>{props.title}</h2>
);

export default PageTitle;
import Section from '../../component/Section';

/**
 * CoverImage.tsx
 * サブコンポーネント:紹介記事
 * 
 * @returns { React.ReactNode }
 */
const CoverImage = () => (
  <Section>
    <h2 className='align-center'>中高生がTRPGを遊んでみる会in札幌</h2>
    <div className='align-center'>
      <img src="src/assets/images/test_cover_image.png" alt="中高生がTRPGを遊んでみる会in札幌のカバーイラスト" />
    </div>
  </Section>
);

export default CoverImage;

import Section from '../../component/Section';
import '../../scss/component/InlineGForm.scss';

/**
 * InlineGForm.tsx
 * サブコンポーネント:インラインGoogle Forms
 * 
 * @returns { React.ReactNode }
 */
const InlineGForm = () => (
  <Section>
    <p className='align-center'>お問い合わせは下記からお願いします</p>
    <div className='align-center'>
      <iframe frameBorder={0} aria-label='Google Forms' src='https://docs.google.com/forms/d/e/1FAIpQLScEkN8PZ7KTCywiedF11NVmrU11kQKd2q42gjU9PxlddaiEWQ/viewform?embedded=true'></iframe>
    </div>
  </Section>
);

export default InlineGForm;

import DynamicPage from '../components/DynamicPage';
import { getSinglePage } from '../graphql/queries/dynamic-page';

export async function getStaticProps() {
  const { pageData } = await getSinglePage('home');
  return {
    props: {
      pageData: pageData || null,
    },
  };
}
export default function HomePage({ pageData }) {
  console.log('pageData-home', pageData);
  return (
    <>
      <DynamicPage pageData={pageData} />
    </>
  );
}

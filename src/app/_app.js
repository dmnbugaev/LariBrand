import Layout from '../components/Layout';
import '../styles/global_styles/index.css';
import SEO from '../components/SEO'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
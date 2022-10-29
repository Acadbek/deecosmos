import "../styles/globals.css";
import Layout from "../layout";
import 'antd/dist/antd.css';


export function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

import Layout from "@/components/Layout";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <script src="http://localhost:3000"></script> */}
      <Component {...pageProps} />
    </Layout>
  );
}

import Head from "next/head";

interface SeoProps {
  title: String;
}

export default function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title} | Next Moives</title>
    </Head>
  );
}

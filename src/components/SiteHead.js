import Head from 'next/head';

export const MyHead = (props) => {
  const { children } = props;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

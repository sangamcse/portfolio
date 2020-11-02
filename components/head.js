import Head from 'next/head';
import PropTypes from 'prop-types';

function MyHead(props) {
  const { pageName, children } = props;

  return (
    <Head>
      <title>{`${pageName} | Sangam Kumar`}</title>
      <meta name="description" content="Software Development Engineer" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      {children}
      <link
        as="style"
        rel="stylesheet preload prefetch"
        href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap"
        type="text/css"
        crossOrigin="anonymous"
      />
    </Head>
  );
}

MyHead.propTypes = {
  pageName: PropTypes.string,
  children: PropTypes.element
};

MyHead.defaultProps = {
  pageName: 'Home',
  children: null
};

export default MyHead;

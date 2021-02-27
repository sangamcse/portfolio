import Link from 'next/link';

export const Footer = () => (
  <footer className="footer">
    <p className="text-center mt-8 text-xl text-body">
      Made with ❤ by{' '}
      <Link href="/">
        <a
          className="text-primary hover:text-primary-hover"
          rel="noopener noreferrer"
        >
          Sangam Kumar
        </a>
      </Link>
    </p>
  </footer>
);

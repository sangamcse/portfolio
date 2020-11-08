import 'styles/Header.module.scss';

function Header() {
  return (
    <header className="header">
      <p className="text-center text-xl text-body">
        Made with ❤ by{' '}
        <a
          className="text-primary hover:text-primary-hover"
          href="https://www.sangam.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sangam Kumar
        </a>
      </p>
    </header>
  );
}

export default Header;

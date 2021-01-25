import { useTheme } from 'utils/theme_context';

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <span className="header__inner">
        <a className="hover:text-primary-hover" href="/">
          <div className="logo">
            <span className="text-lg">sangamcse</span>
            <span className="logo__cursor" />
          </div>
        </a>
        <span className="header__right">
          <nav className="menu">
            <ul className="menu__inner">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/posts">Blog</a>
              </li>
            </ul>
          </nav>
          <span
            className="theme-toggle"
            onClick={toggleTheme}
            aria-hidden="true"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
                  3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
                  13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"
              />
            </svg>
          </span>
        </span>
      </span>
    </header>
  );
}

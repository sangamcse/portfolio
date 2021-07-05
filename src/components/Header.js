import Link from 'next/link';

import { useTheme } from 'utils/theme_context';

export const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <span className="header__inner">
        <Link href="/">
          <a className="hover:text-primary-hover">
            <div className="logo">
              <span className="text-lg">sangamcse</span>
            </div>
          </a>
        </Link>
        <span className="header__right">
          <nav className="menu">
            <ul className="menu__inner">
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
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
};

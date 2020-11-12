import { useTheme } from 'utils/theme_context';

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className="header h-16 bg-background-muted">
      <span className="flex items-center justify-between my-0 mx-auto max-w-full w-11/12 text-center text-xl text-body">
        <a className="hover:text-primary-hover" href="/">
          <div className="flex items-center no-underline font-semibold font-mono">
            <span className="text-lg">sangamcse</span>
            <span className="logo__cursor" />
          </div>
        </a>
        <span className="flex flex-row items-center">
          <nav
            style={{
              borderRight: '1px solid',
              marginRight: '18px',
              zIndex: 9999
            }}
          >
            <ul className="flex items-center justify-start max-w-full mx-auto my-0 py-0 px-5 text-base list-none">
              <li className="my-0 mx-4">
                <a href="/about">About</a>
              </li>
              <li className="my-0 mx-4">
                <a href="/posts">Blog</a>
              </li>
            </ul>
          </nav>
          <span
            className="flex items-center justify-center leading-none cursor-pointer select-none"
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

export default Header;

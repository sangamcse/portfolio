import Layout from 'components/Layout';
import MyHead from 'components/SiteHead';

import { useTheme } from 'utils/theme_context';

function Index() {
  const { toggleTheme } = useTheme();

  return (
    <Layout>
      <MyHead />
      <div className="w-screen p-12 flex flex-col">
        <h1 className="text-center text-heading text-4xl font-bold">
          NextJS + Tailwind Theming example
        </h1>
        <p className="text-center mt-8 text-xl text-body">
          This is a basic example of how to setup theming using Tailwind +
          PostCSS. checkout the{' '}
          <a
            className="text-primary hover:text-primary-hover"
            href="https://github.com/sangamcse"
            target="_blank"
            rel="noopener noreferrer"
          >
            repo
          </a>{' '}
          for more information!
        </p>
        <div className="text-center">
          <button
            className="m-8 p-4 border rounded-lg bg-primary hover:bg-primary-hover text-white transition duration-200"
            onClick={toggleTheme}
            type="button"
          >
            Toggle theme
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
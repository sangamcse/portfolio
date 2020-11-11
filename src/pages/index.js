import Layout from 'components/Layout';
import MyHead from 'components/SiteHead';

function Index() {
  return (
    <Layout>
      <MyHead />
      <div className="w-screen p-12 flex flex-col">
        <h1 className="text-center text-heading text-4xl font-bold">
          Sangam Kumar
        </h1>
      </div>
    </Layout>
  );
}

export default Index;

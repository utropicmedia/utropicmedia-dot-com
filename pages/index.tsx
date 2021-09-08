import Page from '@components/page';

export default function Home() {
  const meta = {
    title: 'UTROPICMEDIA | Awesome Development',
    description: `A collective of premier technologists with a passion for solution development, focusing on Infrastructure, Security, Data Distribution and Managed SaaS Solutions. Members of Utropicmedia focus on understanding new technology and its impact on industry and consumers. Members are encouraged to contribute knowledge and build discussion with the community at-large with the goal of advancing technology's effectiveness, value and simplicity.`
  };
  return (
    <Page meta={meta} fullViewport>
      <div className="min-h-screen pt-16 pb-16 flex flex-col">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Utropicmedia</h1>
          </div>
        </main>
      </div>
    </Page>
  );
}

import Link from 'next/link';
import Page from '@components/page';

export default function FourOhFour() {
  const meta = {
    title: 'UTROPICMEDIA | Page not found',
    description: `We couldn't find the page you're looking for.`
  };
  return (
    <Page meta={meta} fullViewport>
      <div className="min-h-screen pt-16 pb-16 flex flex-col">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-50 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-200">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-gray-50 hover:text-gray-200">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  );
}

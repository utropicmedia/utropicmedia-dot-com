import Head from 'next/head';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Header from './header';
import Footer from './footer';

type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

type Props = {
  meta: Meta;
  children: React.ReactNode;
  fullViewport?: boolean;
};

export const SITE_URL = 'https://www.utropicmedia.com';

export default function Page({ meta, children, fullViewport = false }: Props) {
  const router = useRouter();
  const image = meta.image || '/twitter-card.png';
  const title = meta.title || 'UTROPICMEDIA | Awesome Development';
  const url = meta.url || `${SITE_URL}${router.asPath}`;
  const description =
    meta.description ||
    `A collective of premier technologists with a passion for solution development, focusing on Infrastructure, Security, Data Distribution and Managed SaaS Solutions. Members of Utropicmedia focus on understanding new technology and its impact on industry and consumers. Members are encouraged to contribute knowledge and build discussion with the community at-large with the goal of advancing technology's effectiveness, value and simplicity.`;

  return (
    <div className={cn('bg-gray-900 text-gray-50', { full: fullViewport })}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
        {image && (
          <meta
            property="og:image"
            content={image.startsWith('https://') ? image : `${SITE_URL}${image}`}
          />
        )}
      </Head>
      <div className="min-h-screen flex flex-col p-16">
        <Header />
        <main className="flex-grow flex flex-col justify-start w-full mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

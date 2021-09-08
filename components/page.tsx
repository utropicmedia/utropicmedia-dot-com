import Head from 'next/head';
import cn from 'classnames';

type Meta = {
  title: string | null;
  description: string | null;
  image?: string | null;
  url?: string | null;
};

type Props = {
  meta: Meta;
  children: React.ReactNode;
  fullViewport?: boolean;
};

export default function Page({ meta, children, fullViewport = false }: Props) {
  const title = meta.title || 'Utropicmedia';

  return (
    <div className={cn('bg-gray-900 text-gray-50', { full: fullViewport })}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}

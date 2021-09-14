import IconLogo from './icons/icon-logo';

export default function Footer() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="h-8">
        <IconLogo />
      </div>
      <div className="text-4xl font-condensed uppercase tracking-tight sm:text-5xl">
        Utropicmedia
      </div>
    </header>
  );
}

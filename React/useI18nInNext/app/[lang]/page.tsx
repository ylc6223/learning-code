import { useTranslation } from '../i18n';
import Link from 'next/link';
export default async function Home({ params: { lang } }: any) {
  const { t } = await useTranslation(lang, 'home');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="p-2 text-white text-2xl">{t('currentPage')}</p>
        <ul>
          <li>
            <Link className="text-white text-2xl" href="/en/landing">
              Landing-en
            </Link>
          </li>
          <li>
            <Link className="text-white text-2xl" href="/zh-CN/landing">
              Landing-zh-CN
            </Link>
          </li>
          <li>
            <Link className="text-white text-2xl" href="/landing">
              Landing-no-language
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

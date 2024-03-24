'use client';
import { useTranslation } from '../../i18n';
function handleClick() {
  history.back();
}
export default async function Landing({ params: { lang } }: any) {
  const { t } = await useTranslation(lang, 'landing-preview');
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-white text-3xl text-center ">landing Page</h1>
      <div className="text-center">
        <p className="p-2 text-gray-300 text-2xl">{t('brand')}</p>
        <p className="p-2 text-gray-300 text-2xl">{t('title')}</p>
        <p className="p-2 text-gray-300 text-2xl">{t('ceo')}</p>
        <button onClick={handleClick} className="p-2 bg-white">
          {t('fallback')}
        </button>
      </div>
    </div>
  );
}

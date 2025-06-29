import {getTranslations} from 'next-intl/server';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'HomePage'});
  
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center">
          {t('title')}
        </h1>
        <p className="text-xl text-center max-w-2xl">
          {t('subtitle')}
        </p>
        <p className="text-center max-w-3xl">
          {t('description')}
        </p>
        
        <div className="flex gap-4 mt-8">
          <a href="/nl" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Nederlands
          </a>
          <a href="/en" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            English
          </a>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Current locale: {locale}
        </p>
      </main>
    </div>
  );
}

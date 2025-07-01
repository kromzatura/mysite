import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

interface HeroProps {
  locale: string;
}

export default async function Hero({ locale }: HeroProps) {
  const t = await getTranslations({locale, namespace: 'HomePage'});

  return (
    <section className="w-full bg-blue-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 opacity-90">
          {t('heroSubtitle')}
        </p>
        <p className="text-base md:text-lg mb-10 opacity-80 max-w-2xl">
          {locale === 'nl' 
            ? 'Van biologische granen tot gespecialiseerde zaden - wij bieden kwaliteitsproducten met volledige certificering en betrouwbare levering.'
            : 'From organic grains to specialized seeds - we offer quality products with full certification and reliable delivery.'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
          >
            {t('heroCta')}
          </Link>
          <Link 
            href="/products" 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition-colors"
          >
            {locale === 'nl' ? 'Bekijk Producten' : 'View Products'}
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('products'), href: `/${locale}/products` },
    { name: t('quality'), href: `/${locale}/quality-and-certifications` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - ROYAL SECTION */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <div className="text-2xl font-bold">LAR Group B.V.</div>
                <div className="text-gray-400 text-sm">Professional Seeds & Grains</div>
              </div>
            </div>
            
            {/* NOW USING TRANSLATION */}
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('description')}
            </p>

            {/* ROYAL Certifications */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                {t('certifications')}
              </h4>
              <div className="flex items-center space-x-4">
                <div className="bg-green-700 px-3 py-1 rounded text-sm font-medium">
                  IFS Broker
                </div>
                <div className="bg-blue-700 px-3 py-1 rounded text-sm font-medium">
                  ISO 22000
                </div>
              </div>
            </div>
          </div>

          {/* ROYAL Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ROYAL Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t('contactInfo')}
            </h3>
            <div className="space-y-4">
              
              {/* Address with ROYAL icon */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300">
                  <div>Abstraat 10</div>
                  <div>5504CJ Veldhoven</div>
                  <div>Netherlands</div>
                </div>
              </div>

              {/* Phone with ROYAL icon */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+31617144921" className="text-gray-300 hover:text-white transition-colors">
                  +31 6 17144921
                </a>
              </div>

              {/* Email with ROYAL icon */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:alex.trade@largseeds.nl" className="text-gray-300 hover:text-white transition-colors">
                  alex.trade@largseeds.nl
                </a>
              </div>

              {/* ROYAL Business Hours */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                  {t('businessHours')}
                </h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <div>{t('mondayFriday')}</div>
                  <div>{t('weekend')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROYAL Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LAR Group B.V. {t('allRights')} 
              <span className="ml-4 text-gray-500">
                {t('founded')}
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href={`/${locale}/privacy-policy`} className="hover:text-white transition-colors">
                {t('privacyPolicy')}
              </Link>
              <Link href={`/${locale}/terms-of-service`} className="hover:text-white transition-colors">
                {t('terms')}
              </Link>
              <div className="text-gray-500">
                KvK: 12345678
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

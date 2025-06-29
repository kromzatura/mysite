'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('products'), href: `/${locale}/products` },
    { name: t('quality'), href: `/${locale}/quality-and-certifications` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('faq'), href: `/${locale}/faq` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    const cleanPath = segments.slice(2).join('/');
    return `/${newLocale}${cleanPath ? `/${cleanPath}` : ''}`;
  };

  // WORKING SOLUTION: Direct pathname check for active locale
  const isNlActive = pathname.startsWith('/nl');
  const isEnActive = pathname.startsWith('/en');

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LAR Group Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-900">LAR Group B.V.</div>
                <div className="text-xs text-gray-600">Professional Seeds & Grains</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Language Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-sm text-gray-600">
              <div className="font-semibold">+31 6 17144921</div>
              <div>alex.trade@largseeds.nl</div>
            </div>
            
            {/* PERFECT Language Switcher - WORKING! */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <Link
                href={switchLocale('nl')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  isNlActive
                    ? 'bg-blue-900 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-white'
                }`}
              >
                NL
              </Link>
              <Link
                href={switchLocale('en')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  isEnActive
                    ? 'bg-blue-900 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-white'
                }`}
              >
                EN
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 px-4 pt-4">
                <span className="text-sm text-gray-600">Language:</span>
                <Link
                  href={switchLocale('nl')}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    isNlActive ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  NL
                </Link>
                <Link
                  href={switchLocale('en')}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    isEnActive ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

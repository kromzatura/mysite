import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Fallback to 'nl' if locale is undefined
  const resolvedLocale = locale || 'nl';
  
  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  };
});

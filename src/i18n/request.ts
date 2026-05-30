import {getRequestConfig} from 'next-intl/server';
import {isLocale} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requestedLocale = await requestLocale;
  const locale = requestedLocale && isLocale(requestedLocale) ? requestedLocale : 'ru';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

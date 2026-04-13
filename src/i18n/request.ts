import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { i18nConfig } from '../../i18n-config';

export default getRequestConfig(async ({ locale }) => {
  if (!i18nConfig.locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default withNextIntlConfig(nextConfig);

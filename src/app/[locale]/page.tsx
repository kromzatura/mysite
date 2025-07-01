import Hero from '@/components/Hero';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div>
      <Hero locale={locale} />
      {/* Future sections will go here */}
    </div>
  );
}

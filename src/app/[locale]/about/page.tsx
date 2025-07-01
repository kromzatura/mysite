export default async function AboutPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {locale === 'nl' 
                ? 'Over LAR Group B.V.' 
                : 'About LAR Group B.V.'
              }
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === 'nl'
                ? 'Sinds 2009 uw betrouwbare partner in professionele zaden en granen'
                : 'Since 2009 your reliable partner in professional seeds and grains'
              }
            </p>
          </div>

          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                {locale === 'nl' ? 'Onze Missie' : 'Our Mission'}
              </h2>
              <p>
                {locale === 'nl'
                  ? 'LAR Group B.V. is gespecialiseerd in de groothandel van hoogwaardige zaden en granen voor B2B-klanten. Wij leveren uitsluitend aan professionelle partijen in de agrarische sector en voedingsindustrie.'
                  : 'LAR Group B.V. specializes in wholesale of high-quality seeds and grains for B2B customers. We supply exclusively to professional parties in the agricultural sector and food industry.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {locale === 'nl' ? 'Kwaliteit & Certificering' : 'Quality & Certification'}
                </h3>
                <p>
                  {locale === 'nl'
                    ? 'Al onze producten voldoen aan de hoogste kwaliteitsnormen en zijn volledig gecertificeerd volgens internationale standaarden.'
                    : 'All our products meet the highest quality standards and are fully certified according to international standards.'
                  }
                </p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {locale === 'nl' ? 'Betrouwbare Levering' : 'Reliable Delivery'}
                </h3>
                <p>
                  {locale === 'nl'
                    ? 'Met meer dan 15 jaar ervaring garanderen wij tijdige en betrouwbare levering aan onze B2B-partners.'
                    : 'With over 15 years of experience, we guarantee timely and reliable delivery to our B2B partners.'
                  }
                </p>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-4">
                {locale === 'nl'
                  ? 'Heeft u vragen over onze producten of diensten?'
                  : 'Do you have questions about our products or services?'
                }
              </p>
              <a 
                href="/contact"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors"
              >
                {locale === 'nl' ? 'Neem Contact Op' : 'Get In Touch'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

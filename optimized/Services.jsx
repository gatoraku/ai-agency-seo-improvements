import { useTranslation } from 'react-i18next';
import ServiceCard from './ServiceCard';

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar - Adding semantic header */}
      <header>
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50" aria-label="Main Navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Adding h1 for main title - important for SEO */}
                <h1 className="text-xl font-bold">nextai</h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-gray-300 hover:text-white">{t('nav.services')}</a>
                <a href="#solutions" className="text-gray-300 hover:text-white">{t('nav.solutions')}</a>
                <a href="#about" className="text-gray-300 hover:text-white">{t('nav.about')}</a>
                <a href="#contact" className="text-gray-300 hover:text-white">{t('nav.contact')}</a>
                <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                  {t('cta.schedule')}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content - Adding semantic tags */}
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Adding section with id for anchor links and aria-labelledby for accessibility */}
        <section id="services" aria-labelledby="services-heading">
          {/* Adding proper h2 heading for SEO - visually hidden if needed */}
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wrapping each card in article for semantic meaning */}
            <article>
              <ServiceCard
                title={t('strategy.title')}
                description={t('strategy.description')}
                items={[
                  t('strategy.item1'),
                  t('strategy.item2'),
                  t('strategy.item3')
                ]}
              />
            </article>
            
            <article>
              <ServiceCard
                title={t('integration.title')}
                description={t('integration.description')}
                items={[
                  t('integration.item1'),
                  t('integration.item2'),
                  t('integration.item3')
                ]}
              />
            </article>
            
            <article>
              <ServiceCard
                title={t('analytics.title')}
                description={t('analytics.description')}
                items={[
                  t('analytics.item1'),
                  t('analytics.item2'),
                  t('analytics.item3')
                ]}
              />
            </article>
            
            <article>
              <ServiceCard
                title={t('automation.title')}
                description={t('automation.description')}
                items={[
                  t('automation.item1'),
                  t('automation.item2'),
                  t('automation.item3')
                ]}
              />
            </article>
            
            <article>
              <ServiceCard
                title={t('compliance.title')}
                description={t('compliance.description')}
                items={[
                  t('compliance.item1'),
                  t('compliance.item2'),
                  t('compliance.item3')
                ]}
              />
            </article>
            
            <article>
              <ServiceCard
                title={t('training.title')}
                description={t('training.description')}
                items={[
                  t('training.item1'),
                  t('training.item2'),
                  t('training.item3')
                ]}
              />
            </article>
          </div>
        </section>
      </main>
      
      {/* Adding simple footer for additional SEO value */}
      <footer className="bg-gray-800 py-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} nextai. All rights reserved.</p>
      </footer>
    </div>
  );
}
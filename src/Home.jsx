import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { ArrowRight, ArrowLeft, ShieldCheck, Award, Users, HardHat, CheckCircle2, Building, Compass, Wrench, ArrowUpRight } from 'lucide-react';

export const Home = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const featuredProjects = [
    {
      id: 1,
      title: lang === 'ar' ? 'أبراج الأفق السكنية' : 'Résidence Les Horizons',
      category: lang === 'ar' ? 'سكني' : 'Résidentiel',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      location: 'Paris, France',
      stats: '45,000 m² • 120 Units'
    },
    {
      id: 2,
      title: lang === 'ar' ? 'مركز الابتكار التكنولوجي' : 'Technopôle Innovation Center',
      category: lang === 'ar' ? 'تجاري' : 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      location: 'Lyon, France',
      stats: '18,500 m² • LEED Gold'
    },
    {
      id: 3,
      title: lang === 'ar' ? 'مجمع اللوجستيات الذكية' : 'Hub Logistique Avancé',
      category: lang === 'ar' ? 'صناعي' : 'Industriel',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
      location: 'Marseille, France',
      stats: '60,000 m² • Automated'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18fcd02?auto=format&fit=crop&w=2000&q=85"
            alt="Construction site"
            className="w-full h-full object-cover opacity-35 scale-105 animate-pulse duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center lg:text-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.tagline}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 rtl:space-x-reverse bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-amber-600/30 transition-all transform hover:-translate-y-1"
              >
                <span>{t.hero.ctaPrimary}</span>
                <Arrow className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 rtl:space-x-reverse bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold transition-all"
              >
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-slate-200 dark:divide-slate-800 p-8">
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-500 mb-1">25+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold">{t.hero.stats.experience}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-500 mb-1">450+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold">{t.hero.stats.projects}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-500 mb-1">98%</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold">{t.hero.stats.clients}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-500 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold">{t.hero.stats.safety}</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building, data: t.services.residential },
            { icon: Compass, data: t.services.commercial },
            { icon: HardHat, data: t.services.industrial },
            { icon: Wrench, data: t.services.renovation },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-500 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.data.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.data.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>En savoir plus</span>
                  <Arrow className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Carousel / Grid */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
                {t.projects.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                {t.projects.subtitle}
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-600 dark:text-amber-400 font-bold hover:underline"
            >
              <span>Voir tous les projets</span>
              <Arrow className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {proj.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">{proj.location}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg inline-block mb-4">
                    {proj.stats}
                  </div>
                  <Link
                    to="/projects"
                    className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-amber-600 to-amber-500 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10">
            <Building className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Prêt à Concrétiser Votre Projet de Construction ?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Bénéficiez de l'expertise de nos ingénieurs et de notre engagement total pour la réussite de votre chantier. Devis gratuit et sans engagement sous 48h.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-slate-900 hover:bg-slate-950 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all"
            >
              <span>{t.hero.ctaPrimary}</span>
              <Arrow className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

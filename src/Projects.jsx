import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Building2, MapPin, Calendar, DollarSign, User, X, Filter } from 'lucide-react';

export const Projects = () => {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 1,
      title: lang === 'ar' ? 'أبراج الأفق السكنية' : 'Résidence Les Horizons',
      category: 'res',
      categoryName: lang === 'ar' ? 'سكني' : 'Résidentiel',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85',
      location: 'Paris, France',
      duration: '18 mois',
      budget: '€14.5M',
      client: 'Groupe Immobilier de France',
      desc: lang === 'ar'
        ? 'مجمع سكني فاخر يضم 120 شقة ذكية مع مساحات خضراء ومواقف تحت الأرض.'
        : 'Complexe résidentiel de standing composé de 120 appartements connectés avec espaces verts et parkings souterrains.',
      specs: ['120 Units', '45,000 m²', 'HQE Certification']
    },
    {
      id: 2,
      title: lang === 'ar' ? 'مركز الابتكار التكنولوجي' : 'Technopôle Innovation Center',
      category: 'com',
      categoryName: lang === 'ar' ? 'تجاري' : 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
      location: 'Lyon, France',
      duration: '24 mois',
      budget: '€28.0M',
      client: 'Metropole de Lyon',
      desc: lang === 'ar'
        ? 'برج مكاتب عصري مستدام مصمم وفق أعلى معايير كفاءة الطاقة.'
        : 'Tour de bureaux moderne et éco-responsable conçue selon les normes de haute performance énergétique LEED Gold.',
      specs: ['18,500 m²', 'LEED Gold', 'Smart HVAC']
    },
    {
      id: 3,
      title: lang === 'ar' ? 'مجمع اللوجستيات الذكية' : 'Hub Logistique Avancé',
      category: 'ind',
      categoryName: lang === 'ar' ? 'صناعي' : 'Industriel',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=85',
      location: 'Marseille, France',
      duration: '12 mois',
      budget: '€9.2M',
      client: 'LogiMed SA',
      desc: lang === 'ar'
        ? 'منشأة تخزين آلية ضخمة مجهزة بأنظمة مناولة متطورة.'
        : 'Plateforme logistique automatisée de grande envergure dotée de quais de chargement grande capacité.',
      specs: ['60,000 m²', 'High Bay Storage', 'Automated Docks']
    },
    {
      id: 4,
      title: lang === 'ar' ? 'فندق البلاديوم الفاخر' : 'Hôtel Le Palladium',
      category: 'com',
      categoryName: lang === 'ar' ? 'تجاري' : 'Commercial',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
      location: 'Nice, France',
      duration: '16 mois',
      budget: '€19.0M',
      client: 'Palladium Hospitality',
      desc: lang === 'ar'
        ? 'تجديد كامل لفندق 5 نجوم يضم 85 غرفة ومركز مؤتمرات.'
        : 'Rénovation haut standing d’un hôtel 5 étoiles avec 85 chambres et centre de conférences.',
      specs: ['5 Stars', 'Spa & Pool', 'Acoustic Insulation']
    },
    {
      id: 5,
      title: lang === 'ar' ? 'حي الحدائق السكني' : 'Éco-Quartier Les Jardins',
      category: 'res',
      categoryName: lang === 'ar' ? 'سكني' : 'Résidentiel',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85',
      location: 'Bordeaux, France',
      duration: '20 mois',
      budget: '€22.0M',
      client: 'Habitat Durable',
      desc: lang === 'ar'
        ? 'مجموعة فلل بيئية تعتمد على الطاقة الشمسية ومواد البناء الصديقة للبيئة.'
        : 'Ensemble de villas bioclimatiques à énergie positive intégrant des matériaux biosourcés.',
      specs: ['45 Villas', 'Solar Roofs', 'Zero Carbon']
    },
    {
      id: 6,
      title: lang === 'ar' ? 'مصنع الأجزاء الدقيقة' : 'Usine de Précision Mécanique',
      category: 'ind',
      categoryName: lang === 'ar' ? 'صناعي' : 'Industriel',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=85',
      location: 'Toulouse, France',
      duration: '14 mois',
      budget: '€11.5M',
      client: 'AeroTech Systems',
      desc: lang === 'ar'
        ? 'وحدة صناعية نظيفة مع تحكم متطور بالبيئة الداخلية.'
        : 'Unité industrielle de haute technologie avec salles blanches et isolation vibratoire spécifique.',
      specs: ['Clean Rooms', 'High Load Floors', 'Advanced HVAC']
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
          {t.projects.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {[
          { key: 'all', label: t.projects.filterAll },
          { key: 'res', label: t.projects.filterRes },
          { key: 'com', label: t.projects.filterCom },
          { key: 'ind', label: t.projects.filterInd },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
              filter === tab.key
                ? 'bg-amber-600 text-white shadow-amber-600/25'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(proj => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all cursor-pointer group flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {proj.categoryName}
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-1 rtl:space-x-reverse text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{proj.location}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>{proj.budget}</span>
                <span className="bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-lg">
                  {t.projects.viewDetails}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                {selectedProject.categoryName}
              </span>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
                <div>
                  <span className="block text-slate-500 font-semibold mb-1">{t.projects.location}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-semibold mb-1">{t.projects.duration}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedProject.duration}</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-semibold mb-1">{t.projects.budget}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedProject.budget}</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-semibold mb-1">{t.projects.client}</span>
                  <span className="font-bold text-slate-900 dark:text-white truncate block">{selectedProject.client}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.specs.map((spec, i) => (
                  <span key={i} className="px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-lg text-xs font-bold">
                    ✓ {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

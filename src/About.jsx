import React from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Award, Users, CheckCircle2, Building2, HardHat } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: "Jean-Marc Leroy",
      role: "Président Directeur Général",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Nadia Bensalem",
      role: "Directrice Ingénierie & Innovation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Thomas Varin",
      role: "Directeur des Opérations Chantiers",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const certs = [
    "ISO 9001 (Management de la Qualité)",
    "ISO 14001 (Management Environnemental)",
    "OHSAS 18001 / ISO 45001 (Santé & Sécurité)",
    "Label HQE (Haute Qualité Environnementale)"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Building2 className="w-4 h-4" />
          <span>{t.about.title}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
          {t.about.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {t.about.subtitle}
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            {t.about.storyTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            {t.about.storyText}
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="text-3xl font-black text-amber-600 mb-1">25+</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Années d'expertise</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="text-3xl font-black text-amber-600 mb-1">450+</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Projets réussis</div>
            </div>
          </div>
        </div>
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
            alt="Engineering team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
            {t.about.valuesTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: t.about.val1Title, desc: t.about.val1Desc, icon: ShieldCheck },
            { title: t.about.val2Title, desc: t.about.val2Desc, icon: Award },
            { title: t.about.val3Title, desc: t.about.val3Desc, icon: HardHat },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
            {t.about.teamTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
              <div className="h-72 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-black mb-3">{t.about.certTitle}</h2>
          <p className="text-slate-400 text-sm">Gages de notre rigueur et de notre conformité aux standards internationaux les plus stricts.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex items-start space-x-3 rtl:space-x-reverse">
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-bold text-slate-200">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

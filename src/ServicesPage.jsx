import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Calculator, Send, CheckCircle2, PhoneCall, Mail, User, MapPin } from 'lucide-react';

export const ServicesPage = () => {
  const { t } = useLanguage();

  // Calculator State
  const [projectType, setProjectType] = useState('residential');
  const [surface, setSurface] = useState(150);
  const [quality, setQuality] = useState('standard');
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  // Calculate price estimate
  const getMultiplier = () => {
    switch (projectType) {
      case 'residential': return 1200;
      case 'commercial': return 1500;
      case 'industrial': return 950;
      case 'renovation': return 800;
      default: return 1000;
    }
  };

  const getQualityMultiplier = () => {
    switch (quality) {
      case 'standard': return 1;
      case 'premium': return 1.35;
      case 'luxury': return 1.8;
      default: return 1;
    }
  };

  const estimatedPrice = Math.round(surface * getMultiplier() * getQualityMultiplier());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
          {t.servicesPage.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {t.servicesPage.subtitle}
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-12">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white text-center">
          {t.servicesPage.processTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: t.servicesPage.step1, desc: t.servicesPage.step1Desc },
            { title: t.servicesPage.step2, desc: t.servicesPage.step2Desc },
            { title: t.servicesPage.step3, desc: t.servicesPage.step3Desc },
            { title: t.servicesPage.step4, desc: t.servicesPage.step4Desc },
          ].map((step, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative">
              <div className="text-3xl font-black text-amber-500/20 absolute top-4 right-4">0{idx + 1}</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Estimator & Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Cost Calculator */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-200 dark:border-slate-800 pb-4">
            <Calculator className="w-7 h-7 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.servicesPage.calcTitle}
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                {t.servicesPage.calcType}
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-amber-600"
              >
                <option value="residential">{t.services.residential.title}</option>
                <option value="commercial">{t.services.commercial.title}</option>
                <option value="industrial">{t.services.industrial.title}</option>
                <option value="renovation">{t.services.renovation.title}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                {t.servicesPage.calcSurface} : {surface} m²
              </label>
              <input
                type="range"
                min="50"
                max="2000"
                step="10"
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                {t.servicesPage.calcQuality}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'standard', label: t.servicesPage.standard },
                  { key: 'premium', label: t.servicesPage.premium },
                  { key: 'luxury', label: t.servicesPage.luxury },
                ].map((q) => (
                  <button
                    key={q.key}
                    type="button"
                    onClick={() => setQuality(q.key)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      quality === q.key
                        ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                        : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6 text-center space-y-1">
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
                {t.servicesPage.estimateResult}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-500" dir="ltr">
                € {estimatedPrice.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                * Estimation non contractuelle sujette à étude technique détaillée.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-200 dark:border-slate-800 pb-4">
            <PhoneCall className="w-7 h-7 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.servicesPage.contactFormTitle}
            </h2>
          </div>

          {formSent ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">Demande Envoyée avec Succès !</h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Nos ingénieurs examineront votre projet et vous contacteront dans les plus brefs délais (sous 48h).
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  {t.servicesPage.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    {t.servicesPage.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="jean@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    {t.servicesPage.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  {t.servicesPage.message}
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                  placeholder="Détails du projet, superficie, localisation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Send className="w-4 h-4" />
                <span>{t.servicesPage.submit}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Building2, MapPin, Phone, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white">
                {t.brand}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-amber-500 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001 & OHSAS 18001 Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-800 pb-2">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors flex items-center space-x-1 rtl:space-x-reverse">
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-500 transition-colors flex items-center space-x-1 rtl:space-x-reverse">
                  <span>{t.nav.projects}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors flex items-center space-x-1 rtl:space-x-reverse">
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-500 transition-colors flex items-center space-x-1 rtl:space-x-reverse">
                  <span>{t.nav.services}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-800 pb-2">
              {t.services.title}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">{t.services.residential.title}</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">{t.services.commercial.title}</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">{t.services.industrial.title}</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">{t.services.renovation.title}</li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-800 pb-2">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span dir="ltr">+33 1 42 68 55 00</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>contact@batipro-engineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>{t.footer.rights}</p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

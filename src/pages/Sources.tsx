import React from 'react';
import { Globe, ShieldCheck, AlertOctagon, HelpCircle } from 'lucide-react';

export const Sources: React.FC = () => {
  const sourcesDirectory = [
    {
      domain: 'sample-daily.example',
      credibility: 'High (8.4/10)',
      bias: 'Center',
      age: '12 years',
      type: 'National Newspaper',
      status: 'Trusted',
    },
    {
      domain: 'sports-wire.example',
      credibility: 'High (8.9/10)',
      bias: 'Center',
      age: '9 years',
      type: 'Sports Syndicate',
      status: 'Trusted',
    },
    {
      domain: 'wellness-today.example',
      credibility: 'Moderate (5.2/10)',
      bias: 'Low',
      age: '2 years',
      type: 'Lifestyle Portal',
      status: 'Caution',
    },
    {
      domain: 'health-alerts.example',
      credibility: 'Low (3.0/10)',
      bias: 'Unknown',
      age: '5 months',
      type: 'Anonymous Blog',
      status: 'Flagged',
    },
    {
      domain: 'unverified-news.com',
      credibility: 'Very Low (2.1/10)',
      bias: 'High (Left)',
      age: '3 months',
      type: 'Clickbait Network',
      status: 'Flagged',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
          Reputation Database
        </span>
        <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
          Audited News Sources
        </h1>
        <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
          Sample directory of publisher credibility ratings, political leanings, and WHOIS domain ages.
        </p>
      </div>

      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#EAE4D7] dark:bg-[#252320] border-b border-[#DED6C9] dark:border-[#33312B] text-[#68645E] dark:text-[#9E988F] uppercase">
              <tr>
                <th className="py-3 px-4">Domain</th>
                <th className="py-3 px-4">Credibility</th>
                <th className="py-3 px-4">Bias</th>
                <th className="py-3 px-4">Age</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DED6C9] dark:divide-[#33312B]">
              {sourcesDirectory.map((s) => (
                <tr key={s.domain} className="hover:bg-[#EAE4D7]/30 dark:hover:bg-[#252320]/30 transition-colors">
                  <td className="py-3 px-4 font-bold text-[#171717] dark:text-[#EDE8DF] flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#68645E]" />
                    {s.domain}
                  </td>
                  <td className="py-3 px-4">{s.credibility}</td>
                  <td className="py-3 px-4">{s.bias}</td>
                  <td className="py-3 px-4">{s.age}</td>
                  <td className="py-3 px-4">{s.type}</td>
                  <td className="py-3 px-4 text-right">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold border ${
                        s.status === 'Trusted'
                          ? 'bg-[#DDF1E3] text-[#13834D] border-[#B7E2C3] dark:bg-[#173322] dark:text-[#22A062]'
                          : s.status === 'Caution'
                          ? 'bg-[#EAE4FA] text-[#7051D8] border-[#D1C3F5] dark:bg-[#282142] dark:text-[#8A6EE8]'
                          : 'bg-[#FCE3DE] text-[#D92D2D] border-[#F6B7AE] dark:bg-[#351C1A] dark:text-[#E03535]'
                      }`}
                    >
                      {s.status === 'Trusted' ? (
                        <ShieldCheck className="w-3 h-3" />
                      ) : s.status === 'Caution' ? (
                        <HelpCircle className="w-3 h-3" />
                      ) : (
                        <AlertOctagon className="w-3 h-3" />
                      )}
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-[#EAE4D7]/40 dark:bg-[#252320]/40 rounded-[10px] border border-[#DED6C9] dark:border-[#33312B] text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
        Notice: Domain reputation metrics displayed are sample values illustrative of the NewsGuard / Media Bias Fact Check schema.
      </div>
    </div>
  );
};

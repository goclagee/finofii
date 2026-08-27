import { Link } from "react-router-dom";
import { Mail, Phone, Clock, User } from "lucide-react";

const escalationMatrix = [
  {
    level: "0",
    title: "Initial Contact",
    subtitle: "Customer Care",
    person: null,
    phone: "+91 120 510 6933",
    email: "care@finofiifintech.com",
    hours: "10:00 am – 6:30 pm (Mon–Sat)",
  },
  {
    level: "1",
    title: "First Escalation",
    subtitle: "Operations Manager",
    person: "Mansi Singh Chauhan",
    phone: "+91 93113 61888",
    email: "ops@finofiifintech.com",
    hours: null,
  },
  {
    level: "2",
    title: "Second Escalation",
    subtitle: "Founder's Office",
    person: "Sonam Nikam",
    phone: "+91 62849 28859",
    email: "foundersoffice@finofii.com",
    hours: null,
  },
  {
    level: "3",
    title: "Third Escalation",
    subtitle: "Nodal Officer (President\nFinofiii Treasury)",
    person: "Sidarth Raina",
    phone: "+91 98107 43977",
    email: "sidarth.raina@finofii.com",
    hours: null,
  },
  {
    level: "4",
    title: "Final Escalation",
    subtitle: "Compliance Officer\n(Co-Founder)",
    person: "Mayank Saxena",
    phone: "+91 98111 39798",
    email: "ms@finofii.com",
    hours: null,
  },
];

const GrievanceRedressal = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold rounded-full uppercase tracking-wider mb-6" style={{ color: '#bfdbfe' }}>
            Finofiii Fintech Private Limited
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Grievance Redressal</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light" style={{ color: 'rgba(191, 219, 254, 0.8)' }}>
            Escalation Matrix & Complaint Resolution Process
          </p>
        </div>
      </section>

      {/* Escalation Matrix */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-14">

            <h2 className="text-2xl font-bold mb-8" style={{ color: '#111827' }}>Grievance Redressal & Escalation Matrix</h2>

            {/* Escalation Steps */}
            <div className="space-y-6">
              {escalationMatrix.map((step, index) => (
                <div key={index} className="relative border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all">
                  {/* Level badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                      Level {step.level}
                    </span>
                  </div>

                  <div className="mt-2">
                    <h3 className="text-lg font-bold" style={{ color: '#111827' }}>{step.title}</h3>
                    <p className="text-sm whitespace-pre-line" style={{ color: '#6b7280' }}>{step.subtitle}</p>
                  </div>

                  <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {step.person && (
                      <div className="flex items-center gap-2">
                        <User size={16} style={{ color: '#2563eb' }} />
                        <span className="text-sm" style={{ color: '#374151' }}>{step.person}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Phone size={16} style={{ color: '#2563eb' }} />
                      <a href={`tel:${step.phone.replace(/\s/g, '')}`} className="text-sm hover:underline" style={{ color: '#1d4ed8' }}>{step.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} style={{ color: '#2563eb' }} />
                      <a href={`mailto:${step.email}`} className="text-sm hover:underline" style={{ color: '#1d4ed8' }}>{step.email}</a>
                    </div>
                    {step.hours && (
                      <div className="flex items-center gap-2">
                        <Clock size={16} style={{ color: '#2563eb' }} />
                        <span className="text-sm" style={{ color: '#374151' }}>{step.hours}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resolution Timeline */}
            <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#92400e' }}>Resolution Timeline</h3>
              <div className="space-y-4 text-base" style={{ color: '#78350f' }}>
                <p>
                  <span className="font-semibold">30 Calendar Days:</span> Finofiii Fintech will ensure resolution within 30 calendar days from the date of complaint registration.
                </p>
                <p>
                  <span className="font-semibold">External Escalation:</span> If the grievance remains unresolved after 30 calendar days or is not resolved satisfactorily through the above matrix, investors may lodge a complaint with SEBI through the SCORES portal at{" "}
                  <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#1d4ed8' }}>https://scores.sebi.gov.in</a>
                </p>
                <p>
                  <span className="font-semibold">Physical Complaints:</span> Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400051.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/investor-charter"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
              >
                Investor Charter & Complaint Status
              </Link>
              <Link
                to="/disclosure"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
              >
                ← Back to Disclosure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrievanceRedressal;

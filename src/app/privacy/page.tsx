import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Privacy Policy</h1>
          </div>

          <div className="space-y-8 text-slate-400 leading-relaxed">
            <p className="italic text-slate-500">Last Updated: 28 February 2026</p>
            
            <p>
              Simon Turner ("we", "us", or "our") operates the Union Helper application. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App.
            </p>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-slate-200">Personal Data:</strong> While using our App, we may ask you to provide us with certain personally identifiable information, such as your email address, name, or phone number.
                </p>
                <p>
                  <strong className="text-slate-200">Usage Data:</strong> We may also collect information on how the App is accessed and used to help us improve the service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Data</h2>
              <p className="mb-4">We use the collected data for various purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and maintain the App.</li>
                <li>To notify you about changes to our App.</li>
                <li>To provide customer care and support.</li>
                <li>To monitor the usage of the App and detect technical issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal data. We will only share your information with third parties when it is legally required or absolutely necessary to provide our services (e.g., secure hosting providers).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your Personal Data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Your Data Protection Rights</h2>
              <p>
                Depending on your location (such as the UK/EEA), you have certain data protection rights, including the right to access, update, or delete the information we have on you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, please contact us at: 
                <a href="mailto:admin@unionhelper.co.uk" className="text-blue-400 hover:underline ml-1">admin@unionhelper.co.uk</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

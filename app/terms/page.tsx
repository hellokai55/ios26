import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - iOS 26',
  description: 'Read the terms of service for iOS 26 website. Understand your rights and responsibilities when using our informational platform.',
  keywords: 'terms of service, user agreement, iOS 26 terms, website rules',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              iOS 26
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="/#compatibility" className="text-gray-600 hover:text-blue-600 transition-colors">
                Compatibility
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="text-gray-600 mb-8 text-center">
              <p>Last updated: June 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using the iOS 26 website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Website Description</h2>
                <p className="mb-4">
                  iOS 26 website is an informational platform providing comprehensive information about Apple&apos;s iOS 26 operating system. The website includes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Latest iOS 26 features and updates</li>
                  <li>Device compatibility information</li>
                  <li>Technical guides and tutorials</li>
                  <li>Blog articles about iOS 26 developments</li>
                  <li>Links to official Apple resources</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Conduct</h2>
                <p className="mb-4">You agree to use the iOS 26 website responsibly and agree not to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Use the website for any unlawful purpose or to solicit unlawful activity</li>
                  <li>Attempt to gain unauthorized access to the website or its related systems</li>
                  <li>Use any automated systems or software to extract data from the website</li>
                  <li>Interfere with or disrupt the website or servers connected to it</li>
                  <li>Reproduce, duplicate, copy, sell, or exploit any portion of the website content</li>
                  <li>Post or transmit any harmful, offensive, or inappropriate content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  The website and its original content, features, and functionality are owned by iOS 26 website and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>All website content, including text, images, and code, are proprietary</li>
                  <li>You may not modify, distribute, or create derivative works without permission</li>
                  <li>Personal use and sharing of content for educational purposes is permitted</li>
                  <li>Commercial use of website content requires written permission</li>
                  <li>Apple, iOS, iPhone, and related trademarks belong to Apple Inc.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy and Data</h2>
                <p className="mb-4">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using the iOS 26 website, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Website Availability</h2>
                <p className="mb-4">
                  We strive to keep the iOS 26 website available 24/7, but we cannot guarantee uninterrupted access:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The website may be temporarily unavailable due to maintenance</li>
                  <li>We may modify or update content without notice</li>
                  <li>Information is provided for educational purposes only</li>
                  <li>We are not responsible for decisions made based on website content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
                <p className="mb-4">
                  The iOS 26 website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>We make no warranties about the website&apos;s reliability or availability</li>
                  <li>Information is provided for educational purposes and may not be current</li>
                  <li>We are not affiliated with Apple Inc. and this is an unofficial resource</li>
                  <li>Use of the website is at your own risk</li>
                  <li>We are not liable for any damages arising from website use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Links</h2>
                <p className="mb-4">
                  Our website contains links to third-party websites and services:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>We are not responsible for the content or practices of linked sites</li>
                  <li>Links to Apple&apos;s official resources are provided for convenience</li>
                  <li>Third-party sites have their own terms of service and privacy policies</li>
                  <li>We do not endorse or guarantee third-party content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall iOS 26 website, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, punitive, consequential, or similar damages arising from your use of the website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Changes will be posted on this page with an updated date</li>
                  <li>Continued use after changes constitutes acceptance</li>
                  <li>Major changes will be highlighted on our website</li>
                  <li>You are responsible for reviewing terms periodically</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> hellokaius@gmail.com</p>
                  <p><strong>Website:</strong> ios26.xyz</p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="mb-4">
                  These terms shall be interpreted and governed in accordance with the laws of the jurisdiction in which iOS 26 website operates, without regard to its conflict of law provisions.
                </p>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                📱 Back to iOS 26
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">iOS 26</h3>
              <p className="text-gray-400">
                Your complete guide to Apple&apos;s revolutionary mobile operating system.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#compatibility" className="hover:text-white transition-colors">Compatibility</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Apple Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.apple.com/ios/" className="hover:text-white transition-colors">Official iOS Page</a></li>
                <li><a href="https://beta.apple.com" className="hover:text-white transition-colors">Beta Program</a></li>
                <li><a href="https://developer.apple.com" className="hover:text-white transition-colors">Developer Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 iOS 26 Guide. All rights reserved. Not affiliated with Apple Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 
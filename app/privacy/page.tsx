import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - iOS 26',
  description: 'Learn how iOS 26 website protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection and usage practices.',
  keywords: 'privacy policy, data protection, user privacy, iOS 26 privacy',
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="text-gray-600 mb-8 text-center">
              <p>Last updated: June 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  At iOS 26 website, we are committed to protecting your privacy. We collect minimal information to provide you with the best informational experience:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Usage Analytics:</strong> We may collect anonymous usage statistics to improve our website</li>
                  <li><strong>Technical Information:</strong> Basic device and browser information for compatibility purposes</li>
                  <li><strong>Contact Information:</strong> Only when you voluntarily contact us via email</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To provide and maintain the iOS 26 informational website</li>
                  <li>To improve our content and user experience</li>
                  <li>To ensure technical functionality and compatibility</li>
                  <li>To provide customer support when needed</li>
                  <li>To respond to your inquiries and feedback</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Storage and Security</h2>
                <p className="mb-4">
                  Your privacy and data security are our top priorities:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>No Personal Information:</strong> We do not collect personal information unless voluntarily provided</li>
                  <li><strong>Secure Transmission:</strong> All data transmission is encrypted using HTTPS</li>
                  <li><strong>No Third-Party Sharing:</strong> We do not sell or share your data with third parties</li>
                  <li><strong>Minimal Data Collection:</strong> We only collect what is necessary for website functionality</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Local Storage</h2>
                <p className="mb-4">
                  iOS 26 website uses minimal browser storage technologies:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Anonymous usage data to improve our service</li>
                  <li><strong>No Tracking:</strong> We do not use tracking cookies for advertising</li>
                  <li><strong>Control:</strong> You can control cookies through your browser settings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
                <p className="mb-4">
                  iOS 26 website may integrate with third-party services:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Hosting Services:</strong> Website hosting and content delivery</li>
                  <li><strong>Analytics:</strong> We may use analytics services to understand usage patterns</li>
                  <li><strong>External Links:</strong> Links to official Apple resources and documentation</li>
                </ul>
                <p>These services have their own privacy policies, which we encourage you to review.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children&apos;s Privacy</h2>
                <p className="mb-4">
                  iOS 26 website is suitable for all ages. We take special care regarding children&apos;s privacy:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>We do not knowingly collect personal information from children under 13</li>
                  <li>No registration or personal details are required to use the website</li>
                  <li>The website contains only informational content about iOS 26</li>
                  <li>All external links lead to official Apple resources</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
                <p className="mb-4">You have full control over your data:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Access:</strong> Request information about data we may have</li>
                  <li><strong>Delete:</strong> Request deletion of any personal data</li>
                  <li><strong>Opt-out:</strong> Disable analytics through browser settings</li>
                  <li><strong>Contact:</strong> Reach out to us with any privacy concerns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
                <p className="mb-4">
                  We may update this privacy policy from time to time. When we do:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>We will post the updated policy on this page</li>
                  <li>We will update the &ldquo;Last updated&rdquo; date</li>
                  <li>Significant changes will be highlighted on our website</li>
                  <li>Continued use of the website constitutes acceptance of updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> hellokaius@gmail.com</p>
                  <p><strong>Website:</strong> ios26.xyz</p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Compliance</h2>
                <p className="mb-4">
                  This privacy policy is designed to comply with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>General Data Protection Regulation (GDPR)</li>
                  <li>California Consumer Privacy Act (CCPA)</li>
                  <li>Children&apos;s Online Privacy Protection Act (COPPA)</li>
                  <li>Other applicable privacy laws and regulations</li>
                </ul>
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
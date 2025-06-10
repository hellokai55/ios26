import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Slice Master',
  description: 'Learn how Slice Master protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection and usage practices.',
  keywords: 'privacy policy, data protection, user privacy, Slice Master privacy',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="text-gray-600 mb-8 text-center">
              <p>Last updated: January 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  At Slice Master, we are committed to protecting your privacy. We collect minimal information to provide you with the best gaming experience:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Game Progress Data:</strong> Your scores, level progress, and unlocked blades are stored locally in your browser</li>
                  <li><strong>Usage Analytics:</strong> We may collect anonymous usage statistics to improve our game</li>
                  <li><strong>Technical Information:</strong> Basic device and browser information for compatibility purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To provide and maintain the Slice Master gaming experience</li>
                  <li>To save your game progress and preferences</li>
                  <li>To improve our game features and user experience</li>
                  <li>To ensure technical functionality and compatibility</li>
                  <li>To provide customer support when needed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Storage and Security</h2>
                <p className="mb-4">
                  Your privacy and data security are our top priorities:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Local Storage:</strong> Game data is primarily stored locally on your device</li>
                  <li><strong>No Personal Information:</strong> We do not collect personal information like names, emails, or addresses</li>
                  <li><strong>Secure Transmission:</strong> All data transmission is encrypted using HTTPS</li>
                  <li><strong>No Third-Party Sharing:</strong> We do not sell or share your data with third parties</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Local Storage</h2>
                <p className="mb-4">
                  Slice Master uses browser storage technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Game Progress:</strong> Your scores and unlocked content are saved locally</li>
                  <li><strong>Preferences:</strong> Game settings and preferences are stored for convenience</li>
                  <li><strong>Analytics Cookies:</strong> Anonymous usage data to improve our service</li>
                  <li><strong>Control:</strong> You can clear this data anytime through your browser settings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
                <p className="mb-4">
                  Slice Master may integrate with third-party services:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Game Platform:</strong> The game is hosted on CrazyGames platform</li>
                  <li><strong>Analytics:</strong> We may use analytics services to understand usage patterns</li>
                  <li><strong>CDN Services:</strong> Content delivery networks for faster loading</li>
                </ul>
                <p>These services have their own privacy policies, which we encourage you to review.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h2>
                <p className="mb-4">
                  Slice Master is suitable for all ages. We take special care regarding children's privacy:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>We do not knowingly collect personal information from children under 13</li>
                  <li>No registration or personal details are required to play</li>
                  <li>Parents can clear game data anytime through browser settings</li>
                  <li>The game contains no inappropriate content or external links</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
                <p className="mb-4">You have full control over your data:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Access:</strong> View your stored game data anytime</li>
                  <li><strong>Delete:</strong> Clear all game data through browser settings</li>
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
                  <li>We will update the "Last updated" date</li>
                  <li>Significant changes will be highlighted on our website</li>
                  <li>Continued use of the game constitutes acceptance of updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> hellokaius@gmail.com</p>
                  <p><strong>Website:</strong> slice-master.cc</p>
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
                  <li>Children's Online Privacy Protection Act (COPPA)</li>
                  <li>Other applicable privacy laws and regulations</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/#play-game" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🔪 Back to Game
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 
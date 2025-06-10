import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Slice Master',
  description: 'Read the terms of service for Slice Master. Understand your rights and responsibilities when playing our knife throwing game.',
  keywords: 'terms of service, user agreement, game terms, Slice Master terms',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="text-gray-600 mb-8 text-center">
              <p>Last updated: January 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  Welcome to Slice Master! By accessing or using our website and game, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>
                <p className="mb-4">
                  These terms apply to all users, including visitors, players, and anyone who accesses or uses the Slice Master game and website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  Slice Master is a free-to-play online knife throwing game that provides:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Browser-based gaming experience</li>
                  <li>Multiple levels and challenges</li>
                  <li>Unlockable blades and weapons</li>
                  <li>Score tracking and progress saving</li>
                  <li>Game guides and tutorials</li>
                  <li>Community features and tips</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user of Slice Master, you agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Age Requirements:</strong> Be at least 13 years old, or have parental consent</li>
                  <li><strong>Lawful Use:</strong> Use the service only for lawful purposes</li>
                  <li><strong>Respectful Behavior:</strong> Maintain respectful conduct in any community interactions</li>
                  <li><strong>No Cheating:</strong> Not attempt to hack, exploit, or cheat in the game</li>
                  <li><strong>Accurate Information:</strong> Provide accurate information when contacting us</li>
                  <li><strong>Device Security:</strong> Keep your device and browser secure</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Activities</h2>
                <p className="mb-4">You may not:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Reverse engineer, decompile, or disassemble the game</li>
                  <li>Use automated scripts, bots, or cheating software</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Distribute malware or harmful code through our platform</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass or abuse other users or our staff</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                <p className="mb-4">
                  Slice Master and all related content are protected by intellectual property laws:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Game Content:</strong> All game assets, code, and design are our property</li>
                  <li><strong>Trademarks:</strong> "Slice Master" and related marks are our trademarks</li>
                  <li><strong>User Content:</strong> You retain rights to content you create, but grant us license to use it</li>
                  <li><strong>Third-Party Content:</strong> Some content may be licensed from third parties</li>
                  <li><strong>Fair Use:</strong> Limited use for personal, non-commercial purposes is permitted</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Game Rules and Fair Play</h2>
                <p className="mb-4">
                  To ensure a fair and enjoyable experience for all players:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>No Cheating:</strong> Use of cheats, hacks, or exploits is prohibited</li>
                  <li><strong>Fair Competition:</strong> Compete honestly and respect other players</li>
                  <li><strong>Bug Reporting:</strong> Report bugs instead of exploiting them</li>
                  <li><strong>Account Integrity:</strong> Maintain the security of your game progress</li>
                  <li><strong>Appropriate Content:</strong> Keep all interactions family-friendly</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data</h2>
                <p className="mb-4">
                  Your privacy is important to us. Please review our Privacy Policy for details on:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>What data we collect and how we use it</li>
                  <li>How we protect your information</li>
                  <li>Your rights regarding your data</li>
                  <li>Cookie usage and local storage</li>
                </ul>
                <p>
                  <a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">
                    Read our full Privacy Policy →
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Availability</h2>
                <p className="mb-4">
                  We strive to provide reliable service, but please understand:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Uptime:</strong> We aim for high availability but cannot guarantee 100% uptime</li>
                  <li><strong>Maintenance:</strong> Scheduled maintenance may temporarily interrupt service</li>
                  <li><strong>Updates:</strong> We may update the game to improve features and fix bugs</li>
                  <li><strong>Compatibility:</strong> Service depends on browser and device compatibility</li>
                  <li><strong>Internet Connection:</strong> A stable internet connection is required</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
                <p className="mb-4">
                  Slice Master is provided "as is" without warranties:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>No Warranties:</strong> We make no warranties about the service's reliability or suitability</li>
                  <li><strong>Use at Your Own Risk:</strong> You use the service at your own risk</li>
                  <li><strong>No Liability:</strong> We are not liable for any damages arising from use of our service</li>
                  <li><strong>Third-Party Content:</strong> We are not responsible for third-party content or services</li>
                  <li><strong>Data Loss:</strong> We are not liable for loss of game progress or data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                <p className="mb-4">
                  These terms remain in effect until terminated:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Your Right:</strong> You may stop using our service at any time</li>
                  <li><strong>Our Right:</strong> We may terminate access for violations of these terms</li>
                  <li><strong>Effect of Termination:</strong> Upon termination, your right to use the service ceases</li>
                  <li><strong>Data Retention:</strong> Some data may be retained as required by law</li>
                  <li><strong>Survival:</strong> Certain provisions survive termination</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="mb-4">
                  We may update these terms from time to time:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Updated terms will be posted on this page</li>
                  <li>The "Last updated" date will be revised</li>
                  <li>Significant changes will be highlighted</li>
                  <li>Continued use constitutes acceptance of new terms</li>
                  <li>You should review terms periodically</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="mb-4">
                  If you have questions about these terms or need support:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> hellokaius@gmail.com</p>
                  <p><strong>Website:</strong> slice-master.cc</p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                  <p><strong>Support Hours:</strong> Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
                <p className="mb-4">
                  These terms are governed by applicable laws and regulations. Any disputes will be resolved through appropriate legal channels in accordance with local jurisdiction requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
                <p className="mb-4">
                  If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. We will replace any invalid provisions with valid ones that achieve the same objective.
                </p>
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
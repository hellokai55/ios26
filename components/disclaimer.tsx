import { AlertTriangle } from "lucide-react"

export function Disclaimer() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
      <div className="flex items-start">
        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
        <div className="text-sm">
          <p className="font-medium text-yellow-800 mb-1">
            Important Disclaimer
          </p>
          <p className="text-yellow-700">
            This is an <strong>unofficial information website</strong> created by independent developers and is 
            <strong>not affiliated with Apple Inc.</strong> We provide information about iOS 26 for educational 
            and informational purposes. Apple, iOS, and iPhone are trademarks of Apple Inc.
          </p>
        </div>
      </div>
    </div>
  )
} 
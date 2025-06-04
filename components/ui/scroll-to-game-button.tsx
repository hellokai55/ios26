'use client'

import { Button } from '@/components/ui/button'

interface ScrollToGameButtonProps {
  children: React.ReactNode
  className?: string
}

export function ScrollToGameButton({ children, className }: ScrollToGameButtonProps) {
  const handleScrollToGame = () => {
    const gameIframe = document.querySelector('iframe')
    if (gameIframe) {
      gameIframe.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button 
      size="lg" 
      variant="secondary"
      className={className}
      onClick={handleScrollToGame}
    >
      {children}
    </Button>
  )
} 
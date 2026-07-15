import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigationItems } from '@/data/site'

interface HeaderProps {
  darkMode: boolean
  isScrolled: boolean
  onToggleDarkMode: () => void
  onNavigate: (target: string) => void
}

export function Header({ darkMode, isScrolled, onToggleDarkMode, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (target: string) => {
    onNavigate(target)
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <button
          type="button"
          className="brand-button"
          onClick={() => handleNavigate('home')}
          aria-label="Ir para o início"
        >
          <span className="brand-mark" aria-hidden="true">
            &lt;
          </span>
          Anderson Reis
          <span className="brand-mark" aria-hidden="true">
            /&gt;
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <button key={item.target} type="button" onClick={() => handleNavigate(item.target)} className="nav-link">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
            className="rounded-full"
            aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" className="mobile-menu md:hidden" aria-label="Navegação mobile">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigationItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavigate(item.target)}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-index">{item.index}</span>
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

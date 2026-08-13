import type { Theme } from '../types/content'

type ThemeSwitcherProps = {
  theme: Theme
  onChange: (theme: Theme) => void
}

const nextTheme: Record<Theme, { value: Theme; label: string; icon: string }> = {
  dark: { value: 'light', label: 'Light', icon: '☀' },
  light: { value: 'retro', label: 'Retro', icon: '▣' },
  retro: { value: 'dark', label: 'Dark', icon: '☾' },
}

export function ThemeSwitcher({ theme, onChange }: ThemeSwitcherProps) {
  const next = nextTheme[theme]

  return (
    <button
      className="theme-switcher"
      type="button"
      onClick={() => onChange(next.value)}
      aria-label={`${next.label}-Theme aktivieren`}
      title={`${next.label}-Theme aktivieren`}
    >
      <span aria-hidden="true">{next.icon}</span>
      <span className="theme-switcher__label">{next.label}</span>
    </button>
  )
}

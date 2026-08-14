import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

type TerminalLine = {
  command: string
  output: string
  status?: boolean
}

const typingSpeed = 48
const outputDelay = 260
const nextLineDelay = 380

export function TerminalSequence() {
  const { language } = useLanguage()
  const terminalLines: TerminalLine[] = useMemo(() => language === 'de' ? [
    { command: 'whoami', output: 'Michael Sibozo' },
    { command: 'focus --current', output: 'Linux · Frontend · Backend' },
    { command: 'status', output: 'Bereit für den Berufseinstieg', status: true },
  ] : [
    { command: 'whoami', output: 'Michael Sibozo' },
    { command: 'focus --current', output: 'Linux · Frontend · Backend' },
    { command: 'status', output: 'Ready to start my career', status: true },
  ], [language])
  const [lineIndex, setLineIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [visibleOutputs, setVisibleOutputs] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    if (lineIndex >= terminalLines.length) return
    const currentCommand = terminalLines[lineIndex].command

    if (characterIndex < currentCommand.length) {
      const timer = window.setTimeout(
        () => setCharacterIndex((current) => current + 1),
        typingSpeed,
      )
      return () => window.clearTimeout(timer)
    }

    if (visibleOutputs <= lineIndex) {
      const timer = window.setTimeout(
        () => setVisibleOutputs((current) => current + 1),
        outputDelay,
      )
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => {
      setLineIndex((current) => current + 1)
      setCharacterIndex(0)
    }, nextLineDelay)
    return () => window.clearTimeout(timer)
  }, [characterIndex, lineIndex, reduceMotion, terminalLines, visibleOutputs])

  return (
    <div className="terminal__sequence" aria-label={language === 'de' ? 'Michael Sibozo, Fokus: Linux, Frontend und Backend. Bereit für den Berufseinstieg.' : 'Michael Sibozo, focused on Linux, frontend and backend. Ready to start my career.'}>
      {terminalLines.map((line, index) => {
        const isActive = index === lineIndex && !reduceMotion
        const isVisible = index < lineIndex || isActive || reduceMotion
        const command = index < lineIndex || reduceMotion
          ? line.command
          : line.command.slice(0, characterIndex)

        return (
          <div className={`terminal__group${isVisible ? ' is-visible' : ''}`} key={line.command} aria-hidden="true">
            <p>
              <span>$</span> {command}
              {isActive && <span className="terminal__cursor" />}
            </p>
            <p
              className={`terminal__output${line.status ? ' terminal__status' : ''}${visibleOutputs > index || reduceMotion ? ' is-visible' : ''}`}
            >
              {line.output}
            </p>
          </div>
        )
      })}
      <p
        className={`terminal__prompt${lineIndex >= terminalLines.length || reduceMotion ? ' is-visible' : ''}`}
        aria-hidden="true"
      >
        <span>$</span> <span className="terminal__cursor" />
      </p>
    </div>
  )
}

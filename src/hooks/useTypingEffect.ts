import { useState, useEffect, useCallback } from 'react'

interface UseTypingEffectOptions {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1800,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (isWaiting) return

    if (!isDeleting) {
      setDisplayText(currentWord.slice(0, displayText.length + 1))

      if (displayText.length + 1 === currentWord.length) {
        setIsWaiting(true)
        setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      setDisplayText(currentWord.slice(0, displayText.length - 1))

      if (displayText.length - 1 === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [displayText, isDeleting, isWaiting, wordIndex, words, pauseDuration])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, deletingSpeed, typingSpeed])

  return { displayText, isDeleting }
}

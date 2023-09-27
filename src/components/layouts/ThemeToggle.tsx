// Components
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
// Hooks
import { useTheme } from 'next-themes'

export function ThemeToggle () {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      isIconOnly
      variant='light'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.Sun
        className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        aria-hidden='true'
      />
      <Icons.MoonStar
        className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

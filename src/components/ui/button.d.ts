import type { ButtonHTMLAttributes, JSX } from 'react'

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

export declare function Button(props: ButtonProps): JSX.Element
export declare function buttonVariants(options?: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}): string

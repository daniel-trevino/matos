import React from 'react'
import cn from 'classnames'

export type ButtonProps = {
  disabled?: boolean
  block?: boolean
  onClick?: () => void
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  block,
  loading,
  children,
}) => (
  <button
    type="button"
    className={cn(
      'flex justify-center items-center py-3 px-8 text-base font-medium text-fontColor-primary bg-secondary rounded-md border border-transparent md:py-4 md:px-10 md:text-lg',
      {
        'w-full': block,
        'opacity-50 cursor-not-allowed': disabled,
        'cursor-wait': loading,
      }
    )}
    disabled={disabled || loading}
    onClick={onClick}
  >
    {children}
  </button>
)

import React from 'react'
import cn from 'classnames'

export type ButtonProps = {
  disabled?: boolean
  onClick?: () => void
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ disabled = false, onClick, loading, children }) => (
  <button
    type="button"
    className={cn(
      'flex justify-center items-center hover:opacity-90 text-base font-medium text-fontColor-primary bg-secondary w-60 h-60 rounded-full md:text-lg',
      {
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

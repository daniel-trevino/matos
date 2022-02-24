export type MatosLogoProps = {
  width?: number
  height?: number
  color?: string
  className?: string
}

export const MatosLogo: React.FC<MatosLogoProps> = ({
  className,
  width = 882,
  height = 284,
  color = '#FFFFFF',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 882 284"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 77.2226C15 4.3432 122.003 2.68685 122.003 77.2226"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path d="M15 77.0916L15.0037 280.682" stroke={color} strokeWidth="29.9398" />
    <path
      d="M122.002 77.2857C122.002 4.32313 229.005 2.6649 229.005 77.2857"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M292.839 77.3488C292.838 4.30303 399.498 2.64291 399.498 77.3488"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M399.498 146.967C399.498 119.736 375.658 97.6609 346.249 97.6609C316.84 97.6609 293 119.736 293 146.967"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M867 211.857C867 282.652 768 283.838 760.452 219.781"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M759.997 71.2465C759.997 0.341232 859.458 -6.31239 866.305 67.2545"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M759.997 71.2466C759.997 116.876 867 159.437 867 213.619"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M448.021 71.246C448.021 -1.88051 555.024 -3.54247 555.024 71.246"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path d="M501.458 15.5012L501.459 280.682" stroke={color} strokeWidth="29.9398" />
    <path d="M293 77.0916L293.004 280.682" stroke={color} strokeWidth="29.9398" />
    <path d="M399.518 77.0916L399.522 280.682" stroke={color} strokeWidth="29.9398" />
    <path d="M228.855 77.0916L228.859 280.682" stroke={color} strokeWidth="29.9398" />
    <path
      d="M600.488 71.2467C600.488 -1.87978 707.491 -3.54174 707.491 71.2467"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path
      d="M600.488 213.62C600.488 285.585 707.491 287.221 707.491 213.62"
      stroke={color}
      strokeWidth="29.9398"
    />
    <path d="M600.488 71.2468L600.488 213.619" stroke={color} strokeWidth="29.9398" />
    <path d="M707.49 71.2468L707.49 213.62" stroke={color} strokeWidth="29.9398" />
    <path d="M121.928 77.0916L121.931 280.682" stroke={color} strokeWidth="29.9398" />
  </svg>
)

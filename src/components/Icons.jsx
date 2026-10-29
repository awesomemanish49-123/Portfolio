/** Small icon set — inline SVG so there is no icon-font dependency. */

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const ArrowRight = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
  </svg>
)

export const ArrowUpRight = ({ size = 18 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
  </svg>
)

export const ArrowLeft = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
  </svg>
)

export const ArrowDownRight = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M4.5 4.5 11.5 11.5M11.5 5.5v6h-6" />
  </svg>
)

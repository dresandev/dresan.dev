import { SVGProps } from "react"

export const ColombiaFlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill="#b92932" d="M1 24a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4v-3H1v3Z" />
    <path fill="#0f2c83" d="M1 15h30v7H1z" />
    <path fill="#f8d047" d="M27 4H5a4 4 0 0 0-4 4v8h30V8a4 4 0 0 0-4-4Z" />
    <path
      d="M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z"
      opacity={0.15}
    />
    <path
      fill="#fff"
      d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z"
      opacity={0.2}
    />
  </svg>
)

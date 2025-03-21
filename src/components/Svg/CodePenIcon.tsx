import { SVGProps } from "react"

export const CodePenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="m12 2 10 6.5v7L12 22 2 15.5v-7zm0 20v-6.5" />
      <path d="m22 8.5-10 7-10-7" />
      <path d="m2 15.5 10-7 10 7M12 2v6.5" />
    </g>
  </svg>
)

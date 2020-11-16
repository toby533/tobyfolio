import * as React from "react"

function SvgLogo(props) {
  return (
    <div className="logo-container">
      <svg
      width={45}
      height={54}
      viewBox="0 0 45 54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"T"}</title>
      <path
        d="M29.201 54V10.539H45L34.708 0H19v43.368L29.201 54zM16 10V0H0l10.483 10H16z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
    </div>
  )
}

export default SvgLogo
import * as React from "react"

function Dot(props) {
  return (
    <div className="dot">
        <svg width={20} height={20} viewBox="0 0 20 20" {...props}>
        <title>{"Shape"}</title>
        <g fill="none" fillRule="evenodd">
            <path d="M-55-3425h1744V809H-55z" />
            <path d="M-13-3425h1480V806H-13z" />
            <path
            d="M10 .1L.1 10l9.9 9.9 9.9-9.9L10 .1zm0 16.971L2.929 10 10 2.929 17.071 10 10 17.071z"
            fill="#000"
            fillRule="nonzero"
            />
        </g>
        </svg>
    </div>
  )
}

export default Dot
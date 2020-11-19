import * as React from "react"

function MailIcon(props) {
  return (
      
    <div className="mail-btn">
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:thibault.drevon@gmail.com`}
        >
        <svg
        width={31}
        height={32}
        viewBox="0 0 31 32"
        xmlns="http://www.w3.org/2000/svg"
        >
            <title>{"Mail icon"}</title>
            <g fill="none" fillRule="evenodd">
                <path d="M-1638-73H106v4234h-1744z" />
                <g >
                <path d="M12.823 1.433L1.567 13.123l16.48 16.081 11.324-11.901z" />
                <path d="M12.823 1.433L15.5 15.319l13.87 1.984" />
                <path strokeWidth={0.5} d="M1.567 13.122h5.156M18.048 29.204v-5" />
                <path strokeWidth={0.8} d="M12.094 30h11.774" />
                </g>
            </g>
        </svg>
        </a>
    </div>
  )
}

export default MailIcon
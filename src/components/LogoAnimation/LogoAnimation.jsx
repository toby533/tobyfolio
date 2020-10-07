import React from 'react';

function SvgComponent(props) {
  return (
    <section className="AnimationContainer">
        <div className="ShapeContainer">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 167 200"
        >
            <g transform="translate(879.782 401)">
                <g id="shapeLogo1" transform="translate(-796.282 -295.815)">
                <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="#FFF"
                    strokeWidth="6"
                    d="M55.638968 159.271507L82.076409 166 108.361032 159.271507 109.302388 59.677585 162 46.856748 162 11 82.076409 28.127072 2 11 2 46.856748 55.638968 59.677585z"
                    transform="translate(-82 -88.5)"
                ></path>
                </g>
                <g id="shapeLogo2"transform="translate(-796.282 -287.315)">
                <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="#FFF"
                    strokeWidth="6"
                    d="M82.5 28L82.5 166"
                    transform="translate(-82.5 -97)"
                ></path>
                </g>
                <g id="shapeLogo3" transform="translate(-796.282 -379.692)">
                <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="#FFF"
                    strokeWidth="6"
                    d="M0.564541 10.149934L36.146915 0 81.73631 10 135.768186 0 164 10.093624"
                    transform="translate(-82.282 -5.075)"
                ></path>
                </g>
            </g>
        </svg>
        </div>
        <div className="lines">
            <div className="line"></div>
        </div>
        <p className="text-scroll">Scroll</p>
    </section>
  );
}

export default SvgComponent;

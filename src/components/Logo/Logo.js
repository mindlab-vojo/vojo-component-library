import React from 'react'
import PropTypes from 'prop-types'

function Logo ({ height, width }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 618 96"
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>logo-vojo</title>
      <g 
        stroke="none" 
        strokeWidth="1" 
        fill="none" 
        fillRule="evenodd">
        <g>
          <path d="M601.267148,96 C605.982247,96 609.949831,94.3888756 613.169898,91.1666267 C616.389966,87.9443778 618,83.9165668 618,79.0831935 C618,74.1347399 616.389966,70.1356989 613.169898,67.0860705 C609.949831,64.0364421 605.982247,62.5116279 601.267148,62.5116279 C596.552049,62.5116279 592.584465,64.0364421 589.364398,67.0860705 C586.14433,70.1356989 584.534296,74.1347399 584.534296,79.0831935 C584.534296,83.9165668 586.14433,87.9443778 589.364398,91.1666267 C592.584465,94.3888756 596.552049,96 601.267148,96 Z" id="Ponto" fill="#FF909E"></path>
          <path d="M209.811372,-5.62749847e-13 C219.49429,-5.62749847e-13 228.200033,2.07734807 235.928601,6.2320442 C243.657169,10.3867403 249.742306,16.1104972 254.184012,23.4033149 C258.625718,30.6961326 260.84657,38.8950276 260.84657,48 C260.84657,57.1049724 258.625718,65.3038674 254.184012,72.5966851 C249.742306,79.8895028 243.657169,85.6132597 235.928601,89.7679558 C228.200033,93.9226519 219.49429,96 209.811372,96 C200.128453,96 191.400502,93.9226519 183.627517,89.7679558 C175.854532,85.6132597 169.769395,79.8895028 165.372106,72.5966851 C160.974818,65.3038674 158.776173,57.1049724 158.776173,48 C158.776173,38.8950276 160.974818,30.6961326 165.372106,23.4033149 C169.769395,16.1104972 175.854532,10.3867403 183.627517,6.2320442 C191.400502,2.07734807 200.128453,-5.62749847e-13 209.811372,-5.62749847e-13 Z M493.340253,-5.62749847e-13 C503.023171,-5.62749847e-13 511.728914,2.07734807 519.457482,6.2320442 C527.18605,10.3867403 533.271187,16.1104972 537.712893,23.4033149 C542.154598,30.6961326 544.375451,38.8950276 544.375451,48 C544.375451,57.1049724 542.154598,65.3038674 537.712893,72.5966851 C533.271187,79.8895028 527.18605,85.6132597 519.457482,89.7679558 C511.728914,93.9226519 503.023171,96 493.340253,96 C483.657334,96 474.929383,93.9226519 467.156398,89.7679558 C459.383413,85.6132597 453.298276,79.8895028 448.900987,72.5966851 C444.503698,65.3038674 442.305054,57.1049724 442.305054,48 C442.305054,38.8950276 444.503698,30.6961326 448.900987,23.4033149 C453.298276,16.1104972 459.383413,10.3867403 467.156398,6.2320442 C474.929383,2.07734807 483.657334,-5.62749847e-13 493.340253,-5.62749847e-13 Z M23.3494372,-2.78532752e-13 L51.769038,64.5378151 L80.5889148,-2.78532752e-13 L102.070397,-2.78532752e-13 L61.6425143,90.3529412 L40.2944574,90.3529412 L-1.3580889e-13,-2.78532752e-13 L23.3494372,-2.78532752e-13 Z M379.9287,-2.78532752e-13 L379.9287,57.61269 L379.925848,58.216184 C379.825073,68.8283219 377.053741,76.81222 371.611853,82.1678784 C366.067288,87.6245869 357.923709,90.3529412 347.181115,90.3529412 C341.030113,90.3529412 335.377256,89.2319894 330.222543,86.9900859 C325.067831,84.7481824 320.844432,81.5545274 317.552347,77.409121 L317.552347,77.409121 L329.247913,63.7038995 L329.551113,64.098659 C334.416174,70.3496962 339.946306,73.4752148 346.141509,73.4752148 C354.718257,73.4752148 359.006632,68.5684071 359.006632,58.7547918 L359.006632,58.7547918 L359.006632,16.4970258 L327.03875,16.4970258 L327.03875,-2.78532752e-13 L379.9287,-2.78532752e-13 Z M209.811372,18.2983425 C204.303657,18.2983425 199.328946,19.558011 194.887241,22.0773481 C190.445535,24.5966851 186.958796,28.1104972 184.427024,32.6187845 C181.895251,37.1270718 180.629365,42.2541436 180.629365,48 C180.629365,53.7458564 181.895251,58.8729282 184.427024,63.3812155 C186.958796,67.8895028 190.445535,71.4033149 194.887241,73.9226519 C199.328946,76.441989 204.303657,77.7016575 209.811372,77.7016575 C215.319087,77.7016575 220.293797,76.441989 224.735503,73.9226519 C229.177209,71.4033149 232.663948,67.8895028 235.19572,63.3812155 C237.727492,58.8729282 238.993378,53.7458564 238.993378,48 C238.993378,42.2541436 237.727492,37.1270718 235.19572,32.6187845 C232.663948,28.1104972 229.177209,24.5966851 224.735503,22.0773481 C220.293797,19.558011 215.319087,18.2983425 209.811372,18.2983425 Z M493.340253,18.2983425 C487.832538,18.2983425 482.857827,19.558011 478.416122,22.0773481 C473.974416,24.5966851 470.487677,28.1104972 467.955905,32.6187845 C465.424132,37.1270718 464.158246,42.2541436 464.158246,48 C464.158246,53.7458564 465.424132,58.8729282 467.955905,63.3812155 C470.487677,67.8895028 473.974416,71.4033149 478.416122,73.9226519 C482.857827,76.441989 487.832538,77.7016575 493.340253,77.7016575 C498.847968,77.7016575 503.822678,76.441989 508.264384,73.9226519 C512.70609,71.4033149 516.192829,67.8895028 518.724601,63.3812155 C521.256373,58.8729282 522.522259,53.7458564 522.522259,48 C522.522259,42.2541436 521.256373,37.1270718 518.724601,32.6187845 C516.192829,28.1104972 512.70609,24.5966851 508.264384,22.0773481 C503.822678,19.558011 498.847968,18.2983425 493.340253,18.2983425 Z" id="VOJO" fill="#1600AF"></path>
        </g>
      </g>
    </svg>
  )
}

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
}

Logo.defaultProps = {
  height: "96px",
  width: "618px",
}

export default Logo




export default (color="black")=>`data:image/svg+xml;base64,${btoa(`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_59_3678)">
    <path d="M5 12L10 17L20 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_59_3678">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
</svg>
`)}`

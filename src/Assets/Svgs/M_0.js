

export default (color="black")=>`data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-m" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="${color}" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 20v-16l6 14l6 -14v16"></path>
</svg>
`)}`;

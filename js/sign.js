let navbarBrand=document.querySelector(".navbar-brand"),paths=(navbarBrand.innerHTML=`
<svg class="svg" width="516.211" height="104.591" viewBox="0 0 516.211 104.591" xmlns="http://www.w3.org/2000/svg">
<g class="g" id="svgGroup" stroke-linecap="round"     
fill-rule="evenodd" font-size="9pt" stroke="#000"     
stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none">
<path d="省略的内容" vector-effect="non-scaling-stroke"/>
</g>
</svg>
`,document.querySelector(".navbar-brand .svg .g path")),len=paths.getTotalLength();paths.style.setProperty("--l",len),paths.addEventListener("animationend",function(){setTimeout(function(){navbarBrand.classList.add("neon-effect")},100)});
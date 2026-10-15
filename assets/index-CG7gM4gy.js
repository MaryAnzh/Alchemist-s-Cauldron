(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{node;constructor({parentNode:e,tagName:t=`div`,className:n,content:r,attrs:i}){if(this.node=document.createElement(t),Array.isArray(n)){let e=n.filter(Boolean);e.length&&this.node.classList.add(...e)}else typeof n==`string`&&n.trim()!==``&&(this.node.className=n);this.setContent(r),i&&this.setAttributes(i),e&&e.append(this.node)}setAttributes(e){Object.entries(e).forEach(([e,t])=>{t===null?this.node.removeAttribute(e):this.node.setAttribute(e,String(t))})}setContent(e){this.node.innerHTML=``,e&&(typeof e==`string`?this.node.textContent=e:e instanceof HTMLElement?this.node.append(e):e.forEach(e=>{typeof e==`string`?this.node.append(document.createTextNode(e)):this.node.append(e)}))}append(e){this.node.append(e)}destroy(){this.node.remove()}},t=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 43.5 102.6" enable-background="new 0 0 43.5 102.6" xml:space="preserve">\r
<linearGradient id="arrowGradient" gradientUnits="userSpaceOnUse" x1="6.908" y1="51.2802" x2="37.1549" y2="51.2802">\r
	<stop  offset="0" style="stop-color:#495332"/>\r
	<stop  offset="0.3465" style="stop-color:#626A4A"/>\r
	<stop  offset="0.5065" style="stop-color:#D0CCB0"/>\r
	<stop  offset="0.6256" style="stop-color:#7F7753"/>\r
	<stop  offset="1" style="stop-color:#A49E7E"/>\r
</linearGradient>\r
<polygon fill="url(#arrowGradient)" stroke="#FFFFFF" stroke-miterlimit="10" points="43,51.3 21.8,101.3 0.5,51.3 21.8,1.3 "/>\r
<path opacity="0.5" fill="#343D20" d="M1.3,51.8c1.4,1.4,8.8,8.5,20.5,8.5s19.1-7.1,20.5-8.5c-7.3,16.7-14.7,33.3-22,50\r
	C13.9,85.1,7.6,68.4,1.3,51.8z"/>\r
</svg>\r
`,n=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="Ñëîé_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 449 330.7" enable-background="new 0 0 449 330.7" xml:space="preserve">\r
<g>\r
	<path fill="#825333" d="M411.1,162.3c-0.3-6.4-0.8-10.6-1.4-15c-0.2-1.4-0.9-6.7-2.5-14.1c-1.3-5.9-2.6-10.4-3.4-13.1\r
		c-3.9-13.5-9.1-24.4-10.8-28c-2.8-5.9-5.9-11.2-7.2-13.5c-0.7-1.3-1.5-2.5-2.2-3.7c3.4-7.2,6.7-14.3,10.1-21.5\r
		c0,0.1-0.1,0.1-0.1,0.2c4.3-8.9-0.5-18.3-15.9-27c-41.3-23.4-142.9-33.3-227-22c-67,9-102.7,28.7-93.6,48.2c0,0,0,0,0,0\r
		c3.3,7.2,6.7,14.4,10,21.5c-11.6,18.7-17.7,36-20.4,45.3c-0.8,2.7-2.1,7.1-3.4,13.1c-1.6,7.4-2.3,12.6-2.5,14.1\r
		c-0.6,4.4-1.1,8.6-1.4,15c-0.3,5.8-0.3,6.8-0.1,15.9c0,0.1,0.1,5.6,1.1,14.4c0.3,2.3,1,7.6,1.8,12c1.9,9.8,4.1,18,7.4,27.2\r
		c1.4,3.9,3.2,8.3,3.8,9.8c1.5,3.4,3.8,8.6,6.3,13.3c1.5,2.8,4,7.5,6.7,11.7c2.8,4.4,4.2,6.6,8.1,12c3.6,6.4,7.2,12.8,10.8,19.1\r
		c2.1,3.8,6.4,7.6,12.8,11.2c34.4,19.5,119.2,27.7,189.3,18.3c43-5.8,70.5-16.9,77.5-29.1l10.9-19.1c13.3-18,21-35.3,25.1-46.8\r
		c3.3-9.3,5.6-17.4,7.5-27.2c0.9-4.5,1.6-9.7,1.9-12c1-9.1,1.2-14.5,1.2-14.5C411.4,168.3,411.4,168.3,411.1,162.3z"/>\r
	<path fill="#774E32" d="M85.2,297.2c-3.8-6.7-7.5-13.4-11.3-20c2.3,4.1,6.9,8.2,13.8,12.2c37.2,21.1,128.8,30,204.7,19.8\r
		c46.5-6.3,76.3-18.2,83.8-31.4l-11.4,20c-6.9,12.2-34.5,23.3-77.5,29.1c-70.2,9.4-154.9,1.2-189.3-18.3\r
		C91.5,304.8,87.3,301,85.2,297.2z"/>\r
	<path fill="#603913" d="M370.4,98.4c3.6-2.1,7.3-4.4,11-6.9c-1.4-4-2.9-7.7-4.4-11.2c0,0,0,0,0,0c2-1.2,4.2-2.1,6.3-2.8\r
		c0.1,0-3.9-6.7-5.5-9.1c-2.5-3.7-6.9-7.4-13.1-10.9C326.9,36,234,27.1,157.1,37.4c-45.5,6.1-75.2,17.6-84,30.4\r
		c-2.4,3.5-4.7,7-6.7,10.4C110.9,100.3,256.7,164.6,370.4,98.4z"/>\r
	<path fill="#8B5E3C" d="M75.2,279.2c-4.5-6.2-5.9-8.4-8.9-13.1c-2.7-4.3-5.2-9-6.7-11.7c-2.5-4.7-4.8-9.9-6.3-13.3\r
		c-0.6-1.5-2.4-5.9-3.8-9.8c-3.3-9.2-5.5-17.4-7.4-27.2c-0.9-4.4-1.6-9.7-1.8-12c-1-8.8-1.1-14.3-1.1-14.4c-0.1-9.1-0.2-10,0.1-15.9\r
		c0.3-6.4,0.9-10.6,1.4-15c0.2-1.4,0.9-6.7,2.5-14.1c1.3-6,2.6-10.4,3.4-13.1c3.1-10.4,10.4-31.1,25-52.3\r
		c-6.1,8.9-2.3,18.5,13.2,27.3c38,21.6,131.8,30.7,209.3,20.2c64.7-8.7,97.7-28.2,84.9-47c1.9,2.8,4.4,6.6,6.8,10.7\r
		c1.3,2.3,4.4,7.6,7.2,13.5c1.7,3.6,6.9,14.6,10.8,28c0.8,2.7,2.1,7.1,3.4,13.1c1.6,7.4,2.3,12.6,2.5,14.1c0.6,4.4,1.1,8.6,1.4,15\r
		c0.3,6,0.3,6,0.1,15.8c0,0.1-0.1,5.4-1.2,14.5c-0.3,2.3-1,7.6-1.9,12c-1.9,9.8-4.2,18-7.5,27.2c-4.2,11.7-12.1,29.5-25.9,47.9\r
		c-9.3,12.4-38.3,23.4-82.4,29.4c-75.9,10.2-167.5,1.3-204.7-19.8C81.9,286,77.8,282.6,75.2,279.2z"/>\r
	<path fill="#754C29" d="M375.9,28.2C335.1,5.1,234.8-4.6,151.7,6.6C85.7,15.4,50.5,34.8,59.1,54c4.1,9.1,8.2,18.2,12.3,27.3\r
		c-8-17.8,24.6-35.7,85.6-43.9C234,27.1,326.9,36,364.6,57.5c13.8,7.9,18.3,16.3,14.6,24.4l12.4-27.3\r
		C395.7,45.9,390.8,36.7,375.9,28.2z"/>\r
	<path opacity="0.56" fill="#936441" d="M376.5,40.2c1.6-3.5,2.4-6.9,2.7-10c-1.1-0.7-2.2-1.3-3.3-2c-10.5-6-25-11.1-42.2-15.1\r
		c-4.7,4.9-7.7,11.2-8.1,17.8c-0.3,5.2,1,9.8,2.7,13.2c13.1,3.2,24.4,7.2,33.2,11.7C366.1,53.4,372.7,48.7,376.5,40.2z"/>\r
	<path fill="#A97C50" d="M377.8,26.7c41.3,23.4,6.5,51.6-77.6,62.9c-84.1,11.3-185.8,1.5-227-22C31.8,44.2,66.6,16,150.7,4.7\r
		C234.9-6.6,336.5,3.2,377.8,26.7z M365.2,28.3C327.4,6.8,234.1-2.2,156.9,8.2S47.8,44.4,85.7,65.9C123.5,87.4,216.8,96.5,294,86.1\r
		S403.1,49.8,365.2,28.3"/>\r
	<path fill="#724D35" d="M70.2,81.1c-4.4-9.4-8.7-18.8-13.1-28.2c2.3,5,7.6,10,16,14.7c41.3,23.4,142.9,33.3,227,22\r
		c53.1-7.1,86.5-21,93.6-36.1c-4.4,9.4-8.8,18.8-13.2,28.1c-6.5,14-37.4,26.7-86.3,33.3c-77.6,10.4-171.3,1.4-209.3-20.2\r
		C77.2,90.2,72.3,85.7,70.2,81.1z"/>\r
	<path fill="#754C29" d="M409.4,191c-4.1-1.5-7-5.3-7.4-9.6c-0.4-4.3,1.7-8.5,5.4-10.8c14-5.4,22.7-17.7,21.7-29.6\r
		c-0.9-10.5-9.1-17.9-10.4-19c-2.2-1.9-6-5.1-11.9-6c-3.3-0.5-6,0-7.8,0.4c-1.4-0.8-4.5-2.9-6.4-6.9c-2.9-6-0.9-11.7-0.5-12.8\r
		c4.1-0.8,11.9-1.8,21.1,0.6c2.2,0.6,10.1,3,18,9.4c10.1,8.3,16.3,19.7,17.5,32.3C451.1,163.3,433.8,186.1,409.4,191z"/>\r
	<path opacity="0.73" fill="#754C29" d="M407.5,170.6c-1.9,1.2-3.4,2.9-4.3,4.8c16.2,0.4,38.9-22.5,33.7-40.2\r
		c-3.9-13.2-22.6-21.5-37.9-18.9c0.1,0.1,0.2,0.1,0.3,0.2c1.8-0.4,4.5-0.8,7.8-0.4c5.9,0.8,9.7,4.1,11.9,6c1.2,1.1,9.5,8.4,10.4,19\r
		C430.1,152.8,421.5,165.2,407.5,170.6z"/>\r
	<path fill="#754C29" d="M39.5,191c4.1-1.5,7-5.3,7.4-9.6c0.4-4.3-1.7-8.5-5.4-10.8c-14-5.4-22.7-17.7-21.7-29.6\r
		c0.9-10.5,9.1-17.9,10.4-19c2.2-1.9,6-5.1,11.9-6c3.3-0.5,6,0,7.8,0.4c1.4-0.8,4.5-2.9,6.4-6.9c2.9-6,0.9-11.7,0.5-12.8\r
		c-4.1-0.8-11.9-1.8-21.1,0.6c-2.2,0.6-10.1,3-18,9.4C7.6,115,1.4,126.5,0.2,139.1C-2.1,163.3,15.2,186.1,39.5,191z"/>\r
	<path opacity="0.73" fill="#754C29" d="M44.3,173c-0.8-0.9-1.7-1.7-2.8-2.4c-14-5.4-22.7-17.7-21.7-29.6c0.9-10.5,9.1-17.9,10.4-19\r
		c1.6-1.4,4.2-3.5,7.8-4.9c-14,3.3-24.1,14-25,24.3C11.7,154.4,24.6,170.6,44.3,173z"/>\r
	<path fill="#AD7753" d="M102.2,169.9L102.2,169.9c8.5,1.7,14.1,9.7,12.8,17.7c-1.2,7.5-8.1,12.9-14.8,12.8\r
		c-8.5-0.2-16.6-9.4-14.8-20.7"/>\r
	<path opacity="0.43" fill="#AD7753" d="M102.2,144.3c-16-0.8-34.6,23.2-31.5,46.3c2.1,15.9,14.4,29.7,31.5,35.4\r
		c3.2-1.5,21.5-10.2,26.6-29.5C134.8,173.3,118.9,145.1,102.2,144.3z"/>\r
	<path opacity="0.14" fill="#825333" d="M411.3,167.7c0-0.6-0.1-2.6-0.2-5.4c-0.4-7.7-1.2-13.7-1.4-15c-0.4-3-1.2-8-2.5-14.1\r
		c-1.3-5.9-2.6-10.4-3.4-13.1c-3.9-13.5-9.1-24.4-10.8-28c-2.8-5.9-5.9-11.2-7.2-13.5c-0.7-1.3-1.5-2.5-2.2-3.7\r
		c3.4-7.2,6.7-14.3,10.1-21.5c0,0.1-0.1,0.1-0.1,0.2c4.3-8.9-0.5-18.3-15.9-27c-9.6-5.5-22.5-10.2-37.7-14.1\r
		c20.6,8.1,30.9,19.2,35.7,25.5c4.2,5.5,5.3,9,4.9,12.3c-0.9,8.3-10.8,13.5-21.2,18.7c-6.9,3.5-17.6,7.9-32,10.3c-1,2-2,3.9-3,5.9\r
		c2.8,5.6,2.5,9.5,2,11.8c-2.6,11.3-19.9,19.8-43.3,18.7c8.6,3.3,43.4,17.6,59.1,54.1c20,46.8-3.4,101.6-39.4,125\r
		c-17.1,11.2-33.1,12.6-58.1,14.8c0,0-59.2,5.2-123.9-26.1c-1.6-0.8-3-1.5-3-1.5c-13.2-6.8-27.9-14.4-41.3-30.5\r
		C56.9,227.9,24,140.7,60.8,110.9c5.6-4.5,16.6-10.8,37.4-9.5c-2.9-2.3-6.7-6-10-11.3c-5.3-8.6-6.5-17-6.7-21.4\r
		C67.6,59,59.6,49.5,58.8,46.9c-0.7-2.5-1.1-4.8-1.2-7.1c-2.4,4.3-2.6,8.7-0.6,13.1c0,0,0,0,0,0c3.3,7.2,6.7,14.4,10,21.5\r
		c-11.6,18.7-17.7,36-20.4,45.3c-0.8,2.7-2.1,7.1-3.4,13.1c-1.6,7.4-2.3,12.6-2.5,14.1c-0.6,4.4-1.1,8.6-1.4,15\r
		c-0.3,5.8-0.3,6.8-0.1,15.9c0,0.1,0.1,5.6,1.1,14.4c0.3,2.3,1,7.6,1.8,12c1.9,9.8,4.1,18,7.4,27.2c1.4,3.9,3.2,8.3,3.8,9.8\r
		c1.5,3.4,3.8,8.6,6.3,13.3c1.5,2.8,4,7.5,6.7,11.7c2.8,4.4,4.2,6.6,8.1,12c3.6,6.4,7.2,12.8,10.8,19.1c2.1,3.8,6.4,7.6,12.8,11.2\r
		c34.4,19.5,119.2,27.7,189.3,18.3c43-5.8,70.5-16.9,77.5-29.1l10.9-19.1c13.3-18,21-35.3,25.1-46.8c0.3-0.9,0.6-1.7,0.9-2.6\r
		c2.8-8.2,4.8-15.7,6.6-24.6c0.9-4.5,1.6-9.7,1.9-12c1-9.1,1.2-14.5,1.2-14.5C411.3,172.3,411.4,169.9,411.3,167.7z"/>\r
	<path opacity="0.34" fill="#825333" d="M409.7,147.3c-0.4-3-1.2-8-2.5-14.1c-1.3-5.9-2.6-10.4-3.4-13.1c-3.9-13.5-9.1-24.4-10.8-28\r
		c-2.8-5.9-5.9-11.2-7.2-13.5c-0.7-1.3-1.5-2.5-2.2-3.7c3.4-7.2,6.7-14.3,10.1-21.5c0,0.1-0.1,0.1-0.1,0.2c4.3-8.9-0.5-18.3-15.9-27\r
		c-4.8-2.7-10.5-5.3-16.9-7.7c13.9,8.5,21.5,21.3,18.8,30.9c-1.9,6.8-8.9,11.8-12.3,14.3c-5.7,4.1-11.2,6-14.8,6.9\r
		c2.6,1.6,5.2,3.3,7.9,4.9c0.5,1.6,3.1,9.9-1.5,18.2c-4.1,7.5-12.5,12.1-21.7,11.8c7,1.1,16.8,3.7,25.6,10.8\r
		c22.8,18.3,21.5,52.3,20.7,72.8c-2,50.5-26.4,89.1-42.3,109.7c-0.4,1.9-1,3.9-2,5.9c-5.5,11.4-18,15-21.6,16\r
		c7.2-0.9,18.4-4.2,31.1-10.7c7.9-4,13.3-8.3,15.9-12.8l10.9-19.1c13.3-18,21-35.3,25.1-46.8c3.3-9.3,5.6-17.4,7.5-27.2\r
		c0.9-4.5,1.6-9.7,1.9-12c1-9.1,1.2-14.5,1.2-14.5c0.1-5.8,0.2-8.2,0.1-10.4c0-0.6-0.1-2.6-0.2-5.4\r
		C410.7,154.6,409.9,148.6,409.7,147.3z"/>\r
	<path opacity="0.27" fill="#FFFFFF" d="M78,64.9c0.6-0.9,9.1,3.4,10.1,3.9c0.9,0.4,10.3,5.3,9.8,6.4c-0.4,0.8-6.4-0.5-11.8-3.4\r
		C81.6,69.2,77.6,65.6,78,64.9z"/>\r
	<path opacity="0.2" fill="#D6B39A" d="M388.6,96.1c0,0,0.3,0.7,1,2.1c0.6,1.3,1.6,3.3,2.6,5.9c1.1,2.5,2.3,5.7,3.6,9.3\r
		c1.3,3.6,2.7,7.8,3.9,12.4c1.3,4.6,2.5,9.6,3.4,15c1,5.4,1.8,11.1,2.2,17c0.1,0.7,0.1,1.5,0.2,2.2c0,0.4,0.1,0.7,0.1,1.2l0,1.1\r
		c0,1.5,0.1,3,0.1,4.5c0.1,3,0.2,6.1,0,9.3c-0.1,1.6-0.1,3.2-0.2,4.7c-0.1,1.6-0.1,3.2-0.3,4.8c-0.3,3.2-0.7,6.3-1,9.5\r
		c-0.5,3.1-1.1,6.3-1.6,9.4c-0.2,1.6-0.7,3.1-1,4.6c-0.4,1.5-0.7,3.1-1.1,4.6c-0.2,0.8-0.3,1.5-0.5,2.3c-0.2,0.7-0.4,1.5-0.6,2.2\r
		c-0.4,1.5-0.9,3-1.3,4.4c-0.8,3-1.9,5.8-2.9,8.6c-0.9,2.8-2.1,5.5-3.2,8.2c-0.6,1.3-1,2.7-1.6,3.9c-0.6,1.3-1.2,2.5-1.7,3.8\r
		c-0.6,1.2-1.1,2.5-1.7,3.7c-0.6,1.2-1.2,2.3-1.8,3.5c-0.6,1.1-1.2,2.3-1.7,3.4c-0.6,1.1-1.2,2.1-1.8,3.2c-0.6,1-1.2,2-1.7,3\r
		c-0.6,1-1.2,1.9-1.7,2.8c-1.1,1.8-2.2,3.6-3.3,5.2c-2.1,3.2-4.1,6-5.7,8.2c-1.7,2.2-3,3.9-3.9,5.1c-0.9,1.2-1.4,1.8-1.4,1.8\r
		s0.4-0.7,1.3-1.9c0.9-1.2,2-3,3.6-5.3c1.5-2.3,3.3-5.1,5.2-8.5c1-1.6,2-3.4,3-5.3c0.5-0.9,1.1-1.9,1.6-2.9c0.5-1,1-2,1.6-3.1\r
		c0.5-1,1.1-2.1,1.7-3.2c0.5-1.1,1.1-2.2,1.6-3.4c0.5-1.1,1.1-2.3,1.7-3.5c0.6-1.2,1-2.4,1.6-3.7c0.5-1.2,1.1-2.5,1.6-3.8\r
		c0.6-1.3,1-2.6,1.5-3.9c1-2.7,2.1-5.3,3-8.1c1.9-5.6,3.6-11.4,5-17.4c0.3-1.5,0.7-3,1-4.5c0.3-1.5,0.7-3,1-4.6\r
		c0.5-3.1,1-6.2,1.5-9.3c0.3-3.1,0.7-6.2,1-9.3c0.2-1.6,0.2-3.1,0.3-4.6c0.1-1.5,0.2-3.1,0.2-4.6c0.2-3.1,0.1-6.2,0.1-9.2\r
		c0-1.5,0-3,0-4.5l0-1.1l-0.1-1.1c0-0.7-0.1-1.5-0.1-2.2c-0.4-5.9-1-11.5-1.8-16.9c-0.8-5.3-1.8-10.3-2.9-14.9\r
		c-1.1-4.6-2.2-8.8-3.3-12.4c-1.1-3.7-2.2-6.9-3.1-9.4c-0.9-2.6-1.7-4.6-2.2-6C388.9,96.8,388.6,96.1,388.6,96.1z"/>\r
	<path opacity="0.63" fill="#AD7753" d="M104.1,302.8c-0.6,2.9-0.8,5.7-0.8,8.5c14.3,6.7,34.8,11.9,58.4,15.2c1.2-1.9,2-3.9,2.4-5.9\r
		c0.7-3.3,0.3-7.1-1-10.9c-22.1-2.7-42-6.9-57.6-12.4C105,299,104.5,300.8,104.1,302.8z"/>\r
</g>\r
<path fill="#B78869" d="M376.6,37c-0.7-0.8-1.1-1.2-1.2-1.4c-0.8-0.9-2.9-2.8-6.2-4.9c-1-0.6-2.3-1.5-4-2.4c0,0,0,0,0,0v0\r
	C327.4,6.8,234.1-2.2,156.9,8.2c-55.1,7.4-87.1,22.7-87.2,38.7l0,1.3c0-16,32-31.3,87.2-38.7C234-0.8,327,8.1,365,29.6\r
	c0.1,0.1,0.2,0.1,0.2,0.2c1.7,1,3.1,1.8,4.1,2.5c2.8,1.7,3.9,2.4,4.7,3c0,0,0.1,0,0.1,0.1c0,0,0.2,0.1,0.4,0.3\r
	c0.4,0.3,2.8,2.6,2.9,2.5C377.5,38,377.1,37.6,376.6,37z"/>\r
<radialGradient id="SVGID_1_" cx="324.1131" cy="160.6843" r="27.7629" gradientTransform="matrix(0.9272 0 0 1.382 25.5775 -72.2764)" gradientUnits="userSpaceOnUse">\r
	<stop  offset="0" style="stop-color:#FFFFFF"/>\r
	<stop  offset="0.2535" style="stop-color:#FFFFFF"/>\r
	<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>\r
</radialGradient>\r
<ellipse fill="url(#SVGID_1_)" cx="326.1" cy="149.8" rx="25" ry="39.4"/>\r
<ellipse fill="#FFFFFF" cx="91.7" cy="244.6" rx="9.3" ry="8.9"/>\r
</svg>\r
`,r=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 277 425" enable-background="new 0 0 277 425" xml:space="preserve">\r
<linearGradient id="SVGParament" gradientUnits="userSpaceOnUse" x1="125.9572" y1="-17.756" x2="150.8461" y2="439.1329">\r
	<stop  offset="0" style="stop-color:#FFFFFF"/>\r
	<stop  offset="1" style="stop-color:#939393"/>\r
</linearGradient>\r
<path fill="url(#SVGParament)" stroke="#351E13" d="M277,117.5c-1.4-9.9-2.4-20.4-3-31.5c-1.4-26.2,0.2-49.8,3-70\r
	c0-1.2-0.1-2.8-0.6-4.5c-1-3.4-3.1-6.4-5.9-8.4c-4.6,2-9.4,3.6-14.2,5.2c-1.7,0.6-3.9,0.2-3.6-2c0.3-2.3,3.1-4.1,5-4.7\r
	c1.5-0.5,3.1-1,4.6-1.6C261.9,0,261.5,0,261,0c-8.1,2.3-19.8,4.6-34,4c-9.7-0.4-18-2.2-24.4-4c-0.2,0.9-0.8,2.1-1.6,3.5\r
	c-1,2-3.5,3.9-5.8,4.1c-2,0.1-3.2-1.2-2.2-3.1c0.4-0.7,0.7-1.3,1-2c-3.5,1.3-6.5,3.4-9.5,5.7c-1.3,1-6.8,2.7-5.9-0.9\r
	c0.6-2.5,1.3-5,2.1-7.4c-14.3,4.5-32.9,8.7-54.8,10C91.7,12,63.6,5.7,45,0c0.6,0.6,1.2,2.3,2.1,4.1c1.7,3.5-6.6,8.9-8.2,5.7\r
	C37.3,6.6,35.7,3,33.5,0H16c-0.2,0-0.3,0-0.5,0c0.9,0.6,1.8,1.3,2.6,2.1c0.6,0.6,0.2,1.8-0.1,2.4c-0.5,1.1-1.5,2-2.4,2.7\r
	C14,8.3,11.5,9.4,9.9,7.9C8.4,6.4,6.7,5.5,4.8,4.5C1.9,7.5,0,11.5,0,16v57.4c2.3,0.1,4.4,0.3,6.5,1.2c0.5,0.3,0.7,0.6,0.8,1.2\r
	c-0.1,6.3-2.1,11.9-4,17.8c-0.6,1.6-1.8,3.1-3.3,4c1.9,5.5,4,13.9,4,24.4c0,10.3-2.2,18.6-4,24c0,0,0.1,0.1,0.1,0.1\r
	c5.8,7.7,11.3,15.6,16,24c1.9,3.4-6.4,8.9-8.2,5.7c-2.5-4.4-5.1-8.6-7.9-12.7v225.2c1.9-2.1,4-4,6.5-5.6c1.2-0.8,4.4-2.5,5.6-0.7\r
	c1.2,1.8-1.2,4.2-2.5,5.1c-4,2.5-6.4,6.5-9.1,10.3c-0.1,0.2-0.3,0.3-0.4,0.5v1.7c1.4-0.4,3.1-0.4,3.4,1.2c0.3,1.9-1.7,3.8-3.4,4.8\r
	v3.4c0,7.2,4.7,13.2,11.2,15.3c0.5-0.5,1-1.1,1.4-1.7c0.9-1.3,6.2-5.1,7.5-2.4c0.2,0.5,0.3,0.9,0.4,1.4c4.2-2.1,8.6-2.9,12.6-0.2\r
	c1.4-0.8,2.9-1.6,4.5-2.3c6.1-2.9,5.2,3.7,0.8,5.8c-0.1,0-0.2,0.1-0.2,0.1c4.7-3.3,9.3-5.9,13.8-8c44-20.5,92.3-0.3,109.6,8\r
	c0.8-1.9,1.7-3.4,2.9-4.2c10.3-7.2,22.9-2.7,32.5,4.2h64c1.5,0,3-0.2,4.4-0.6c-3.5-4-4.8-9.8-3.7-16c0.4-2.6,4.4-5.5,7.1-5\r
	c2.9,0.6,5.7,1.7,8.2,3V279.9c-1.5,0.6-3.1,1-4.7,1.4c-1.6,0.4-4,0.3-3.6-2c0.4-2.2,3-4.2,5-4.7c1.1-0.3,2.2-0.6,3.3-0.9\r
	c-2.2-33.4-3.1-69-2-106.7c0.4-14.6,1.1-28.8,2-42.7c-0.5,0.2-1.5,0.3-2.8,0.3c-0.6,0-2-0.3-2.3-1\r
	C271.6,123.2,271.5,121.8,277,117.5z"/>\r
</svg>\r
`,i=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 16.1 62.1" enable-background="new 0 0 16.1 62.1" xml:space="preserve">\r
<path fill="#A3BC5E" d="M9.7,12.5l5.4-5.4C13.3,5,11.4,2.9,9.5,0.8c-2.7,2.3-5.3,4.7-8,7c1.6,1.6,3.2,3.1,4.9,4.7v37.2L1,55.1\r
	l7.5,6.7l6.6-6.7l-5.4-5.4V12.5z"/>\r
<linearGradient id="RangeStopGradient" gradientUnits="userSpaceOnUse" x1="10.071" y1="63.1421" x2="10.071" y2="1">\r
	<stop  offset="0" style="stop-color:#FBFFFB"/>\r
	<stop  offset="0.2795" style="stop-color:#B0AD9A"/>\r
	<stop  offset="0.5698" style="stop-color:#ABC787"/>\r
	<stop  offset="0.8228" style="stop-color:#C3DF82"/>\r
	<stop  offset="1" style="stop-color:#F9FEF2"/>\r
</linearGradient>\r
<polygon fill="url(#RangeStopGradient)" points="11.7,13.5 17.1,8.1 10.1,1 3,8.1 8.4,13.5 8.4,50.7 3,56.1 10.1,63.1 17.1,56.1 11.7,50.7 \r
	"/>\r
<circle fill="#FFFFFF" cx="11" cy="5.3" r="1.5"/>\r
</svg>\r
`,a={arrow:t,cauldron:n,parchment:r,rangeStop:i,stop:i,symbol:`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 164 164.4" enable-background="new 0 0 164 164.4" xml:space="preserve">\r
<path fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" d="M83.7,17.7C66.3,53,49,88.3,31.7,123.7\r
	c35-1.3,70-2.7,105-4C119,85.7,101.3,51.7,83.7,17.7z"/>\r
<circle fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" cx="83.7" cy="91.7" r="30"/>\r
<circle fill="#FFFFFF" cx="83.3" cy="94.3" r="3"/>\r
<ellipse fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="82.3" cy="93.3" rx="5.5" ry="5.9"/>\r
<g>\r
	<path opacity="0.67" fill="#FFFFFF" d="M85.4,48.3c2.3-0.3,4-0.9,4-0.9s-1.7-0.6-4-0.9c0.8-1.2,1.2-2.3,1.2-2.3s-1.1,0.4-2.3,1.2\r
		c-0.3-2.3-0.9-4-0.9-4s-0.6,1.7-0.9,4c-1.2-0.8-2.3-1.2-2.3-1.2s0.4,1.1,1.2,2.3c-2.3,0.3-4,0.9-4,0.9s1.7,0.6,4,0.9\r
		c-0.8,1.2-1.2,2.3-1.2,2.3s1.1-0.4,2.3-1.2c0.3,2.3,0.9,4,0.9,4s0.6-1.7,0.9-4c1.2,0.8,2.3,1.2,2.3,1.2S86.3,49.6,85.4,48.3z"/>\r
	<radialGradient id="SVGID_1_" cx="83.4445" cy="47.4379" r="3" gradientUnits="userSpaceOnUse">\r
		<stop  offset="0" style="stop-color:#00FFAA"/>\r
		<stop  offset="0.66" style="stop-color:#00FF44"/>\r
		<stop  offset="1" style="stop-color:#00FF88;stop-opacity:0"/>\r
	</radialGradient>\r
	<circle fill="url(#SVGID_1_)" cx="83.4" cy="47.4" r="3"/>\r
</g>\r
<g>\r
	<path opacity="0.67" fill="#FFFFFF" d="M20.7,44.4c2.3-0.3,4-0.9,4-0.9s-1.7-0.6-4-0.9c0.8-1.2,1.2-2.3,1.2-2.3s-1.1,0.4-2.3,1.2\r
		c-0.3-2.3-0.9-4-0.9-4s-0.6,1.7-0.9,4c-1.2-0.8-2.3-1.2-2.3-1.2s0.4,1.1,1.2,2.3c-2.3,0.3-4,0.9-4,0.9s1.7,0.6,4,0.9\r
		c-0.8,1.2-1.2,2.3-1.2,2.3s1.1-0.4,2.3-1.2c0.3,2.3,0.9,4,0.9,4s0.6-1.7,0.9-4c1.2,0.8,2.3,1.2,2.3,1.2S21.6,45.7,20.7,44.4z"/>\r
	\r
		<radialGradient id="SVGID_2_" cx="18.4119" cy="43.5437" r="3" gradientTransform="matrix(0.9941 0 0 1 0.456 0)" gradientUnits="userSpaceOnUse">\r
		<stop  offset="0" style="stop-color:#00FFAA"/>\r
		<stop  offset="0.66" style="stop-color:#00FF44"/>\r
		<stop  offset="1" style="stop-color:#00FF88;stop-opacity:0"/>\r
	</radialGradient>\r
	<ellipse fill="url(#SVGID_2_)" cx="18.8" cy="43.5" rx="3" ry="3"/>\r
</g>\r
<ellipse fill="none" stroke="#DBF795" stroke-width="2" stroke-miterlimit="10" cx="82" cy="82.2" rx="74.3" ry="74.4"/>\r
<ellipse fill="none" stroke="#DBF795" stroke-miterlimit="10" cx="82" cy="82.2" rx="81.5" ry="81.7"/>\r
<path fill="#DBF795" d="M82,135.1c-11.1,0-21.5-3.1-30.3-8.4c-0.1,0.3-0.3,0.6-0.5,0.9c9,5.4,19.5,8.5,30.8,8.5\r
	c6.1,0,11.9-0.9,17.5-2.6c-0.2-0.3-0.4-0.6-0.6-0.9C93.5,134.2,87.9,135.1,82,135.1z"/>\r
<path fill="#DBF795" d="M23.4,70.8c-0.3-0.1-0.7-0.2-1-0.3c-0.2,1.9-0.3,3.8-0.3,5.7c0,5.8,0.8,11.4,2.4,16.7\r
	c0.3-0.2,0.5-0.5,0.8-0.6c-1.5-5.1-2.3-10.5-2.3-16.1C23.1,74.4,23.2,72.6,23.4,70.8z"/>\r
<g>\r
	<path opacity="0.67" fill="#FFFFFF" d="M116.1,66.9c2.3-0.3,4-0.9,4-0.9s-1.7-0.6-4-0.9c0.8-1.2,1.2-2.3,1.2-2.3s-1.1,0.4-2.3,1.2\r
		c-0.3-2.3-0.9-4-0.9-4s-0.6,1.7-0.9,4c-1.2-0.8-2.3-1.2-2.3-1.2s0.4,1.1,1.2,2.3c-2.3,0.3-4,0.9-4,0.9s1.7,0.6,4,0.9\r
		c-0.8,1.2-1.2,2.3-1.2,2.3s1.1-0.4,2.3-1.2c0.3,2.3,0.9,4,0.9,4s0.6-1.7,0.9-4c1.2,0.8,2.3,1.2,2.3,1.2S116.9,68.1,116.1,66.9z"/>\r
	\r
		<radialGradient id="SVGID_3_" cx="114.3306" cy="65.9935" r="3" gradientTransform="matrix(0.9941 0 0 1 0.456 0)" gradientUnits="userSpaceOnUse">\r
		<stop  offset="0" style="stop-color:#00FFAA"/>\r
		<stop  offset="0.66" style="stop-color:#00FF44"/>\r
		<stop  offset="1" style="stop-color:#00FF88;stop-opacity:0"/>\r
	</radialGradient>\r
	<ellipse fill="url(#SVGID_3_)" cx="114.1" cy="66" rx="3" ry="3"/>\r
</g>\r
<ellipse fill="none" stroke="#DBF795" stroke-miterlimit="10" cx="137.3" cy="32.4" rx="17.8" ry="13.9"/>\r
</svg>\r
`},o={STATE_UPDATE:`state:update`,SCORE_CHANGED:`score:changed`,LIVES_CHANGED:`lives:changed`,TIMER_CHANGED:`timer:changed`,GAME_OVER:`game:over`,GAME_RESTART:`game:restart`,LEVEL_CHANGED:`level:changed`,INGREDIENT_ADDED:`cauldron:ingredient-added`,INGREDIENTS_CHANGED:`cauldron:ingredients-changed`,CAULDRON_STATE_CHANGED:`cauldron:state-changed`,BREW_RESULT:`cauldron:brew-result`,BREW_EXPLOSION:`cauldron:explosion`,RECIPE_DISCOVERED:`recipe:discovered`,RECIPE_FAILED:`recipe:failed`,RECIPE_CHANGED:`recipe:changed`},s=[{id:`dragon_tears`,name:`Dragon Tears`,icon:`dragon-tears`,temperature:25,density:8,magicPower:10,count:0},{id:`fairy_dust`,name:`Fairy Dust`,icon:`fairy-dust`,temperature:12,density:9,magicPower:12,count:0},{id:`frost_lotus`,name:`Frost Lotus`,icon:`frost-lotus`,temperature:-18,density:4,magicPower:14,count:0},{id:`mandrake_root`,name:`Mandrake Root`,icon:`mandrake-root`,temperature:-5,density:20,magicPower:8,count:0},{id:`caustic_acid`,name:`Caustic Acid`,icon:`caustic-acid`,temperature:10,density:14,magicPower:22,count:0},{id:`essence_void`,name:`Essence of the Void`,icon:`essence-void`,temperature:-20,density:-10,magicPower:40,count:0},{id:`phoenix_feather`,name:`Phoenix Feather`,icon:`phoenix-feather`,temperature:50,density:-10,magicPower:30,count:0},{id:`toad_slime`,name:`Toad Slime`,icon:`toad-slime`,temperature:5,density:30,magicPower:0,count:0}],c=[{id:1,difficulty:`easy`,name:`Moon Mist`,temperature:[32,42],density:[12,22],magicPower:[17,27]},{id:2,difficulty:`easy`,name:`Root Bloom`,temperature:[2,12],density:[24,34],magicPower:[15,25]},{id:3,difficulty:`easy`,name:`Frost Steam`,temperature:[2,12],density:[7,17],magicPower:[19,29]},{id:4,difficulty:`easy`,name:`Quiet Swirl`,temperature:[-28,-18],density:[19,29],magicPower:[17,27]},{id:5,difficulty:`easy`,name:`Bright Dew`,temperature:[27,37],density:[32,42],magicPower:[25,35]},{id:6,difficulty:`easy`,name:`Snow Dust`,temperature:[-16,-6],density:[28,38],magicPower:[29,39]},{id:7,difficulty:`medium`,name:`Acid Spark`,temperature:[17,27],density:[18,28],magicPower:[29,39]},{id:8,difficulty:`medium`,name:`Void Ember`,temperature:[0,10],density:[0,10],magicPower:[45,55]},{id:9,difficulty:`medium`,name:`Heavy Acid`,temperature:[0,10],density:[29,39],magicPower:[25,35]},{id:10,difficulty:`medium`,name:`Frost Acid`,temperature:[-13,-3],density:[13,23],magicPower:[31,41]},{id:11,difficulty:`medium`,name:`Dusty Void`,temperature:[-13,-3],density:[0,10],magicPower:[47,57]},{id:12,difficulty:`medium`,name:`Dragon Void`,temperature:[25,35],density:[1,11],magicPower:[55,65]},{id:13,difficulty:`medium`,name:`Rooted Night`,temperature:[-18,-8],density:[14,24],magicPower:[55,65]},{id:14,difficulty:`hard`,name:`Phoenix Pulse`,temperature:[57,67],density:[0,10],magicPower:[37,47]},{id:15,difficulty:`hard`,name:`Slime Crown`,temperature:[-5,5],density:[45,55],magicPower:[3,13]},{id:16,difficulty:`hard`,name:`Void Flame`,temperature:[25,35],density:[0,10],magicPower:[60,70]},{id:17,difficulty:`hard`,name:`Acid Bog`,temperature:[10,20],density:[39,49],magicPower:[17,27]},{id:18,difficulty:`hard`,name:`Frozen Ash`,temperature:[27,37],density:[0,10],magicPower:[39,49]},{id:19,difficulty:`hard`,name:`Triple Eclipse`,temperature:[-20,-10],density:[19,29],magicPower:[60,70]},{id:20,difficulty:`hard`,name:`Ember Soup`,temperature:[62,72],density:[24,34],magicPower:[37,47]}],l=class extends e{constructor({parentNode:e,icon:t,className:n,variant:r}){super({parentNode:e,tagName:`span`,className:[`app-icon`,n??``,r?`app-icon_${r}`:``]}),this.node.insertAdjacentHTML(`beforeend`,a[t])}},u=e=>e.map(e=>e?`app_button_${e}`:void 0).filter(e=>e!==void 0),d=class extends e{textNode=null;text;leftIcon=null;rightIcon=null;constructor({parentNode:e,className:t,variant:n,color:r,size:i,corner:a,text:o,leftIcon:s,rightIcon:c,fullWidth:l,disabled:d,ariaLabel:f}){super({parentNode:e,tagName:`button`,className:[`app_button`,...t?[t]:[],...u([r,n,i,a,l,d])],attrs:{ariaLabel:f??`Button`}}),this.text=o??null,this.leftIcon=s??null,this.rightIcon=c??null,this.render()}render(){this.leftIcon&&(this.node.insertAdjacentHTML(`beforeend`,a[this.leftIcon]),this.text&&this.renderTextNode(this.text)),this.text&&!this.textNode&&this.renderTextNode(this.text),this.rightIcon&&this.node.insertAdjacentHTML(`beforeend`,a[this.rightIcon])}renderTextNode(t){this.textNode=new e({parentNode:this.node,className:`app_button_text`,tagName:`span`,content:t})}setText(e){this.textNode&&this.textNode.setContent(e)}destroy(){this.node.onclick=null,super.destroy()}},f=class extends e{step=5;constructor({parentNode:e,rangeMax:t,rangeMin:n,step:r=5}){super({parentNode:e,tagName:`span`,className:`app-range-line`}),this.step=r,this.render(t,n)}render(e,t){new l({parentNode:this.node,className:this.setClass(`left-stop`),icon:`stop`}),new l({parentNode:this.node,className:this.setClass(`arrow`),icon:`arrow`}),new l({parentNode:this.node,className:this.setClass(`right-stop`),icon:`stop`})}setClass(e){return`app-range-line_${e}`}},p=class extends e{nodeClassName=`app-range-slider`;range;value=0;constructor({parentNode:e,label:t,range:n,value:r,icon:i}){super({parentNode:e,tagName:`div`,className:`app-range-slider`}),this.range=n,this.value=r,this.render(t,i)}render(t,n){new l({parentNode:this.node,icon:n,variant:`magic-icon`,className:this.setClassName(`icon`)}),new e({parentNode:this.node,tagName:`h3`,content:t,className:this.setClassName(`title`)}),new f({parentNode:this.node,rangeMax:10,rangeMin:0,value:4})}setClassName=e=>`${this.nodeClassName}_${e}`},m=class extends e{score;countNode;constructor({parentNode:e,score:t}){super({parentNode:e,tagName:`div`,className:`app-score`}),this.score=t??0,this.render()}render(){new l({parentNode:this.node,icon:`symbol`,variant:`magic-icon`,className:`app-score_icon`}),new e({parentNode:this.node,tagName:`span`,className:`app-score_text`,content:`Score: `}),this.countNode=new e({parentNode:this.node,tagName:`span`,className:`app-score_count`,content:`${this.score}`})}},h=class extends e{timerNode;timer=0;constructor({parentNode:e}){super({parentNode:e,tagName:`div`,className:`app-timer`}),this.render()}render(){new l({parentNode:this.node,icon:`symbol`,variant:`magic-icon`,className:`app-timer_icon`}),new e({parentNode:this.node,tagName:`span`,className:`app-timer_text`,content:`Time: `}),this.timerNode=new e({parentNode:this.node,tagName:`span`,className:`app-timer_count`,content:`${this.timer}`})}},g=class extends e{constructor({parentNode:e}){super({parentNode:e,tagName:`div`,className:`app-lives`,content:`Lives: 0`})}},_=class extends e{constructor({parentNode:e}){super({parentNode:e,tagName:`header`,className:`app-header`}),this.render()}render(){new m({parentNode:this.node,score:0}),new h({parentNode:this.node}),new g({parentNode:this.node})}},v=class extends e{isStartState=!1;callback;mainBtn;constructor({parentNode:e,isStartState:t,callback:n}){super({parentNode:e,tagName:t?`div`:`footer`,className:t?`app-start-state`:`app-footer`}),this.isStartState=t??!1,this.callback=n,this.render()}render(){new d({parentNode:this.node,color:`magic-icon`,text:`N`}),this.mainBtn=new d({parentNode:this.node,color:`magic`,text:this.isStartState?`Start Game`:`Brew`,leftIcon:`symbol`,rightIcon:`symbol`}),this.mainBtn.node.onclick=()=>this.callback(),new d({parentNode:this.node,color:`magic-icon`,text:`S`})}destroy(){this.mainBtn.node.onclick=null,super.destroy()}},y=class extends e{callback;child;constructor({parentNode:e,callback:t}){super({parentNode:e,tagName:`div`,className:`app-start-game-dialog`}),this.callback=t,this.render()}render(){new l({parentNode:this.node,className:`app-start-game-dialog_icon`,icon:`symbol`}),this.child=new v({parentNode:this.node,isStartState:!0,callback:this.callback})}destroy(){this.child.destroy(),super.destroy()}},b=class extends e{constructor({parentNode:e}){super({parentNode:e,tagName:`div`,className:`app-cauldron`}),this.render()}render(){new e({parentNode:this.node,tagName:`h1`,className:`app-cauldron_title`,content:`Alchemist's Cauldron`});let t=new e({parentNode:this.node,tagName:`div`,className:`app-cauldron_cauldron-wrap`});new l({parentNode:t.node,icon:`cauldron`,className:`app-cauldron_cauldron-wrap_cauldron`}),new l({parentNode:t.node,icon:`symbol`,className:`app-cauldron_cauldron-wrap_icon`})}},x=class extends e{ingredients=[];ingredientsNode=[];constructor({parentNode:e,ingredients:t}){super({parentNode:e,tagName:`div`,className:`app-ingredients`}),this.ingredients=t,this.render()}render(){let t=new e({parentNode:this.node,tagName:`ul`,className:`app-ingredients_list`});this.ingredients.forEach(({name:n,temperature:r,density:i,magicPower:a,count:o})=>{let s=new e({parentNode:t.node,tagName:`li`,className:`app-ingredients_list_item`});new l({parentNode:s.node,className:`app-ingredients_list_item_icon`,icon:`symbol`}),new e({parentNode:s.node,className:`app-ingredients_list_item_title`,tagName:`h2`,content:n}),new e({parentNode:s.node,className:`app-ingredients_list_item_text`,tagName:`span`,content:`t: ${r}, d: ${i}, m: ${a}`}),new e({parentNode:s.node,className:`app-ingredients_list_item_count`,tagName:`span`,content:o?o.toString():`0`})})}},S=class extends e{ingredientsCountNode;constructor({parentNode:e,currentRecipe:t,currentIngredientsCount:n,maxIngredients:r}){super({parentNode:e,tagName:`div`,className:`app-recipe`}),this.render(t,n,r)}render({name:t,temperature:n,density:r,magicPower:i},a,o){new l({parentNode:this.node,icon:`parchment`,className:`app-recipe_bg`}),new e({parentNode:this.node,tagName:`h2`,className:`app-recipe_title`,content:t});let s=new e({parentNode:this.node,tagName:`ul`,className:`app-recipe_value-wrap`});[{name:`temperature`,value:n},{name:`density`,value:r},{name:`magicPower`,value:i}].map(({name:t,value:n})=>{let r=new e({parentNode:s.node,tagName:`li`,className:`app-recipe_value-wrap_value`});new e({parentNode:r.node,tagName:`span`,className:`app-recipe_value-wrap_value_name`,content:t}),new e({parentNode:r.node,tagName:`span`,className:`app-recipe_value-wrap_value_v`,content:n.join(` - `)})});let c=new e({parentNode:this.node,tagName:`div`,className:`app-recipe_ingredients-count`});new e({parentNode:c.node,tagName:`span`,content:`Ingredients: `}),this.ingredientsCountNode=new e({parentNode:c.node,tagName:`span`,content:a.toString()}),new e({parentNode:c.node,tagName:`span`,content:` / `}),new e({parentNode:c.node,tagName:`span`,content:o.toString()})}},C=class extends e{ingredientsCountNode;constructor({parentNode:e,ranges:t}){super({parentNode:e,tagName:`div`,className:`app-ranges`}),this.render(t)}render(e){new p({parentNode:this.node,label:`Temperature`,range:{min:e.temperature.at(0),max:e.temperature.at(1)},value:10,icon:`symbol`}),new p({parentNode:this.node,label:`Density`,range:{min:e.density.at(0),max:e.density.at(1)},value:2,icon:`symbol`}),new p({parentNode:this.node,label:`Magic Power`,range:{min:e.magicPower.at(0),max:e.magicPower.at(1)},value:10,icon:`symbol`})}},w=class extends e{constructor({parentNode:e,ingredients:t,currentRecipe:n,currentIngredientsCount:r,maxIngredients:i}){super({parentNode:e,tagName:`div`,className:`app-game`}),this.render(t,n,r,i)}render(e,t,n,r){new x({parentNode:this.node,ingredients:e}),new b({parentNode:this.node}),new S({parentNode:this.node,currentRecipe:t,currentIngredientsCount:n,maxIngredients:r}),new C({parentNode:this.node,ranges:t})}},T=class{events={};on(e,t){this.events[e]||(this.events[e]=new Set),this.events[e].add(t)}off(e,t){this.events[e]?.delete(t)}emit(e,t){this.events[e]?.forEach(e=>e(t))}},E=new class{events=new T;state={playerName:`Alchemist`,status:`menu`,level:1,difficulty:`medium`,score:0,lives:3,timeLeft:0,currentRecipe:null,recipes:[],cauldronIngredients:[],cauldronValues:{density:0,magicPower:0,temperature:0},maxIngredients:4,shelfIngredients:[],activeReactions:[],lastReactionId:null,saveTimestamp:null,isGameOver:!1,outOfIngredients:!1};getState=()=>this.state;subscribe(e,t){this.events.on(e,t)}emit(e,t){this.events.emit(e,t)}update(e){this.state={...this.state,...e},this.emit(o.STATE_UPDATE,this.state)}startNewGame=()=>(this.resetGameState(),this.initShelf(),this.pickRandomRecipe(),this.state.status=`playing`,this.getState());resetGameState(){this.state={...this.state,score:0,lives:3,timeLeft:0,currentRecipe:null,cauldronIngredients:[],cauldronValues:{density:0,magicPower:0,temperature:0},shelfIngredients:[],activeReactions:[],lastReactionId:null,isGameOver:!1,outOfIngredients:!1}}gameOver(){}initShelf(){let e=this.state.difficulty===`easy`?4:this.state.difficulty===`medium`?6:8,t=[...s].sort(()=>Math.random()-.5).slice(0,e);t.forEach(e=>{e.count=Math.floor(Math.random()*14)+2}),this.update({shelfIngredients:t}),this.emit(o.INGREDIENTS_CHANGED,{shelfIngredients:t})}pickRandomRecipe(){this.state.recipes.length===0&&(this.state.recipes=c.filter(e=>e.difficulty===this.state.difficulty).sort(()=>Math.random()-.5));let e=this.state.recipes.at(-1);this.state.recipes.pop(),this.update({currentRecipe:e}),this.emit(o.RECIPE_CHANGED,e)}setTimer(){}addIngredientToCauldron(e){let t=this.state.shelfIngredients.find(t=>t.id===e);if(!t||!t.count)return;--t.count;let n={temperature:t.temperature+this.state.cauldronValues.temperature,density:t.density+this.state.cauldronValues.density,magicPower:t.magicPower+this.state.cauldronValues.magicPower};this.update({cauldronIngredients:[...this.state.cauldronIngredients,t],cauldronValues:n}),this.emit(o.CAULDRON_STATE_CHANGED,n)}brewCheck(){let e=this.state.currentRecipe;if(!e)return;let t=this.state.difficulty===`easy`?12:this.state.difficulty===`medium`?8:5,{temperature:n,density:r,magicPower:i}=this.state.cauldronValues,a=(e,n)=>e>=n.min-t&&e<=n.max+t;a(n,{min:e.temperature.at(0)??0,max:e.temperature.at(1)??0})&&a(r,{min:e.density.at(0)??0,max:e.density.at(1)??0})&&a(i,{min:e.magicPower.at(0)??0,max:e.magicPower.at(1)??0})?(this.addScore(this.state.difficulty===`easy`?100:this.state.difficulty===`medium`?200:300),this.clearCauldron(),this.pickRandomRecipe()):(this.loseLife(),this.clearCauldron())}loseLife(){let e=this.state.lives-1;e?this.update({lives:e}):this.gameOver()}addScore(e){this.update({score:this.state.score+e})}clearCauldron(){this.update({cauldronIngredients:[],cauldronValues:{temperature:0,density:0,magicPower:0}}),this.emit(o.CAULDRON_STATE_CHANGED,this.state.cauldronValues)}},D=class extends e{root;store=E;header=null;main=null;footer=null;startGameNode=null;constructor(e){super({parentNode:e,tagName:`div`,className:`app`,attrs:{id:`app`}}),this.root=e}init(){this.root.append(this.node),this.startGameNode=new y({parentNode:this.node,callback:this.handleStartGame})}renderGame(){this.startGameNode?.destroy(),this.startGameNode=null,this.node.innerHTML=``;let{shelfIngredients:t,currentRecipe:n,cauldronIngredients:r,maxIngredients:i}=this.store.getState();n&&(this.header=new _({parentNode:this.node}),this.main=new e({parentNode:this.node,tagName:`main`,className:`app-main`}),new w({parentNode:this.main.node,ingredients:t,currentRecipe:n,currentIngredientsCount:r.length,maxIngredients:i}),this.footer=new v({parentNode:this.node,callback:()=>{}}))}handleStartGame=()=>{this.store.startNewGame(),this.renderGame()}},O=document.body;new D(O).init();
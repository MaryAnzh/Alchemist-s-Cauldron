(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var{ALL:e,EASY:t,HARD:n,MEDIUM:r,GAME_OVER:i,MENU:a,PAUSED:o,PLAYING:s,RULES:c,SETTINGS:l,BOTTOM:u,TOP:d,CONTINUE_GAME:f,DIFFICULTY:p,SHOW_LEADERBOARD:ee,START_NEW_GAME:te,TIME:ne,LIVES_TITLE:re,INGREDIENTS_TITLE:ie,TEMPERATURE:ae,DENSITY:oe,MAGIC_POWER:se,PRESET:m,ERROR_INVALID_PROFILE:ce,ERROR_UNABLE_TO_SAVE_PROFILE:le,ERROR_NAME_VALIDATION:h,ERROR_PERSIST_PROFILE:ue,URL_ERROR:de,HOME:g,PRESENTATION:_,PROFILE:v,STATS:y,ACCOUNT:b,TITLE:fe,DEFAULT:pe,IMAGE:me,ALCHEMIST:he,SLIDE_1_TITLE:ge,SLIDE_1_PREVIEW_TITLE:_e,SLIDE_1_SUBTITLE:ve,SLIDE_1_ITEMS:ye,SLIDE_2_TITLE:be,SLIDE_2_PREVIEW_TITLE:xe,SLIDE_2_SUBTITLE:Se,SLIDE_2_ITEMS:Ce,SLIDE_3_TITLE:we,SLIDE_3_PREVIEW_TITLE:Te,SLIDE_3_ITEMS:Ee,SLIDE_4_TITLE:De,SLIDE_4_PREVIEW_TITLE:Oe,SLIDE_4_SUBTITLE:ke,SLIDE_4_ITEMS:Ae,SLIDE_5_TITLE:je,SLIDE_5_PREVIEW_TITLE:Me,SLIDE_5_SUBTITLE:Ne,SLIDE_5_ITEMS:Pe,SLIDE_5_SUB_1_TITLE:Fe,SLIDE_5_SUB_1_DESCRIPTION:Ie,SLIDE_5_SUB_2_TITLE:Le,SLIDE_5_SUB_2_DESCRIPTION:Re,SLIDE_5_SUB_3_TITLE:ze,SLIDE_5_SUB_3_DESCRIPTION:Be,SLIDE_6_TITLE:Ve,SLIDE_6_PREVIEW_TITLE:He,SLIDE_6_ITEMS:Ue,SLIDE_7_TITLE:We,SLIDE_7_PREVIEW_TITLE:Ge,SLIDE_7_ITEMS:Ke,SLIDE_7_SUB_1_DESCRIPTION:qe,SLIDE_7_SUB_2_TITLE:Je,SLIDE_7_SUB_2_DESCRIPTION:Ye,SLIDE_7_SUB_3_TITLE:Xe,SLIDE_7_SUB_3_DESCRIPTION:Ze,SLIDE_7_SUB_4_TITLE:Qe,SLIDE_7_SUB_4_DESCRIPTION:$e,SLIDE_7_SUB_1_TITLE:et,SLIDE_8_TITLE:tt,SLIDE_8_PREVIEW_TITLE:nt,SLIDE_8_SUBTITLE:rt,SLIDE_8_ITEMS:it,SLIDE_9_TITLE:at,SLIDE_9_PREVIEW_TITLE:ot,SLIDE_9_SUBTITLE:st,SLIDE_9_ITEMS:ct,SLIDE_9_SUB_1_TITLE:lt,SLIDE_9_SUB_1_DESCRIPTION:ut,SLIDE_9_SUB_2_TITLE:dt,SLIDE_9_SUB_2_DESCRIPTION:ft,SLIDE_9_SUB_3_TITLE:pt,SLIDE_9_SUB_3_DESCRIPTION:mt,SLIDE_9_SUB_4_TITLE:ht,SLIDE_9_SUB_4_DESCRIPTION:gt,SLIDE_9_SUB_5_TITLE:_t,SLIDE_9_SUB_5_DESCRIPTION:vt,SLIDE_9_SUB_6_TITLE:yt,SLIDE_9_SUB_6_DESCRIPTION:bt,SLIDE_9_SUB_7_TITLE:xt,SLIDE_9_SUB_7_DESCRIPTION:St,SLIDE_9_SUB_8_TITLE:Ct,SLIDE_9_SUB_8_DESCRIPTION:wt,SLIDE_9_SUB_9_TITLE:Tt,SLIDE_9_SUB_9_DESCRIPTION:Et,INPUT_PLACEHOLDER:Dt,ENTER_NAME:Ot,NAME_DIALOG_SUBTITLE:kt,SUMMARY:At,CHART:jt,RECENT:Mt,REASONS:Nt,BREWS:Pt,HISTOGRAM:Ft,CANDLES:It,HEATMAP:Lt}={ALL:`all`,EASY:`easy`,HARD:`hard`,MEDIUM:`medium`,MENU:`menu`,PLAYING:`playing`,PAUSED:`paused`,GAME_OVER:`game-over`,SETTINGS:`settings`,RULES:`rules`,TOP:`top`,BOTTOM:`bottom`,CONTINUE_GAME:`Continue Game`,DIFFICULTY:`difficulty`,SHOW_LEADERBOARD:`Leaderboard`,START_NEW_GAME:`Start New Game`,TIME:`time`,LIVES_TITLE:`lives`,INGREDIENTS_TITLE:`ingredients`,TEMPERATURE:`temperature`,DENSITY:`density`,MAGIC_POWER:`magicPower`,PRESET:`preset`,ALCHEMIST:`Alchemist`,SUMMARY:`summary`,CHART:`chart`,RECENT:`recent`,REASONS:`reasons`,BREWS:`brews`,HISTOGRAM:`histogram`,CANDLES:`candles`,HEATMAP:`heatmap`,INPUT_PLACEHOLDER:`Enter your name (2–15 chars)`,ERROR_INVALID_PROFILE:`Cannot save an invalid player profile`,ERROR_UNABLE_TO_SAVE_PROFILE:`Unable to save the player profile to localStorage`,ERROR_NAME_VALIDATION:`Name must be 2–15 chars: letters, digits, space, _ or -`,ERROR_PERSIST_PROFILE:`Failed to persist player profile`,URL_ERROR:`Enter an https:// image link`,HOME:`game`,PROFILE:`profile`,STATS:`statistics`,ACCOUNT:`account`,PRESENTATION:`presentation`,TITLE:`Alchemist's Cauldron`,DEFAULT:`default`,IMAGE:`image`,ENTER_NAME:`Enter Your Name`,NAME_DIALOG_SUBTITLE:`Without a name, the game will start in incognito mode, without access to profile and statistics`,SLIDE_1_TITLE:`Creative Extension — My Imagination Space`,SLIDE_1_PREVIEW_TITLE:`Alchemist’s Journey`,SLIDE_1_SUBTITLE:`Player profiles, personal progress, achievements and testing (Vitest)`,SLIDE_1_ITEMS:[`Routing: hash-based for GitHub Pages`,`Profile pages: account and statistics`,`Account page: avatar and name editing`,`Statistics page (placeholder, data is in progress)`,`Vitest tests for routing and profile logic`],SLIDE_2_TITLE:`Make game more user friendly`,SLIDE_2_PREVIEW_TITLE:`The Idea`,SLIDE_2_SUBTITLE:`A high score shows a result. A profile tells a story. User can personalize their experience. Texting app logic is applied`,SLIDE_2_ITEMS:[`Provide a personalized experience`,`Keep a personal history of completed games`,`Understand progress across difficulty levels`,`Apply texting app logic`],SLIDE_3_TITLE:`Small Scope, Clear Decisions`,SLIDE_3_PREVIEW_TITLE:`Technology Choices`,SLIDE_3_ITEMS:[`Vanilla TypeScript: extend the existing architecture`,`localStorage: no account or backend required`,`Hash routing: compatible with GitHub Pages`,`Trade-off: browser-only storage, without cross-device sync`],SLIDE_4_TITLE:`From Gameplay to Player Progress`,SLIDE_4_PREVIEW_TITLE:`Architecture`,SLIDE_4_SUBTITLE:`Game → Result → ProfileService → localStorage → Profile`,SLIDE_4_ITEMS:[`Typed records describe completed games`,`Validation checks data loaded from storage`,`Pure functions calculate statistics and achievements`,`UI components display the profile and its progress`],SLIDE_5_TITLE:`Let’s Explore the Profile`,SLIDE_5_PREVIEW_TITLE:`Account`,SLIDE_5_SUBTITLE:`A short journey through the player experience`,SLIDE_5_ITEMS:[`Upload an avatar`,`Add avatar from a link`,`Change a name`],SLIDE_5_SUB_1_TITLE:`Upload from Computer`,SLIDE_5_SUB_1_DESCRIPTION:`Drop an image into the avatar circle or click it to choose a file. Files over 85 KB are rejected.`,SLIDE_5_SUB_2_TITLE:`Avatar by Link`,SLIDE_5_SUB_2_DESCRIPTION:`Paste an https image link and press Apply. The avatar updates at once.`,SLIDE_5_SUB_3_TITLE:`Change Your Name`,SLIDE_5_SUB_3_DESCRIPTION:`Press Edit, type a new name, and save it. The name is validated before saving.`,SLIDE_6_TITLE:`Challenges Behind the Features`,SLIDE_6_PREVIEW_TITLE:`Challenges`,SLIDE_6_ITEMS:[`Recording each completed game only once`,`Preserving counters when continuing a saved game`,`Resizing uploaded avatars to limit storage usage`,`Handling invalid data and storage failures`],SLIDE_7_TITLE:`Making It Reliable`,SLIDE_7_PREVIEW_TITLE:`Quality`,SLIDE_7_ITEMS:[`Vitest tests for validation and data transformations`,`TypeScript and ESLint checks`,`Manual checks for saved games and profile persistence`,`Responsive layouts and keyboard navigation`],SLIDE_7_SUB_1_TITLE:`Where the Tests Live`,SLIDE_7_SUB_1_DESCRIPTION:`Store logic modules are tested next to their source files.`,SLIDE_7_SUB_2_TITLE:`Testing Profile Validation`,SLIDE_7_SUB_2_DESCRIPTION:`A small validator checks the name, and the profile test checks the whole saved profile.`,SLIDE_7_SUB_3_TITLE:`Rejecting Bad Data`,SLIDE_7_SUB_3_DESCRIPTION:`Wrong versions, blank names and too long names are rejected.`,SLIDE_7_SUB_4_TITLE:`Testing Statistics`,SLIDE_7_SUB_4_DESCRIPTION:`Pure functions get small input-output tests, such as difficulty shares.`,SLIDE_8_TITLE:`From High Scores to Personal Progress`,SLIDE_8_PREVIEW_TITLE:`What’s Next`,SLIDE_8_SUBTITLE:`A focused extension built on a familiar foundation`,SLIDE_8_ITEMS:[`Lessons: typed data, persistence, routing, and testing`,`Next steps: statistics charts and localization`,`Thank you! Questions?`],SLIDE_9_TITLE:`Player Statistics`,SLIDE_9_PREVIEW_TITLE:`Statistics`,SLIDE_9_SUBTITLE:`Personal progress, one section at a time`,SLIDE_9_ITEMS:[`Summary, game chart and difficulty breakdown`,`Recent games, defeat reasons and brew history`,`Candles, histogram and activity heatmap`,`Press ↓ to explore each section`],SLIDE_9_SUB_1_TITLE:`Summary`,SLIDE_9_SUB_1_DESCRIPTION:`Key totals at a glance: games played, best and average score, and total time played.`,SLIDE_9_SUB_2_TITLE:`Score Chart`,SLIDE_9_SUB_2_DESCRIPTION:`Scores over time, switchable between single games, days and weeks.`,SLIDE_9_SUB_3_TITLE:`Difficulty`,SLIDE_9_SUB_3_DESCRIPTION:`How your games split between easy, medium and hard.`,SLIDE_9_SUB_4_TITLE:`Recent Games`,SLIDE_9_SUB_4_DESCRIPTION:`The latest games at a glance.`,SLIDE_9_SUB_5_TITLE:`Game Over Reasons`,SLIDE_9_SUB_5_DESCRIPTION:`Why games end, shown as shares of all finished games.`,SLIDE_9_SUB_6_TITLE:`Brews & Reactions`,SLIDE_9_SUB_6_DESCRIPTION:`Share of successful and failed brews across all games.`,SLIDE_9_SUB_7_TITLE:`Scores by Day`,SLIDE_9_SUB_7_DESCRIPTION:`Daily score candles: green means the day went up, red means it went down.`,SLIDE_9_SUB_8_TITLE:`Brews per Game`,SLIDE_9_SUB_8_DESCRIPTION:`How many brews a game usually takes, shown as a histogram.`,SLIDE_9_SUB_9_TITLE:`Activity`,SLIDE_9_SUB_9_DESCRIPTION:`Games played per day over the last six weeks.`},Rt=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,zt=`<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#F8E9A8"/>\r
      <stop offset="40%" stop-color="#E0C067"/>\r
      <stop offset="100%" stop-color="#A66B1F"/>\r
    </linearGradient>\r
\r
    <linearGradient id="goldLight" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFF3C6"/>\r
      <stop offset="100%" stop-color="#D3A441"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Outer mystic circle -->\r
  <circle cx="48" cy="48" r="42" fill="none" stroke="url(#gold)" stroke-width="2"/>\r
\r
  <!-- Double chevron -->\r
  <path\r
    d="M30 38 L48 56 L66 38"\r
    fill="none"\r
    stroke="url(#gold)"\r
    stroke-width="4"\r
    stroke-linecap="round"\r
    stroke-linejoin="round"\r
  />\r
  <path\r
    d="M30 50 L48 68 L66 50"\r
    fill="none"\r
    stroke="url(#goldLight)"\r
    stroke-width="3"\r
    stroke-linecap="round"\r
    stroke-linejoin="round"\r
  />\r
</svg>`,Bt=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#F8E9A8"/>\r
      <stop offset="40%" stop-color="#E0C067"/>\r
      <stop offset="100%" stop-color="#A66B1F"/>\r
    </linearGradient>\r
\r
    <linearGradient id="goldLight" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFF3C6"/>\r
      <stop offset="100%" stop-color="#D3A441"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Double chevron -->\r
  <path\r
    d="M7.5 9.5 L12 14 L16.5 9.5"\r
    fill="none"\r
    stroke="currentColor"\r
    stroke-width="1"\r
    stroke-linecap="round"\r
    stroke-linejoin="round"\r
  />\r
  <path\r
    d="M7.5 12.5 L12 17 L16.5 12.5"\r
    fill="none"\r
    stroke="currentColor"\r
    stroke-width="0.75"\r
    stroke-linecap="round"\r
    stroke-linejoin="round"\r
  />\r
</svg>`,Vt=`<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#F8E9A8"/>\r
      <stop offset="40%" stop-color="#E0C067"/>\r
      <stop offset="100%" stop-color="#A66B1F"/>\r
    </linearGradient>\r
\r
    <linearGradient id="goldLight" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFF3C6"/>\r
      <stop offset="100%" stop-color="#D3A441"/>\r
    </linearGradient>\r
\r
    <linearGradient id="pageGlow" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#FFFDF6"/>\r
      <stop offset="100%" stop-color="#E9DFC0"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Outer mystic circle -->\r
  <circle\r
    cx="48"\r
    cy="48"\r
    r="42"\r
    fill="none"\r
    stroke="url(#gold)"\r
    stroke-width="2"\r
  />\r
\r
  <!-- Rune marks -->\r
  <path\r
    d="M25 30 L29 26 L33 30 L29 34 Z"\r
    fill="none"\r
    stroke="url(#gold)"\r
    stroke-width="1"\r
  />\r
\r
  <path\r
    d="M63 26 H71 V34 H63"\r
    fill="none"\r
    stroke="url(#gold)"\r
    stroke-width="1"\r
  />\r
\r
  <!-- Left page -->\r
  <path\r
    d="\r
      M20 24\r
      Q34 20 46 30\r
      V72\r
      Q34 62 20 66\r
      Z\r
    "\r
    fill="url(#pageGlow)"\r
    stroke="url(#gold)"\r
    stroke-width="2.5"\r
  />\r
\r
  <!-- Right page -->\r
  <path\r
    d="\r
      M76 24\r
      Q62 20 50 30\r
      V72\r
      Q62 62 76 66\r
      Z\r
    "\r
    fill="url(#pageGlow)"\r
    stroke="url(#gold)"\r
    stroke-width="2.5"\r
  />\r
\r
  <!-- Center spine -->\r
  <path\r
    d="M48 28 V74"\r
    stroke="url(#gold)"\r
    stroke-width="3"\r
    stroke-linecap="round"\r
  />\r
\r
  <!-- Decorative lines -->\r
  <line\r
    x1="28"\r
    y1="38"\r
    x2="40"\r
    y2="38"\r
    stroke="url(#goldLight)"\r
    stroke-width="1.5"\r
  />\r
\r
  <line\r
    x1="28"\r
    y1="46"\r
    x2="40"\r
    y2="46"\r
    stroke="url(#goldLight)"\r
    stroke-width="1.5"\r
  />\r
\r
  <line\r
    x1="56"\r
    y1="38"\r
    x2="68"\r
    y2="38"\r
    stroke="url(#goldLight)"\r
    stroke-width="1.5"\r
  />\r
\r
  <line\r
    x1="56"\r
    y1="46"\r
    x2="68"\r
    y2="46"\r
    stroke="url(#goldLight)"\r
    stroke-width="1.5"\r
  />\r
\r
  <!-- Magic sparkle -->\r
  <path\r
    d="M48 14 L50 20 L56 22 L50 24 L48 30 L46 24 L40 22 L46 20 Z"\r
    fill="url(#gold)"\r
  />\r
\r
  <!-- Bottom crystal -->\r
  <path\r
    d="M48 78 L44 86 L48 92 L52 86 Z"\r
    fill="url(#gold)"\r
    stroke="#F7E6A0"\r
    stroke-width="1"\r
  />\r
</svg>`,Ht=`<svg width="140" height="200" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <!-- Внешний контур банки -->\r
    <linearGradient id="jarStroke" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#dfe6ff"/>\r
      <stop offset="50%" stop-color="#9fb4ff"/>\r
      <stop offset="100%" stop-color="#5a6ccf"/>\r
    </linearGradient>\r
\r
    <!-- Внутренний стеклянный контур -->\r
    <linearGradient id="glassInner" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="rgba(255,255,255,0.8)"/>\r
      <stop offset="40%" stop-color="rgba(200,220,255,0.4)"/>\r
      <stop offset="100%" stop-color="rgba(120,150,220,0.1)"/>\r
    </linearGradient>\r
\r
    <!-- Блик -->\r
    <linearGradient id="glassHighlight" x1="0" y1="0" x2="1" y2="0">\r
      <stop offset="0%" stop-color="rgba(255,255,255,0.9)"/>\r
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>\r
    </linearGradient>\r
\r
    <!-- Горлышко: внешняя обводка -->\r
    <linearGradient id="neckOuter" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#eaf0ff"/>\r
      <stop offset="100%" stop-color="#7c8fd8"/>\r
    </linearGradient>\r
\r
    <!-- Горлышко: внутренняя обводка -->\r
    <linearGradient id="neckInner" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#ffffff"/>\r
      <stop offset="100%" stop-color="#b0c2ff"/>\r
    </linearGradient>\r
\r
    <!-- Крышка -->\r
    <linearGradient id="capGradient" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#f7d37a"/>\r
      <stop offset="50%" stop-color="#d9a84f"/>\r
      <stop offset="100%" stop-color="#b07a2f"/>\r
    </linearGradient>\r
\r
    <!-- Блик на крышке -->\r
    <linearGradient id="capHighlight" x1="0" y1="0" x2="1" y2="0">\r
      <stop offset="0%" stop-color="rgba(255,255,255,0.8)"/>\r
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Крышка -->\r
  <rect x="40" y="18" width="60" height="20" rx="6" fill="url(#capGradient)" />\r
  <rect x="42" y="20" width="56" height="6" rx="3" fill="url(#capHighlight)" />\r
\r
  <!-- Горлышко: внешняя обводка -->\r
  <path\r
    d="M45 40\r
       Q45 30 55 28\r
       L85 28\r
       Q95 30 95 40\r
       L95 55\r
       Q95 58 92 60\r
       L48 60\r
       Q45 58 45 55\r
       Z"\r
    fill="none"\r
    stroke="url(#neckOuter)"\r
    stroke-width="4"\r
    stroke-linejoin="round"\r
  />\r
\r
  <!-- Горлышко: внутренняя обводка -->\r
  <path\r
    d="M50 40\r
       Q50 34 58 32\r
       L82 32\r
       Q90 34 90 40\r
       L90 54\r
       Q90 55 88 57\r
       L52 57\r
       Q50 55 50 54\r
       Z"\r
    fill="none"\r
    stroke="url(#neckInner)"\r
    stroke-width="2"\r
    stroke-linejoin="round"\r
  />\r
\r
  <!-- Контур банки -->\r
  <path\r
    d="M35 60\r
       Q30 75 30 95\r
       L30 150\r
       Q30 170 45 180\r
       Q70 190 95 180\r
       Q110 170 110 150\r
       L110 95\r
       Q110 75 105 60\r
       Z"\r
    fill="none"\r
    stroke="url(#jarStroke)"\r
    stroke-width="4"\r
    stroke-linejoin="round"\r
  />\r
\r
  <!-- Внутренний стеклянный контур -->\r
  <path\r
    d="M40 65\r
       Q35 80 35 95\r
       L35 145\r
       Q35 160 48 168\r
       Q70 178 92 168\r
       Q105 160 105 145\r
       L105 95\r
       Q105 80 100 65\r
       Z"\r
    fill="none"\r
    stroke="url(#glassInner)"\r
    stroke-width="3"\r
    stroke-linejoin="round"\r
  />\r
\r
  <!-- Блик -->\r
  <path\r
    d="M45 75\r
       Q40 90 42 110\r
       Q45 120 55 130"\r
    fill="none"\r
    stroke="url(#glassHighlight)"\r
    stroke-width="3"\r
    stroke-linecap="round"\r
  />\r
\r
  <!-- Блёстки внутри -->\r
  <g fill="white" opacity="0.7">\r
    <circle cx="55" cy="120" r="2"/>\r
    <circle cx="75" cy="130" r="1.5"/>\r
    <circle cx="65" cy="110" r="1"/>\r
    <circle cx="85" cy="140" r="2.2"/>\r
    <circle cx="50" cy="150" r="1.3"/>\r
    <circle cx="90" cy="115" r="1.8"/>\r
    <circle cx="70" cy="155" r="1"/>\r
    <circle cx="60" cy="135" r="2.5"/>\r
  </g>\r
\r
  <!-- Тусклые блёстки -->\r
  <g fill="rgba(255,255,255,0.4)">\r
    <circle cx="80" cy="125" r="1"/>\r
    <circle cx="55" cy="140" r="1.2"/>\r
    <circle cx="95" cy="150" r="1"/>\r
    <circle cx="45" cy="130" r="0.8"/>\r
  </g>\r
</svg>\r
`,Ut=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Wt=`﻿<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449 330.7">\r
<path fill="#825333" d="M411.1,162.3c-0.3-6.4-0.8-10.6-1.4-15c-0.2-1.4-0.9-6.7-2.5-14.1c-1.3-5.9-2.6-10.4-3.4-13.1 c-3.9-13.5-9.1-24.4-10.8-28c-2.8-5.9-5.9-11.2-7.2-13.5c-0.7-1.3-1.5-2.5-2.2-3.7c3.4-7.2,6.7-14.3,10.1-21.5 c0,0.1-0.1,0.1-0.1,0.2c4.3-8.9-0.5-18.3-15.9-27c-41.3-23.4-142.9-33.3-227-22c-67,9-102.7,28.7-93.6,48.2c0,0,0,0,0,0 c3.3,7.2,6.7,14.4,10,21.5c-11.6,18.7-17.7,36-20.4,45.3c-0.8,2.7-2.1,7.1-3.4,13.1c-1.6,7.4-2.3,12.6-2.5,14.1 c-0.6,4.4-1.1,8.6-1.4,15c-0.3,5.8-0.3,6.8-0.1,15.9c0,0.1,0.1,5.6,1.1,14.4c0.3,2.3,1,7.6,1.8,12c1.9,9.8,4.1,18,7.4,27.2 c1.4,3.9,3.2,8.3,3.8,9.8c1.5,3.4,3.8,8.6,6.3,13.3c1.5,2.8,4,7.5,6.7,11.7c2.8,4.4,4.2,6.6,8.1,12c3.6,6.4,7.2,12.8,10.8,19.1 c2.1,3.8,6.4,7.6,12.8,11.2c34.4,19.5,119.2,27.7,189.3,18.3c43-5.8,70.5-16.9,77.5-29.1l10.9-19.1c13.3-18,21-35.3,25.1-46.8 c3.3-9.3,5.6-17.4,7.5-27.2c0.9-4.5,1.6-9.7,1.9-12c1-9.1,1.2-14.5,1.2-14.5C411.4,168.3,411.4,168.3,411.1,162.3z"/>\r
<path fill="#603913" d="M370.4,98.4c3.6-2.1,7.3-4.4,11-6.9c-1.4-4-2.9-7.7-4.4-11.2c0,0,0,0,0,0c2-1.2,4.2-2.1,6.3-2.8 c0.1,0-3.9-6.7-5.5-9.1c-2.5-3.7-6.9-7.4-13.1-10.9C326.9,36,234,27.1,157.1,37.4c-45.5,6.1-75.2,17.6-84,30.4 c-2.4,3.5-4.7,7-6.7,10.4C110.9,100.3,256.7,164.6,370.4,98.4z"/>\r
<path fill="#754C29" d="M375.9,28.2C335.1,5.1,234.8-4.6,151.7,6.6C85.7,15.4,50.5,34.8,59.1,54c4.1,9.1,8.2,18.2,12.3,27.3 c-8-17.8,24.6-35.7,85.6-43.9C234,27.1,326.9,36,364.6,57.5c13.8,7.9,18.3,16.3,14.6,24.4l12.4-27.3 C395.7,45.9,390.8,36.7,375.9,28.2z"/>\r
<path fill="#AD7753" d="M102.2,169.9L102.2,169.9c8.5,1.7,14.1,9.7,12.8,17.7c-1.2,7.5-8.1,12.9-14.8,12.8 c-8.5-0.2-16.6-9.4-14.8-20.7"/>\r
<path opacity="0.43" fill="#AD7753" d="M102.2,144.3c-16-0.8-34.6,23.2-31.5,46.3c2.1,15.9,14.4,29.7,31.5,35.4 c3.2-1.5,21.5-10.2,26.6-29.5C134.8,173.3,118.9,145.1,102.2,144.3z"/>\r
</svg>\r
`,Gt=`﻿<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449 330.7">\r
<defs><radialGradient id="SVGID_1_" cx="324.1131" cy="160.6843" r="27.7629" gradientTransform="matrix(0.9272 0 0 1.382 25.5775 -72.2764)" gradientUnits="userSpaceOnUse"> <stop  offset="0" style="stop-color:#FFFFFF"/> <stop  offset="0.2535" style="stop-color:#FFFFFF"/> <stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/> </radialGradient></defs>\r
<path fill="#774E32" d="M85.2,297.2c-3.8-6.7-7.5-13.4-11.3-20c2.3,4.1,6.9,8.2,13.8,12.2c37.2,21.1,128.8,30,204.7,19.8 c46.5-6.3,76.3-18.2,83.8-31.4l-11.4,20c-6.9,12.2-34.5,23.3-77.5,29.1c-70.2,9.4-154.9,1.2-189.3-18.3 C91.5,304.8,87.3,301,85.2,297.2z"/>\r
<path fill="#8B5E3C" d="M75.2,279.2c-4.5-6.2-5.9-8.4-8.9-13.1c-2.7-4.3-5.2-9-6.7-11.7c-2.5-4.7-4.8-9.9-6.3-13.3 c-0.6-1.5-2.4-5.9-3.8-9.8c-3.3-9.2-5.5-17.4-7.4-27.2c-0.9-4.4-1.6-9.7-1.8-12c-1-8.8-1.1-14.3-1.1-14.4c-0.1-9.1-0.2-10,0.1-15.9 c0.3-6.4,0.9-10.6,1.4-15c0.2-1.4,0.9-6.7,2.5-14.1c1.3-6,2.6-10.4,3.4-13.1c3.1-10.4,10.4-31.1,25-52.3 c-6.1,8.9-2.3,18.5,13.2,27.3c38,21.6,131.8,30.7,209.3,20.2c64.7-8.7,97.7-28.2,84.9-47c1.9,2.8,4.4,6.6,6.8,10.7 c1.3,2.3,4.4,7.6,7.2,13.5c1.7,3.6,6.9,14.6,10.8,28c0.8,2.7,2.1,7.1,3.4,13.1c1.6,7.4,2.3,12.6,2.5,14.1c0.6,4.4,1.1,8.6,1.4,15 c0.3,6,0.3,6,0.1,15.8c0,0.1-0.1,5.4-1.2,14.5c-0.3,2.3-1,7.6-1.9,12c-1.9,9.8-4.2,18-7.5,27.2c-4.2,11.7-12.1,29.5-25.9,47.9 c-9.3,12.4-38.3,23.4-82.4,29.4c-75.9,10.2-167.5,1.3-204.7-19.8C81.9,286,77.8,282.6,75.2,279.2z"/>\r
<path opacity="0.56" fill="#936441" d="M376.5,40.2c1.6-3.5,2.4-6.9,2.7-10c-1.1-0.7-2.2-1.3-3.3-2c-10.5-6-25-11.1-42.2-15.1 c-4.7,4.9-7.7,11.2-8.1,17.8c-0.3,5.2,1,9.8,2.7,13.2c13.1,3.2,24.4,7.2,33.2,11.7C366.1,53.4,372.7,48.7,376.5,40.2z"/>\r
<path fill="#A97C50" d="M377.8,26.7c41.3,23.4,6.5,51.6-77.6,62.9c-84.1,11.3-185.8,1.5-227-22C31.8,44.2,66.6,16,150.7,4.7 C234.9-6.6,336.5,3.2,377.8,26.7z M365.2,28.3C327.4,6.8,234.1-2.2,156.9,8.2S47.8,44.4,85.7,65.9C123.5,87.4,216.8,96.5,294,86.1 S403.1,49.8,365.2,28.3"/>\r
<path fill="#724D35" d="M70.2,81.1c-4.4-9.4-8.7-18.8-13.1-28.2c2.3,5,7.6,10,16,14.7c41.3,23.4,142.9,33.3,227,22 c53.1-7.1,86.5-21,93.6-36.1c-4.4,9.4-8.8,18.8-13.2,28.1c-6.5,14-37.4,26.7-86.3,33.3c-77.6,10.4-171.3,1.4-209.3-20.2 C77.2,90.2,72.3,85.7,70.2,81.1z"/>\r
<path fill="#754C29" d="M409.4,191c-4.1-1.5-7-5.3-7.4-9.6c-0.4-4.3,1.7-8.5,5.4-10.8c14-5.4,22.7-17.7,21.7-29.6 c-0.9-10.5-9.1-17.9-10.4-19c-2.2-1.9-6-5.1-11.9-6c-3.3-0.5-6,0-7.8,0.4c-1.4-0.8-4.5-2.9-6.4-6.9c-2.9-6-0.9-11.7-0.5-12.8 c4.1-0.8,11.9-1.8,21.1,0.6c2.2,0.6,10.1,3,18,9.4c10.1,8.3,16.3,19.7,17.5,32.3C451.1,163.3,433.8,186.1,409.4,191z"/>\r
<path opacity="0.73" fill="#754C29" d="M407.5,170.6c-1.9,1.2-3.4,2.9-4.3,4.8c16.2,0.4,38.9-22.5,33.7-40.2 c-3.9-13.2-22.6-21.5-37.9-18.9c0.1,0.1,0.2,0.1,0.3,0.2c1.8-0.4,4.5-0.8,7.8-0.4c5.9,0.8,9.7,4.1,11.9,6c1.2,1.1,9.5,8.4,10.4,19 C430.1,152.8,421.5,165.2,407.5,170.6z"/>\r
<path fill="#754C29" d="M39.5,191c4.1-1.5,7-5.3,7.4-9.6c0.4-4.3-1.7-8.5-5.4-10.8c-14-5.4-22.7-17.7-21.7-29.6 c0.9-10.5,9.1-17.9,10.4-19c2.2-1.9,6-5.1,11.9-6c3.3-0.5,6,0,7.8,0.4c1.4-0.8,4.5-2.9,6.4-6.9c2.9-6,0.9-11.7,0.5-12.8 c-4.1-0.8-11.9-1.8-21.1,0.6c-2.2,0.6-10.1,3-18,9.4C7.6,115,1.4,126.5,0.2,139.1C-2.1,163.3,15.2,186.1,39.5,191z"/>\r
<path opacity="0.73" fill="#754C29" d="M44.3,173c-0.8-0.9-1.7-1.7-2.8-2.4c-14-5.4-22.7-17.7-21.7-29.6c0.9-10.5,9.1-17.9,10.4-19 c1.6-1.4,4.2-3.5,7.8-4.9c-14,3.3-24.1,14-25,24.3C11.7,154.4,24.6,170.6,44.3,173z"/>\r
<path opacity="0.14" fill="#825333" d="M411.3,167.7c0-0.6-0.1-2.6-0.2-5.4c-0.4-7.7-1.2-13.7-1.4-15c-0.4-3-1.2-8-2.5-14.1 c-1.3-5.9-2.6-10.4-3.4-13.1c-3.9-13.5-9.1-24.4-10.8-28c-2.8-5.9-5.9-11.2-7.2-13.5c-0.7-1.3-1.5-2.5-2.2-3.7 c3.4-7.2,6.7-14.3,10.1-21.5c0,0.1-0.1,0.1-0.1,0.2c4.3-8.9-0.5-18.3-15.9-27c-9.6-5.5-22.5-10.2-37.7-14.1 c20.6,8.1,30.9,19.2,35.7,25.5c4.2,5.5,5.3,9,4.9,12.3c-0.9,8.3-10.8,13.5-21.2,18.7c-6.9,3.5-17.6,7.9-32,10.3c-1,2-2,3.9-3,5.9 c2.8,5.6,2.5,9.5,2,11.8c-2.6,11.3-19.9,19.8-43.3,18.7c8.6,3.3,43.4,17.6,59.1,54.1c20,46.8-3.4,101.6-39.4,125 c-17.1,11.2-33.1,12.6-58.1,14.8c0,0-59.2,5.2-123.9-26.1c-1.6-0.8-3-1.5-3-1.5c-13.2-6.8-27.9-14.4-41.3-30.5 C56.9,227.9,24,140.7,60.8,110.9c5.6-4.5,16.6-10.8,37.4-9.5c-2.9-2.3-6.7-6-10-11.3c-5.3-8.6-6.5-17-6.7-21.4 C67.6,59,59.6,49.5,58.8,46.9c-0.7-2.5-1.1-4.8-1.2-7.1c-2.4,4.3-2.6,8.7-0.6,13.1c0,0,0,0,0,0c3.3,7.2,6.7,14.4,10,21.5 c-11.6,18.7-17.7,36-20.4,45.3c-0.8,2.7-2.1,7.1-3.4,13.1c-1.6,7.4-2.3,12.6-2.5,14.1c-0.6,4.4-1.1,8.6-1.4,15 c-0.3,5.8-0.3,6.8-0.1,15.9c0,0.1,0.1,5.6,1.1,14.4c0.3,2.3,1,7.6,1.8,12c1.9,9.8,4.1,18,7.4,27.2c1.4,3.9,3.2,8.3,3.8,9.8 c1.5,3.4,3.8,8.6,6.3,13.3c1.5,2.8,4,7.5,6.7,11.7c2.8,4.4,4.2,6.6,8.1,12c3.6,6.4,7.2,12.8,10.8,19.1c2.1,3.8,6.4,7.6,12.8,11.2 c34.4,19.5,119.2,27.7,189.3,18.3c43-5.8,70.5-16.9,77.5-29.1l10.9-19.1c13.3-18,21-35.3,25.1-46.8c0.3-0.9,0.6-1.7,0.9-2.6 c2.8-8.2,4.8-15.7,6.6-24.6c0.9-4.5,1.6-9.7,1.9-12c1-9.1,1.2-14.5,1.2-14.5C411.3,172.3,411.4,169.9,411.3,167.7z"/>\r
<path opacity="0.34" fill="#825333" d="M409.7,147.3c-0.4-3-1.2-8-2.5-14.1c-1.3-5.9-2.6-10.4-3.4-13.1c-3.9-13.5-9.1-24.4-10.8-28 c-2.8-5.9-5.9-11.2-7.2-13.5c-0.7-1.3-1.5-2.5-2.2-3.7c3.4-7.2,6.7-14.3,10.1-21.5c0,0.1-0.1,0.1-0.1,0.2c4.3-8.9-0.5-18.3-15.9-27 c-4.8-2.7-10.5-5.3-16.9-7.7c13.9,8.5,21.5,21.3,18.8,30.9c-1.9,6.8-8.9,11.8-12.3,14.3c-5.7,4.1-11.2,6-14.8,6.9 c2.6,1.6,5.2,3.3,7.9,4.9c0.5,1.6,3.1,9.9-1.5,18.2c-4.1,7.5-12.5,12.1-21.7,11.8c7,1.1,16.8,3.7,25.6,10.8 c22.8,18.3,21.5,52.3,20.7,72.8c-2,50.5-26.4,89.1-42.3,109.7c-0.4,1.9-1,3.9-2,5.9c-5.5,11.4-18,15-21.6,16 c7.2-0.9,18.4-4.2,31.1-10.7c7.9-4,13.3-8.3,15.9-12.8l10.9-19.1c13.3-18,21-35.3,25.1-46.8c3.3-9.3,5.6-17.4,7.5-27.2 c0.9-4.5,1.6-9.7,1.9-12c1-9.1,1.2-14.5,1.2-14.5c0.1-5.8,0.2-8.2,0.1-10.4c0-0.6-0.1-2.6-0.2-5.4 C410.7,154.6,409.9,148.6,409.7,147.3z"/>\r
<path opacity="0.27" fill="#FFFFFF" d="M78,64.9c0.6-0.9,9.1,3.4,10.1,3.9c0.9,0.4,10.3,5.3,9.8,6.4c-0.4,0.8-6.4-0.5-11.8-3.4 C81.6,69.2,77.6,65.6,78,64.9z"/>\r
<path opacity="0.2" fill="#D6B39A" d="M388.6,96.1c0,0,0.3,0.7,1,2.1c0.6,1.3,1.6,3.3,2.6,5.9c1.1,2.5,2.3,5.7,3.6,9.3 c1.3,3.6,2.7,7.8,3.9,12.4c1.3,4.6,2.5,9.6,3.4,15c1,5.4,1.8,11.1,2.2,17c0.1,0.7,0.1,1.5,0.2,2.2c0,0.4,0.1,0.7,0.1,1.2l0,1.1 c0,1.5,0.1,3,0.1,4.5c0.1,3,0.2,6.1,0,9.3c-0.1,1.6-0.1,3.2-0.2,4.7c-0.1,1.6-0.1,3.2-0.3,4.8c-0.3,3.2-0.7,6.3-1,9.5 c-0.5,3.1-1.1,6.3-1.6,9.4c-0.2,1.6-0.7,3.1-1,4.6c-0.4,1.5-0.7,3.1-1.1,4.6c-0.2,0.8-0.3,1.5-0.5,2.3c-0.2,0.7-0.4,1.5-0.6,2.2 c-0.4,1.5-0.9,3-1.3,4.4c-0.8,3-1.9,5.8-2.9,8.6c-0.9,2.8-2.1,5.5-3.2,8.2c-0.6,1.3-1,2.7-1.6,3.9c-0.6,1.3-1.2,2.5-1.7,3.8 c-0.6,1.2-1.1,2.5-1.7,3.7c-0.6,1.2-1.2,2.3-1.8,3.5c-0.6,1.1-1.2,2.3-1.7,3.4c-0.6,1.1-1.2,2.1-1.8,3.2c-0.6,1-1.2,2-1.7,3 c-0.6,1-1.2,1.9-1.7,2.8c-1.1,1.8-2.2,3.6-3.3,5.2c-2.1,3.2-4.1,6-5.7,8.2c-1.7,2.2-3,3.9-3.9,5.1c-0.9,1.2-1.4,1.8-1.4,1.8 s0.4-0.7,1.3-1.9c0.9-1.2,2-3,3.6-5.3c1.5-2.3,3.3-5.1,5.2-8.5c1-1.6,2-3.4,3-5.3c0.5-0.9,1.1-1.9,1.6-2.9c0.5-1,1-2,1.6-3.1 c0.5-1,1.1-2.1,1.7-3.2c0.5-1.1,1.1-2.2,1.6-3.4c0.5-1.1,1.1-2.3,1.7-3.5c0.6-1.2,1-2.4,1.6-3.7c0.5-1.2,1.1-2.5,1.6-3.8 c0.6-1.3,1-2.6,1.5-3.9c1-2.7,2.1-5.3,3-8.1c1.9-5.6,3.6-11.4,5-17.4c0.3-1.5,0.7-3,1-4.5c0.3-1.5,0.7-3,1-4.6 c0.5-3.1,1-6.2,1.5-9.3c0.3-3.1,0.7-6.2,1-9.3c0.2-1.6,0.2-3.1,0.3-4.6c0.1-1.5,0.2-3.1,0.2-4.6c0.2-3.1,0.1-6.2,0.1-9.2 c0-1.5,0-3,0-4.5l0-1.1l-0.1-1.1c0-0.7-0.1-1.5-0.1-2.2c-0.4-5.9-1-11.5-1.8-16.9c-0.8-5.3-1.8-10.3-2.9-14.9 c-1.1-4.6-2.2-8.8-3.3-12.4c-1.1-3.7-2.2-6.9-3.1-9.4c-0.9-2.6-1.7-4.6-2.2-6C388.9,96.8,388.6,96.1,388.6,96.1z"/>\r
<path opacity="0.63" fill="#AD7753" d="M104.1,302.8c-0.6,2.9-0.8,5.7-0.8,8.5c14.3,6.7,34.8,11.9,58.4,15.2c1.2-1.9,2-3.9,2.4-5.9 c0.7-3.3,0.3-7.1-1-10.9c-22.1-2.7-42-6.9-57.6-12.4C105,299,104.5,300.8,104.1,302.8z"/>\r
<path fill="#B78869" d="M376.6,37c-0.7-0.8-1.1-1.2-1.2-1.4c-0.8-0.9-2.9-2.8-6.2-4.9c-1-0.6-2.3-1.5-4-2.4c0,0,0,0,0,0v0 C327.4,6.8,234.1-2.2,156.9,8.2c-55.1,7.4-87.1,22.7-87.2,38.7l0,1.3c0-16,32-31.3,87.2-38.7C234-0.8,327,8.1,365,29.6 c0.1,0.1,0.2,0.1,0.2,0.2c1.7,1,3.1,1.8,4.1,2.5c2.8,1.7,3.9,2.4,4.7,3c0,0,0.1,0,0.1,0.1c0,0,0.2,0.1,0.4,0.3 c0.4,0.3,2.8,2.6,2.9,2.5C377.5,38,377.1,37.6,376.6,37z"/>\r
<ellipse fill="url(#SVGID_1_)" cx="326.1" cy="149.8" rx="25" ry="39.4"/>\r
</svg>\r
`,Kt=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="caustic_acidgold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF1B5"/>
      <stop offset="35%" stop-color="#EDCB72"/>
      <stop offset="70%" stop-color="#C8933D"/>
      <stop offset="100%" stop-color="#85571C"/>
    </linearGradient>
    <linearGradient id="caustic_acidglassOuter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EEF6FF"/>
      <stop offset="100%" stop-color="#88A7D7"/>
    </linearGradient>
    <linearGradient id="caustic_acidglassInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B6D7FF"/>
    </linearGradient>
    <linearGradient id="caustic_acidlid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE9A7"/>
      <stop offset="50%" stop-color="#D8AD56"/>
      <stop offset="100%" stop-color="#A16C27"/>
    </linearGradient>
    <clipPath id="caustic_acidclip">
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>
    </clipPath>
    <linearGradient id="ca_liquid" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8FF7A"/><stop offset="100%" stop-color="#3FB83A"/></linearGradient>
  </defs>

  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#caustic_acidlid)" stroke="url(#caustic_acidgold)" stroke-width="2"/>
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>

  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"
    fill="none" stroke="url(#caustic_acidglassOuter)" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"
    fill="none" stroke="url(#caustic_acidglassInner)" stroke-width="2"/>

  <g clip-path="url(#caustic_acidclip)">
    <path d="M34 98 C44 94 52 102 64 98 C76 94 84 102 94 98 L94 150 L34 150 Z" fill="url(#ca_liquid)" opacity="0.95"/>
    <circle cx="54" cy="116" r="4" fill="#E9FFC4" opacity="0.85"/>
    <circle cx="70" cy="108" r="3" fill="#E9FFC4" opacity="0.85"/>
    <circle cx="76" cy="126" r="5" fill="#E9FFC4" opacity="0.75"/>
    <circle cx="60" cy="132" r="2.5" fill="#E9FFC4" opacity="0.85"/>
    <circle cx="62" cy="84" r="3" fill="none" stroke="#C8FF7A" stroke-width="1.5"/>
    <circle cx="70" cy="72" r="2" fill="none" stroke="#C8FF7A" stroke-width="1.5"/>
    <circle cx="58" cy="66" r="1.5" fill="#C8FF7A"/>
  </g>

  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
</svg>
`,qt=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 408 408" enable-background="new 0 0 408 408" xml:space="preserve">\r
<g>\r
	<g>\r
		\r
			<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -84.4996 203.9998)" fill="currentColor" cx="204" cy="204" rx="204" ry="204"/>\r
		\r
			<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -85.0858 202.5848)" fill="#2C221E" cx="202" cy="204" rx="200" ry="200"/>\r
	</g>\r
	<g>\r
		<g>\r
			<polygon fill="currentColor" points="205.9,217.1 152.5,97.5 158.3,94.9 199.7,187.8 199.7,105.8 205.9,105.8 			"/>\r
			<g>\r
				<path fill="currentColor" d="M202.8,75.4c-4.8,12.9-13,29-21.7,38.9l21.7-7.8c16.5,8.5,20.8,9,21.7,7.8c1.2-1.8-5.5-7.3-12.3-18.4\r
					C207.2,87.9,204.4,80.5,202.8,75.4z"/>\r
			</g>\r
			<g>\r
				<path fill="currentColor" d="M143.3,67.5c10.7,11,26.3,23.5,39.6,29.7l-25.5,1.9l-18.4,17.8C143.2,102.8,144.3,82.8,143.3,67.5z"/>\r
			</g>\r
		</g>\r
	</g>\r
	<g>\r
		<g>\r
			<path fill="currentColor" d="M202.4,47.8h-0.8c-3.2,0-5.9-2.6-5.9-5.9V28.6c0-3.2,2.6-5.9,5.9-5.9h0.8c3.2,0,5.9,2.6,5.9,5.9v13.3\r
				C208.2,45.1,205.6,47.8,202.4,47.8z"/>\r
			<path fill="currentColor" d="M202.4,385.2h-0.8c-3.2,0-5.9-2.6-5.9-5.9v-13.3c0-3.2,2.6-5.9,5.9-5.9h0.8c3.2,0,5.9,2.6,5.9,5.9v13.3\r
				C208.2,382.6,205.6,385.2,202.4,385.2z"/>\r
			<g>\r
				<path fill="currentColor" d="M124.2,68.5l-0.7,0.4c-2.8,1.6-6.4,0.6-8-2.1l-6.6-11.5c-1.6-2.8-0.6-6.4,2.1-8l0.7-0.4\r
					c2.8-1.6,6.4-0.6,8,2.1l6.6,11.5C128,63.3,127,66.9,124.2,68.5z"/>\r
				<path fill="currentColor" d="M292.9,360.8l-0.7,0.4c-2.8,1.6-6.4,0.6-8-2.1l-6.6-11.5c-1.6-2.8-0.6-6.4,2.1-8l0.7-0.4\r
					c2.8-1.6,6.4-0.6,8,2.1l6.6,11.5C296.7,355.5,295.7,359.2,292.9,360.8z"/>\r
			</g>\r
			<g>\r
				<path fill="currentColor" d="M66.9,125.6l-0.4,0.7c-1.6,2.8-5.2,3.8-8,2.1L47,121.7c-2.8-1.6-3.8-5.2-2.1-8l0.4-0.7\r
					c1.6-2.8,5.2-3.8,8-2.1l11.5,6.6C67.5,119.1,68.5,122.8,66.9,125.6z"/>\r
				<path fill="currentColor" d="M359.1,294.3l-0.4,0.7c-1.6,2.8-5.2,3.8-8,2.1l-11.5-6.6c-2.8-1.6-3.8-5.2-2.1-8l0.4-0.7\r
					c1.6-2.8,5.2-3.8,8-2.1l11.5,6.6C359.8,287.9,360.8,291.5,359.1,294.3z"/>\r
			</g>\r
			<g>\r
				<path fill="currentColor" d="M45.8,203.6v0.8c0,3.2-2.6,5.9-5.9,5.9H26.6c-3.2,0-5.9-2.6-5.9-5.9v-0.8c0-3.2,2.6-5.9,5.9-5.9h13.3\r
					C43.1,197.8,45.8,200.4,45.8,203.6z"/>\r
				<path fill="currentColor" d="M383.2,203.6v0.8c0,3.2-2.6,5.9-5.9,5.9h-13.3c-3.2,0-5.9-2.6-5.9-5.9v-0.8c0-3.2,2.6-5.9,5.9-5.9h13.3\r
					C380.6,197.8,383.2,200.4,383.2,203.6z"/>\r
			</g>\r
			<g>\r
				<path fill="currentColor" d="M66.5,281.8l0.4,0.7c1.6,2.8,0.6,6.4-2.1,8l-11.5,6.6c-2.8,1.6-6.4,0.6-8-2.1l-0.4-0.7\r
					c-1.6-2.8-0.6-6.4,2.1-8l11.5-6.6C61.3,278,64.9,279,66.5,281.8z"/>\r
				<path fill="currentColor" d="M358.8,113.1l0.4,0.7c1.6,2.8,0.6,6.4-2.1,8l-11.5,6.6c-2.8,1.6-6.4,0.6-8-2.1l-0.4-0.7\r
					c-1.6-2.8-0.6-6.4,2.1-8l11.5-6.6C353.5,109.3,357.2,110.3,358.8,113.1z"/>\r
			</g>\r
			<g>\r
				<path fill="currentColor" d="M123.6,339.1l0.7,0.4c2.8,1.6,3.8,5.2,2.1,8l-6.6,11.5c-1.6,2.8-5.2,3.8-8,2.1l-0.7-0.4\r
					c-2.8-1.6-3.8-5.2-2.1-8l6.6-11.5C117.1,338.5,120.8,337.5,123.6,339.1z"/>\r
				<path fill="currentColor" d="M292.3,46.9l0.7,0.4c2.8,1.6,3.8,5.2,2.1,8l-6.6,11.5c-1.6,2.8-5.2,3.8-8,2.1l-0.7-0.4\r
					c-2.8-1.6-3.8-5.2-2.1-8l6.6-11.5C285.9,46.2,289.5,45.2,292.3,46.9z"/>\r
			</g>\r
			<path fill="currentColor" d="M205.1,38.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1\r
				C203.7,35.3,205.1,36.7,205.1,38.4z"/>\r
			<path fill="currentColor" d="M205.1,369.6c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1\r
				C203.7,366.5,205.1,367.9,205.1,369.6z"/>\r
			<path fill="currentColor" d="M187.8,39c0.2,1.7-1.1,3.3-2.8,3.4c-1.7,0.2-3.3-1.1-3.4-2.8c-0.2-1.7,1.1-3.3,2.8-3.4\r
				C186.1,36,187.6,37.2,187.8,39z"/>\r
			<path fill="currentColor" d="M222.4,368.4c0.2,1.7-1.1,3.3-2.8,3.4c-1.7,0.2-3.3-1.1-3.4-2.8c-0.2-1.7,1.1-3.3,2.8-3.4\r
				C220.7,365.4,222.2,366.7,222.4,368.4z"/>\r
			<path fill="currentColor" d="M170.6,41.4c0.4,1.7-0.7,3.3-2.4,3.7c-1.7,0.4-3.3-0.7-3.7-2.4c-0.4-1.7,0.7-3.3,2.4-3.7\r
				C168.6,38.6,170.3,39.7,170.6,41.4z"/>\r
			<path fill="currentColor" d="M239.5,365.3c0.4,1.7-0.7,3.3-2.4,3.7c-1.7,0.4-3.3-0.7-3.7-2.4s0.7-3.3,2.4-3.7\r
				C237.5,362.6,239.1,363.7,239.5,365.3z"/>\r
			<path fill="currentColor" d="M153.8,45.5c0.5,1.6-0.4,3.4-2,3.9c-1.6,0.5-3.4-0.4-3.9-2c-0.5-1.6,0.4-3.4,2-3.9\r
				C151.5,43,153.3,43.9,153.8,45.5z"/>\r
			<path fill="currentColor" d="M256.1,360.5c0.5,1.6-0.4,3.4-2,3.9c-1.6,0.5-3.4-0.4-3.9-2c-0.5-1.6,0.4-3.4,2-3.9\r
				C253.9,358,255.6,358.9,256.1,360.5z"/>\r
			<path fill="currentColor" d="M137.5,51.4c0.7,1.6,0,3.4-1.6,4.1c-1.6,0.7-3.4,0-4.1-1.6c-0.7-1.6,0-3.4,1.6-4.1\r
				C134.9,49.1,136.8,49.9,137.5,51.4z"/>\r
			<path fill="currentColor" d="M272.2,354c0.7,1.6,0,3.4-1.6,4.1c-1.6,0.7-3.4,0-4.1-1.6c-0.7-1.6,0-3.4,1.6-4.1\r
				C269.7,351.7,271.5,352.5,272.2,354z"/>\r
			<path fill="currentColor" d="M121.9,59c0.9,1.5,0.4,3.4-1.1,4.3c-1.5,0.9-3.4,0.4-4.3-1.1c-0.9-1.5-0.4-3.4,1.1-4.3\r
				C119.1,57,121,57.5,121.9,59z"/>\r
			<path fill="currentColor" d="M287.5,345.9c0.9,1.5,0.4,3.4-1.1,4.3c-1.5,0.9-3.4,0.4-4.3-1.1c-0.9-1.5-0.4-3.4,1.1-4.3\r
				C284.7,343.9,286.7,344.4,287.5,345.9z"/>\r
			<path fill="currentColor" d="M107.2,68.2c1,1.4,0.7,3.4-0.7,4.4c-1.4,1-3.4,0.7-4.4-0.7c-1-1.4-0.7-3.4,0.7-4.4\r
				C104.2,66.5,106.2,66.8,107.2,68.2z"/>\r
			<path fill="currentColor" d="M301.9,336.2c1,1.4,0.7,3.4-0.7,4.4c-1.4,1-3.4,0.7-4.4-0.7c-1-1.4-0.7-3.4,0.7-4.4\r
				C298.9,334.4,300.9,334.8,301.9,336.2z"/>\r
			<path fill="currentColor" d="M93.5,78.8c1.2,1.3,1.1,3.3-0.2,4.4C92,84.4,90,84.3,88.9,83c-1.2-1.3-1.1-3.3,0.2-4.4\r
				C90.4,77.4,92.3,77.5,93.5,78.8z"/>\r
			<path fill="currentColor" d="M315.1,325c1.2,1.3,1.1,3.3-0.2,4.4c-1.3,1.2-3.3,1.1-4.4-0.2c-1.2-1.3-1.1-3.3,0.2-4.4\r
				C312,323.6,314,323.7,315.1,325z"/>\r
			<path fill="currentColor" d="M81,90.9c1.3,1.2,1.4,3.1,0.2,4.4c-1.2,1.3-3.1,1.4-4.4,0.2c-1.3-1.2-1.4-3.1-0.2-4.4\r
				C77.8,89.8,79.7,89.7,81,90.9z"/>\r
			<path fill="currentColor" d="M327.2,312.5c1.3,1.2,1.4,3.1,0.2,4.4c-1.2,1.3-3.1,1.4-4.4,0.2c-1.3-1.2-1.4-3.1-0.2-4.4\r
				C323.9,311.4,325.9,311.3,327.2,312.5z"/>\r
			<path fill="currentColor" d="M69.8,104.1c1.4,1,1.7,3,0.7,4.4c-1,1.4-3,1.7-4.4,0.7c-1.4-1-1.7-3-0.7-4.4\r
				C66.5,103.4,68.5,103.1,69.8,104.1z"/>\r
			<path fill="currentColor" d="M337.8,298.8c1.4,1,1.7,3,0.7,4.4c-1,1.4-3,1.7-4.4,0.7c-1.4-1-1.7-3-0.7-4.4\r
				C334.5,298.1,336.4,297.8,337.8,298.8z"/>\r
			<path fill="currentColor" d="M60.1,118.5c1.5,0.9,2,2.8,1.1,4.3c-0.9,1.5-2.8,2-4.3,1.1c-1.5-0.9-2-2.8-1.1-4.3\r
				C56.7,118.1,58.6,117.6,60.1,118.5z"/>\r
			<path fill="currentColor" d="M347,284.1c1.5,0.9,2,2.8,1.1,4.3c-0.9,1.5-2.8,2-4.3,1.1c-1.5-0.9-2-2.8-1.1-4.3\r
				C343.6,283.8,345.5,283.2,347,284.1z"/>\r
			<path fill="currentColor" d="M52,133.8c1.6,0.7,2.3,2.5,1.6,4.1c-0.7,1.6-2.5,2.3-4.1,1.6c-1.6-0.7-2.3-2.5-1.6-4.1\r
				C48.5,133.8,50.4,133.1,52,133.8z"/>\r
			<path fill="currentColor" d="M354.6,268.5c1.6,0.7,2.3,2.5,1.6,4.1c-0.7,1.6-2.5,2.3-4.1,1.6c-1.6-0.7-2.3-2.5-1.6-4.1\r
				C351.1,268.5,353,267.8,354.6,268.5z"/>\r
			<path fill="currentColor" d="M45.5,149.8c1.6,0.5,2.5,2.3,2,3.9c-0.5,1.6-2.3,2.5-3.9,2c-1.6-0.5-2.5-2.3-2-3.9\r
				C42,150.2,43.8,149.3,45.5,149.8z"/>\r
			<path fill="currentColor" d="M360.5,252.2c1.6,0.5,2.5,2.3,2,3.9c-0.5,1.6-2.3,2.5-3.9,2c-1.6-0.5-2.5-2.3-2-3.9\r
				C357.1,252.6,358.8,251.7,360.5,252.2z"/>\r
			<path fill="currentColor" d="M40.7,166.5c1.7,0.4,2.8,2,2.4,3.7c-0.4,1.7-2,2.8-3.7,2.4c-1.7-0.4-2.8-2-2.4-3.7\r
				C37.3,167.2,39,166.2,40.7,166.5z"/>\r
			<path fill="currentColor" d="M364.6,235.4c1.7,0.4,2.8,2,2.4,3.7c-0.4,1.7-2,2.8-3.7,2.4c-1.7-0.4-2.8-2-2.4-3.7\r
				C361.3,236.1,363,235,364.6,235.4z"/>\r
			<path fill="currentColor" d="M37.6,183.6c1.7,0.2,3,1.7,2.8,3.4c-0.2,1.7-1.7,3-3.4,2.8c-1.7-0.2-3-1.7-2.8-3.4\r
				C34.4,184.6,35.9,183.4,37.6,183.6z"/>\r
			<path fill="currentColor" d="M367,218.2c1.7,0.2,3,1.7,2.8,3.4c-0.2,1.7-1.7,3-3.4,2.8c-1.7-0.2-3-1.7-2.8-3.4\r
				C363.8,219.3,365.3,218,367,218.2z"/>\r
			<path fill="currentColor" d="M36.4,200.9c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1\r
				C33.3,202.3,34.7,200.9,36.4,200.9z"/>\r
			<path fill="currentColor" d="M367.6,200.9c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1\r
				C364.5,202.3,365.9,200.9,367.6,200.9z"/>\r
			<path fill="currentColor" d="M37,218.2c1.7-0.2,3.3,1.1,3.4,2.8c0.2,1.7-1.1,3.3-2.8,3.4c-1.7,0.2-3.3-1.1-3.4-2.8\r
				C34,219.9,35.2,218.4,37,218.2z"/>\r
			<path fill="currentColor" d="M366.4,183.6c1.7-0.2,3.3,1.1,3.4,2.8c0.2,1.7-1.1,3.3-2.8,3.4c-1.7,0.2-3.3-1.1-3.4-2.8\r
				C363.4,185.3,364.7,183.8,366.4,183.6z"/>\r
			<path fill="currentColor" d="M39.4,235.4c1.7-0.4,3.3,0.7,3.7,2.4c0.4,1.7-0.7,3.3-2.4,3.7c-1.7,0.4-3.3-0.7-3.7-2.4\r
				C36.6,237.4,37.7,235.7,39.4,235.4z"/>\r
			<path fill="currentColor" d="M363.3,166.5c1.7-0.4,3.3,0.7,3.7,2.4c0.4,1.7-0.7,3.3-2.4,3.7s-3.3-0.7-3.7-2.4\r
				C360.6,168.5,361.7,166.9,363.3,166.5z"/>\r
			<path fill="currentColor" d="M43.5,252.2c1.6-0.5,3.4,0.4,3.9,2c0.5,1.6-0.4,3.4-2,3.9c-1.6,0.5-3.4-0.4-3.9-2\r
				C41,254.5,41.9,252.7,43.5,252.2z"/>\r
			<path fill="currentColor" d="M358.5,149.8c1.6-0.5,3.4,0.4,3.9,2c0.5,1.6-0.4,3.4-2,3.9c-1.6,0.5-3.4-0.4-3.9-2\r
				C356,152.1,356.9,150.4,358.5,149.8z"/>\r
			<path fill="currentColor" d="M49.4,268.5c1.6-0.7,3.4,0,4.1,1.6c0.7,1.6,0,3.4-1.6,4.1c-1.6,0.7-3.4,0-4.1-1.6\r
				C47.1,271.1,47.9,269.2,49.4,268.5z"/>\r
			<path fill="currentColor" d="M352,133.8c1.6-0.7,3.4,0,4.1,1.6c0.7,1.6,0,3.4-1.6,4.1c-1.6,0.7-3.4,0-4.1-1.6\r
				C349.7,136.3,350.5,134.5,352,133.8z"/>\r
			<path fill="currentColor" d="M57,284.1c1.5-0.9,3.4-0.4,4.3,1.1c0.9,1.5,0.4,3.4-1.1,4.3c-1.5,0.9-3.4,0.4-4.3-1.1\r
				C55,286.9,55.5,285,57,284.1z"/>\r
			<path fill="currentColor" d="M343.9,118.5c1.5-0.9,3.4-0.4,4.3,1.1c0.9,1.5,0.4,3.4-1.1,4.3c-1.5,0.9-3.4,0.4-4.3-1.1\r
				C341.9,121.3,342.4,119.3,343.9,118.5z"/>\r
			<path fill="currentColor" d="M66.2,298.8c1.4-1,3.4-0.7,4.4,0.7c1,1.4,0.7,3.4-0.7,4.4c-1.4,1-3.4,0.7-4.4-0.7\r
				C64.5,301.8,64.8,299.8,66.2,298.8z"/>\r
			<path fill="currentColor" d="M334.1,104.1c1.4-1,3.4-0.7,4.4,0.7c1,1.4,0.7,3.4-0.7,4.4c-1.4,1-3.4,0.7-4.4-0.7\r
				C332.4,107.1,332.8,105.1,334.1,104.1z"/>\r
			<path fill="currentColor" d="M76.8,312.5c1.3-1.2,3.3-1.1,4.4,0.2c1.2,1.3,1.1,3.3-0.2,4.4c-1.3,1.2-3.3,1.1-4.4-0.2\r
				C75.4,315.6,75.5,313.7,76.8,312.5z"/>\r
			<path fill="currentColor" d="M323,90.9c1.3-1.2,3.3-1.1,4.4,0.2c1.2,1.3,1.1,3.3-0.2,4.4c-1.3,1.2-3.3,1.1-4.4-0.2\r
				C321.6,94,321.7,92,323,90.9z"/>\r
			<path fill="currentColor" d="M88.9,325c1.2-1.3,3.1-1.4,4.4-0.2c1.3,1.2,1.4,3.1,0.2,4.4c-1.2,1.3-3.1,1.4-4.4,0.2\r
				C87.8,328.2,87.7,326.3,88.9,325z"/>\r
			<path fill="currentColor" d="M310.5,78.8c1.2-1.3,3.1-1.4,4.4-0.2c1.3,1.2,1.4,3.1,0.2,4.4c-1.2,1.3-3.1,1.4-4.4,0.2\r
				C309.4,82.1,309.3,80.1,310.5,78.8z"/>\r
			<path fill="currentColor" d="M102.1,336.2c1-1.4,3-1.7,4.4-0.7c1.4,1,1.7,3,0.7,4.4c-1,1.4-3,1.7-4.4,0.7\r
				C101.4,339.5,101.1,337.5,102.1,336.2z"/>\r
			<path fill="currentColor" d="M296.8,68.2c1-1.4,3-1.7,4.4-0.7c1.4,1,1.7,3,0.7,4.4c-1,1.4-3,1.7-4.4,0.7\r
				C296.1,71.5,295.8,69.6,296.8,68.2z"/>\r
			<path fill="currentColor" d="M116.5,345.9c0.9-1.5,2.8-2,4.3-1.1c1.5,0.9,2,2.8,1.1,4.3c-0.9,1.5-2.8,2-4.3,1.1\r
				C116.1,349.3,115.6,347.4,116.5,345.9z"/>\r
			<path fill="currentColor" d="M282.1,59c0.9-1.5,2.8-2,4.3-1.1c1.5,0.9,2,2.8,1.1,4.3c-0.9,1.5-2.8,2-4.3,1.1\r
				C281.8,62.4,281.2,60.5,282.1,59z"/>\r
			<path fill="currentColor" d="M131.8,354c0.7-1.6,2.5-2.3,4.1-1.6c1.6,0.7,2.3,2.5,1.6,4.1c-0.7,1.6-2.5,2.3-4.1,1.6\r
				C131.8,357.5,131.1,355.6,131.8,354z"/>\r
			<path fill="currentColor" d="M266.5,51.4c0.7-1.6,2.5-2.3,4.1-1.6c1.6,0.7,2.3,2.5,1.6,4.1c-0.7,1.6-2.5,2.3-4.1,1.6\r
				C266.5,54.9,265.8,53,266.5,51.4z"/>\r
			<path fill="currentColor" d="M147.8,360.5c0.5-1.6,2.3-2.5,3.9-2c1.6,0.5,2.5,2.3,2,3.9c-0.5,1.6-2.3,2.5-3.9,2\r
				C148.2,364,147.3,362.2,147.8,360.5z"/>\r
			<path fill="currentColor" d="M250.2,45.5c0.5-1.6,2.3-2.5,3.9-2c1.6,0.5,2.5,2.3,2,3.9c-0.5,1.6-2.3,2.5-3.9,2\r
				C250.6,48.9,249.7,47.2,250.2,45.5z"/>\r
			<path fill="currentColor" d="M164.5,365.3c0.4-1.7,2-2.8,3.7-2.4c1.7,0.4,2.8,2,2.4,3.7c-0.4,1.7-2,2.8-3.7,2.4\r
				C165.2,368.7,164.1,367,164.5,365.3z"/>\r
			<path fill="currentColor" d="M233.4,41.4c0.4-1.7,2-2.8,3.7-2.4c1.7,0.4,2.8,2,2.4,3.7c-0.4,1.7-2,2.8-3.7,2.4\r
				C234.1,44.7,233,43,233.4,41.4z"/>\r
			<path fill="currentColor" d="M181.6,368.4c0.2-1.7,1.7-3,3.4-2.8c1.7,0.2,3,1.7,2.8,3.4c-0.2,1.7-1.7,3-3.4,2.8\r
				C182.6,371.6,181.4,370.1,181.6,368.4z"/>\r
			<path fill="currentColor" d="M216.2,39c0.2-1.7,1.7-3,3.4-2.8c1.7,0.2,3,1.7,2.8,3.4c-0.2,1.7-1.7,3-3.4,2.8\r
				C217.3,42.2,216,40.7,216.2,39z"/>\r
		</g>\r
	</g>\r
	<g>\r
		<g>\r
			<path fill="currentColor" d="M217.7,204c0,8.7-7,15.7-15.7,15.7c-8.7,0-15.7-7-15.7-15.7c0-8.7,7-15.7,15.7-15.7\r
				C210.7,188.3,217.7,195.3,217.7,204z"/>\r
		</g>\r
	</g>\r
</g>\r
</svg>\r
`,Jt=`<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#F6E39A"/>\r
      <stop offset="50%" stop-color="#D8B25A"/>\r
      <stop offset="100%" stop-color="#9B6D28"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <circle\r
    cx="32"\r
    cy="32"\r
    r="28"\r
    fill="none"\r
    stroke="url(#gold)"\r
    stroke-width="2"\r
  />\r
\r
  <path\r
    d="M22 22 L42 42"\r
    stroke="url(#gold)"\r
    stroke-width="5"\r
    stroke-linecap="round"\r
  />\r
\r
  <path\r
    d="M42 22 L22 42"\r
    stroke="url(#gold)"\r
    stroke-width="5"\r
    stroke-linecap="round"\r
  />\r
</svg>`,Yt=`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">\r
  <path d="M32 8L56 20L32 32L8 20Z"/>\r
  <path d="M8 32L32 44L56 32"/>\r
  <path d="M8 44L32 56L56 44"/>\r
</svg>\r
`,Xt=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <!-- Gold -->\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#FFF1B5"/>\r
      <stop offset="35%" stop-color="#EDCB72"/>\r
      <stop offset="70%" stop-color="#C8933D"/>\r
      <stop offset="100%" stop-color="#85571C"/>\r
    </linearGradient>\r
\r
    <!-- Glass outline -->\r
    <linearGradient id="glassOuter" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#EEF6FF"/>\r
      <stop offset="100%" stop-color="#88A7D7"/>\r
    </linearGradient>\r
\r
    <!-- Inner glass -->\r
    <linearGradient id="glassInner" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#FFFFFF"/>\r
      <stop offset="100%" stop-color="#B6D7FF"/>\r
    </linearGradient>\r
\r
    <!-- Lid -->\r
    <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFE9A7"/>\r
      <stop offset="50%" stop-color="#D8AD56"/>\r
      <stop offset="100%" stop-color="#A16C27"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Lid -->\r
  <rect\r
    x="36"\r
    y="12"\r
    width="56"\r
    height="18"\r
    rx="5"\r
    fill="url(#lid)"\r
    stroke="url(#gold)"\r
    stroke-width="2"\r
  />\r
\r
  <!-- Lid highlight -->\r
  <rect\r
    x="42"\r
    y="15"\r
    width="44"\r
    height="4"\r
    rx="2"\r
    fill="#FFF5D0"\r
    opacity="0.7"\r
  />\r
\r
  <!-- Bottle Outer -->\r
  <path\r
    d="\r
      M46 30\r
      L46 42\r
      C46 49 34 55 34 72\r
      L34 128\r
      C34 145 46 152 64 152\r
      C82 152 94 145 94 128\r
      L94 72\r
      C94 55 82 49 82 42\r
      L82 30\r
    "\r
    fill="none"\r
    stroke="url(#glassOuter)"\r
    stroke-width="4"\r
    stroke-linejoin="round"\r
  />\r
\r
  <!-- Bottle Inner -->\r
  <path\r
    d="\r
      M50 34\r
      L50 44\r
      C50 50 40 57 40 72\r
      L40 124\r
      C40 137 49 144 64 144\r
      C79 144 88 137 88 124\r
      L88 72\r
      C88 57 78 50 78 44\r
      L78 34\r
    "\r
    fill="none"\r
    stroke="url(#glassInner)"\r
    stroke-width="2"\r
  />\r
\r
  <!-- Glass highlight -->\r
  <path\r
    d="\r
      M46 52\r
      C42 60 42 72 42 90\r
      C42 105 45 116 52 126\r
    "\r
    fill="none"\r
    stroke="#FFFFFF"\r
    stroke-width="3"\r
    stroke-linecap="round"\r
    opacity="0.85"\r
  />\r
\r
  <!-- Dragon teeth -->\r
  <g fill="#F7E6C0" stroke="url(#gold)" stroke-width="1.5">\r
\r
    <path d="M52 122 L58 78 L64 122 Z"/>\r
    <path d="M64 124 L70 68 L76 124 Z"/>\r
\r
    <path d="M43 125 L47 88 L52 125 Z"/>\r
    <path d="M77 125 L82 86 L87 125 Z"/>\r
\r
    <path d="M56 132 L61 100 L66 132 Z"/>\r
    <path d="M68 132 L73 96 L78 132 Z"/>\r
\r
  </g>\r
\r
  <!-- Internal magic dust -->\r
  <g fill="#FFEBA8">\r
\r
    <circle cx="50" cy="70" r="1.5"/>\r
    <circle cx="58" cy="60" r="1"/>\r
    <circle cx="74" cy="72" r="1.8"/>\r
\r
    <circle cx="80" cy="54" r="1.2"/>\r
    <circle cx="65" cy="48" r="1"/>\r
\r
    <circle cx="52" cy="96" r="1"/>\r
    <circle cx="83" cy="112" r="1.4"/>\r
\r
  </g>\r
\r
  <!-- Sparkles -->\r
  <g stroke="#FFF5CC" stroke-width="1.5">\r
\r
    <path d="M52 56 L52 62"/>\r
    <path d="M49 59 L55 59"/>\r
\r
    <path d="M79 88 L79 94"/>\r
    <path d="M76 91 L82 91"/>\r
\r
    <path d="M62 78 L62 82"/>\r
    <path d="M60 80 L64 80"/>\r
\r
  </g>\r
</svg>`,Zt=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="essence_voidgold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF1B5"/>
      <stop offset="35%" stop-color="#EDCB72"/>
      <stop offset="70%" stop-color="#C8933D"/>
      <stop offset="100%" stop-color="#85571C"/>
    </linearGradient>
    <linearGradient id="essence_voidglassOuter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EEF6FF"/>
      <stop offset="100%" stop-color="#88A7D7"/>
    </linearGradient>
    <linearGradient id="essence_voidglassInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B6D7FF"/>
    </linearGradient>
    <linearGradient id="essence_voidlid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE9A7"/>
      <stop offset="50%" stop-color="#D8AD56"/>
      <stop offset="100%" stop-color="#A16C27"/>
    </linearGradient>
    <clipPath id="essence_voidclip">
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>
    </clipPath>
    <radialGradient id="ev_orb" cx="0.4" cy="0.35" r="0.8"><stop offset="0%" stop-color="#C79BFF"/><stop offset="55%" stop-color="#5B2BB0"/><stop offset="100%" stop-color="#12062B"/></radialGradient>
  </defs>

  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#essence_voidlid)" stroke="url(#essence_voidgold)" stroke-width="2"/>
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>

  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"
    fill="none" stroke="url(#essence_voidglassOuter)" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"
    fill="none" stroke="url(#essence_voidglassInner)" stroke-width="2"/>

  <g clip-path="url(#essence_voidclip)">
    <circle cx="64" cy="100" r="24" fill="url(#ev_orb)" stroke="#D9BFFF" stroke-width="1.5"/>
    <path d="M44 100 C50 88 60 90 64 100 C68 110 78 112 84 100" fill="none" stroke="#EBDDFF" stroke-width="1.5" opacity="0.8"/>
    <ellipse cx="64" cy="100" rx="30" ry="8" fill="none" stroke="url(#essence_voidgold)" stroke-width="1.5" transform="rotate(-20 64 100)"/>
    <circle cx="52" cy="76" r="1.5" fill="#FFFFFF"/>
    <circle cx="78" cy="70" r="1.2" fill="#FFFFFF"/>
    <circle cx="66" cy="62" r="1" fill="#FFFFFF"/>
    <path d="M54 121 L54 127" stroke="#FFF5CC" stroke-width="1.5"/>
    <path d="M51 124 L57 124" stroke="#FFF5CC" stroke-width="1.5"/>
  </g>

  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
</svg>
`,Qt=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="fdgold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#FFF1B5"/>\r
      <stop offset="35%" stop-color="#EDCB72"/>\r
      <stop offset="70%" stop-color="#C8933D"/>\r
      <stop offset="100%" stop-color="#85571C"/>\r
    </linearGradient>\r
    <linearGradient id="fdglassOuter" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#EEF6FF"/>\r
      <stop offset="100%" stop-color="#88A7D7"/>\r
    </linearGradient>\r
    <linearGradient id="fdglassInner" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#FFFFFF"/>\r
      <stop offset="100%" stop-color="#B6D7FF"/>\r
    </linearGradient>\r
    <linearGradient id="fdlid" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFE9A7"/>\r
      <stop offset="50%" stop-color="#D8AD56"/>\r
      <stop offset="100%" stop-color="#A16C27"/>\r
    </linearGradient>\r
    <linearGradient id="fddust" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFD6F5"/>\r
      <stop offset="100%" stop-color="#C77DFF"/>\r
    </linearGradient>\r
    <radialGradient id="fdglow" cx="0.5" cy="0.5" r="0.5">\r
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>\r
      <stop offset="100%" stop-color="#FF9BE8" stop-opacity="0"/>\r
    </radialGradient>\r
    <clipPath id="fdclip">\r
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>\r
    </clipPath>\r
  </defs>\r
\r
  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#fdlid)" stroke="url(#fdgold)" stroke-width="2"/>\r
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>\r
\r
  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"\r
    fill="none" stroke="url(#fdglassOuter)" stroke-width="4" stroke-linejoin="round"/>\r
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"\r
    fill="none" stroke="url(#fdglassInner)" stroke-width="2"/>\r
\r
  <g clip-path="url(#fdclip)">\r
    <circle cx="64" cy="92" r="26" fill="url(#fdglow)"/>\r
    <path d="M40 112 C48 104 54 116 64 108 C74 100 80 114 88 106 L88 146 L40 146 Z" fill="url(#fddust)" opacity="0.95"/>\r
    <path d="M40 124 C50 118 56 128 66 122 C76 116 82 126 88 120 L88 146 L40 146 Z" fill="#E7A8FF" opacity="0.9"/>\r
    <g fill="#FFFFFF">\r
      <circle cx="52" cy="98" r="2"/>\r
      <circle cx="70" cy="90" r="2.4"/>\r
      <circle cx="78" cy="104" r="1.6"/>\r
      <circle cx="58" cy="80" r="1.4"/>\r
      <circle cx="72" cy="70" r="1.2"/>\r
      <circle cx="48" cy="116" r="1.2"/>\r
      <circle cx="82" cy="118" r="1.4"/>\r
    </g>\r
    <g stroke="#FFF5CC" stroke-width="1.5" stroke-linecap="round">\r
      <path d="M62 78 L62 90"/>\r
      <path d="M56 84 L68 84"/>\r
      <path d="M78 66 L78 72"/>\r
      <path d="M75 69 L81 69"/>\r
      <path d="M50 66 L50 72"/>\r
      <path d="M47 69 L53 69"/>\r
    </g>\r
  </g>\r
\r
  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>\r
</svg>\r
`,$t=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="frost_lotusgold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF1B5"/>
      <stop offset="35%" stop-color="#EDCB72"/>
      <stop offset="70%" stop-color="#C8933D"/>
      <stop offset="100%" stop-color="#85571C"/>
    </linearGradient>
    <linearGradient id="frost_lotusglassOuter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EEF6FF"/>
      <stop offset="100%" stop-color="#88A7D7"/>
    </linearGradient>
    <linearGradient id="frost_lotusglassInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B6D7FF"/>
    </linearGradient>
    <linearGradient id="frost_lotuslid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE9A7"/>
      <stop offset="50%" stop-color="#D8AD56"/>
      <stop offset="100%" stop-color="#A16C27"/>
    </linearGradient>
    <clipPath id="frost_lotusclip">
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>
    </clipPath>
    <linearGradient id="fl_petal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F4FCFF"/><stop offset="100%" stop-color="#7CC8F0"/></linearGradient>
  </defs>

  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#frost_lotuslid)" stroke="url(#frost_lotusgold)" stroke-width="2"/>
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>

  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"
    fill="none" stroke="url(#frost_lotusglassOuter)" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"
    fill="none" stroke="url(#frost_lotusglassInner)" stroke-width="2"/>

  <g clip-path="url(#frost_lotusclip)">
    <path d="M64 130 C54 114 54 96 64 80 C74 96 74 114 64 130 Z" fill="url(#fl_petal)" stroke="#EAFBFF" stroke-width="1.5"/>
    <path d="M64 132 C50 128 42 114 44 98 C56 102 63 114 64 132 Z" fill="#9FE0FF" stroke="#EAFBFF" stroke-width="1.5"/>
    <path d="M64 132 C78 128 86 114 84 98 C72 102 65 114 64 132 Z" fill="#9FE0FF" stroke="#EAFBFF" stroke-width="1.5"/>
    <path d="M64 136 C48 138 40 128 38 116 C50 116 60 122 64 136 Z" fill="#D8F4FF" stroke="#FFFFFF" stroke-width="1.5"/>
    <path d="M64 136 C80 138 88 128 90 116 C78 116 68 122 64 136 Z" fill="#D8F4FF" stroke="#FFFFFF" stroke-width="1.5"/>
    <path d="M52 66 L55 72 L52 78 L49 72 Z" fill="#FFFFFF"/>
    <path d="M78 62 L81 68 L78 74 L75 68 Z" fill="#DFF7FF"/>
    <path d="M64 61 L64 67" stroke="#FFF5CC" stroke-width="1.5"/>
    <path d="M61 64 L67 64" stroke="#FFF5CC" stroke-width="1.5"/>
  </g>

  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
</svg>
`,en=`<svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 204.2 157.3">\r
  <defs>\r
    <radialGradient id="heartBody" cx="50%" cy="38%" r="70%">\r
      <stop offset="0" stop-color="#ff5a3c"/>\r
      <stop offset="0.55" stop-color="#d4161c"/>\r
      <stop offset="1" stop-color="#7d0610"/>\r
    </radialGradient>\r
    <linearGradient id="heartRim" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0" stop-color="#ffd27a"/>\r
      <stop offset="0.5" stop-color="#b8731f"/>\r
      <stop offset="1" stop-color="#6b3a0c"/>\r
    </linearGradient>\r
    <linearGradient id="heartShine" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0" stop-color="#fff" stop-opacity="0.85"/>\r
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>\r
    </linearGradient>\r
  </defs>\r
  <path fill="url(#heartBody)" stroke="url(#heartRim)" stroke-width="6" stroke-linejoin="round"\r
    d="M201.9,43.4C196.3,24.8,177.8,3.9,150.4,2c-1.3-0.1-2.6-0.1-3.9-0.1c-17.1,0-33.2,7.5-44.4,20.7C94.7,13.7,80.5,0.7,59.3,0c-0.6,0-1.2,0-1.8,0c-28,0-49,21.9-55.4,43.5c-5.7,19.7,1.3,36.4,4.7,44.4c10.9,25.8,37,45.1,90.1,66.8l3.3,2.6l3.9-1.4c0.9-0.3,1.7-0.6,2.3-1c53.5-21.8,79.8-41.2,90.7-67C200.6,79.8,207.8,62.8,201.9,43.4z"/>\r
  <path fill="none" stroke="#ff8a6a" stroke-opacity="0.55" stroke-width="3"\r
    d="M30,92C18,76,12,62,16,46C22,26,38,14,57,14"/>\r
  <path fill="url(#heartShine)"\r
    d="M30,40C34,26,46,18,60,19C74,20,82,30,84,40C70,32,48,32,30,40Z"/>\r
  <ellipse cx="156" cy="34" rx="14" ry="8" fill="#fff" fill-opacity="0.35" transform="rotate(-25 156 34)"/>\r
</svg>\r
`,tn=`<svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 204.2 157.3">\r
  <defs>\r
    <linearGradient id="heartEmptyBody" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0" stop-color="#2a1a1c"/>\r
      <stop offset="1" stop-color="#100a0b"/>\r
    </linearGradient>\r
    <linearGradient id="heartEmptyRim" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0" stop-color="#7a6a58"/>\r
      <stop offset="1" stop-color="#3a3028"/>\r
    </linearGradient>\r
  </defs>\r
  <path fill="url(#heartEmptyBody)" stroke="url(#heartEmptyRim)" stroke-width="6" stroke-linejoin="round"\r
    d="M201.9,43.4C196.3,24.8,177.8,3.9,150.4,2c-1.3-0.1-2.6-0.1-3.9-0.1c-17.1,0-33.2,7.5-44.4,20.7C94.7,13.7,80.5,0.7,59.3,0c-0.6,0-1.2,0-1.8,0c-28,0-49,21.9-55.4,43.5c-5.7,19.7,1.3,36.4,4.7,44.4c10.9,25.8,37,45.1,90.1,66.8l3.3,2.6l3.9-1.4c0.9-0.3,1.7-0.6,2.3-1c53.5-21.8,79.8-41.2,90.7-67C200.6,79.8,207.8,62.8,201.9,43.4z"/>\r
</svg>\r
`,nn=`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M30 8L37 27L56 34L37 41L30 60L23 41L4 34L23 27Z"/>
  <path d="M52 6v10M47 11h10"/>
  <path d="M10 8v6M7 11h6"/>
</svg>
`,rn=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mandrake_rootgold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF1B5"/>
      <stop offset="35%" stop-color="#EDCB72"/>
      <stop offset="70%" stop-color="#C8933D"/>
      <stop offset="100%" stop-color="#85571C"/>
    </linearGradient>
    <linearGradient id="mandrake_rootglassOuter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EEF6FF"/>
      <stop offset="100%" stop-color="#88A7D7"/>
    </linearGradient>
    <linearGradient id="mandrake_rootglassInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B6D7FF"/>
    </linearGradient>
    <linearGradient id="mandrake_rootlid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE9A7"/>
      <stop offset="50%" stop-color="#D8AD56"/>
      <stop offset="100%" stop-color="#A16C27"/>
    </linearGradient>
    <clipPath id="mandrake_rootclip">
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>
    </clipPath>
    <linearGradient id="mr_root" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E9C791"/><stop offset="100%" stop-color="#9A6A38"/></linearGradient>
  </defs>

  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#mandrake_rootlid)" stroke="url(#mandrake_rootgold)" stroke-width="2"/>
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>

  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"
    fill="none" stroke="url(#mandrake_rootglassOuter)" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"
    fill="none" stroke="url(#mandrake_rootglassInner)" stroke-width="2"/>

  <g clip-path="url(#mandrake_rootclip)">
    <path d="M64 92 C58 74 50 70 45 72 C49 82 56 90 64 92 Z" fill="#6FCB5A" stroke="#C9F2A8" stroke-width="1.2"/>
    <path d="M64 92 C70 72 80 68 85 70 C81 82 72 90 64 92 Z" fill="#6FCB5A" stroke="#C9F2A8" stroke-width="1.2"/>
    <path d="M64 92 C61 76 63 66 64 58 C67 68 67 80 64 92 Z" fill="#8EE070" stroke="#C9F2A8" stroke-width="1.2"/>
    <path d="M64 92 C53 94 51 108 55 120 C51 126 46 130 44 136 C50 134 55 132 59 130 C60 134 60 138 62 142 C63 144 65 144 66 142 C68 138 68 134 69 130 C73 132 78 134 84 136 C82 130 77 126 73 120 C77 108 75 94 64 92 Z" fill="url(#mr_root)" stroke="url(#mandrake_rootgold)" stroke-width="1.5"/>
    <path d="M58 106 L62 108 M70 106 L66 108" stroke="#5A3A1A" stroke-width="2" stroke-linecap="round"/>
    <path d="M60 116 Q64 120 68 116" fill="none" stroke="#5A3A1A" stroke-width="2" stroke-linecap="round"/>
  </g>

  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
</svg>
`,an=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 277 425">\r
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
`,on=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 426.5 278.3">\r
<linearGradient id="parchment_2_svg" gradientUnits="userSpaceOnUse" x1="43.1746" y1="-0.2991" x2="366.1746" y2="267.7009">\r
	<stop  offset="0" style="stop-color:#FFFFFF"/>\r
	<stop  offset="1" style="stop-color:#939393"/>\r
</linearGradient>\r
<path fill="url(#parchment_2_svg)" stroke="#351E13" d="M118.4,0.7c-9.9,1.4-20.4,2.4-31.5,3c-26.2,1.4-49.8-0.2-70-3\r
	c-1.2,0-2.8,0.1-4.5,0.6C9,2.3,6,4.4,4,7.2c2,4.6,3.6,9.4,5.2,14.2c0.6,1.7,0.2,3.9-2,3.6c-2.3-0.3-4.1-3.1-4.7-5\r
	c-0.5-1.5-1-3.1-1.6-4.6c0,0.4,0,0.8,0,1.3c2.3,8.1,4.6,19.8,4,34c-0.4,9.7-2.2,18-4,24.4c0.9,0.2,2.1,0.8,3.5,1.6\r
	c2,1,3.9,3.5,4.1,5.8c0.1,2-1.2,3.2-3.1,2.2c-0.7-0.4-1.3-0.7-2-1c1.3,3.5,3.4,6.5,5.7,9.5c1,1.3,2.7,6.8-0.9,5.9\r
	c-2.5-0.6-5-1.3-7.4-2.1c4.5,14.3,8.7,32.9,10,54.8c2.1,34.2-4.2,62.3-9.9,80.9c0.6-0.6,2.3-1.2,4.1-2.1c3.5-1.7,8.9,6.6,5.7,8.2\r
	s-6.8,3.2-9.8,5.4v17.5c0,0.2,0,0.3,0,0.5c0.6-0.9,1.3-1.8,2.1-2.6c0.6-0.6,1.8-0.2,2.4,0.1c1.1,0.5,2,1.5,2.7,2.4\r
	c1.1,1.6,2.2,4.1,0.7,5.7c-1.5,1.5-2.4,3.2-3.4,5.1c3,2.9,7,4.8,11.5,4.8h57.4c0.1-2.3,0.3-4.4,1.2-6.5c0.3-0.5,0.6-0.7,1.2-0.8\r
	c6.3,0.1,11.9,2.1,17.8,4c1.6,0.6,3.1,1.8,4,3.3c5.5-1.9,13.9-4,24.4-4c10.3,0,18.6,2.2,24,4l0.1-0.1c7.7-5.8,15.6-11.3,24-16\r
	c3.4-1.9,8.9,6.4,5.7,8.2c-4.4,2.5-8.6,5.1-12.7,7.9h225.2c-2.1-1.9-4-4-5.6-6.5c-0.8-1.2-2.5-4.4-0.7-5.6s4.2,1.2,5.1,2.5\r
	c2.5,4,6.5,6.4,10.3,9.1c0.2,0.1,0.3,0.3,0.5,0.4h1.7c-0.4-1.4-0.4-3.1,1.2-3.4c1.9-0.3,3.8,1.7,4.8,3.4h3.4\r
	c7.2,0,13.2-4.7,15.3-11.2c-0.5-0.5-1.1-1-1.7-1.4c-1.3-0.9-5.1-6.2-2.4-7.5c0.5-0.2,0.9-0.3,1.4-0.4c-2.1-4.2-2.9-8.6-0.2-12.6\r
	c-0.8-1.4-1.6-2.9-2.3-4.5c-2.9-6.1,3.7-5.2,5.8-0.8c0,0.1,0.1,0.2,0.1,0.2c-3.3-4.7-5.9-9.3-8-13.8c-20.5-44-0.3-92.3,8-109.6\r
	c-1.9-0.8-3.4-1.7-4.2-2.9c-7.2-10.3-2.7-22.9,4.2-32.5v-64c0-1.5-0.2-3-0.6-4.4c-4,3.5-9.8,4.8-16,3.7c-2.6-0.4-5.5-4.4-5-7.1\r
	c0.6-2.9,1.7-5.7,3-8.2H280.8c0.6,1.5,1,3.1,1.4,4.7s0.3,4-2,3.6c-2.2-0.4-4.2-3-4.7-5c-0.3-1.1-0.6-2.2-0.9-3.3\r
	c-33.4,2.2-69,3.1-106.7,2c-14.6-0.4-28.8-1.1-42.7-2c0.2,0.5,0.3,1.5,0.3,2.8c0,0.6-0.3,2-1,2.3C124.1,6.1,122.7,6.2,118.4,0.7z"/>\r
<linearGradient id="parchment_2_svg_2" gradientUnits="userSpaceOnUse" x1="202.3793" y1="5.6" x2="223.3793" y2="260.6">\r
	<stop  offset="0" style="stop-color:#FFFFFF"/>\r
	<stop  offset="1" style="stop-color:#939393"/>\r
</linearGradient>\r
<path opacity="0.56" fill="url(#parchment_2_svg_2)" stroke="#351E13" d="M118.4,0.7c-9.9,1.4-20.4,2.4-31.5,3c-26.2,1.4-49.8-0.2-70-3\r
	c-1.2,0-2.8,0.1-4.5,0.6C9,2.3,6,4.4,4,7.2c2,4.6,3.6,9.4,5.2,14.2c0.6,1.7,0.2,3.9-2,3.6c-2.3-0.3-4.1-3.1-4.7-5\r
	c-0.5-1.5-1-3.1-1.6-4.6c0,0.4,0,0.8,0,1.3c2.3,8.1,4.6,19.8,4,34c-0.4,9.7-2.2,18-4,24.4c0.9,0.2,2.1,0.8,3.5,1.6\r
	c2,1,3.9,3.5,4.1,5.8c0.1,2-1.2,3.2-3.1,2.2c-0.7-0.4-1.3-0.7-2-1c1.3,3.5,3.4,6.5,5.7,9.5c1,1.3,2.7,6.8-0.9,5.9\r
	c-2.5-0.6-5-1.3-7.4-2.1c4.5,14.3,8.7,32.9,10,54.8c2.1,34.2-4.2,62.3-9.9,80.9c0.6-0.6,2.3-1.2,4.1-2.1c3.5-1.7,8.9,6.6,5.7,8.2\r
	c-3.2,1.6-6.8,3.2-9.8,5.4v17.5c0,0.2,0,0.3,0,0.5c0.6-0.9,1.3-1.8,2.1-2.6c0.6-0.6,1.8-0.2,2.4,0.1c1.1,0.5,2,1.5,2.7,2.4\r
	c1.1,1.6,2.2,4.1,0.7,5.7c-1.5,1.5-2.4,3.2-3.4,5.1c3,2.9,7,4.8,11.5,4.8h57.4c0.1-2.3,0.3-4.4,1.2-6.5c0.3-0.5,0.6-0.7,1.2-0.8\r
	c6.3,0.1,11.9,2.1,17.8,4c1.6,0.6,3.1,1.8,4,3.3c5.5-1.9,13.9-4,24.4-4c10.3,0,18.6,2.2,24,4l0.1-0.1c7.7-5.8,15.6-11.3,24-16\r
	c3.4-1.9,8.9,6.4,5.7,8.2c-4.4,2.5-8.6,5.1-12.7,7.9h225.2c-2.1-1.9-4-4-5.6-6.5c-0.8-1.2-2.5-4.4-0.7-5.6s4.2,1.2,5.1,2.5\r
	c2.5,4,6.5,6.4,10.3,9.1c0.2,0.1,0.3,0.3,0.5,0.4h1.7c-0.4-1.4-0.4-3.1,1.2-3.4c1.9-0.3,3.8,1.7,4.8,3.4h3.4\r
	c7.2,0,13.2-4.7,15.3-11.2c-0.5-0.5-1.1-1-1.7-1.4c-1.3-0.9-5.1-6.2-2.4-7.5c0.5-0.2,0.9-0.3,1.4-0.4c-2.1-4.2-2.9-8.6-0.2-12.6\r
	c-0.8-1.4-1.6-2.9-2.3-4.5c-2.9-6.1,3.7-5.2,5.8-0.8c0,0.1,0.1,0.2,0.1,0.2c-3.3-4.7-5.9-9.3-8-13.8c-20.5-44-0.3-92.3,8-109.6\r
	c-1.9-0.8-3.4-1.7-4.2-2.9c-7.2-10.3-2.7-22.9,4.2-32.5v-64c0-1.5-0.2-3-0.6-4.4c-4,3.5-9.8,4.8-16,3.7c-2.6-0.4-5.5-4.4-5-7.1\r
	c0.6-2.9,1.7-5.7,3-8.2H280.8c0.6,1.5,1,3.1,1.4,4.7s0.3,4-2,3.6c-2.2-0.4-4.2-3-4.7-5c-0.3-1.1-0.6-2.2-0.9-3.3\r
	c-33.4,2.2-69,3.1-106.7,2c-14.6-0.4-28.8-1.1-42.7-2c0.2,0.5,0.3,1.5,0.3,2.8c0,0.6-0.3,2-1,2.3C124.1,6.1,122.7,6.2,118.4,0.7z"/>\r
</svg>\r
`,sn=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 426.5 278.3">\r
<linearGradient id="parchment_2_svg" gradientUnits="userSpaceOnUse" x1="43.1746" y1="-0.2991" x2="366.1746" y2="267.7009">\r
	<stop  offset="0" style="stop-color:#FFFFFF"/>\r
	<stop  offset="1" style="stop-color:#939393"/>\r
</linearGradient>\r
<path fill="url(#parchment_2_svg)" stroke="#351E13" d="M118.4,0.7c-9.9,1.4-20.4,2.4-31.5,3c-26.2,1.4-49.8-0.2-70-3\r
	c-1.2,0-2.8,0.1-4.5,0.6C9,2.3,6,4.4,4,7.2c2,4.6,3.6,9.4,5.2,14.2c0.6,1.7,0.2,3.9-2,3.6c-2.3-0.3-4.1-3.1-4.7-5\r
	c-0.5-1.5-1-3.1-1.6-4.6c0,0.4,0,0.8,0,1.3c2.3,8.1,4.6,19.8,4,34c-0.4,9.7-2.2,18-4,24.4c0.9,0.2,2.1,0.8,3.5,1.6\r
	c2,1,3.9,3.5,4.1,5.8c0.1,2-1.2,3.2-3.1,2.2c-0.7-0.4-1.3-0.7-2-1c1.3,3.5,3.4,6.5,5.7,9.5c1,1.3,2.7,6.8-0.9,5.9\r
	c-2.5-0.6-5-1.3-7.4-2.1c4.5,14.3,8.7,32.9,10,54.8c2.1,34.2-4.2,62.3-9.9,80.9c0.6-0.6,2.3-1.2,4.1-2.1c3.5-1.7,8.9,6.6,5.7,8.2\r
	s-6.8,3.2-9.8,5.4v17.5c0,0.2,0,0.3,0,0.5c0.6-0.9,1.3-1.8,2.1-2.6c0.6-0.6,1.8-0.2,2.4,0.1c1.1,0.5,2,1.5,2.7,2.4\r
	c1.1,1.6,2.2,4.1,0.7,5.7c-1.5,1.5-2.4,3.2-3.4,5.1c3,2.9,7,4.8,11.5,4.8h57.4c0.1-2.3,0.3-4.4,1.2-6.5c0.3-0.5,0.6-0.7,1.2-0.8\r
	c6.3,0.1,11.9,2.1,17.8,4c1.6,0.6,3.1,1.8,4,3.3c5.5-1.9,13.9-4,24.4-4c10.3,0,18.6,2.2,24,4l0.1-0.1c7.7-5.8,15.6-11.3,24-16\r
	c3.4-1.9,8.9,6.4,5.7,8.2c-4.4,2.5-8.6,5.1-12.7,7.9h225.2c-2.1-1.9-4-4-5.6-6.5c-0.8-1.2-2.5-4.4-0.7-5.6s4.2,1.2,5.1,2.5\r
	c2.5,4,6.5,6.4,10.3,9.1c0.2,0.1,0.3,0.3,0.5,0.4h1.7c-0.4-1.4-0.4-3.1,1.2-3.4c1.9-0.3,3.8,1.7,4.8,3.4h3.4\r
	c7.2,0,13.2-4.7,15.3-11.2c-0.5-0.5-1.1-1-1.7-1.4c-1.3-0.9-5.1-6.2-2.4-7.5c0.5-0.2,0.9-0.3,1.4-0.4c-2.1-4.2-2.9-8.6-0.2-12.6\r
	c-0.8-1.4-1.6-2.9-2.3-4.5c-2.9-6.1,3.7-5.2,5.8-0.8c0,0.1,0.1,0.2,0.1,0.2c-3.3-4.7-5.9-9.3-8-13.8c-20.5-44-0.3-92.3,8-109.6\r
	c-1.9-0.8-3.4-1.7-4.2-2.9c-7.2-10.3-2.7-22.9,4.2-32.5v-64c0-1.5-0.2-3-0.6-4.4c-4,3.5-9.8,4.8-16,3.7c-2.6-0.4-5.5-4.4-5-7.1\r
	c0.6-2.9,1.7-5.7,3-8.2H280.8c0.6,1.5,1,3.1,1.4,4.7s0.3,4-2,3.6c-2.2-0.4-4.2-3-4.7-5c-0.3-1.1-0.6-2.2-0.9-3.3\r
	c-33.4,2.2-69,3.1-106.7,2c-14.6-0.4-28.8-1.1-42.7-2c0.2,0.5,0.3,1.5,0.3,2.8c0,0.6-0.3,2-1,2.3C124.1,6.1,122.7,6.2,118.4,0.7z"/>\r
<linearGradient id="parchment_2_svg_2" gradientUnits="userSpaceOnUse" x1="202.3793" y1="5.6" x2="223.3793" y2="260.6">\r
	<stop  offset="0" style="stop-color:#FFFFFF"/>\r
	<stop  offset="1" style="stop-color:#939393"/>\r
</linearGradient>\r
<path opacity="0.56" fill="url(#parchment_2_svg_2)" stroke="#351E13" d="M118.4,0.7c-9.9,1.4-20.4,2.4-31.5,3c-26.2,1.4-49.8-0.2-70-3\r
	c-1.2,0-2.8,0.1-4.5,0.6C9,2.3,6,4.4,4,7.2c2,4.6,3.6,9.4,5.2,14.2c0.6,1.7,0.2,3.9-2,3.6c-2.3-0.3-4.1-3.1-4.7-5\r
	c-0.5-1.5-1-3.1-1.6-4.6c0,0.4,0,0.8,0,1.3c2.3,8.1,4.6,19.8,4,34c-0.4,9.7-2.2,18-4,24.4c0.9,0.2,2.1,0.8,3.5,1.6\r
	c2,1,3.9,3.5,4.1,5.8c0.1,2-1.2,3.2-3.1,2.2c-0.7-0.4-1.3-0.7-2-1c1.3,3.5,3.4,6.5,5.7,9.5c1,1.3,2.7,6.8-0.9,5.9\r
	c-2.5-0.6-5-1.3-7.4-2.1c4.5,14.3,8.7,32.9,10,54.8c2.1,34.2-4.2,62.3-9.9,80.9c0.6-0.6,2.3-1.2,4.1-2.1c3.5-1.7,8.9,6.6,5.7,8.2\r
	c-3.2,1.6-6.8,3.2-9.8,5.4v17.5c0,0.2,0,0.3,0,0.5c0.6-0.9,1.3-1.8,2.1-2.6c0.6-0.6,1.8-0.2,2.4,0.1c1.1,0.5,2,1.5,2.7,2.4\r
	c1.1,1.6,2.2,4.1,0.7,5.7c-1.5,1.5-2.4,3.2-3.4,5.1c3,2.9,7,4.8,11.5,4.8h57.4c0.1-2.3,0.3-4.4,1.2-6.5c0.3-0.5,0.6-0.7,1.2-0.8\r
	c6.3,0.1,11.9,2.1,17.8,4c1.6,0.6,3.1,1.8,4,3.3c5.5-1.9,13.9-4,24.4-4c10.3,0,18.6,2.2,24,4l0.1-0.1c7.7-5.8,15.6-11.3,24-16\r
	c3.4-1.9,8.9,6.4,5.7,8.2c-4.4,2.5-8.6,5.1-12.7,7.9h225.2c-2.1-1.9-4-4-5.6-6.5c-0.8-1.2-2.5-4.4-0.7-5.6s4.2,1.2,5.1,2.5\r
	c2.5,4,6.5,6.4,10.3,9.1c0.2,0.1,0.3,0.3,0.5,0.4h1.7c-0.4-1.4-0.4-3.1,1.2-3.4c1.9-0.3,3.8,1.7,4.8,3.4h3.4\r
	c7.2,0,13.2-4.7,15.3-11.2c-0.5-0.5-1.1-1-1.7-1.4c-1.3-0.9-5.1-6.2-2.4-7.5c0.5-0.2,0.9-0.3,1.4-0.4c-2.1-4.2-2.9-8.6-0.2-12.6\r
	c-0.8-1.4-1.6-2.9-2.3-4.5c-2.9-6.1,3.7-5.2,5.8-0.8c0,0.1,0.1,0.2,0.1,0.2c-3.3-4.7-5.9-9.3-8-13.8c-20.5-44-0.3-92.3,8-109.6\r
	c-1.9-0.8-3.4-1.7-4.2-2.9c-7.2-10.3-2.7-22.9,4.2-32.5v-64c0-1.5-0.2-3-0.6-4.4c-4,3.5-9.8,4.8-16,3.7c-2.6-0.4-5.5-4.4-5-7.1\r
	c0.6-2.9,1.7-5.7,3-8.2H280.8c0.6,1.5,1,3.1,1.4,4.7s0.3,4-2,3.6c-2.2-0.4-4.2-3-4.7-5c-0.3-1.1-0.6-2.2-0.9-3.3\r
	c-33.4,2.2-69,3.1-106.7,2c-14.6-0.4-28.8-1.1-42.7-2c0.2,0.5,0.3,1.5,0.3,2.8c0,0.6-0.3,2-1,2.3C124.1,6.1,122.7,6.2,118.4,0.7z"/>\r
</svg>\r
`,cn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">\r
  <defs>\r
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#b8eaff"/>\r
      <stop offset="100%" stop-color="#2a3b5f"/>\r
    </linearGradient>\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#f6d67a"/>\r
      <stop offset="100%" stop-color="#c28b3b"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Outer circle -->\r
  <circle cx="48" cy="48" r="44" fill="none" stroke="url(#gold)" stroke-width="2"/>\r
\r
  <!-- Mystic triangle -->\r
  <path d="M48 14 L18 70 L78 70 Z" fill="none" stroke="url(#gold)" stroke-width="2.5"/>\r
\r
  <!-- Crescent moon -->\r
  <path d="M48 18 a10 10 0 1 0 0 20 a7 7 0 1 1 0 -20" fill="#d9e6ff" opacity="0.9"/>\r
\r
  <!-- Pause pillars -->\r
  <rect x="36" y="30" width="8" height="28" rx="2" fill="url(#glow)"/>\r
  <rect x="52" y="30" width="8" height="28" rx="2" fill="url(#glow)"/>\r
\r
  <!-- Glow aura -->\r
  <ellipse cx="48" cy="44" rx="18" ry="22" fill="#6fb6ff" opacity="0.15"/>\r
\r
  <!-- Eye symbol -->\r
  <circle cx="48" cy="66" r="6" fill="#101522" stroke="url(#gold)" stroke-width="1.5"/>\r
  <path d="M42 66 Q48 60 54 66 Q48 72 42 66 Z" fill="none" stroke="#9fdcff" stroke-width="1"/>\r
  <circle cx="48" cy="66" r="2.2" fill="#9fdcff"/>\r
\r
  <!-- Side runes -->\r
  <path d="M26 44 L30 40 L34 44 L30 48 Z" fill="none" stroke="#9fdcff" stroke-width="1"/>\r
  <path d="M62 40 L68 40 L68 48 L62 48 Z M64 42 L66 42 M64 46 L66 46" fill="none" stroke="#9fdcff" stroke-width="1"/>\r
\r
  <!-- Bottom crystal -->\r
  <path d="M48 74 L44 82 L48 88 L52 82 Z" fill="url(#glow)" stroke="#9fdcff" stroke-width="1"/>\r
</svg>\r
`,ln=`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="phoenix_feathergold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF1B5"/>
      <stop offset="35%" stop-color="#EDCB72"/>
      <stop offset="70%" stop-color="#C8933D"/>
      <stop offset="100%" stop-color="#85571C"/>
    </linearGradient>
    <linearGradient id="phoenix_featherglassOuter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EEF6FF"/>
      <stop offset="100%" stop-color="#88A7D7"/>
    </linearGradient>
    <linearGradient id="phoenix_featherglassInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B6D7FF"/>
    </linearGradient>
    <linearGradient id="phoenix_featherlid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE9A7"/>
      <stop offset="50%" stop-color="#D8AD56"/>
      <stop offset="100%" stop-color="#A16C27"/>
    </linearGradient>
    <clipPath id="phoenix_featherclip">
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>
    </clipPath>
    <linearGradient id="pf_feather" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#FF4A1A"/><stop offset="55%" stop-color="#FF9A2E"/><stop offset="100%" stop-color="#FFE066"/></linearGradient>
  </defs>

  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#phoenix_featherlid)" stroke="url(#phoenix_feathergold)" stroke-width="2"/>
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>

  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"
    fill="none" stroke="url(#phoenix_featherglassOuter)" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"
    fill="none" stroke="url(#phoenix_featherglassInner)" stroke-width="2"/>

  <g clip-path="url(#phoenix_featherclip)">
    <path d="M58 140 C44 120 42 94 58 66 C60 84 70 96 78 104 C82 118 74 132 58 140 Z" fill="url(#pf_feather)" stroke="#FFE9A7" stroke-width="1.5"/>
    <path d="M58 140 C58 112 60 90 58 66" fill="none" stroke="#FFF5D0" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M58 118 L48 110 M58 106 L49 96 M58 94 L52 84 M58 118 L70 112 M58 106 L72 100" stroke="#FFE9A7" stroke-width="1" opacity="0.8"/>
    <path d="M74 84 C70 76 76 72 74 64 C82 70 84 80 74 84 Z" fill="#FF7A2E" opacity="0.9"/>
    <path d="M48 71 L48 77" stroke="#FFF5CC" stroke-width="1.5"/>
    <path d="M45 74 L51 74" stroke="#FFF5CC" stroke-width="1.5"/>
  </g>

  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
</svg>
`,un=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 53 61.2" >\r
<linearGradient id="place_1_1" gradientUnits="userSpaceOnUse" x1="53" y1="30.0935" x2="1" y2="30.0935">\r
	<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
	<stop  offset="0.4663" style="stop-color:#6D4500"/>\r
	<stop  offset="0.6049" style="stop-color:#D2B26E"/>\r
	<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
	<stop  offset="0.8451" style="stop-color:#A49347"/>\r
	<stop  offset="0.9176" style="stop-color:#D2C278"/>\r
	<stop  offset="1" style="stop-color:#FCDF9B"/>\r
</linearGradient>\r
<path fill="none" stroke="url(#place_1_1)" stroke-width="4" stroke-miterlimit="10" d="M27,2.2l-24,10v18c0,14,10,26,24,28\r
	c14-2,24-14,24-28v-18L27,2.2z"/>\r
<linearGradient id="place_1_2" gradientUnits="userSpaceOnUse" x1="16.2258" y1="10.3067" x2="40.2258" y2="49.4179">\r
	<stop  offset="0" style="stop-color:#1D2828"/>\r
	<stop  offset="1" style="stop-color:#261805"/>\r
</linearGradient>\r
<path fill="url(#place_1_2)" d="M26,3.2l-24,10v18c0,14,10,26,24,28c14-2,24-14,24-28v-18L26,3.2z"/>\r
<linearGradient id="place_1_3" gradientUnits="userSpaceOnUse" x1="0" y1="31.0935" x2="52" y2="31.0935">\r
	<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
	<stop  offset="0.4663" style="stop-color:#6D4500"/>\r
	<stop  offset="0.6049" style="stop-color:#D2B26E"/>\r
	<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
	<stop  offset="0.8451" style="stop-color:#A49347"/>\r
	<stop  offset="0.9176" style="stop-color:#D2C278"/>\r
	<stop  offset="1" style="stop-color:#FCDF9B"/>\r
</linearGradient>\r
<path fill="none" stroke="url(#place_1_3)" stroke-width="4" stroke-miterlimit="10" d="M26,3.2l-24,10v18c0,14,10,26,24,28\r
	c14-2,24-14,24-28v-18L26,3.2z"/>\r
<g enable-background="new    ">\r
	<linearGradient id="place_1_4" gradientUnits="userSpaceOnUse" x1="20.9414" y1="29.0573" x2="30.9414" y2="29.0573">\r
		<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
		<stop  offset="0.2535" style="stop-color:#E8DFD1"/>\r
		<stop  offset="0.3726" style="stop-color:#D7BD86"/>\r
		<stop  offset="0.5742" style="stop-color:#6D4500"/>\r
		<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
		<stop  offset="0.8228" style="stop-color:#A49347"/>\r
		<stop  offset="0.9307" style="stop-color:#7D5B15"/>\r
	</linearGradient>\r
	<path fill="url(#place_1_4)" d="M20.9,19.1l6.2-3h0.6v21.4c0,1.4,0.1,2.3,0.2,2.7c0.1,0.3,0.4,0.6,0.7,0.8c0.4,0.2,1.1,0.3,2.3,0.3\r
		V42h-9.6v-0.7c1.2,0,2-0.1,2.3-0.3s0.6-0.4,0.7-0.7c0.1-0.3,0.2-1.2,0.2-2.7V23.8c0-1.8-0.1-3-0.2-3.6c-0.1-0.4-0.2-0.7-0.5-0.9\r
		c-0.2-0.2-0.5-0.3-0.8-0.3c-0.5,0-1.1,0.2-1.9,0.6L20.9,19.1z"/>\r
</g>\r
</svg>\r
`,dn=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 53 61.2">\r
<linearGradient id="place_2_1" gradientUnits="userSpaceOnUse" x1="53" y1="33.8732" x2="1" y2="33.8732" gradientTransform="matrix(1 0 0 -1 0 64)">\r
	<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
	<stop  offset="0.4663" style="stop-color:#6D4500"/>\r
	<stop  offset="0.6049" style="stop-color:#D2B26E"/>\r
	<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
	<stop  offset="0.8451" style="stop-color:#A49347"/>\r
	<stop  offset="0.9176" style="stop-color:#D2C278"/>\r
	<stop  offset="1" style="stop-color:#FCDF9B"/>\r
</linearGradient>\r
<path fill="none" stroke="url(#place_2_1)" stroke-width="4" stroke-miterlimit="10" d="M27,2.2l-24,10v18c0,14,10,26,24,28\r
	c14-2,24-14,24-28v-18L27,2.2z"/>\r
<linearGradient id="place_2_2" gradientUnits="userSpaceOnUse" x1="16.2109" y1="53.6842" x2="40.2109" y2="14.573" gradientTransform="matrix(1 0 0 -1 0 64)">\r
	<stop  offset="0" style="stop-color:#1D2828"/>\r
	<stop  offset="1" style="stop-color:#261805"/>\r
</linearGradient>\r
<path fill="url(#place_2_2)" d="M26,3.2l-24,10v18c0,14,10,26,24,28c14-2,24-14,24-28v-18L26,3.2z"/>\r
<linearGradient id="place_2_3" gradientUnits="userSpaceOnUse" x1="0" y1="32.8732" x2="52" y2="32.8732" gradientTransform="matrix(1 0 0 -1 0 64)">\r
	<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
	<stop  offset="0.4663" style="stop-color:#6D4500"/>\r
	<stop  offset="0.6049" style="stop-color:#D2B26E"/>\r
	<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
	<stop  offset="0.8451" style="stop-color:#A49347"/>\r
	<stop  offset="0.9176" style="stop-color:#D2C278"/>\r
	<stop  offset="1" style="stop-color:#FCDF9B"/>\r
</linearGradient>\r
<path fill="none" stroke="url(#place_2_3)" stroke-width="4" stroke-miterlimit="10" d="M26,3.2l-24,10v18c0,14,10,26,24,28\r
	c14-2,24-14,24-28v-18L26,3.2z"/>\r
<g>\r
	<linearGradient id="place_2_4" gradientUnits="userSpaceOnUse" x1="18.9688" y1="28.4199" x2="34.3125" y2="28.4199">\r
		<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
		<stop  offset="0.2535" style="stop-color:#E8DFD1"/>\r
		<stop  offset="0.3726" style="stop-color:#D7BD86"/>\r
		<stop  offset="0.5742" style="stop-color:#6D4500"/>\r
		<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
		<stop  offset="0.8228" style="stop-color:#A49347"/>\r
		<stop  offset="0.9307" style="stop-color:#7D5B15"/>\r
	</linearGradient>\r
	<path fill="url(#place_2_4)" d="M34.3,40H19.4v-2.1l7.9-8.8c1.2-1.3,2-2.4,2.4-3.2s0.7-1.7,0.7-2.6c0-1.2-0.4-2.2-1.1-2.9\r
		c-0.7-0.8-1.7-1.1-2.9-1.1c-1.4,0-2.6,0.4-3.4,1.2c-0.8,0.8-1.2,2-1.2,3.4H19c0-2.1,0.7-3.8,2-5.1c1.3-1.3,3.2-1.9,5.4-1.9\r
		c2.1,0,3.8,0.6,5,1.7s1.8,2.6,1.8,4.4c0,2.2-1.4,4.9-4.3,8l-6.1,6.6h11.4V40z"/>\r
</g>\r
</svg>\r
`,fn=`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 53 61.2">\r
<linearGradient id="place_3_1" gradientUnits="userSpaceOnUse" x1="53" y1="33.8732" x2="1" y2="33.8732" gradientTransform="matrix(1 0 0 -1 0 64)">\r
	<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
	<stop  offset="0.4663" style="stop-color:#6D4500"/>\r
	<stop  offset="0.6049" style="stop-color:#D2B26E"/>\r
	<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
	<stop  offset="0.8451" style="stop-color:#A49347"/>\r
	<stop  offset="0.9176" style="stop-color:#D2C278"/>\r
	<stop  offset="1" style="stop-color:#FCDF9B"/>\r
</linearGradient>\r
<path fill="none" stroke="url(#place_3_1)" stroke-width="4" stroke-miterlimit="10" d="M27,2.2l-24,10v18c0,14,10,26,24,28\r
	c14-2,24-14,24-28v-18L27,2.2z"/>\r
<linearGradient id="place_3_2" gradientUnits="userSpaceOnUse" x1="16.2109" y1="53.6842" x2="40.2109" y2="14.573" gradientTransform="matrix(1 0 0 -1 0 64)">\r
	<stop  offset="0" style="stop-color:#1D2828"/>\r
	<stop  offset="1" style="stop-color:#261805"/>\r
</linearGradient>\r
<path fill="url(#place_3_2)" d="M26,3.2l-24,10v18c0,14,10,26,24,28c14-2,24-14,24-28v-18L26,3.2z"/>\r
<linearGradient id="place_3_3" gradientUnits="userSpaceOnUse" x1="0" y1="32.8732" x2="52" y2="32.8732" gradientTransform="matrix(1 0 0 -1 0 64)">\r
	<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
	<stop  offset="0.4663" style="stop-color:#6D4500"/>\r
	<stop  offset="0.6049" style="stop-color:#D2B26E"/>\r
	<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
	<stop  offset="0.8451" style="stop-color:#A49347"/>\r
	<stop  offset="0.9176" style="stop-color:#D2C278"/>\r
	<stop  offset="1" style="stop-color:#FCDF9B"/>\r
</linearGradient>\r
<path fill="none" stroke="url(#place_3_3)" stroke-width="4" stroke-miterlimit="10" d="M26,3.2l-24,10v18c0,14,10,26,24,28\r
	c14-2,24-14,24-28v-18L26,3.2z"/>\r
<g>\r
	<linearGradient id="place_3_4" gradientUnits="userSpaceOnUse" x1="19.2893" y1="30.6" x2="33.7107" y2="30.6">\r
		<stop  offset="1.649000e-02" style="stop-color:#D1D382"/>\r
		<stop  offset="0.2535" style="stop-color:#E8DFD1"/>\r
		<stop  offset="0.3726" style="stop-color:#D7BD86"/>\r
		<stop  offset="0.5742" style="stop-color:#6D4500"/>\r
		<stop  offset="0.7145" style="stop-color:#C7C475"/>\r
		<stop  offset="0.8228" style="stop-color:#A49347"/>\r
		<stop  offset="0.9307" style="stop-color:#7D5B15"/>\r
	</linearGradient>\r
	<path fill="url(#place_3_4)" d="M23.9,29.2h2.2c1.4,0,2.4-0.4,3.2-1.1c0.8-0.7,1.2-1.6,1.2-2.8c0-2.7-1.3-4-4-4\r
		c-1.3,0-2.2,0.4-3,1.1c-0.7,0.7-1.1,1.7-1.1,2.8h-2.9c0-1.8,0.7-3.3,2-4.5c1.3-1.2,3-1.8,5-1.8c2.1,0,3.8,0.6,5,1.7\r
		c1.2,1.1,1.8,2.7,1.8,4.7c0,1-0.3,1.9-1,2.9c-0.6,0.9-1.5,1.6-2.6,2.1c1.3,0.4,2.2,1.1,2.9,2c0.7,0.9,1,2,1,3.4c0,2-0.7,3.7-2,4.9\r
		c-1.3,1.2-3.1,1.8-5.2,1.8s-3.9-0.6-5.2-1.7s-2-2.7-2-4.6h2.9c0,1.2,0.4,2.2,1.2,2.9c0.8,0.7,1.8,1.1,3.1,1.1\r
		c1.4,0,2.5-0.4,3.2-1.1c0.7-0.7,1.1-1.8,1.1-3.1c0-1.3-0.4-2.3-1.2-3c-0.8-0.7-2-1.1-3.5-1.1h-2.2V29.2z"/>\r
</g>\r
</svg>\r
`,pn=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,x={arrow:Rt,arrow_down:zt,arrow_down_mini:Bt,book:Vt,battle:Ht,cauldron:Ut,cauldron_back:Wt,cauldron_front:Gt,caustic_acid:Kt,clock:qt,close:Jt,dragon:Xt,density:Yt,essence_void:Zt,fairy:Qt,frost_lotus:$t,heart:en,heart_empty:tn,magic:nn,mandrake_root:rn,parchment:an,parchment_horizontal:on,parchment_horizontal_2:sn,pause:cn,phoenix_feather:ln,place_1:un,place_2:dn,place_3:fn,rangeStop:pn,score:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">\r
  <defs>\r
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#f6d67a"/>\r
      <stop offset="100%" stop-color="#c28b3b"/>\r
    </linearGradient>\r
\r
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#b8eaff"/>\r
      <stop offset="100%" stop-color="#2a3b5f"/>\r
    </linearGradient>\r
  </defs>\r
\r
  <!-- Outer circle -->\r
  <circle cx="48" cy="48" r="44" fill="none" stroke="url(#gold)" stroke-width="2"/>\r
\r
  <!-- Mystic triangle -->\r
  <path d="M48 14 L18 70 L78 70 Z"\r
        fill="none"\r
        stroke="url(#gold)"\r
        stroke-width="2.5"/>\r
\r
  <!-- Star / score symbol -->\r
  <polygon points="48,26 52,38 64,40 54,48 58,60 48,54 38,60 42,48 32,40 44,38"\r
           fill="url(#glow)"\r
           stroke="#9fdcff"\r
           stroke-width="1.5"/>\r
\r
  <!-- Glow aura -->\r
  <ellipse cx="48" cy="44" rx="20" ry="24" fill="#6fb6ff" opacity="0.15"/>\r
\r
  <!-- Side runes -->\r
  <path d="M26 44 L30 40 L34 44 L30 48 Z"\r
        fill="none"\r
        stroke="#9fdcff"\r
        stroke-width="1"/>\r
\r
  <path d="M62 40 L68 40 L68 48 L62 48 Z\r
           M64 42 L66 42\r
           M64 46 L66 46"\r
        fill="none"\r
        stroke="#9fdcff"\r
        stroke-width="1"/>\r
\r
  <!-- Bottom crystal -->\r
  <path d="M48 74 L44 82 L48 88 L52 82 Z"\r
        fill="url(#glow)"\r
        stroke="#9fdcff"\r
        stroke-width="1"/>\r
</svg>\r
`,settings:`<svg xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 50 50">\r
<path fill="currentColor" d="M50,29.7v-9.4h-5.6l-2.2-5.6l4.1-4.1l-6.6-6.6l-4.1,4.1l-5.9-2.5V0h-9.4v5.6l-5.6,2.5l-4.1-4.1l-6.6,6.6\r
	l4.1,4.1l-2.5,5.6H0v9.4h5.6l2.2,5.6l-4.1,4.1l6.6,6.6l4.1-4.1l5.6,2.2V50h9.4v-5.6l5.6-2.2l4.1,4.1l6.6-6.6l-4.1-4.1l2.2-5.6H50\r
	V29.7z M25,37.5c-6.9,0-12.5-5.6-12.5-12.5S18.1,12.5,25,12.5S37.5,18.1,37.5,25S31.9,37.5,25,37.5z"/>\r
</svg>\r
`,stop:pn,stroke_heart:`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 190.3 147.6" enable-background="new 0 0 190.3 147.6" xml:space="preserve">\r
<path fill="#E83147" d="M187.9,40.2C182.5,22.6,169,3.7,146.5,2.5c-37.7-2-50.4,25.6-50.8,25.8C95.2,28.2,78.9,3.2,53,2.3\r
	C28.3,1.5,9.1,21.1,3.5,40.2C-1.4,57,4.7,71.8,7.9,79.5c10.2,24.2,77.2,58.3,86,62.7c0.1,0,1.4,0.7,1.6,0.8c0.3-0.1,0.8-0.4,1.4-0.6\r
	c36.2-15.9,73.3-31.4,86.5-62.8C186.8,71.5,192.9,56.8,187.9,40.2z"/>\r
<path fill="#BF3037" d="M187.5,40.4c-0.4-1.2-0.8-2.4-1.2-3.5c-0.5-1.1-0.9-2.3-1.4-3.4c-0.5-1.1-1-2.3-1.6-3.4\r
	c-0.6-1.1-1.1-2.2-1.8-3.3c-1.3-2.1-2.7-4.2-4.2-6.1c-1.5-1.9-3.2-3.8-5-5.4c-1.8-1.7-3.7-3.2-5.8-4.5c-2-1.3-4.2-2.5-6.4-3.3\r
	c-2.2-0.9-4.5-1.6-6.9-2l-1.8-0.3c-0.6-0.1-1.2-0.2-1.8-0.2c-1.2-0.1-2.4-0.1-3.5-0.2c-1.2,0-2.5,0-3.7,0.1\r
	c-1.2,0.1-2.4,0.1-3.6,0.3c-1.2,0.1-2.4,0.3-3.6,0.5c-1.2,0.2-2.3,0.4-3.5,0.7c-4.6,1-9.1,2.6-13.2,4.8c-2.1,1.1-4.1,2.3-5.9,3.7\r
	c-1.9,1.4-3.7,2.8-5.3,4.5c-1.7,1.6-3.2,3.3-4.7,5.2c-0.7,0.9-1.4,1.9-2,2.8c-0.3,0.5-0.6,1-0.9,1.5l-0.5,0.8L99,29.8l-0.2,0.3\r
	l-0.2,0.2c-0.4,0.6-1.1,1.1-1.8,1.4l-1.3,0.5l-1.2-0.5c-0.3-0.1-0.6-0.3-0.9-0.5c-0.3-0.2-0.6-0.5-0.7-0.6l-0.1-0.2l-0.2-0.3\r
	l-0.3-0.4l-0.6-0.8l-1.2-1.6c-0.8-1.1-1.7-2.1-2.6-3.1c-1.8-2-3.6-3.9-5.6-5.7c-3.9-3.7-8.2-6.8-12.9-9.3c-4.7-2.5-9.8-4.1-15.1-4.6\r
	l-1-0.1l-0.2,0c0,0,0.2,0,0,0l-0.1,0l-0.1,0l-0.5,0l-2.1,0c-0.7,0-1.4-0.1-2.1,0l-2,0.2c-0.7,0.1-1.3,0.1-2,0.2l-2,0.4l-2,0.4\r
	L38.3,6c-5.2,1.5-10.1,4-14.5,7.3c-4.4,3.2-8.2,7.2-11.4,11.7c-3.2,4.5-5.7,9.4-7.3,14.6l-0.3,1c-0.1,0.2-0.2,0.7-0.2,1l-0.5,2\r
	c-0.1,0.7-0.2,1.3-0.3,2c-0.1,0.7-0.2,1.3-0.3,2c-0.3,2.7-0.3,5.4-0.1,8.1C3.9,61,5.2,66.3,7.1,71.4c0.5,1.3,1,2.5,1.5,3.8L9.5,77\r
	L9.9,78l0.2,0.5l0,0.1c-0.1-0.2,0,0,0-0.1l0.1,0.1l0.1,0.2l1,1.9l1,1.5c0.3,0.5,0.7,1,1.1,1.5c0.4,0.5,0.8,1,1.2,1.5\r
	c3.5,4,7.5,7.7,11.7,11.1c4.3,3.4,8.7,6.7,13.3,9.8c9.1,6.2,18.6,12,28.3,17.4c4.8,2.7,9.7,5.4,14.6,8l7.4,3.8l3.7,1.9l1.9,0.9\r
	l0.2,0.1c0.2,0.1-0.2-0.1-0.1-0.1l0.1,0l0.1,0.1l0.5,0.2l1,0.4l-3.5,0l17.3-7.6c5.7-2.5,11.4-5.1,17.1-7.8\r
	c5.6-2.7,11.1-5.6,16.5-8.6c2.7-1.5,5.3-3.1,7.9-4.8c2.6-1.7,5.1-3.5,7.5-5.3c2.4-1.9,4.8-3.8,7.1-5.9c2.2-2.1,4.4-4.3,6.4-6.6\r
	c2-2.3,3.8-4.8,5.4-7.4c1.6-2.6,3.1-5.3,4.3-8.2c1.3-2.8,2.5-5.7,3.4-8.7c0.9-3,1.7-6,2.1-9.1c0.4-3.1,0.6-6.2,0.3-9.3\r
	C188.9,46.4,188.3,43.4,187.5,40.4L187.5,40.4z M188.2,40.1c0.9,3.1,1.5,6.2,1.8,9.4c0.3,3.2,0.3,6.4,0,9.6\r
	c-0.6,6.4-2.3,12.6-4.5,18.6c-1.1,3-2.3,6-3.7,8.9c-1.4,2.9-3.2,5.7-5,8.4c-1.8,2.7-3.9,5.2-6,7.7c-2.2,2.4-4.5,4.7-6.9,6.9\r
	c-2.4,2.2-4.9,4.2-7.5,6.2c-2.6,1.9-5.2,3.8-7.9,5.6c-5.4,3.5-11,6.7-16.7,9.6c-5.7,2.9-11.4,5.7-17.2,8.3c-2.9,1.3-5.8,2.6-8.7,3.9\r
	l-8.7,3.8l-1.8,0.8l-1.7-0.8l-2.1-1l-1.9-1l-3.8-2c-2.5-1.3-5-2.7-7.4-4c-4.9-2.7-9.8-5.5-14.7-8.4c-4.8-2.9-9.6-5.9-14.4-8.9\r
	c-4.7-3.1-9.4-6.3-14-9.6c-4.6-3.4-9.1-6.8-13.3-10.7c-4.3-3.8-8.4-7.9-11.9-12.6c-0.5-0.6-0.9-1.2-1.3-1.8\r
	c-0.4-0.6-0.8-1.2-1.2-1.9l-1.2-2.1L5.8,81l-0.3-0.6l-0.2-0.5l-0.4-1l-0.7-2c-0.5-1.3-0.9-2.7-1.4-4.1c-1.7-5.5-2.7-11.2-2.9-17\r
	c0-2.9,0.1-5.8,0.5-8.6c0.1-0.7,0.2-1.4,0.4-2.2c0.1-0.7,0.3-1.4,0.4-2.1l0.5-2c0.1-0.4,0.2-0.6,0.3-1.1l0.4-1\r
	c1.9-5.4,4.5-10.6,7.9-15.2c3.4-4.6,7.3-8.8,11.8-12.3c4.5-3.5,9.6-6.4,15-8.3l2-0.7l2.1-0.5l2.1-0.5c0.7-0.1,1.5-0.2,2.2-0.3\r
	L48,0.5c0.7-0.1,1.4-0.1,2.1-0.1l2.1-0.1l0.5,0l0.1,0l0.1,0c-0.1,0,0.2,0,0.2,0l0.3,0l1.1,0c5.9,0.2,11.8,1.6,17.2,3.9\r
	c5.4,2.3,10.4,5.6,14.9,9.3c2.2,1.9,4.3,3.9,6.3,6c1,1.1,2,2.1,2.9,3.3c0.5,0.6,0.9,1.1,1.4,1.7l0.7,0.8l0.3,0.4l0.1,0.1l0,0\r
	c0-0.1-0.4-0.4-0.6-0.5c-0.3-0.2-0.5-0.3-0.8-0.4l-2.5,0c-0.6,0.2-1.2,0.7-1.6,1.2c-0.1,0.1,0,0,0,0.1l0,0l0,0l0.1-0.1l0.2-0.4\r
	l0.5-0.9c0.3-0.6,0.7-1.1,1.1-1.7c0.7-1.1,1.5-2.2,2.4-3.3c1.6-2.1,3.5-4.1,5.4-5.9c3.9-3.6,8.4-6.7,13.2-8.9\r
	c2.4-1.1,4.9-2.1,7.4-2.8c1.3-0.4,2.6-0.7,3.8-1c1.3-0.2,2.6-0.5,3.9-0.7c1.3-0.2,2.6-0.3,3.9-0.4c1.3-0.1,2.6-0.2,3.9-0.2\r
	c1.3-0.1,2.6,0,3.9,0.1c1.3,0.1,2.5,0.2,3.8,0.3c1.4,0.2,2.6,0.4,3.9,0.6c0.7,0.1,1.3,0.3,1.9,0.4l1.9,0.5c2.5,0.7,5,1.7,7.3,2.9\r
	c1.2,0.5,2.2,1.3,3.4,1.9c1.1,0.6,2.1,1.5,3.2,2.2c2,1.5,3.9,3.3,5.7,5.1c3.5,3.7,6.4,7.9,8.8,12.3c0.6,1.1,1.2,2.2,1.7,3.4\r
	c0.6,1.1,1,2.3,1.5,3.4c0.5,1.2,0.9,2.3,1.4,3.5C187.5,37.7,187.8,38.9,188.2,40.1L188.2,40.1z"/>\r
</svg>\r
`,symbol:`<svg xmlns="http://www.w3.org/2000/svg" \r
	 viewBox="0 0 164 164.4">\r
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
`,symbol_2:`<svg  xmlns="http://www.w3.org/2000/svg"\r
	 viewBox="0 0 164 164.4">\r
<style type="text/css">\r
	.st0{fill:none;stroke:#7A4F39;stroke-width:3;stroke-miterlimit:10;}\r
	.st1{fill:none;stroke:#4A2F1F;stroke-width:2;stroke-miterlimit:10;}\r
	.st2{fill:#704A37;}\r
	.st3{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}\r
	.st4{opacity:0.67;fill:#4A2F1F;enable-background:new    ;}\r
	.st5{fill:#4A2F1F;}\r
	.st6{opacity:0.67;fill:#4C3C34;enable-background:new    ;}\r
	.st7{fill:#4C3C34;}\r
	.st8{fill:none;stroke:#4A2F1F;stroke-miterlimit:10;}\r
</style>\r
<path class="st0" d="M83.7,17.7C66.3,53,49,88.3,31.7,123.7c35-1.3,70-2.7,105-4C119,85.7,101.3,51.7,83.7,17.7z"/>\r
<circle class="st1" cx="83.7" cy="91.7" r="30"/>\r
<circle class="st2" cx="83.3" cy="94.3" r="3"/>\r
<ellipse class="st3" cx="82.3" cy="93.3" rx="5.5" ry="5.9"/>\r
<g>\r
	<path class="st4" d="M85.4,48.3c2.3-0.3,4-0.9,4-0.9s-1.7-0.6-4-0.9c0.8-1.2,1.2-2.3,1.2-2.3s-1.1,0.4-2.3,1.2\r
		c-0.3-2.3-0.9-4-0.9-4s-0.6,1.7-0.9,4c-1.2-0.8-2.3-1.2-2.3-1.2s0.4,1.1,1.2,2.3c-2.3,0.3-4,0.9-4,0.9s1.7,0.6,4,0.9\r
		c-0.8,1.2-1.2,2.3-1.2,2.3s1.1-0.4,2.3-1.2c0.3,2.3,0.9,4,0.9,4s0.6-1.7,0.9-4c1.2,0.8,2.3,1.2,2.3,1.2S86.3,49.6,85.4,48.3z"/>\r
	<circle class="st5" cx="83.4" cy="47.4" r="3"/>\r
</g>\r
<g>\r
	<path class="st6" d="M20.7,44.4c2.3-0.3,4-0.9,4-0.9s-1.7-0.6-4-0.9c0.8-1.2,1.2-2.3,1.2-2.3s-1.1,0.4-2.3,1.2\r
		c-0.3-2.3-0.9-4-0.9-4s-0.6,1.7-0.9,4c-1.2-0.8-2.3-1.2-2.3-1.2s0.4,1.1,1.2,2.3c-2.3,0.3-4,0.9-4,0.9s1.7,0.6,4,0.9\r
		c-0.8,1.2-1.2,2.3-1.2,2.3s1.1-0.4,2.3-1.2c0.3,2.3,0.9,4,0.9,4s0.6-1.7,0.9-4c1.2,0.8,2.3,1.2,2.3,1.2S21.6,45.7,20.7,44.4z"/>\r
	<ellipse class="st7" cx="18.8" cy="43.5" rx="3" ry="3"/>\r
</g>\r
<ellipse class="st1" cx="82" cy="82.2" rx="74.3" ry="74.4"/>\r
<ellipse class="st8" cx="82" cy="82.2" rx="81.5" ry="81.7"/>\r
<path class="st5" d="M82,135.1c-11.1,0-21.5-3.1-30.3-8.4c-0.1,0.3-0.3,0.6-0.5,0.9c9,5.4,19.5,8.5,30.8,8.5\r
	c6.1,0,11.9-0.9,17.5-2.6c-0.2-0.3-0.4-0.6-0.6-0.9C93.5,134.2,87.9,135.1,82,135.1z"/>\r
<path class="st5" d="M23.4,70.8c-0.3-0.1-0.7-0.2-1-0.3c-0.2,1.9-0.3,3.8-0.3,5.7c0,5.8,0.8,11.4,2.4,16.7c0.3-0.2,0.5-0.5,0.8-0.6\r
	C23.8,87.2,23,81.8,23,76.2C23.1,74.4,23.2,72.6,23.4,70.8z"/>\r
<g>\r
	<path class="st4" d="M116.1,66.9c2.3-0.3,4-0.9,4-0.9s-1.7-0.6-4-0.9c0.8-1.2,1.2-2.3,1.2-2.3s-1.1,0.4-2.3,1.2\r
		c-0.3-2.3-0.9-4-0.9-4s-0.6,1.7-0.9,4c-1.2-0.8-2.3-1.2-2.3-1.2s0.4,1.1,1.2,2.3c-2.3,0.3-4,0.9-4,0.9s1.7,0.6,4,0.9\r
		c-0.8,1.2-1.2,2.3-1.2,2.3s1.1-0.4,2.3-1.2c0.3,2.3,0.9,4,0.9,4s0.6-1.7,0.9-4c1.2,0.8,2.3,1.2,2.3,1.2S116.9,68.1,116.1,66.9z"/>\r
	<ellipse class="st5" cx="114.1" cy="66" rx="3" ry="3"/>\r
</g>\r
<ellipse class="st8" cx="137.3" cy="32.4" rx="17.8" ry="13.9"/>\r
</svg>\r
`,temperature:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M26 38V14a6 6 0 0 1 12 0v24a12 12 0 1 1-12 0z"/>
  <path d="M32 24v22"/>
  <circle cx="32" cy="47" r="4.5" fill="#FFFFFF" stroke="none"/>
  <path d="M44 16h8M44 24h6M44 32h8"/>
</svg>
`,theme_light:`<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="themeDarkGold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#F8E9A8"/>\r
      <stop offset="40%" stop-color="#E0C067"/>\r
      <stop offset="100%" stop-color="#A66B1F"/>\r
    </linearGradient>\r
\r
    <linearGradient id="themeDarkGoldLight" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFF3C6"/>\r
      <stop offset="100%" stop-color="#D3A441"/>\r
    </linearGradient>\r
\r
    <linearGradient id="themeDarkNight" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#1e222b"/>\r
      <stop offset="100%" stop-color="#0a0d14"/>\r
    </linearGradient>\r
\r
    <mask id="themeDarkMoonMask">\r
      <rect width="96" height="96" fill="#FFFFFF"/>\r
      <circle cx="60" cy="38" r="20" fill="#000000"/>\r
    </mask>\r
  </defs>\r
\r
  <circle cx="48" cy="48" r="42" fill="url(#themeDarkNight)" stroke="url(#themeDarkGold)" stroke-width="2"/>\r
\r
  <circle cx="48" cy="48" r="24" fill="url(#themeDarkGold)" mask="url(#themeDarkMoonMask)"/>\r
\r
  <path d="M74 22 L75.5 26 L79.5 27.5 L75.5 29 L74 33 L72.5 29 L68.5 27.5 L72.5 26 Z" fill="url(#themeDarkGold)"/>\r
  <path d="M24 62 L25 65 L28 66 L25 67 L24 70 L23 67 L20 66 L23 65 Z" fill="url(#themeDarkGold)"/>\r
\r
  <circle cx="30" cy="28" r="1.5" fill="url(#themeDarkGoldLight)"/>\r
  <circle cx="70" cy="72" r="1.5" fill="url(#themeDarkGoldLight)"/>\r
</svg>`,theme_dark:`<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="themeLightGold" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#F8E9A8"/>\r
      <stop offset="40%" stop-color="#E0C067"/>\r
      <stop offset="100%" stop-color="#A66B1F"/>\r
    </linearGradient>\r
\r
    <linearGradient id="themeLightGoldLight" x1="0" y1="0" x2="0" y2="1">\r
      <stop offset="0%" stop-color="#FFF3C6"/>\r
      <stop offset="100%" stop-color="#D3A441"/>\r
    </linearGradient>\r
\r
    <radialGradient id="themeLightSunCore" cx="0.4" cy="0.35" r="0.7">\r
      <stop offset="0%" stop-color="#FFFDF6"/>\r
      <stop offset="100%" stop-color="#F8E9A8"/>\r
    </radialGradient>\r
  </defs>\r
\r
  <circle cx="48" cy="48" r="42" fill="none" stroke="url(#themeLightGold)" stroke-width="2"/>\r
\r
  <circle cx="48" cy="48" r="16" fill="url(#themeLightSunCore)" stroke="url(#themeLightGold)" stroke-width="2.5"/>\r
\r
  <g stroke="url(#themeLightGold)" stroke-width="3" stroke-linecap="round">\r
    <line x1="74" y1="48" x2="82" y2="48"/>\r
    <line x1="22" y1="48" x2="14" y2="48"/>\r
    <line x1="48" y1="22" x2="48" y2="14"/>\r
    <line x1="48" y1="74" x2="48" y2="82"/>\r
    <line x1="66.4" y1="29.6" x2="72" y2="24"/>\r
    <line x1="29.6" y1="29.6" x2="24" y2="24"/>\r
    <line x1="66.4" y1="66.4" x2="72" y2="72"/>\r
    <line x1="29.6" y1="66.4" x2="24" y2="72"/>\r
  </g>\r
\r
  <line x1="36" y1="60" x2="60" y2="60" stroke="url(#themeLightGoldLight)" stroke-width="1.5" stroke-linecap="round"/>\r
  <line x1="40" y1="36" x2="56" y2="36" stroke="url(#themeLightGoldLight)" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>\r
`,toad_slime:`<svg width="128" height="160" viewBox="0 0 128 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="toad_slimegold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF1B5"/>
      <stop offset="35%" stop-color="#EDCB72"/>
      <stop offset="70%" stop-color="#C8933D"/>
      <stop offset="100%" stop-color="#85571C"/>
    </linearGradient>
    <linearGradient id="toad_slimeglassOuter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EEF6FF"/>
      <stop offset="100%" stop-color="#88A7D7"/>
    </linearGradient>
    <linearGradient id="toad_slimeglassInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B6D7FF"/>
    </linearGradient>
    <linearGradient id="toad_slimelid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE9A7"/>
      <stop offset="50%" stop-color="#D8AD56"/>
      <stop offset="100%" stop-color="#A16C27"/>
    </linearGradient>
    <clipPath id="toad_slimeclip">
      <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34 Z"/>
    </clipPath>
    <radialGradient id="ts_slime" cx="0.4" cy="0.3" r="0.9"><stop offset="0%" stop-color="#D2F58A"/><stop offset="100%" stop-color="#5BA82E"/></radialGradient>
  </defs>

  <rect x="36" y="12" width="56" height="18" rx="5" fill="url(#toad_slimelid)" stroke="url(#toad_slimegold)" stroke-width="2"/>
  <rect x="42" y="15" width="44" height="4" rx="2" fill="#FFF5D0" opacity="0.7"/>

  <path d="M46 30 L46 42 C46 49 34 55 34 72 L34 128 C34 145 46 152 64 152 C82 152 94 145 94 128 L94 72 C94 55 82 49 82 42 L82 30"
    fill="none" stroke="url(#toad_slimeglassOuter)" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 34 L50 44 C50 50 40 57 40 72 L40 124 C40 137 49 144 64 144 C79 144 88 137 88 124 L88 72 C88 57 78 50 78 44 L78 34"
    fill="none" stroke="url(#toad_slimeglassInner)" stroke-width="2"/>

  <g clip-path="url(#toad_slimeclip)">
    <path d="M38 132 C38 112 52 100 64 100 C76 100 90 112 90 132 C90 146 78 148 64 148 C50 148 38 146 38 132 Z" fill="url(#ts_slime)" stroke="#E4FFB0" stroke-width="1.5"/>
    <path d="M48 104 C48 112 46 118 48 122" fill="none" stroke="#9BD65A" stroke-width="3" stroke-linecap="round"/>
    <circle cx="56" cy="112" r="6" fill="#F4FFD6" stroke="#E4FFB0" stroke-width="1.2"/>
    <circle cx="72" cy="112" r="6" fill="#F4FFD6" stroke="#E4FFB0" stroke-width="1.2"/>
    <circle cx="57" cy="113" r="2.4" fill="#2B4A12"/>
    <circle cx="71" cy="113" r="2.4" fill="#2B4A12"/>
    <circle cx="64" cy="132" r="3" fill="#E4FFB0" opacity="0.8"/>
    <circle cx="76" cy="128" r="2" fill="#E4FFB0" opacity="0.8"/>
    <circle cx="52" cy="134" r="2" fill="#E4FFB0" opacity="0.8"/>
  </g>

  <path d="M46 52 C42 60 42 72 42 90 C42 105 45 116 52 126" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
</svg>
`,edit:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,save:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></svg>`,trash:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>`},S={TIMER_TICK:`timer:tick`,SCORE_CHANGE:`score:change`,LIVES_CHANGE:`lives:change`,GAME_START:`game:start`,GAME_OVER:`game:over`,ROUND_START:`round:start`,ROUND_OVER:`round:over`,PAUSE:`game:pause`,RESUME:`game:resume`,SHELF_BLOCK:`shelf:block`,INGREDIENT_COUNT:`ingredient:count`,RECIPE_CHANGED:`recipe:changed`,INGREDIENT_IN_CAULDRON:`ingredient:inCauldron`,CAULDRON_STATE_CHANGED:`cauldron:stateChange`,REACTION_FIRED:`cauldron:reactionFired`,SHOW_LEADERBOARD:`show:leaderboard`,PAGE_HIDDEN:`page:hidden`,SHOW_RULES:`show:rules`,PLAYER_NAME_CHANGED:`player:name-changed`,PLAYER_AVATAR_CHANGED:`player:avatar-changed`,OPEN_NAME_DIALOG:`name-dialog:open`,MENU_SHOWN:`menu:shown`},mn={DRAGON_TEARS:`dragon_tears`,FAIRY_DUST:`fairy_dust`,FROST_LOTUS:`frost_lotus`,MANDRAKE_ROOT:`mandrake_root`,CAUSTIC_ACID:`caustic_acid`,ESSENCE_VOID:`essence_void`,PHOENIX_FEATHER:`phoenix_feather`,TOAD_SLIME:`toad_slime`},{DRAGON_TEARS:hn,FAIRY_DUST:gn,FROST_LOTUS:_n,MANDRAKE_ROOT:vn,CAUSTIC_ACID:yn,ESSENCE_VOID:bn,PHOENIX_FEATHER:xn,TOAD_SLIME:Sn}=mn,Cn=[{id:hn,name:`Dragon Tears`,icon:`dragon`,temperature:25,density:8,magicPower:10,count:0},{id:gn,name:`Fairy Dust`,icon:`fairy`,temperature:12,density:9,magicPower:12,count:0},{id:_n,name:`Frost Lotus`,icon:`frost_lotus`,temperature:-18,density:4,magicPower:14,count:0},{id:vn,name:`Mandrake Root`,icon:`mandrake_root`,temperature:-5,density:20,magicPower:8,count:0},{id:yn,name:`Caustic Acid`,icon:`caustic_acid`,temperature:10,density:14,magicPower:22,count:0},{id:bn,name:`Essence of the Void`,icon:`essence_void`,temperature:-20,density:-10,magicPower:40,count:0},{id:xn,name:`Phoenix Feather`,icon:`phoenix_feather`,temperature:50,density:-10,magicPower:30,count:0},{id:Sn,name:`Toad Slime`,icon:`toad_slime`,temperature:5,density:30,magicPower:0,count:0}],wn=[{id:1,difficulty:`easy`,name:`Moon Mist`,temperature:[32,42],density:[12,22],magicPower:[17,27]},{id:2,difficulty:`easy`,name:`Root Bloom`,temperature:[2,12],density:[24,34],magicPower:[15,25]},{id:3,difficulty:`easy`,name:`Frost Steam`,temperature:[2,12],density:[7,17],magicPower:[19,29]},{id:4,difficulty:`easy`,name:`Quiet Swirl`,temperature:[-28,-18],density:[19,29],magicPower:[17,27]},{id:5,difficulty:`easy`,name:`Bright Dew`,temperature:[27,37],density:[32,42],magicPower:[25,35]},{id:6,difficulty:`easy`,name:`Snow Dust`,temperature:[-16,-6],density:[28,38],magicPower:[29,39]},{id:7,difficulty:`medium`,name:`Acid Spark`,temperature:[17,27],density:[18,28],magicPower:[29,39]},{id:8,difficulty:`medium`,name:`Void Ember`,temperature:[0,10],density:[0,10],magicPower:[45,55]},{id:9,difficulty:`medium`,name:`Heavy Acid`,temperature:[0,10],density:[29,39],magicPower:[25,35]},{id:10,difficulty:`medium`,name:`Frost Acid`,temperature:[-13,-3],density:[13,23],magicPower:[31,41]},{id:11,difficulty:`medium`,name:`Dusty Void`,temperature:[-13,-3],density:[0,10],magicPower:[47,57]},{id:12,difficulty:`medium`,name:`Dragon Void`,temperature:[25,35],density:[1,11],magicPower:[55,65]},{id:13,difficulty:`medium`,name:`Rooted Night`,temperature:[-18,-8],density:[14,24],magicPower:[55,65]},{id:14,difficulty:`hard`,name:`Phoenix Pulse`,temperature:[57,67],density:[0,10],magicPower:[37,47]},{id:15,difficulty:`hard`,name:`Slime Crown`,temperature:[-5,5],density:[45,55],magicPower:[3,13]},{id:16,difficulty:`hard`,name:`Void Flame`,temperature:[25,35],density:[0,10],magicPower:[60,70]},{id:17,difficulty:`hard`,name:`Acid Bog`,temperature:[10,20],density:[39,49],magicPower:[17,27]},{id:18,difficulty:`hard`,name:`Frozen Ash`,temperature:[27,37],density:[0,10],magicPower:[39,49]},{id:19,difficulty:`hard`,name:`Triple Eclipse`,temperature:[-20,-10],density:[19,29],magicPower:[60,70]},{id:20,difficulty:`hard`,name:`Ember Soup`,temperature:[62,72],density:[24,34],magicPower:[37,47]}],C={[t]:{gameTime:180,bonus:15},[r]:{gameTime:150,bonus:10},[n]:{gameTime:150,bonus:5}},Tn={[t]:12,[r]:8,[n]:5},w={[t]:5,[r]:3,[n]:3},En={[t]:4,[r]:4,[n]:5},Dn={[t]:4,[r]:6,[n]:8},On={[t]:100,[r]:200,[n]:300},T={BUBBLING:`bubbling`,VOLATILE_MIX:`volatile-mix`,SOLAR_FROST:`solar-frost`,ROOTED_STEAM:`rooted-steam`,ASHEN_BLOOM:`ashen-bloom`,ANNIHILATION:`annihilation`,PRESSURE_SPIKE:`pressure-spike`,MAGMA_FLUX:`magma-flux`,DEEP_FREEZE:`deep-freeze`,ARCANE_SATURATION:`arcane-saturation`,STEAM_BURST:`steam-burst`,BLACK_ICE:`black-ice`,HEAVY_SPARK:`heavy-spark`,BURNING_ROOT:`burning-root`,VOID_RESONANCE:`void-resonance`},{BUBBLING:kn,VOLATILE_MIX:An,SOLAR_FROST:jn,ROOTED_STEAM:Mn,ASHEN_BLOOM:Nn,ANNIHILATION:Pn,PRESSURE_SPIKE:Fn,MAGMA_FLUX:In,DEEP_FREEZE:Ln,ARCANE_SATURATION:Rn,STEAM_BURST:zn,BLACK_ICE:Bn,HEAVY_SPARK:Vn,BURNING_ROOT:Hn,VOID_RESONANCE:Un}=T,Wn=[{id:kn,name:`Bubbling`},{id:An,name:`Volatile Mix`},{id:jn,name:`Solar Frost`},{id:Mn,name:`Rooted Steam`},{id:Nn,name:`Ashen Bloom`},{id:Pn,name:`Annihilation`},{id:Fn,name:`Pressure Spike`},{id:In,name:`Magma Flux`},{id:Ln,name:`Deep Freeze`},{id:Rn,name:`Arcane Saturation`},{id:zn,name:`Steam Burst`},{id:Bn,name:`Black Ice`},{id:Vn,name:`Heavy Spark`},{id:Hn,name:`Burning Root`},{id:Un,name:`Void Resonance`}],E={easy:[],medium:[kn,jn],hard:[An,Fn,Ln]};E.easy.length,E.medium.length,E.hard.length;var D={[g]:`/`,[v]:`/profile`,[b]:`/profile/account`,[y]:`/profile/stats`,[_]:`/presentation`},Gn=[{name:g,path:D[g]},{name:v,path:D[v]},{name:_,path:D[_]}],Kn={PATH_CHANGE:`path:change`};D[g],D[v],D[_];var qn=e=>Gn.find(({path:t})=>e===t||e.startsWith(`${t}/`)),Jn=[`default`,`phoenix`,`dragon`,`moon`],Yn=[`image/png`,`image/jpeg`,`image/webp`],Xn={gamesPlayed:0,bestScore:0,averageScore:0,totalDurationSeconds:0,averageDurationSeconds:0,successfulBrews:0,failedBrews:0,reactionsTriggered:0},O=(e,t=0,n=1)=>Array.from({length:e},(e,r)=>t+r*n),Zn=e=>`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`,Qn=class{events={};on(e,t){this.events[e]||(this.events[e]=new Set),this.events[e].add(t)}off(e,t){this.events[e]?.delete(t)}emit(e,t){this.events[e]?.forEach(e=>e(t))}},$n=({stats:e,difficulty:t,score:n,reason:r,now:i,gameId:a})=>({playedAt:i,difficulty:t,score:Math.max(0,n),reason:r,durationSeconds:Math.max(0,Math.round((i-e.startedAt)/1e3)),successfulBrews:e.successfulBrews,failedBrews:e.failedBrews,reactionsTriggered:e.reactionsTriggered,gameId:a}),er=(e,t)=>t!==void 0&&e.some(e=>e.gameId===t),tr=e=>({startedAt:e,successfulBrews:0,failedBrews:0,reactionsTriggered:0}),nr=(e,t)=>[t,...e].slice(0,50),rr=(e,t)=>e?{startedAt:t-e.elapsedMs,successfulBrews:e.successfulBrews,failedBrews:e.failedBrews,reactionsTriggered:e.reactionsTriggered}:tr(t),ir=e=>e.length<=2048&&/^https:\/\/\S+$/.test(e),ar=e=>Yn.includes(e.type)?e.size>85e3?`Image is too large (max 85 KB)`:null:`Use a PNG, JPEG or WebP image`,or=e=>!e||e.kind===m?null:e.kind===`image`?e.dataUrl:e.url,sr=/^[A-Za-z0-9 _-]{2,15}$/,cr=e=>sr.test(e)&&e.trim()===e,k=e=>!e||cr(e)?``:h,A=T,j=mn,M=(e,...t)=>t.every(t=>e.some(e=>e.id===t)),N=(e,t)=>Math.round(e*(1+t/100)),P=(e,t)=>({...e,...t}),lr=[{id:A.BUBBLING,type:`ingredients`,isActive:e=>M(e,j.FAIRY_DUST,j.CAUSTIC_ACID),applyValues:e=>P(e,{magicPower:N(e.magicPower,50)}),effect:{timeDelta:-10}},{id:A.VOLATILE_MIX,type:`ingredients`,isActive:e=>M(e,j.PHOENIX_FEATHER,j.ESSENCE_VOID),applyValues:e=>e,effect:{lifeDelta:-1,clearCauldron:!0}},{id:A.SOLAR_FROST,type:`ingredients`,isActive:e=>M(e,j.DRAGON_TEARS,j.FROST_LOTUS),applyValues:e=>P(e,{temperature:0,density:N(e.density,20)})},{id:A.ROOTED_STEAM,type:`ingredients`,isActive:e=>M(e,j.MANDRAKE_ROOT,j.TOAD_SLIME),applyValues:e=>P(e,{density:N(e.density,25),magicPower:N(e.magicPower,-10)})},{id:A.ASHEN_BLOOM,type:`ingredients`,isActive:e=>M(e,j.PHOENIX_FEATHER,j.FAIRY_DUST),applyValues:e=>P(e,{temperature:e.temperature+10,magicPower:N(e.magicPower,25)})},{id:A.ANNIHILATION,type:`stats`,isActive:e=>e.some(e=>e.temperature>15)&&e.some(e=>e.temperature<-15),applyValues:e=>P(e,{temperature:0,density:e.density*2})},{id:A.PRESSURE_SPIKE,type:`stats`,isActive:(e,t)=>t.density>=70,applyValues:e=>P(e,{density:70,magicPower:N(e.magicPower,10)})},{id:A.MAGMA_FLUX,type:`stats`,isActive:(e,t)=>t.temperature>=60,applyValues:e=>P(e,{magicPower:N(e.magicPower,20),density:N(e.density,-10)})},{id:A.DEEP_FREEZE,type:`stats`,isActive:(e,t)=>t.temperature<=-20,applyValues:e=>P(e,{density:N(e.density,15),magicPower:N(e.magicPower,-15)})},{id:A.ARCANE_SATURATION,type:`stats`,isActive:(e,t)=>t.magicPower>=80,applyValues:e=>P(e,{magicPower:80,temperature:e.temperature+5})},{id:A.STEAM_BURST,type:`mix`,isActive:(e,t)=>M(e,j.DRAGON_TEARS,j.CAUSTIC_ACID)&&t.temperature>=35,applyValues:e=>P(e,{temperature:e.temperature+10}),effect:{timeDelta:-5}},{id:A.BLACK_ICE,type:`mix`,isActive:(e,t)=>M(e,j.FROST_LOTUS,j.ESSENCE_VOID)&&t.density<=0,applyValues:e=>P(e,{temperature:e.temperature-10,magicPower:N(e.magicPower,20)})},{id:A.HEAVY_SPARK,type:`mix`,isActive:(e,t)=>M(e,j.FAIRY_DUST,j.TOAD_SLIME)&&t.density>=40,applyValues:e=>P(e,{density:N(e.density,20),magicPower:N(e.magicPower,10)})},{id:A.BURNING_ROOT,type:`mix`,isActive:(e,t)=>M(e,j.MANDRAKE_ROOT,j.PHOENIX_FEATHER)&&t.temperature>=40,applyValues:e=>P(e,{temperature:e.temperature+15,density:N(e.density,-10)})},{id:A.VOID_RESONANCE,type:`mix`,isActive:(e,t)=>M(e,j.ESSENCE_VOID,j.DRAGON_TEARS)&&t.magicPower>=50,applyValues:e=>P(e,{magicPower:N(e.magicPower,30),temperature:e.temperature-5})}],ur=e=>Wn.find(t=>t.id===e)?.name??e,dr=e=>e.reduce((e,t)=>({temperature:e.temperature+t.temperature,density:e.density+t.density,magicPower:e.magicPower+t.magicPower}),{temperature:0,density:0,magicPower:0}),fr=(e,t,n)=>{let r=dr(e),i=lr.filter(n=>t.includes(n.id)&&n.isActive(e,r)),a=i.reduce((e,t)=>t.applyValues(e),r),o=i.filter(e=>!n.includes(e.id));return{values:a,active:i.map(({id:e})=>e),fired:o}},pr=class{intervalId=null;endTimestamp=0;start(e,t,n){this.stop(),this.endTimestamp=Date.now()+e*1e3,this.intervalId=window.setInterval(()=>{let e=Date.now(),r=Math.max(0,Math.floor((this.endTimestamp-e)/1e3));t(r),r<=0&&(this.stop(),n())},250)}stop(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null)}resume(e,t,n){this.start(n,e,t)}},mr=e=>Array.isArray(e)&&e.length===2&&Number.isFinite(e[0])&&Number.isFinite(e[1])&&e[0]<=e[1],hr=e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.icon==`string`&&typeof t.name==`string`&&Number.isFinite(t.density)&&Number.isFinite(t.temperature)&&Number.isFinite(t.magicPower)&&(t.count===void 0||Number.isInteger(t.count)&&t.count>=0&&t.count<=15)},gr=(e,t)=>{let n=t===`hard`?8:t===`medium`?6:4;return Array.isArray(e)&&e.length===n&&e.every(hr)},_r=(e,t)=>Array.isArray(e)&&e.length<=t&&e.every(hr),vr=(e,t)=>{if(!e||typeof e!=`object`)return!1;let n=e;return Number.isFinite(n.id)&&typeof n.name==`string`&&n.difficulty===t&&mr(n.temperature)&&mr(n.density)&&mr(n.magicPower)},yr=(e,t)=>Array.isArray(e)?e.filter(e=>!vr(e,t)).length===0:!1,br=e=>{if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.density)&&Number.isFinite(t.temperature)&&Number.isFinite(t.magicPower)},F=e=>Wn.some(({id:t})=>t===e),xr=(e,t)=>{let n=E[t];return Array.isArray(e)&&e.length===n.length&&e.every((e,t)=>F(e)&&e===n[t])},Sr=(e,t)=>{let n=E[t];return Array.isArray(e)&&e.every(e=>F(e)&&n.includes(e))},Cr=e=>{if(!e||typeof e!=`object`)return!1;let t=e,n=t.difficulty===`easy`&&typeof t.lives==`number`&&t.lives<=5&&t.lives>=1,r=(t.difficulty===`hard`||t.difficulty===`medium`)&&typeof t.lives==`number`&&t.lives<=3&&t.lives>=1,i=n||r;return t.difficulty!==`easy`&&t.difficulty!==`medium`&&t.difficulty!==`hard`||!i?!1:typeof t.playerName==`string`&&(t.status===`playing`||t.status===`paused`)&&(t.level===1||t.level===2||t.level===3)&&typeof t.score==`number`&&Number.isFinite(t.score)&&t.score>=0&&typeof t.timeLeft==`number`&&Number.isFinite(t.timeLeft)&&t.timeLeft>0&&t.maxIngredients===(t.difficulty===`hard`?5:4)&&gr(t.shelfIngredients,t.difficulty)&&vr(t.currentRecipe,t.difficulty)&&_r(t.cauldronIngredients,t.maxIngredients)&&br(t.cauldronValues)&&Array.isArray(t.recipes)&&yr(t.recipes,t.difficulty)&&Array.isArray(t.activeReactions)&&xr(t.enabledReactionIds,t.difficulty)&&Sr(t.activeReactions,t.difficulty)&&(t.lastReactionId===null||F(t.lastReactionId))&&Number.isFinite(t.startTimestamp)&&(t.gameId===void 0||typeof t.gameId==`string`)&&Number.isFinite(t.endTimestamp)&&(t.savedSession===void 0||I(t.savedSession.successfulBrews)&&I(t.savedSession.failedBrews)&&I(t.savedSession.reactionsTriggered)&&Number.isFinite(t.savedSession.elapsedMs)&&t.savedSession.elapsedMs>=0)},wr=e=>{if(!e||typeof e!=`object`||!Array.isArray(e.easy)||!Array.isArray(e.medium)||!Array.isArray(e.hard))return!1;let t=!0;return[e.easy,e.medium,e.hard].forEach(e=>{e.forEach(e=>{e&&typeof e==`object`&&typeof e.name==`string`&&typeof e.score==`number`&&e.score>0&&(e.date instanceof Date||typeof e.date==`string`||typeof e.date==`number`)||(t=!1)})}),t},Tr=e=>typeof e==`object`&&!!e,I=e=>Number.isInteger(e)&&typeof e==`number`&&e>=0,Er=e=>Tr(e)?e.kind===m&&typeof e.id==`string`&&Jn.includes(e.id)?!0:e.kind===`url`?typeof e.url==`string`&&ir(e.url):e.kind===`image`&&typeof e.dataUrl==`string`&&e.dataUrl.length<=12e4&&/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(e.dataUrl):!1,Dr=e=>Tr(e)?typeof e.playedAt==`number`&&Number.isFinite(e.playedAt)&&e.playedAt>=0&&(e.difficulty===t||e.difficulty===r||e.difficulty===n)&&typeof e.score==`number`&&Number.isFinite(e.score)&&e.score>=0&&(e.reason===ne||e.reason===`lives`||e.reason===`ingredients`)&&I(e.durationSeconds)&&I(e.successfulBrews)&&I(e.failedBrews)&&I(e.reactionsTriggered)&&(e.gameId===void 0||typeof e.gameId==`string`):!1,Or=e=>{if(!Tr(e))return!1;let t=typeof e.name==`string`&&(e.name===``||e.name.trim()===e.name&&e.name.length>=2&&e.name.length<=15&&!/[\u0000-\u001f]/.test(e.name));return e.version===1&&t&&Er(e.avatar)&&Array.isArray(e.history)&&e.history.length<=50&&e.history.every(Dr)&&Array.isArray(e.achievements)&&e.achievements.every(e=>typeof e==`string`&&/^[a-z0-9-]+$/.test(e))&&new Set(e.achievements).size===e.achievements.length},L=(e,t)=>e.reduce((e,n)=>e+t(n),0),kr=e=>{if(e.length===0)return{...Xn};let t=e.length,n=L(e,e=>e.durationSeconds);return{gamesPlayed:t,bestScore:Math.max(...e.map(e=>e.score)),averageScore:Math.round(L(e,e=>e.score)/t),totalDurationSeconds:n,averageDurationSeconds:Math.round(n/t),successfulBrews:L(e,e=>e.successfulBrews),failedBrews:L(e,e=>e.failedBrews),reactionsTriggered:L(e,e=>e.reactionsTriggered)}},Ar=(e,t)=>e.slice(0,Math.max(0,t)),jr=(e,t)=>t===`all`?e:e.filter(e=>e.difficulty===t),Mr=e=>{let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}h ${r}m`:`${r}m ${i}s`},Nr=e=>{let t=L(e,e=>e.successfulBrews),n=L(e,e=>e.failedBrews),r=t+n,i=e=>({games:e,share:r===0?0:e/r});return[i(t),i(n)]},Pr=36e5,Fr=24*Pr,Ir=42,Lr=3,Rr=6,zr=.25,Br=[`easy`,`medium`,`hard`],Vr=[`time`,`lives`,`ingredients`],R=(e,t,n)=>e+Math.floor(n()*(t-e+1)),Hr=(e,t)=>e[Math.floor(t()*e.length)],Ur=(e,t=Math.random)=>{let n=[];for(let r=0;r<Ir;r++){let i=new Date(e-r*Fr).getDay(),a=i===0||i===6,o=.6+.4*(1-r/41),s=t()<zr?0:R(1,a?Rr:Lr,t);for(let i=0;i<s;i++){let a=Hr(Br,t),s=Math.max(1,Math.round(R(3,8,t)*o));n.push({playedAt:e-r*Fr-i*Pr,difficulty:a,score:s*On[a],reason:Hr(Vr,t),durationSeconds:R(60,600,t),successfulBrews:s,failedBrews:R(0,4,t),reactionsTriggered:R(0,5,t)})}}return n},z=e=>{let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()},Wr=(e,t)=>{let n=new Date(e);return new Date(n.getFullYear(),n.getMonth(),n.getDate()+t).getTime()},Gr=e=>{let t=(new Date(e).getDay()+6)%7;return Wr(z(e),-t)},Kr=e=>e.map(({playedAt:e,score:t})=>({playedAt:e,score:t})).reverse(),qr=(e,t)=>e===`week`?Gr(t):z(t),Jr=(e,t)=>{if(t===`game`)return Kr(e);let n=new Map;return e.forEach(({playedAt:e,score:r})=>{let i=qr(t,e),a=n.get(i)??{total:0,games:0};a.total+=r,a.games+=1,n.set(i,a)}),[...n.entries()].sort(([e],[t])=>e-t).map(([e,{total:t,games:n}])=>({playedAt:e,score:Math.round(t/n),games:n}))},Yr=(e,t,n)=>{if(e.length===0)return[];let r=Math.max(1,...e.map(e=>e.score));return e.map((i,a)=>({x:e.length>1?a*t/(e.length-1):t/2,y:n-i.score/r*n}))},Xr=e=>e.map(({x:e,y:t},n)=>`${n===0?`M`:`L`}${e.toFixed(2)} ${t.toFixed(2)}`).join(` `),Zr=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}),Qr=e=>Zr.format(e),$r=({score:e,playedAt:t})=>`${e} pts · ${Qr(t)}`,ei=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`}),ti=(e,t)=>{if(t===`game`)return $r(e);let n=e.games??0,r=t===`week`?`Week of `:``;return`${e.score} avg · ${n} ${n===1?`game`:`games`} · ${r}${ei.format(e.playedAt)}`},ni=[t,r,n],ri=e=>ni.map(t=>{let n=e.filter(e=>e.difficulty===t).length;return{difficulty:t,games:n,share:e.length===0?0:n/e.length}}),ii=[`time`,`lives`,`ingredients`],ai=e=>ii.map(t=>{let n=e.filter(e=>e.reason===t).length;return{reason:t,games:n,share:e.length===0?0:n/e.length}}),oi=8,si=e=>{let t=Math.max(0,...e.map(e=>e.successfulBrews)),n=Math.max(1,Math.ceil((t+1)/oi)),r=[];for(let e=0;e<=t;e+=n)r.push({from:e,to:e+n-1,games:0});return e.forEach(({successfulBrews:e})=>{r[Math.floor(e/n)].games+=1}),r},ci=({from:e,to:t})=>e===t?`${e}`:`${e}–${t}`,li=e=>{let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()},ui=e=>{let t=new Map;return[...e].sort((e,t)=>e.playedAt-t.playedAt).forEach(({playedAt:e,score:n})=>{let r=li(e);t.set(r,[...t.get(r)??[],n])}),[...t].slice(-10).map(([e,t])=>({day:e,games:t.length,open:t[0],close:t[t.length-1],high:Math.max(...t),low:Math.min(...t)}))},di=(e,t=Date.now())=>{let n=new Map;e.forEach(({playedAt:e})=>{let t=z(e);n.set(t,(n.get(t)??0)+1)});let r=z(t),i=Array.from({length:42},(e,t)=>{let i=Wr(r,t-41);return{day:i,games:n.get(i)??0}}),a=Math.max(0,...i.map(e=>e.games));return i.map(({day:e,games:t})=>({day:e,games:t,level:a===0?0:Math.ceil(t/a*4)}))},B=new class{save(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}load(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}clear(e){try{localStorage.removeItem(e)}catch{return}}hasSave(e){try{return!!localStorage.getItem(e)}catch{return!1}}},fi=class{store;constructor(e=B){this.store=e}save(e){return this.store.save(`GAME_STATE`,e)}load(){let e=this.store.load(`GAME_STATE`);return!e||!Cr(e)?(this.store.clear(`GAME_STATE`),null):e}clear(){this.store.clear(`GAME_STATE`)}},pi=()=>({easy:[],medium:[],hard:[]}),mi=class{store;data;constructor(e=B){this.store=e,this.data=this.read()??pi()}get(){return this.data}reload(){return this.data=this.read()??this.data,this.data}isRecord(e,t){if(t<=0)return!1;let n=this.data[e];return n.length<10||t>=(n.at(-1)?.score??0)}add(e,t){let n=[...this.data[e],t].sort((e,t)=>t.score-e.score).slice(0,10);return this.data={...this.data,[e]:n},this.store.save(`LEADERBOARD`,this.data),this.data}clear(){return this.data=pi(),this.store.save(`LEADERBOARD`,this.data),this.data}read(){let e=this.store.load(`LEADERBOARD`);return e==null?null:wr(e)?e:(this.store.clear(`LEADERBOARD`),null)}};function hi(){return{version:1,name:``,avatar:{kind:m,id:`default`},history:[],achievements:[]}}var gi=new class{load(){let e=B.load(`PROFILE`);return e===null?null:Or(e)?e:(B.clear(`PROFILE`),null)}save(e){if(!Or(e))throw Error(ce);if(!B.save(`PROFILE`,e))throw Error(le)}loadOrCreate(){let e=this.load();if(e)return e;let t=hi();return this.save(t),t}removeProfile(){B.clear(`PROFILE`)}},_i=class{profile=null;service;constructor(e=gi){this.service=e;try{this.profile=e.load()}catch{this.profile=null}}get name(){return this.profile?.name??null}get isIncognito(){return this.profile===null}setName(e){let t=e.trim();if(!cr(t))return!1;let n=this.profile??hi();return this.persist({...n,name:t})}get avatar(){return this.profile?.avatar??null}setAvatar(e){return this.profile?this.persist({...this.profile,avatar:e}):!1}get history(){return this.profile?.history??[]}addRecord(e){return!this.profile||er(this.profile.history,e.gameId)?!1:this.persist({...this.profile,history:nr(this.profile.history,e)})}removeProfile(){return this.profile?(this.service.removeProfile(),this.profile=null,!0):!1}persist(e){return this.service.save(e),this.profile=e,!0}},vi=(e,t)=>Math.max(0,Math.floor((e-t)/1e3)),yi=(e,t,n)=>vi(e,t)+n,bi=(e,[t=0,n=0],r)=>e>=t-r&&e<=n+r,xi=(e,t,n)=>{let r=Tn[n];return bi(t.temperature,e.temperature,r)&&bi(t.density,e.density,r)&&bi(t.magicPower,e.magicPower,r)},Si=({timeLeft:e,score:t,difficulty:n})=>({timeLeft:Math.min(C[n].gameTime,C[n].bonus+e),score:On[n]+t}),Ci=(e,t=Math.random)=>{let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n},wi=(e,t,n=Math.random)=>e+Math.floor(n()*(t-e+1)),Ti=(e,t,n=Math.random)=>Ci(e,n).slice(0,t).map(e=>({...e,count:wi(2,15,n)})),Ei=(e,t,n=Math.random)=>Ci(e.filter(e=>e.difficulty===t),n),Di=(e,t,n,r=Math.random)=>{let i=e.length>0?e:Ei(t,n,r);return{recipe:i.at(-1)??null,queue:i.slice(0,-1)}},Oi=()=>({playerName:`Alchemist`,status:a,level:1,difficulty:r,score:0,lives:w[r],maxLives:w[r],timeLeft:0,currentRecipe:null,recipes:[],cauldronIngredients:[],cauldronValues:{density:0,magicPower:0,temperature:0},maxIngredients:En[r],shelfIngredients:[],enabledReactionIds:[...E[r]],activeReactions:[],lastReactionId:null,startTimestamp:0,endTimestamp:0}),V=new class{events=new Qn;timer=new pr;timerRunning=!1;session=tr(Date.now());leaderboard=new mi;gameSave=new fi;player=new _i;state=Oi();getState=()=>this.state;subscribe(e,t){this.events.on(e,t)}emit(e,t){this.events.emit(e,t)}update(e){this.state={...this.state,...e}}getUserName(){return this.player.name}isIncognito(){return this.player.isIncognito}setUserName(e){return this.player.setName(e)?(this.update({playerName:this.player.name??``}),this.emit(S.PLAYER_NAME_CHANGED,{name:this.player.name??``}),!0):!1}removeUserProfile(){return this.player.removeProfile()?(this.update({playerName:``}),this.emit(S.PLAYER_NAME_CHANGED,{name:``}),!0):!1}requestNameDialog(){this.state.status===a&&this.emit(S.OPEN_NAME_DIALOG,!0)}getUserAvatar(){return this.player.avatar}setUserAvatar(e){return this.player.setAvatar(e)?(this.emit(S.PLAYER_AVATAR_CHANGED,{avatar:e}),!0):!1}removeUserAvatar(){return this.setUserAvatar({kind:m,id:`default`})}getUserHistory(){return this.player.history}startNewGame=()=>{this.resetGameState(),this.session=tr(Date.now()),this.update({gameId:String(this.session.startedAt)}),this.initShelf(),this.pickRandomRecipe(),this.state.status=s,this.setTimer(),this.saveGame(),this.emit(S.GAME_START,this.state)};pauseGame(){let e=this.timerRunning?vi(this.state.endTimestamp,Date.now()):this.state.timeLeft;this.timer.stop(),this.timerRunning=!1,this.update({status:o,timeLeft:e}),this.saveGame(),this.emit(S.PAUSE,{auto:!1})}resumeGame(){this.update({status:s});let e=Date.now()+this.state.timeLeft*1e3;this.update({endTimestamp:e}),this.runTimer(this.state.timeLeft),this.saveGame(),this.emit(S.RESUME,this.state)}resetGameState(){this.timer.stop(),this.timerRunning=!1,this.state={...this.state,status:a,score:0,lives:w[this.state.difficulty],timeLeft:0,currentRecipe:null,recipes:[],cauldronIngredients:[],cauldronValues:{density:0,magicPower:0,temperature:0},shelfIngredients:[],enabledReactionIds:[...E[this.state.difficulty]],activeReactions:[],lastReactionId:null}}roundOver(e){this.timer.stop(),this.timerRunning=!1,this.saveGame(),this.emit(S.ROUND_OVER,{score:this.state.score,lives:this.state.lives,time:this.state.timeLeft,variant:e})}newRound(){if(this.state.shelfIngredients.every(e=>!e.count)){this.gameOver(`ingredients`);return}let e=Date.now()+this.state.timeLeft*1e3;this.update({endTimestamp:e}),this.runTimer(this.state.timeLeft),this.emit(S.SHELF_BLOCK,{isBlock:!1}),this.pickRandomRecipe(),this.clearCauldron(),this.state.shelfIngredients.every(e=>!e.count)?this.gameOver(`ingredients`):(this.emit(S.ROUND_START,{isStart:!0}),this.saveGame())}gameOver(e=`time`){let t=this.state.score,n=this.state.status===s||this.state.status===o,r=!this.player.isIncognito&&this.checkLeaderboard();this.timer.stop(),n&&this.recordGame(e,t),this.update({status:i}),this.emit(S.GAME_OVER,{score:t,isRecord:r,reason:e}),this.resetGameState(),this.gameSave.clear()}initShelf(){this.update({shelfIngredients:Ti(Cn,Dn[this.state.difficulty])})}pickRandomRecipe(){let{recipe:e,queue:t}=Di(this.state.recipes,wn,this.state.difficulty);this.update({recipes:t}),e&&(this.update({currentRecipe:e}),this.emit(S.RECIPE_CHANGED,{recipe:e,ingInCauldron:0}))}addIngredientToCauldron(e){let t=this.state.shelfIngredients.find(t=>t.id===e);if(!t||!t.count||this.state.cauldronIngredients.length>=this.state.maxIngredients)return;--t.count;let n=[...this.state.cauldronIngredients,t],{values:r,active:i,fired:a}=fr(n,this.state.enabledReactionIds,this.state.activeReactions);this.update({cauldronIngredients:n,cauldronValues:r,activeReactions:i,lastReactionId:a.at(-1)?.id??this.state.lastReactionId}),this.saveGame(),this.emit(S.CAULDRON_STATE_CHANGED,{values:r}),n.length===this.state.maxIngredients&&this.emit(S.SHELF_BLOCK,{isBlock:!0}),this.emit(S.INGREDIENT_IN_CAULDRON,n.length),this.emit(S.INGREDIENT_COUNT,{id:e,count:t.count}),this.applyReactionEffects(a)}applyReactionEffects(e){if(!e.length)return;this.session.reactionsTriggered+=e.length,e.forEach(({id:e})=>this.emit(S.REACTION_FIRED,{id:e,name:ur(e)}));let t=e.reduce((e,t)=>e-(t.effect?.lifeDelta??0),0),n=e.reduce((e,t)=>e+(t.effect?.timeDelta??0),0),r=e.some(e=>e.effect?.clearCauldron);for(let e=0;e<t;e++)this.loseLife();this.state.lives<=0?this.gameOver(`lives`):(r&&(this.clearCauldron(),this.emit(S.SHELF_BLOCK,{isBlock:!1}),this.emit(S.INGREDIENT_IN_CAULDRON,0)),n&&this.shiftTime(n),this.saveGame())}brewCheck(){if(this.state.status!==s||!this.state.cauldronIngredients.length)return;let e=this.state.currentRecipe;if(!e)return;let{difficulty:t,cauldronValues:n}=this.state;if(xi(e,n,t)){let{timeLeft:e,score:n}=Si({timeLeft:this.state.timeLeft,score:this.state.score,difficulty:t});this.update({timeLeft:e,score:n}),this.emit(S.TIMER_TICK,e),this.emit(S.SCORE_CHANGE,n),this.session.successfulBrews++,this.roundOver(`success`)}else this.session.failedBrews++,this.loseLife(),this.state.lives>0&&this.roundOver(`fail`),this.state.lives===0&&this.gameOver(`lives`)}loseLife(){let e=this.state.lives-1;this.update({lives:e}),this.emit(S.LIVES_CHANGE,{lives:e})}clearCauldron(){this.update({cauldronIngredients:[],cauldronValues:{temperature:0,density:0,magicPower:0},activeReactions:[]}),this.emit(S.CAULDRON_STATE_CHANGED,{values:this.state.cauldronValues}),this.emit(S.INGREDIENT_IN_CAULDRON,0)}pourOut(){this.state.status===s&&this.state.cauldronIngredients.length&&(this.clearCauldron(),this.emit(S.SHELF_BLOCK,{isBlock:!1}),this.emit(S.INGREDIENT_IN_CAULDRON,0),this.shiftTime(-10))}setTimer(){let e=C[this.state.difficulty].gameTime,t=Date.now(),n=t+e*1e3;this.update({startTimestamp:t,endTimestamp:n,timeLeft:e}),this.runTimer(e)}shiftTime(e){let t=yi(this.state.endTimestamp,Date.now(),e);return t<=0?(this.update({timeLeft:0}),this.emit(S.TIMER_TICK,0),this.gameOver(`time`),!1):(this.timer.stop(),this.update({timeLeft:t,endTimestamp:Date.now()+t*1e3}),this.emit(S.TIMER_TICK,t),this.runTimer(t),this.saveGame(),!0)}runTimer(e){this.timer.start(e,e=>{let t=e!==this.state.timeLeft;this.update({timeLeft:e}),this.emit(S.TIMER_TICK,e),t&&this.saveGame()},()=>this.gameOver()),this.timerRunning=!0}submitScore(e,t){this.setToLeaderboard({name:e,score:t,date:new Date})}recordGame(e,t){this.player.addRecord($n({stats:this.session,difficulty:this.state.difficulty,score:t,reason:e,now:Date.now(),gameId:this.state.gameId}))}saveGame(){let{status:e,timeLeft:t}=this.state;if(e!==s&&e!==o)return;let n=e===s&&this.timerRunning?vi(this.state.endTimestamp,Date.now()):t;this.gameSave.save({...this.state,timeLeft:n,savedSession:{successfulBrews:this.session.successfulBrews,failedBrews:this.session.failedBrews,reactionsTriggered:this.session.reactionsTriggered,elapsedMs:Date.now()-this.session.startedAt}})}checkLeaderboard(){return this.leaderboard.isRecord(this.state.difficulty,this.state.score)}setToLeaderboard(e){this.emit(S.SHOW_LEADERBOARD,this.leaderboard.add(this.state.difficulty,e))}clearLeaderboard(){this.emit(S.SHOW_LEADERBOARD,this.leaderboard.clear())}showLeaderboard(){this.emit(S.SHOW_LEADERBOARD,this.leaderboard.reload())}showRules(){this.emit(S.SHOW_RULES,!0)}changeDifficulty=e=>{this.state.status===a&&this.update({difficulty:e,lives:w[e],maxLives:w[e],maxIngredients:En[e]})};continueLastGame(){let e=this.gameSave.load();e&&(this.session=rr(e.savedSession,Date.now()),this.timer.stop(),this.timerRunning=!1,this.update({...e,gameId:e.gameId??String(Date.now()),endTimestamp:Date.now()+e.timeLeft*1e3}),this.emit(S.GAME_START,this.state),this.pauseGame())}exitToMenu(){this.timer.stop(),this.resetGameState(),this.gameSave.clear(),this.emit(S.MENU_SHOWN,!0)}loadSavedGame(){return this.gameSave.load()}},H=class{node;constructor({parentNode:e,tagName:t=`div`,className:n,content:r,attrs:i}){if(this.node=document.createElement(t),Array.isArray(n)){let e=n.filter(Boolean);e.length&&this.node.classList.add(...e)}else typeof n==`string`&&n.trim()!==``&&(this.node.className=n);this.setContent(r),i&&this.setAttributes(i),e&&e.append(this.node)}setAttributes(e){Object.entries(e).forEach(([e,t])=>{t===null?this.node.removeAttribute(e):this.node.setAttribute(e,String(t))})}setContent(e){this.node.innerHTML=``,e&&(typeof e==`string`?this.node.textContent=e:e instanceof HTMLElement?this.node.append(e):e.forEach(e=>{typeof e==`string`?this.node.append(document.createTextNode(e)):this.node.append(e)}))}append(e){this.node.append(e)}destroy(){this.node.remove()}},U=class extends H{constructor({parentNode:e,icon:t,className:n,variant:r,size:i,shadow:a}){super({parentNode:e,tagName:`span`,className:[`app-icon`,n??``,r?`app-icon_${r}`:``,i?`app-icon_size-${i}`:``,a?`app-icon_shadow-${a}`:``]}),this.node.insertAdjacentHTML(`beforeend`,x[t])}},ki=e=>e.map(e=>e?`app_button_${e}`:void 0).filter(e=>e!==void 0),W=class extends H{textNode=null;text;leftIcon=null;rightIcon=null;iconRotate=null;constructor({parentNode:e,className:t,variant:n,color:r,size:i,corner:a,text:o,leftIcon:s,rightIcon:c,fullWidth:l,disabled:u,ariaLabel:d,iconRotate:f,onClick:p}){super({parentNode:e,tagName:`button`,className:[`app_button`,...t?[t]:[],...ki([r,n,i,a,l])],attrs:{ariaLabel:d??`Button`,disabled:u?`true`:null}}),this.text=o??null,this.leftIcon=s??null,this.rightIcon=c??null,this.iconRotate=f??null,p&&(this.node.onclick=()=>p()),this.render()}render(){this.leftIcon&&(this.node.insertAdjacentHTML(`beforeend`,x[this.leftIcon]),this.iconRotate&&(this.node.style.transform=`rotate(${this.iconRotate})`),this.text&&this.renderTextNode(this.text)),this.text&&!this.textNode&&this.renderTextNode(this.text),this.rightIcon&&this.node.insertAdjacentHTML(`beforeend`,x[this.rightIcon])}renderTextNode(e){this.textNode=new H({parentNode:this.node,className:`app_button_text`,tagName:`span`,content:e})}setLeftIcon(e){this.text||(this.node.innerHTML=``,this.node.insertAdjacentHTML(`beforeend`,x[e]))}setText(e){this.textNode&&this.textNode.setContent(e)}setDisabled=e=>{e?this.node.setAttribute(`disabled`,`true`):this.node.removeAttribute(`disabled`)};setHidden=e=>{e?this.node.classList.add(`app_button_hidden`):this.node.classList.remove(`app_button_hidden`)};destroy(){this.node.onclick=null,super.destroy()}},Ai=class extends H{rangeNem=7;step=10;rangeZone=this.rangeNem*this.step;rangeZoneOnePercent=this.rangeZone/100;value=0;leftStopper;rightStopper;arrow;min;max;recipeMin;recipeMax;firstNumber;lastNumber;constructor({parentNode:e,rangeMax:t,rangeMin:n,value:r}){super({parentNode:e,tagName:`span`,className:`app-range-line`}),this.render(t,n,r)}render(e,t,n){this.recipeMin=t,this.recipeMax=e;let r=this.generateScale(t,e);this.min=r.at(0)??0,this.max=r.at(-1)??this.rangeNem*this.step,this.leftStopper=new U({parentNode:this.node,className:this.setClass(`left-stop`),icon:`stop`}),this.leftStopper.node.style.left=this.getStopperPosition(t),this.arrow=new U({parentNode:this.node,className:this.setClass(`arrow`),icon:`arrow`}),this.arrow.node.style.left=this.getStopperPosition(n),this.rightStopper=new U({parentNode:this.node,className:this.setClass(`right-stop`),icon:`stop`}),this.rightStopper.node.style.left=this.getStopperPosition(e);let i=new H({parentNode:this.node,tagName:`span`,className:this.setClass(`stop-num-left`),content:t.toString()});i.node.style.left=this.getStopperPosition(t);let a=new H({parentNode:this.node,tagName:`span`,className:this.setClass(`stop-num-right`),content:e.toString()});a.node.style.left=this.getStopperPosition(e);let o=new H({parentNode:this.node,className:this.setClass(`count`)});r.forEach((e,t)=>{let n=new H({parentNode:o.node,tagName:`span`,content:e.toString()});t>0&&t<r.length-1&&(n.node.style.left=this.getStopperPosition(e)),t===0&&(this.firstNumber=n.node),t===r.length-1&&(this.lastNumber=n.node)}),this.setInRange(0)}setClass(e){return`app-range-line_${e}`}getStopperPosition(e){let t=this.max-this.min;return`${(e-this.min)/t*100}%`}roundToStep(e){return Math.round(e/this.step)*this.step}generateScale(e,t){let n=(e+t)/2,r=this.roundToStep(n),i=this.rangeNem,a=O(i,r-Math.floor(i/2)*this.step,this.step);for(;a[0]>0||a[a.length-1]<0;)i+=1,a=O(i,r-Math.floor(i/2)*this.step,this.step);return this.rangeNem=i,a}setInRange(e){this.node.classList.toggle(`app-range-line--in-range`,e>=this.recipeMin&&e<=this.recipeMax)}updateRange=e=>{this.setInRange(e),e>this.max?(this.lastNumber.textContent=`...   ${e}`,this.arrow.node.style.left=`100%`):e<this.min?(this.firstNumber.textContent=`${e}   ...`,this.arrow.node.style.left=`0%`):(e<=this.max&&(this.lastNumber.textContent=this.max.toString()),e>=this.min&&(this.firstNumber.textContent=this.min.toString()),this.arrow.node.style.left=this.getStopperPosition(e))}},ji=class extends H{nodeClassName=`app-range-slider`;range;value=0;rangeLine;constructor({parentNode:e,label:t,range:n,value:r,icon:i}){super({parentNode:e,tagName:`div`,className:`app-range-slider`}),this.range=n,this.value=r,this.render(t,i)}render(e,t){new U({parentNode:this.node,icon:t,className:this.setClassName(`icon`)}),new H({parentNode:this.node,tagName:`h3`,content:e,className:this.setClassName(`title`)}),this.rangeLine=new Ai({parentNode:this.node,rangeMax:this.range.max,rangeMin:this.range.min,value:this.value})}setClassName=e=>`${this.nodeClassName}_${e}`;updateRange=e=>{this.rangeLine.updateRange(e)}},G=class extends H{inputNode;errorNode;validate;constructor({parentNode:e,placeholder:t,maxlength:n,className:r,value:i,validate:a}){super({parentNode:e,tagName:`div`,className:[`app-input`,r??``]}),this.validate=a,this.inputNode=new H({parentNode:this.node,tagName:`input`,className:`app-input_field`,attrs:{placeholder:t,maxlength:n,autofill:`off`,value:i??``}}),this.errorNode=new H({parentNode:this.node,tagName:`span`,className:`app-input_error`,content:``}),this.inputNode.node.addEventListener(`input`,()=>{this.validate&&this.setError(this.validate(this.getValue()))}),this.inputNode.node.addEventListener(`blur`,()=>this.setError(``))}setError(e){this.errorNode.node.textContent=e,e?(this.node.classList.add(`has-error`),this.errorNode.node.classList.add(`visible`)):(this.node.classList.remove(`has-error`),this.errorNode.node.classList.remove(`visible`))}getInput(){return this.inputNode}setDisabled(e){let t=this.inputNode.node;e?(t.setAttribute(`disabled`,`true`),this.node.classList.add(`input-disabled`)):(t.removeAttribute(`disabled`),this.node.classList.remove(`input-disabled`))}onInput(e){let t=this.inputNode.node;t.addEventListener(`input`,()=>{e(t.value.trim())})}getValue(){return this.inputNode.node.value.trim()}clear(){this.inputNode.node.value=``}destroy(){super.destroy()}},Mi=class extends H{triggerIcon;menuSettings=[{name:p,callback:e=>V.changeDifficulty(e)},{name:f,callback:()=>V.continueLastGame()},{name:te,callback:()=>V.startNewGame()},{name:ee,callback:()=>V.showLeaderboard()}];difficultyRadios=[];dropdownList;isDropdownOpen=!1;onWindowResize=()=>{this.onClose()};constructor({parentNode:e,className:t,triggerIcon:n}){super({parentNode:e,tagName:`div`,className:[`app-menu`,t??``]}),this.triggerIcon=n,window.addEventListener(`resize`,this.onWindowResize),this.render()}handleOutsideClick=e=>{let t=e.target;this.node.contains(t)||this.onClose()};render(){new W({parentNode:this.node,color:`magic-icon`,leftIcon:this.triggerIcon,onClick:()=>this.onToggle()}),this.dropdownList=new H({parentNode:this.node,className:[`app-menu_dropdown`,`app-menu_dropdown_top`],tagName:`ul`}),this.menuSettings.forEach(({name:e,callback:i})=>{let{difficulty:o,status:c}=V.getState();if(e===p){let i=new H({parentNode:this.dropdownList.node,tagName:`li`,className:[`app-menu_dropdown_item_radios`,`app-menu_dropdown_item`,c===a?``:`app-menu_dropdown_item_disabled`]});new H({parentNode:i.node,tagName:`span`,content:`${e}: `}),[t,r,n].forEach(e=>{let t=o===e,n=new H({parentNode:i.node,tagName:`button`,className:`app-menu_dropdown_item_radios_radio`});n.node.onclick=()=>{this.difficultyRadios.forEach(({radio:t,name:n})=>{n===e?t.classList.add(`app-menu_dropdown_item_radios_radio_selected`):t.classList.remove(`app-menu_dropdown_item_radios_radio_selected`)}),this.onChangeDifficulty(e)};let r=new H({parentNode:n.node,tagName:`span`,className:t?`app-menu_dropdown_item_radios_radio_selected`:void 0});this.difficultyRadios.push({name:e,radio:r.node})});return}let l=new H({parentNode:this.dropdownList.node,tagName:`li`,className:[`app-menu_dropdown_item`],content:e});e===f&&(c===s||!V.loadSavedGame())||e===te&&c===`playing`?l.node.classList.add(`app-menu_dropdown_item_disabled`):l.node.onclick=()=>{this.onClose(),i()}})}updatePosition(){let e=this.dropdownList.node,t=document.querySelector(`#app`)?.getBoundingClientRect();if(!t)return;e.style.left=``;let n=e.getBoundingClientRect().right-(t.right-24);if(n>0){let t=parseInt(window.getComputedStyle(e).left)||e.offsetLeft;e.style.left=`${t-n-24}px`}}onOpen(){this.isDropdownOpen=!0,this.dropdownList.node.classList.add(`app-menu_dropdown_open`),this.updatePosition(),document.addEventListener(`click`,this.handleOutsideClick)}onClose(){this.isDropdownOpen=!1,this.dropdownList.node.classList.remove(`app-menu_dropdown_open`),document.removeEventListener(`click`,this.handleOutsideClick)}onToggle(){this.isDropdownOpen?this.onClose():this.onOpen()}onChangeDifficulty(e){V.changeDifficulty(e)}destroy(){document.removeEventListener(`click`,this.handleOutsideClick),window.removeEventListener(`resize`,this.onWindowResize),this.onClose(),super.destroy()}},Ni=class extends H{constructor({parentNode:e,className:t}){super({parentNode:e,tagName:`span`,className:[`app-avatar`,t??``]})}setAvatar(e,t){let n=or(e);if(this.node.replaceChildren(),n){let e=document.createElement(`img`);e.className=`app-avatar_img`,e.src=n,e.alt=``,this.node.append(e)}else this.node.textContent=t.charAt(0).toUpperCase()||`?`}},K=`app-mini-cauldron`,Pi=[{x:20,y:40},{x:45,y:25},{x:65,y:50},{x:35,y:62},{x:78,y:30}],Fi=class extends H{constructor({parentNode:e,className:t}){super({parentNode:e,tagName:`div`,className:[K,t||``]}),this.render()}render(){let e=new H({parentNode:this.node,tagName:`div`,className:`${K}_pot`});new U({parentNode:e.node,icon:`cauldron_back`,className:`${K}_back`}),new H({parentNode:e.node,tagName:`div`,className:`${K}_potion`}),Pi.forEach(({x:t,y:n},r)=>{let i=new H({parentNode:e.node,tagName:`span`,className:`${K}_bubble`});i.node.style.setProperty(`--x`,`${t}%`),i.node.style.setProperty(`--y`,`${n}%`),i.node.style.setProperty(`--i`,r.toString())}),new U({parentNode:e.node,icon:`cauldron_front`,className:`${K}_front`})}destroy(){super.destroy()}},Ii=class extends H{score;countNode;constructor({parentNode:e,score:t}){super({parentNode:e,tagName:`div`,className:`app-score`}),this.score=t??0,V.subscribe(S.SCORE_CHANGE,e=>{this.score!==e&&(this.score=e,this.countNode.node.textContent=e.toString())}),this.render()}render(){new U({parentNode:this.node,icon:`score`,variant:`magic`,className:`app-score_icon`}),new H({parentNode:this.node,tagName:`span`,className:`app-score_text`,content:`Score: `}),this.countNode=new H({parentNode:this.node,tagName:`span`,className:`app-score_count`,content:`${this.score}`})}},Li=15,Ri=class extends H{timerNode;barFill;constructor({parentNode:e,showPauseButton:t=!0}){super({parentNode:e,tagName:`div`,className:`app-timer`}),V.subscribe(S.TIMER_TICK,e=>{this.update(e)}),this.render(t)}render(e){if(e){let e=new H({parentNode:this.node,tagName:`div`,className:`app-timer_btn-wrap`});new W({parentNode:e.node,leftIcon:`clock`,className:`app-timer_btn-wrap_btn`,color:`magic-icon-2`,onClick:()=>V.pauseGame()}),new U({parentNode:e.node,icon:`pause`,className:`app-timer_btn-wrap_pause`})}let t=new H({parentNode:this.node,tagName:`div`,className:`app-timer_info`}),n=new H({parentNode:t.node,tagName:`div`,className:`app-timer_row`});new H({parentNode:n.node,tagName:`span`,className:`app-timer_text`,content:`Time: `}),this.timerNode=new H({parentNode:n.node,tagName:`span`,className:`app-timer_count`,content:`0`});let r=new H({parentNode:t.node,tagName:`div`,className:`app-timer_bar`});this.barFill=new H({parentNode:r.node,tagName:`div`,className:`app-timer_bar_fill`}),this.barFill.node.style.transform=`scaleX(0)`}update(e){let{difficulty:t}=V.getState(),n=C[t].gameTime,r=Math.max(0,Math.min(1,e/n));this.timerNode.node.textContent=this.formatTime(e),this.barFill.node.style.transform=`scaleX(${r})`,this.node.classList.toggle(`app-timer--danger`,e>0&&e<Li)}formatTime(e){let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`}},zi=class extends H{maxLives;currentLivesCount;constructor({parentNode:e,currentLivesCount:t,maxLives:n}){super({parentNode:e,tagName:`div`,className:`app-lives`}),this.maxLives=n,this.currentLivesCount=t,V.subscribe(S.LIVES_CHANGE,({lives:e})=>{this.currentLivesCount=e,this.render()}),this.render()}render(){this.node.innerHTML=``;let e=this.maxLives-this.currentLivesCount;e>0&&O(e).forEach(()=>{new U({parentNode:this.node,icon:`heart_empty`})}),O(this.currentLivesCount).forEach(()=>{new U({parentNode:this.node,icon:`heart`})})}},Bi=class extends H{constructor({parentNode:e,currentLivesCount:t,maxLives:n,showLives:r=!0,showPauseButton:i=!0}){super({parentNode:e,tagName:`div`,className:`app-game-header`}),this.render(t,n,r,i)}render(e,t,n,r){new Ii({parentNode:this.node,score:0}),new Ri({parentNode:this.node,showPauseButton:r}),n&&new zi({parentNode:this.node,currentLivesCount:e,maxLives:t})}},Vi=class extends H{isStartState=!1;callback;mainBtn;currentClassName=`;`;menu=null;rulesBtn=null;constructor({parentNode:e,isStartState:t,callback:n}){super({parentNode:e,tagName:t?`div`:`footer`,className:t?`app-start-menu`:`app-footer`}),this.isStartState=t??!1,this.callback=n,this.currentClassName=t?`app-start-menu`:`app-footer`,t||V.subscribe(S.INGREDIENT_IN_CAULDRON,e=>{e===0?this.mainBtn.node.setAttribute(`disabled`,`true`):this.mainBtn.node.removeAttribute(`disabled`)}),this.render()}render(){this.rulesBtn=new W({parentNode:this.node,className:`${this.currentClassName}_rules-btn`,color:`magic-icon`,leftIcon:`book`,onClick:()=>{V.showRules()}}),this.mainBtn=new W({parentNode:this.node,className:`${this.currentClassName}_main-btn`,color:`magic`,text:this.isStartState?`Start Game`:`Brew`,leftIcon:`symbol`,rightIcon:`symbol`,onClick:()=>this.callback()}),this.isStartState||this.mainBtn.setDisabled(!V.getState().cauldronIngredients.length),this.menu=new Mi({parentNode:this.node,className:`${this.currentClassName}_menu`,position:this.isStartState?u:d,triggerIcon:`settings`})}destroy(){this.rulesBtn?.destroy(),this.mainBtn.destroy(),this.menu?.destroy(),super.destroy()}},Hi=class extends H{router;navListItems=[];pageName;userName;userLogo;logoButton;nameButton;resetProfileButton;avatar;constructor({parentNode:e,router:t}){super({parentNode:e,tagName:`header`,className:`app-header`}),this.router=t,this.router.subscribe(Kn.PATH_CHANGE,()=>{this.syncNav(),this.syncButtons()});let n=()=>this.syncButtons();V.subscribe(S.GAME_START,n),V.subscribe(S.GAME_OVER,n),V.subscribe(S.MENU_SHOWN,n),V.subscribe(S.PLAYER_NAME_CHANGED,({name:e})=>{this.node.isConnected&&(this.userName.setContent(e||`Incognito`),this.nameButton.setText(e?`Change name`:`Enter name`),this.syncButtons(),this.syncAvatar())}),V.subscribe(S.PLAYER_AVATAR_CHANGED,()=>{this.node.isConnected&&this.syncAvatar()}),this.render()}render(){let e=new H({parentNode:this.node,tagName:`div`,className:`app-header_wrap`}),t=qn(this.router.current())?.name??g;this.logoButton=new W({parentNode:e.node,className:`app-header_wrap_icon`,leftIcon:`symbol`,variant:`empty`,onClick:()=>this.router.navigate(D[g])}),this.pageName=new H({parentNode:e.node,tagName:`h1`,className:`app-header_wrap_title`});let n=new H({parentNode:this.node,tagName:`nav`,className:`app-header_nav`});Gn.forEach(({name:e,path:r})=>{let i=e===t,a=new W({parentNode:n.node,className:`app-header_nav_item`,variant:`empty`,text:e,color:`dark`,onClick:()=>this.router.navigate(r)});a.node.classList.toggle(`app-header_nav_item_active`,i),this.navListItems.push({name:e,button:a})});let r=new H({parentNode:this.node,tagName:`div`,className:`app-header_user`});this.avatar=new Ni({parentNode:r.node,className:`app-header_user_logo`}),this.userName=new H({parentNode:r.node,tagName:`span`,className:`app-header_user_name`,content:V.getUserName()||`Incognito`}),this.userLogo=new H({parentNode:this.node,tagName:`div`,className:`app-header_user-logo`}),this.nameButton=new W({parentNode:this.node,className:`app-header_name-button`,color:`dark`,text:V.getUserName()?`Change name`:`Enter name`,onClick:()=>V.requestNameDialog()}),this.resetProfileButton=new W({parentNode:this.node,className:`app-header_reset-button`,color:`dark`,text:`Remove profile`,onClick:()=>V.removeUserProfile()}),this.syncButtons(),this.syncNav(),this.syncAvatar()}syncButtons(){let e=this.router.current()===D[g]&&V.getState().status===a,t=V.isIncognito();this.nameButton.setHidden(!e),this.resetProfileButton.setHidden(!e||t),this.navListItems[1]?.button.setDisabled(t)}syncNav(){let e=qn(this.router.current())?.name??g;this.navListItems.forEach(({button:t,name:n})=>{let r=n===e;t.node.classList.toggle(`app-header_nav_item_active`,r),t.node.setAttribute(`aria-current`,r?`page`:`false`)}),this.pageName.setContent(e===g?fe:e),this.logoButton.node.classList.toggle(`app-header_wrap_icon_disabled`,e===g)}syncAvatar(){this.avatar.setAvatar(V.getUserAvatar(),V.getUserName()??``)}destroy(){super.destroy()}},Ui=[{name:b,path:D[b]},{name:y,path:D[y]}],Wi=class extends H{router;buttons=[];cauldron=null;constructor({parentNode:e,className:t,router:n}){super({parentNode:e,className:[t||``,`app-sidebar`]}),this.router=n,this.render()}render(){new U({parentNode:this.node,icon:`symbol`,className:`app-sidebar_icon`});let e=new H({parentNode:this.node,tagName:`ul`,className:`app-sidebar_list`});Ui.forEach(({name:t,path:n})=>{let r=new H({parentNode:e.node,tagName:`li`,className:`app-sidebar_list_item`}),i=this.router.current(),a=new W({parentNode:r.node,text:t,onClick:()=>{this.router.navigate(n)},color:`link`,disabled:i===n?`disabled`:void 0});this.buttons.push(a)});let t=new H({parentNode:this.node,tagName:`div`,className:`app-sidebar_cauldron`});this.cauldron=new Fi({parentNode:t.node})}destroy(){this.buttons.forEach(e=>e.destroy()),this.buttons=[],this.cauldron?.destroy(),this.cauldron=null,super.destroy()}},Gi=class extends H{pendingClose=null;activeComponent=null;isLocked=!1;onClose=null;constructor({className:e}={}){super({parentNode:null,tagName:`div`,className:[`app_portal`,e??``],attrs:{id:`appPortal`}}),this.node.addEventListener(`click`,this.handleOutsideClick),document.addEventListener(`keydown`,this.handleEsc)}mount(e,t){this.activeComponent=t??null,this.cancelPendingClose(),document.body.style.overflow=`hidden`,this.node.innerHTML=``,document.body.appendChild(this.node),this.node.appendChild(e),this.node.classList.add(`app_portal_open`)}closePortal=()=>{this.isLocked||this.onClose?.()};handleOutsideClick=e=>{this.isLocked||e.target.id===`appPortal`&&this.closePortal()};handleEsc=e=>{e.key===`Escape`&&this.closePortal()};unmount(){this.cancelPendingClose(),this.node.classList.remove(`app_portal_open`,`app_portal_bg-blur`),getComputedStyle(this.node).opacity===`0`?this.cleanup():(this.pendingClose=e=>{e.target===this.node&&e.propertyName===`opacity`&&(this.cancelPendingClose(),this.cleanup())},this.node.addEventListener(`transitionend`,this.pendingClose))}cancelPendingClose(){this.pendingClose&&=(this.node.removeEventListener(`transitionend`,this.pendingClose),null)}cleanup(){this.activeComponent?.destroy(),this.activeComponent=null,this.node.innerHTML=``,this.node.parentNode&&(this.node.parentNode.removeChild(this.node),document.body.style.overflow=`auto`)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}setBlur(){this.node.classList.add(`app_portal_bg-blur`)}},Ki=class extends H{constructor({parentNode:e,onBack:t,onContinue:n}){super({parentNode:e,tagName:`div`,className:`app-pause`}),this.render(t,n)}render(e,t){new H({parentNode:this.node,tagName:`h2`,className:`app-pause_title`,content:`Game on pause`}),new U({parentNode:this.node,icon:`symbol_2`,size:`lg`,className:`app-pause_icon`}),new H({parentNode:this.node,tagName:`p`,className:`app-pause_hint`,content:`Keys: 1–8 ingredient · B brew · X pour out · P / Esc pause`});let n=new H({parentNode:this.node,tagName:`div`,className:`app-pause_btn-wrap`});new W({parentNode:n.node,className:`app-pause_btn-wrap_continue`,text:`Continue`,color:`magic`,onClick:t}),new W({parentNode:n.node,className:`app-pause_btn-wrap_continue`,text:`Exit to menu`,color:`arrow-left`,onClick:e})}},qi=class extends H{rules=[`Click Start Game button`,`To pause the game, hover over the clock icon and click it, or switch to another tab`,`Look at recipe required ranges for temperature, density and magic power.`,`Pick ingredients from the shelf and add them to the cauldron to change these three parameters.`,`Watch the bars: each ingredient increases or decreases temperature, density and magic power.`,`Your goal is to keep all three parameters inside the recipe ranges when you press Brew.`,`If all parameters are within the ranges, the brew is successful and you gain score and bonus time.`,`If at least one parameter is out of range, the brew fails and you lose one life.`,`Keyboard (while playing): 1–8 add the ingredient from the shelf, B brew, X pour out (−10 s), P or Esc pause.`,`When you lose all lives, run out of time or run out of ingredients, the game ends. A score above 0 that makes the Top-10 can be added to the leaderboard.`];constructor({parentNode:e,onClose:t}){super({parentNode:e,tagName:`div`,className:`app-rules`}),this.render(t)}render(e){let t=new H({parentNode:this.node,className:`app-rules_wrap`,tagName:`div`});new H({parentNode:t.node,tagName:`h2`,className:`app-rules_wrap_title`,content:`Game Rules`});let n=new H({parentNode:t.node,tagName:`ul`,className:`app-rules_wrap_list`});this.rules.forEach(e=>{new H({parentNode:n.node,tagName:`li`,content:e})}),new W({parentNode:t.node,className:`app-rules_wrap_btn`,text:`Close`,color:`magic`,leftIcon:`symbol`,onClick:()=>e()})}},Ji=[t,r,n],Yi=class extends H{constructor({parentNode:e,onBack:t,onClean:n,data:r}){super({parentNode:e,tagName:`div`,className:`app-leaderboard`}),this.render(r,t,n)}render(e,t,n){let r=new H({parentNode:this.node,tagName:`div`,className:`app-leaderboard_wrap`});new H({parentNode:r.node,tagName:`h2`,className:`app-leaderboard_wrap_title`,content:`Top Alchemists Leaderboard`});let i=new H({parentNode:r.node,tagName:`table`,className:`app-leaderboard_wrap_table`}),a=new H({parentNode:new H({parentNode:i.node,tagName:`thead`,className:`app-leaderboard_wrap_table_head`}).node,tagName:`tr`});[`Rank`,`Name`,`Score`,`Difficulty`,`Date`].forEach(e=>{new H({parentNode:a.node,tagName:`th`,content:e})});let o=new H({parentNode:i.node,tagName:`tbody`,className:`app-leaderboard_wrap_table_body`}),s=Ji.flatMap(t=>e[t].map((e,n)=>({...e,difficulty:t,rank:n}))),c=s.length>0;c?s.sort((e,t)=>t.score-e.score).forEach((e,t)=>{let n=new H({parentNode:o.node,tagName:`tr`}),r=new H({parentNode:n.node,tagName:`td`,content:t>=3?(t+1).toString():void 0});t<=2&&new U({parentNode:r.node,icon:`place_${t+1}`,size:`md`}),new H({parentNode:n.node,tagName:`td`,className:`app-leaderboard_wrap_table_name`,content:e.name}),new H({parentNode:n.node,tagName:`td`,content:String(e.score)}),new H({parentNode:n.node,tagName:`td`,content:e.difficulty[0].toUpperCase()+e.difficulty.slice(1)}),new H({parentNode:n.node,tagName:`td`,className:`app-leaderboard_wrap_table_date`,content:Zn(new Date(e.date))})}):new H({parentNode:new H({parentNode:o.node,tagName:`tr`}).node,tagName:`td`,className:`app-leaderboard_wrap_table_empty`,attrs:{colspan:`5`},content:`Leaderboard is empty`});let l=new H({parentNode:r.node,tagName:`div`,className:`app-leaderboard_wrap_actions `});new W({parentNode:l.node,color:`arrow-left`,text:`Back`,className:`app-leaderboard_back-btn`,onClick:t});let u=new H({parentNode:r.node,tagName:`div`,className:`app-leaderboard_confirm app-leaderboard_confirm--hidden`});new H({parentNode:u.node,tagName:`p`,className:`app-leaderboard_confirm-text`,content:`Clear the whole leaderboard? This cannot be undone.`});let d=new H({parentNode:u.node,tagName:`div`,className:`app-leaderboard_confirm-actions`}),f=e=>{u.node.classList.toggle(`app-leaderboard_confirm--hidden`,!e),l.node.classList.toggle(`app-leaderboard_confirm--hidden`,e)};new W({parentNode:d.node,color:`arrow-left`,text:`Cancel`,onClick:()=>f(!1)}),new W({parentNode:d.node,color:`magic`,text:`Yes, clear`,onClick:n}),new W({parentNode:l.node,color:`magic`,text:`Clear Leaderboard`,className:`app-leaderboard_clear-btn`,leftIcon:`symbol`,disabled:c?void 0:`disabled`,onClick:()=>{c&&f(!0)}})}destroy(){super.destroy()}},Xi=class extends H{inputNode;submit;cancel;onSubmit;onSkip;constructor({parentNode:e,onSkip:t,onSubmit:n}){super({parentNode:e,className:`app-user-name-form`,tagName:`form`}),this.onSubmit=n,this.onSkip=t,this.render(),this.node.addEventListener(`submit`,e=>{e.preventDefault(),this.handleSubmit()})}render(){new H({parentNode:this.node,className:`app-user-name-form_title`,tagName:`h2`,content:Ot}),new H({parentNode:this.node,className:`app-user-name-form_subtitle`,tagName:`p`,content:kt}),this.inputNode=new G({parentNode:this.node,placeholder:Dt,maxlength:`15`,className:`app-user-name-form_input`,value:V.getUserName()??``,validate:k}),this.cancel=new W({parentNode:this.node,className:`app-user-name-form_cancel`,text:`Cancel`,size:`sm`,onClick:()=>this.onSkip(),color:`arrow-left`,ariaLabel:`button`}),this.cancel.setAttributes({role:`button`,type:`button`}),this.submit=new W({parentNode:this.node,className:`app-user-name-form_submit`,text:`SUBMIT`,size:`sm`,leftIcon:`symbol`,onClick:()=>this.handleSubmit(),color:`magic`,ariaLabel:`button`}),this.submit.setAttributes({role:`button`,type:`button`})}handleSubmit(){let e=this.inputNode.getValue(),t=e?k(e):h;t?this.inputNode.setError(t):this.onSubmit(e)||this.inputNode.setError(h)}destroy(){this.inputNode?.destroy(),this.submit?.destroy(),super.destroy()}},q=`app-cauldron_cauldron-wrap`,Zi=[{x:18,y:40},{x:38,y:22},{x:58,y:48},{x:72,y:26},{x:28,y:62},{x:82,y:54}],Qi={bubble:9,smoke:5},$i={bubble:5,smoke:8},ea=class extends H{potion;pourBtn;pot;floaters;fx;floatersCount=0;constructor({parentNode:e}){super({parentNode:e,tagName:`div`,className:`app-cauldron`}),V.subscribe(S.CAULDRON_STATE_CHANGED,()=>{this.updatePotion(),this.updateFloaters()}),V.subscribe(S.ROUND_OVER,({variant:e})=>this.playFeedback(e)),V.subscribe(S.REACTION_FIRED,({id:e,name:t})=>this.playReaction(e,t)),this.render(),this.updatePotion(),this.updateFloaters()}render(){new H({parentNode:this.node,tagName:`h2`,className:`app-cauldron_title`,content:fe});let e=new H({parentNode:this.node,tagName:`div`,className:q});this.pot=new H({parentNode:e.node,tagName:`div`,className:`${q}_pot`});let t=()=>{let e=V.getState();return e.status===s&&e.cauldronIngredients.length<e.maxIngredients};this.pot.node.addEventListener(`dragover`,e=>{t()&&(e.preventDefault(),this.pot.node.classList.add(`${q}_pot--over`))}),this.pot.node.addEventListener(`dragleave`,e=>{this.pot.node.contains(e.relatedTarget)||this.pot.node.classList.remove(`${q}_pot--over`)}),this.pot.node.addEventListener(`drop`,e=>{e.preventDefault(),this.pot.node.classList.remove(`${q}_pot--over`);let n=e.dataTransfer?.getData(`text/plain`);n&&t()&&V.addIngredientToCauldron(n)}),new U({parentNode:this.pot.node,icon:`cauldron_back`,className:`${q}_back`}),this.potion=new H({parentNode:this.pot.node,tagName:`div`,className:`${q}_potion`}),this.floaters=new H({parentNode:this.pot.node,tagName:`div`,className:`${q}_floaters`});let n=new H({parentNode:this.pot.node,tagName:`div`,className:`${q}_boiling`});Zi.forEach(({x:e,y:t},r)=>{let i=new H({parentNode:n.node,tagName:`span`,className:`${q}_boil`});i.node.style.setProperty(`--x`,`${e}%`),i.node.style.setProperty(`--y`,`${t}%`),i.node.style.setProperty(`--i`,r.toString())}),new U({parentNode:this.pot.node,icon:`cauldron_front`,className:`${q}_front`}),this.fx=new H({parentNode:this.pot.node,tagName:`div`,className:`${q}_fx`}),new U({parentNode:e.node,icon:`symbol`,className:`${q}_icon`}),this.pourBtn=new W({parentNode:this.node,className:`app-cauldron_pour`,color:`magic`,text:`Pour Out (−10s)`,onClick:()=>V.pourOut()}),this.pourBtn.setDisabled(!0)}updatePotion(){let e=V.getState().cauldronIngredients.length>0;this.potion.node.classList.toggle(`${q}_potion--filled`,e),this.pot.node.classList.toggle(`${q}_pot--filled`,e),this.pourBtn.setDisabled(!e)}spawnFx(e,t){let n=new H({parentNode:this.fx.node,tagName:`span`,className:[`${q}_${e}`,t?`${q}_${e}--dark`:``]}),{style:r}=n.node;r.setProperty(`--x`,`${10+Math.random()*80}%`),r.setProperty(`--dx`,`${(Math.random()-.5)*90}%`),r.setProperty(`--delay`,`${(Math.random()*.5).toFixed(2)}s`),r.setProperty(`--scale`,(.6+Math.random()*.8).toFixed(2)),n.node.addEventListener(`animationend`,()=>n.node.remove(),{once:!0})}floatText(e,t){let n=this.fx.node.querySelectorAll(`.${q}_float-text`).length,r=new H({parentNode:this.fx.node,tagName:`span`,className:[`${q}_float-text`,`${q}_float-text--${t}`],content:e});r.node.style.setProperty(`--n`,n.toString()),r.node.addEventListener(`animationend`,()=>r.node.remove(),{once:!0})}playReaction(e,t){let n=e===T.VOLATILE_MIX,r=n?$i:Qi;Array.from({length:r.smoke}).forEach(()=>this.spawnFx(`smoke`,n)),Array.from({length:r.bubble}).forEach(()=>this.spawnFx(`bubble`,n)),this.floatText(t,`reaction`)}playFeedback(e){e===`success`&&this.floatText(`+${C[V.getState().difficulty].bonus}s`,`bonus`);let t=document.querySelector(`#app`),n=`${q}_pot--${e}`;this.pot.node.classList.remove(`${q}_pot--success`,`${q}_pot--fail`),this.pot.node.offsetWidth,this.pot.node.classList.add(n),e===`fail`&&(t?.classList.remove(`is-shaking`),t?.offsetWidth,t?.classList.add(`is-shaking`)),this.pot.node.addEventListener(`animationend`,e=>{e.target===this.pot.node&&this.pot.node.classList.remove(n)},{once:!0}),t?.addEventListener(`animationend`,e=>{e.target===t&&t.classList.remove(`is-shaking`)},{once:!0})}updateFloaters(){let{cauldronIngredients:e}=V.getState();e.length<this.floatersCount&&(this.floaters.node.innerHTML=``,this.floatersCount=0),e.slice(this.floatersCount).forEach(({icon:e},t)=>{let n=this.floatersCount+t;new U({parentNode:this.floaters.node,icon:e,className:`${q}_floater`}).node.style.setProperty(`--i`,n.toString())}),this.floatersCount=e.length}},ta=e=>e>0?`+${e}`:e<0?`−${Math.abs(e)}`:`0`,na=class extends H{ingredients=[];ingredientsDate=[];constructor({parentNode:e,ingredients:t}){super({parentNode:e,tagName:`div`,className:`app-ingredients`}),this.ingredients=t,V.subscribe(S.INGREDIENT_COUNT,({id:e,count:t})=>{let n=this.ingredientsDate.find(t=>t.id===e);n&&(t===0&&(n.card.style.opacity=`0.5`,n.card.style.pointerEvents=`none`,n.card.setAttribute(`disabled`,`true`),n.iconNode.innerHTML=``),n.countNode.textContent=t.toString(),n.count=t??null)}),V.subscribe(S.SHELF_BLOCK,({isBlock:e})=>{this.ingredientsDate.forEach(({card:t,count:n})=>{let r=e||!n;t.style.opacity=r?`0.5`:`1`,t.style.pointerEvents=r?`none`:`all`,e?t.setAttribute(`disabled`,`true`):t.removeAttribute(`disabled`)})}),V.subscribe(S.PAUSE,()=>this.node.classList.add(`is-paused`)),V.subscribe(S.RESUME,()=>this.node.classList.remove(`is-paused`)),this.render()}render(){let e=V.getState().difficulty===`hard`;e&&this.node.classList.add(`app-ingredients_is-hard`);let t=new H({parentNode:this.node,tagName:`div`,className:`app-ingredients_list`});this.ingredients.length===0&&new H({parentNode:t.node,tagName:`p`,className:`app-ingredients_empty`,content:`Shelf is empty`}),this.ingredients.forEach(n=>{let{name:r,temperature:i,density:a,magicPower:o,count:c,id:l,icon:u}=n,d=new H({parentNode:t.node,tagName:`button`,className:`app-ingredients_list_item`});d.node.onclick=()=>V.addIngredientToCauldron(l),d.node.draggable=!0,d.node.addEventListener(`dragstart`,e=>{V.getState().status===s?(e.dataTransfer?.setData(`text/plain`,l),e.dataTransfer&&(e.dataTransfer.effectAllowed=`copy`),d.node.classList.add(`is-dragging`)):e.preventDefault()}),d.node.addEventListener(`dragend`,()=>d.node.classList.remove(`is-dragging`));let f=new U({parentNode:d.node,className:`app-ingredients_list_item_icon`,icon:u,variant:`magic`});if(new H({parentNode:d.node,className:`app-ingredients_list_item_title`,tagName:`span`,content:r}),e){let e=new H({parentNode:d.node,tagName:`span`,className:`app-ingredients_tooltip`,attrs:{role:`tooltip`}});[[`Temperature`,i],[`Density`,a],[`Magic Power`,o]].forEach(([t,n])=>{new H({parentNode:e.node,tagName:`span`,className:`app-ingredients_tooltip_row`,content:`${t}: ${ta(n)}`})});let t=()=>{let t=d.node.getBoundingClientRect(),{width:n,height:r}=e.node.getBoundingClientRect(),{innerWidth:i,innerHeight:a}=window,o=(e,t)=>Math.max(8,Math.min(e,t-8)),s=t.right+8+n>i-8,c=t.top+t.height/2+r/2>a-8;e.node.classList.toggle(`app-ingredients_tooltip--left`,s),e.node.classList.toggle(`app-ingredients_tooltip--up`,c);let l=s?t.left-8-n:t.right+8,u=l>=8,f=c?t.bottom-r:t.top;u||(l=t.left,f=t.bottom+8,e.node.classList.toggle(`app-ingredients_tooltip--up`,!1),f+r>a-8&&(f=t.top-8-r,e.node.classList.toggle(`app-ingredients_tooltip--up`,!0))),e.node.style.left=`${o(l,i-n+8)}px`,e.node.style.top=`${o(f,a-r+8)}px`};d.node.addEventListener(`mouseenter`,t),d.node.addEventListener(`focusin`,t)}else{let e=new H({parentNode:d.node,className:`app-ingredients_list_item_props`,tagName:`span`});[{value:i,icon:`temperature`},{value:a,icon:`density`},{value:o,icon:`magic`}].forEach(({value:t,icon:n})=>{new U({parentNode:e.node,icon:n,className:`app-ingredients_list_item_props_icon`}),new H({parentNode:e.node,className:`app-ingredients_list_item_props_value`,content:t.toString()})})}d.node.classList.toggle(`app-ingredients_list_item--compact`,e);let p=new H({parentNode:d.node,className:`app-ingredients_list_item_count`,tagName:`span`,content:c?c.toString():`0`});this.ingredientsDate.push({id:l,card:d.node,countNode:p.node,iconNode:f.node,count:c??null})}),new W({parentNode:new H({parentNode:this.node,className:`app-ingredients_mobile`,tagName:`div`}).node,leftIcon:`battle`,color:`magic-icon-2`})}},ra=class extends H{ingredientsCountNode;recipeWrap=null;isMobileRecipeShow=!1;toggleBtn;constructor({parentNode:e,currentIngredientsCount:t,currentRecipe:n,maxIngredients:r}){super({parentNode:e,tagName:`div`,className:`app-recipe`}),V.subscribe(S.INGREDIENT_IN_CAULDRON,e=>{this.ingredientsCountNode.node.textContent=e.toString()}),V.subscribe(S.RECIPE_CHANGED,({recipe:e,ingInCauldron:t})=>{if(!this.recipeWrap)return;let{maxIngredients:n}=V.getState();if(!this.isMobileRecipeShow&&this.recipeWrap.node.hasChildNodes()){let e=this.recipeWrap.node.cloneNode(!0);e.classList.add(`app-recipe_ghost`),e.classList.remove(`app-recipe_wrap--enter`,`app-recipe_wrap_mobile`),e.addEventListener(`animationend`,t=>{t.target===e&&e.remove()},{once:!1}),this.node.append(e)}this.recipeWrap.node.innerHTML=``,this.recipeWrap.node.classList.remove(`app-recipe_wrap--enter`),this.recipeWrap.node.offsetWidth,this.recipeWrap.node.classList.add(`app-recipe_wrap--enter`),this.renderRecipe(e,t,n)}),document.addEventListener(`click`,this.handleOutsideClick),document.addEventListener(`resize`,this.onClose),this.render(n,t,r)}renderRecipe({name:e,temperature:t,density:n,magicPower:r},i,a){if(!this.recipeWrap)return;let o=`app-recipe_wrap`,s=this.recipeWrap;new U({parentNode:s.node,icon:`parchment`,className:`${o}_bg`}),new H({parentNode:s.node,tagName:`h2`,className:`${o}_title`,content:e});let c=new H({parentNode:s.node,tagName:`ul`,className:`${o}_value-wrap`});[{name:`temperature`,value:t},{name:`density`,value:n},{name:`magicPower`,value:r}].forEach(({name:e,value:t})=>{let n=new H({parentNode:c.node,tagName:`li`,className:`${o}_value-wrap_value`});new H({parentNode:n.node,tagName:`span`,className:`${o}_value-wrap_value_name`,content:e}),new H({parentNode:n.node,tagName:`span`,className:`${o}_value-wrap_value_v`,content:t.join(` - `)})});let l=new H({parentNode:s.node,tagName:`div`,className:`${o}_ingredients-count`});new H({parentNode:l.node,tagName:`span`,content:`Ingredients: `}),this.ingredientsCountNode=new H({parentNode:l.node,tagName:`span`,content:i.toString()}),new H({parentNode:l.node,tagName:`span`,content:` / `}),new H({parentNode:l.node,tagName:`span`,content:a.toString()})}render(e,t,n){this.recipeWrap=new H({parentNode:this.node,className:`app-recipe_wrap`}),this.renderRecipe(e,t,n);let r=new H({parentNode:this.node,className:`app-recipe_mobile`,tagName:`div`});this.toggleBtn=new W({parentNode:r.node,leftIcon:`parchment_horizontal`,className:`app-recipe_mobile_btn`,color:`magic-icon-2`,onClick:()=>{this.isMobileRecipeShow?(this.onClose(),this.isMobileRecipeShow=!1,this.toggleBtn.setLeftIcon(`parchment_horizontal`)):this.isMobileRecipeShow||(this.onOpen(),this.isMobileRecipeShow=!0,this.toggleBtn.setLeftIcon(`close`))}})}onOpen(){this.recipeWrap?.node.classList.add(`app-recipe_wrap_mobile`),this.isMobileRecipeShow=!0}onClose(){this.recipeWrap?.node.classList.remove(`app-recipe_wrap_mobile`),this.isMobileRecipeShow=!1}handleOutsideClick=e=>{let t=e.target;this.isMobileRecipeShow&&!this.node.contains(t)&&(this.onClose(),this.toggleBtn.setLeftIcon(`parchment_horizontal`))};destroy(){this.isMobileRecipeShow=!1,this.recipeWrap?.node.classList.remove(`app-recipe_wrap_mobile`),document.removeEventListener(`click`,this.handleOutsideClick),super.destroy()}},ia=class extends H{ingredientsCountNode;temperature;density;magicPower;constructor({parentNode:e,ranges:t}){super({parentNode:e,tagName:`div`,className:`app-ranges`}),V.subscribe(S.CAULDRON_STATE_CHANGED,({values:{temperature:e,density:t,magicPower:n}})=>{this.temperature.updateRange(e),this.density.updateRange(t),this.magicPower.updateRange(n)}),this.render(t)}render(e){this.temperature=new ji({parentNode:this.node,label:`Temperature`,range:{min:e.temperature.at(0),max:e.temperature.at(1)},value:0,icon:`temperature`}),this.density=new ji({parentNode:this.node,label:`Density`,range:{min:e.density.at(0),max:e.density.at(1)},value:0,icon:`density`}),this.magicPower=new ji({parentNode:this.node,label:`Magic Power`,range:{min:e.magicPower.at(0),max:e.magicPower.at(1)},value:0,icon:`magic`})}},aa=class extends H{constructor({parentNode:e,ingredients:t,currentRecipe:n,currentIngredientsCount:r,maxIngredients:i}){super({parentNode:e,tagName:`div`,className:`app-game`}),this.render(t,n,r,i)}render(e,t,n,r){new na({parentNode:this.node,ingredients:e}),new ea({parentNode:this.node}),t&&(new ra({parentNode:this.node,currentRecipe:t,currentIngredientsCount:n,maxIngredients:r}),new ia({parentNode:this.node,ranges:t}))}},oa=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=()=>n(r.error),r.readAsDataURL(e)}),sa=e=>!e||ir(e)?``:de,ca=class extends H{avatar;avatarBox;removeButton;applyUrlButton;fileInput;urlInput;nameBlock;nameInput=null;editButton=null;saveButton=null;message;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-account`}),document.addEventListener(`click`,this.onDocumentClick,!0),this.render()}render(){let e=new H({parentNode:this.node,tagName:`div`,className:`app-account_avatar`});this.avatarBox=new H({parentNode:e.node,tagName:`div`,className:`app-account_avatar_box`}),this.avatar=new Ni({parentNode:this.avatarBox.node,className:`app-account_avatar_img`}),this.avatarBox.node.addEventListener(`click`,()=>this.fileInput.node.click()),this.avatarBox.node.addEventListener(`dragover`,e=>{e.preventDefault(),this.avatarBox.node.classList.add(`is-dragover`)}),this.avatarBox.node.addEventListener(`dragleave`,()=>{this.avatarBox.node.classList.remove(`is-dragover`)}),this.avatarBox.node.addEventListener(`drop`,e=>{e.preventDefault(),this.avatarBox.node.classList.remove(`is-dragover`);let t=e.dataTransfer?.files[0];t&&this.handleFile(t)}),this.removeButton=new W({parentNode:e.node,className:`app-account_avatar_remove`,color:`magic-icon-2`,leftIcon:`trash`,onClick:()=>this.removeAvatar()}),this.fileInput=new H({parentNode:e.node,tagName:`input`,className:`app-account_file`,attrs:{type:`file`,accept:Yn.join(`,`)}}),this.fileInput.node.addEventListener(`change`,()=>{let e=this.fileInput.node,t=e.files?.[0];e.value=``,t&&this.handleFile(t)});let t=new H({parentNode:this.node,tagName:`div`,className:`app-account_url`});this.urlInput=new G({parentNode:t.node,placeholder:`https://… image link`,maxlength:`2048`,className:`app-account_url_input`,validate:sa}),this.applyUrlButton=new W({parentNode:t.node,text:`Use URL`,color:`link`,onClick:()=>this.applyUrl()}),this.nameBlock=new H({parentNode:this.node,tagName:`div`,className:`app-account_name_block`}),this.renderName(!1),this.message=new H({parentNode:this.node,tagName:`p`,className:`app-account_message`,content:``}),this.syncAvatar()}syncAvatar(){let e=V.getUserAvatar();this.avatar.setAvatar(e,V.getUserName()??``),this.removeButton.setHidden(or(e)===null)}destroyNameControls(){this.nameInput?.destroy(),this.saveButton?.destroy(),this.editButton?.destroy(),this.nameInput=null,this.saveButton=null,this.editButton=null}renderName(e){this.destroyNameControls(),this.nameBlock.node.replaceChildren(),e?(this.nameInput=new G({parentNode:this.nameBlock.node,placeholder:`Name (2–15 characters)`,maxlength:`15`,className:`app-account_name_input`,value:V.getUserName()??``,validate:k}),this.nameInput.getInput().node.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.saveName(),e.key===`Escape`&&this.renderName(!1)}),this.saveButton=new W({parentNode:this.nameBlock.node,className:`app-account_name_save`,color:`magic-icon-2`,variant:`empty`,leftIcon:`save`,onClick:()=>this.saveName()}),this.nameInput.getInput().node.focus()):(new H({parentNode:this.nameBlock.node,tagName:`span`,className:`app-account_name`,content:V.getUserName()||`Incognito`}),this.editButton=new W({parentNode:this.nameBlock.node,className:`app-account_name_edit`,color:`magic-icon-2`,leftIcon:`edit`,onClick:()=>this.renderName(!0)}))}saveName(){if(!this.nameInput)return;let e=this.nameInput.getValue(),t=k(e);this.nameInput.setError(t),!t&&this.save(()=>V.setUserName(e))&&this.renderName(!1)}applyUrl(){let e=this.urlInput.getValue(),t=e?sa(e):de;this.urlInput.setError(t),!t&&this.saveAvatar({kind:`url`,url:e})}async handleFile(e){let t=ar(e);if(t){this.message.setContent(t);return}let n=await oa(e);this.saveAvatar({kind:`image`,dataUrl:n})}saveAvatar(e){this.save(()=>V.setUserAvatar(e))&&(this.urlInput.clear(),this.syncAvatar())}removeAvatar(){this.save(()=>V.removeUserAvatar())&&this.syncAvatar()}save(e){this.message.setContent(``);try{let t=e();return t||this.message.setContent(`Could not save`),t}catch(e){return this.message.setContent(e instanceof Error?e.message:`Could not save`),!1}}onDocumentClick=()=>{this.message.setContent(``)};destroy(){document.removeEventListener(`click`,this.onDocumentClick,!0),this.destroyNameControls(),this.removeButton.destroy(),this.applyUrlButton.destroy(),this.urlInput.destroy(),super.destroy()}},J=class extends H{},la=8,ua=class extends J{cards;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_summary`});let t=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_bubbles`});for(let e=0;e<la;e++)new H({parentNode:t.node,tagName:`span`,className:`app-statistics_bubbles_bubble`});this.cards=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_cards`})}update(e){let t=kr(e),n=[{label:`Games`,value:String(t.gamesPlayed)},{label:`Best score`,value:String(t.bestScore)},{label:`Average score`,value:String(t.averageScore)},{label:`Time played`,value:Mr(t.totalDurationSeconds)}];this.cards.node.replaceChildren(),n.forEach(({label:e,value:t})=>{let n=new H({parentNode:this.cards.node,tagName:`div`,className:`app-statistics_card`});new H({parentNode:n.node,tagName:`span`,className:`app-statistics_card_label`,content:e}),new H({parentNode:n.node,tagName:`span`,className:`app-statistics_card_value`,content:t})})}},da=10,fa=[`Date`,`Level`,`Score`,`Brews`,`Time`,`Reason`],pa={easy:`Easy`,medium:`Medium`,hard:`Hard`},ma={time:`Time is up`,lives:`No lives left`,ingredients:`Out of ingredients`},ha=e=>new Date(e).toLocaleString(`en-GB`,{day:`2-digit`,month:`short`,hour:`2-digit`,minute:`2-digit`}),ga=class extends J{wrap;body;empty;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_recent`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Recent games`}),this.wrap=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_table_wrap`});let t=new H({parentNode:this.wrap.node,tagName:`table`,className:`app-statistics_table`}),n=new H({parentNode:new H({parentNode:t.node,tagName:`thead`}).node,tagName:`tr`});fa.forEach(e=>new H({parentNode:n.node,tagName:`th`,content:e})),this.body=new H({parentNode:t.node,tagName:`tbody`}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`No games yet`})}update(e){let t=Ar(e,da);this.body.node.replaceChildren(),t.forEach(e=>{let t=new H({parentNode:this.body.node,tagName:`tr`});[ha(e.playedAt),pa[e.difficulty],String(e.score),String(e.successfulBrews),Mr(e.durationSeconds),ma[e.reason]].forEach(e=>new H({parentNode:t.node,tagName:`td`,content:e}))}),this.wrap.node.hidden=t.length===0,this.empty.node.hidden=t.length>0}},_a=(e,t,n,r)=>{e.hidden=!1;let i=e.offsetWidth/2,a=Math.min(Math.max(n,i),t.clientWidth-i);e.style.left=`${a}px`,e.style.top=`${r}px`},va=`http://www.w3.org/2000/svg`,ya=300,ba=120,xa=8,Sa=3,Ca=[`game`,`days`,`week`],wa=`days`,Ta={game:`Score per game`,days:`Average score per day`,week:`Average score per week`},Ea=class extends J{title;modeBar;modeButtons=[];body;empty;history=[];mode=wa;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_chart`}),this.title=new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`}),this.modeBar=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_filter app-statistics_chart_modes`}),Ca.forEach(e=>{let t=new W({parentNode:this.modeBar.node,className:`app-statistics_filter_item`,color:`dark`,text:e,ariaLabel:`Chart by ${e}`,onClick:()=>this.setMode(e)});this.modeButtons.push(t)}),this.body=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_chart`}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Play a few games to see the chart`})}update(e){this.history=e,this.render()}destroy(){this.modeButtons.forEach(e=>e.destroy()),super.destroy()}setMode(e){this.mode=e,this.render()}render(){let e=Jr(this.history,this.mode),t=Yr(e,284,104).map(({x:e,y:t})=>({x:e+xa,y:t+xa})),n=t.length>0;if(this.title.node.textContent=Ta[this.mode],this.modeBar.node.hidden=!n,this.modeButtons.forEach((e,t)=>{e.node.classList.toggle(`app-statistics_filter_item_active`,Ca[t]===this.mode)}),this.body.node.replaceChildren(),this.body.node.hidden=!n,this.empty.node.hidden=n,!n)return;let r=e.map(e=>ti(e,this.mode)),i=document.createElementNS(va,`svg`);i.setAttribute(`class`,`app-statistics_chart_svg`),i.setAttribute(`viewBox`,`0 0 ${ya} ${ba}`),i.setAttribute(`role`,`img`),i.setAttribute(`aria-label`,Ta[this.mode]);let a=document.createElement(`div`);a.className=`app-statistics_tooltip`;let o=e=>{let{x:n,y:i}=t[e];a.textContent=r[e],_a(a,this.body.node,n/ya*this.body.node.clientWidth,i/ba*this.body.node.clientHeight)};a.hidden=!0;let s=()=>{a.hidden=!0},c=document.createElementNS(va,`path`);c.setAttribute(`class`,`app-statistics_chart_line`),c.setAttribute(`d`,Xr(t)),i.append(c),t.forEach(({x:e,y:t},n)=>{let a=document.createElementNS(va,`circle`);a.setAttribute(`class`,`app-statistics_chart_dot`),a.setAttribute(`cx`,e.toFixed(2)),a.setAttribute(`cy`,t.toFixed(2)),a.setAttribute(`r`,String(Sa)),a.setAttribute(`tabindex`,`0`),a.setAttribute(`aria-label`,r[n]),a.addEventListener(`pointerenter`,()=>o(n)),a.addEventListener(`pointerleave`,s),a.addEventListener(`focus`,()=>o(n)),a.addEventListener(`blur`,s),i.append(a)}),this.body.node.append(i,a)}},Da=class extends H{rows=[];constructor({parentNode:e,keys:t,labels:n}){super({parentNode:e,tagName:`div`,className:`app-statistics_share`}),t.forEach(e=>{let t=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_share_row`});new H({parentNode:t.node,tagName:`span`,className:`app-statistics_share_label`,content:n[e]});let r=new H({parentNode:new H({parentNode:t.node,tagName:`div`,className:`app-statistics_share_track`}).node,tagName:`span`,className:`app-statistics_share_fill app-statistics_share_fill_${e}`}),i=new H({parentNode:t.node,tagName:`span`,className:`app-statistics_share_value`});this.rows.push({fill:r,value:i})})}update(e){e.forEach(({games:e,share:t},n)=>{let r=Math.round(t*100),{fill:i,value:a}=this.rows[n];i.node.style.width=`${r}%`,a.node.textContent=`${e} (${r}%)`})}},Oa={[t]:`Easy`,[r]:`Medium`,[n]:`Hard`},ka={time:`Time is up`,lives:`No lives left`,ingredients:`Out of ingredients`},Aa={successful:`Successful`,failed:`Failed`},ja=new Intl.DateTimeFormat(`en-GB`,{day:`numeric`,month:`numeric`}),Ma=new Intl.DateTimeFormat(`en-US`,{weekday:`short`,month:`short`,day:`numeric`}),Na=class extends J{bars;empty;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_difficulty`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Difficulty`}),this.bars=new Da({parentNode:this.node,keys:Object.keys(Oa),labels:Oa}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Play a few games to see the split`})}update(e){this.bars.node.hidden=e.length===0,this.empty.node.hidden=e.length>0,this.bars.update(ri(e))}},Pa=class extends J{bars;empty;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_reasons`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Game over reasons`}),this.bars=new Da({parentNode:this.node,keys:Object.keys(ka),labels:ka}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Finish a few games to see the reasons`})}update(e){this.bars.node.hidden=e.length===0,this.empty.node.hidden=e.length>0,this.bars.update(ai(e))}},Fa=class extends J{bars;reactions;empty;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_brews`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Brews & reactions`}),this.bars=new Da({parentNode:this.node,keys:Object.keys(Aa),labels:Aa}),this.reactions=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_brews_reactions`}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Play a few games to see your brews`})}update(e){let t=e.length>0;this.bars.node.hidden=!t,this.reactions.node.hidden=!t,this.empty.node.hidden=t,this.bars.update(Nr(e)),this.reactions.node.textContent=`Reactions triggered: ${kr(e).reactionsTriggered}`}},Ia=class extends J{body;empty;columns=[];constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_histogram`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Brews per game`}),this.body=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_histogram`}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Play a few games to see the histogram`})}update(e){this.columns.forEach(e=>e.destroy()),this.columns=[],this.body.node.hidden=e.length===0,this.empty.node.hidden=e.length>0;let t=si(e),n=Math.max(1,...t.map(e=>e.games));t.forEach(e=>{let t=new H({parentNode:this.body.node,tagName:`div`,className:`app-statistics_histogram_column`}),r=new H({parentNode:new H({parentNode:t.node,tagName:`span`,className:`app-statistics_histogram_track`}).node,tagName:`span`,className:`app-statistics_histogram_bar`});r.node.style.height=`${e.games/n*100}%`,new H({parentNode:t.node,tagName:`span`,className:`app-statistics_histogram_count`,content:String(e.games)}),new H({parentNode:t.node,tagName:`span`,className:`app-statistics_histogram_label`,content:ci(e)}),this.columns.push(t)})}},Y=(e,t)=>`${e/t*100}%`,La=class extends J{body;empty;legend;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_candles`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Scores by day`}),this.body=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_candles`}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Play a few games to see the daily candles`}),this.legend=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_candles_legend`,content:`Green: up · Red: down`})}update(e){this.body.node.replaceChildren();let t=ui(e);this.legend.node.hidden=t.length===0,this.body.node.hidden=t.length===0,this.empty.node.hidden=t.length>0;let n=Math.max(1,...t.map(e=>e.high));t.forEach(e=>this.renderCandle(e,n))}renderCandle(e,t){let n=new H({parentNode:this.body.node,tagName:`div`,className:`app-statistics_candles_column`}),r=new H({parentNode:n.node,tagName:`div`,className:`app-statistics_candles_track`}),i=new H({parentNode:r.node,tagName:`span`,className:`app-statistics_candles_wick`}),a=e.open===e.close?`flat`:e.close>e.open?`up`:`down`,o=new H({parentNode:r.node,tagName:`span`,className:`app-statistics_candles_body app-statistics_candles_body_${a}`});i.node.style.bottom=Y(e.low,t),i.node.style.height=Y(e.high-e.low,t),o.node.style.bottom=Y(Math.min(e.open,e.close),t),o.node.style.height=Y(Math.abs(e.close-e.open),t),new H({parentNode:n.node,tagName:`span`,className:`app-statistics_candles_label`,content:ja.format(e.day)})}},Ra=class extends J{body;empty;constructor({parentNode:e}){super({parentNode:e,tagName:`section`,className:`app-statistics_block app-statistics_block_heatmap`}),new H({parentNode:this.node,tagName:`h3`,className:`app-statistics_block_title`,content:`Activity over the last 6 weeks`}),this.body=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_heatmap`}),this.empty=new H({parentNode:this.node,tagName:`p`,className:`app-statistics_empty`,content:`Play a few games to see your activity`})}update(e){this.body.node.replaceChildren();let t=e.length>0;if(this.body.node.hidden=!t,this.empty.node.hidden=t,!t)return;let n=document.createElement(`div`);n.className=`app-statistics_tooltip`,n.hidden=!0,di(e).forEach(({day:e,games:t,level:r})=>{let i=`${Ma.format(e)} · ${t} ${t===1?`game`:`games`}`,a=new H({parentNode:this.body.node,tagName:`span`,className:`app-statistics_heatmap_cell app-statistics_heatmap_cell_${r}`});a.node.setAttribute(`aria-label`,i),a.node.addEventListener(`pointerenter`,()=>{n.textContent=i,_a(n,this.body.node,a.node.offsetLeft+a.node.offsetWidth/2,a.node.offsetTop)}),a.node.addEventListener(`pointerleave`,()=>{n.hidden=!0})}),this.body.node.append(n)}},za=[{value:e,label:e},{value:t,label:t},{value:r,label:r},{value:n,label:n}],Ba=[{isDemo:!1,label:`My statistics`},{isDemo:!0,label:`Show example`}],Va=class extends H{history;demoHistory;showDemo=!1;filter=e;sourceButtons=[];filterButtons=[];sections=[];constructor({parentNode:e,history:t}){super({parentNode:e,tagName:`section`,className:`app-statistics`}),this.history=t,this.demoHistory=Ur(Date.now()),this.render()}render(){new H({parentNode:this.node,tagName:`h2`,className:`app-statistics_title`,content:`Statistics`}),this.renderSourceSwitch(),this.renderFilter();let e=new H({parentNode:new H({parentNode:this.node,tagName:`div`,className:`app-statistics_wrap`}).node,tagName:`div`,className:`app-statistics_grid`});this.sections=[new ua({parentNode:e.node}),new Ea({parentNode:e.node}),new Na({parentNode:e.node}),new ga({parentNode:e.node}),new Pa({parentNode:e.node}),new Fa({parentNode:e.node}),new La({parentNode:e.node}),new Ia({parentNode:e.node}),new Ra({parentNode:e.node})],this.refresh()}renderSourceSwitch(){let e=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_filter`});Ba.forEach(({isDemo:t,label:n})=>{let r=new W({parentNode:e.node,className:`app-statistics_filter_item`,color:`dark`,text:n,ariaLabel:n,onClick:()=>this.setSource(t)});this.sourceButtons.push(r)}),this.updateSourceButtons()}setSource(e){this.showDemo=e,this.updateSourceButtons(),this.refresh()}updateSourceButtons(){Ba.forEach(({isDemo:e},t)=>{this.sourceButtons[t].node.classList.toggle(`app-statistics_filter_item_active`,e===this.showDemo)})}renderFilter(){let e=new H({parentNode:this.node,tagName:`div`,className:`app-statistics_filter`});za.forEach(({value:t,label:n})=>{let r=new W({parentNode:e.node,className:`app-statistics_filter_item`,color:`dark`,text:n,ariaLabel:`Show: ${n}`,onClick:()=>this.setFilter(t)});this.filterButtons.push(r)}),this.updateFilterButtons()}setFilter(e){this.filter=e,this.updateFilterButtons(),this.refresh()}updateFilterButtons(){za.forEach(({value:e},t)=>{this.filterButtons[t].node.classList.toggle(`app-statistics_filter_item_active`,e===this.filter)})}refresh(){let e=jr(this.showDemo?this.demoHistory:this.history,this.filter);this.sections.forEach(t=>t.update(e))}destroy(){this.sourceButtons.forEach(e=>e.destroy()),this.filterButtons.forEach(e=>e.destroy()),this.sections.forEach(e=>e.destroy()),super.destroy()}},Ha=class extends H{router;route;sidebar=null;account=null;constructor({parentNode:e,router:t,route:n}){super({parentNode:e,tagName:`div`,className:`app-profile`}),this.router=t,this.route=n,this.render()}render(){this.sidebar=new Wi({parentNode:this.node,className:`app-profile_sidebar`,router:this.router});let e=new H({parentNode:this.node,tagName:`div`,className:`app-profile_content`});this.route===D[b]?this.account=new ca({parentNode:e.node}):new Va({parentNode:e.node,history:V.getUserHistory()})}destroy(){this.account?.destroy(),this.sidebar?.destroy(),super.destroy()}},Ua=class extends H{nodeClass=`app-presentation-slide`;title=null;subtitle=null;list=null;links=[];code=null;template=`default`;constructor({parentNode:e,title:t,subTitle:n,template:r,slideJustify:i,list:a,links:o,code:s}){super({parentNode:e,className:[`app-presentation-slide`,i?`app-presentation-slide_justify-${i}`:``,`app-presentation-slide_template-${r}`]}),this.title=t??null,this.subtitle=n??null,this.list=a??null,this.links=o??[],this.code=s??null,this.template=r,this.render()}render(){if(new H({parentNode:this.node,className:`app-presentation-slide_title`,tagName:`h2`,content:this.title?.text??``}),this.subtitle&&new H({parentNode:this.node,className:`app-presentation-slide_subtitle`,tagName:`h3`,content:this.subtitle.text}),this.list){let e=new H({parentNode:this.node,tagName:`ul`,className:`app-presentation-slide_list`});this.list.items.forEach(t=>{new H({parentNode:e.node,tagName:`li`,content:t})})}if(this.links.length){let e=new H({parentNode:this.node,className:`app-presentation-slide_links`});this.links.forEach(({src:t,alt:n,caption:r,href:i})=>{let a=new H({parentNode:e.node,tagName:`a`,className:`app-presentation-slide_links_link`,attrs:{href:i}});new H({parentNode:a.node,tagName:`img`,attrs:{src:t,alt:n}}),r&&new H({parentNode:a.node,tagName:`span`,content:r})})}this.code&&new H({parentNode:this.node,tagName:`pre`,className:`app-presentation-slide_code`,content:this.code.text})}destroy(){super.destroy()}},Wa={"avatar-file":e=>{let t=new H({parentNode:e.node,className:`app-presentation-demo_drop`});new H({parentNode:t.node,tagName:`span`,className:`app-presentation-demo_drop_icon`,content:`+`}),new H({parentNode:t.node,tagName:`span`,content:`Drop image here or click`}),new H({parentNode:e.node,tagName:`p`,className:`app-presentation-demo_hint`,content:`Files over 85 KB are rejected`})},"avatar-url":e=>{let t=new H({parentNode:e.node,className:`app-presentation-demo_row`});new G({parentNode:t.node,placeholder:`https://… image link`,maxlength:`2048`,className:`app-presentation-demo_input`,value:`https://example.com/avatar.png`}),new W({parentNode:t.node,text:`Use URL`,color:`link`})},name:e=>{let t=new H({parentNode:e.node,className:`app-presentation-demo_row`});new H({parentNode:t.node,tagName:`span`,className:`app-presentation-demo_name`,content:`Alchemist`}),new W({parentNode:t.node,color:`magic-icon-2`,leftIcon:`edit`});let n=new H({parentNode:e.node,className:`app-presentation-demo_row`});new G({parentNode:n.node,placeholder:`Name (2–15 characters)`,maxlength:`15`,className:`app-presentation-demo_input`,value:`Mira`}),new W({parentNode:n.node,color:`magic-icon-2`,variant:`empty`,leftIcon:`save`})}},Ga=class extends H{constructor({parentNode:e,demo:t,title:n,description:r,descriptionPosition:i}){super({parentNode:e,className:[`app-presentation-slide`,`app-presentation-sub-slide`,`app-presentation-sub-slide_desc-${i}`]}),new H({parentNode:this.node,tagName:`h2`,className:`app-presentation-slide_title`,content:n}),new H({parentNode:new H({parentNode:this.node,className:`app-presentation-sub-slide_description`}).node,tagName:`p`,content:r});let a=new H({parentNode:new H({parentNode:this.node,className:`app-presentation-sub-slide_content`}).node,className:`app-presentation-demo`});Wa[t](a)}},Ka={summary:ua,chart:Ea,difficulty:Na,recent:ga,reasons:Pa,brews:Fa,candles:La,histogram:Ia,heatmap:Ra},qa=class extends H{sectionView;constructor({parentNode:e,section:t,title:n,description:r,descriptionPosition:i,figures:a=[]}){super({parentNode:e,className:[`app-presentation-slide`,`app-presentation-sub-slide`,`app-presentation-sub-slide_desc-${i}`]}),new H({parentNode:this.node,tagName:`h2`,className:`app-presentation-slide_title`,content:n});let o=new H({parentNode:this.node,className:`app-presentation-sub-slide_description`});if(new H({parentNode:o.node,tagName:`p`,content:r}),a.length){let e=new H({parentNode:o.node,tagName:`ul`,className:`app-presentation-sub-slide_figures`});a.forEach(t=>{new H({parentNode:e.node,tagName:`li`,content:t})})}let s=new H({parentNode:this.node,className:`app-presentation-sub-slide_content`}),c=Ka[t];this.sectionView=new c({parentNode:s.node}),this.sectionView.update(Ur(Date.now()))}destroy(){this.sectionView.destroy(),super.destroy()}},Ja=`/Alchemist-s-Cauldron/assets/account-tHGHjkvY.webp`,Ya=`/Alchemist-s-Cauldron/assets/stats-CWiXirT4.webp`,Xa=`src/store/logic/
├── profile/
│   ├── profile.ts
│   └── profile.test.ts   → ../validate.ts
└── statistics/
    ├── candles.ts        → candles.test.ts
    ├── chart.ts          → chart.test.ts
    ├── demo.ts           → demo.test.ts
    ├── difficulty.ts     → difficulty.test.ts
    ├── heatmap.ts        → heatmap.test.ts
    ├── histogram.ts      → histogram.test.ts
    ├── reasons.ts        → reasons.test.ts
    └── statistics.ts     → statistics.test.ts`,Za=`export const PLAYER_NAME_REGEX = /^[A-Za-z0-9 _-]{2,15}$/;

export const isValidPlayerName = (value: string): boolean =>
  PLAYER_NAME_REGEX.test(value) && value.trim() === value;

it('accepts a valid profile', () => {
  expect(ValidateProfile(validProfile)).toBe(true);
});`,Qa=`it('rejects an unsupported version or invalid name', () => {
  expect(ValidateProfile({ ...validProfile, version: 2 })).toBe(false);
  expect(ValidateProfile({ ...validProfile, name: ' ' })).toBe(false);
  expect(ValidateProfile({ ...validProfile, name: 'A'.repeat(16) })).toBe(false);
});`,$a=`it('counts games and shares per level', () => {
  const result = buildDifficultyBreakdown([
    record('easy'),
    record('easy'),
    record('hard'),
    record('medium'),
  ]);
  expect(result).toEqual([
    { difficulty: 'easy', games: 2, share: 0.5 },
    { difficulty: 'medium', games: 1, share: 0.25 },
    { difficulty: 'hard', games: 1, share: 0.25 },
  ]);
});`,X=[{id:`slide-1`,slide:{template:`default`,title:{text:ge},subTitle:{text:ve},list:{items:[...ye]},links:[{src:Ya,alt:`Statistics page`,caption:`Statistics`,href:`#${D.statistics}`},{src:Ja,alt:`Account page`,caption:`Account`,href:`#${D.account}`}],slideJustify:`center`},preview:{title:_e,icon:`symbol`}},{id:`slide-2`,slide:{template:`columns`,title:{text:be},subTitle:{text:Se},list:{items:[...Ce]}},preview:{title:xe,icon:`symbol`}},{id:`slide-3`,slide:{template:`default`,title:{text:we},list:{items:[...Ee]}},preview:{title:Te,icon:`symbol`}},{id:`slide-4`,slide:{template:`default`,title:{text:De},subTitle:{text:ke},list:{items:[...Ae]},slideJustify:`center`},preview:{title:Oe,icon:`symbol`}},{id:`slide-5`,slide:{template:`default`,title:{text:je},subTitle:{text:Ne},list:{items:[...Pe]},links:[{src:Ja,alt:`Account page`,caption:`Account`,href:`#${D.account}`}]},preview:{title:Me,icon:`arrow_down_mini`},subSlides:[{demo:`avatar-file`,title:Fe,description:Ie,descriptionPosition:`top`},{demo:`avatar-url`,title:Le,description:Re,descriptionPosition:`top`},{demo:`name`,title:ze,description:Be,descriptionPosition:`top`}]},{id:`slide-statistics`,slide:{template:`default`,title:{text:at},subTitle:{text:st},list:{items:[...ct]}},preview:{title:ot,icon:`arrow_down_mini`},subSlides:[{section:`summary`,title:lt,description:ut,descriptionPosition:`top`},{section:`chart`,title:dt,description:ft,descriptionPosition:`bottom`},{section:`difficulty`,title:pt,description:mt,descriptionPosition:`left`},{section:`recent`,title:ht,description:gt,descriptionPosition:`top`},{section:`reasons`,title:_t,description:vt,descriptionPosition:`right`},{section:`brews`,title:yt,description:bt,descriptionPosition:`left`},{section:`candles`,title:xt,description:St,descriptionPosition:`bottom`},{section:`histogram`,title:Ct,description:wt,descriptionPosition:`right`},{section:`heatmap`,title:Tt,description:Et,descriptionPosition:`bottom`}]},{id:`slide-6`,slide:{template:`default`,title:{text:Ve},list:{items:[...Ue]}},preview:{title:He,icon:`symbol`}},{id:`slide-7`,slide:{template:`default`,title:{text:We},list:{items:[...Ke]}},preview:{title:Ge,icon:`arrow_down_mini`},subSlides:[{code:Xa,title:et,description:qe,descriptionPosition:`top`},{code:Za,title:Je,description:Ye,descriptionPosition:`top`},{code:Qa,title:Xe,description:Ze,descriptionPosition:`top`},{code:$a,title:Qe,description:$e,descriptionPosition:`top`}]},{id:`slide-8`,slide:{template:`default`,title:{text:tt},subTitle:{text:rt},list:{items:[...it]}},preview:{title:nt,icon:`symbol`}}],eo=class extends H{wrap;codeBox;themeButton=null;isLight=!1;constructor({parentNode:e,code:t,title:n,description:r,descriptionPosition:i}){super({parentNode:e,className:[`app-presentation-slide`,`app-presentation-sub-slide`,`app-presentation-sub-slide_desc-${i}`]}),new H({parentNode:this.node,tagName:`h2`,className:`app-presentation-slide_title`,content:n}),new H({parentNode:new H({parentNode:this.node,className:`app-presentation-sub-slide_description`}).node,tagName:`p`,content:r}),this.wrap=new H({parentNode:this.node,className:[`app-presentation-sub-slide_content`,`app-presentation-code-wrap`]}),this.codeBox=new H({parentNode:this.wrap.node,className:`app-presentation-code`}),new H({parentNode:this.codeBox.node,tagName:`pre`,content:t}),this.renderThemeButton()}renderThemeButton(){this.themeButton?.destroy(),this.themeButton=new W({parentNode:this.wrap.node,className:`app-presentation-code_theme`,leftIcon:this.isLight?`theme_light`:`theme_dark`,color:`magic-icon-2`,onClick:()=>this.toggleTheme()})}toggleTheme(){this.isLight=!this.isLight,this.codeBox.node.classList.toggle(`app-presentation-code_light`,this.isLight),this.themeButton?.setLeftIcon(this.isLight?`theme_light`:`theme_dark`)}destroy(){this.themeButton?.destroy(),this.codeBox.destroy(),this.wrap.destroy(),super.destroy()}},to=`presentation-slide-index`,no=400,Z=-1,ro=()=>{let e=Number(sessionStorage.getItem(to));return Number.isInteger(e)&&e>=0&&e<X.length?e:0},io=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?0:no,Q=(e,t)=>`translate${e}(${t}%)`,ao=class extends H{currentSlide=null;currentIndex=ro();subIndex=Z;isAnimating=!1;controls;slideWrap;sideNav;hint;previews=[];navItems=[];getSubSlides(e=this.currentIndex){return X[e].subSlides??[]}onKeyDown=e=>{switch(e.key){case`ArrowLeft`:case`ArrowRight`:e.preventDefault(),this.goTo(this.currentIndex+(e.key===`ArrowRight`?1:-1),`X`);return;case`ArrowDown`:case`ArrowUp`:if(!this.getSubSlides().length)return;e.preventDefault(),this.goTo(this.currentIndex,`Y`,this.subIndex+(e.key===`ArrowDown`?1:-1));return}};constructor({parentNode:e}){super({parentNode:e,className:`app-presentation`}),this.render(),document.addEventListener(`keydown`,this.onKeyDown)}render(){this.slideWrap=new H({parentNode:this.node,className:`app-presentation_slide-wrap`}),this.hint=new W({parentNode:this.slideWrap.node,className:`app-presentation_hint`,leftIcon:`arrow_down`,color:`magic-icon-2`,onClick:()=>this.goTo(this.currentIndex,`Y`,this.subIndex+1)}),this.sideNav=new H({parentNode:this.node,tagName:`nav`,className:`app-presentation_nav`,attrs:{"aria-label":`Statistics sections`}}),this.controls=new H({parentNode:this.node,className:`app-presentation_controls`}),this.currentSlide=this.createSlide(this.currentIndex,this.subIndex),this.renderPreviews(this.controls),this.renderSideNav()}createSlide(e,t){if(t===Z){let{slide:t}=X[e];return new Ua({...t,parentNode:this.slideWrap.node})}let n=this.getSubSlides(e)[t];return`demo`in n?new Ga({...n,parentNode:this.slideWrap.node}):`code`in n?new eo({...n,parentNode:this.slideWrap.node}):new qa({...n,figures:this.getFigures(n.section),parentNode:this.slideWrap.node})}renderPreviews(e){X.forEach(({preview:{title:t,icon:n},id:r},i)=>{let a=new H({parentNode:e.node,className:`app-presentation_controls_preview`,tagName:`button`,attrs:{type:`button`,role:`button`,"aria-label":r,tabIndex:0}});new H({parentNode:a.node,className:`app-presentation_controls_preview_count`,tagName:`span`,content:(i+1).toString()}),new U({parentNode:a.node,className:`app-presentation_controls_preview_icon`,icon:n}),new H({parentNode:a.node,className:`app-presentation_controls_preview_title`,tagName:`span`,content:t}),a.node.addEventListener(`click`,()=>{let e=Math.abs(i-this.currentIndex)===1;this.goTo(i,e?`X`:`Y`)}),this.previews.push({card:a,id:r})}),this.syncPreviews()}syncPreviews(){this.previews.forEach(({card:e},t)=>{let n=t===this.currentIndex;e.node.classList.toggle(`app-presentation_controls_preview_active`,n),e.node.setAttribute(`aria-current`,String(n))})}renderSideNav(){this.sideNav.node.replaceChildren(),this.navItems=[];let e=this.getSubSlides();this.sideNav.node.classList.toggle(`app-presentation_nav_hidden`,!e.length),e.length&&[X[this.currentIndex].preview.title,...e.map(({title:e})=>e)].forEach((e,t)=>{let n=t-1,r=new H({parentNode:this.sideNav.node,tagName:`button`,className:`app-presentation_nav_item`,attrs:{type:`button`,"aria-label":e}});new H({parentNode:r.node,tagName:`span`,className:`app-presentation_nav_item_count`,content:String(t+1)}),new H({parentNode:r.node,tagName:`span`,className:`app-presentation_nav_item_title`,content:e}),r.node.addEventListener(`click`,()=>this.goTo(this.currentIndex,`Y`,n)),this.navItems.push(r)}),this.syncNav()}syncNav(){this.navItems.forEach((e,t)=>{let n=t-1===this.subIndex;e.node.classList.toggle(`app-presentation_nav_item_active`,n),e.node.setAttribute(`aria-current`,String(n))});let e=this.subIndex===Z&&this.getSubSlides().length>0;this.hint.node.classList.toggle(`app-presentation_hint_hidden`,!e)}goTo(e,t,n=Z){if(this.isAnimating||!this.currentSlide||e<0||e>=X.length||n<Z||n>=this.getSubSlides(e).length||e===this.currentIndex&&n===this.subIndex)return;let r=(e===this.currentIndex?n-this.subIndex:e-this.currentIndex)>0?1:-1,i=this.currentSlide,a=this.createSlide(e,n),o={duration:io(),easing:`ease-in-out`,fill:`forwards`};this.isAnimating=!0,this.currentIndex=e,this.subIndex=n,this.currentSlide=a,sessionStorage.setItem(to,String(e)),this.syncPreviews(),this.renderSideNav();let s=i.node.animate([{transform:Q(t,0)},{transform:Q(t,-r*100)}],o),c=a.node.animate([{transform:Q(t,r*100)},{transform:Q(t,0)}],o);Promise.all([s.finished,c.finished]).then(()=>{i.destroy(),this.isAnimating=!1})}getFigures(e){let t=kr(Ur(Date.now()));switch(e){case`summary`:return[`Games: ${t.gamesPlayed}`,`Best: ${t.bestScore}`,`Average: ${t.averageScore}`,`Time: ${Mr(t.totalDurationSeconds)}`];case`brews`:return[`Successful: ${t.successfulBrews}`,`Failed: ${t.failedBrews}`];default:return[]}}destroy(){document.removeEventListener(`keydown`,this.onKeyDown),this.hint?.destroy(),this.previews?.forEach(e=>e.card.destroy()),this.currentSlide?.destroy(),super.destroy()}},oo=class extends H{callback;child;inputNode;submit;name=``;constructor({parentNode:e,callback:t}){super({parentNode:e,tagName:`div`,className:`app-start-game-dialog`}),this.callback=t,this.render()}render(){let{maxIngredients:e}=V.getState();new Bi({parentNode:this.node,currentLivesCount:0,maxLives:0,showLives:!1,showPauseButton:!1}),new aa({parentNode:this.node,currentIngredientsCount:0,currentRecipe:null,ingredients:[],maxIngredients:e}),this.child=new Vi({parentNode:this.node,isStartState:!0,callback:this.callback});let t=new H({parentNode:this.node,tagName:`form`,className:`app-start-game_form`});this.inputNode=new G({parentNode:t.node,placeholder:`Enter your name (2–15 chars)`,maxlength:`15`,className:`app-start-game_form_input`}),this.inputNode.onInput(e=>{this.validateName(e)}),this.submit=new W({parentNode:t.node,className:`app-game-over_wrap_back`,text:`Save name`,leftIcon:`symbol`,onClick:()=>{this.name||this.inputNode?.setError(`Enter valid name`)},color:`magic`})}validateName(e){/^[A-Za-z0-9 _-]{2,15}$/.test(e)?(this.inputNode?.setError(``),this.name=e):(this.inputNode?.setError(`Name must be 2–15 chars: letters, digits, space, _ or -`),this.name=``)}destroy(){this.child.destroy(),super.destroy()}},so={time:`Time is up`,lives:`No lives left`,ingredients:`Out of ingredients`},co=class extends H{score;submit;constructor({parentNode:e,score:t,isRecord:n,reason:r}){super({parentNode:e,tagName:`div`,className:`app-game-over`}),this.score=t,this.render(t,n,r)}render(e,t,n){let r=new H({parentNode:this.node,tagName:`div`,className:`app-game-over_wrap`});new H({parentNode:r.node,tagName:`h1`,className:`app-game-over_wrap_title`,content:`GAME OVER`}),new H({parentNode:r.node,tagName:`div`,className:`app-game-over_wrap_reason`,content:so[n]});let i=V.getUserName();new H({parentNode:r.node,tagName:`div`,className:`app-game-over_wrap_score`,content:`Final ${i} Score: ${e}`}),t&&i&&(this.submit=new W({parentNode:r.node,className:`app-game-over_wrap_back`,text:`SUBMIT SCORE`,leftIcon:`symbol`,onClick:()=>{this.submit.setDisabled(!0),V.submitScore(i,this.score)},color:`magic`})),new W({parentNode:r.node,className:`app-game-over_wrap_replay`,text:`PLAY AGAIN`,leftIcon:`symbol`,onClick:()=>{V.startNewGame()},color:`magic`})}},lo=Object.values(D);function uo(e){let t=e.replace(/^#/,``).split(`?`)[0].replace(/\/+$/,``)||`/`;return lo.includes(t)?t:D[g]}var $=new class{handler=null;events=new Qn;constructor(){window.addEventListener(`hashchange`,()=>{this.handler?.(this.current()),this.emit(Kn.PATH_CHANGE,this.current())})}current(){return uo(window.location.hash)}onChange(e){this.handler=e}navigate(e){window.location.hash=e}subscribe(e,t){this.events.on(e,t)}emit(e,t){this.events.emit(e,t)}},fo=class extends H{root;appWrap;store=V;nameAsked=!1;currentPage=null;currentView=null;portal;GameHeader=null;main=null;footer=null;pause=null;startGameNode=null;constructor(e){super({parentNode:e,tagName:`div`,className:`app`,attrs:{id:`app`}}),this.root=e,V.subscribe(S.GAME_START,()=>{this.renderGameView()}),V.subscribe(S.ROUND_OVER,()=>{this.store.newRound()}),V.subscribe(S.PAUSE,({auto:e})=>{e||this.renderPauseDialog()}),V.subscribe(S.RESUME,()=>{this.portal.unmount()}),V.subscribe(S.SHOW_LEADERBOARD,e=>{this.renderLeaderboardDialog(e)}),V.subscribe(S.SHOW_RULES,()=>{this.renderRulesDialog()}),V.subscribe(S.GAME_OVER,({score:e,isRecord:t,reason:n})=>{this.renderGameOverView(e,t,n)}),V.subscribe(S.OPEN_NAME_DIALOG,()=>this.renderNameDialog()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.store.getState().status===s&&this.store.pauseGame()}),window.addEventListener(`pagehide`,()=>this.store.saveGame()),document.addEventListener(`keydown`,e=>this.handleHotkeys(e)),this.render()}render(){this.node.innerHTML=``,new Hi({parentNode:this.node,router:$}),this.appWrap=new H({parentNode:this.node,tagName:`div`,className:`app-wrap`})}setView(e){this.currentView&&this.currentView.destroy(),this.currentView=e}init(){this.root.append(this.node),this.portal=new Gi,$.onChange(e=>this.handleRoute(e)),this.handleRoute($.current())}renderStartView(){this.portal.unmount();let e=new oo({parentNode:this.appWrap.node,callback:()=>this.handleStartGame()});this.setView(e),!this.store.getUserName()&&!this.nameAsked&&this.renderNameDialog()}renderGameView(){this.portal.unmount();let{shelfIngredients:e,currentRecipe:t,cauldronIngredients:n,maxIngredients:r,lives:i,maxLives:a}=this.store.getState(),o=new H({parentNode:this.appWrap.node,tagName:`div`,className:`app-game-view`});new Bi({parentNode:o.node,maxLives:a,currentLivesCount:i}),new aa({parentNode:new H({parentNode:o.node,tagName:`main`,className:`app-main`}).node,ingredients:e,currentRecipe:t,currentIngredientsCount:n.length,maxIngredients:r}),new Vi({parentNode:o.node,callback:()=>this.store.brewCheck()}),this.setView(o)}renderGameOverView(e,t,n){this.portal.unmount();let r=new co({parentNode:this.appWrap.node,score:e,isRecord:t,reason:n});this.setView(r)}renderLeaderboardDialog(e){this.store.getState().status===s&&this.store.pauseGame();let t=new Yi({parentNode:null,onBack:()=>this.closeLeaderboardDialog(),onClean:()=>this.store.clearLeaderboard(),data:e});this.portal.mount(t.node,t),this.portal.setBlur()}renderPauseDialog(){let e=new Ki({parentNode:null,onBack:()=>{this.store.exitToMenu(),this.renderStartView()},onContinue:()=>{this.store.resumeGame()}});this.portal.mount(e.node,e),this.portal.onClose=()=>this.store.resumeGame(),this.portal.setBlur()}renderRulesDialog(){this.store.getState().status===s&&this.store.pauseGame();let e=new qi({parentNode:null,onClose:()=>{this.store.getState().status===o&&this.store.resumeGame(),this.portal.unmount()}});this.portal.mount(e.node,e),this.portal.setBlur()}closeLeaderboardDialog(){this.store.getState().status===o&&this.store.resumeGame(),this.portal.unmount()}handleStartGame=()=>{this.store.startNewGame()};handleHotkeys(e){if(this.store.getState().status!==s||e.repeat||e.ctrlKey||e.metaKey||e.altKey)return;let t=e.target instanceof Element?e.target:null;if(t?.closest(`input, textarea, select, [contenteditable="true"]`)||t?.closest(`button, a`)&&(e.code===`Space`||e.code===`Enter`))return;let n=/^(?:Digit|Numpad)([1-9])$/.exec(e.code);if(n){let t=this.store.getState().shelfIngredients[Number(n[1])-1];t&&this.store.addIngredientToCauldron(t.id),e.preventDefault()}else{switch(e.code){case`KeyB`:this.store.brewCheck();break;case`KeyX`:this.store.pourOut();break;case`KeyP`:case`Escape`:this.store.pauseGame();break;default:return}e.preventDefault()}}handleRoute(e){this.currentView?.destroy(),e===D[g]?this.renderStartView():e===D[v]?$.navigate(D[y]):e.startsWith(`${D[v]}/`)&&this.store.isIncognito()?$.navigate(D[g]):e===D[_]?this.renderPresentationView():this.renderProfileView(e)}renderProfileView(e){let{status:t}=this.store.getState();(t===s||t===o)&&this.store.exitToMenu(),this.portal.unmount(),this.setView(new Ha({parentNode:this.appWrap.node,router:$,route:e}))}renderPresentationView(){let{status:e}=this.store.getState();(e===s||e===o)&&this.store.exitToMenu(),this.portal.unmount(),this.setView(new ao({parentNode:this.appWrap.node}))}renderNameDialog(){this.nameAsked=!0;let e=()=>{this.portal.onClose=null,this.portal.unmount()},t=new Xi({parentNode:null,onSubmit:t=>{let n=this.store.setUserName(t);return n&&e(),n},onSkip:e});this.portal.mount(t.node,t),this.portal.onClose=e}},po=document.body;new fo(po).init();
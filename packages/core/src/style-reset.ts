export const reset = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary,
  ul,
  ol {
    display: block;
    margin: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern' on, 'liga' on, 'rlig' on, 'calt' off;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }

  img:not([alt]) {
    filter: blur(4px);
  }

`;


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/GastroFactor_old/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/GastroFactor_old"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16870, hash: 'a444ebaffd9887c7c1a06b78a6852f22bd40740b8bff9ddd9666bfae28646774', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17095, hash: 'efeadc0ffa8ac0b2ceb20d45c528b7c21facf952bda5b73e1a105ab19eacc781', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-L7FQCSLZ.css': {size: 195, hash: 'D4yEnZV/Bsw', text: () => import('./assets-chunks/styles-L7FQCSLZ_css.mjs').then(m => m.default)}
  },
};

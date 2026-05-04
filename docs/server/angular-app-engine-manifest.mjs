
export default {
  basePath: 'C:/Program Files/Git/GastroFactor_old',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

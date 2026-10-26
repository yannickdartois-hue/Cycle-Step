/* Cycle step : l'outil et ses PDF sont mis en cache à la 1re ouverture (Wi-Fi), puis fonctionnent sans réseau. */
const C='cycle-step-v13';
// Toutes les applis partagent le même stockage (même adresse github.io) : on n'efface QUE les anciennes versions de CETTE appli.
const MES_CACHES=/^(?:cycle\-step\-v)\d+$/;

// Wi-Fi faible au gymnase : si le réseau ne répond pas en 3 s, on ouvre la copie gardée sur l'appareil.
const sous3s=p=>{p.catch(()=>{});return Promise.race([p,new Promise((_,non)=>setTimeout(()=>non(new Error('réseau lent')),3000))])};
const FILES=["step-donnees.js", "cycle-step-old.html", "polices/archivo.woff2", "polices/atkinson-400.woff2", "polices/atkinson-700.woff2", "eps-design.css", "eps-outil.css", "eps-charte-v1.css", "ecran.css", "ecran.js", "eps-commun.js", "./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-180.png", "icon-32.png", "icon-512.png", "pdf/2de-step-S1.pdf", "pdf/2de-step-S2.pdf", "pdf/2de-step-S3.pdf", "pdf/2de-step-S4.pdf", "pdf/2de-step-S5.pdf", "pdf/2de-step-S6.pdf", "pdf/2de-step-S7.pdf", "pdf/2de-step-S8.pdf", "pdf/2de-step-banque.pdf", "pdf/2de-step-carnet.pdf", "pdf/2de-step-cycle-complet.pdf", "pdf/2de-step-defis.pdf", "pdf/2de-step-echauffement-binome.pdf", "pdf/2de-step-evaluation.pdf", "pdf/2de-step-fiche-coach.pdf", "pdf/2de-step-repertoire-16-pas.pdf", "pdf/2de-step-table-fc.pdf", "pdf/2de-step-version-perso.pdf"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>MES_CACHES.test(k)&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).pathname.includes('/carnet/'))return;
  const net=fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r});
  e.respondWith(sous3s(net).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html')).then(r=>r||net)))});

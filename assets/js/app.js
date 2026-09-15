const C = window.ARMAX_CONFIG || {};
let listings = [];
const $ = s => document.querySelector(s);
const fallbackImages = Array.from({length:8},(_,i)=>`assets/images/listings/listing-${(i%4)+1}.jpg`);

window.ARMAX_LISTINGS = [
  {"title":"Armax'tan Yeni Mah Ultralüx 2+1 Yüksek Giriş","type":"satilik","category":"daire","location":"Yeni Mahalle / Gaziosmanpaşa","price":"6.590.000 TL","meta":"2+1 • 90 m² brüt • 85 m² net • Yüksek giriş","agent":"Sinan Sivridaşdan","updated":"11.09.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-1.jpg"},
  {"title":"Bağlarbaşı TOKİ 7A'da Vialand Cephe 2+1","type":"satilik","category":"daire","location":"Bağlarbaşı / Gaziosmanpaşa","price":"6.700.000 TL","meta":"2+1 • 99 m² • 6. Kat","agent":"Uğur Taştemir","updated":"11.09.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-2.jpg"},
  {"title":"Armax'tan Merkezde Satılık 4+2 Dubleks","type":"satilik","category":"daire","location":"Merkez Mah. / Gaziosmanpaşa","price":"7.800.000 TL","meta":"4+2 • 165 m² • 3. Kat","agent":"Mert Özdikmen","updated":"11.09.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-3.jpg"},
  {"title":"Sarıgöl 12C Sitesinde Büyük Tip 3+1","type":"satilik","category":"daire","location":"Sarıgöl / Gaziosmanpaşa","price":"11.000.000 TL","meta":"3+1 • 140 m² • 4. Kat • 2 balkon","agent":"Armax Gayrimenkul","updated":"24.08.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-4.jpg"},
  {"title":"Armax'tan 12C Projesinde Manzaralı 2+1","type":"satilik","category":"daire","location":"Sarıgöl / Gaziosmanpaşa","price":"8.500.000 TL","meta":"2+1 • 90 m² • 9. Kat • Amerikan mutfak","agent":"Armax Gayrimenkul","updated":"24.08.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-1.jpg"},
  {"title":"Bağlarbaşı'nda 2+1 110 m² Kiralık Daire","type":"kiralik","category":"daire","location":"Bağlarbaşı / Gaziosmanpaşa","price":"43.000 TL / ay","meta":"2+1 • 130 m² brüt • 3. Kat","agent":"Armax Gayrimenkul","updated":"19.08.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-2.jpg"},
  {"title":"12C'de Manzaralı Amerikan Mutfak 2+1","type":"kiralik","category":"daire","location":"Sarıgöl / Gaziosmanpaşa","price":"35.000 TL / ay","meta":"2+1 • 90 m² • 6. Kat","agent":"Armax Gayrimenkul","updated":"24.08.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-3.jpg"},
  {"title":"Bağlarbaşı Caddesi'nde 2+1 Satılık Daire","type":"satilik","category":"daire","location":"Bağlarbaşı / Gaziosmanpaşa","price":"4.650.000 TL","meta":"2+1 • 100 m² brüt • 2. Kat","agent":"Armax Gayrimenkul","updated":"10.09.2026","url":"https://armaxgayrimenkul.sahibinden.com/","image":"assets/images/listings/listing-4.jpg"}
];

function esc(v=''){return String(v).replace(/[&<>\"]/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));}
function normalizeListing(x,i){return {...x,image:x.image || fallbackImages[i%fallbackImages.length],url:x.url || C.sahibindenStore || '#'};}
function listingCard(x,i){
  const image=normalizeListing(x,i).image;
  const url=normalizeListing(x,i).url;
  return `<article class="listing-card">
    <a class="listing-img" href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(x.title)}">
      <img src="${esc(image)}" alt="${esc(x.title)}" loading="lazy" onerror="this.onerror=null;this.src='${esc(fallbackImages[i % fallbackImages.length])}'">
      <span>${x.type==='kiralik'?'KİRALIK':'SATILIK'}</span><b>SAHİBİNDEN'DE İNCELE ↗</b>
    </a>
    <div class="listing-body"><small>${esc(x.location)}</small><h3>${esc(x.title)}</h3><p>${esc(x.meta||'')}${x.agent?` • ${esc(x.agent)}`:''}</p><strong>${esc(x.price)}</strong><em>${x.updated?`Güncelleme: ${esc(x.updated)}`:'Armax portföyü'}</em></div>
  </article>`;
}
function render(){
  const type=$('#filterType')?.value || 'all';
  const cat=$('#filterCategory')?.value || 'all';
  const loc=($('#filterLocation')?.value || '').trim().toLocaleLowerCase('tr-TR');
  const out=listings.filter(x=>(type==='all'||x.type===type)&&(cat==='all'||x.category===cat)&&(!loc||String(x.location||'').toLocaleLowerCase('tr-TR').includes(loc)));
  const data=out.length?out:listings;
  $('#listingTrack').innerHTML=data.length?data.map(listingCard).join(''):`<div class="status-error">Şu anda gösterilecek ilan bulunamadı. Sahibinden mağazamızdan tüm portföyü inceleyebilirsiniz.</div>`;
  $('#resultCount').textContent=out.length===listings.length?`${listings.length} ilan`:`${out.length} eşleşme`;
  if(!out.length && (loc || type!=='all' || cat!=='all')) $('#syncStatus').textContent='Filtreye uygun sonuç bulunamadı • tüm portföy gösteriliyor.';
}
function applyConfig(){
  document.querySelectorAll('[data-sahibinden]').forEach(a=>{a.href=C.sahibindenStore||'#';a.target='_blank';a.rel='noopener'});
  document.querySelectorAll('[data-instagram]').forEach(a=>{if(C.instagram){a.href=C.instagram;a.target='_blank';a.rel='noopener'}else{a.classList.add('hidden')}});
  document.querySelectorAll('[data-whatsapp]').forEach(a=>{if(C.whatsapp)a.href=`https://wa.me/${String(C.whatsapp).replace(/\D/g,'')}`;else a.href='#iletisim'});
  if(C.phone){const p=document.querySelector('[data-phone]');if(p){p.href=`tel:${C.phone}`;p.textContent=C.phone}}
  if(C.email){const e=document.querySelector('[data-email]');if(e){e.href=`mailto:${C.email}`;e.textContent=C.email}}
  if(C.address){const a=document.querySelector('[data-address]');if(a)a.textContent=C.address}
}
async function loadLocal(){
  const cacheBust=`?v=${Date.now()}`;
  try{
    const r=await fetch(`data-listings.json${cacheBust}`,{cache:'no-store'});
    if(!r.ok) throw new Error('listing data');
    const data=await r.json();
    if(!Array.isArray(data)) throw new Error('invalid data');
    listings=data.map(normalizeListing); render();
    $('#syncStatus').textContent='Portföy hazır • ilan kartlarından Sahibinden mağazasına geçebilirsiniz.';
  }catch(e){
    const embedded=Array.isArray(window.ARMAX_LISTINGS)?window.ARMAX_LISTINGS:[];
    listings=embedded.map(normalizeListing); render();
    $('#syncStatus').textContent=listings.length?'Yerel portföy hazır • Sahibinden mağazası üzerinden ilan detayları açılır.':'Portföy verisi yüklenemedi.';
  }
}
async function loadLive(){
  if(!C.listingsApi)return;
  try{const r=await fetch(C.listingsApi,{headers:{Accept:'application/json'},cache:'no-store'});if(!r.ok)throw new Error('API');const data=await r.json();if(Array.isArray(data)&&data.length){listings=data.map(normalizeListing);render();$('#syncStatus').textContent='Canlı portföy senkronizasyonu aktif.'}}catch(e){}
}
function carousel(dir){const t=$('#listingTrack');if(t)t.scrollBy({left:dir*Math.min(410,t.clientWidth*.88),behavior:'smooth'})}
document.addEventListener('DOMContentLoaded',async()=>{
  $('#year').textContent=new Date().getFullYear(); applyConfig();
  await loadLocal(); await loadLive();
  $('#applyFilters')?.addEventListener('click',render);
  $('#filterLocation')?.addEventListener('keydown',e=>{if(e.key==='Enter')render()});
  $('.prev')?.addEventListener('click',()=>carousel(-1)); $('.next')?.addEventListener('click',()=>carousel(1));
  $('#menuToggle')?.addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open))});
  document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
  if(C.listingsApi)setInterval(loadLive,C.refreshMs||300000);
});

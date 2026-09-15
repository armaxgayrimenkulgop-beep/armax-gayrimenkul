const C = window.ARMAX_CONFIG || {};
let listings = [];
const $ = s => document.querySelector(s);

const fallbackImages = [
  'assets/images/listings/listing-1.jpg',
  'assets/images/listings/listing-2.jpg',
  'assets/images/listings/listing-3.jpg',
  'assets/images/listings/listing-4.jpg'
];

function esc(v='') { return String(v).replace(/[&<>\"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s])); }
function listingCard(x, i){
  const image = x.image || fallbackImages[i % fallbackImages.length];
  const url = x.url || C.sahibindenStore || '#';
  return `<article class="listing-card">
    <a href="${esc(url)}" target="_blank" rel="noopener" class="listing-img" style="background-image:linear-gradient(180deg,rgba(15,31,44,.02),rgba(15,31,44,.35)),url('${esc(image)}')">
      <span>${x.type==='kiralik'?'KİRALIK':'SATILIK'}</span><b>SAHİBİNDEN'DE İNCELE ↗</b>
    </a>
    <div class="listing-body"><small>${esc(x.location)}</small><h3>${esc(x.title)}</h3><p>${esc(x.meta)}${x.agent?` • ${esc(x.agent)}`:''}</p><strong>${esc(x.price)}</strong><em>Güncelleme: ${esc(x.updated || '')}</em></div>
  </article>`;
}

function render(){
  const type=$('#filterType').value, cat=$('#filterCategory').value, loc=$('#filterLocation').value.trim().toLocaleLowerCase('tr');
  const out=listings.filter(x => (type==='all'||x.type===type) && (cat==='all'||x.category===cat) && (!loc||x.location.toLocaleLowerCase('tr').includes(loc)));
  $('#listingTrack').innerHTML=(out.length?out:listings).map(listingCard).join('');
  $('#resultCount').textContent = `${out.length} ilan gösteriliyor`;
}

function applyConfig(){
  document.querySelectorAll('[data-sahibinden]').forEach(a=>{ a.href=C.sahibindenStore||'#'; a.target='_blank'; a.rel='noopener'; });
  document.querySelectorAll('[data-instagram]').forEach(a=>{ if(C.instagram){a.href=C.instagram;a.target='_blank';a.rel='noopener';} });
  document.querySelectorAll('[data-whatsapp]').forEach(a=>{ if(C.whatsapp)a.href=`https://wa.me/${String(C.whatsapp).replace(/\D/g,'')}`; });
  if(C.phone){ const p=document.querySelector('[data-phone]'); if(p){p.href=`tel:${C.phone}`;p.textContent=C.phone;} }
  if(C.email){ const e=document.querySelector('[data-email]'); if(e){e.href=`mailto:${C.email}`;e.textContent=C.email;} }
  if(C.address){ const a=document.querySelector('[data-address]'); if(a)a.textContent=C.address; }
}

async function loadLocal(){
  const r=await fetch('data-listings.json',{cache:'no-store'});
  if(!r.ok) throw new Error('listing data');
  listings=await r.json();
  render();
  $('#syncStatus').textContent='Portföy görünümü hazır • Sahibinden mağazasıyla bağlantı kuruldu.';
}
async function loadLive(){
  if(!C.listingsApi) return;
  try{
    const r=await fetch(C.listingsApi,{headers:{Accept:'application/json'},cache:'no-store'});
    if(!r.ok) throw new Error('API');
    const data=await r.json();
    if(Array.isArray(data) && data.length){ listings=data; render(); $('#syncStatus').textContent='Canlı portföy senkronizasyonu aktif.'; }
  }catch(e){ /* keep local snapshot */ }
}
function carousel(dir){ const t=$('#listingTrack'); t.scrollBy({left:dir*Math.min(390,t.clientWidth*.86),behavior:'smooth'}); }

document.addEventListener('DOMContentLoaded', async()=>{
  $('#year').textContent=new Date().getFullYear();
  applyConfig();
  try { await loadLocal(); } catch(e) { listings=[]; $('#listingTrack').innerHTML='İlan verisi yüklenemedi.'; }
  await loadLive();
  $('#applyFilters').addEventListener('click',render);
  $('.prev').addEventListener('click',()=>carousel(-1));
  $('.next').addEventListener('click',()=>carousel(1));
  $('.menu-toggle').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
  setInterval(loadLive, C.refreshMs || 300000);
});

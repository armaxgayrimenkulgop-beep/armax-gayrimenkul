window.ARMAX_CONFIG = {
  whatsapp: '',
  phone: '',
  email: 'info@armaxgayrimenkul.com',
  address: 'Bağlarbaşı Mah. Bağlarbaşı Cad. No: 115/119C, Gaziosmanpaşa / İstanbul',
  instagram: '',
  sahibindenStore: 'https://armaxgayrimenkul.sahibinden.com/',
  listingsApi: '',
  refreshMs: 300000
};

document.head.insertAdjacentHTML('beforeend', `<style>
.consultant-contact>a{display:flex!important;flex-direction:column;gap:2px;padding:6px 0!important;line-height:1.25}
.consultant-contact>a strong{font-size:10px;color:#dcebf4;font-weight:800}
.consultant-contact>a span{font-size:9px;color:#8eabbc;letter-spacing:.03em}
.team-phone{display:block!important;margin-top:7px!important;font-size:10px!important;font-weight:800!important;color:#2b86c5!important}
.team-phone:hover,.consultant-contact>a:hover strong,.consultant-contact>a:hover span{text-decoration:underline}

/* Danışman isimleri ve iletişim isimleri: koyu, güçlü ve okunaklı */
#ekibimiz .team-body h3{color:#0c2f4a!important;font-weight:800!important;font-size:17px!important;text-shadow:none!important}
#ekibimiz .team-body p{color:#527083!important;font-weight:600!important}
#ekibimiz .team-body{background:#fff!important}
.consultant-contact>a strong{color:#0c2f4a!important;font-size:11px!important;font-weight:800!important}
.consultant-contact>a span{color:#527083!important;font-size:10px!important;font-weight:600!important}
</style>`);

# ARMAX Gayrimenkul — GitHub Pages

Kurumsal, mobil uyumlu, sade ve hızlı tek sayfa gayrimenkul sitesi.

## GitHub Pages kurulumu
1. GitHub'da repository oluşturun.
2. Bu klasörün içeriğini repository köküne yükleyin.
3. Settings → Pages → Deploy from a branch → `main` / `/ (root)` seçin.

## Hazır özellikler
- Kurumsal ana sayfa, hizmetler ve iletişim.
- 6 kişilik ekip bölümü ve gönderilen personel fotoğrafları.
- Satılık/kiralık/konum filtreli ilan alanı ve yatay slayt.
- Sahibinden mağaza bağlantıları: https://armaxgayrimenkul.sahibinden.com/
- Mobil menü, WhatsApp, Instagram, telefon ve e-posta alanları.
- Güncel portföy için yerel JSON veri dosyası (`data-listings.json`).
- Canlı veri için isteğe bağlı JSON endpoint (`assets/js/config.js` içindeki `listingsApi`).

## Sahibinden canlı ilan entegrasyonu
GitHub Pages statik bir barındırmadır. Sahibinden'den gizli anahtar gerektiren resmî veri/API çağrısını doğrudan tarayıcıya koymak güvenli değildir. Bu nedenle site iki katmanlı hazırlandı: `data-listings.json` açılışta gösterilecek portföy snapshot'ını sağlar; resmî API/veri aktarım yetkisi verildiğinde `listingsApi` alanına güvenli bir ara servis endpoint'i yazılarak site otomatik yenilenebilir.

Not: 15.09.2026 itibarıyla mevcut Sahibinden mağaza sayfasına web üzerinden doğrudan erişim robots.txt ile engellendiğinden, siteye sahte bir “canlı Sahibinden API” bağlantısı konulmadı. Mağaza linki gerçek olarak entegre edildi; veriler ayrıca güncel bir başlangıç snapshot'ı ile sunuluyor.

## Logo
Armax'ın gönderdiği kurumsal logo `assets/images/armax-logo.jpg` olarak header ve footer'a entegre edilmiştir.

# Armax Gayrimenkul — V2

Kurumsal, mobil uyumlu GitHub Pages web sitesi.

## Özellikler
- Kurumsal Armax tasarımı ve responsive görünüm
- 6 kişilik ekip bölümü ve yerel ekip fotoğrafları
- Satılık / kiralık / kategori / konum filtreleri
- Yatay portföy slider'ı
- Yerel portföy görselleri; harici görsel servisine bağımlı değil
- Sahibinden mağazasına doğrudan bağlantı
- Veri dosyası yüklenemezse gömülü portföy yedeği
- Mobil açılır menü

## Yayın
GitHub Pages: `main` branch ve repository root kullanılmalıdır.

## Sahibinden
Sitedeki portföy kartları Sahibinden mağazasına yönlendirilir. Gerçek zamanlı veri için resmî bir API/feed endpoint'i `assets/js/config.js` içindeki `listingsApi` alanına bağlanabilir. API anahtarı istemci tarafına konulmamalıdır.

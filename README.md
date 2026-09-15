# Armax Gayrimenkul — GitHub Pages V2

Bu sürüm Armax Gayrimenkul için daha güçlü kurumsal görünüm, yerel görsel varlıklar ve daha dayanıklı portföy yükleme sistemi içerir.

## İçerik
- Yeni kurumsal ana sayfa ve hero alanı
- Logo için koyu mavi çerçeveli profesyonel sunum
- Satılık / kiralık / gayrimenkul tipi / konum filtreleri
- Yatay portföy slider'ı
- Sahibinden mağazasına doğrudan bağlantılar
- Sahibinden verisi/API erişimi olmadığı durumda bile çalışan yerel portföy yedeği
- Yerel SVG portföy görselleri; harici görsel servislerine bağımlılık yok
- 6 ekip fotoğrafı yerel olarak dahil
- Hizmetler, rakamlar, hakkımızda, ekip ve iletişim bölümleri
- Mobil menü ve responsive tasarım

## GitHub Pages'e yükleme
1. ZIP'i açın.
2. İçindeki tüm dosyaları `armax` repository'nizin ana dizinine yükleyin.
3. GitHub'da **Settings → Pages** bölümünde source olarak repository / `main` / `/ (root)` seçili olsun.
4. Birkaç dakika sonra Pages adresini yenileyin.

## Sahibinden canlı veri
`assets/js/config.js` içindeki `listingsApi` alanı boş bırakılmıştır. Resmî Sahibinden API/veri transfer erişimi sağlandığında buraya güvenli bir JSON endpoint bağlanabilir.

> API anahtarını doğrudan GitHub Pages üzerindeki JavaScript'e koymayın. Anahtar varsa sunucu tarafında/serverless endpoint'te tutulmalıdır.

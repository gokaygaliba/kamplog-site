# KAMPLOG — Vercel yayın sitesi

Premium outdoor dergi tasarımı, 10 başlangıç yazısı, makale detay sayfaları, arama, SEO sitemap/robots ve reklam yerleşimleri içerir.

## Vercel'e gönderme
1. Bu klasörün içeriğini GitHub'daki `kamplog-site` deposunun kök dizinine yükleyin (mevcut dosyaların üzerine).
2. Vercel otomatik dağıtım başlatır. Build ayarları: Framework Next.js, Root Directory `./`, Build `npm run build`.
3. Canlı URL'de `/yazilar` sayfasını ve her makale detayını kontrol edin.

## Reklam alanları
`.env.example` içindeki değişkenleri Vercel > Settings > Environment Variables bölümüne girin. AdSense için önce Google AdSense başvurusu ve site doğrulaması gerekir. Onay ve reklam birimi kimlikleri olmadan gerçek reklam gösterilmez; yer tutucular görünür.

## Sürekli içerik yayınlama
Bu Vercel sürümü şu anda başlangıç içeriklerini kod içindeki `lib/posts.ts` dosyasından sunar. WordPress yönetim panelinden kod değiştirmeden yazı eklemek için ayrı bir WordPress kurulumu ve REST API bağlantısı gerekir. Bu projede henüz WordPress sunucu adresi/API bağlantısı tanımlı değildir. WordPress adresi bağlandığında içerikler panelden yönetilebilir.

## Önemli yayın öncesi kontroller
- Gizlilik ve çerez politikası, iletişim ve hakkımızda sayfalarını gerçek işletme bilgileriyle tamamlayın.
- Bülten formları şu an görsel tasarımdır; e-posta servis entegrasyonu yapılmadan abone kaydetmez.
- Makalelerdeki görseller harici Unsplash görselleridir; yayına almadan önce lisans/ kullanım koşullarını ve görsel kaynaklarını doğrulayın veya kendi görsellerinizle değiştirin.
- Kamp, ateş, rota ve ilk yardım içerikleri genel bilgilendirmedir; resmî duyurular ve uzman tavsiyelerinin yerine geçmez.

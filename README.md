# KAMPLOG — Vercel'e hazır web sitesi

Bu klasör doğrudan GitHub deposunun ana dizinine yüklenecek şekilde hazırlanmıştır.

## GitHub'a yükleme (en kolay yöntem)

1. GitHub.com'a girin ve **New repository** seçin.
2. Repository name alanına `kamplog-site` yazın.
3. Public veya Private seçip **Create repository** butonuna basın.
4. Açılan boş depoda **Add file → Upload files** seçin.
5. Bu klasörün İÇİNDEKİ tüm dosya ve klasörleri sürükleyip yükleme alanına bırakın.
   - `package.json` en üst seviyede görünmeli.
   - `app` klasörü en üst seviyede görünmeli.
   - `README.md` en üst seviyede görünmeli.
   - `vercel-preview` diye bir üst klasör oluşturarak yüklemeyin.
6. **Commit changes** butonuna basın.

## Vercel'e bağlama

1. https://vercel.com/new adresini açın.
2. GitHub hesabınızı bağlayın ve `kamplog-site` deposunu seçin.
3. Configure Project ekranında:
   - Framework Preset: **Next.js**
   - Root Directory: **./**
   - Build Command: otomatik / `npm run build`
   - Output Directory: otomatik (Next.js default)
   - Install Command: otomatik / `npm install`
4. **Deploy** butonuna basın.

## Önemli kontrol

GitHub deposunun ana sayfasında `package.json` ve `app` klasörü doğrudan görünmelidir. Eğer ikisi de bir alt klasörün içindeyse dosyaları yanlış seviyeye yüklemişsiniz demektir.

Bu proje Vercel üzerinde önizleme/test için Next.js kullanır. WordPress PHP teması değildir. Tasarım onaylandıktan sonra ayrıca WordPress teması olarak kullanılabilir.

# QUICK START GUIDE - Hızlı Başlangıç

## 🚀 İlk 5 Dakika

### 1️⃣ Dosyaları Kontrol Et
Klasörde şu dosyalar olmalı:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `config.json`
- ✅ `README.md`
- ✅ `.gitignore`
- ✅ `GITHUB_SETUP.md`
- ✅ `COMPLETION_SUMMARY.md`

### 2️⃣ Localhost'ta Aç

#### Windows PowerShell'de:
```powershell
cd "c:\Users\EMIN.ALTINISIK\OneDrive - LC WAIKIKI MAGAZACILIK HIZMETLERI TIC.A.S\Masaüstü\GTS GELİŞTİRMELER\davetiye projesi"

python -m http.server 8000
```

#### Veya tarayıcıdan direkt:
`index.html` dosyasına çift tıklayın (basit başlangıç için yeterli)

#### Tarayıcıda açın:
```
http://localhost:8000
```

### 3️⃣ Davetiyeyi Test Et
- Zarfa tıklayın → açılacak ve kapatılacak
- "Detayları Gör" butonuna tıklayın
- Sayfayı scroll edin
- Geri sayımı kontrol edin
- "Haritada Aç" linklerine tıklayın

## 🎨 Kişiselleştir

### İsimleri Değiştir
`config.json` dosyasını açın:

```json
"couple": {
  "bride": "Sümeyye",      // ← Burayı değiştir
  "groom": "Mehmet Bilal"  // ← Burayı değiştir
}
```

### Tarihleri Değiştir
```json
"ceremonies": {
  "marriage": {
    "date": "21 Haziran 2026",    // ← Yeni tarih
    "time": "13:45",              // ← Yeni saat
    "venue": "Etimesgut...",       // ← Yeni mekan
    "address": "Etimesgut / Ankara" // ← Yeni adres
  }
}
```

### Renkleri Değiştir
```json
"colors": {
  "primary": "#D4AF37",      // Ana renk (Altın)
  "secondary": "#C0C0C0",    // İkincil renk (Gümüş)
  "accent": "#F5E6D3",       // Vurgu rengi (Krem)
  "text": "#333333",         // Yazı rengi
  "textLight": "#666666"     // Açık yazı rengi
}
```

📝 **TİP**: Dosyayı kaydettikten sonra tarayıcıda F5 ile yenileyin!

## 💾 Git Kurulumu

### Basit 5 Adım:

```powershell
# 1. Klasöre git
cd "davetiye projesi"

# 2. Git initialize et
git init

# 3. Config ayarla
git config user.email "senin_email@gmail.com"
git config user.name "Senin Adın"

# 4. Ekle ve commit et
git add .
git commit -m "Başlangıç - Düğün davetiye sitesi"

# 5. GitHub'a push et (GitHub'da repo oluşturduktan sonra)
git remote add origin https://github.com/YOUR_USERNAME/wedding-venue.git
git branch -M main
git push -u origin main
```

## 🌐 Netlify Deploy

1. Netlify.com'a gidin
2. GitHub ile giriş yapın
3. "New site from Git" tıklayın
4. `wedding-venue` repo'yu seçin
5. "Deploy site" tıklayın

✨ Bitti! Site otomatik deploy olacak!

## ❓ Sık Sorulan Sorular

### Q: Fotoğraf nasıl eklerim?
**A**: `assets` klasörü oluşturun, görselleri koyun, `index.html`'e `<img>` ekleyin.

### Q: RSVP formu nasıl çalışır?
**A**: 
1. formspree.io'ya gidin
2. Form oluşturun
3. Form ID'sini `config.json`'a yapıştırın

### Q: Mobilde nasıl görünür?
**A**: Tarayıcıda F12 → Mobil view. Hepsi responsive!

### Q: QR kod nasıl eklim?
**A**: `script.js`'e qrcode.js library ekleyin (opsiyonel)

### Q: Arama motorunda görünsün mü?
**A**: `index.html`'e meta tags ekleyin (SEO opsiyonel)

## 🔧 Sorun Giderme

| Sorun | Çözüm |
|-------|-------|
| Localhost çalışmıyor | Node.js'in `http-server` paketini deneyin |
| Zarif açılmıyor | Tarayıcı cache'sini temizleyin (Ctrl+Shift+Delete) |
| Formlar çalışmıyor | Formspree ID'nin doğru olup olmadığını kontrol edin |
| Git hatası | `git config user.name` ve `git config user.email` tekrar ayarlayın |

## 📞 İletişim ve Destek

Eklenecek özellikler:
- [ ] QR kod generator
- [ ] Müzik arka plan
- [ ] Fotoğraf galerisi
- [ ] İstatistikler (kaç kişi RSVP yaptı)
- [ ] Dark mode toggle
- [ ] Multi-language support

---

**Hepsi bitti! 🎉**

Sorularınız olursa `GITHUB_SETUP.md` ve `COMPLETION_SUMMARY.md` dosyalarını kontrol edin.

İyi şanslar! 💍✨

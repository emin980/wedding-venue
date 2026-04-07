# REFERANS KARTI - Komutlar & Dosyalar

## 📍 Klasör Yolu
```
c:\Users\EMIN.ALTINISIK\OneDrive - LC WAIKIKI MAGAZACILIK HIZMETLERI TIC.A.S\Masaüstü\GTS GELİŞTİRMELER\davetiye projesi
```

## ⚡ Hızlı Komutlar

### Localhost Başlat
```bash
python -m http.server 8000
# Aç: http://localhost:8000
```

### Git Initialize
```bash
git init
git config user.email "email@gmail.com"
git config user.name "Adın"
git add .
git commit -m "Initial commit"
```

### GitHub Push
```bash
git remote add origin https://github.com/USERNAME/wedding-venue.git
git branch -M main
git push -u origin main
```

## 📄 Dosyalar Rehberi

| Dosya | Amaç | Değiştir? |
|-------|------|----------|
| `index.html` | Ana sayfa | Nadiren |
| `styles.css` | Tasarım/renkler | Tasarım için |
| `script.js` | İşlevsellik | Nadiren |
| `config.json` | **Veriler** | **ÖNEMLİ**: İsimler, tarihler |
| `.gitignore` | Git ayarı | Hayır |
| `README.md` | Dokümantasyon | Nadiren |

## 🎯 En Çok Değiştirilecekler

### İsimleri Değiştir (config.json)
```json
"couple": {
  "bride": "YENİ İSİM",
  "groom": "YENİ İSİM"
}
```

### Tarihleri Güncelle (config.json)
```json
"ceremonies": {
  "marriage": {
    "date": "YY Ay YYYY",
    "time": "SS:DD"
  }
}
```

### Renkleri Değiştir (config.json)
```json
"colors": {
  "primary": "#HEX_RENK",
  "secondary": "#HEX_RENK"
}
```

## 🌐 Web Linkleri

- **Formspree** (RSVP): https://formspree.io
- **Netlify** (Deploy): https://netlify.com
- **GitHub**: https://github.com
- **Google Maps**: https://maps.google.com

## 💻 Yazılımlar Gereken

- ✅ Git (kurulu?)
- ✅ Python (kurulu?)
- ✅ Tarayıcı (Chrome/Firefox)
- ✅ Text Editor (VS Code önerilen)

## 🔗 JSON Path Referansı

```json
config.json
├── couple
│   ├── bride
│   └── groom
├── year
├── ceremonies
│   ├── marriage
│   │   ├── date
│   │   ├── time
│   │   ├── venue
│   │   ├── address
│   │   ├── maps_url
│   │   └── whatsapp_url
│   ├── henna
│   └── wedding
├── families
│   ├── bride
│   └── groom
├── rsvp
│   ├── enabled
│   ├── adminEmail
│   └── formspreeId
└── colors
    ├── primary
    ├── secondary
    ├── accent
    ├── text
    └── textLight
```

## ✏️ Başlangıç Checklist

- [ ] İsim ve tarihleri güncelle (config.json)
- [ ] Harita linklerini güncelle (Google Maps)
- [ ] Renkleri özelleştir (opsiyonel)
- [ ] Localhost test et (python -m http.server)
- [ ] GitHub repo oluştur
- [ ] Git push et
- [ ] Netlify deploy et
- [ ] Formspree kurulu (RSVP için)
- [ ] Canlı linkini test et
- [ ] Arkadaşlara paylaş! 🎉

## 🎨 Renk Kodları (Hex)

| Renk | Hex Kodu | Kullanım |
|------|----------|----------|
| Altın | #D4AF37 | Primary |
| Gümüş | #C0C0C0 | Secondary |
| Krem | #F5E6D3 | Accent |
| Koyu Gri | #333333 | Yazı |
| Açık Gri | #666666 | Light text |
| Beyaz Krem | #FEFDFB | Background |
| Taupe | #E8DCC8 | Border |

## 📊 Renk Paleti

**Mevcut (Altın+Gümüş):**
```
#D4AF37 (Altın)
#C0C0C0 (Gümüş)
#F5E6D3 (Krem)
```

**Alternatif:**
```
#E8D5B7 (Terracotta)
#8B7355 (Kahverengi)
#D4A574 (Tarihî Altın)
```

## 🔑 Sık Kullanılan Linkler

- **Harita Link Oluştur**: Google Maps'te mekanı ara → Linki kopyala
- **WhatsApp Link**: `https://wa.me/90` (Telefon numarasını ekle)
- **Formspree Form ID**: formspree.io'da form oluştur → ID'sini kopyala

## 🐛 Sorun Giderme

```bash
# Kaç dosya var?
ls -la

# Git kurulu mu?
git --version

# Python kurulu mu?
python --version

# Port 8000 meşgul mi?
python -m http.server 3000  # Farklı port dene
```

## 📱 Test Lis

- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Zarfa tıkla
- [ ] Scroll et
- [ ] Harita linklerine tıkla
- [ ] Share butonlarına tıkla
- [ ] Form gönder

## 🎁 Eklenebilecek Özellikler

```javascript
// QR Kod
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

// Müzik
<audio src="song.mp3" autoplay loop></audio>

// Fotoğraf
<img src="assets/photo.jpg" alt="...">
```

---

**Son güncelleme**: 7 Nisan 2026
**Durum**: Production Ready ✅

# Wedding Invitation Website

Sümeyye & Mehmet Bilal için modern, parametrik bir düğün davetiye sitesi.

## Özellikleri

- ✨ Zarif davetiye zarfı animasyonu ile giriş
- 📱 Tamamen responsive tasarım (mobil, tablet, masaüstü)
- 🎨 Açık/minimal tema - gözü yormasın
- 📅 Her merasim için ayrı lokasyon ve tarih bilgileri
  - Nikah Merasimi
  - Kına Gecesi
  - Düğün Töreni
- ⏰ Düğüne kalan zaman geri sayımı (countdown)
- 👨‍👩‍👧‍👦 Kız tarafı ve erkek tarafı aile bilgileri
- 🗺️ Google Maps entegrasyonu her merasim için
- 💬 WhatsApp konum paylaşımı
- 📝 RSVP formu (Formspree ile mail gönderimi)
- 🔗 Sosyal medya paylaşım butonları
- ⚙️ Parametrik sistem (config.json ile her şey değiştirilebilir)

## Proje Yapısı

```
.
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript işlevselliği
├── config.json         # Parametrik veriler
├── assets/             # Görseller klasörü
└── README.md           # Bu dosya
```

## Kurulum

### Lokal Ortamda Çalıştırma

1. Proje klasörüne gidin:
```bash
cd davetiye-projesi
```

2. Basit bir HTTP server başlatın:

Python 3:
```bash
python -m http.server 8000
```

Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Node.js:
```bash
npx http-server
```

3. Tarayıcıda açın:
```
http://localhost:8000
```

## Konfigürasyon

`config.json` dosyasında tüm dinamik veriler tanımlanır:

- **couple**: Çift isimleri
- **year**: Düğün yılı
- **invitationMessage**: Davet metni
- **ceremonies**: Her merasim için tarih, saat, yer, harita linki
- **families**: Kız ve erkek tarafı aile bilgileri
- **rsvp**: Formspree entegrasyonu
- **colors**: Renk şeması

## Formspree Kurulumu

RSVP formunun çalışması için:

1. [formspree.io](https://formspree.io) adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni bir form oluşturun
4. Form ID'sini kopyalayın
5. `config.json` dosyasında `rsvp.formspreeId` kısmını güncelleyin

## Netlify'de Deploy

### GitHub'a Push Etme

1. GitHub'da yeni bir repository oluşturun (`wedding-venue`)
2. Lokal olarak initialize edin:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/wedding-venue.git
git push -u origin main
```

### Netlify Deployment

1. [netlify.com](https://netlify.com) adresine gidin
2. GitHub hesabınız ile giriş yapın
3. "New site from Git" seçeneğini tıklayın
4. `wedding-venue` repository'sini seçin
5. Deploy butonu tıklayın

Site otomatik olarak deploy olacak ve her push'ta güncellenecek.

## Özelleştirme

### İsim ve Tarihleri Değiştirme

`config.json` dosyasında aşağıdaki kısımları düzenleyin:

```json
{
  "couple": {
    "bride": "Yeni İsim",
    "groom": "Yeni İsim"
  },
  "ceremonies": {
    "wedding": {
      "date": "11 Temmuz 2026",
      "time": "18:00",
      ...
    }
  }
}
```

### Renkleri Değiştirme

`config.json` dosyasında `colors` bölümünü düzenleyin:

```json
{
  "colors": {
    "primary": "#D4AF37",      // Altın
    "secondary": "#C0C0C0",    // Gümüş
    "accent": "#F5E6D3",       // Krem
    "text": "#333333",         // Yazı
    "textLight": "#666666",    // Açık yazı
    "background": "#FEFDFB",   // Arka plan
    "border": "#E8DCC8"        // Çerçeve
  }
}
```

### Görselleri Ekleme

Görselleri `assets/` klasörüne koyun ve HTML'de referans verin.

## Teknolojiler

- HTML5
- CSS3 (Flexbox, Grid, Animasyonlar)
- JavaScript (Vanilla)
- Formspree (RSVP)
- Google Maps (Harita Entegrasyonu)

## Tarayıcı Desteği

- Chrome/Edge (tüm versiyonlar)
- Firefox (tüm versiyonlar)
- Safari 11+
- Mobile Safari 11+

## Lisans

Açık kaynak - Özgürce kullanabilirsiniz.

## İletişim

Sorularınız için iletişime geçin.

---

**Hazırlandığı tarih**: Nisan 2026
**Geliştirici**: GTS Geliştirmeler

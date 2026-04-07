# Düğün Davetiye Sitesi - Proje Planı

## Proje Yapısı

```
wedding-venue/
├── index.html                 # Ana HTML dosyası
├── styles.css                 # Stil dosyası (açık tema)
├── script.js                  # JavaScript (animasyonlar & scroll efektleri)
├── config.json                # Parametrik veriler (isimler, tarihler, renkler)
├── assets/                    # Görseller klasörü
│   └── README.md
├── .gitignore
└── README.md
```

## Teknik Özellikleri

### 1. HTML Yapısı

- **Landing Page**: Davetiye zarfı tasarımı (tıklanabilir - açılır/kapanır animasyonu)
- **Main Page**: Scroll ile bölümler arasında geçiş
  - Başlık/banner
  - Davet metni
  - Aile bilgileri (Kız tarafı / Erkek tarafı)
  - Nikah merasimi (tarih, yer, harita linki)
  - Kına gecesi (tarih, yer, harita linki)
  - Düğün töreni (tarih, yer, harita linki)
  - Geri sayım (countdown timer)
  - RSVP Formu
  - Paylaşım/QR kodu bölümü

### 2. CSS Tasarımı

- **Tema**: Açık/minimal (krem/beyaz arka planı) gözü yormasın
- **Renkler**: Altın/gümüş aksessuarlar, zarif dekorlar
- **Responsive**: Mobil, tablet, masaüstü uyumlu
- **Animasyonlar**: Smooth scroll, fade-in efektleri, hover durumları

### 3. JavaScript İşlevselliği

- **Zarif açılış/kapanış**: Davetiye zarfı animasyonu
- **Scroll animasyonları**: Bölümlerin yumuşak geçişi
- **Geri sayım**: Düğüne kalan zaman (countdown timer)
- **Harita entegrasyonu**: Her merasim için Google Maps embed + WhatsApp linki
- **RSVP Formu**: Formspree ile güvenli mail gönderimi (admin email'ine)
- **Paylaşım**: WhatsApp ve sosyal medya integrasyon
- **Responsive menü**: Mobilde hamburger menü (isteğe bağlı)

### 4. Parametrik Sistem (JSON)

`config.json` dosyasında tüm dinamik veriler:

```json
{
  "couple": {
    "bride": "Sümeyye",
    "groom": "Mehmet Bilal"
  },
  "year": 2026,
  "invitationMessage": "Bu mutlu günümüzde siz sevdiklerimizi de aramızda görmekten büyük mutluluk duyarız.",
  "ceremonies": {
    "marriage": {
      "name": "Nikah Merasimi",
      "date": "21 Haziran 2026",
      "time": "13:45",
      "venue": "Etimesgut Belediyesi Ata Kongre Kültür Merkezi",
      "address": "Etimesgut / Ankara",
      "coordinates": { "lat": 39.9XXX, "lng": 32.7XXX },
      "maps_url": "https://maps.google.com/...",
      "whatsapp_url": "https://wa.me/..."
    },
    "henna": {
      "name": "Kına Gecesi",
      "date": "9 Temmuz 2026",
      "time": "19:00",
      "venue": "Hotel Adanava",
      "address": "Girne Blv. No:254, Yüreğir / Adana",
      "coordinates": { "lat": 37.0XXX, "lng": 35.3XXX },
      "maps_url": "https://maps.google.com/...",
      "whatsapp_url": "https://wa.me/..."
    },
    "wedding": {
      "name": "Düğün Töreni",
      "date": "11 Temmuz 2026",
      "time": "18:00",
      "venue": "Tuana Kır Düğün Salonu",
      "address": "Batı Raman Blv. 72070, Batman",
      "coordinates": { "lat": 37.8XXX, "lng": 41.5XXX },
      "maps_url": "https://maps.google.com/...",
      "whatsapp_url": "https://wa.me/..."
    }
  },
  "families": {
    "bride": {
      "side": "Gelin Ailesi",
      "members": [
        { "name": "Perihan Ölmezoğlu", "role": "Anne" },
        { "name": "Ziya Ölmezoğlu", "role": "Baba" }
      ],
      "contact": {
        "phone": "+90...",
        "email": "..."
      }
    },
    "groom": {
      "side": "Damat Ailesi",
      "members": [
        { "name": "Sezer Kaplan", "role": "Anne" },
        { "name": "Selim Kaplan", "role": "Baba" }
      ],
      "contact": {
        "phone": "+90...",
        "email": "..."
      }
    }
  },
  "rsvp": {
    "enabled": true,
    "adminEmail": "admin@example.com",
    "formspreeId": "YOUR_FORMSPREE_ID"
  },
  "colors": {
    "primary": "#D4AF37",
    "secondary": "#C0C0C0",
    "accent": "#F5E6D3",
    "text": "#333333",
    "textLight": "#666666"
  }
}
```

JavaScript ile JSON'dan dinamik HTML oluşturulacak. **Güvenlik**: RSVP verisi Formspree tarafından yönetilecek, admin email'ine gidecek.

## Adım Adım Kurulum

1. **Proje klasörü oluştur** ve tüm dosyaları koy
2. **Git initialize et**: `git init`
3. **GitHub'da repo oluştur** (`wedding-venue` adıyla)
4. **Remote ekle ve ilk commit yap**
5. **Netlify'ye bağla**: Netlify'de GitHub repo'nun otomatik deploy ayarı
6. **Localhost'ta görüntüle**: Basit HTTP server (`python -m http.server 8000` vb.)

## Sonraki Adımlar

- QR kod oluşturma (qrcode.js kütüphanesi)
- PDF export opsiyonel
- Sosyal medya meta tags (Open Graph)

## Tahmini Dosya Sayısı

- 4-5 temel dosya
- Config dosyası sayılmaz
- Görsel dosyaları assets/ klasörüne eklenecek

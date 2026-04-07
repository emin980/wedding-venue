# GitHub Setup Instructions

## Git Kurulumu

Windows PowerShell'de (yönetici olarak açın) aşağıdaki adımları izleyin:

### 1. Proje Klasörüne Gidin

```powershell
cd "c:\Users\EMIN.ALTINISIK\OneDrive - LC WAIKIKI MAGAZACILIK HIZMETLERI TIC.A.S\Masaüstü\GTS GELİŞTİRMELER\davetiye projesi"
```

### 2. Git Initialize Et

```powershell
git init
```

### 3. Git Config Ayarla (Lokal)

```powershell
git config user.email "senin_email@example.com"
git config user.name "Adın Soyadın"
```

### 4. Dosyaları Ekle

```powershell
git add .
```

### 5. İlk Commit Yap

```powershell
git commit -m "Initial commit: Wedding invitation website"
```

## GitHub'a Bağlan

### 1. GitHub'da Repository Oluştur

1. https://github.com/new adresine gidin
2. Repository adı: `wedding-venue`
3. Açıklamayı yazın (opsiyonel)
4. "Create repository" tıklayın

### 2. Remote Ekle ve Push Et

GitHub sayfasında gösterilen komutları kullanın (benzer şekilde):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wedding-venue.git
git push -u origin main
```

### 3. GitHub Token Kullan (Opsiyonel - Daha Güvenli)

Password yerine Personal Access Token kullanmanız önerilir:

1. GitHub Settings → Developer settings → Personal access tokens
2. "Tokens (classic)" tıklayın
3. "Generate new token" tıklayın
4. `repo` scope'u seçin
5. Token'ı kopyalayın ve güvenli bir yerde saklayın

Push sırasında password isterse, token'ı yapıştırın.

## Netlify'de Deploy Etme

### 1. Netlify'ye Giriş Yapın

https://app.netlify.com adresine gidin ve GitHub hesabınız ile giriş yapın

### 2. Yeni Site Oluşturun

1. "Add new site" → "Import an existing project"
2. GitHub'ı seçin
3. `wedding-venue` repository'sini seçin
4. Build komutları:
   - Build command: (boş bırakın)
   - Publish directory: `.` (proje kökü)
5. "Deploy site" tıklayın

### 3. Domain Ayarla (Opsiyonel)

1. Site ayarları → Domain settings
2. Netlify tarafından verilen domainleri kullanın veya custom domain ekleyin

## Localhost'ta Çalıştırma

### Python Kullanarak

```powershell
python -m http.server 8000
```

Tarayıcıda açın: `http://localhost:8000`

### Node.js http-server Kullanarak

```powershell
npm install -g http-server
http-server
```

## Güncellemeler

Proje dosyalarında değişiklik yaptıktan sonra:

```powershell
git add .
git commit -m "Description of changes"
git push
```

Netlify otomatik olarak güncellenecek!

## Config.json Özelleştirmesi

`config.json` dosyasında aşağıdakileri özelleştirebilirsiniz:

- Çift isimleri
- Tarihler ve saatler
- Mekanlar ve adresler
- Aile bilgileri
- Renkler
- Formspree ID

Değiştikten sonra sayfayı yenileyin - otomatik yüklenecek!

---

**Sorunlar yaşıyorsanız:**

1. Git kuruluyor mu? → `git --version` yazıp kontrol edin
2. GitHub'a bağlanıyor mu? → `git remote -v` ile kontrol edin
3. Localhost çalışmıyor mu? → Farklı port deneyin: `python -m http.server 3000`

// YesPDF Website - Internationalization (TR/EN)
const translations = {
  tr: {
    // Navbar
    'nav.features': 'Özellikler',
    'nav.gallery': 'Galeri',
    'nav.why': 'Neden YesPDF',
    'nav.security': 'Güvenlik',
    'nav.docs': 'Dokümanlar',
    'nav.contact': 'İletişim',
    'nav.demo': 'Demo Talep Et',

    // Hero
    'hero.badge': 'KVKK Uyumlu On-Premise Çözüm',
    'hero.title': 'Kurumsal PDF<br>Yönetim Platformu',
    'hero.subtitle': 'Belgelerinizi güvenle dönüştürün, düzenleyin ve yönetin. Tamamen on-premise, tarayıcı tabanlı, kurulum gerektirmez.',
    'hero.cta1': 'Demo Talep Et',
    'hero.cta2': 'Özellikleri Keşfet',
    'hero.stat1': 'PDF Araç',
    'hero.stat2': 'Eşzamanlı Kullanıcı',
    'hero.stat3': 'OCR Dili',
    'hero.stat4': 'On-Premise',

    // Features
    'features.title': 'Güçlü Özellikler',
    'features.subtitle': 'PDF ihtiyaçlarınız için eksiksiz bir platform',
    'features.convert.title': 'PDF Dönüştürme',
    'features.convert.desc': 'Word, Excel, HTML ve görüntü formatlarına hızlı ve doğru dönüştürme.',
    'features.editor.title': 'Gelişmiş PDF Editörü',
    'features.editor.desc': 'Metin, görsel ve açıklama düzenleme ile tam kontrol.',
    'features.ocr.title': 'OCR (Karakter Tanıma)',
    'features.ocr.desc': 'Taranmış belgeleri 6 dilde aranabilir PDF\'e dönüştürün.',
    'features.merge.title': 'PDF Birleştir & Böl',
    'features.merge.desc': 'Birden fazla PDF\'i birleştirin veya sayfalara göre bölün.',
    'features.compress.title': 'PDF Sıkıştırma',
    'features.compress.desc': 'Dosya boyutunu kalite kaybı olmadan önemli ölçüde küçültün.',
    'features.watermark.title': 'Filigran & Damga',
    'features.watermark.desc': 'Metin, görsel veya QR kod filigranı ekleyin.',
    'features.encrypt.title': 'Şifreleme & Koruma',
    'features.encrypt.desc': 'AES-256 şifreleme ve granüler izin kontrolü.',
    'features.forms.title': 'Formlar & İmza',
    'features.forms.desc': 'PDF formlarını doldurun ve dijital olarak imzalayın.',
    'features.smartedit.title': 'Akıllı Düzenleme',
    'features.smartedit.desc': 'Taranmış belgelerde bölge bazlı metin düzenleme.',
    'features.redaction.title': 'Karartma (Redaction)',
    'features.redaction.desc': 'Hassas bilgileri kalıcı ve geri dönüşsüz olarak karartın.',
    'features.admin.title': 'Yönetim Paneli',
    'features.admin.desc': 'Kullanıcı, rol, grup ve belge yönetimi tek panelden.',
    'features.translate.title': 'Belge Çeviri',
    'features.translate.desc': 'DeepL entegrasyonu ile 30+ dilde otomatik çeviri.',

    // Gallery
    'gallery.title': 'Ürün Galerisi',
    'gallery.subtitle': 'YesPDF\'in güçlü arayüzünü keşfedin',
    'gallery.filter.all': 'Tümü',
    'gallery.filter.tools': 'PDF Araçları',
    'gallery.filter.editor': 'Editör',
    'gallery.filter.admin': 'Yönetim',
    'gallery.anasayfa': 'Ana Sayfa',
    'gallery.word-donustur': 'Word\'e Dönüştür',
    'gallery.excel-donustur': 'Excel\'e Dönüştür',
    'gallery.html-donustur': 'HTML\'e Dönüştür',
    'gallery.image-donustur': 'Görüntüye Dönüştür',
    'gallery.searchable-pdf': 'Aranabilir PDF (OCR)',
    'gallery.pdf-birlestir': 'PDF Birleştir',
    'gallery.pdf-bol': 'PDF Böl',
    'gallery.pdf-sikistir': 'PDF Sıkıştır',
    'gallery.filigran': 'Filigran Ekle',
    'gallery.editor-full': 'PDF Editörü',
    'gallery.metin-duzenle': 'Metin Düzenleme',
    'gallery.duzenleme': 'Düzenleme Araçları',
    'gallery.sekiller': 'Şekiller',
    'gallery.olcum': 'Ölçüm Araçları',
    'gallery.karartma': 'Karartma',
    'gallery.doldur-imzala': 'Doldur ve İmzala',
    'gallery.formlar': 'PDF Formları',
    'gallery.pullar': 'Pullar ve Damgalar',
    'gallery.akilli-duzenleme': 'Akıllı Düzenleme',
    'gallery.kontrol-paneli': 'Kontrol Paneli',
    'gallery.kullanici-yonetimi': 'Kullanıcı Yönetimi',
    'gallery.kullanici-ekle': 'Kullanıcı Ekle',
    'gallery.ldap-ad': 'LDAP/AD Entegrasyonu',
    'gallery.is-kuyrugu': 'İş Kuyruğu Monitörü',
    'gallery.guvenlik-ayarlari': 'Güvenlik Ayarları',
    'gallery.denetim-kayitlari': 'Denetim Kayıtları',
    'gallery.kullanim-istatistikleri': 'Kullanım İstatistikleri',
    'gallery.sertifika-yonetimi': 'Sertifika Yönetimi',
    'gallery.giris-ekrani': 'Giriş Ekranı',

    // Why YesPDF
    'why.title': 'Neden YesPDF?',
    'why.subtitle': 'Kurumsal PDF çözümlerinde fark yaratan özellikler',
    'why.onpremise.title': '%100 On-Premise',
    'why.onpremise.desc': 'Verileriniz sizin sunucunuzda kalır. Buluta veri aktarımı yok. Hava boşluklu (air-gapped) ağlarda bile çalışır.',
    'why.cost.title': 'Maliyet Avantajı',
    'why.cost.desc': 'Kullanıcı başına lisans ücreti yok. Tek sunucu lisansı ile sınırsız kullanıcı. 50 kullanıcı için Adobe\'a göre %90+ tasarruf.',
    'why.browser.title': 'Tarayıcı Tabanlı',
    'why.browser.desc': 'İstemci kurulumu gerektirmez. Chrome, Firefox, Edge ile her cihazdan erişin. Windows, Mac, Linux, mobil desteği.',
    'why.compliance.title': 'KVKK & BDDK Uyumlu',
    'why.compliance.desc': 'Kapsamlı denetim kayıtları, AES-256 şifreleme, RBAC yetkilendirme. Türk düzenlemelerine tam uyum.',
    // Security
    'security.title': 'Kurumsal Güvenlik',
    'security.subtitle': 'Verileriniz en üst düzeyde korunur',
    'security.kvkk.title': 'KVKK Uyumluluk',
    'security.kvkk.desc': 'Kişisel Verilerin Korunması Kanunu gereksinimlerini karşılayan kapsamlı veri koruma.',
    'security.owasp.title': 'OWASP Top 10',
    'security.owasp.desc': 'Web uygulama güvenliği standartlarına tam uyumluluk. CSRF, XSS, SQL injection koruması.',
    'security.aes.title': 'AES-256 Şifreleme',
    'security.aes.desc': 'Dosya bazlı benzersiz salt ile şifreleme. Durağan ve aktarım halinde veri koruması.',
    'security.antivirus.title': 'Virüs Tarama',
    'security.antivirus.desc': 'ClamAV entegrasyonu ile yüklenen dosyaların otomatik güvenlik taraması.',
    'security.audit.title': 'Denetim Kayıtları',
    'security.audit.desc': 'Her işlem kayıt altında: kullanıcı, eylem, IP adresi, zaman damgası, cihaz bilgisi.',
    'security.ip.title': 'IP Kısıtlama',
    'security.ip.desc': 'Yönetim paneline IP bazlı erişim kontrolü. Beyaz liste ile güvenli yönetim.',

    // Documents
    'docs.title': 'Dokümanlar',
    'docs.subtitle': 'Kılavuzlar, teknik dokümanlar ve raporlar',
    'docs.user_guide_tr': 'Kullanıcı Kılavuzu',
    'docs.user_guide_en': 'User Guide',
    'docs.admin_guide_tr': 'Yönetici Kılavuzu',
    'docs.admin_guide_en': 'Admin Guide',
    'docs.whitepaper': 'Teknik Whitepaper',
    'docs.kvkk': 'KVKK Uyumluluk Raporu',
    'docs.sysreq_tr': 'Sistem Gereksinimleri',
    'docs.sysreq_en': 'System Requirements',
    'docs.compare_tr': 'Rakip Karşılaştırması',
    'docs.compare_en': 'Competitor Comparison',
    'docs.loadtest_tr': 'Yük Testi Raporu',
    'docs.loadtest_en': 'Load Test Report',
    'docs.release': 'Sürüm Geçmişi',
    'docs.lang.tr': 'Türkçe',
    'docs.lang.en': 'İngilizce',
    'docs.lang.both': 'TR/EN',
    'docs.download': 'İndir',

    // Contact
    'contact.title': 'Demo Talep Edin',
    'contact.subtitle': 'YesPDF\'i kurumunuzda deneyimlemek için bizimle iletişime geçin.',
    'contact.info.title': 'İletişim Bilgileri',
    'contact.info.email': 'E-posta',
    'contact.info.phone': 'Telefon',
    'contact.info.address': 'Adres',
    'contact.info.company': 'Yes Bilişim',
    'contact.form.company': 'Şirket Adı',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta Adresi',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    'contact.form.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',
    'contact.motivation1': 'Kurumunuza özel demo sunumu',
    'contact.motivation2': 'Teknik gereksinim analizi',
    'contact.motivation3': 'Ücretsiz POC (kavram kanıtı) kurulumu',

    // Footer
    'footer.desc': 'Kurumsal ihtiyaçlarınız için tasarlanmış on-premise PDF yönetim platformu.',
    'footer.links': 'Hızlı Bağlantılar',
    'footer.documents': 'Dokümanlar',
    'footer.contact': 'İletişim',
    'footer.copyright': '© 2026 Yes Bilişim. Tüm hakları saklıdır.',
    'footer.powered': 'Powered by Yes Bilişim',
  },

  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.gallery': 'Gallery',
    'nav.why': 'Why YesPDF',
    'nav.security': 'Security',
    'nav.docs': 'Documents',
    'nav.contact': 'Contact',
    'nav.demo': 'Request Demo',

    // Hero
    'hero.badge': 'KVKK Compliant On-Premise Solution',
    'hero.title': 'Enterprise PDF<br>Management Platform',
    'hero.subtitle': 'Convert, edit, and manage your documents securely. Fully on-premise, browser-based, no installation required.',
    'hero.cta1': 'Request Demo',
    'hero.cta2': 'Explore Features',
    'hero.stat1': 'PDF Tools',
    'hero.stat2': 'Concurrent Users',
    'hero.stat3': 'OCR Languages',
    'hero.stat4': 'On-Premise',

    // Features
    'features.title': 'Powerful Features',
    'features.subtitle': 'A complete platform for all your PDF needs',
    'features.convert.title': 'PDF Conversion',
    'features.convert.desc': 'Fast and accurate conversion to Word, Excel, HTML, and image formats.',
    'features.editor.title': 'Advanced PDF Editor',
    'features.editor.desc': 'Full control with text, image, and annotation editing.',
    'features.ocr.title': 'OCR (Character Recognition)',
    'features.ocr.desc': 'Convert scanned documents to searchable PDFs in 6 languages.',
    'features.merge.title': 'Merge & Split PDF',
    'features.merge.desc': 'Combine multiple PDFs or split by page ranges.',
    'features.compress.title': 'PDF Compression',
    'features.compress.desc': 'Significantly reduce file size without quality loss.',
    'features.watermark.title': 'Watermark & Stamp',
    'features.watermark.desc': 'Add text, image, or QR code watermarks.',
    'features.encrypt.title': 'Encryption & Protection',
    'features.encrypt.desc': 'AES-256 encryption with granular permission control.',
    'features.forms.title': 'Forms & Signature',
    'features.forms.desc': 'Fill PDF forms and sign them digitally.',
    'features.smartedit.title': 'Smart Edit',
    'features.smartedit.desc': 'Region-based text editing in scanned documents.',
    'features.redaction.title': 'Redaction',
    'features.redaction.desc': 'Permanently and irreversibly redact sensitive information.',
    'features.admin.title': 'Admin Panel',
    'features.admin.desc': 'User, role, group, and document management from a single panel.',
    'features.translate.title': 'Document Translation',
    'features.translate.desc': 'Automatic translation in 30+ languages with DeepL integration.',

    // Gallery
    'gallery.title': 'Product Gallery',
    'gallery.subtitle': 'Explore YesPDF\'s powerful interface',
    'gallery.filter.all': 'All',
    'gallery.filter.tools': 'PDF Tools',
    'gallery.filter.editor': 'Editor',
    'gallery.filter.admin': 'Admin',
    'gallery.anasayfa': 'Home Page',
    'gallery.word-donustur': 'Convert to Word',
    'gallery.excel-donustur': 'Convert to Excel',
    'gallery.html-donustur': 'Convert to HTML',
    'gallery.image-donustur': 'Convert to Image',
    'gallery.searchable-pdf': 'Searchable PDF (OCR)',
    'gallery.pdf-birlestir': 'Merge PDFs',
    'gallery.pdf-bol': 'Split PDF',
    'gallery.pdf-sikistir': 'Compress PDF',
    'gallery.filigran': 'Add Watermark',
    'gallery.editor-full': 'PDF Editor',
    'gallery.metin-duzenle': 'Text Editing',
    'gallery.duzenleme': 'Editing Tools',
    'gallery.sekiller': 'Shapes',
    'gallery.olcum': 'Measurement Tools',
    'gallery.karartma': 'Redaction',
    'gallery.doldur-imzala': 'Fill & Sign',
    'gallery.formlar': 'PDF Forms',
    'gallery.pullar': 'Stamps',
    'gallery.akilli-duzenleme': 'Smart Edit',
    'gallery.kontrol-paneli': 'Dashboard',
    'gallery.kullanici-yonetimi': 'User Management',
    'gallery.kullanici-ekle': 'Add User',
    'gallery.ldap-ad': 'LDAP/AD Integration',
    'gallery.is-kuyrugu': 'Job Queue Monitor',
    'gallery.guvenlik-ayarlari': 'Security Settings',
    'gallery.denetim-kayitlari': 'Audit Logs',
    'gallery.kullanim-istatistikleri': 'Usage Statistics',
    'gallery.sertifika-yonetimi': 'Certificate Management',
    'gallery.giris-ekrani': 'Login Screen',

    // Why YesPDF
    'why.title': 'Why YesPDF?',
    'why.subtitle': 'Features that make the difference in enterprise PDF solutions',
    'why.onpremise.title': '100% On-Premise',
    'why.onpremise.desc': 'Your data stays on your server. No cloud data transfer. Works even in air-gapped networks.',
    'why.cost.title': 'Cost Advantage',
    'why.cost.desc': 'No per-user licensing fees. Unlimited users with a single server license. 90%+ savings vs Adobe for 50 users.',
    'why.browser.title': 'Browser-Based',
    'why.browser.desc': 'No client installation required. Access from any device with Chrome, Firefox, or Edge. Windows, Mac, Linux, mobile support.',
    'why.compliance.title': 'KVKK & BDDK Compliant',
    'why.compliance.desc': 'Comprehensive audit logs, AES-256 encryption, RBAC authorization. Full compliance with Turkish regulations.',

    // Security
    'security.title': 'Enterprise Security',
    'security.subtitle': 'Your data is protected at the highest level',
    'security.kvkk.title': 'KVKK Compliance',
    'security.kvkk.desc': 'Comprehensive data protection meeting Personal Data Protection Law requirements.',
    'security.owasp.title': 'OWASP Top 10',
    'security.owasp.desc': 'Full compliance with web application security standards. CSRF, XSS, SQL injection protection.',
    'security.aes.title': 'AES-256 Encryption',
    'security.aes.desc': 'Per-file encryption with unique salt. Data protection at rest and in transit.',
    'security.antivirus.title': 'Virus Scanning',
    'security.antivirus.desc': 'Automatic security scanning of uploaded files with ClamAV integration.',
    'security.audit.title': 'Audit Logs',
    'security.audit.desc': 'Every action logged: user, action, IP address, timestamp, device information.',
    'security.ip.title': 'IP Restriction',
    'security.ip.desc': 'IP-based access control for admin panel. Secure management with whitelisting.',

    // Documents
    'docs.title': 'Documents',
    'docs.subtitle': 'Guides, technical documents, and reports',
    'docs.user_guide_tr': 'User Guide (Turkish)',
    'docs.user_guide_en': 'User Guide',
    'docs.admin_guide_tr': 'Admin Guide (Turkish)',
    'docs.admin_guide_en': 'Admin Guide',
    'docs.whitepaper': 'Technical Whitepaper',
    'docs.kvkk': 'KVKK Compliance Report',
    'docs.sysreq_tr': 'System Requirements (Turkish)',
    'docs.sysreq_en': 'System Requirements',
    'docs.compare_tr': 'Competitor Comparison (Turkish)',
    'docs.compare_en': 'Competitor Comparison',
    'docs.loadtest_tr': 'Load Test Report (Turkish)',
    'docs.loadtest_en': 'Load Test Report',
    'docs.release': 'Release History',
    'docs.lang.tr': 'Turkish',
    'docs.lang.en': 'English',
    'docs.lang.both': 'TR/EN',
    'docs.download': 'Download',

    // Contact
    'contact.title': 'Request a Demo',
    'contact.subtitle': 'Contact us to experience YesPDF in your organization.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.company': 'Yes Bilişim',
    'contact.form.company': 'Company Name',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent successfully. We will get back to you shortly.',
    'contact.form.error': 'An error occurred. Please try again.',
    'contact.motivation1': 'Custom demo presentation for your organization',
    'contact.motivation2': 'Technical requirements analysis',
    'contact.motivation3': 'Free POC (proof of concept) setup',

    // Footer
    'footer.desc': 'On-premise PDF management platform designed for enterprise needs.',
    'footer.links': 'Quick Links',
    'footer.documents': 'Documents',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 Yes Bilişim. All rights reserved.',
    'footer.powered': 'Powered by Yes Bilişim',
  }
};

// Current language
let currentLang = localStorage.getItem('yespdf-lang') || 'tr';

// Apply translations
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('yespdf-lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];
  if (!dict) return;

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        // Don't change input values
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active-lang', btn.dataset.lang === lang);
  });
}

// Toggle between TR and EN
function toggleLanguage() {
  const newLang = currentLang === 'tr' ? 'en' : 'tr';
  applyLanguage(newLang);
  updateLangLabels();
}

// Update toggle button labels
function updateLangLabels() {
  const label = currentLang === 'tr' ? 'EN' : 'TR';
  const el = document.getElementById('lang-label');
  if (el) el.textContent = label;
  document.querySelectorAll('.lang-label-mobile').forEach(el => {
    el.textContent = label;
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  updateLangLabels();
});

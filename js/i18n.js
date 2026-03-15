// YesPDF Website - Internationalization (TR/EN/DE)
const translations = {
  tr: {
    // Navbar
    'nav.features': 'Özellikler',
    'nav.gallery': 'Galeri',
    'nav.why': 'Neden YesPDF',
    'nav.security': 'Güvenlik',
    'nav.verticals': 'Sektörel',
    'nav.docs': 'Dokümanlar',
    'nav.contact': 'İletişim',
    'nav.demo': 'Demo Talep Et',
    'nav.cta': 'Demo Talep Et',

    // Hero
    'hero.badge': 'KVKK Uyumlu · On-Premise',
    'hero.title.line1': 'Kurumsal PDF',
    'hero.title.line2': 'Yönetim Platformu',
    'hero.subtitle': 'Tüm PDF işlemlerinizi tek bir platformda yönetin. Dönüştürme, düzenleme, OCR, şifreleme ve daha fazlası — tamamen kendi sunucunuzda.',
    'hero.cta_primary': 'Demo Talep Et',
    'hero.cta_secondary': 'Özellikleri Keşfet',
    'hero.stat1_number': '20+',
    'hero.stat1_label': 'PDF Araç',
    'hero.stat2_number': '500+',
    'hero.stat2_label': 'Eşzamanlı Kullanıcı',
    'hero.stat3_number': '6',
    'hero.stat3_label': 'OCR Dili',
    'hero.stat4_number': '%100',
    'hero.stat4_label': 'On-Premise',

    // Features
    'features.tag': 'ÖZELLİKLER',
    'features.title': 'Güçlü Özellikler',
    'features.subtitle': 'PDF ihtiyaçlarınız için eksiksiz bir platform',
    'features.convert.title': 'PDF Dönüştürme',
    'features.convert.desc': 'Word, Excel, HTML ve görüntü formatlarına hızlı ve doğru dönüştürme.',
    'features.editor.title': 'Gelişmiş PDF Editörü',
    'features.editor.desc': 'Metin, görsel ve açıklama düzenleme ile tam kontrol.',
    'features.ocr.title': 'OCR (Karakter Tanıma)',
    'features.ocr.desc': 'Taranmış belgeleri 6 dilde aranabilir PDF\'e dönüştürün.',
    'features.merge_split.title': 'PDF Birleştir & Böl',
    'features.merge_split.desc': 'Birden fazla PDF\'i birleştirin veya sayfalara göre bölün.',
    'features.compress.title': 'PDF Sıkıştırma',
    'features.compress.desc': 'Dosya boyutunu kalite kaybı olmadan önemli ölçüde küçültün.',
    'features.watermark.title': 'Filigran & Damga',
    'features.watermark.desc': 'Metin, görsel veya QR kod filigranı ekleyin.',
    'features.encrypt.title': 'Şifreleme & Koruma',
    'features.encrypt.desc': 'AES-256 şifreleme ve granüler izin kontrolü.',
    'features.forms.title': 'Formlar & İmza',
    'features.forms.desc': 'PDF formlarını doldurun ve dijital olarak imzalayın.',
    'features.smart_edit.title': 'Akıllı Düzenleme',
    'features.smart_edit.desc': 'Taranmış belgelerde bölge bazlı metin düzenleme.',
    'features.redaction.title': 'Karartma (Redaction)',
    'features.redaction.desc': 'Hassas bilgileri kalıcı ve geri dönüşsüz olarak karartın.',
    'features.admin.title': 'Yönetim Paneli',
    'features.admin.desc': 'Kullanıcı, rol, grup ve belge yönetimi tek panelden.',
    'features.translate.title': 'Belge Çeviri',
    'features.translate.desc': 'DeepL entegrasyonu ile 30+ dilde otomatik çeviri.',

    // Gallery
    'gallery.tag': 'GALERİ',
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
    'why.subtitle': 'Kurumsal PDF yönetiminde fark yaratan avantajlar',
    'why.onprem.title': '%100 On-Premise',
    'why.onprem.desc': 'Verileriniz sizin sunucunuzda kalır. Buluta veri aktarımı yok. Hava boşluklu (air-gapped) ağlarda bile çalışır.',
    'why.cost.title': 'Maliyet Avantajı',
    'why.cost.desc': 'Kullanıcı başına uygun fiyatlı yıllık lisanslama. Adobe\'a göre %90+ tasarruf sağlayın. Esnek planlarla ihtiyacınız kadar ödeyin.',
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
    'security.virus.title': 'Virüs Tarama',
    'security.virus.desc': 'ClamAV entegrasyonu ile yüklenen dosyaların otomatik güvenlik taraması.',
    'security.audit.title': 'Denetim Kayıtları',
    'security.audit.desc': 'Her işlem kayıt altında: kullanıcı, eylem, IP adresi, zaman damgası, cihaz bilgisi.',
    'security.ip.title': 'IP Kısıtlama',
    'security.ip.desc': 'Yönetim paneline IP bazlı erişim kontrolü. Beyaz liste ile güvenli yönetim.',

    // Verticals
    'verticals.tag': 'Sektörel Çözümler',
    'verticals.title': 'Her Sektöre Özel PDF Çözümleri',
    'verticals.subtitle': 'YesPDF, farklı sektörlerin benzersiz belge yönetimi ihtiyaçlarına özel çözümler sunar.',
    'verticals.banking.title': 'Bankacılık & Finans',
    'verticals.banking.desc': 'BDDK uyumlu belge yönetimi, güvenli kredi dosyaları, dijital imza ve denetim kayıtları.',
    'verticals.dicom.title': 'Sağlık & DICOM',
    'verticals.dicom.desc': 'Tıbbi görüntüleme, DICOM dönüşümü, hasta dosyaları ve sağlık sektörü uyumluluğu.',
    'verticals.government.title': 'Kamu & Devlet',
    'verticals.government.desc': 'e-Devlet uyumlu belge yönetimi, resmi yazışma, arşivleme ve dijital dönüşüm.',
    'verticals.military.title': 'Savunma Sanayii',
    'verticals.military.desc': 'NATO uyumlu belge yönetimi, gizlilik dereceli dokümanlar, hava boşluklu ağ desteği ve askeri düzeyde güvenlik.',
    'verticals.insurance.title': 'Sigortacılık',
    'verticals.insurance.desc': 'Poliçe yönetimi, hasar dosyaları, aktüerya raporları ve uyumluluk belgeleri.',
    'verticals.legal.title': 'Hukuk',
    'verticals.legal.desc': 'Sözleşme yönetimi, dava dosyaları, karartma (redaction) ve dijital imza çözümleri.',
    'verticals.cad.title': 'CAD & Mühendislik',
    'verticals.cad.desc': 'Teknik çizim dönüşümü, büyük format baskı, ölçüm araçları ve proje arşivleme.',
    'verticals.education.title': 'Eğitim',
    'verticals.education.desc': 'Transkript, diploma, sınav evrakları, öğrenci dosyaları ve akademik belge yönetimi.',
    'verticals.sts.title': 'Service to Software',
    'verticals.sts.desc': 'SaaS değil, Service to Software. Verileriniz sizde kalır, biz size hizmet sunarız.',
    'verticals.digsig.title': 'Dijital İmza',
    'verticals.digsig.desc': 'Kurumsal dijital imza, e-imza entegrasyonu, sertifika yönetimi ve uyumluluk çözümleri.',
    'verticals.audit.title': 'Denetim & Danışmanlık',
    'verticals.audit.desc': 'Denetim raporları, finansal tablolar, uyumluluk belgeleri ve ABBYY FineReader karşılaştırması.',
    'verticals.uyap.title': 'UYAP UDF Belge Yönetimi',
    'verticals.uyap.desc': 'UYAP UDF dosyalarını PDF\'e dönüştürme, dijital imza doğrulama ve çift yönlü format desteği.',

    // Documents
    'docs.title': 'Dokümanlar',
    'docs.subtitle': 'Teknik dokümantasyon, kullanıcı kılavuzları ve raporlar',
    'docs.brochure_tr': 'Ürün Broşürü',
    'docs.brochure_en': 'Product Brochure',
    'docs.licensing_tr': 'Lisanslama Rehberi',
    'docs.licensing_en': 'Licensing Guide',
    'docs.user_guide_tr': 'Kullanıcı Kılavuzu',
    'docs.whitepaper_tr': 'Teknik Whitepaper',
    'docs.kvkk_tr': 'KVKK Uyumluluk Raporu',
    'docs.sysreq_tr': 'Sistem Gereksinimleri',
    'docs.sysreq_en': 'System Requirements',
    'docs.competitor_tr': 'Rakip Karşılaştırması',
    'docs.competitor_en': 'Competitor Comparison',
    'docs.loadtest_tr': 'Yük Testi Raporu',
    'docs.loadtest_en': 'Load Test Report',
    'docs.gdpr_en': 'GDPR Uyumluluk Raporu',
    'docs.ferpa_tr': 'FERPA Uyumluluk Raporu',
    'docs.ferpa_en': 'FERPA Uyumluluk Raporu',
    'docs.ferpa_de': 'FERPA Uyumluluk Raporu (Almanca)',
    'docs.hipaa_tr': 'HIPAA Uyumluluk Raporu',
    'docs.hipaa_en': 'HIPAA Uyumluluk Raporu',
    'docs.hipaa_de': 'HIPAA Uyumluluk Raporu (Almanca)',
    'docs.soc2_tr': 'SOC 2 Uyumluluk Raporu',
    'docs.soc2_en': 'SOC 2 Uyumluluk Raporu',
    'docs.soc2_de': 'SOC 2 Uyumluluk Raporu (Almanca)',
    'docs.iso27001_tr': 'ISO 27001 Uyumluluk Raporu',
    'docs.iso27001_en': 'ISO 27001 Uyumluluk Raporu',
    'docs.iso27001_de': 'ISO 27001 Uyumluluk Raporu (Almanca)',
    'docs.sts_tr': 'Service to Software',
    'docs.sts_en': 'Service to Software',
    'docs.tsk_whitepaper_tr': 'Savunma Sanayii Whitepaper',
    'docs.nato_stanag_en': 'NATO STANAG Uyumluluk',
    'docs.loadbalancer_tr': 'Yük Dengeleme & Yüksek Erişilebilirlik',
    'docs.loadbalancer_en': 'Load Balancing & High Availability',
    'docs.loadbalancer_de': 'Yük Dengeleme (Almanca)',
    'docs.release_history': 'Sürüm Geçmişi',

    // Articles
    'nav.articles': 'Makaleler',
    'articles.tag': 'MAKALELER',
    'articles.title': 'Bilgi Merkezi',
    'articles.subtitle': 'Kurumsal belge güvenliği, PDF yönetimi ve uyumluluk konularında uzman içerikleri',
    'articles.docsecurity.title': 'Belge Güvenliği',
    'articles.docsecurity.desc': 'Kurumsal belge güvenliği stratejileri, tehdit vektörleri ve koruma yöntemleri.',
    'articles.redaction.title': 'Karartma Tehditleri',
    'articles.redaction.desc': 'Yanlış karartma uygulamaları, veri sızıntısı riskleri ve doğru yöntemler.',
    'articles.licensing.title': 'Lisanslama Modelleri',
    'articles.licensing.desc': 'PDF yazılım lisanslama modelleri, gizli maliyetler ve doğru seçim kriterleri.',
    'articles.central.title': 'Merkezi PDF Yönetimi',
    'articles.central.desc': 'Merkezi yönetilebilir PDF ortamları, kurumsal kontrol ve verimlilik avantajları.',
    'articles.personal.title': 'Kişisel PDF Araçlarının Tehlikesi',
    'articles.personal.desc': 'Kişisel PDF araçlarının kurumsal güvenliğe etkileri ve önleme stratejileri.',

    // Contact
    'contact.title': 'Demo Talep Edin',
    'contact.subtitle': 'YesPDF\'i kurumunuzda deneyimlemek için bizimle iletişime geçin.',
    'contact.benefit1': 'Kurumunuza özel demo sunumu',
    'contact.benefit2': 'Teknik gereksinim analizi',
    'contact.benefit3': 'Ücretsiz POC (kavram kanıtı) kurulumu',
    'contact.phone': '+90 212 347 47 16',
    'contact.demo.title': 'Online Demo Ortamı',
    'contact.demo.desc': 'YesPDF\'i hemen tarayıcınızdan deneyin. Kurulum gerektirmez.',
    'contact.demo.button': 'Demo\'yu Deneyin',
    'contact.form.company': 'Kurum Adı',
    'contact.form.name': 'Ad Soyad <span class="text-red-500">*</span>',
    'contact.form.email': 'E-posta <span class="text-red-500">*</span>',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Mesaj',
    'contact.form.company_ph': 'Kurum adınız',
    'contact.form.name_ph': 'Adınız ve soyadınız',
    'contact.form.email_ph': 'ornek@kurum.com.tr',
    'contact.form.phone_ph': '+90 (5XX) XXX XX XX',
    'contact.form.message_ph': 'Projeniz hakkında bilgi verin...',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    'contact.form.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',

    // Footer
    'footer.brand.desc': 'Kurumsal PDF yönetim platformu. Tüm PDF işlemleriniz için güvenli, hızlı ve on-premise çözüm.',
    'footer.links.title': 'Hızlı Bağlantılar',
    'footer.links.features': 'Özellikler',
    'footer.links.gallery': 'Galeri',
    'footer.links.why': 'Neden YesPDF',
    'footer.links.security': 'Güvenlik',
    'footer.docs.title': 'Dokümanlar',
    'footer.docs.all': 'Tüm Dokümanlar',
    'footer.docs.user_guide': 'Kullanıcı Kılavuzu',
    'footer.docs.whitepaper': 'Teknik Whitepaper',
    'footer.contact.title': 'İletişim',
    'footer.contact.phone': '+90 212 347 47 16',
    'footer.contact.company': 'YesPDF',
    'footer.copyright': '© 2026 YesPDF. Tüm hakları saklıdır.',

    // KVKK Banner
    'kvkk.text': 'Bu web sitesi, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kişisel verileriniz gizlilik politikamıza uygun olarak işlenmektedir. Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş sayılırsınız.',
    'kvkk.accept': 'Kabul Et',
    'kvkk.reject': 'Reddet',
  },

  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.gallery': 'Gallery',
    'nav.why': 'Why YesPDF',
    'nav.security': 'Security',
    'nav.verticals': 'Industries',
    'nav.docs': 'Documents',
    'nav.contact': 'Contact',
    'nav.demo': 'Request Demo',
    'nav.cta': 'Request Demo',

    // Hero
    'hero.badge': 'KVKK Compliant · On-Premise',
    'hero.title.line1': 'Enterprise PDF',
    'hero.title.line2': 'Management Platform',
    'hero.subtitle': 'Manage all your PDF operations in one platform. Conversion, editing, OCR, encryption and more — fully on your own server.',
    'hero.cta_primary': 'Request Demo',
    'hero.cta_secondary': 'Explore Features',
    'hero.stat1_number': '20+',
    'hero.stat1_label': 'PDF Tools',
    'hero.stat2_number': '500+',
    'hero.stat2_label': 'Concurrent Users',
    'hero.stat3_number': '6',
    'hero.stat3_label': 'OCR Languages',
    'hero.stat4_number': '100%',
    'hero.stat4_label': 'On-Premise',

    // Features
    'features.tag': 'FEATURES',
    'features.title': 'Powerful Features',
    'features.subtitle': 'A complete platform for all your PDF needs',
    'features.convert.title': 'PDF Conversion',
    'features.convert.desc': 'Fast and accurate conversion to Word, Excel, HTML, and image formats.',
    'features.editor.title': 'Advanced PDF Editor',
    'features.editor.desc': 'Full control with text, image, and annotation editing.',
    'features.ocr.title': 'OCR (Character Recognition)',
    'features.ocr.desc': 'Convert scanned documents to searchable PDFs in 6 languages.',
    'features.merge_split.title': 'Merge & Split PDF',
    'features.merge_split.desc': 'Combine multiple PDFs or split by page ranges.',
    'features.compress.title': 'PDF Compression',
    'features.compress.desc': 'Significantly reduce file size without quality loss.',
    'features.watermark.title': 'Watermark & Stamp',
    'features.watermark.desc': 'Add text, image, or QR code watermarks.',
    'features.encrypt.title': 'Encryption & Protection',
    'features.encrypt.desc': 'AES-256 encryption with granular permission control.',
    'features.forms.title': 'Forms & Signature',
    'features.forms.desc': 'Fill PDF forms and sign them digitally.',
    'features.smart_edit.title': 'Smart Edit',
    'features.smart_edit.desc': 'Region-based text editing in scanned documents.',
    'features.redaction.title': 'Redaction',
    'features.redaction.desc': 'Permanently and irreversibly redact sensitive information.',
    'features.admin.title': 'Admin Panel',
    'features.admin.desc': 'User, role, group, and document management from a single panel.',
    'features.translate.title': 'Document Translation',
    'features.translate.desc': 'Automatic translation in 30+ languages with DeepL integration.',

    // Gallery
    'gallery.tag': 'GALLERY',
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
    'why.onprem.title': '100% On-Premise',
    'why.onprem.desc': 'Your data stays on your server. No cloud data transfer. Works even in air-gapped networks.',
    'why.cost.title': 'Cost Advantage',
    'why.cost.desc': 'Affordable per-user annual licensing. 90%+ savings compared to Adobe. Flexible plans — pay only for what you need.',
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
    'security.virus.title': 'Virus Scanning',
    'security.virus.desc': 'Automatic security scanning of uploaded files with ClamAV integration.',
    'security.audit.title': 'Audit Logs',
    'security.audit.desc': 'Every action logged: user, action, IP address, timestamp, device information.',
    'security.ip.title': 'IP Restriction',
    'security.ip.desc': 'IP-based access control for admin panel. Secure management with whitelisting.',

    // Verticals
    'verticals.tag': 'Industry Solutions',
    'verticals.title': 'PDF Solutions for Every Industry',
    'verticals.subtitle': 'YesPDF provides tailored solutions for the unique document management needs of different industries.',
    'verticals.banking.title': 'Banking & Finance',
    'verticals.banking.desc': 'Regulatory-compliant document management, secure loan files, digital signatures and audit trails.',
    'verticals.dicom.title': 'Healthcare & DICOM',
    'verticals.dicom.desc': 'Medical imaging, DICOM conversion, patient records and healthcare compliance.',
    'verticals.government.title': 'Government & Public Sector',
    'verticals.government.desc': 'e-Government compliant document management, official correspondence, archiving and digital transformation.',
    'verticals.military.title': 'Military & Defence',
    'verticals.military.desc': 'NATO-compliant document management, classified documents, air-gapped network support and military-grade security.',
    'verticals.insurance.title': 'Insurance',
    'verticals.insurance.desc': 'Policy management, claims files, actuarial reports and compliance documentation.',
    'verticals.legal.title': 'Legal',
    'verticals.legal.desc': 'Contract management, case files, redaction and digital signature solutions.',
    'verticals.cad.title': 'CAD & Engineering',
    'verticals.cad.desc': 'Technical drawing conversion, large format printing, measurement tools and project archiving.',
    'verticals.education.title': 'Education',
    'verticals.education.desc': 'Transcripts, diplomas, exam papers, student files and academic document management.',
    'verticals.sts.title': 'Service to Software',
    'verticals.sts.desc': 'Not SaaS, Service to Software. Your data stays with you, we deliver the service.',
    'verticals.digsig.title': 'Digital Signature',
    'verticals.digsig.desc': 'Enterprise digital signature, e-signature integration, certificate management and compliance solutions.',
    'verticals.audit.title': 'Audit & Advisory',
    'verticals.audit.desc': 'Audit reports, financial statements, compliance documents and ABBYY FineReader comparison.',
    'verticals.uyap.title': 'UYAP UDF Document Management',
    'verticals.uyap.desc': 'Convert UYAP UDF files to PDF, verify digital signatures and bidirectional format support.',

    // Documents
    'docs.title': 'Documents',
    'docs.subtitle': 'Technical documentation, user guides and reports',
    'docs.brochure_tr': 'Product Brochure (Turkish)',
    'docs.brochure_en': 'Product Brochure',
    'docs.licensing_tr': 'Licensing Guide (Turkish)',
    'docs.licensing_en': 'Licensing Guide',
    'docs.user_guide_tr': 'User Guide (Turkish)',
    'docs.whitepaper_tr': 'Technical Whitepaper',
    'docs.kvkk_tr': 'KVKK Compliance Report',
    'docs.sysreq_tr': 'System Requirements (Turkish)',
    'docs.sysreq_en': 'System Requirements',
    'docs.competitor_tr': 'Competitor Comparison (Turkish)',
    'docs.competitor_en': 'Competitor Comparison',
    'docs.loadtest_tr': 'Load Test Report (Turkish)',
    'docs.loadtest_en': 'Load Test Report',
    'docs.gdpr_en': 'GDPR Compliance Report',
    'docs.ferpa_tr': 'FERPA Compliance Report (Turkish)',
    'docs.ferpa_en': 'FERPA Compliance Report',
    'docs.ferpa_de': 'FERPA Compliance Report (German)',
    'docs.hipaa_tr': 'HIPAA Compliance Report (Turkish)',
    'docs.hipaa_en': 'HIPAA Compliance Report',
    'docs.hipaa_de': 'HIPAA Compliance Report (German)',
    'docs.soc2_tr': 'SOC 2 Compliance Report (Turkish)',
    'docs.soc2_en': 'SOC 2 Compliance Report',
    'docs.soc2_de': 'SOC 2 Compliance Report (German)',
    'docs.iso27001_tr': 'ISO 27001 Compliance Report (Turkish)',
    'docs.iso27001_en': 'ISO 27001 Compliance Report',
    'docs.iso27001_de': 'ISO 27001 Compliance Report (German)',
    'docs.sts_tr': 'Service to Software (Turkish)',
    'docs.sts_en': 'Service to Software',
    'docs.tsk_whitepaper_tr': 'Defence Industry Whitepaper (Turkish)',
    'docs.nato_stanag_en': 'NATO STANAG Compliance',
    'docs.loadbalancer_tr': 'Load Balancing & High Availability (Turkish)',
    'docs.loadbalancer_en': 'Load Balancing & High Availability',
    'docs.loadbalancer_de': 'Load Balancing & High Availability (German)',
    'docs.release_history': 'Release History',

    // Articles
    'nav.articles': 'Articles',
    'articles.tag': 'ARTICLES',
    'articles.title': 'Knowledge Center',
    'articles.subtitle': 'Expert insights on enterprise document security, PDF management and compliance',
    'articles.docsecurity.title': 'Document Security',
    'articles.docsecurity.desc': 'Enterprise document security strategies, threat vectors and protection methods.',
    'articles.redaction.title': 'Redaction Threats',
    'articles.redaction.desc': 'Failed redaction practices, data leak risks and proper techniques.',
    'articles.licensing.title': 'Licensing Models',
    'articles.licensing.desc': 'PDF software licensing models, hidden costs and selection criteria.',
    'articles.central.title': 'Central PDF Management',
    'articles.central.desc': 'Centrally managed PDF environments, enterprise control and efficiency advantages.',
    'articles.personal.title': 'Personal PDF Tools Danger',
    'articles.personal.desc': 'Impact of personal PDF tools on enterprise security and prevention strategies.',

    // Contact
    'contact.title': 'Request a Demo',
    'contact.subtitle': 'Contact us to experience YesPDF in your organization.',
    'contact.benefit1': 'Custom demo for your organization',
    'contact.benefit2': 'Technical requirements analysis',
    'contact.benefit3': 'Free POC (proof of concept) setup',
    'contact.phone': '+90 212 347 47 16',
    'contact.demo.title': 'Online Demo Environment',
    'contact.demo.desc': 'Try YesPDF right from your browser. No installation required.',
    'contact.demo.button': 'Try the Demo',
    'contact.form.company': 'Company Name',
    'contact.form.name': 'Full Name <span class="text-red-500">*</span>',
    'contact.form.email': 'Email <span class="text-red-500">*</span>',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.company_ph': 'Your company name',
    'contact.form.name_ph': 'Your full name',
    'contact.form.email_ph': 'name@company.com',
    'contact.form.phone_ph': '+90 (5XX) XXX XX XX',
    'contact.form.message_ph': 'Tell us about your project...',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent successfully. We will get back to you shortly.',
    'contact.form.error': 'An error occurred. Please try again.',

    // Footer
    'footer.brand.desc': 'On-premise PDF management platform. Secure, fast and self-hosted solution for all your PDF operations.',
    'footer.links.title': 'Quick Links',
    'footer.links.features': 'Features',
    'footer.links.gallery': 'Gallery',
    'footer.links.why': 'Why YesPDF',
    'footer.links.security': 'Security',
    'footer.docs.title': 'Documents',
    'footer.docs.all': 'All Documents',
    'footer.docs.user_guide': 'User Guide',
    'footer.docs.whitepaper': 'Technical Whitepaper',
    'footer.contact.title': 'Contact',
    'footer.contact.phone': '+90 212 347 47 16',
    'footer.contact.company': 'YesPDF',
    'footer.copyright': '© 2026 YesPDF. All rights reserved.',

    // KVKK Banner
    'kvkk.text': 'This website uses cookies to improve user experience. In accordance with the Personal Data Protection Law (KVKK No. 6698), your personal data is processed in compliance with our privacy policy. By continuing to use the site, you accept the use of cookies.',
    'kvkk.accept': 'Accept',
    'kvkk.reject': 'Decline',
  },

  de: {
    // Navbar
    'nav.features': 'Funktionen',
    'nav.gallery': 'Galerie',
    'nav.why': 'Warum YesPDF',
    'nav.security': 'Sicherheit',
    'nav.verticals': 'Branchen',
    'nav.docs': 'Dokumente',
    'nav.contact': 'Kontakt',
    'nav.demo': 'Demo anfordern',
    'nav.cta': 'Demo anfordern',

    // Hero
    'hero.badge': 'KVKK-konform · On-Premise',
    'hero.title.line1': 'Enterprise-PDF-',
    'hero.title.line2': 'Management-Plattform',
    'hero.subtitle': 'Verwalten Sie alle Ihre PDF-Vorg\u00e4nge auf einer Plattform. Konvertierung, Bearbeitung, OCR, Verschl\u00fcsselung und mehr \u2014 vollst\u00e4ndig auf Ihrem eigenen Server.',
    'hero.cta_primary': 'Demo anfordern',
    'hero.cta_secondary': 'Funktionen entdecken',
    'hero.stat1_number': '20+',
    'hero.stat1_label': 'PDF-Werkzeuge',
    'hero.stat2_number': '500+',
    'hero.stat2_label': 'Gleichzeitige Nutzer',
    'hero.stat3_number': '6',
    'hero.stat3_label': 'OCR-Sprachen',
    'hero.stat4_number': '100%',
    'hero.stat4_label': 'On-Premise',

    // Features
    'features.tag': 'FUNKTIONEN',
    'features.title': 'Leistungsstarke Funktionen',
    'features.subtitle': 'Eine vollst\u00e4ndige Plattform f\u00fcr alle Ihre PDF-Anforderungen',
    'features.convert.title': 'PDF-Konvertierung',
    'features.convert.desc': 'Schnelle und pr\u00e4zise Konvertierung in Word, Excel, HTML und Bildformate.',
    'features.editor.title': 'Erweiterter PDF-Editor',
    'features.editor.desc': 'Volle Kontrolle mit Text-, Bild- und Anmerkungsbearbeitung.',
    'features.ocr.title': 'OCR (Zeichenerkennung)',
    'features.ocr.desc': 'Gescannte Dokumente in 6 Sprachen in durchsuchbare PDFs umwandeln.',
    'features.merge_split.title': 'PDF zusammenf\u00fchren & teilen',
    'features.merge_split.desc': 'Mehrere PDFs zusammenf\u00fchren oder nach Seitenbereichen aufteilen.',
    'features.compress.title': 'PDF-Komprimierung',
    'features.compress.desc': 'Dateigr\u00f6\u00dfe ohne Qualit\u00e4tsverlust deutlich reduzieren.',
    'features.watermark.title': 'Wasserzeichen & Stempel',
    'features.watermark.desc': 'Text-, Bild- oder QR-Code-Wasserzeichen hinzuf\u00fcgen.',
    'features.encrypt.title': 'Verschl\u00fcsselung & Schutz',
    'features.encrypt.desc': 'AES-256-Verschl\u00fcsselung mit granularer Berechtigungskontrolle.',
    'features.forms.title': 'Formulare & Unterschrift',
    'features.forms.desc': 'PDF-Formulare ausf\u00fcllen und digital unterschreiben.',
    'features.smart_edit.title': 'Intelligente Bearbeitung',
    'features.smart_edit.desc': 'Bereichsbasierte Textbearbeitung in gescannten Dokumenten.',
    'features.redaction.title': 'Schw\u00e4rzung (Redaktion)',
    'features.redaction.desc': 'Sensible Informationen dauerhaft und unwiderruflich schw\u00e4rzen.',
    'features.admin.title': 'Admin-Panel',
    'features.admin.desc': 'Benutzer-, Rollen-, Gruppen- und Dokumentenverwaltung \u00fcber ein einziges Panel.',
    'features.translate.title': 'Dokument\u00fcbersetzung',
    'features.translate.desc': 'Automatische \u00dcbersetzung in 30+ Sprachen mit DeepL-Integration.',

    // Gallery
    'gallery.tag': 'GALERIE',
    'gallery.title': 'Produktgalerie',
    'gallery.subtitle': 'Entdecken Sie die leistungsstarke Oberfl\u00e4che von YesPDF',
    'gallery.filter.all': 'Alle',
    'gallery.filter.tools': 'PDF-Werkzeuge',
    'gallery.filter.editor': 'Editor',
    'gallery.filter.admin': 'Verwaltung',
    'gallery.anasayfa': 'Startseite',
    'gallery.word-donustur': 'In Word konvertieren',
    'gallery.excel-donustur': 'In Excel konvertieren',
    'gallery.html-donustur': 'In HTML konvertieren',
    'gallery.image-donustur': 'In Bild konvertieren',
    'gallery.searchable-pdf': 'Durchsuchbares PDF (OCR)',
    'gallery.pdf-birlestir': 'PDFs zusammenf\u00fchren',
    'gallery.pdf-bol': 'PDF aufteilen',
    'gallery.pdf-sikistir': 'PDF komprimieren',
    'gallery.filigran': 'Wasserzeichen hinzuf\u00fcgen',
    'gallery.editor-full': 'PDF-Editor',
    'gallery.metin-duzenle': 'Textbearbeitung',
    'gallery.duzenleme': 'Bearbeitungswerkzeuge',
    'gallery.sekiller': 'Formen',
    'gallery.olcum': 'Messwerkzeuge',
    'gallery.karartma': 'Schw\u00e4rzung',
    'gallery.doldur-imzala': 'Ausf\u00fcllen & Unterschreiben',
    'gallery.formlar': 'PDF-Formulare',
    'gallery.pullar': 'Stempel',
    'gallery.akilli-duzenleme': 'Intelligente Bearbeitung',
    'gallery.kontrol-paneli': '\u00dcbersicht',
    'gallery.kullanici-yonetimi': 'Benutzerverwaltung',
    'gallery.kullanici-ekle': 'Benutzer hinzuf\u00fcgen',
    'gallery.ldap-ad': 'LDAP/AD-Integration',
    'gallery.is-kuyrugu': 'Auftrags\u00fcberwachung',
    'gallery.guvenlik-ayarlari': 'Sicherheitseinstellungen',
    'gallery.denetim-kayitlari': 'Pr\u00fcfprotokolle',
    'gallery.kullanim-istatistikleri': 'Nutzungsstatistiken',
    'gallery.sertifika-yonetimi': 'Zertifikatsverwaltung',
    'gallery.giris-ekrani': 'Anmeldebildschirm',

    // Why YesPDF
    'why.title': 'Warum YesPDF?',
    'why.subtitle': 'Vorteile, die im Enterprise-PDF-Management den Unterschied machen',
    'why.onprem.title': '100% On-Premise',
    'why.onprem.desc': 'Ihre Daten bleiben auf Ihrem Server. Kein Cloud-Datentransfer. Funktioniert auch in Air-Gapped-Netzwerken.',
    'why.cost.title': 'Kostenvorteil',
    'why.cost.desc': 'G\u00fcnstige j\u00e4hrliche Lizenzierung pro Benutzer. \u00dcber 90% Ersparnis gegen\u00fcber Adobe. Flexible Tarife \u2014 zahlen Sie nur, was Sie brauchen.',
    'why.browser.title': 'Browserbasiert',
    'why.browser.desc': 'Keine Client-Installation erforderlich. Zugriff von jedem Ger\u00e4t mit Chrome, Firefox oder Edge. Windows, Mac, Linux, mobil.',
    'why.compliance.title': 'KVKK- & BDDK-konform',
    'why.compliance.desc': 'Umfassende Pr\u00fcfprotokolle, AES-256-Verschl\u00fcsselung, RBAC-Autorisierung. Volle Konformit\u00e4t mit t\u00fcrkischen Vorschriften.',

    // Security
    'security.title': 'Enterprise-Sicherheit',
    'security.subtitle': 'Ihre Daten werden auf h\u00f6chstem Niveau gesch\u00fctzt',
    'security.kvkk.title': 'KVKK-Konformit\u00e4t',
    'security.kvkk.desc': 'Umfassender Datenschutz gem\u00e4\u00df den Anforderungen des Datenschutzgesetzes (KVKK).',
    'security.owasp.title': 'OWASP Top 10',
    'security.owasp.desc': 'Volle Konformit\u00e4t mit Web-Anwendungssicherheitsstandards. CSRF-, XSS-, SQL-Injection-Schutz.',
    'security.aes.title': 'AES-256-Verschl\u00fcsselung',
    'security.aes.desc': 'Dateibezogene Verschl\u00fcsselung mit einzigartigem Salt. Datenschutz im Ruhezustand und bei der \u00dcbertragung.',
    'security.virus.title': 'Virenpr\u00fcfung',
    'security.virus.desc': 'Automatische Sicherheitspr\u00fcfung hochgeladener Dateien mit ClamAV-Integration.',
    'security.audit.title': 'Pr\u00fcfprotokolle',
    'security.audit.desc': 'Jede Aktion protokolliert: Benutzer, Aktion, IP-Adresse, Zeitstempel, Ger\u00e4teinformation.',
    'security.ip.title': 'IP-Beschr\u00e4nkung',
    'security.ip.desc': 'IP-basierte Zugriffskontrolle f\u00fcr das Admin-Panel. Sichere Verwaltung mit Whitelisting.',

    // Verticals
    'verticals.tag': 'Branchenl\u00f6sungen',
    'verticals.title': 'PDF-L\u00f6sungen f\u00fcr jede Branche',
    'verticals.subtitle': 'YesPDF bietet ma\u00dfgeschneiderte L\u00f6sungen f\u00fcr die individuellen Dokumentenmanagement-Anforderungen verschiedener Branchen.',
    'verticals.banking.title': 'Banken & Finanzen',
    'verticals.banking.desc': 'Regulierungskonformes Dokumentenmanagement, sichere Kreditakten, digitale Signaturen und Pr\u00fcfprotokolle.',
    'verticals.dicom.title': 'Gesundheitswesen & DICOM',
    'verticals.dicom.desc': 'Medizinische Bildgebung, DICOM-Konvertierung, Patientenakten und Compliance im Gesundheitswesen.',
    'verticals.government.title': 'Beh\u00f6rden & \u00f6ffentlicher Sektor',
    'verticals.government.desc': 'E-Government-konformes Dokumentenmanagement, amtlicher Schriftverkehr, Archivierung und digitale Transformation.',
    'verticals.military.title': 'Milit\u00e4r & Verteidigung',
    'verticals.military.desc': 'NATO-konformes Dokumentenmanagement, Verschlusssachen, Air-Gapped-Netzwerkf\u00e4higkeit und milit\u00e4rische Sicherheit.',
    'verticals.insurance.title': 'Versicherungswesen',
    'verticals.insurance.desc': 'Policenverwaltung, Schadenakten, versicherungsmathematische Berichte und Compliance-Dokumentation.',
    'verticals.legal.title': 'Recht',
    'verticals.legal.desc': 'Vertragsverwaltung, Fallakten, Schw\u00e4rzung (Redaktion) und digitale Signaturl\u00f6sungen.',
    'verticals.cad.title': 'CAD & Ingenieurwesen',
    'verticals.cad.desc': 'Technische Zeichnungskonvertierung, Gro\u00dfformatdruck, Messwerkzeuge und Projektarchivierung.',
    'verticals.education.title': 'Bildungswesen',
    'verticals.education.desc': 'Zeugnisse, Diplome, Pr\u00fcfungsunterlagen, Studierendenakten und akademisches Dokumentenmanagement.',
    'verticals.sts.title': 'Service to Software',
    'verticals.sts.desc': 'Kein SaaS, sondern Service to Software. Ihre Daten bleiben bei Ihnen, wir liefern den Service.',
    'verticals.digsig.title': 'Digitale Signatur',
    'verticals.digsig.desc': 'Digitale Unternehmenssignatur, E-Signatur-Integration, Zertifikatsverwaltung und Compliance-L\u00f6sungen.',
    'verticals.audit.title': 'Wirtschaftspr\u00fcfung & Beratung',
    'verticals.audit.desc': 'Pr\u00fcfberichte, Jahresabschl\u00fcsse, Compliance-Dokumente und ABBYY FineReader-Vergleich.',
    'verticals.uyap.title': 'UYAP UDF-Dokumentenverwaltung',
    'verticals.uyap.desc': 'UYAP UDF-Dateien in PDF konvertieren, digitale Signaturen verifizieren und bidirektionale Formatunterst\u00fctzung.',

    // Documents
    'docs.title': 'Dokumente',
    'docs.subtitle': 'Technische Dokumentation, Benutzerhandb\u00fccher und Berichte',
    'docs.brochure_tr': 'Produktbrosch\u00fcre (T\u00fcrkisch)',
    'docs.brochure_en': 'Produktbrosch\u00fcre (Englisch)',
    'docs.licensing_tr': 'Lizenzierungsleitfaden (T\u00fcrkisch)',
    'docs.licensing_en': 'Lizenzierungsleitfaden',
    'docs.user_guide_tr': 'Benutzerhandbuch (T\u00fcrkisch)',
    'docs.whitepaper_tr': 'Technisches Whitepaper',
    'docs.kvkk_tr': 'KVKK-Konformit\u00e4tsbericht',
    'docs.sysreq_tr': 'Systemanforderungen (T\u00fcrkisch)',
    'docs.sysreq_en': 'Systemanforderungen (Englisch)',
    'docs.competitor_tr': 'Wettbewerbsvergleich (T\u00fcrkisch)',
    'docs.competitor_en': 'Wettbewerbsvergleich (Englisch)',
    'docs.loadtest_tr': 'Lasttestbericht (T\u00fcrkisch)',
    'docs.loadtest_en': 'Lasttestbericht (Englisch)',
    'docs.gdpr_en': 'DSGVO-Konformit\u00e4tsbericht',
    'docs.ferpa_tr': 'FERPA-Konformit\u00e4tsbericht (T\u00fcrkisch)',
    'docs.ferpa_en': 'FERPA-Konformit\u00e4tsbericht (Englisch)',
    'docs.ferpa_de': 'FERPA-Konformit\u00e4tsbericht',
    'docs.hipaa_tr': 'HIPAA-Konformit\u00e4tsbericht (T\u00fcrkisch)',
    'docs.hipaa_en': 'HIPAA-Konformit\u00e4tsbericht (Englisch)',
    'docs.hipaa_de': 'HIPAA-Konformit\u00e4tsbericht',
    'docs.soc2_tr': 'SOC 2-Konformit\u00e4tsbericht (T\u00fcrkisch)',
    'docs.soc2_en': 'SOC 2-Konformit\u00e4tsbericht (Englisch)',
    'docs.soc2_de': 'SOC 2-Konformit\u00e4tsbericht',
    'docs.iso27001_tr': 'ISO 27001-Konformit\u00e4tsbericht (T\u00fcrkisch)',
    'docs.iso27001_en': 'ISO 27001-Konformit\u00e4tsbericht (Englisch)',
    'docs.iso27001_de': 'ISO 27001-Konformit\u00e4tsbericht',
    'docs.sts_tr': 'Service to Software (T\u00fcrkisch)',
    'docs.sts_en': 'Service to Software (Englisch)',
    'docs.tsk_whitepaper_tr': 'Verteidigungsindustrie-Whitepaper (T\u00fcrkisch)',
    'docs.nato_stanag_en': 'NATO STANAG-Konformit\u00e4t',
    'docs.loadbalancer_tr': 'Lastverteilung & Hochverf\u00fcgbarkeit (T\u00fcrkisch)',
    'docs.loadbalancer_en': 'Lastverteilung & Hochverf\u00fcgbarkeit (Englisch)',
    'docs.loadbalancer_de': 'Lastverteilung & Hochverf\u00fcgbarkeit',
    'docs.release_history': 'Versionsgeschichte',

    // Articles
    'nav.articles': 'Artikel',
    'articles.tag': 'ARTIKEL',
    'articles.title': 'Wissenszentrum',
    'articles.subtitle': 'Fachwissen zu Dokumentensicherheit, PDF-Management und Compliance im Unternehmen',
    'articles.docsecurity.title': 'Dokumentensicherheit',
    'articles.docsecurity.desc': 'Strategien f\u00fcr Dokumentensicherheit, Bedrohungsvektoren und Schutzma\u00dfnahmen.',
    'articles.redaction.title': 'Schw\u00e4rzungsrisiken',
    'articles.redaction.desc': 'Fehlerhafte Schw\u00e4rzungspraktiken, Datenleckrisiken und richtige Techniken.',
    'articles.licensing.title': 'Lizenzmodelle',
    'articles.licensing.desc': 'PDF-Software-Lizenzmodelle, versteckte Kosten und Auswahlkriterien.',
    'articles.central.title': 'Zentrales PDF-Management',
    'articles.central.desc': 'Zentral verwaltete PDF-Umgebungen, Unternehmenskontrolle und Effizienzvorteile.',
    'articles.personal.title': 'Gefahr durch pers\u00f6nliche PDF-Tools',
    'articles.personal.desc': 'Auswirkungen pers\u00f6nlicher PDF-Tools auf die Unternehmenssicherheit und Pr\u00e4ventionsstrategien.',

    // Contact
    'contact.title': 'Demo anfordern',
    'contact.subtitle': 'Kontaktieren Sie uns, um YesPDF in Ihrer Organisation zu erleben.',
    'contact.benefit1': 'Individuelle Demo f\u00fcr Ihre Organisation',
    'contact.benefit2': 'Technische Anforderungsanalyse',
    'contact.benefit3': 'Kostenloser POC-Aufbau (Proof of Concept)',
    'contact.phone': '+90 212 347 47 16',
    'contact.demo.title': 'Online-Demo-Umgebung',
    'contact.demo.desc': 'Testen Sie YesPDF direkt in Ihrem Browser. Keine Installation erforderlich.',
    'contact.demo.button': 'Demo testen',
    'contact.form.company': 'Firmenname',
    'contact.form.name': 'Vollst\u00e4ndiger Name <span class="text-red-500">*</span>',
    'contact.form.email': 'E-Mail <span class="text-red-500">*</span>',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Nachricht',
    'contact.form.company_ph': 'Ihr Firmenname',
    'contact.form.name_ph': 'Ihr vollst\u00e4ndiger Name',
    'contact.form.email_ph': 'name@firma.de',
    'contact.form.phone_ph': '+49 (XXX) XXX XX XX',
    'contact.form.message_ph': 'Erz\u00e4hlen Sie uns von Ihrem Projekt...',
    'contact.form.submit': 'Absenden',
    'contact.form.success': 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in K\u00fcrze bei Ihnen melden.',
    'contact.form.error': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',

    // Footer
    'footer.brand.desc': 'On-Premise-PDF-Management-Plattform. Sichere, schnelle und selbst gehostete L\u00f6sung f\u00fcr alle Ihre PDF-Vorg\u00e4nge.',
    'footer.links.title': 'Schnelllinks',
    'footer.links.features': 'Funktionen',
    'footer.links.gallery': 'Galerie',
    'footer.links.why': 'Warum YesPDF',
    'footer.links.security': 'Sicherheit',
    'footer.docs.title': 'Dokumente',
    'footer.docs.all': 'Alle Dokumente',
    'footer.docs.user_guide': 'Benutzerhandbuch',
    'footer.docs.whitepaper': 'Technisches Whitepaper',
    'footer.contact.title': 'Kontakt',
    'footer.contact.phone': '+90 212 347 47 16',
    'footer.contact.company': 'YesPDF',
    'footer.copyright': '\u00a9 2026 YesPDF. Alle Rechte vorbehalten.',

    // KVKK Banner
    'kvkk.text': 'Diese Website verwendet Cookies zur Verbesserung der Benutzererfahrung. Gem\u00e4\u00df dem Datenschutzgesetz (KVKK Nr. 6698) werden Ihre personenbezogenen Daten in \u00dcbereinstimmung mit unserer Datenschutzrichtlinie verarbeitet. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.',
    'kvkk.accept': 'Akzeptieren',
    'kvkk.reject': 'Ablehnen',
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

  // Swap gallery screenshots for language
  const enScreenshots = [
    'anasayfa', 'word-donustur', 'excel-donustur', 'searchable-pdf',
    'pdf-birlestir', 'pdf-bol', 'pdf-sikistir', 'filigran',
    'editor-full', 'metin-duzenle', 'duzenleme', 'sekiller', 'olcum',
    'karartma', 'doldur-imzala', 'formlar', 'pullar', 'akilli-duzenleme',
    'kontrol-paneli', 'kullanici-yonetimi', 'kullanici-ekle', 'ldap-ad',
    'is-kuyrugu', 'guvenlik-ayarlari', 'denetim-kayitlari',
    'kullanim-istatistikleri', 'sertifika-yonetimi', 'giris-ekrani'
  ];
  document.querySelectorAll('.gallery-item img').forEach(img => {
    const src = img.getAttribute('src') || '';
    const full = img.getAttribute('data-full') || '';
    enScreenshots.forEach(name => {
      if (lang === 'en' || lang === 'de') {
        if (src.includes(name + '.webp') && !src.includes(name + '-en.webp')) {
          img.setAttribute('src', src.replace(name + '.webp', name + '-en.webp'));
        }
        if (full.includes(name + '.webp') && !full.includes(name + '-en.webp')) {
          img.setAttribute('data-full', full.replace(name + '.webp', name + '-en.webp'));
        }
      } else {
        if (src.includes(name + '-en.webp')) {
          img.setAttribute('src', src.replace(name + '-en.webp', name + '.webp'));
        }
        if (full.includes(name + '-en.webp')) {
          img.setAttribute('data-full', full.replace(name + '-en.webp', name + '.webp'));
        }
      }
    });
  });

  // Filter documents by language
  document.querySelectorAll('[data-doc-lang]').forEach(el => {
    const docLang = el.getAttribute('data-doc-lang');
    if (docLang === 'both' || docLang === lang) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

// Language cycle: TR → EN → DE → TR
const langCycle = ['tr', 'en', 'de'];

// Toggle to next language in cycle
function toggleLanguage() {
  const idx = langCycle.indexOf(currentLang);
  const newLang = langCycle[(idx + 1) % langCycle.length];
  applyLanguage(newLang);
  updateLangLabels();
}

// Update toggle button labels (shows next language in cycle)
function updateLangLabels() {
  const idx = langCycle.indexOf(currentLang);
  const nextLang = langCycle[(idx + 1) % langCycle.length];
  const label = nextLang.toUpperCase();
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

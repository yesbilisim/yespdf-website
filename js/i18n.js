// YesPDF Website - Internationalization (TR/EN)
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
    'verticals.insurance.title': 'Sigortacılık',
    'verticals.insurance.desc': 'Poliçe yönetimi, hasar dosyaları, aktüerya raporları ve uyumluluk belgeleri.',
    'verticals.legal.title': 'Hukuk',
    'verticals.legal.desc': 'Sözleşme yönetimi, dava dosyaları, karartma (redaction) ve dijital imza çözümleri.',
    'verticals.cad.title': 'CAD & Mühendislik',
    'verticals.cad.desc': 'Teknik çizim dönüşümü, büyük format baskı, ölçüm araçları ve proje arşivleme.',
    'verticals.education.title': 'Eğitim',
    'verticals.education.desc': 'Transkript, diploma, sınav evrakları, öğrenci dosyaları ve akademik belge yönetimi.',

    // Documents
    'docs.title': 'Dokümanlar',
    'docs.subtitle': 'Teknik dokümantasyon, kullanıcı kılavuzları ve raporlar',
    'docs.brochure_tr': 'Ürün Broşürü',
    'docs.brochure_en': 'Product Brochure',
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
    'docs.hipaa_tr': 'HIPAA Uyumluluk Raporu',
    'docs.hipaa_en': 'HIPAA Uyumluluk Raporu',
    'docs.soc2_tr': 'SOC 2 Uyumluluk Raporu',
    'docs.soc2_en': 'SOC 2 Uyumluluk Raporu',
    'docs.iso27001_tr': 'ISO 27001 Uyumluluk Raporu',
    'docs.iso27001_en': 'ISO 27001 Uyumluluk Raporu',
    'docs.release_history': 'Sürüm Geçmişi',

    // Contact
    'contact.title': 'Demo Talep Edin',
    'contact.subtitle': 'YesPDF\'i kurumunuzda deneyimlemek için bizimle iletişime geçin.',
    'contact.benefit1': 'Kurumunuza özel demo sunumu',
    'contact.benefit2': 'Teknik gereksinim analizi',
    'contact.benefit3': 'Ücretsiz POC (kavram kanıtı) kurulumu',
    'contact.phone': '+90 212 347 47 16',
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
    'verticals.insurance.title': 'Insurance',
    'verticals.insurance.desc': 'Policy management, claims files, actuarial reports and compliance documentation.',
    'verticals.legal.title': 'Legal',
    'verticals.legal.desc': 'Contract management, case files, redaction and digital signature solutions.',
    'verticals.cad.title': 'CAD & Engineering',
    'verticals.cad.desc': 'Technical drawing conversion, large format printing, measurement tools and project archiving.',
    'verticals.education.title': 'Education',
    'verticals.education.desc': 'Transcripts, diplomas, exam papers, student files and academic document management.',

    // Documents
    'docs.title': 'Documents',
    'docs.subtitle': 'Technical documentation, user guides and reports',
    'docs.brochure_tr': 'Product Brochure (Turkish)',
    'docs.brochure_en': 'Product Brochure',
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
    'docs.hipaa_tr': 'HIPAA Compliance Report (Turkish)',
    'docs.hipaa_en': 'HIPAA Compliance Report',
    'docs.soc2_tr': 'SOC 2 Compliance Report (Turkish)',
    'docs.soc2_en': 'SOC 2 Compliance Report',
    'docs.iso27001_tr': 'ISO 27001 Compliance Report (Turkish)',
    'docs.iso27001_en': 'ISO 27001 Compliance Report',
    'docs.release_history': 'Release History',

    // Contact
    'contact.title': 'Request a Demo',
    'contact.subtitle': 'Contact us to experience YesPDF in your organization.',
    'contact.benefit1': 'Custom demo for your organization',
    'contact.benefit2': 'Technical requirements analysis',
    'contact.benefit3': 'Free POC (proof of concept) setup',
    'contact.phone': '+90 212 347 47 16',
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
      if (lang === 'en') {
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

// YesPDF Website - Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demo-form');
  const submitBtn = document.getElementById('form-submit');
  const successMsg = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide previous messages
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');

    // Basic validation
    const company = form.querySelector('[name="company"]');
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const message = form.querySelector('[name="message"]');

    if (!name.value.trim() || !email.value.trim()) {
      if (errorMsg) {
        errorMsg.textContent = currentLang === 'en'
          ? 'Please fill in the required fields.'
          : 'Lütfen zorunlu alanları doldurun.';
        errorMsg.classList.remove('hidden');
      }
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      if (errorMsg) {
        errorMsg.textContent = currentLang === 'en'
          ? 'Please enter a valid email address.'
          : 'Lütfen geçerli bir e-posta adresi girin.';
        errorMsg.classList.remove('hidden');
      }
      return;
    }

    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Gönderiliyor...';

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok || response.status === 302 || response.status === 200) {
        // Success
        if (successMsg) {
          const dict = typeof translations !== 'undefined' ? translations[currentLang] : null;
          successMsg.textContent = dict ? dict['contact.form.success'] : 'Mesajınız başarıyla gönderildi.';
          successMsg.classList.remove('hidden');
        }
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      // Formsubmit may redirect (CORS), treat as success if no network error
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        // CORS redirect - form was likely submitted successfully
        if (successMsg) {
          const dict = typeof translations !== 'undefined' ? translations[currentLang] : null;
          successMsg.textContent = dict ? dict['contact.form.success'] : 'Mesajınız başarıyla gönderildi.';
          successMsg.classList.remove('hidden');
        }
        form.reset();
      } else {
        // Real error
        if (errorMsg) {
          const dict = typeof translations !== 'undefined' ? translations[currentLang] : null;
          errorMsg.textContent = dict ? dict['contact.form.error'] : 'Bir hata oluştu. Lütfen tekrar deneyin.';
          errorMsg.classList.remove('hidden');
        }
      }
    } finally {
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });

  // Real-time validation feedback
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', () => {
      if (input.required && !input.value.trim()) {
        input.classList.add('border-red-400');
        input.classList.remove('border-gray-200');
      } else {
        input.classList.remove('border-red-400');
        input.classList.add('border-gray-200');
      }
    });

    input.addEventListener('input', () => {
      if (input.value.trim()) {
        input.classList.remove('border-red-400');
      }
    });
  });
});

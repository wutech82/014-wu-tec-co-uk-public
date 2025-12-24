// Minimal progressive enhancement for contact form
// - Uses fetch to submit to Formspree when JS is available
// - Falls back to standard POST when JS is disabled or if fetch fails

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (!form || !status) return;

  function showMessage(msg, isError) {
    status.style.display = 'block';
    status.textContent = msg;
    status.style.color = isError ? '#b00020' : '';
  }

  form.addEventListener('submit', function (e) {
    // Allow default HTML POST if form action is placeholder
    var action = form.getAttribute('action') || '';
    if (action.indexOf('<YOUR_FORM_ID>') !== -1) {
      // Let browser do the POST (placeholder) but show a hint
      showMessage('Please replace <YOUR_FORM_ID> in the form action to enable submissions, or use the mailto fallback.');
      // Do not prevent default - let normal POST happen
      return;
    }

    // If a real action is present, intercept and submit via fetch for better UX
    e.preventDefault();

    // Verify reCAPTCHA
    if (typeof grecaptcha !== 'undefined') {
      var response = grecaptcha.getResponse();
      if (response.length === 0) {
        showMessage('Please complete the reCAPTCHA.', true);
        return;
      }
    }

    var data = new FormData(form);
    showMessage('Sending…');

    fetch(action, {
      method: form.method || 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function (res) {
      if (res.ok) {
        showMessage('Thanks — your message was sent.');
        form.reset();
        if (typeof grecaptcha !== 'undefined') {
          grecaptcha.reset();
        }
      } else {
        return res.json().then(function (json) {
          var err = (json && json.error) ? json.error : 'Submission failed. Please try again or use the mailto link.';
          showMessage(err, true);
        }).catch(function () {
          showMessage('Submission failed. Please try again or use the mailto link.', true);
        });
      }
    }).catch(function () {
      showMessage('Network error. Please try again or use the mailto link.', true);
    });
  });
});
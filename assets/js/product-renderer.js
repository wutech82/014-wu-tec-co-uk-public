/**
 * Simple Product Renderer
 * Loads and renders Markdown files
 */

class ProductRenderer {
  constructor(productName) {
    this.productName = productName;
  }

  async init(config) {
    const contentDiv = document.querySelector('#product-content');
    if (!contentDiv) return;

    contentDiv.innerHTML = '<div class="product-loading"></div>';

    const sections = [];
    for (const [title, filePath] of Object.entries(config)) {
      try {
        const mdContent = await fetch(filePath).then(r => r.text());
        const htmlContent = marked.parse(mdContent);
        sections.push({ title, content: htmlContent });
      } catch (err) {
        console.warn(`Failed to load: ${title}`);
      }
    }

    contentDiv.innerHTML = sections
      .map(s => `<section>${s.content}</section>`)
      .join('');
  }
}

// Load marked.js from CDN
if (typeof marked === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/marked@11.1.1/+esm';
  script.type = 'module';
  document.head.appendChild(script);
}

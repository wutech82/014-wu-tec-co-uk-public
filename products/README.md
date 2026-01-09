# Products Directory

This directory contains product pages for Wu Technologies products.

## How to Add a New Product Page

### 1. Create Product Directory

Create a new directory under `products/` with your product name (use kebab-case):

```
products/
  your-product-name/
```

### 2. Create index.html

Create an `index.html` file in your product directory. This is the main entry point for your product page.

**Template:**

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="Your Product: Brief description here." />
  <title>Your Product — WU Technologies</title>
  <link rel="canonical" href="https://wu-tec.co.uk/products/your-product-name/" />
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/assets/css/products.css">
</head>

<body class="product-page">
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="product-header" role="banner">
    <div class="container">
      <a class="product-brand" href="/"><span class="product-brand-w">W</span><span class="product-brand-u">U</span>
        Technologies</a>
      <nav class="product-nav" role="navigation" aria-label="Primary">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="product-container">
    <main id="main" role="main" class="product-main">
      <div class="product-wrapper">
        <section class="product-hero" aria-labelledby="product-title">
          <h1 id="product-title">Your Product Name</h1>
          <p class="subhead">Your product tagline or brief description.</p>
        </section>
        <div class="product-content" id="product-content"></div>
      </div>
    </main>

    <footer class="product-footer" role="contentinfo">
      <div class="container">
        <p>&copy; 2025 <a href="/">Wu Technologies</a>. All rights reserved.</p>
      </div>
    </footer>
  </div>

  <script src="/assets/js/product-renderer.js"></script>
  <script>
    const renderer = new ProductRenderer('your-product-name');
    document.addEventListener('DOMContentLoaded', async () => {
      await renderer.init({
        'Privacy': '/products/your-product-name/privacy.md',
        'Support': '/products/your-product-name/support.md',
        // Add more markdown pages as needed
      });
    });
  </script>
</body>

</html>
```

### 3. Create Markdown Content Files

Create markdown files for your product content (e.g., `privacy.md`, `support.md`).

#### privacy.md Template

Create a `privacy.md` file with your product's privacy policy. Use the existing templates in `link-lock/privacy.md` or `site-sync/privacy.md` as reference.

Key sections to include:
- Introduction
- Data Controller information
- Information collected
- How data is used
- Third-party services
- GDPR compliance
- Data retention
- Security measures
- Contact information

**Important:** Update the "Last Updated" date and customize the content for your specific product features.

#### support.md (Optional)

Create a `support.md` file if your product needs a support page.

### 4. ProductRenderer Configuration

The `ProductRenderer` class (in `/assets/js/product-renderer.js`) automatically:
- Loads markdown files specified in the config object
- Converts markdown to HTML using marked.js
- Renders the content in the `#product-content` div

The config object maps section titles to markdown file paths:

```javascript
{
  'Section Title': '/path/to/file.md',
  'Another Section': '/path/to/another.md'
}
```

### 5. File Structure Example

```
products/
  your-product-name/
    index.html          # Main product page
    privacy.md          # Privacy policy (required)
    support.md          # Support page (optional)
```

### 6. URL Structure

Once created, your product pages will be accessible at:
- Main page: `https://wu-tec.co.uk/products/your-product-name/`
- Privacy page: `https://wu-tec.co.uk/products/your-product-name/privacy`
- Support page: `https://wu-tec.co.uk/products/your-product-name/support`

### 7. Add to Products Index (Optional)

To list your product on the main products page, edit `/products/index.html` and add a new product card:

```html
<div class="product-card">
  <h3>Your Product Name</h3>
  <p>Brief description of your product.</p>
  <a href="/products/your-product-name/">Learn More →</a>
</div>
```

## Existing Products

- **link-lock**: Secure password-protected link sharing
- **site-sync**: Seamless content synchronization

## Technical Notes

- All markdown files are rendered using [marked.js](https://marked.js.org/)
- The site uses Jekyll for static site generation (see `_config.yml` in root)
- Product pages use the shared styles from `/styles.css` and `/assets/css/products.css`
- The ProductRenderer script is loaded from `/assets/js/product-renderer.js`

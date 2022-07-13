# Css tree shake asset issue

## Issue

When a vite build includes a css file conditionally bound to environment variables the referenced assets by the CSS file always end up in the assets output folder even when the CSS file itself which references them does not.

index.css
```css
@font-face {
    font-family: 'Roboto Regular';
    src: url('assets/roboto-regular.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
}
```

.env
```env
VITE_INCLUDE_CSS="false"
```

index.js
```javascript
if(import.meta.env.VITE_INCLUDE_CSS === 'true') {
  import('./index.css')
}
```

**Expected behavior:** `index.css `and `roboto-regular.woff2` are not included in the build output folder.

**Actual behavior:** `roboto-regular.woff2` is included in the build output folder.

## Steps to reproduce

- `npm install`
- `npm run build`

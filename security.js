const setSecurityHeaders = (_, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': true,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Cross-Origin-Resource-Policy': 'same-site',
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Referrer-Policy': 'no-referrer',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Expect-CT': 'enforce, max-age=86400',
    'Content-Security-Policy': `object-src 'none'; script-src 'self'; img-src 'self'; frame-ancestors 'self'; require-trusted-types-for 'script'; block-all-mixed-content; upgrade-insecure-requests`,
    'Permissions-Policy':
      'camera=(), microphone=(), geolocation=(self), payment=(self "https://api.sibspayments.com/api/v2/payments" "https://best-buy-beauty.com")',
  });
  next();
};

module.exports = { setSecurityHeaders };

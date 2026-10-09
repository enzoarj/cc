
(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod
      ? n.callMethod.apply(n, arguments)
      : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = true;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  'script',
  'https://connect.facebook.net/en_US/fbevents.js'
);

// Substitua pelo ID do seu Pixel
fbq('init', '938804325489227');

// Registra visualizações da página
fbq('track', 'PageView');




document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll(
    'a[href*="pay.kiwify.com.br/HPI9gXf"]'
  );

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
      fbq('track', 'InitiateCheckout');
    });
  });
});

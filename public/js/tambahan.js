var $temp = $("<input>");
var $url = $(location).attr('href');

$('.clipboard').on('click', function() {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
  $("p").text("URL copied!");
})

new Splide('#solusi3', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
}).mount();

new Splide('#solusi2', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
}).mount();

new Splide('#solusi1', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
}).mount();

new Splide('#modul1', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
}).mount();

new Splide('#slidertop', {
    perPage: 1,
    autoplay: true,
}).mount();

    new Splide('#portofolio', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }).mount();

// GOOGLE ANALITIC
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-5237WRGWJJ');

// STEP CONFIG
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-M9VSPMJ');

(function () {
  function loadScript() {
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    if (iframeDoc) {
      var d = iframeDoc.createElement('script');
      d.innerHTML = `
        window.__CF$cv$params = {
          r: '9886402b05df4ea3',
          t: 'MTc1OTQyOTYxNC4wMDAwMDA='
        };
        var s = document.createElement('script');
        s.nonce = '';
        s.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
        document.getElementsByTagName('head')[0].appendChild(s);
      `;
      iframeDoc.getElementsByTagName('head')[0].appendChild(d);
    }
  }

  if (document.body) {
    var iframe = document.createElement('iframe');
    iframe.height = 1;
    iframe.width = 1;
    iframe.style.position = 'absolute';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    if (document.readyState !== 'loading') {
      loadScript();
    } else if (window.addEventListener) {
      document.addEventListener('DOMContentLoaded', loadScript);
    } else {
      var prev = document.onreadystatechange || function () {};
      document.onreadystatechange = function (evt) {
        prev(evt);
        if (document.readyState !== 'loading') {
          document.onreadystatechange = prev;
          loadScript();
        }
      };
    }
  }
})();


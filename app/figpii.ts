export const figPiiTrackingUrl =
  "https://tracking-cdn.figpii.com/4b74f87abf642ea2343f77922cb5fdf0.js";

// Keep local previews out of the live FigPii visitor quota and experiments.
// On a public host this is the same asynchronous loader supplied by Artway.
export const figPiiBootstrap = `(function(w,d,u){
  if (["localhost","127.0.0.1","::1","[::1]"].includes(w.location.hostname)) return;
  w._fpEvent=w._fpEvent||[];
  if(d.querySelector('script[data-artway-figpii]')) return;
  var n=d.createElement('script');
  n.crossOrigin='anonymous';n.async=true;n.src=u;
  n.setAttribute('data-artway-figpii','');d.head.append(n);
})(window,document,${JSON.stringify(figPiiTrackingUrl)});`;

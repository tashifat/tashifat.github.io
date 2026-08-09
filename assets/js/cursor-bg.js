/*
 * Animated dot-grid cursor background inspired by the referenced al-folio site.
 * Toggle with `enable_cursor_animation` in `_config.yml`.
 */
(function () {
  "use strict";

  var CFG = {
    spacing: 65,
    attractR: 260,
    attractK: 0.24,
    lerpSpeed: 0.13,
    lineDist: 100,
    dotR: 2,
    light: { r: 65, g: 100, b: 210 },
    dark: { r: 0, g: 190, b: 255 },
    dotBaseAlpha: 0.22,
    dotNearAlpha: 0.78,
    dotNearR: 210,
    lineBaseAlpha: 0.16,
    lineNearAlpha: 0.48,
    glowAlpha: 0.1,
    glowR: 150,
    reticleSize: 18,
    reticleTick: 7,
    reticleAlpha: 0.7,
    ambientAmp: 10,
    ambientFreqX: 0.0005,
    ambientFreqY: 0.0004,
    jitter: 18
  };

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var canvas = document.createElement("canvas");
  canvas.className = "cursor-bg-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.insertBefore(canvas, document.body.firstChild);

  var ctx = canvas.getContext("2d");
  var W = 0;
  var H = 0;
  var cols = 0;
  var rows = 0;
  var points = [];
  var mouse = { x: -99999, y: -99999 };
  var reduceMotion = false;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.round(window.innerWidth);
    H = Math.round(window.innerHeight);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(W / CFG.spacing) + 2;
    rows = Math.ceil(H / CFG.spacing) + 2;
    buildGrid();
  }

  function buildGrid() {
    points = new Array(cols * rows);
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var ox = c * CFG.spacing + (Math.random() * 2 - 1) * CFG.jitter;
        var oy = r * CFG.spacing + (Math.random() * 2 - 1) * CFG.jitter;
        points[r * cols + c] = {
          ox: ox,
          oy: oy,
          x: ox,
          y: oy,
          phase: Math.random() * Math.PI * 2
        };
      }
    }
  }

  function rgb() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    return dark ? CFG.dark : CFG.light;
  }

  function tick() {
    if (reduceMotion) {
      return;
    }

    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, W, H);

    var c = rgb();
    var mx = mouse.x;
    var my = mouse.y;
    var attractR2 = CFG.attractR * CFG.attractR;
    var now = performance.now();

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var dx = mx - p.ox;
      var dy = my - p.oy;
      var d2 = dx * dx + dy * dy;
      var ax = CFG.ambientAmp * Math.sin(now * CFG.ambientFreqX + p.phase);
      var ay = CFG.ambientAmp * Math.cos(now * CFG.ambientFreqY + p.phase);
      var tx = p.ox + ax;
      var ty = p.oy + ay;

      if (d2 < attractR2) {
        var d = Math.sqrt(d2);
        var k = (1 - d / CFG.attractR) * CFG.attractK;
        tx += dx * k;
        ty += dy * k;
      }

      p.x += (tx - p.x) * CFG.lerpSpeed;
      p.y += (ty - p.y) * CFG.lerpSpeed;
    }

    for (var e = 0; e < points.length; e++) {
      var a = points[e];
      var col = e % cols;
      if (col + 1 < cols) {
        drawEdge(a, points[e + 1], c, mx, my);
      }
      if (e + cols < points.length) {
        drawEdge(a, points[e + cols], c, mx, my);
      }
    }

    for (var j = 0; j < points.length; j++) {
      drawDot(points[j], c, mx, my);
    }

    if (mx > -9999) {
      drawGlow(mx, my, c);
      drawReticle(mx, my, c);
    }
  }

  function drawDot(p, c, mx, my) {
    var d = dist(mx, my, p.x, p.y);
    var alpha = CFG.dotBaseAlpha;
    if (d < CFG.dotNearR) {
      alpha += (CFG.dotNearAlpha - CFG.dotBaseAlpha) * (1 - d / CFG.dotNearR);
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, CFG.dotR, 0, Math.PI * 2);
    ctx.fillStyle = rgba(c, alpha);
    ctx.fill();
  }

  function drawEdge(a, b, c, mx, my) {
    var d = dist(a.x, a.y, b.x, b.y);
    if (d > CFG.lineDist) {
      return;
    }

    var near = Math.min(dist(mx, my, a.x, a.y), dist(mx, my, b.x, b.y));
    var alpha = CFG.lineBaseAlpha;
    if (near < CFG.dotNearR) {
      alpha += (CFG.lineNearAlpha - CFG.lineBaseAlpha) * (1 - near / CFG.dotNearR);
    }
    alpha *= (1 - d / CFG.lineDist) * 1.4;
    alpha = Math.min(alpha, CFG.lineNearAlpha);

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = rgba(c, alpha);
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  function drawGlow(mx, my, c) {
    var grad = ctx.createRadialGradient(mx, my, 0, mx, my, CFG.glowR);
    grad.addColorStop(0, rgba(c, CFG.glowAlpha));
    grad.addColorStop(0.45, rgba(c, CFG.glowAlpha * 0.4));
    grad.addColorStop(1, rgba(c, 0));

    ctx.beginPath();
    ctx.arc(mx, my, CFG.glowR, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  function drawReticle(mx, my, c) {
    var s = CFG.reticleSize;
    var t = CFG.reticleTick;

    ctx.beginPath();
    ctx.arc(mx, my, s + 10, 0, Math.PI * 2);
    ctx.strokeStyle = rgba(c, CFG.reticleAlpha * 0.3);
    ctx.lineWidth = 0.7;
    ctx.stroke();

    ctx.strokeStyle = rgba(c, CFG.reticleAlpha);
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(mx - s, my - s + t);
    ctx.lineTo(mx - s, my - s);
    ctx.lineTo(mx - s + t, my - s);
    ctx.moveTo(mx + s - t, my - s);
    ctx.lineTo(mx + s, my - s);
    ctx.lineTo(mx + s, my - s + t);
    ctx.moveTo(mx + s, my + s - t);
    ctx.lineTo(mx + s, my + s);
    ctx.lineTo(mx + s - t, my + s);
    ctx.moveTo(mx - s + t, my + s);
    ctx.lineTo(mx - s, my + s);
    ctx.lineTo(mx - s, my + s - t);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mx, my, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = rgba(c, CFG.reticleAlpha);
    ctx.fill();
  }

  function rgba(c, a) {
    return "rgba(" + c.r + "," + c.g + "," + c.b + "," + a.toFixed(3) + ")";
  }

  function dist(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  document.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener("mouseleave", function () {
    mouse.x = -99999;
    mouse.y = -99999;
  });

  window.addEventListener("resize", resize);

  resize();
  tick();
})();

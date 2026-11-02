/* NULL — GitHub Pages bootstrap (replace this file with full null-game.js for the complete campaign) */
(function () {
  const boot = document.getElementById('boot');
  const tag = document.getElementById('bootTag');
  const bar = document.getElementById('bootBar');
  const title = document.getElementById('title');
  const mark = document.getElementById('titleMark');

  function setBar(p, msg) {
    if (bar) bar.style.width = Math.round(p * 100) + '%';
    if (tag) tag.textContent = msg || 'LOADING';
  }

  if (mark) {
    mark.innerHTML = '';
    for (const ch of 'NULL') {
      const s = document.createElement('span');
      s.textContent = ch;
      mark.appendChild(s);
    }
  }

  let p = 0;
  const iv = setInterval(function () {
    p += 0.1;
    setBar(Math.min(1, p), p < 0.6 ? 'INITIALIZING' : 'READY');
    if (p >= 1) {
      clearInterval(iv);
      if (boot) boot.classList.add('hidden');
      if (title) title.classList.remove('hidden');
    }
  }, 35);

  const app = document.getElementById('app');
  if (typeof THREE !== 'undefined' && app) {
    try {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(innerWidth, innerHeight);
      renderer.setClearColor(0x050505);
      app.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100);
      camera.position.set(0, 0.6, 4);
      scene.add(new THREE.AmbientLight(0x404060, 1.2));
      const dir = new THREE.DirectionalLight(0xc8d0e0, 1.4);
      dir.position.set(-2, 4, 3);
      scene.add(dir);
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.2, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x8d1414, metalness: 0.3, roughness: 0.55 })
      );
      scene.add(mesh);
      (function frame() {
        requestAnimationFrame(frame);
        mesh.rotation.y += 0.008;
        mesh.rotation.x += 0.003;
        renderer.render(scene, camera);
      })();
      addEventListener('resize', function () {
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
      });
    } catch (e) { console.warn(e); }
  }

  const play = document.getElementById('btnPlay');
  if (play) {
    play.addEventListener('click', function () {
      alert('To play the full campaign on GitHub Pages, upload null-game.js into the js/ folder of this repo (replace this bootstrap).\n\nOffline: open NULL-fullscreen.html — it is fully standalone.');
    });
  }
})();

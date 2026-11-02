/* NULL GitHub Pages bootstrap */
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

  // Title mark
  if (mark) {
    mark.innerHTML = '';
    for (const ch of 'NULL') {
      const s = document.createElement('span');
      s.textContent = ch;
      mark.appendChild(s);
    }
  }

  // Soft boot sequence
  let p = 0;
  const iv = setInterval(function () {
    p += 0.08;
    setBar(Math.min(1, p), p < 0.5 ? 'INITIALIZING' : 'READY');
    if (p >= 1) {
      clearInterval(iv);
      if (boot) boot.classList.add('hidden');
      if (title) title.classList.remove('hidden');
    }
  }, 40);

  // 3D backdrop if THREE is available
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
      function frame() {
        requestAnimationFrame(frame);
        mesh.rotation.y += 0.008;
        mesh.rotation.x += 0.003;
        renderer.render(scene, camera);
      }
      frame();
      addEventListener('resize', function () {
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
      });
    } catch (e) {
      console.warn(e);
    }
  }

  const play = document.getElementById('btnPlay');
  if (play) {
    play.addEventListener('click', function () {
      alert('Full campaign script not deployed on this host yet.\n\nUse the standalone file NULL-fullscreen.html for the complete game offline.\n\nOr upload artifacts/null-game.js to js/null-game.js on this repo to enable the full campaign on GitHub Pages.');
    });
  }
})();

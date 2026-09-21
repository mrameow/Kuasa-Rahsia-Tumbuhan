/* ======================================================
   MEMORI.JS — Padanan Ingatan (dua kategori bertema)
   ====================================================== */

let kadTerbalik = [];
let kadDipadan = 0;
let alihanMemori = 0;
let kunciKlik = false;
let kadAktifSenarai = [];
let tajukMemoriSemasa = '';

function kocokArray(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function bukaMemori(kategori){
  if(kategori==='gerak'){
    kadAktifSenarai = kadMemoriGerak;
    tajukMemoriSemasa = '🧭 Padanan: Rangsangan → Gerak Balas';
  } else {
    kadAktifSenarai = kadMemoriFoto;
    tajukMemoriSemasa = '🧪 Padanan: Bahan → Hasil Fotosintesis';
  }
  document.getElementById('tajuk-memori').textContent = tajukMemoriSemasa;
  tunjukSkrin('layar-memori');
  mulakanMemori();
}

function mulakanMemori(){
  kadTerbalik = [];
  kadDipadan = 0;
  alihanMemori = 0;
  kunciKlik = false;
  document.getElementById('memori-alihan').textContent = '0';
  document.getElementById('memori-pasangan').textContent = '0 / ' + (kadAktifSenarai.length/2);
  document.getElementById('memori-tamat-kad').style.display = 'none';

  const grid = document.getElementById('grid-memori');
  grid.innerHTML = '';
  const kadKocok = kocokArray(kadAktifSenarai);
  kadKocok.forEach((item, idx)=>{
    const kad = document.createElement('div');
    kad.className = 'kad-memori';
    kad.dataset.id = item.id;
    kad.dataset.idx = idx;
    kad.innerHTML = `
      <div class="kad-dalam">
        <div class="kad-belakang">🍀</div>
        <div class="kad-depan">
          <div class="kad-ikon">${item.ikon}</div>
          <div class="kad-label">${item.label}</div>
        </div>
      </div>`;
    kad.onclick = ()=>klikKadMemori(kad);
    grid.appendChild(kad);
  });
}

function klikKadMemori(kad){
  if(kunciKlik) return;
  if(kad.classList.contains('terbuka') || kad.classList.contains('padan')) return;
  if(kadTerbalik.length>=2) return;

  kad.classList.add('terbuka');
  kadTerbalik.push(kad);

  if(kadTerbalik.length===2){
    alihanMemori++;
    document.getElementById('memori-alihan').textContent = alihanMemori;
    const [a,b] = kadTerbalik;
    if(a.dataset.id === b.dataset.id){
      kunciKlik = true;
      setTimeout(()=>{
        a.classList.add('padan'); b.classList.add('padan');
        kadTerbalik = [];
        kadDipadan++;
        document.getElementById('memori-pasangan').textContent = kadDipadan + ' / ' + (kadAktifSenarai.length/2);
        tunjukToast('✅ Padanan dijumpai!');
        kunciKlik = false;
        if(kadDipadan === kadAktifSenarai.length/2){
          setTimeout(tamatMemori, 500);
        }
      }, 500);
    } else {
      kunciKlik = true;
      setTimeout(()=>{
        a.classList.remove('terbuka'); b.classList.remove('terbuka');
        kadTerbalik = [];
        kunciKlik = false;
      }, 850);
    }
  }
}

function tamatMemori(){
  const kad = document.getElementById('memori-tamat-kad');
  kad.style.display = 'block';
  document.getElementById('memori-alihan-akhir').textContent = alihanMemori;
}

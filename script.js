// simple interactivity: filters + dynamic year + PDF download placeholder
document.getElementById('year').textContent = new Date().getFullYear();

// filters
document.querySelectorAll('#filters button').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    document.querySelectorAll('#filters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.item').forEach(it=>{
      if(cat==='all' || it.dataset.cat===cat) it.style.display = '';
      else it.style.display = 'none';
    });
  });
});

// download PDF (placeholder — remplacez par un PDF réel si vous avez)
document.getElementById('download-pdf').addEventListener('click', e=>{
  e.preventDefault();
  alert("Remplacez ce lien par le PDF réel de votre carte si vous en avez un.");
});

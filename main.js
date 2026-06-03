/* ============================================================
   LARAGH GALLAGHER — shared site script
   Edit the PROJECTS array below to add work / swap images.
   To use a real image: set "img" to a path, e.g. "images/wendys.jpg"
   (drop files in /images). If "img" is empty, a color placeholder is used.
   ============================================================ */

const PROJECTS = [
  { id:"wendys-spongebob", name:"Wendy's × SpongeBob", tag:"Campaign", year:"2023", role:"Creative / Production", img:"", c:["#e2231a","#ffcf00"],
    blurb:"A cross-brand campaign that mashed fast food with a cartoon icon and somehow made total sense." },
  { id:"lays-potatohead", name:"Lay's × Mr. Potato Head", tag:"Brand", year:"2022", role:"Art Direction", img:"", c:["#ffd60a","#e63946"],
    blurb:"Two potato legends, one playful brand moment." },
  { id:"wendys-rickmorty", name:"Wendy's × Rick & Morty", tag:"Campaign", year:"2022", role:"Creative", img:"", c:["#06d6a0","#118ab2"],
    blurb:"Interdimensional menu chaos, on brand and on time." },
  { id:"clue", name:"Clue", tag:"Digital", year:"2021", role:"Design", img:"", c:["#7209b7","#3a0ca3"],
    blurb:"A digital take on a classic whodunit." },
  { id:"lays-com", name:"Lays.com", tag:"Web", year:"2021", role:"Web Design", img:"", c:["#ffd60a","#ff7b00"],
    blurb:"The flagship site for a snack everyone knows." },
  { id:"wendys-scarethru", name:"Wendy's Scare-Thru", tag:"Experience", year:"2021", role:"Creative", img:"", c:["#3a0ca3","#f72585"],
    blurb:"A Halloween drive-thru experience with a wicked sense of humor." },
  { id:"philips-vr", name:"Philips VR Experience", tag:"VR", year:"2020", role:"Experience Design", img:"", c:["#4361ee","#4cc9f0"],
    blurb:"An immersive VR experience for a brand you already trust." },
  { id:"wendys-jdot", name:"Wendy's × J.Dot", tag:"Campaign", year:"2020", role:"Creative", img:"", c:["#ef476f","#ffd166"],
    blurb:"Music meets menu in a culture-first campaign." },
  { id:"disney-infinity", name:"Disney Infinity", tag:"Game", year:"2019", role:"Design", img:"", c:["#118ab2","#9b5de5"],
    blurb:"A small part of a very big, very magical universe." },
  { id:"sf-allstar", name:"SF All-Star", tag:"Event", year:"2019", role:"Creative", img:"", c:["#ff7b00","#ef476f"],
    blurb:"Event identity and assets for an all-star moment." },
  { id:"holiday-app", name:"Holiday App", tag:"Product", year:"2018", role:"Product Design", img:"", c:["#06d6a0","#ffd166"],
    blurb:"A seasonal app that brought a little joy to phones." },
  { id:"lucchese", name:"Lucchese", tag:"Brand", year:"2018", role:"Art Direction", img:"", c:["#9b5de5","#f15bb5"],
    blurb:"Heritage bootmaking, dressed for the modern web." },
  { id:"budweiser", name:"Budweiser", tag:"Campaign", year:"2017", role:"Creative", img:"", c:["#d00000","#ffba08"],
    blurb:"Big-beer storytelling for a household name." },
  { id:"roll-by-good", name:"Roll By Good", tag:"Social", year:"2017", role:"Design", img:"", c:["#2b9348","#aacc00"],
    blurb:"Feel-good social content with a purpose." },
  { id:"wendys-sailthru", name:"Wendy's Sailthru", tag:"CRM", year:"2016", role:"Design", img:"", c:["#f72585","#7209b7"],
    blurb:"Email and CRM that people actually opened." },
  { id:"malibu-ads", name:"Malibu Ads", tag:"Advertising", year:"2016", role:"Art Direction", img:"", c:["#4cc9f0","#f72585"],
    blurb:"Sun-soaked advertising for a good-time brand." }
];

const bg = p => p.img ? `url('${p.img}')` : `linear-gradient(135deg,${p.c[0]},${p.c[1]})`;

/* ---------- loader ---------- */
function initLoader(){
  const loader=document.getElementById('loader'); if(!loader) return;
  const num=document.getElementById('num'); let n=0;
  const t=setInterval(()=>{ n+=Math.floor(Math.random()*9)+4;
    if(n>=100){n=100;clearInterval(t);num.textContent=100;setTimeout(()=>loader.classList.add('done'),450);}
    num.textContent=String(n).padStart(2,'0'); },85);
}

/* ---------- hover-reveal index ---------- */
function initIndex(elId){
  const host=document.getElementById(elId); if(!host) return;
  const preview=document.getElementById('preview');
  PROJECTS.forEach((p,i)=>{
    const row=document.createElement('div'); row.className='row';
    const a=document.createElement('a'); a.href=`project.html?id=${p.id}`;
    a.innerHTML=`<span class="nm">${p.name}</span><span class="tag">${p.tag} · ${p.year}</span>`;
    a.addEventListener('mouseenter',()=>{ if(preview){preview.style.backgroundImage=bg(p);preview.classList.add('show');} });
    a.addEventListener('mouseleave',()=>{ if(preview) preview.classList.remove('show'); });
    row.appendChild(a); host.appendChild(row);
  });
  if(preview){
    let px=0,py=0,tx=0,ty=0;
    addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY});
    (function loop(){px+=(tx-px)*.14;py+=(ty-py)*.14;preview.style.left=px+'px';preview.style.top=py+'px';requestAnimationFrame(loop)})();
  }
}

/* ---------- work grid (cards) ---------- */
function initGrid(elId){
  const host=document.getElementById(elId); if(!host) return;
  PROJECTS.forEach(p=>{
    const a=document.createElement('a'); a.className='card'; a.href=`project.html?id=${p.id}`;
    a.innerHTML=`<div class="img" style="background-image:${bg(p)}"></div><div class="body"><div class="t">${p.name}</div><div class="m">${p.tag} · ${p.year}</div></div>`;
    host.appendChild(a);
  });
}

/* ---------- project detail ---------- */
function initProject(){
  const host=document.getElementById('project'); if(!host) return;
  const id=new URLSearchParams(location.search).get('id');
  const i=Math.max(0,PROJECTS.findIndex(p=>p.id===id));
  const p=PROJECTS[i]; const next=PROJECTS[(i+1)%PROJECTS.length];
  document.title=`${p.name} — Laragh Gallagher`;
  host.querySelector('.tag').textContent=p.tag;
  host.querySelector('h1').textContent=p.name;
  host.querySelector('.meta').innerHTML=`<div><b>Year</b>${p.year}</div><div><b>Role</b>${p.role}</div><div><b>Category</b>${p.tag}</div>`;
  document.querySelector('.proj-cover').style.backgroundImage=bg(p);
  document.querySelector('.proj-body').innerHTML=`<p>${p.blurb}</p><p>Replace this with the real story: the brief, your role, the idea, and the outcome. Add images below by editing project.html or this script.</p>`;
  const na=document.querySelector('.next a'); na.textContent=next.name; na.href=`project.html?id=${next.id}`;
}

/* ---------- scroll reveal (section + staggered children) ---------- */
function initReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }),{threshold:.12, rootMargin:'0px 0px -8% 0px'});

  document.querySelectorAll('.reveal, .rule').forEach(el=>io.observe(el));

  // stagger the items inside these groups so they cascade in
  document.querySelectorAll('.caps, .exp, .tools, .quotes, .car-meta').forEach(group=>{
    Array.from(group.children).forEach((child,i)=>{
      child.classList.add('r-item');
      child.style.transitionDelay=(i*0.09)+'s';
      io.observe(child);
    });
  });
}

/* ---------- sound toggle (visual placeholder) ---------- */
function initSound(){
  const snd=document.getElementById('sound'); if(!snd) return;
  snd.addEventListener('click',()=>{snd.classList.toggle('off');snd.lastChild.textContent=snd.classList.contains('off')?' SOUND OFF':' SOUND ON'});
}

/* ---------- hero illustration parallax (mouse + scroll) ---------- */
function initHeroArt(){
  const img=document.getElementById('hero-img'); if(!img) return;
  let mx=0,my=0,tx=0,ty=0,sy=0;
  if(!matchMedia('(hover:none)').matches){
    addEventListener('mousemove',e=>{
      tx=(e.clientX/innerWidth-0.5)*40;   // horizontal drift range (px)
      ty=(e.clientY/innerHeight-0.5)*30;  // vertical drift range (px)
    });
  }
  addEventListener('scroll',()=>{ sy=scrollY*0.12; });  // gentle scroll parallax
  (function loop(){
    mx+=(tx-mx)*.08; my+=(ty-my)*.08;
    img.style.transform=`translate3d(${mx.toFixed(1)}px,${(my+sy).toFixed(1)}px,0)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- small square cursor ---------- */
function initCursor(){
  if(matchMedia('(hover:none)').matches) return;
  const sq=document.createElement('div'); sq.className='cursor-sq'; document.body.appendChild(sq);
  let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
  addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY});
  (function loop(){ x+=(tx-x)*.18; y+=(ty-y)*.18; sq.style.left=x+'px'; sq.style.top=y+'px'; requestAnimationFrame(loop); })();
  // grow over clickable things
  document.querySelectorAll('a,button,.cap,.card,.cn,.tl').forEach(el=>{
    el.addEventListener('mouseenter',()=>sq.classList.add('big'));
    el.addEventListener('mouseleave',()=>sq.classList.remove('big'));
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  initLoader(); initHeroArt(); initIndex('work-index'); initGrid('work-grid'); initProject(); initReveal(); initSound(); initCursor();
});

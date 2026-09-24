const progress=document.getElementById('progress');
const navLinks=document.getElementById('navLinks');
const menu=document.getElementById('menu');
menu?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

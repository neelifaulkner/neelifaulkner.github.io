const data=window.siteContent;
const grid=document.querySelector('#story-grid');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
data.stories.forEach(s=>{
 const card=document.createElement('article');card.className='story-card';
 const action=s.url?`<a class="story-action" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">READ STORY ↗</a>`:`<span class="story-action muted">SELECTED WORK</span>`;
 card.innerHTML=`<div class="story-visual ${escapeHTML(s.visual)}"><span class="visual-no">${escapeHTML(s.number)}</span><span class="visual-label">THE BYLINE / ${escapeHTML(s.category)}</span></div><div class="story-paper"><p class="eyebrow red">${escapeHTML(s.category)}</p><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.description)}</p>${action}</div>`;
 grid.appendChild(card);
});
const social=document.querySelector('#social-links');data.socials.filter(s=>s.url).forEach(s=>{const a=document.createElement('a');a.href=s.url;a.textContent=s.label+' ↗';if(!s.url.startsWith('mailto:')){a.target='_blank';a.rel='noopener noreferrer'}social.appendChild(a)});
if(!social.children.length)social.innerHTML='<p class="small-note">Social profile links coming soon.</p>';
const email=document.querySelector('#email-link');if(data.email){email.href='mailto:'+data.email}else{email.removeAttribute('href');email.textContent='EMAIL LINK COMING SOON';email.classList.add('disabled')}
document.querySelector('#year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));

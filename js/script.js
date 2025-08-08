diff --git a//dev/null b/js/script.js
index 0000000000000000000000000000000000000000..665e760e7ab82147cbb72b460b2b50bf0bf69b9e 100644
--- a//dev/null
+++ b/js/script.js
@@ -0,0 +1,185 @@
+document.addEventListener('DOMContentLoaded', () => {
+  loadHeaderFooter();
+  initTheme();
+  initLanguage();
+  initFadeIn();
+  pageRouter();
+});
+
+function loadHeaderFooter(){
+ const header = document.getElementById('header');
+ const footer = document.getElementById('footer');
+ if(header){
+   header.innerHTML = `
+   <nav class="navbar">
+     <div class="logo"><a href="index.html">Maidaan</a></div>
+     <ul class="nav-links">
+       <li><a href="about.html" data-i18n="about">About Us</a></li>
+       <li><a href="book.html" data-i18n="book">Book Now</a></li>
+       <li><a href="players.html" data-i18n="players">Find Players</a></li>
+     </ul>
+     <div class="search"><input type="text" placeholder="Search..." aria-label="Search"></div>
+     <button id="theme-toggle" aria-label="Toggle Theme">🌓</button>
+     <select id="language-select" aria-label="Language">
+       <option value="en">EN</option>
+       <option value="hi">हिंदी</option>
+       <option value="es">ES</option>
+     </select>
+   </nav>`;
+ }
+ if(footer){
+   footer.innerHTML = `
+   <div class="footer-content">
+     <div class="footer-links">
+       <a href="mailto:info@maidaan.com" data-i18n="contact">Contact Us</a> |
+       <a href="signup.html" data-i18n="login">Login / Signup</a>
+     </div>
+     <div class="social">
+       <a href="#" aria-label="Instagram">IG</a>
+       <a href="#" aria-label="Twitter">TW</a>
+     </div>
+   </div>`;
+ }
+}
+
+function initTheme(){
+ const saved = localStorage.getItem('theme');
+ const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light';
+ setTheme(saved || preferDark);
+ document.getElementById('theme-toggle')?.addEventListener('click', () => {
+   const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
+   setTheme(newTheme);
+ });
+}
+
+function setTheme(theme){
+ document.body.dataset.theme = theme;
+ localStorage.setItem('theme', theme);
+}
+
+const translations = {
+ en:{about:'About Us',book:'Book Now',players:'Find Players',contact:'Contact Us',login:'Login / Signup',post:'Post Invite',chat:'Chat'},
+ hi:{about:'हमारे बारे में',book:'अभी बुक करें',players:'खिलाड़ी खोजें',contact:'संपर्क करें',login:'लॉगिन / साइनअप',post:'निमंत्रण पोस्ट करें',chat:'चैट'},
+ es:{about:'Sobre Nosotros',book:'Reserva',players:'Buscar Jugadores',contact:'Contáctenos',login:'Iniciar Sesión',post:'Publicar Invitación',chat:'Chat'}
+};
+
+function initLanguage(){
+ const select = document.getElementById('language-select');
+ const saved = localStorage.getItem('lang') || 'en';
+ if(select) select.value = saved;
+ setLanguage(saved);
+ select?.addEventListener('change', e => setLanguage(e.target.value));
+}
+
+function setLanguage(lang){
+ document.querySelectorAll('[data-i18n]').forEach(el => {
+   const key = el.dataset.i18n;
+   if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
+ });
+ localStorage.setItem('lang', lang);
+}
+
+function initFadeIn(){
+ const observer = new IntersectionObserver(entries=>{
+   entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
+ });
+ document.querySelectorAll('.section').forEach(sec=>observer.observe(sec));
+}
+
+function pageRouter(){
+ const bodyId = document.body.id;
+ if(bodyId === 'book') renderVenues();
+ if(bodyId === 'players') initPlayersPage();
+ if(bodyId === 'signup') initSignup();
+ if(bodyId === 'sport') initSportPage();
+}
+
+function renderVenues(){
+ const container = document.getElementById('venues');
+ if(!container) return;
+ venues.forEach(v => {
+   const card = document.createElement('div');
+   card.className = 'card';
+   card.innerHTML = `
+     <h3>${v.name}</h3>
+     <p>${v.location}</p>
+     <img src="${v.image}" alt="${v.name}">
+     <p>Price: ₹${v.price}/hr</p>
+     <p>Facilities: ${v.facilities.join(', ')}</p>
+     <p>Slots: ${v.slots.join(', ')}</p>
+     <iframe class="map" src="https://www.google.com/maps?q=${v.lat},${v.lng}&output=embed"></iframe>
+     <button onclick="window.location='payment.html'" data-i18n="book">Book Now</button>
+     <button onclick="window.location='players.html'" data-i18n="players">Find Players</button>
+   `;
+   container.appendChild(card);
+ });
+}
+
+function initPlayersPage(){
+ const list = document.getElementById('invite-list');
+ const form = document.getElementById('invite-form');
+ const chatBox = document.getElementById('chat-box');
+ const chatForm = document.getElementById('chat-form');
+ function renderInvites(){
+   list.innerHTML = '';
+   invites.forEach(i => {
+     const li = document.createElement('li');
+     li.textContent = i.detail;
+     list.appendChild(li);
+   });
+ }
+ function renderChat(){
+   chatBox.innerHTML = '';
+   chatMessages.forEach(m => {
+     const p = document.createElement('p');
+     p.textContent = `${m.user}: ${m.msg}`;
+     chatBox.appendChild(p);
+   });
+ }
+ renderInvites(); renderChat();
+ form?.addEventListener('submit', e=>{
+   e.preventDefault();
+   const sport = form.sport.value;
+   const detail = form.detail.value;
+   invites.push({sport, detail});
+   renderInvites();
+   form.reset();
+ });
+ chatForm?.addEventListener('submit', e=>{
+   e.preventDefault();
+   const msg = chatForm.message.value;
+   chatMessages.push({user:'You', msg});
+   renderChat();
+   chatForm.reset();
+ });
+}
+
+function initSignup(){
+ const form = document.getElementById('signup-form');
+ form?.addEventListener('submit', e=>{
+   e.preventDefault();
+   const name = form.name.value;
+   const email = form.email.value;
+   const pass = form.password.value;
+   const confirm = form.confirm.value;
+   if(pass !== confirm){ alert('Passwords do not match'); return; }
+   localStorage.setItem('user', JSON.stringify({name,email}));
+   localStorage.setItem('loggedIn','true');
+   alert('Signed up!');
+   window.location='index.html';
+ });
+}
+
+function initSportPage(){
+ const sportName = document.body.dataset.sport;
+ const list = document.getElementById('sport-venues');
+ const h1 = document.getElementById('sport-title');
+ h1.textContent = sportName.charAt(0).toUpperCase()+sportName.slice(1);
+ const filtered = venues.filter(v=>v.sport===sportName);
+ filtered.forEach(v=>{
+   const card = document.createElement('div');
+   card.className='card';
+   card.innerHTML = `<h3>${v.name}</h3><p>${v.location}</p><button onclick="window.location='payment.html'" data-i18n="book">Book</button>`;
+   list.appendChild(card);
+ });
+}

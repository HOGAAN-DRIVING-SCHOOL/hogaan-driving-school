// Hogaan Driving School — main.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  var toggle = document.querySelector(".navbar__toggle");
  var menu = document.querySelector(".navbar__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }


    // Gallery lightbox
    // Gallery lightbox (sawiro + muuqaalo)
  var box = document.getElementById("lightbox");
  if (box) {
    var boxImg = box.querySelector("img");
    var boxVideo = box.querySelector("video");
    document.querySelectorAll(".gallery__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var videoSrc = b.getAttribute("data-video");
        if (videoSrc) {
          boxImg.hidden = true;
          boxVideo.hidden = false;
          boxVideo.src = videoSrc;
          boxVideo.play();
        } else {
          var img = b.querySelector("img");
          boxVideo.hidden = true;
          boxImg.hidden = false;
          boxImg.src = img.src;
          boxImg.alt = img.alt;
        }
        box.showModal();
      });
    });
    box.addEventListener("click", function (e) {
      if (e.target !== boxVideo) box.close();
    });
    box.addEventListener("close", function () {
      boxVideo.pause();
      boxVideo.removeAttribute("src");
    });
  }


    // Registration form -> WhatsApp
  var form = document.getElementById("register-form");
  if (form) {
    var status = document.getElementById("register-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var text =
        "Salaan, waxaan rabaa inaan iska diiwaangeliyo Hogaan Driving School.\n" +
        "Magac: " + data.get("name").trim() + "\n" +
        "Foon: " + data.get("phone").trim() + "\n" +
        "Nooca gaariga: " + data.get("car") + "\n" +
        "Waqtiga casharka: " + data.get("time");      var url = "https://wa.me/252613693844?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
      status.textContent = "Mahadsanid! WhatsApp ayaa laguu furay, riix Send si aad u dirto fariinta.";
      form.reset();
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});



/* ===== Luqado (SO/EN/AR) + Iftiin/Madow ===== */
(function () {
  var LANGS = ["so", "en", "ar"];
  /* [English, Arabic] — Af-Soomaaliga waa qoraalka HTML-kaaga hadda jira */
  var T = {
    "meta.title": ["Hogaan Driving School | Learn to Drive Safely - Mogadishu", "مدرسة هوغان لتعليم القيادة | تعلّم القيادة بأمان - مقديشو"],
    "meta.desc": ["Hogaan Driving School, Mogadishu. Learn to drive safely with experienced instructors, modern cars and an official certificate.", "مدرسة هوغان لتعليم القيادة في مقديشو. تعلّم القيادة بأمان مع مدربين ذوي خبرة وسيارات حديثة وشهادة رسمية."],
    "nav.menu": ["Open menu", "فتح القائمة"],
    "nav.home": ["Home", "الرئيسية"],
    "nav.services": ["Services", "الخدمات"],
    "nav.about": ["About Us", "من نحن"],
    "nav.gallery": ["Gallery", "المعرض"],
    "nav.register": ["Registration", "التسجيل"],
    "nav.contact": ["Contact", "اتصل بنا"],
    "lang.label": ["Language", "اللغة"],
    "theme.toggle": ["Switch light / dark mode", "تبديل الوضع الفاتح / الداكن"],
    "hero.title": ["Learn to Drive Safely", "تعلّم قيادة السيارة بأمان"],
    "hero.cta": ["Register Now", "سجّل الآن"],
    "hero.services": ["Our Services", "خدماتنا"],
    "img.hero": ["An instructor teaching a student to drive inside a car", "مدرب يعلّم طالبة القيادة داخل السيارة"],
    "services.title": ["Our Services", "خدماتنا"],
    "svc.1": ["Experienced Instructors", "مدربون ذوو خبرة"],
    "svc.2": ["Modern Cars", "سيارات حديثة"],
    "svc.3": ["Official Certificate", "شهادة رسمية"],
    "about.title": ["About Us", "من نحن"],
    "about.intro": ["Hogaan Driving School is a driving school in Mogadishu, Hodan District – Dufle Hospital.", "مدرسة هوغان لتعليم القيادة تقع في مقديشو، حي هودان – مستشفى دوفلي."],
    "about.mission": ["Our Mission", "رسالتنا"],
    "about.mission.text": ["Providing quality and safe training, using experienced instructors and modern cars.", "تقديم تدريب عالي الجودة وآمن باستخدام مدربين ذوي خبرة وسيارات حديثة."],
    "about.vision": ["Our Vision", "رؤيتنا"],
    "about.vision.text": ["To create responsible drivers, so that Somalia's roads gain safety and a better future.", "أن نصنع سائقين مسؤولين، لتنعم طرق الصومال بالأمان ومستقبل أفضل."],
    "gallery.title": ["Gallery", "المعرض"],
    "gal.zoom": ["Enlarge photo", "تكبير الصورة"],
    "gal.play": ["Play video", "تشغيل الفيديو"],
    "gal.close": ["Close", "إغلاق"],
    "register.title": ["Registration", "التسجيل"],
    "form.name": ["Full name", "الاسم الكامل"],
    "form.phone": ["Phone number", "رقم الهاتف"],
    "form.car": ["Car type", "نوع السيارة"],
    "car.auto": ["Automatic", "أوتوماتيك"],
    "car.manual": ["Manual", "يدوي (جير)"],
    "form.time": ["Lesson time", "وقت الدرس"],
    "time.morning": ["Morning", "صباحًا"],
    "time.noon": ["Noon", "ظهرًا"],
    "time.afternoon": ["Afternoon", "عصرًا"],
    "time.night": ["Night", "ليلًا"],
    "contact.title": ["Contact", "اتصل بنا"],
    "contact.phone": ["Phone", "الهاتف"],
    "contact.location": ["Location", "الموقع"],
    "contact.location.value": ["Mogadishu, Hodan District – Dufle Hospital", "مقديشو، حي هودان – مستشفى دوفلي"],
    "contact.social": ["Social media", "وسائل التواصل"],
    "map.title": ["Hogaan Driving School map", "خريطة مدرسة هوغان لتعليم القيادة"],
    "map.open": ["Open map", "فتح الخريطة"],
    "footer.phone": ["Phone / WhatsApp", "الهاتف / واتساب"],
    "wa.float": ["Chat with us on WhatsApp", "تواصل معنا عبر واتساب"]
  };

  /* [selector, key, attribute (ikhtiyaari: haddii aan la qorin, qoraalka ayaa la beddelaa)] */
  var MAP = [
    ['.navbar__toggle', 'nav.menu', 'aria-label'],
    ['.navbar__menu a[href="#home"]', 'nav.home'],
    ['.navbar__menu a[href="#services"]', 'nav.services'],
    ['.navbar__menu a[href="#about"]', 'nav.about'],
    ['.navbar__menu a[href="#gallery"]', 'nav.gallery'],
    ['.navbar__menu a[href="#register"]', 'nav.register'],
    ['.navbar__menu a[href="#contact"]', 'nav.contact'],
    ['.lang-switch', 'lang.label', 'aria-label'],
    ['.theme-toggle', 'theme.toggle', 'aria-label'],
    ['.hero h1', 'hero.title'],
    ['.hero__actions .btn--primary', 'hero.cta'],
    ['.hero__actions .btn--secondary', 'hero.services'],
    ['.hero__image', 'img.hero', 'alt'],
    ['#services .section__title', 'services.title'],
    ['#services .cards > :nth-child(1) h3', 'svc.1'],
    ['#services .cards > :nth-child(2) h3', 'svc.2'],
    ['#services .cards > :nth-child(3) h3', 'svc.3'],
    ['#about .section__title', 'about.title'],
    ['#about .about-intro p:first-of-type', 'about.intro'],
    ['#about .about-intro img', 'img.hero', 'alt'],
    ['#about .mv__item:nth-child(1) h3', 'about.mission'],
    ['#about .mv__item:nth-child(1) p', 'about.mission.text'],
    ['#about .mv__item:nth-child(2) h3', 'about.vision'],
    ['#about .mv__item:nth-child(2) p', 'about.vision.text'],
    ['#about .about-intro .btn', 'hero.cta'],
    ['#gallery .section__title', 'gallery.title'],
    ['#gallery .gallery__item:first-child img', 'img.hero', 'alt'],
    ['.gallery__btn:not([data-video])', 'gal.zoom', 'aria-label'],
    ['.gallery__btn[data-video]', 'gal.play', 'aria-label'],
    ['.lightbox__close', 'gal.close', 'aria-label'],
    ['#register .section__title', 'register.title'],
    ['label[for="reg-name"]', 'form.name'],
    ['label[for="reg-phone"]', 'form.phone'],
    ['#register-form fieldset:nth-of-type(1) legend', 'form.car'],
    ['input[value="Automatic"] + span', 'car.auto'],
    ['input[value="Manual (Geer)"] + span', 'car.manual'],
    ['#register-form fieldset:nth-of-type(2) legend', 'form.time'],
    ['input[value="Subax"] + span', 'time.morning'],
    ['input[value="Duhur"] + span', 'time.noon'],
    ['input[value="Galab"] + span', 'time.afternoon'],
    ['input[value="Habeen"] + span', 'time.night'],
    ['#register-form button[type="submit"]', 'hero.cta'],
    ['#contact .section__title', 'contact.title'],
    ['#contact .contact__list > :nth-child(1) .contact__label', 'contact.phone'],
    ['#contact .contact__list > :nth-child(3) .contact__label', 'contact.location'],
    ['#contact .contact__list > :nth-child(3) strong', 'contact.location.value'],
    ['#contact .contact__list > :nth-child(4) .contact__label', 'contact.social'],
    ['#map-load span', 'map.open'],    
    ['.cta h2', 'hero.title'],
    ['.cta .btn', 'hero.cta'],
    ['.footer__grid > :nth-child(2) .footer__label', 'footer.phone'],
    ['.footer__grid > :nth-child(3) .footer__label', 'contact.location'],
    ['.footer__grid > :nth-child(3) .footer__value', 'contact.location.value'],
    ['.wa-float', 'wa.float', 'aria-label']
  ];

  document.addEventListener("DOMContentLoaded", function () {
    var items = [];
    MAP.forEach(function (m) {
      document.querySelectorAll(m[0]).forEach(function (el) {
        var attr = m[2] || null;
        items.push({ el: el, key: m[1], attr: attr, orig: attr ? el.getAttribute(attr) : el.textContent });
      });
    });
    var origTitle = document.title;
    var metaEl = document.querySelector('meta[name="description"]');
    var origDesc = metaEl ? metaEl.getAttribute("content") : "";

    // Lambarrada ha ahaadaan bidix-midig xitaa Carabiga
    document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"] strong, input[type="tel"]').forEach(function (el) {
      el.setAttribute("dir", "ltr");
    });

    function applyLang(lang) {
      var i = LANGS.indexOf(lang) - 1; // so = -1 (qoraalka asalka ah)
      var root = document.documentElement;
      root.lang = lang;
      root.dir = lang === "ar" ? "rtl" : "ltr";
      items.forEach(function (it) {
        var val = lang === "so" ? it.orig : T[it.key][i];
        if (it.attr) it.el.setAttribute(it.attr, val);
        else it.el.textContent = val;
      });
      document.title = lang === "so" ? origTitle : T["meta.title"][i];
      if (metaEl) metaEl.setAttribute("content", lang === "so" ? origDesc : T["meta.desc"][i]);
      document.querySelectorAll(".lang-switch button").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
      });
      try { localStorage.setItem("lang", lang); } catch (e) {}
    }

    var saved = "so";
    try { saved = localStorage.getItem("lang") || "so"; } catch (e) {}
    if (LANGS.indexOf(saved) === -1) saved = "so";
    applyLang(saved);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });

    // Iftiin / madow
    var themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }
  });
})();




/* ===== Khariidadda: ku shub marka la gujiyo ===== */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById("map-box");
    var btn = document.getElementById("map-load");
    if (!box || !btn) return;
    var titles = {
      so: "Khariidadda Hogaan Driving School",
      en: "Hogaan Driving School map",
      ar: "خريطة مدرسة هوغان لتعليم القيادة"
    };
    btn.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = box.getAttribute("data-src");
      f.title = titles[document.documentElement.lang] || titles.so;
      f.referrerPolicy = "no-referrer-when-downgrade";
      f.setAttribute("allowfullscreen", "");
      box.replaceChildren(f);
    });
  });
})();

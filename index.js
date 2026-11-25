(function () {
    /* =====================================================================
       CONFIGURAÇÃO PESSOAL — Edite apenas estes campos para personalizar tudo
       ===================================================================== */
    var PORTFOLIO_CONFIG = {
        githubUsername: "Rocsantos", // Ex.: "rodrigosantos" (ativa busca automática de repos)
        linkedinUrl: "https://www.linkedin.com/in/rodrigosantossoftware",
        email: "rodrigocarvalho4675@gmail.com",
        whatsappNumber: "5561986047140", // DDI + DDD + Número (apenas dígitos)
        whatsappDisplay: "WhatsApp · (61) 98604-7140"
    };

    // Aplica links configurados em toda a página
    var ghUrl = "https://github.com/" + PORTFOLIO_CONFIG.githubUsername;
    document.querySelectorAll('[data-link="github"]').forEach(function (el) { el.href = ghUrl; });
    document.querySelectorAll('[data-link="linkedin"]').forEach(function (el) { el.href = PORTFOLIO_CONFIG.linkedinUrl; });

    var emailBtn = document.getElementById("emailBtn");
    if (emailBtn) {
        emailBtn.href = "mailto:" + PORTFOLIO_CONFIG.email;
        emailBtn.textContent = PORTFOLIO_CONFIG.email;
    }
    var whatsBtn = document.getElementById("whatsBtn");
    if (whatsBtn) {
        whatsBtn.href = "https://wa.me/" + PORTFOLIO_CONFIG.whatsappNumber;
        whatsBtn.textContent = PORTFOLIO_CONFIG.whatsappDisplay;
    }
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Alternador de Tema (Claro / Dracula Dark)
    var root = document.documentElement;
    var themeBtn = document.getElementById("themeToggle");
    var savedTheme = localStorage.getItem("rs-theme");
    if (savedTheme) root.setAttribute("data-theme", savedTheme);

    function updateThemeLabel() {
        var isDark = root.getAttribute("data-theme") === "dark" ||
            (!root.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
        themeBtn.textContent = isDark ? "☀ Claro" : "☾ Dracula";
    }
    updateThemeLabel();

    themeBtn.addEventListener("click", function () {
        var isDark = root.getAttribute("data-theme") === "dark" ||
            (!root.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
        var next = isDark ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("rs-theme", next);
        updateThemeLabel();
    });

    // Busca automática de repositórios públicos via API do GitHub
    if (PORTFOLIO_CONFIG.githubUsername && PORTFOLIO_CONFIG.githubUsername !== "SEU-USUARIO") {
        fetch("https://api.github.com/users/" + encodeURIComponent(PORTFOLIO_CONFIG.githubUsername) + "/repos?sort=updated&per_page=6")
            .then(function (r) { return r.ok ? r.json() : null; })
            .then(function (repos) {
                if (!Array.isArray(repos) || !repos.length) return;
                var filtered = repos.filter(function (repo) { return !repo.fork; }).slice(0, 6);
                if (!filtered.length) return;

                var grid = document.getElementById("repoGrid");
                var status = document.getElementById("ghStatus");
                var repoCount = document.getElementById("repoCount");

                if (repoCount) repoCount.textContent = repos.length + "+";
                if (status) status.textContent = "Sincronizado em tempo real com @" + PORTFOLIO_CONFIG.githubUsername;

                grid.innerHTML = filtered.map(function (repo) {
                    var desc = repo.description || "Repositório técnico de engenharia de software e desenvolvimento.";
                    var lang = repo.language || "Software Engineering";
                    var stars = repo.stargazers_count > 0 ? " · ★ " + repo.stargazers_count : "";
                    return (
                        '<div class="item reveal in">' +
                        '<div class="kind">GitHub' + stars + '</div>' +
                        '<h4><a href="' + repo.html_url + '" target="_blank" rel="noopener">' + repo.name + '</a></h4>' +
                        '<p>' + desc + '</p>' +
                        '<div class="langs">' + lang + '</div>' +
                        '</div>'
                    );
                }).join("");
            })
            .catch(function () { });
    }

    // Animação de entrada e contagem numérica
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = document.querySelectorAll(".reveal, .term, [data-count]");

    function countUp(el) {
        var end = parseInt(el.getAttribute("data-count"), 10);
        var suf = el.getAttribute("data-suffix") || "";
        var pre = el.getAttribute("data-prefix") || "";
        if (reduce || isNaN(end)) return;
        var t0 = null, dur = 1300;
        function step(t) {
            if (!t0) t0 = t;
            var p = Math.min((t - t0) / dur, 1);
            var e = 1 - Math.pow(1 - p, 3);
            el.textContent = pre + Math.round(end * e) + suf;
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    if ("IntersectionObserver" in window && !reduce) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                var el = en.target;
                el.classList.add("in");
                if (el.hasAttribute("data-count")) countUp(el);
                io.unobserve(el);
            });
        }, { rootMargin: "0px 0px -6% 0px", threshold: 0 });
        targets.forEach(function (el) { io.observe(el); });
    }

    // Barra de progresso de leitura + destaque da seção ativa na navbar
    var bar = document.getElementById("progress");
    var links = Array.prototype.slice.call(document.querySelectorAll(".links a"));
    var secs = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
    var ticking = false;

    function onScroll() {
        var h = document.documentElement;
        var max = h.scrollHeight - h.clientHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
        var cur = -1;
        secs.forEach(function (s, i) {
            if (s && s.getBoundingClientRect().top < 170) cur = i;
        });
        links.forEach(function (a, i) { a.classList.toggle("active", i === cur); });
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(onScroll);
        }
    }, { passive: true });
    onScroll();
})();
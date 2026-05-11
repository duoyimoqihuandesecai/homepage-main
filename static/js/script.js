console.log(
    "%cCopyright © 2024 zyyo.net",
    "background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;"
);

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

var projectExperiences = [
    {
        title: "Aster BI Cockpit",
        subtitle: "Cross-border retail data command center",
        period: "2025",
        category: "data",
        summary: "Built a unified operations cockpit for multi-platform orders, ads, inventory, and after-sales alerts. The interface helped operations teams find margin drift and restock risk in one screen.",
        metrics: [
            { value: "18 min", label: "reporting time cut" },
            { value: "+23%", label: "restock accuracy" }
        ],
        tags: ["Vue 3", "ECharts", "ClickHouse", "ETL", "Dashboard"],
        keywords: ["retail", "finance", "inventory", "visualization"]
    },
    {
        title: "Northstar Ops Console",
        subtitle: "Internal DevOps release and incident workspace",
        period: "2024",
        category: "ops",
        summary: "Designed a release console that stitched CI logs, deployment approvals, rollback notes, and service health into one workflow. It reduced context switching during release nights.",
        metrics: [
            { value: "-41%", label: "rollback handling time" },
            { value: "7 teams", label: "shared on-call usage" }
        ],
        tags: ["React", "Node.js", "GitHub Actions", "Sentry", "Release"],
        keywords: ["deploy", "incident", "monitoring", "automation"]
    },
    {
        title: "EchoMind Sales Copilot",
        subtitle: "AI assistant for presales knowledge retrieval",
        period: "2025",
        category: "ai",
        summary: "Created a retrieval-based assistant that answered product capability, pricing logic, and implementation questions from internal docs, proposal decks, and API notes for presales consultants.",
        metrics: [
            { value: "82%", label: "first-answer hit rate" },
            { value: "3.6x", label: "proposal prep speed" }
        ],
        tags: ["OpenAI API", "RAG", "Embeddings", "Next.js", "Search"],
        keywords: ["assistant", "knowledge base", "llm", "copilot"]
    },
    {
        title: "PulseFit Mini App",
        subtitle: "Mobile membership and class booking experience",
        period: "2024",
        category: "mobile",
        summary: "Built a lightweight mobile flow for class booking, coach schedules, reminder messages, and membership renewals. The product was tuned for repeat visits and quick one-thumb use.",
        metrics: [
            { value: "62%", label: "weekly active members" },
            { value: "+19%", label: "renewal conversion" }
        ],
        tags: ["UniApp", "WeChat", "Booking", "CRM", "Notifications"],
        keywords: ["fitness", "member", "booking", "wechat"]
    },
    {
        title: "Lumen Commerce Studio",
        subtitle: "Merchant storefront builder with theme presets",
        period: "2023",
        category: "commerce",
        summary: "Shipped a storefront builder for small merchants with visual blocks, SKU modules, order widgets, and campaign landing templates, aimed at fast seasonal launches.",
        metrics: [
            { value: "120+", label: "merchant launches" },
            { value: "2.4 days", label: "average go-live time" }
        ],
        tags: ["TypeScript", "SSR", "CMS", "Theme Engine", "Payments"],
        keywords: ["merchant", "storefront", "template", "campaign"]
    },
    {
        title: "SignalRisk Monitor",
        subtitle: "AI-assisted fraud review triage platform",
        period: "2025",
        category: "ai",
        summary: "Developed a review queue that combined rule outputs, anomaly signals, and model explanations so analysts could prioritize suspicious behavior faster and leave audit-friendly notes.",
        metrics: [
            { value: "-33%", label: "manual review backlog" },
            { value: "94%", label: "traceable decisions" }
        ],
        tags: ["Python", "FastAPI", "Scoring", "Audit", "Queue"],
        keywords: ["risk", "fraud", "review", "model"]
    }
];

function handlePress() {
    this.classList.add("pressed");
}

function handleRelease() {
    this.classList.remove("pressed");
}

function handleCancel() {
    this.classList.remove("pressed");
}

function bindPressableCards() {
    var buttons = document.querySelectorAll(".projectItem");
    buttons.forEach(function (button) {
        button.addEventListener("mousedown", handlePress);
        button.addEventListener("mouseup", handleRelease);
        button.addEventListener("mouseleave", handleCancel);
        button.addEventListener("touchstart", handlePress);
        button.addEventListener("touchend", handleRelease);
        button.addEventListener("touchcancel", handleCancel);
    });
}

function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function pop(imageURL) {
    var tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName("tc");
var tcMain = document.getElementsByClassName("tc-main");
tc[0].addEventListener("click", function () {
    pop();
});
tcMain[0].addEventListener("click", function (event) {
    event.stopPropagation();
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function createMetricHtml(metric) {
    return (
        '<div class="experienceMetric">' +
        "<strong>" + escapeHtml(metric.value) + "</strong>" +
        "<span>" + escapeHtml(metric.label) + "</span>" +
        "</div>"
    );
}

function createTagHtml(tag) {
    return '<span class="experienceTag">' + escapeHtml(tag) + "</span>";
}

function createExperienceCardHtml(item) {
    return (
        '<article class="experienceCard">' +
        '<div class="experienceTop">' +
        '<div class="experienceTitle">' +
        "<h3>" + escapeHtml(item.title) + "</h3>" +
        "<p>" + escapeHtml(item.subtitle) + "</p>" +
        "</div>" +
        '<span class="experienceBadge">' + escapeHtml(item.period) + "</span>" +
        "</div>" +
        '<p class="experienceDesc">' + escapeHtml(item.summary) + "</p>" +
        '<div class="experienceHighlights">' + item.metrics.map(createMetricHtml).join("") + "</div>" +
        '<div class="experienceTags">' + item.tags.map(createTagHtml).join("") + "</div>" +
        "</article>"
    );
}

function setupExperienceSearch() {
    var listElement = document.getElementById("projectExperienceList");
    var searchInput = document.getElementById("projectSearch");
    var filters = document.getElementById("projectFilters");
    var resultText = document.getElementById("projectResultText");
    var activeFilter = "all";

    if (!listElement || !searchInput || !filters || !resultText) {
        return;
    }

    function getMatches() {
        var query = searchInput.value.trim().toLowerCase();
        return projectExperiences.filter(function (item) {
            var matchesFilter = activeFilter === "all" || item.category === activeFilter;
            if (!matchesFilter) {
                return false;
            }
            if (!query) {
                return true;
            }
            var haystack = [
                item.title,
                item.subtitle,
                item.summary,
                item.period,
                item.category,
                item.tags.join(" "),
                item.keywords.join(" ")
            ].join(" ").toLowerCase();
            return haystack.indexOf(query) !== -1;
        });
    }

    function render() {
        var matches = getMatches();
        if (!matches.length) {
            listElement.innerHTML = '<div class="experienceEmpty">没有找到匹配的项目经历，试试别的关键词。</div>';
            resultText.textContent = "0 个项目经历";
            return;
        }
        listElement.innerHTML = matches.map(createExperienceCardHtml).join("");
        resultText.textContent = matches.length + " 个项目经历";
    }

    filters.addEventListener("click", function (event) {
        var button = event.target.closest(".filterChip");
        if (!button) {
            return;
        }
        activeFilter = button.getAttribute("data-filter") || "all";
        filters.querySelectorAll(".filterChip").forEach(function (chip) {
            chip.classList.toggle("active", chip === button);
        });
        render();
    });

    searchInput.addEventListener("input", render);
    render();
}

document.addEventListener("DOMContentLoaded", function () {
    var html = document.querySelector("html");
    var themeState = getCookie("themeState") || "Light";
    var tanChiShe = document.getElementById("tanChiShe");
    var checkbox = document.getElementById("myonoffswitch");

    function changeTheme(theme) {
        tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
        html.dataset.theme = theme;
        setCookie("themeState", theme, 365);
        themeState = theme;
    }

    checkbox.addEventListener("change", function () {
        if (themeState === "Dark") {
            changeTheme("Light");
        } else {
            changeTheme("Dark");
        }
    });

    if (themeState === "Dark") {
        checkbox.checked = false;
    }

    changeTheme(themeState);
    bindPressableCards();
    setupExperienceSearch();

    var fpsElement = document.createElement("div");
    fpsElement.id = "fps";
    fpsElement.style.zIndex = "10000";
    fpsElement.style.position = "fixed";
    fpsElement.style.left = "0";
    document.body.insertBefore(fpsElement, document.body.firstChild);

    (function showFPS() {
        var requestAnimationFrameFn = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        var fps = 0;
        var last = Date.now();

        function step() {
            var offset = Date.now() - last;
            fps += 1;

            if (offset >= 1000) {
                last += offset;
                fpsElement.textContent = "FPS: " + fps;
                fps = 0;
            }

            requestAnimationFrameFn(step);
        }

        step();
    })();
});

var pageLoading = document.querySelector("#zyyo-loading");
window.addEventListener("load", function () {
    setTimeout(function () {
        pageLoading.style.opacity = "0";
    }, 100);
});

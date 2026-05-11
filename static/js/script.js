console.log(
    "%cCopyright © 2024 zyyo.net",
    "background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;"
);

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

var projectExperiences = [
    {
        title: "星图零售数据驾驶舱",
        subtitle: "跨境零售经营分析平台",
        period: "2025",
        category: "data",
        summary: "搭建多平台订单、广告、库存和售后预警的一体化经营驾驶舱，让运营团队可以在一个页面里快速定位毛利波动和补货风险。",
        metrics: [
            { value: "18 分钟", label: "日报生成耗时缩短" },
            { value: "+23%", label: "补货预测准确率提升" }
        ],
        tags: ["Vue 3", "ECharts", "ClickHouse", "ETL", "经营看板"],
        keywords: ["零售", "财务", "库存", "数据可视化"]
    },
    {
        title: "北极星发布控制台",
        subtitle: "内部 DevOps 发布与故障协同台",
        period: "2024",
        category: "ops",
        summary: "设计了一套把 CI 日志、部署审批、回滚记录和服务健康状态串起来的发布控制台，显著减少了发版夜里的来回切屏和沟通成本。",
        metrics: [
            { value: "-41%", label: "回滚处理时间缩短" },
            { value: "7 个团队", label: "共用值班流程" }
        ],
        tags: ["React", "Node.js", "GitHub Actions", "Sentry", "发布系统"],
        keywords: ["部署", "事故", "监控", "自动化"]
    },
    {
        title: "回声预售智能助理",
        subtitle: "售前知识问答与资料检索助手",
        period: "2025",
        category: "ai",
        summary: "基于内部文档、方案模板和 API 说明构建检索增强问答助手，帮助售前快速回答产品能力、报价逻辑和实施方案问题。",
        metrics: [
            { value: "82%", label: "首轮回答命中率" },
            { value: "3.6 倍", label: "方案准备速度提升" }
        ],
        tags: ["OpenAI API", "RAG", "向量检索", "Next.js", "知识库"],
        keywords: ["助手", "知识库", "大模型", "问答"]
    },
    {
        title: "脉动健身小程序",
        subtitle: "会员预约与课程管理移动端",
        period: "2024",
        category: "mobile",
        summary: "搭建面向健身门店的预约、教练排班、提醒通知和会员续费流程，重点优化高频打开场景下的单手操作体验。",
        metrics: [
            { value: "62%", label: "会员周活跃率" },
            { value: "+19%", label: "续费转化率提升" }
        ],
        tags: ["UniApp", "微信生态", "预约系统", "CRM", "消息通知"],
        keywords: ["健身", "会员", "预约", "微信"]
    },
    {
        title: "流光商城搭建器",
        subtitle: "商家店铺装修与活动页生成平台",
        period: "2023",
        category: "commerce",
        summary: "为中小商家上线可视化店铺装修平台，支持楼层模块、SKU 组件、订单挂件和活动页模板，适合节日大促快速上线。",
        metrics: [
            { value: "120+", label: "商家上线数量" },
            { value: "2.4 天", label: "平均搭建上线周期" }
        ],
        tags: ["TypeScript", "SSR", "CMS", "主题引擎", "支付接入"],
        keywords: ["商家", "店铺", "模板", "活动页"]
    },
    {
        title: "信号风控审核台",
        subtitle: "AI 辅助风险排查与审核分流平台",
        period: "2025",
        category: "ai",
        summary: "开发融合规则命中、异常信号和模型解释的审核队列，帮助风控人员更快确定优先级，并沉淀可追溯的审核说明。",
        metrics: [
            { value: "-33%", label: "人工审核积压下降" },
            { value: "94%", label: "审核结论可追溯" }
        ],
        tags: ["Python", "FastAPI", "评分引擎", "审计留痕", "审核队列"],
        keywords: ["风控", "欺诈", "审核", "模型"]
    },
    {
        title: "青岚客服质检平台",
        subtitle: "语音转写与服务质量抽检系统",
        period: "2024",
        category: "ai",
        summary: "围绕客服录音转写、违规话术识别和质检评分搭建后台，支持按门店、坐席和时间维度复盘服务表现。",
        metrics: [
            { value: "91%", label: "违规话术识别率" },
            { value: "5 倍", label: "质检抽检效率提升" }
        ],
        tags: ["语音识别", "质检", "规则引擎", "报表"],
        keywords: ["客服", "录音", "语音", "质检"]
    },
    {
        title: "云桥供应链协同平台",
        subtitle: "采购、仓配与供应商对账系统",
        period: "2023",
        category: "data",
        summary: "打通采购申请、入库回传、物流节点和月度对账流程，让供应商、仓库和财务围绕同一份数据协同工作。",
        metrics: [
            { value: "-28%", label: "异常单据处理时长" },
            { value: "99.2%", label: "对账匹配准确率" }
        ],
        tags: ["供应链", "对账", "ERP 对接", "报表"],
        keywords: ["采购", "仓储", "物流", "财务"]
    },
    {
        title: "松果校园报名系统",
        subtitle: "活动报名、签到与通知一体化平台",
        period: "2022",
        category: "mobile",
        summary: "面向校园活动构建报名、名额控制、现场签到和消息提醒功能，支持社团和学院在高峰期快速组织大型活动。",
        metrics: [
            { value: "3 万+", label: "累计报名人次" },
            { value: "0.8 秒", label: "签到平均响应时间" }
        ],
        tags: ["小程序", "报名系统", "二维码签到", "通知"],
        keywords: ["校园", "活动", "报名", "签到"]
    },
    {
        title: "极昼直播带货后台",
        subtitle: "直播排期、商品池与转化分析系统",
        period: "2024",
        category: "commerce",
        summary: "为直播业务搭建排期、商品编组、优惠策略和成交复盘后台，支持主播团队快速调整选品和促销方案。",
        metrics: [
            { value: "+26%", label: "场均成交转化提升" },
            { value: "40%", label: "排期沟通成本下降" }
        ],
        tags: ["直播电商", "商品池", "优惠策略", "复盘"],
        keywords: ["直播", "带货", "商品", "转化"]
    },
    {
        title: "昼夜机房巡检中心",
        subtitle: "服务器巡检与告警处理面板",
        period: "2023",
        category: "ops",
        summary: "集中展示机器状态、磁盘水位、服务告警和处理记录，支持值班人员在一个面板里查看每日巡检任务完成情况。",
        metrics: [
            { value: "-52%", label: "巡检汇总时间缩短" },
            { value: "100%", label: "异常告警留痕率" }
        ],
        tags: ["巡检", "告警中心", "运维面板", "日志"],
        keywords: ["机房", "服务器", "告警", "巡检"]
    },
    {
        title: "知行内容分发平台",
        subtitle: "多渠道文章发布与效果追踪系统",
        period: "2025",
        category: "data",
        summary: "搭建内容选题、排期、渠道发布和阅读数据追踪平台，帮助运营统一管理公众号、社区和官网内容节奏。",
        metrics: [
            { value: "12 个渠道", label: "统一发布管理" },
            { value: "+31%", label: "内容复用效率提升" }
        ],
        tags: ["内容运营", "排期", "渠道分发", "分析"],
        keywords: ["内容", "文章", "发布", "运营"]
    },
    {
        title: "栖木预约到店系统",
        subtitle: "本地生活门店预约与核销平台",
        period: "2024",
        category: "mobile",
        summary: "为本地生活商家设计预约、到店核销、优惠券和用户评价闭环，覆盖美容、摄影和轻服务类门店场景。",
        metrics: [
            { value: "+22%", label: "到店履约率提升" },
            { value: "15 万+", label: "累计预约订单" }
        ],
        tags: ["到店服务", "预约", "核销", "评价体系"],
        keywords: ["门店", "本地生活", "预约", "到店"]
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

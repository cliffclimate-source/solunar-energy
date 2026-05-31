import type { PageContent } from '@/content/types';

/**
 * Additional Simplified-Chinese pages: the 9 Solution pages and 5 Technology
 * pages. Focused structure (problem → how we help → key points → CTA) for
 * conversion clarity. Rendered via StandardPage under /zh.
 */

const home = { name: '首页', path: '/zh' };

// ─── Solutions ───────────────────────────────────────────────────────────────

export const zhCommercialIndustrial: PageContent = {
  slug: '/zh/commercial-industrial-bess-malaysia',
  seoTitle: '工商业储能（C&I BESS）马来西亚 | Solunar',
  metaDescription:
    'Solunar 为马来西亚的工厂、商场与商业楼宇设计工商业储能——削峰、扩容、太阳能自用、备电与韧性。',
  navLabel: '工商业储能',
  parent: home,
  eyebrow: '解决方案 · 工商业',
  h1: '降低最大需量费用，扩展用电容量，增强能源韧性',
  lead: 'Solunar 帮助工厂、商业楼宇、工业设施与大型用电户部署先进的电池储能系统，以降低尖峰需量、支持扩容并改善用电成本控制。',
  heroActions: [{ label: '咨询我们的储能团队', href: '/zh/contact' }],
  image: { src: '/images/commercial-industrial-bess.png', alt: '马来西亚工厂旁的工商业储能机柜与屋顶太阳能', aspect: '4 / 3' },
  primaryKeyword: '工商业储能 马来西亚',
  schema: { type: 'Service', serviceType: 'Commercial and industrial BESS support' },
  blocks: [
    {
      kind: 'prose',
      heading: '电费已不再只关乎用电量',
      paragraphs: [
        '对马来西亚许多工商业用户而言，电费已不再仅取决于用电量。最大需量费用、有限的进线容量与电网升级成本，共同决定了真实的用电成本。',
        '随着工厂扩产、增设机器、加装 EV 充电或提升制冷负荷，许多场所都会遇到同一道墙：可用电力不足，而升级既昂贵、缓慢又复杂。',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: '工商业用户面临的挑战',
      lead: '马来西亚的工商业场所普遍承受以下压力：',
      items: ['更高的最大需量费用', '进线容量有限', '昂贵的 TNB 增容要求', '停电带来的运营风险', '整合太阳能、EV 充电与电气化的压力', '难以为大额前期投资辩护'],
    },
    {
      kind: 'image', src: '/images/ci-detail.png', alt: '工厂与商场屋顶太阳能旁的工商业储能机柜', aspect: '16 / 9',
      caption: '在用电端储能——削减需量费用、提升太阳能自用率并增强韧性。',
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: '工商业储能能为您做什么',
      lead: '精心设计的系统能将能源从固定成本转变为可管理的资产：',
      items: ['通过削峰降低最大需量费用', '储存太阳能并在高需量时段放电', '无需立即升级电网即可支持扩容', '改善关键运营的电力稳定性', '为未来的 EV 充电与电气化做准备', '提升能源韧性与业务连续性'],
    },
    {
      kind: 'cta',
      heading: '您的电费在变，用电需求在增长。',
      text: '与 Solunar 洽谈工商业储能如何帮助您的业务降低成本、扩展容量并迎接电气化的下一阶段。',
      actions: [{ label: '咨询我们的储能团队', href: '/zh/contact' }, { label: '了解削峰原理', href: '/zh/solutions' }],
    },
  ],
};

export const zhPeakShaving: PageContent = {
  slug: '/zh/peak-shaving-malaysia',
  seoTitle: '最大需量削峰 马来西亚 | 储能 | Solunar',
  metaDescription: '用电池储能降低最大需量费用。了解储能削峰如何在马来西亚为工厂、商场、冷库与数据中心节省成本。',
  navLabel: '最大需量削峰',
  parent: home,
  eyebrow: '解决方案 · 削峰',
  h1: '用电池储能削减最大需量费用',
  lead: '削峰是指利用电池在高负荷时段放电，使场所在尖峰时从电网少取电——从而降低电费中的最大需量费用。',
  heroActions: [{ label: '分析我的需量节省', href: '/zh/contact' }],
  image: { src: '/images/peak-shaving.png', alt: '支持马来西亚工厂尖峰需量的电池储能机柜', aspect: '4 / 3' },
  primaryKeyword: '最大需量削峰 马来西亚',
  schema: { type: 'Service', serviceType: 'Maximum demand peak shaving with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: '什么是最大需量？',
      paragraphs: [
        '最大需量是计费周期内从电网取用的最高功率，通常以千瓦（kW）计。即使尖峰只持续很短时间，也会设定计费需量——例如多台机器同时启动。',
        '对工厂和商业楼宇而言，这正是需量管理至关重要的原因。',
      ],
    },
    {
      kind: 'steps',
      heading: '储能削峰如何运作',
      lead: '储能削峰遵循一个由 EMS 管理的简单、可重复循环：',
      items: [
        { title: 'EMS 监测负荷', text: 'EMS 持续监测场所负荷。' },
        { title: '电池充电', text: '在合适时段电池充电。' },
        { title: '负荷出现尖峰', text: '高负荷时段场所需量飙升。' },
        { title: '电池放电', text: '电池放电以支撑尖峰。' },
        { title: '降低电网尖峰', text: '电网需量峰值被削减。' },
        { title: '更优成本控制', text: '客户改善能源成本控制。' },
      ],
    },
    {
      kind: 'image', src: '/images/peakshaving-detail.png', alt: '管理尖峰需量的商业储能机柜与配电室', aspect: '16 / 9',
      caption: 'EMS 在需量尖峰时放电，使电网看到更低、更便宜的最大需量。',
    },
    {
      kind: 'note', text: '实际节省取决于场所负荷曲线、电价、系统规模与运行策略。Solunar 按场所建模，而非承诺固定数字。',
    },
    {
      kind: 'cta',
      heading: '想了解您的需量节省潜力？',
      text: 'Solunar 依据您真实的负荷曲线与电价按场所建模削峰——不作固定承诺，只做分析。',
      actions: [{ label: '分析我的需量节省', href: '/zh/contact' }, { label: '查看工商业储能', href: '/zh/commercial-industrial-bess-malaysia' }],
    },
  ],
};

export const zhPowerExpansion: PageContent = {
  slug: '/zh/power-expansion-bess',
  seoTitle: '储能扩容 马来西亚 | Solunar Energy',
  metaDescription: '需要更多电力但电网升级缓慢？储能可为马来西亚的工厂、数据中心与 EV 充电支持额外的尖峰需量。',
  navLabel: '储能扩容',
  parent: home,
  eyebrow: '解决方案 · 扩容',
  h1: '需要更多电力？储能可在马来西亚支持增长',
  lead: '当场所所需电力超过电网连接容量时，储能可按需提供额外的尖峰电力——在规划长期电网升级的同时支持扩容。',
  heroActions: [{ label: '评估储能扩容方案', href: '/zh/contact' }],
  image: { src: '/images/power-expansion.png', alt: '配备储能与 EV 充电、支持扩容的工厂与数据中心', aspect: '4 / 3' },
  primaryKeyword: '储能扩容 马来西亚',
  schema: { type: 'Service', serviceType: 'Power expansion with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: '为何用储能扩容？',
      paragraphs: [
        '工厂、数据中心、EV 充电枢纽与工业设施常常因扩张而需要更多电力，但电网升级可能耗时。储能可在过渡期内支持额外的尖峰需量。',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: '扩容应用场景',
      lead: '常见的扩容应用包括：',
      items: ['生产线扩展', '新增机器', '冷库扩容', 'EV 充电负荷', '数据中心负荷增长', '临时供电支持', '尖峰时段支持'],
    },
    {
      kind: 'image', src: '/images/powerexpansion-detail.png', alt: '配备变压器、开关柜与储能集装箱、支持工厂扩容的工业电气场地', aspect: '16 / 9',
      caption: '储能按需增加可用尖峰电力——在规划长期电网升级的同时立即扩产。',
    },
    {
      kind: 'cta',
      heading: '增长速度超过电网连接容量？',
      text: 'Solunar 可评估储能能否在规划长期电网升级的同时，支持您额外的尖峰需量。',
      actions: [{ label: '评估储能扩容方案', href: '/zh/contact' }, { label: '查看我们服务的行业', href: '/zh/solutions' }],
    },
  ],
};

export const zhUtilityScale: PageContent = {
  slug: '/zh/utility-scale-ess-malaysia',
  seoTitle: '公用事业级储能 马来西亚 | LSS、CRESS 与电网级 BESS | Solunar',
  metaDescription: 'Solunar 为 LSS、CRESS 与并网项目提供可融资的公用事业级储能方案——电池选型、PCS/EMS/SCADA、并网合规、安全与运维。',
  navLabel: '公用事业级储能电站',
  parent: home,
  eyebrow: '解决方案 · 公用事业级',
  h1: '面向大型太阳能、CRESS、LSS 与并网项目的可融资储能',
  lead: 'Solunar 以集成的公用事业级储能系统方案，支持开发商、EPCC、基础设施基金、公用事业公司与资产持有者交付大型可再生能源与并网项目。',
  heroActions: [{ label: '探讨公用事业级储能支持', href: '/zh/contact' }],
  image: { src: '/images/utility-scale-ess.png', alt: '马来西亚太阳能电站旁成排的公用事业级储能集装箱', aspect: '4 / 3' },
  primaryKeyword: '公用事业级储能 马来西亚',
  schema: { type: 'Service', serviceType: 'Utility-scale ESS technology support' },
  blocks: [
    {
      kind: 'prose',
      heading: '市场机遇',
      paragraphs: [
        '马来西亚的可再生能源行业正进入新阶段。随着大型太阳能、CRESS、数据中心用电需求与并网可再生项目增长，储能正成为电力基础设施生态中的关键一环。',
        '仅靠太阳能已不够。市场如今需要能管理间歇性、改善电网稳定、支持可调度并强化项目经济性的方案——这正是公用事业级储能的价值所在。',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: '我们提供的内容',
      lead: 'Solunar 的公用事业级储能方案可涵盖：',
      items: ['电池系统选型', '集装箱式储能方案', 'PCS 集成', 'EMS 与 SCADA 集成', '并网合规支持', '太阳能 + 储能系统架构', '消防安全与保护系统规划', '性能监控框架', '调试支持', '运维规划', '保修与生命周期支持', '融资与投资人支持文档'],
    },
    {
      kind: 'image', src: '/images/utility-detail.png', alt: '太阳能电站旁成排公用事业级储能集装箱的鸟瞰图', aspect: '16 / 9',
      caption: '为并网合规、规模化安全与 10–15 年寿命而设计的兆瓦时级储能资产。',
    },
    {
      kind: 'cta',
      heading: '公用事业级储能正成为可再生能源基础设施的支柱。',
      text: '与 Solunar 携手设计、集成并运营更安全、更智能、更具融资可行性的储能电站。',
      actions: [{ label: '探讨您的储能电站项目', href: '/zh/contact' }, { label: '面向开发商与资产持有者', href: '/zh/solar-bess-developers' }],
    },
  ],
};

export const zhBessOm: PageContent = {
  slug: '/zh/bess-om-malaysia',
  seoTitle: '储能运维（O&M）马来西亚 | ESS 运营与维护 | Solunar',
  metaDescription: '以专业的储能运维保护您的 BESS 投资。Solunar 监控电池健康、温度、软件与安全系统，服务工商业及公用事业级储能。',
  navLabel: '储能项目运维',
  parent: home,
  eyebrow: '解决方案 · 运维',
  h1: '以专业的储能运维保护您的 BESS 投资',
  lead: 'Solunar 为商业、工业及公用事业级储能项目提供运维支持，帮助资产持有者维持安全、性能、可用率与长期系统价值。',
  heroActions: [{ label: '索取储能运维方案', href: '/zh/contact' }],
  image: { src: '/images/bess-om.png', alt: '工程师在马来西亚进行储能集装箱运维检查', aspect: '4 / 3' },
  primaryKeyword: '储能运维 马来西亚',
  schema: { type: 'Service', serviceType: 'BESS operation and maintenance (O&M)' },
  blocks: [
    {
      kind: 'prose',
      heading: '为什么储能运维重要',
      paragraphs: [
        '电池储能系统是长期的基础设施资产。其价值不仅取决于电池质量，更取决于系统在整个寿命周期内被运营、监控、维护与保护的程度。',
        '对储能资产而言，运维不是可选项，而是必需品。',
      ],
    },
    {
      kind: 'image', src: '/images/om-detail.png', alt: '身穿防护装备的技术人员手持平板检查开启的电池储能机柜', aspect: '16 / 9',
      caption: '主动运维在资产全寿命内保护安全、性能、保修与融资可行性。',
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Solunar 的运维范围',
      lead: 'Solunar 可为储能项目提供以下支持：',
      items: ['定期现场检查', '电池系统健康检查', '热管理检查', '消防系统检查', 'PCS 性能评审', 'EMS 控制评审', '远程监控仪表板', '告警与故障分析', '预防性维护计划', '性能报告', '备件协调', '技术排障'],
    },
    {
      kind: 'cta',
      heading: '储能资产唯有安全、可靠、持续运行，才具价值。',
      text: '让 Solunar 以专业的运维支持，帮助您保护储能资产。',
      actions: [{ label: '索取储能运维咨询', href: '/zh/contact' }, { label: '了解 BESS 安全', href: '/zh/bess-safety' }],
    },
  ],
};

export const zhBessSafety: PageContent = {
  slug: '/zh/bess-safety',
  seoTitle: 'BESS 安全与可靠性 马来西亚 | 消防、热管理与融资可行性',
  metaDescription: '安全、可靠、可融资的电池储能系统。Solunar 评审电池化学、BMS、热管理、消防探测与抑制，服务工商业及公用事业级项目。',
  navLabel: 'BESS 安全与可靠性',
  parent: home,
  eyebrow: '解决方案 · 安全',
  h1: '安全、可靠、可融资的电池储能系统',
  lead: '从工商业系统到公用事业级储能电站，Solunar 在每个 BESS 项目中都优先考量安全、可靠性与长期性能。',
  heroActions: [{ label: '咨询储能专家', href: '/zh/contact' }],
  image: { src: '/images/bess-safety.png', alt: '储能集装箱内的消防探测与热管理', aspect: '4 / 3' },
  primaryKeyword: 'BESS 安全 马来西亚',
  schema: { type: 'Service', serviceType: 'BESS safety and reliability review' },
  blocks: [
    {
      kind: 'prose',
      heading: '为什么安全至关重要',
      paragraphs: [
        '电池储能系统是强大的基础设施资产。经妥善设计、集成、安装、监控与维护后，BESS 能带来强劲的商业与技术价值。',
        '但若安全处理不当，项目可能面临严重风险。对 Solunar 而言，安全不是事后补充，而是从第一天起就融入系统设计。',
      ],
    },
    {
      kind: 'image', src: '/images/safety-detail.png', alt: '储能集装箱内部，展示消防抑制、气体探测与热管理', aspect: '16 / 9',
      caption: '消防探测、抑制、热管理与紧急停机——按现场能量规模配置。',
    },
    {
      kind: 'cards',
      heading: '我们的安全理念',
      lead: "Solunar 的 BESS 安全方法建立在四项原则之上：",
      columns: 2,
      items: [
        { icon: 'battery', title: '1. 安全的技术选型', text: '采用适合工商业与公用事业级应用的成熟电池技术与组件。' },
        { icon: 'integration', title: '2. 妥善的系统集成', text: '电池、PCS、EMS、变压器、开关柜、保护、消防与监控协同运作。' },
        { icon: 'gauge', title: '3. 持续监控', text: '安全不止于调试——资产须在整个寿命内持续监控。' },
        { icon: 'om', title: '4. 预防性运维', text: '定期检查、维护、报告与早期故障检测保障可靠性。' },
      ],
    },
    {
      kind: 'cta',
      heading: 'BESS 安全旨在打造可靠、可融资的长期资产。',
      text: '与 Solunar 携手部署更安全、更可靠的储能解决方案。',
      actions: [{ label: '咨询储能专家', href: '/zh/contact' }, { label: '了解 BYD LFP 化学', href: '/zh/byd-battery-malaysia' }],
    },
  ],
};

export const zhSolarBessDevelopers: PageContent = {
  slug: '/zh/solar-bess-developers',
  seoTitle: '面向开发商与 EPCC 的太阳能 + 储能 | 马来西亚 | Solunar',
  metaDescription: 'Solunar 帮助太阳能开发商与 EPCC 无需自建全部能力即可加入储能——可行性、系统架构、融资可行性、安全与运维支持。',
  navLabel: '面向开发商与资产持有者',
  parent: home,
  eyebrow: '解决方案 · 开发商',
  h1: '面向开发商、EPCC 与可再生能源平台的太阳能 + 储能方案',
  lead: '帮助太阳能开发商以可靠的电池储能集成释放更高的项目价值——从技术设计、产品选型到系统集成、调试支持与长期运维。',
  heroActions: [{ label: '咨询我们的储能集成团队', href: '/zh/contact' }],
  image: { src: '/images/solar-bess-developers.png', alt: '黄昏时分马来西亚大型太阳能 + 储能电站', aspect: '4 / 3' },
  primaryKeyword: '面向开发商的太阳能储能 马来西亚',
  schema: { type: 'Service', serviceType: 'Solar + BESS support for developers and asset owners' },
  blocks: [
    {
      kind: 'prose',
      heading: '太阳能项目竞争更激烈，也更复杂',
      paragraphs: [
        '在马来西亚与东南亚，太阳能开发商正承受利润、价格与技术要求的多重压力。传统的纯太阳能项目或已不足以满足下一代能源需求。',
        '对大型太阳能电站、CRESS 项目、工业购电与并网可再生平台而言，电池储能正成为项目结构的关键部分。',
      ],
    },
    {
      kind: 'image', src: '/images/developers-detail.png', alt: '储能集装箱集成于场地边缘的大型太阳能 + 储能电站', aspect: '16 / 9',
      caption: '储能将发电资产转变为可调度、电网友好、贷款方可承保的资产。',
    },
    {
      kind: 'steps',
      heading: '我们的支持范围',
      lead: '贯穿项目生命周期的完整储能集成支持：',
      items: [
        { title: '技术可行性与概念设计', text: '储能选型、用例、时长、PCS 容量、布局、单线图评审与并网考量。' },
        { title: '产品选型与系统架构', text: '电池、PCS、EMS、BMS、变压器/中压、保护、消防、SCADA 与监控——交流或直流耦合。' },
        { title: '商业与财务结构支持', text: '资本结构、回报、PPA 增值、融资可行性、衰减与生命周期假设。' },
        { title: '安全、合规与可靠性评审', text: '化学评审、热失控缓解、消防抑制、保护协调与应急响应。' },
        { title: '调试与运维支持', text: '测试、调试、远程监控、电池健康追踪、保修协调与优化。' },
      ],
    },
    {
      kind: 'cta',
      heading: '在规划太阳能 + 储能项目？让我们携手共建。',
      text: '无论您准备 LSS、CRESS、SELCO、私人 PPA、工业太阳能还是公用事业级储能，Solunar 都能以技术、商业与集成专长支持您的项目。',
      actions: [{ label: '联系我们的太阳能 + 储能团队', href: '/zh/contact' }, { label: '公用事业级储能支持', href: '/zh/utility-scale-ess-malaysia' }],
    },
  ],
};

export const zhLocalAssembly: PageContent = {
  slug: '/zh/local-bess-assembly',
  seoTitle: '未来本地储能组装 马来西亚 | Solunar 本地化',
  metaDescription: 'Solunar 正迈向马来西亚与东南亚的本地储能组装、集成与支持——更快交付、更优售后与更强的本地能力。',
  navLabel: '未来本地组装',
  parent: home,
  eyebrow: '解决方案 · 本地化',
  h1: '面向电池储能系统的未来本地组装',
  lead: '为马来西亚与东南亚打造更强大的本地储能供应链——从分销与系统集成，迈向本地组装、定制与增值支持。',
  heroActions: [{ label: '探讨本地组装机会', href: '/zh/contact' }],
  image: { src: '/images/local-assembly.png', alt: '在马来西亚工厂车间组装电池储能机柜的技术人员', aspect: '4 / 3' },
  primaryKeyword: '本地储能组装 马来西亚',
  schema: { type: 'Service', serviceType: 'Future local BESS assembly and support' },
  blocks: [
    {
      kind: 'prose',
      heading: '马来西亚需要更强的本地储能供应链',
      paragraphs: [
        '太阳能、储能、数据中心、工业电气化与电网现代化的快速增长，催生了对可靠储能方案的强劲需求。然而许多储能项目仍高度依赖进口的整装系统。',
        '随着马来西亚开发更多可再生与储能项目，市场将需要更强的本地参与。',
      ],
    },
    {
      kind: 'image', src: '/images/localassembly-detail.png', alt: '在生产车间组装与集成电池储能机柜的工人', aspect: '16 / 9',
      caption: '迈向本地组装、集成与支持，缩短交付并强化售后。',
    },
    {
      kind: 'note', text: '这些是前瞻性机遇。Solunar 当前的业务聚焦于技术分销、系统集成与运维支持，同时朝本地组装迈进。本地组装绝不应以牺牲安全或可靠性为代价。',
    },
    {
      kind: 'cta',
      heading: '有意参与本地储能组装或战略合作？',
      text: '与 Solunar 洽谈，参与马来西亚日益增长的本地清洁能源储能能力建设。',
      actions: [{ label: '探讨合作机会', href: '/zh/contact' }, { label: '关于 Solunar', href: '/zh/about' }],
    },
  ],
};

// ─── Technology ──────────────────────────────────────────────────────────────

export const zhBydBattery: PageContent = {
  slug: '/zh/byd-battery-malaysia',
  seoTitle: 'BYD 电池方案 马来西亚 | Solunar 储能集成',
  metaDescription: 'Solunar 为太阳能、工商业、公用事业级、储能电站与扩容项目提供 BYD 电池储能方案，配套 PCS、EMS、调试与运维支持。',
  navLabel: 'BYD 电池方案',
  parent: home,
  eyebrow: '技术 · BYD',
  h1: '面向马来西亚的安全、可扩展 BYD 电池储能方案',
  lead: 'Solunar 为商业、工业、公用事业级与可再生能源项目提供 BYD 电池储能方案——并以妥善的工程、PCS 集成、EMS 控制、调试与长期运维规划为支撑。',
  heroActions: [{ label: '探讨 BYD 电池集成', href: '/zh/contact' }],
  image: { src: '/images/byd-battery.png', alt: '马来西亚商业场所的 BYD LFP 电池储能机柜', aspect: '4 / 3' },
  primaryKeyword: 'BYD 电池 马来西亚',
  schema: { type: 'Service', serviceType: 'BYD battery solution integration', brands: ['BYD'] },
  blocks: [
    {
      kind: 'prose',
      heading: '为何选择 BYD 电池方案？',
      paragraphs: [
        'BYD 以电池技术、电动车与储能系统享誉全球。对储能项目而言，BYD 的优势不仅在于电池产品本身，更在于其在电池制造、储能部署与一体化清洁能源技术上的长期经验。',
        'BYD Battery-Box 采用无钴磷酸铁锂（LFP）化学，BYD 围绕安全、稳定与长循环寿命进行定位——这些特性广泛适用于资产须安全运行十年以上的储能场景。',
      ],
    },
    {
      kind: 'image', src: '/images/byd-battery-detail.png', alt: '整齐堆叠于储能机架中的 LFP 刀片电池模块特写', aspect: '16 / 9',
      caption: '无钴 LFP 模块——BYD 围绕安全、稳定与长循环寿命定位的化学。',
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'BYD 电池方案可支持的应用',
      lead: '对项目方而言，BYD 电池方案可支持广泛的应用场景：',
      items: ['太阳能能量转移', '最大需量削峰', '扩容', '能源成本优化', '备用电力', '电网支持', '可再生能源平滑', '储能电站开发', '微电网应用', 'EV 充电支持'],
    },
    {
      kind: 'cta',
      heading: '与 Solunar 共建您的 BYD 储能项目。',
      text: '无论是太阳能 + 储能项目、工商业削峰系统、扩容、储能电站还是公用事业级资产，Solunar 都能设计并集成合适的 BYD 电池方案。',
      actions: [{ label: '探讨 BYD 电池集成', href: '/zh/contact' }, { label: '比较储能品牌', href: '/zh/multi-brand-bess-integration' }],
    },
  ],
};

export const zhGoodwe: PageContent = {
  slug: '/zh/goodwe-inverter-malaysia',
  seoTitle: 'GoodWe 逆变器与电池 马来西亚 | 太阳能与储能 | Solunar',
  metaDescription: 'Solunar 为住宅、商业、工业及太阳能 + 储能项目供应并集成 GoodWe 逆变器与电池方案。',
  navLabel: 'GoodWe 逆变器与电池',
  parent: home,
  eyebrow: '技术 · GoodWe',
  h1: '面向马来西亚太阳能 + 储能的 GoodWe 逆变器与电池',
  lead: 'Solunar 为住宅、商业、工业与储能应用分销并集成 GoodWe 逆变器与电池方案——将 GoodWe 选型、设计并集成为实用、可靠且具商业成效的系统。',
  heroActions: [{ label: '索取 GoodWe 产品支持', href: '/zh/contact' }],
  image: { src: '/images/goodwe-inverter.png', alt: '安装于马来西亚商业场所的 GoodWe 混合逆变器', aspect: '4 / 3' },
  primaryKeyword: 'GoodWe 逆变器 马来西亚',
  schema: { type: 'Service', serviceType: 'GoodWe inverter and battery distribution', brands: ['GoodWe'] },
  blocks: [
    {
      kind: 'prose',
      heading: '为何选择 GoodWe？',
      paragraphs: [
        'GoodWe 是面向住宅、商业与公用事业市场的全球太阳能逆变器、储能方案与智慧能源技术制造商，产品生态涵盖太阳能逆变器、混合逆变器、储能逆变器、电池、EV 充电器、软件与配件。',
        '当目标是将太阳能发电、储能、监控与自用整合为一套智能、能降低电费的系统时，GoodWe 是有力之选。',
      ],
    },
    {
      kind: 'image', src: '/images/goodwe-detail.png', alt: '安装于墙面的太阳能混合逆变器与紧凑型家用电池', aspect: '16 / 9',
      caption: '太阳能、混合与储能逆变器——连接发电、电池与用电负荷的桥梁。',
    },
    {
      kind: 'cta',
      heading: '自信部署 GoodWe 逆变器与电池。',
      text: '无论是住宅太阳能、工商业屋顶还是太阳能 + 电池系统，Solunar 都能帮您选型并集成合适的 GoodWe 技术。',
      actions: [{ label: '索取 GoodWe 产品支持', href: '/zh/contact' }, { label: '查看 PCS 与 EMS 集成', href: '/zh/pcs-ems-system-integration' }],
    },
  ],
};

export const zhEve: PageContent = {
  slug: '/zh/eve-bess-integration',
  seoTitle: 'EVE 储能集成 马来西亚 | Solunar 储能解决方案',
  metaDescription: 'Solunar 为太阳能、工商业、公用事业级与储能电站项目提供 EVE 储能集成——将电池、PCS、EMS、SCADA 与电网系统集成为完整方案。',
  navLabel: 'EVE 储能集成',
  parent: home,
  eyebrow: '技术 · EVE',
  h1: '面向太阳能、工商业、公用事业级与储能电站项目的 EVE 储能集成',
  lead: 'Solunar 为商业、工业、公用事业级与可再生能源项目提供 EVE 储能集成——将电池、PCS、EMS、SCADA 与电网系统集成为完整、可融资的储能解决方案。',
  heroActions: [{ label: '评估 EVE 储能适配性', href: '/zh/contact' }],
  image: { src: '/images/eve-bess.png', alt: '集装箱式储能系统内的 EVE LFP 电池模块', aspect: '4 / 3' },
  primaryKeyword: 'EVE 储能 马来西亚',
  schema: { type: 'Service', serviceType: 'EVE BESS integration', brands: ['EVE'] },
  blocks: [
    {
      kind: 'prose',
      heading: '什么是 EVE 储能集成？',
      paragraphs: [
        'EVE 储能集成是指将 EVE 电池储能系统工程化、设计、配置并部署为完整的储能解决方案——涵盖电池集装箱、功率转换、能量管理、热管理、消防保护、通信架构、并网、控制逻辑与监控。',
        '单凭电池集装箱并不构成完整的储能项目。要安全高效运行，电池必须与系统其余部分妥善集成。',
      ],
    },
    {
      kind: 'image', src: '/images/eve-detail.png', alt: '洁净产线上的大尺寸方形 LFP 电池芯', aspect: '16 / 9',
      caption: 'EVE 强调 LFP 电芯、热管理、系统级安全保护与云端监控。',
    },
    {
      kind: 'cta',
      heading: '与合适的集成伙伴共建您的储能项目。',
      text: 'Solunar 依据您的容量、安全与商业要求评估 EVE 储能适配性，再将其集成为完整系统。',
      actions: [{ label: '评估 EVE 储能适配性', href: '/zh/contact' }, { label: '了解多品牌集成', href: '/zh/multi-brand-bess-integration' }],
    },
  ],
};

export const zhMultiBrand: PageContent = {
  slug: '/zh/multi-brand-bess-integration',
  seoTitle: '多品牌储能集成 马来西亚 | 电池、PCS 与 EMS',
  metaDescription: 'Solunar 为开发商、EPCC 与资产持有者提供多品牌储能集成——将电池、PCS、EMS、逆变器、SCADA 与电网系统集成为一套可靠方案。',
  navLabel: '多品牌集成',
  parent: home,
  eyebrow: '技术 · 多品牌',
  h1: '一个集成商，多种技术，一套系统',
  lead: 'Solunar 为需要灵活性的开发商、EPCC 承包商、资产持有者与商业客户提供多品牌储能集成——将不同供应商的电池、PCS、EMS、逆变器、SCADA 与电网系统整合为一套可运行的方案。',
  heroActions: [{ label: '推荐合适的架构', href: '/zh/contact' }],
  image: { src: '/images/multi-brand-integration.png', alt: '在马来西亚集成为一套储能系统的电池机架、PCS 与 EMS', aspect: '4 / 3' },
  primaryKeyword: '多品牌储能集成 马来西亚',
  schema: { type: 'Service', serviceType: 'Multi-brand BESS integration', brands: ['BYD', 'GoodWe', 'EVE'] },
  blocks: [
    {
      kind: 'prose',
      heading: '什么是多品牌储能集成？',
      paragraphs: [
        '多品牌集成是指在确保整套系统安全、高效、可靠运行的前提下，使用来自不同技术供应商的组件设计并集成储能项目。',
        '挑战不在于采购设备，而在于让一切互联互通、协同运行、表现如一。这正是 Solunar 的用武之地。',
      ],
    },
    {
      kind: 'image', src: '/images/multibrand-detail.png', alt: '集成仓库中排列的多个不同品牌电池机柜', aspect: '16 / 9',
      caption: '不同品牌，一套工程化系统——Solunar 为每个项目选择并集成最佳组合。',
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: '多品牌集成为何重要',
      lead: '储能并非千篇一律。灵活性让客户得以：',
      items: ['为项目选择最佳电池', '优化成本与性能', '避免依赖单一供应商', '匹配本地电网要求', '利用现有太阳能或电气基础设施', '提升采购灵活性', '降低项目交付风险', '以知名品牌提升融资可行性'],
    },
    {
      kind: 'cta',
      heading: '让 Solunar 为您推荐合适的储能架构。',
      text: '分享您的项目参数，Solunar 将帮助选择并集成最合适的电池、PCS 与 EMS 配置。',
      actions: [{ label: '推荐合适的架构', href: '/zh/contact' }, { label: '了解 PCS 与 EMS', href: '/zh/pcs-ems-system-integration' }],
    },
  ],
};

export const zhPcsEms: PageContent = {
  slug: '/zh/pcs-ems-system-integration',
  seoTitle: 'PCS、EMS 与系统架构 马来西亚 | Solunar 集成',
  metaDescription: 'Solunar 为商业、工业、公用事业级与太阳能储能项目设计 PCS、EMS 与储能架构，包括交流耦合与直流耦合系统。',
  navLabel: 'PCS、EMS 与架构',
  parent: home,
  eyebrow: '技术 · 集成',
  h1: 'PCS、EMS 与架构：储能背后的大脑、转换器与系统设计',
  lead: '储能性能不仅取决于电池。Solunar 设计并集成 PCS、EMS 与整体架构，决定储能系统如何充放电、通信、保障安全并创造财务价值。',
  heroActions: [{ label: '索取系统架构支持', href: '/zh/contact' }],
  image: { src: '/images/pcs-ems.png', alt: '储能配电室内配备 SCADA 屏幕的 PCS 与 EMS 机柜', aspect: '4 / 3' },
  primaryKeyword: 'PCS EMS 集成 马来西亚',
  schema: { type: 'Service', serviceType: 'PCS and EMS system integration' },
  blocks: [
    {
      kind: 'prose',
      heading: '储能性能不仅取决于电池',
      paragraphs: [
        '许多人只关注电池品牌。但在实际项目中，性能在很大程度上取决于三个关键要素：PCS（功率转换系统）、EMS（能量管理系统）与整体系统架构。',
        '三者共同决定储能如何充放电、通信、自我保护、与太阳能集成、并网并创造财务价值。',
      ],
    },
    {
      kind: 'prose',
      heading: '储能中的 PCS 是什么？',
      paragraphs: [
        '电池以直流（DC）储能，而电网与多数电气系统使用交流（AC）。功率转换系统在直流与交流间转换，使电池得以充放电，并控制充放电功率、并网同步、功率因数、电压与频率响应等。',
      ],
    },
    {
      kind: 'prose',
      heading: '储能中的 EMS 是什么？',
      paragraphs: [
        'EMS 是储能的大脑。它决定电池何时充电、何时放电、释放多少功率，以及如何应对负荷、太阳能发电与电网状况的变化——管理削峰、太阳能充电、负荷转移、SOC 管理、保护限值与远程监控。缺乏强大的 EMS 策略，储能可能无法实现预期回报。',
      ],
    },
    {
      kind: 'image', src: '/images/pcs-ems-detail.png', alt: '配备监控仪表板与 PCS 撬装的能源控制室', aspect: '16 / 9',
      caption: '电池、PCS、EMS、保护与监控协同运作、作为一个系统运行。',
    },
    {
      kind: 'cta',
      heading: '需要让每个组件协同为一套系统？',
      text: 'Solunar 将 PCS、EMS、BMS、变压器、保护与监控集成为一套妥善运行的储能系统。',
      actions: [{ label: '索取系统架构支持', href: '/zh/contact' }, { label: '查看储能项目运维', href: '/zh/bess-om-malaysia' }],
    },
  ],
};

export const zhMorePages: PageContent[] = [
  zhCommercialIndustrial, zhPeakShaving, zhPowerExpansion, zhUtilityScale,
  zhBessOm, zhBessSafety, zhSolarBessDevelopers, zhLocalAssembly,
  zhBydBattery, zhGoodwe, zhEve, zhMultiBrand, zhPcsEms,
];

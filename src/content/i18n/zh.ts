import type { PageContent } from '@/content/types';

/**
 * Simplified-Chinese (zh) localized pages for the highest-value routes.
 * Rendered through the shared StandardPage layout. The English site at the
 * root is unchanged; these live under /zh.
 */

export const zhHome: PageContent = {
  slug: '/zh',
  seoTitle: 'Solunar Energy | 马来西亚太阳能 + 储能（BESS）技术伙伴',
  metaDescription:
    'Solunar Energy 是马来西亚的太阳能 + 电池储能系统（BESS）分销与系统集成伙伴，为 EPCC 公司、开发商与资产持有者提供电池、PCS、EMS 及长期运维支持。',
  navLabel: '首页',
  eyebrow: '太阳能 + BESS 技术伙伴 · 马来西亚',
  h1: '马来西亚 EPCC 企业背后的太阳能 + 储能技术伙伴',
  lead: 'Solunar Energy 是马来西亚的太阳能与电池储能系统（BESS）分销及系统集成伙伴。我们帮助 EPCC 公司、开发商与资产持有者交付更安全、更智能、更具融资可行性的储能项目——无需自行建立完整的电池储能团队。',
  heroActions: [
    { label: '与 Solunar 合作', href: '/zh/contact' },
    { label: '我们如何支持 EPCC', href: '/zh/for-epcc' },
  ],
  image: {
    src: '/images/hero-bg.png',
    alt: '黄昏时分太阳能电站旁的电池储能集装箱与马来西亚城市天际线',
    aspect: '16 / 9',
  },
  primaryKeyword: 'BESS 系统集成 马来西亚',
  schema: { type: 'WebPage' },
  blocks: [
    {
      kind: 'prose',
      heading: '我们不与 EPCC 竞争，而是助力 EPCC 成功',
      paragraphs: [
        '如今越来越多的太阳能 EPCC 公司被要求交付太阳能 + 储能项目，但储能所需的专业能力与太阳能 EPCC 不同——涉及电池化学、PCS 选型、EMS 控制逻辑、消防安全、热管理、保修结构、衰减规划与长期运维。',
        'Solunar Energy 弥补了这一差距。我们提供技术、集成支持与储能专长，让 EPCC 公司能够专注于客户关系、项目执行与现场交付。',
      ],
    },
    {
      kind: 'pullquote',
      text: '您带来项目，我们提供储能技术骨干。',
    },
    {
      kind: 'cards',
      heading: '我们提供的六大核心支持',
      lead: 'Solunar 在六个核心领域支持太阳能 + 储能项目：',
      columns: 3,
      items: [
        { icon: 'battery', title: 'BESS 技术分销', text: '为商业、工业与公用事业级项目供应并支持选定的电池储能技术。' },
        { icon: 'inverter', title: 'GoodWe 逆变器与电池', text: '分销 GoodWe 太阳能逆变器、混合逆变器与储能电池解决方案。' },
        { icon: 'battery-charging', title: 'BYD 电池方案集成', text: '在安全、可靠与长期性能至关重要的项目中集成选定的 BYD 电池方案。' },
        { icon: 'layers', title: 'EVE 储能集成', text: '根据项目需求与技术配置集成 EVE 储能解决方案。' },
        { icon: 'pcs', title: 'PCS 与 EMS 集成', text: '将电池、PCS、EMS、逆变器、变压器与监控集成为一个系统。' },
        { icon: 'om', title: '运维与售后支持', text: '为商业及公用事业级储能资产提供长期监控、维护规划与技术排障。' },
      ],
    },
    {
      kind: 'cards',
      heading: '为什么选择 Solunar',
      lead: 'EPCC、开发商与资产持有者选择 Solunar，以降低储能项目风险：',
      columns: 3,
      items: [
        { icon: 'proposal', title: '设计即具融资可行性', text: '成熟设备、稳健集成与清晰文档，让贷款方、基金与资产持有者放心承保。' },
        { icon: 'safety', title: '安全优先的工程', text: 'LFP 化学、热管理与消防保护从第一天起就融入设计——这是每个可靠、可投保项目的基础。' },
        { icon: 'layers', title: '独立且多品牌', text: '我们不绑定单一品牌，而是为您的项目选择并集成最合适的电池、PCS 与 EMS。' },
      ],
    },
    {
      kind: 'cta',
      heading: '在马来西亚有太阳能 + 储能项目？让 Solunar 在幕后支持您。',
      text: '无论您是 EPCC 公司、太阳能开发商还是资产持有者，Solunar 都能以电池技术、系统集成与长期运维为您的项目提供支持。',
      actions: [
        { label: '联系 Solunar', href: '/zh/contact' },
        { label: '查看解决方案', href: '/zh/solutions' },
      ],
    },
  ],
};

export const zhAbout: PageContent = {
  slug: '/zh/about',
  seoTitle: '关于我们 | Solunar Energy — 马来西亚太阳能 + 储能伙伴',
  metaDescription:
    'Solunar Energy 是马来西亚的太阳能 + 储能技术分销与系统集成商，提供电池供应、PCS/EMS 集成与长期运维，助力交付具融资可行性的储能项目。',
  navLabel: '关于我们',
  parent: { name: '首页', path: '/zh' },
  eyebrow: '关于 Solunar',
  h1: '马来西亚储能项目背后的太阳能 + BESS 技术平台',
  lead: 'Solunar Energy 是马来西亚的太阳能与电池储能技术分销及系统集成伙伴。我们供应储能、协调 PCS 与 EMS，并提供长期运维——让 EPCC 公司、开发商与资产持有者无需自建深厚的电池能力即可交付可融资的储能项目。',
  heroActions: [{ label: '与 Solunar 合作', href: '/zh/contact' }],
  image: {
    src: '/images/about-team.png',
    alt: 'Solunar 马来西亚工程团队在吉隆坡审阅太阳能 + 储能项目',
    aspect: '4 / 3',
  },
  primaryKeyword: '太阳能 BESS 伙伴 马来西亚',
  schema: { type: 'AboutPage' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Solunar Energy 为何存在',
      paragraphs: [
        '马来西亚的太阳能市场竞争日益激烈、利润空间被压缩。客户想要的已不只是组件——开发商与资产持有者需要储能，工业客户则需要削峰、扩容与能源韧性。',
        'Solunar Energy 正是为支持这一转变而生，为 EPCC 公司、开发商与资产持有者提供更优的技术、更强的集成支持与长期运营能力——而无需他们自建完整的电池储能团队。',
      ],
    },
    {
      kind: 'cards',
      heading: '我们做什么：面向太阳能 + 储能市场的三大能力',
      lead: 'Solunar 的一切服务可归纳为三大核心能力：',
      columns: 3,
      items: [
        { icon: 'battery', title: '技术分销', text: '供应 BESS 技术、GoodWe 逆变器与电池，以及选定的 BYD 与 EVE 电池方案。' },
        { icon: 'integration', title: '系统集成', text: '将电池、PCS、EMS、逆变器、保护与监控集成为一个安全、可运行的储能系统。' },
        { icon: 'om', title: '长期运维支持', text: '为商业及公用事业级储能资产提供全生命周期的监控、维护规划与售后支持。' },
      ],
    },
    {
      kind: 'prose',
      heading: '真正的价值在于集成，而非单纯供货',
      paragraphs: [
        '买电池是最简单的部分。BESS 的价值来自电池、PCS、EMS、保护、计量与现场负荷如何集成，使系统安全调度、协同运行。',
        'Solunar 正处于这一集成层——选择合适的技术、协调系统架构，并贯穿调试与运维提供支持，让 EPCC、开发商与资产持有者无需深厚的内部电池能力即可交付可融资的储能。',
      ],
    },
    {
      kind: 'list',
      variant: 'cards',
      columns: 2,
      heading: '我们的使命与愿景',
      lead: 'Solunar Energy 由清晰的使命与长远的区域愿景指引。',
      items: [
        { title: '使命', text: '让太阳能 + 储能项目对 EPCC 公司、开发商与资产持有者而言更简单、更安全、更具商业可行性。' },
        { title: '愿景', text: '成为马来西亚及东南亚领先的太阳能 + 储能技术集成与分销平台。' },
      ],
    },
    {
      kind: 'cta',
      heading: '在规划太阳能 + 储能项目？请尽早让 Solunar 参与。',
      text: 'Solunar 越早参与，您方案背后的电池选型、PCS/EMS 选择与运维规划就越到位。',
      actions: [
        { label: '与 Solunar 合作', href: '/zh/contact' },
        { label: '面向 EPCC 公司', href: '/zh/for-epcc' },
      ],
    },
  ],
};

export const zhForEpcc: PageContent = {
  slug: '/zh/for-epcc',
  seoTitle: '面向 EPCC 公司 | 赢得太阳能 + 储能项目 | Solunar',
  metaDescription:
    'Solunar 是马来西亚 EPCC 公司背后的储能技术伙伴，而非竞争对手。电池选型、PCS/EMS 集成、方案支持与运维，让您自信地赢得并交付太阳能 + 储能项目。',
  navLabel: '面向 EPCC',
  parent: { name: '首页', path: '/zh' },
  eyebrow: '面向 EPCC 公司',
  h1: '赢得更多太阳能 + 储能项目——我们是您 EPCC 背后的伙伴',
  lead: 'Solunar 不是 EPCC，也绝不与您竞争。我们是 EPCC 背后的专业储能技术伙伴——提供电池选型、PCS/EMS 集成、方案支持与长期运维，让您无需自建深厚储能能力即可投标并交付可融资的太阳能 + 储能项目。',
  heroActions: [{ label: '成为 Solunar EPCC 伙伴', href: '/zh/contact' }],
  image: {
    src: '/images/bess-partner-epcc.png',
    alt: 'EPCC 承包商与 Solunar 专家在马来西亚太阳能 + 储能现场协作',
    aspect: '4 / 3',
  },
  primaryKeyword: '太阳能 EPCC 储能伙伴 马来西亚',
  schema: { type: 'Service', serviceType: 'BESS technology partner for EPCC companies' },
  blocks: [
    {
      kind: 'prose',
      heading: '您的客户现在想要储能——而不只是太阳能',
      paragraphs: [
        '随着马来西亚太阳能进入新阶段，电池储能在公用事业级太阳能、工商业太阳能、LSS、CRESS、电网支持、扩容与最大需量管理中日益重要。越来越多的招标与客户要求太阳能 + 储能，而非单纯太阳能。',
        '但储能与太阳能 EPCC 是不同的学科。它需要电池化学与选型、PCS 与 EMS 控制逻辑、消防与热安全、保护协调、保修匹配、衰减规划与长期运维。在内部建立全部能力既慢又有风险——尤其是在最初的几个项目上。这正是 Solunar 填补的空缺。',
      ],
    },
    {
      kind: 'pullquote',
      text: '您带来项目，我们带来储能技术骨干。',
    },
    {
      kind: 'table',
      heading: 'EPCC 与 Solunar：各司其职',
      lead: '清晰的职责划分，让您始终掌控客户与项目。',
      columns: ['职责', 'EPCC 公司', 'Solunar Energy'],
      rows: [
        ['客户关系', '✅ 拥有', '支持'],
        ['现场执行与土建/电气', '✅ 拥有', '—'],
        ['电池 / PCS / EMS 选型', '由 Solunar 支持', '✅ 主导'],
        ['储能技术方案与选型', '由 Solunar 支持', '✅ 主导'],
        ['系统集成', '由 Solunar 支持', '✅ 主导'],
        ['长期储能运维', '可选', '✅ 支持'],
      ],
      caption: 'EPCC 公司与 Solunar Energy 之间的职责划分。',
    },
    {
      kind: 'cards',
      heading: 'EPCC 为何选择 Solunar',
      lead: '六种方式助您赢得更多项目并降低交付风险：',
      columns: 2,
      items: [
        { icon: 'proposal', title: '1. 强化您的方案', text: '将储能定位于削峰、扩容、能量转移、备电、电网支持、CRESS 与投资案例——并为客户清晰说明技术与财务价值。' },
        { icon: 'safety', title: '2. 降低技术风险', text: '我们从一开始就构建储能架构，避免选型错误、电池/逆变器不匹配、EMS 问题与保修纠纷。' },
        { icon: 'battery', title: '3. 获取可靠产品', text: '可使用成熟的 BYD 电池方案、GoodWe 逆变器与电池、EVE 储能及多品牌选项，适配各种项目规模。' },
        { icon: 'layers', title: '4. 多品牌集成', text: '协调电池、PCS、EMS、SCADA、变压器、开关柜、逆变器与电网——不锁定单一配置。' },
        { icon: 'developers', title: '5. 赢得基金与银行信任', text: '在安全、保修、性能、衰减与运维方面，提供更有说服力的技术与商业说明。' },
        { icon: 'om', title: '6. 长期运维支持', text: '监控、维护与售后保障性能与保修——让您的客户多年满意。' },
      ],
    },
    {
      kind: 'steps',
      heading: 'EPCC 合作如何开展',
      lead: '从首次洽谈到长期支持，清晰的五步路径：',
      items: [
        { title: '项目洽谈', text: '您分享需求、客户目标、现场信息、负荷曲线、太阳能设计或招标文件。' },
        { title: '储能方案评审', text: '我们推荐合适的配置、系统规模、产品选项与集成方式。' },
        { title: '方案支持', text: '我们帮助您为客户、开发商、基金或资产持有者准备更有力的技术与商业方案。' },
        { title: '产品与集成协调', text: '我们支持供货、供应商协调、系统架构、PCS/EMS 集成与调试规划。' },
        { title: '长期支持', text: '项目完成后，我们支持运维、监控、性能评审、排障与未来扩容。' },
      ],
    },
    {
      kind: 'cta',
      heading: '为您的 EPCC 业务加上储能技术骨干。',
      text: '无论您准备工商业项目、公用事业级太阳能电站、LSS 投标、CRESS 机会还是新镇能源项目，我们的团队都已准备好在幕后支持您。',
      actions: [
        { label: '成为 Solunar EPCC 伙伴', href: '/zh/contact' },
        { label: '关于我们', href: '/zh/about' },
      ],
    },
  ],
};

export const zhSolutions: PageContent = {
  slug: '/zh/solutions',
  seoTitle: '太阳能 + 储能解决方案 马来西亚 | Solunar Energy',
  metaDescription:
    '探索 Solunar 完整的太阳能 + 储能解决方案——工商业储能、公用事业级 ESS、削峰、扩容、运维、安全等——每项都针对真实的业务难题。',
  navLabel: '解决方案',
  parent: { name: '首页', path: '/zh' },
  eyebrow: '解决方案',
  h1: '应对各类能源挑战的太阳能 + 储能解决方案',
  lead: '从削减最大需量费用到建设电网级储能电站，Solunar 为您的难题匹配合适的电池储能方案。下方查看各项解决方案——它所解决的挑战，以及我们如何提供帮助。',
  heroActions: [{ label: '获取免费评估', href: '/zh/contact' }],
  image: {
    src: '/images/utility-scale-ess.png',
    alt: '马来西亚太阳能电站旁的电池储能集装箱',
    aspect: '4 / 3',
  },
  primaryKeyword: '太阳能储能解决方案 马来西亚',
  schema: { type: 'CollectionPage' },
  blocks: [
    {
      kind: 'cards',
      heading: '工商业（C&I）储能',
      lead: '面向工厂、商场与商业楼宇的储能应用：',
      columns: 3,
      items: [
        { icon: 'gauge', title: '工商业 BESS', text: '挑战：需量费用上升、进线容量受限。方案：削峰、储存太阳能、支持扩容与韧性。' },
        { icon: 'peak', title: '最大需量削峰', text: '挑战：短暂尖峰即抬高整月电费。方案：EMS 在尖峰自动放电，降低需量费用。' },
        { icon: 'expansion', title: 'BESS 扩容', text: '挑战：扩产需更多电力，但电网升级缓慢。方案：储能按需提供尖峰电力，先行扩产。' },
      ],
    },
    {
      kind: 'cards',
      heading: '公用事业级与开发商',
      lead: '面向大型太阳能、电网级与开发商项目：',
      columns: 3,
      items: [
        { icon: 'utilities', title: '公用事业级 ESS 电站', text: '挑战：间歇性、并网合规与规模化安全。方案：电池选型、PCS/EMS/SCADA、消防与运维的端到端支持。' },
        { icon: 'battery-charging', title: 'BYD 公用事业级 BESS', text: '挑战：电网级太阳能与 CRESS 需可融资的总体方案。方案：BYD 驱动的完整公用事业级储能方案。' },
        { icon: 'developers', title: '面向开发商与资产持有者', text: '挑战：纯太阳能利润收窄、融资要求更高。方案：提供可使资产可调度、可融资的储能技术层。' },
      ],
    },
    {
      kind: 'cards',
      heading: '运营、安全与本地化',
      lead: '保障项目长期表现与价值：',
      columns: 3,
      items: [
        { icon: 'om', title: '储能项目运维', text: '挑战：缺乏维护会使资产偏离规格。方案：远程监控、电池健康、热与消防巡检及报告。' },
        { icon: 'safety', title: 'BESS 安全与可靠性', text: '挑战：安全是投资的前提条件。方案：从第一天融入化学、BMS、热管理与消防保护。' },
        { icon: 'assembly', title: '未来本地组装', text: '挑战：依赖进口导致交付慢、支持弱。方案：Solunar 正迈向本地储能组装与支持。' },
      ],
    },
    {
      kind: 'cta',
      heading: '不确定哪种方案适合您的项目？',
      text: '告诉 Solunar 您的现场、负荷与目标——我们将免费为您指明合适的太阳能 + 储能方案并测算数据。',
      actions: [
        { label: '获取免费评估', href: '/zh/contact' },
        { label: '面向 EPCC 公司', href: '/zh/for-epcc' },
      ],
    },
  ],
};

export const zhContact: PageContent = {
  slug: '/zh/contact',
  seoTitle: '联系 Solunar Energy | 太阳能 + 储能项目评估',
  metaDescription:
    '向 Solunar 介绍您的项目，获取专业的太阳能 + 储能意见。分享电费单、负荷曲线或项目简介——免费、保密、无义务。',
  navLabel: '联系我们',
  parent: { name: '首页', path: '/zh' },
  eyebrow: '联系 · 免费项目评估',
  h1: '介绍您的项目——获取专业的太阳能 + 储能意见',
  lead: '分享您的电费单、负荷曲线或项目简介。Solunar 将评估您的最大需量节省、系统选型与融资可行性——免费、保密、无义务。',
  heroActions: [
    { label: '提交项目需求', href: '/contact' },
  ],
  image: {
    src: '/images/contact-hero.png',
    alt: 'Solunar 顾问在吉隆坡与客户讨论太阳能 + 储能项目',
    aspect: '4 / 3',
  },
  primaryKeyword: '联系 Solunar Energy',
  schema: { type: 'ContactPage' },
  blocks: [
    {
      kind: 'list',
      variant: 'check',
      columns: 1,
      heading: '联系 Solunar，洽谈以下事项：',
      lead: '我们支持 EPCC、开发商、资产持有者与商业客户：',
      items: [
        'EPCC 合作',
        'GoodWe 逆变器与电池供应',
        '选定的 BYD 电池集成',
        'EVE 储能集成',
        'PCS 与 EMS 集成',
        '工商业储能',
        '公用事业级 ESS 支持',
        '运维与售后',
        '本地组装合作',
      ],
    },
    {
      kind: 'note',
      text: '提示：完整的在线询价表单目前为英文版。您也可以直接通过电邮、电话或 WhatsApp 以中文联系我们——我们会以中文回复。',
    },
    {
      kind: 'cta',
      heading: '准备好开始了吗？',
      text: '点击下方填写项目需求表单，或直接通过 WhatsApp 与我们联系。我们通常在一个工作日内回复。',
      actions: [
        { label: '填写项目需求表单', href: '/contact' },
        { label: '返回中文首页', href: '/zh' },
      ],
    },
  ],
};

import { zhMorePages } from './zh-more';

export const zhPages: PageContent[] = [
  zhHome,
  zhAbout,
  zhForEpcc,
  zhSolutions,
  zhContact,
  ...zhMorePages,
];

import type { PageContent } from '@/content/types';

/**
 * Additional Bahasa Malaysia pages: the 9 Solution pages and 5 Technology
 * pages. Focused structure (problem → how we help → key points → CTA).
 * Rendered via StandardPage under /ms.
 */

const home = { name: 'Laman Utama', path: '/ms' };

// ─── Solutions ───────────────────────────────────────────────────────────────

export const msCommercialIndustrial: PageContent = {
  slug: '/ms/commercial-industrial-bess-malaysia',
  seoTitle: 'Storan C&I (BESS) Malaysia | Solunar',
  metaDescription:
    'Solunar mereka bentuk storan komersial & industri di Malaysia — peak shaving, peluasan kuasa, penggunaan sendiri solar, kuasa sandaran dan ketahanan.',
  navLabel: 'Storan Komersial & Industri',
  parent: home,
  eyebrow: 'Penyelesaian · C&I',
  h1: 'Kurangkan Caj Permintaan Maksimum. Luaskan Kapasiti Kuasa. Perkukuh Ketahanan.',
  lead: 'Solunar membantu kilang, bangunan komersial, kemudahan industri dan pengguna kuasa besar memasang sistem storan tenaga bateri termaju untuk mengurangkan permintaan puncak, menyokong peluasan kuasa dan meningkatkan kawalan kos tenaga.',
  heroActions: [{ label: 'Hubungi Pasukan BESS Kami', href: '/ms/contact' }],
  image: { src: '/images/commercial-industrial-bess.png', alt: 'Kabinet storan C&I di sebelah kilang dengan solar bumbung di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'storan komersial Malaysia',
  schema: { type: 'Service', serviceType: 'Commercial and industrial BESS support' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Kos elektrik bukan lagi sekadar tentang penggunaan',
      paragraphs: [
        'Bagi kebanyakan pengguna C&I di Malaysia, bil elektrik bukan lagi dipacu oleh penggunaan tenaga sahaja. Caj permintaan maksimum, kapasiti masuk yang terhad dan kos naik taraf grid kini membentuk kos kuasa sebenar.',
        'Apabila kilang berkembang, menambah mesin, EV charging atau beban penyejukan, banyak tapak menemui tembok yang sama: bekalan kuasa tidak mencukupi, dan naik taraf adalah mahal, perlahan serta rumit.',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Apa yang dihadapi pengguna C&I',
      lead: 'Tapak komersial dan industri di Malaysia berkongsi tekanan yang sama:',
      items: ['Caj permintaan maksimum lebih tinggi', 'Kapasiti kuasa masuk terhad', 'Keperluan naik taraf TNB yang mahal', 'Risiko operasi daripada gangguan kuasa', 'Tekanan mengintegrasikan solar, EV charging & elektrifikasi', 'Sukar mewajarkan kos pelaburan awal yang besar'],
    },
    {
      kind: 'image', src: '/images/ci-detail.png', alt: 'Solar bumbung kilang & pusat beli-belah dengan kabinet storan komersial', aspect: '16 / 9',
      caption: 'Storan di titik penggunaan — memotong caj permintaan, meningkatkan penggunaan sendiri solar dan menambah ketahanan.',
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Apa yang BESS C&I boleh lakukan untuk anda',
      lead: 'Sistem yang direka dengan baik menukar tenaga daripada kos tetap kepada aset terurus:',
      items: ['Kurangkan caj permintaan maksimum melalui peak shaving', 'Simpan tenaga solar dan nyahcas pada waktu permintaan tinggi', 'Sokong peluasan kuasa tanpa naik taraf grid segera', 'Tingkatkan kestabilan kuasa untuk operasi kritikal', 'Bersedia untuk EV charging & elektrifikasi masa depan', 'Tingkatkan ketahanan tenaga & kesinambungan perniagaan'],
    },
    {
      kind: 'cta',
      heading: 'Bil elektrik anda berubah. Permintaan kuasa anda meningkat.',
      text: 'Bincang dengan Solunar bagaimana BESS C&I boleh membantu perniagaan anda mengurangkan kos, meluaskan kapasiti dan bersedia untuk fasa elektrifikasi seterusnya.',
      actions: [{ label: 'Hubungi Pasukan BESS Kami', href: '/ms/contact' }, { label: 'Cara Peak Shaving Berfungsi', href: '/ms/solutions' }],
    },
  ],
};

export const msPeakShaving: PageContent = {
  slug: '/ms/peak-shaving-malaysia',
  seoTitle: 'Peak Shaving Permintaan Maksimum Malaysia | BESS | Solunar',
  metaDescription: 'Kurangkan caj permintaan maksimum dengan storan bateri. Ketahui cara peak shaving BESS menjimatkan kos di Malaysia untuk kilang, pusat beli-belah, kedai sejuk beku dan pusat data.',
  navLabel: 'Peak Shaving Permintaan Maksimum',
  parent: home,
  eyebrow: 'Penyelesaian · Peak Shaving',
  h1: 'Kurangkan Caj Permintaan Maksimum dengan Storan Bateri',
  lead: 'Peak shaving ialah penggunaan bateri untuk menyahcas semasa tempoh beban tinggi supaya tapak mengambil kurang kuasa daripada grid pada puncaknya — mengurangkan caj permintaan maksimum pada bil elektrik.',
  heroActions: [{ label: 'Analisis Penjimatan Permintaan Saya', href: '/ms/contact' }],
  image: { src: '/images/peak-shaving.png', alt: 'Kabinet storan bateri menyokong permintaan puncak di kilang Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'peak shaving permintaan maksimum Malaysia',
  schema: { type: 'Service', serviceType: 'Maximum demand peak shaving with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Apakah permintaan maksimum?',
      paragraphs: [
        'Permintaan maksimum ialah tahap kuasa tertinggi yang diambil daripada grid dalam tempoh pengebilan, biasanya diukur dalam kilowatt (kW). Walaupun puncak itu berlaku sekejap, ia tetap menetapkan permintaan maksimum yang dibilkan — contohnya beberapa mesin dihidupkan serentak.',
        'Bagi kilang dan bangunan komersial, inilah sebabnya pengurusan permintaan maksimum amat penting.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Bagaimana peak shaving BESS berfungsi',
      lead: 'Peak shaving bateri mengikut kitaran mudah dan berulang yang dikawal oleh EMS:',
      items: [
        { title: 'EMS pantau beban', text: 'EMS memantau beban tapak secara berterusan.' },
        { title: 'Bateri mengecas', text: 'Bateri mengecas pada waktu yang sesuai.' },
        { title: 'Beban melonjak', text: 'Permintaan tapak melonjak pada waktu beban tinggi.' },
        { title: 'Bateri menyahcas', text: 'Bateri menyahcas untuk menyokong lonjakan.' },
        { title: 'Puncak grid dikurangkan', text: 'Puncak permintaan grid dikurangkan.' },
        { title: 'Kawalan kos lebih baik', text: 'Pelanggan meningkatkan kawalan kos tenaga.' },
      ],
    },
    {
      kind: 'image', src: '/images/peakshaving-detail.png', alt: 'Kabinet storan komersial mengurus permintaan puncak di sebelah bilik suis', aspect: '16 / 9',
      caption: 'EMS menyahcas bateri pada puncak permintaan, supaya grid melihat permintaan maksimum yang lebih rendah dan murah.',
    },
    {
      kind: 'note', text: 'Penjimatan sebenar bergantung pada profil beban tapak, tarif, saiz sistem dan strategi operasi. Solunar memodelkan ini bagi setiap tapak, bukan menjanjikan angka tetap.',
    },
    {
      kind: 'cta',
      heading: 'Ingin tahu potensi penjimatan permintaan anda?',
      text: 'Solunar memodelkan peak shaving bagi setiap tapak berdasarkan profil beban dan tarif sebenar anda — tiada janji tetap, hanya analisis.',
      actions: [{ label: 'Analisis Penjimatan Permintaan Saya', href: '/ms/contact' }, { label: 'Lihat Storan C&I', href: '/ms/commercial-industrial-bess-malaysia' }],
    },
  ],
};

export const msPowerExpansion: PageContent = {
  slug: '/ms/power-expansion-bess',
  seoTitle: 'Peluasan Kuasa dengan BESS Malaysia | Solunar Energy',
  metaDescription: 'Perlukan lebih kuasa tetapi naik taraf grid lambat? BESS boleh menyokong permintaan puncak tambahan untuk kilang, pusat data dan EV charging di Malaysia.',
  navLabel: 'Peluasan Kuasa dengan BESS',
  parent: home,
  eyebrow: 'Penyelesaian · Peluasan Kuasa',
  h1: 'Perlukan Lebih Kuasa? BESS Boleh Menyokong Pertumbuhan di Malaysia',
  lead: 'Apabila tapak memerlukan lebih kuasa daripada yang dibenarkan sambungan gridnya, BESS boleh membekalkan kuasa puncak tambahan atas permintaan — menyokong peluasan sementara naik taraf grid jangka panjang dirancang.',
  heroActions: [{ label: 'Nilai Peluasan Kuasa dengan BESS', href: '/ms/contact' }],
  image: { src: '/images/power-expansion.png', alt: 'Kilang dan pusat data dengan storan & EV charging menyokong peluasan kuasa di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'peluasan kuasa BESS Malaysia',
  schema: { type: 'Service', serviceType: 'Power expansion with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Mengapa guna BESS untuk peluasan kuasa?',
      paragraphs: [
        'Kilang, pusat data, hab EV charging dan kemudahan industri sering memerlukan lebih kuasa untuk peluasan, tetapi naik taraf grid boleh mengambil masa. BESS boleh menyokong permintaan puncak tambahan dalam tempoh sementara.',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Kes penggunaan peluasan kuasa',
      lead: 'Kes penggunaan peluasan kuasa biasa termasuk:',
      items: ['Peluasan barisan pengeluaran', 'Mesin baharu', 'Peluasan bilik sejuk', 'Beban EV charging', 'Pertumbuhan beban pusat data', 'Sokongan kuasa sementara', 'Sokongan waktu puncak'],
    },
    {
      kind: 'image', src: '/images/powerexpansion-detail.png', alt: 'Halaman elektrik industri dengan pengubah, suis dan kontena storan menyokong peluasan kilang', aspect: '16 / 9',
      caption: 'BESS menambah kuasa puncak boleh guna atas permintaan — luaskan sekarang sementara naik taraf grid jangka panjang dirancang.',
    },
    {
      kind: 'cta',
      heading: 'Berkembang lebih pantas daripada sambungan grid anda?',
      text: 'Solunar boleh menilai sama ada BESS dapat menyokong permintaan puncak tambahan anda sementara naik taraf grid jangka panjang dirancang.',
      actions: [{ label: 'Nilai Peluasan Kuasa dengan BESS', href: '/ms/contact' }, { label: 'Lihat Industri Kami', href: '/ms/solutions' }],
    },
  ],
};

export const msUtilityScale: PageContent = {
  slug: '/ms/utility-scale-ess-malaysia',
  seoTitle: 'ESS Skala Utiliti Malaysia | LSS, CRESS & BESS Skala Grid | Solunar',
  metaDescription: 'Solunar menyampaikan penyelesaian ESS skala utiliti yang boleh dibiayai untuk projek LSS, CRESS dan bersambung grid — pemilihan bateri, PCS/EMS/SCADA, pematuhan grid, keselamatan dan O&M.',
  navLabel: 'Ladang ESS Skala Utiliti',
  parent: home,
  eyebrow: 'Penyelesaian · Skala Utiliti',
  h1: 'Storan Tenaga Boleh Dibiayai untuk Solar Besar, CRESS, LSS & Projek Bersambung Grid',
  lead: 'Solunar menyokong pemaju, EPCC, dana infrastruktur, utiliti dan pemilik aset dengan penyelesaian Sistem Storan Tenaga skala utiliti bersepadu untuk projek tenaga boleh diperbaharui dan bersambung grid yang besar.',
  heroActions: [{ label: 'Bincang Sokongan ESS Skala Utiliti', href: '/ms/contact' }],
  image: { src: '/images/utility-scale-ess.png', alt: 'Barisan kontena storan skala utiliti di ladang solar di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'ESS skala utiliti Malaysia',
  schema: { type: 'Service', serviceType: 'Utility-scale ESS technology support' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Peluang pasaran',
      paragraphs: [
        'Sektor tenaga boleh diperbaharui Malaysia memasuki fasa baharu. Apabila solar berskala besar, CRESS, permintaan kuasa pusat data dan projek boleh diperbaharui bersambung grid berkembang, storan tenaga menjadi sebahagian penting daripada ekosistem infrastruktur kuasa.',
        'Solar sahaja tidak lagi mencukupi. Pasaran kini memerlukan penyelesaian yang dapat menguruskan keterputusan, meningkatkan kestabilan grid, menyokong kebolehhantaran dan mengukuhkan ekonomi projek — di sinilah ESS skala utiliti menjadi penting.',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Apa yang kami sediakan',
      lead: 'Penyelesaian ESS skala utiliti Solunar boleh merangkumi:',
      items: ['Pemilihan sistem storan bateri', 'Penyelesaian BESS berkontena', 'Integrasi PCS', 'Integrasi EMS & SCADA', 'Sokongan pematuhan grid', 'Seni bina sistem solar + storan', 'Perancangan keselamatan kebakaran & perlindungan', 'Rangka kerja pemantauan prestasi', 'Sokongan pentauliahan', 'Perancangan O&M', 'Sokongan waranti & kitaran hayat', 'Dokumentasi kebolehbiayaan & pelabur'],
    },
    {
      kind: 'image', src: '/images/utility-detail.png', alt: 'Pandangan udara barisan kontena storan skala utiliti di sebelah ladang solar', aspect: '16 / 9',
      caption: 'Aset storan berskala MWh direka untuk pematuhan grid, keselamatan berskala dan hayat 10–15 tahun.',
    },
    {
      kind: 'cta',
      heading: 'Storan skala utiliti menjadi tulang belakang infrastruktur tenaga boleh diperbaharui.',
      text: 'Bekerjasama dengan Solunar untuk mereka bentuk, mengintegrasi dan mengendalikan ladang ESS yang lebih selamat, bijak dan boleh dibiayai.',
      actions: [{ label: 'Bincang Projek Ladang ESS Anda', href: '/ms/contact' }, { label: 'Untuk Pemaju & Pemilik Aset', href: '/ms/solar-bess-developers' }],
    },
  ],
};

export const msBessOm: PageContent = {
  slug: '/ms/bess-om-malaysia',
  seoTitle: 'O&M BESS Malaysia | Operasi & Penyelenggaraan ESS | Solunar',
  metaDescription: 'Lindungi pelaburan BESS anda dengan O&M ESS profesional. Solunar memantau kesihatan bateri, suhu, perisian dan sistem keselamatan untuk ESS C&I dan skala utiliti.',
  navLabel: 'O&M untuk Projek ESS',
  parent: home,
  eyebrow: 'Penyelesaian · O&M',
  h1: 'Lindungi Pelaburan BESS Anda dengan O&M Profesional',
  lead: 'Solunar menyediakan sokongan O&M untuk projek ESS komersial, industri dan skala utiliti bagi membantu pemilik aset mengekalkan keselamatan, prestasi, kebolehgunaan dan nilai sistem jangka panjang.',
  heroActions: [{ label: 'Minta Cadangan O&M ESS', href: '/ms/contact' }],
  image: { src: '/images/bess-om.png', alt: 'Jurutera memeriksa kontena BESS semasa O&M di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'O&M BESS Malaysia',
  schema: { type: 'Service', serviceType: 'BESS operation and maintenance (O&M)' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Mengapa O&M ESS penting',
      paragraphs: [
        'Sistem Storan Tenaga Bateri ialah aset infrastruktur jangka panjang. Nilainya bukan sahaja bergantung pada kualiti bateri, tetapi juga pada sejauh mana sistem dikendali, dipantau, diselenggara dan dilindungi sepanjang masa.',
        'Bagi aset ESS, O&M bukan pilihan — ia satu kemestian.',
      ],
    },
    {
      kind: 'image', src: '/images/om-detail.png', alt: 'Juruteknik berpakaian PPE memeriksa kabinet storan terbuka dengan tablet', aspect: '16 / 9',
      caption: 'O&M proaktif melindungi keselamatan, prestasi, waranti dan kebolehbiayaan sepanjang hayat aset.',
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Skop O&M Solunar',
      lead: 'Solunar boleh menyokong projek ESS dengan:',
      items: ['Pemeriksaan tapak berkala', 'Pemeriksaan kesihatan sistem bateri', 'Pemeriksaan pengurusan haba', 'Pemeriksaan sistem keselamatan kebakaran', 'Semakan prestasi PCS', 'Semakan kawalan EMS', 'Papan pemuka pemantauan jauh', 'Analisis penggera & kerosakan', 'Jadual penyelenggaraan pencegahan', 'Pelaporan prestasi', 'Penyelarasan alat ganti', 'Penyelesaian masalah teknikal'],
    },
    {
      kind: 'cta',
      heading: 'Aset BESS hanya bernilai apabila ia berprestasi dengan selamat dan konsisten sepanjang hayatnya.',
      text: 'Biarkan Solunar membantu anda melindungi aset ESS dengan sokongan O&M profesional.',
      actions: [{ label: 'Minta Perundingan O&M ESS', href: '/ms/contact' }, { label: 'Semak Keselamatan BESS', href: '/ms/bess-safety' }],
    },
  ],
};

export const msBessSafety: PageContent = {
  slug: '/ms/bess-safety',
  seoTitle: 'Keselamatan & Kebolehpercayaan BESS Malaysia | Kebakaran, Haba & Kebolehbiayaan',
  metaDescription: 'Sistem storan tenaga bateri yang selamat, boleh dipercayai dan boleh dibiayai. Solunar menyemak kimia bateri, BMS, pengurusan haba, pengesanan dan pemadaman kebakaran.',
  navLabel: 'Keselamatan & Kebolehpercayaan BESS',
  parent: home,
  eyebrow: 'Penyelesaian · Keselamatan',
  h1: 'Sistem Storan Tenaga Bateri yang Selamat, Boleh Dipercayai dan Boleh Dibiayai',
  lead: 'Daripada sistem komersial & industri hingga ladang ESS skala utiliti, Solunar mengutamakan keselamatan, kebolehpercayaan dan prestasi jangka panjang dalam setiap projek BESS.',
  heroActions: [{ label: 'Hubungi Pakar BESS', href: '/ms/contact' }],
  image: { src: '/images/bess-safety.png', alt: 'Pengesanan kebakaran dan pengurusan haba dalam kontena BESS', aspect: '4 / 3' },
  primaryKeyword: 'keselamatan BESS Malaysia',
  schema: { type: 'Service', serviceType: 'BESS safety and reliability review' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Mengapa keselamatan penting',
      paragraphs: [
        'Sistem Storan Tenaga Bateri ialah aset infrastruktur yang berkuasa. Apabila direka, diintegrasi, dipasang, dipantau dan diselenggara dengan betul, BESS memberikan nilai komersial dan teknikal yang kukuh.',
        'Tetapi apabila keselamatan tidak ditangani dengan betul, projek boleh menghadapi risiko serius. Bagi Solunar, keselamatan bukan renungan kemudian — ia sebahagian daripada reka bentuk sistem dari hari pertama.',
      ],
    },
    {
      kind: 'image', src: '/images/safety-detail.png', alt: 'Bahagian dalam kontena BESS menunjukkan pemadaman kebakaran, pengesanan gas dan pengurusan haba', aspect: '16 / 9',
      caption: 'Pengesanan kebakaran, pemadaman, pengurusan haba dan penutupan kecemasan — disesuaikan dengan tenaga di tapak.',
    },
    {
      kind: 'cards',
      heading: 'Falsafah keselamatan kami',
      lead: 'Pendekatan keselamatan BESS Solunar dibina atas empat prinsip:',
      columns: 2,
      items: [
        { icon: 'battery', title: '1. Pemilihan teknologi selamat', text: 'Teknologi dan komponen bateri terbukti yang sesuai untuk aplikasi C&I dan skala utiliti.' },
        { icon: 'integration', title: '2. Integrasi sistem yang betul', text: 'Bateri, PCS, EMS, pengubah, suis, perlindungan, kebakaran dan pemantauan berfungsi bersama.' },
        { icon: 'gauge', title: '3. Pemantauan berterusan', text: 'Keselamatan tidak berakhir selepas pentauliahan — aset mesti dipantau sepanjang hayatnya.' },
        { icon: 'om', title: '4. O&M pencegahan', text: 'Pemeriksaan berkala, penyelenggaraan, pelaporan dan pengesanan kerosakan awal melindungi kebolehpercayaan.' },
      ],
    },
    {
      kind: 'cta',
      heading: 'Keselamatan BESS adalah tentang membina aset jangka panjang yang boleh dipercayai dan dibiayai.',
      text: 'Bekerjasama dengan Solunar untuk memasang penyelesaian storan tenaga yang lebih selamat dan boleh dipercayai.',
      actions: [{ label: 'Hubungi Pakar BESS', href: '/ms/contact' }, { label: 'Fahami Kimia LFP BYD', href: '/ms/byd-battery-malaysia' }],
    },
  ],
};

export const msSolarBessDevelopers: PageContent = {
  slug: '/ms/solar-bess-developers',
  seoTitle: 'Solar + BESS untuk Pemaju & EPCC | Malaysia | Solunar',
  metaDescription: 'Solunar membantu pemaju solar dan EPCC menambah storan tanpa membina segalanya secara dalaman — kebolehlaksanaan, seni bina, kebolehbiayaan, keselamatan dan O&M.',
  navLabel: 'Untuk Pemaju & Pemilik Aset',
  parent: home,
  eyebrow: 'Penyelesaian · Pemaju',
  h1: 'Penyelesaian Solar + BESS untuk Pemaju, EPCC & Platform Tenaga Boleh Diperbaharui',
  lead: 'Membantu pemaju solar membuka nilai projek yang lebih tinggi dengan integrasi storan tenaga bateri yang boleh dipercayai — daripada reka bentuk teknikal dan pemilihan produk hingga integrasi sistem, sokongan pentauliahan dan O&M jangka panjang.',
  heroActions: [{ label: 'Hubungi Pasukan Integrasi BESS Kami', href: '/ms/contact' }],
  image: { src: '/images/solar-bess-developers.png', alt: 'Ladang solar + storan besar di Malaysia pada waktu senja keemasan', aspect: '4 / 3' },
  primaryKeyword: 'Solar BESS untuk pemaju Malaysia',
  schema: { type: 'Service', serviceType: 'Solar + BESS support for developers and asset owners' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Projek solar semakin kompetitif — dan lebih kompleks',
      paragraphs: [
        'Di seluruh Malaysia dan Asia Tenggara, pemaju solar menghadapi tekanan margin, harga dan keperluan teknikal yang meningkat. Projek solar sahaja mungkin tidak lagi mencukupi untuk memenuhi permintaan tenaga generasi seterusnya.',
        'Bagi ladang solar besar, projek CRESS, bekalan industri dan platform boleh diperbaharui bersambung grid, Sistem Storan Tenaga Bateri menjadi sebahagian penting daripada struktur projek.',
      ],
    },
    {
      kind: 'image', src: '/images/developers-detail.png', alt: 'Ladang solar + storan besar dengan kontena bateri diintegrasi di pinggir tapak', aspect: '16 / 9',
      caption: 'Storan menukar aset penjanaan kepada aset boleh dihantar dan mesra grid yang boleh dibiayai oleh pemberi pinjaman.',
    },
    {
      kind: 'steps',
      heading: 'Skop sokongan kami',
      lead: 'Sokongan integrasi BESS lengkap sepanjang kitaran hayat projek:',
      items: [
        { title: 'Kebolehlaksanaan teknikal & reka bentuk konsep', text: 'Saiz BESS, kes penggunaan, tempoh, kapasiti PCS, susun atur, semakan rajah garisan tunggal dan pertimbangan grid.' },
        { title: 'Pemilihan produk & seni bina sistem', text: 'Bateri, PCS, EMS, BMS, pengubah/MV, perlindungan, kebakaran, SCADA dan pemantauan — gandingan AC atau DC.' },
        { title: 'Sokongan struktur komersial & kewangan', text: 'Struktur CAPEX, ROI, peningkatan PPA, kebolehbiayaan, andaian degradasi dan kitaran hayat.' },
        { title: 'Semakan keselamatan, pematuhan & kebolehpercayaan', text: 'Semakan kimia, mitigasi thermal runaway, pemadaman kebakaran, penyelarasan perlindungan dan respons kecemasan.' },
        { title: 'Sokongan pentauliahan & O&M', text: 'Ujian, pentauliahan, pemantauan jauh, penjejakan kesihatan bateri, penyelarasan waranti dan pengoptimuman.' },
      ],
    },
    {
      kind: 'cta',
      heading: 'Merancang projek Solar + BESS? Mari kita bina bersama.',
      text: 'Sama ada anda menyediakan LSS, CRESS, SELCO, PPA persendirian, solar industri atau storan skala utiliti, Solunar boleh menyokong projek anda dengan kepakaran teknikal, komersial dan integrasi.',
      actions: [{ label: 'Hubungi Pasukan Solar + BESS Kami', href: '/ms/contact' }, { label: 'Sokongan ESS Skala Utiliti', href: '/ms/utility-scale-ess-malaysia' }],
    },
  ],
};

export const msLocalAssembly: PageContent = {
  slug: '/ms/local-bess-assembly',
  seoTitle: 'Pemasangan BESS Tempatan Masa Depan Malaysia | Pelokalan Solunar',
  metaDescription: 'Solunar menuju ke arah pemasangan, integrasi dan sokongan BESS tempatan untuk Malaysia dan Asia Tenggara — penghantaran lebih pantas, perkhidmatan selepas jualan lebih baik dan keupayaan tempatan yang lebih kukuh.',
  navLabel: 'Pemasangan Tempatan Masa Depan',
  parent: home,
  eyebrow: 'Penyelesaian · Pelokalan',
  h1: 'Pemasangan Tempatan Masa Depan untuk Sistem Storan Tenaga Bateri',
  lead: 'Membina rantaian bekalan BESS tempatan yang lebih kukuh untuk Malaysia dan Asia Tenggara — beralih daripada pengedaran dan integrasi sistem ke arah pemasangan, penyesuaian dan sokongan nilai tambah tempatan.',
  heroActions: [{ label: 'Terokai Peluang Pemasangan Tempatan', href: '/ms/contact' }],
  image: { src: '/images/local-assembly.png', alt: 'Juruteknik memasang kabinet storan tenaga bateri di lantai kilang di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'pemasangan BESS tempatan Malaysia',
  schema: { type: 'Service', serviceType: 'Future local BESS assembly and support' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Malaysia memerlukan rantaian bekalan storan tenaga tempatan yang lebih kukuh',
      paragraphs: [
        'Pertumbuhan pesat solar, BESS, pusat data, elektrifikasi industri dan pemodenan grid mewujudkan permintaan kukuh untuk penyelesaian storan tenaga yang boleh dipercayai. Namun banyak projek BESS masih sangat bergantung pada sistem import yang dipasang sepenuhnya.',
        'Apabila Malaysia membangunkan lebih banyak projek boleh diperbaharui dan storan, pasaran akan memerlukan penyertaan tempatan yang lebih kukuh.',
      ],
    },
    {
      kind: 'image', src: '/images/localassembly-detail.png', alt: 'Pekerja memasang dan mengintegrasi kabinet storan tenaga bateri di lantai pengeluaran', aspect: '16 / 9',
      caption: 'Menuju ke arah pemasangan, integrasi dan sokongan tempatan untuk mempercepat penghantaran dan mengukuhkan perkhidmatan selepas jualan.',
    },
    {
      kind: 'note', text: 'Ini ialah peluang berpandangan ke hadapan. Penglibatan semasa Solunar tertumpu pada pengedaran teknologi, integrasi sistem dan sokongan O&M, sambil menuju ke arah pemasangan tempatan. Pemasangan tempatan tidak sekali-kali harus menjejaskan keselamatan atau kebolehpercayaan.',
    },
    {
      kind: 'cta',
      heading: 'Berminat dengan pemasangan BESS tempatan atau kerjasama strategik?',
      text: 'Bincang dengan Solunar tentang penyertaan dalam keupayaan storan tenaga bersih tempatan Malaysia yang sedang berkembang.',
      actions: [{ label: 'Bincang Peluang Kerjasama', href: '/ms/contact' }, { label: 'Tentang Solunar', href: '/ms/about' }],
    },
  ],
};

// ─── Technology ──────────────────────────────────────────────────────────────

export const msBydBattery: PageContent = {
  slug: '/ms/byd-battery-malaysia',
  seoTitle: 'Penyelesaian Bateri BYD Malaysia | Integrasi BESS oleh Solunar',
  metaDescription: 'Solunar menyediakan penyelesaian storan tenaga bateri BYD untuk projek solar, C&I, skala utiliti, ladang ESS dan peluasan kuasa, dengan sokongan PCS, EMS, pentauliahan dan O&M.',
  navLabel: 'Penyelesaian Bateri BYD',
  parent: home,
  eyebrow: 'Teknologi · BYD',
  h1: 'Penyelesaian Storan Tenaga Bateri BYD yang Selamat dan Boleh Skala untuk Malaysia',
  lead: 'Solunar menyediakan penyelesaian storan tenaga bateri BYD untuk projek komersial, industri, skala utiliti dan tenaga boleh diperbaharui — disokong oleh kejuruteraan yang teliti, integrasi PCS, kawalan EMS, pentauliahan dan perancangan O&M jangka panjang.',
  heroActions: [{ label: 'Bincang Integrasi Bateri BYD', href: '/ms/contact' }],
  image: { src: '/images/byd-battery.png', alt: 'Kabinet storan bateri LFP BYD di tapak komersial di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'bateri BYD Malaysia',
  schema: { type: 'Service', serviceType: 'BYD battery solution integration', brands: ['BYD'] },
  blocks: [
    {
      kind: 'prose',
      heading: 'Mengapa penyelesaian bateri BYD?',
      paragraphs: [
        'BYD terkenal dengan teknologi bateri, kenderaan elektrik dan sistem storan tenaganya. Bagi projek BESS, kekuatan BYD bukan sahaja pada produk bateri, tetapi juga pengalaman jangka panjang dalam pembuatan bateri, penggunaan storan tenaga dan teknologi tenaga bersih bersepadu.',
        'BYD Battery-Box menggunakan kimia litium besi fosfat (LFP) bebas kobalt, yang diletakkan oleh BYD sekitar keselamatan, kestabilan dan hayat kitaran panjang — ciri yang banyak dipilih untuk storan tempat aset perlu beroperasi dengan selamat selama satu dekad atau lebih.',
      ],
    },
    {
      kind: 'image', src: '/images/byd-battery-detail.png', alt: 'Modul bateri bilah LFP disusun kemas dalam rak storan', aspect: '16 / 9',
      caption: 'Modul LFP bebas kobalt — kimia yang diletakkan BYD sekitar keselamatan, kestabilan dan hayat kitaran panjang.',
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Aplikasi yang boleh disokong penyelesaian bateri BYD',
      lead: 'Bagi pemilik projek, penyelesaian bateri BYD boleh menyokong pelbagai kes penggunaan:',
      items: ['Anjakan tenaga solar', 'Peak shaving permintaan maksimum', 'Peluasan kuasa', 'Pengoptimuman kos tenaga', 'Kuasa sandaran', 'Sokongan grid', 'Pengukuhan tenaga boleh diperbaharui', 'Pembangunan ladang ESS', 'Aplikasi mikrogrid', 'Sokongan EV charging'],
    },
    {
      kind: 'cta',
      heading: 'Bina projek BESS BYD anda bersama Solunar.',
      text: 'Sama ada projek solar + BESS, sistem peak shaving C&I, peluasan kuasa, ladang ESS atau aset skala utiliti, Solunar boleh mereka bentuk dan mengintegrasikan penyelesaian bateri BYD yang sesuai.',
      actions: [{ label: 'Bincang Integrasi Bateri BYD', href: '/ms/contact' }, { label: 'Bandingkan Jenama BESS', href: '/ms/multi-brand-bess-integration' }],
    },
  ],
};

export const msGoodwe: PageContent = {
  slug: '/ms/goodwe-inverter-malaysia',
  seoTitle: 'Penyongsang & Bateri GoodWe Malaysia | Solar & Storan | Solunar',
  metaDescription: 'Solunar membekal dan mengintegrasikan penyongsang dan penyelesaian bateri GoodWe untuk projek kediaman, komersial, industri dan solar + BESS di Malaysia.',
  navLabel: 'Penyongsang & Bateri GoodWe',
  parent: home,
  eyebrow: 'Teknologi · GoodWe',
  h1: 'Penyongsang & Bateri GoodWe untuk Solar + Storan di Malaysia',
  lead: 'Solunar mengedar dan mengintegrasikan penyongsang dan penyelesaian bateri GoodWe untuk aplikasi kediaman, komersial, industri dan storan tenaga — memilih, mereka bentuk dan mengintegrasikan GoodWe menjadi sistem praktikal, boleh dipercayai dan berkesan dari segi komersial.',
  heroActions: [{ label: 'Minta Sokongan Produk GoodWe', href: '/ms/contact' }],
  image: { src: '/images/goodwe-inverter.png', alt: 'Penyongsang hibrid GoodWe dipasang di tapak komersial Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'penyongsang GoodWe Malaysia',
  schema: { type: 'Service', serviceType: 'GoodWe inverter and battery distribution', brands: ['GoodWe'] },
  blocks: [
    {
      kind: 'prose',
      heading: 'Mengapa GoodWe?',
      paragraphs: [
        'GoodWe ialah pengeluar global penyongsang solar, penyelesaian storan tenaga dan teknologi tenaga pintar untuk pasaran kediaman, komersial dan utiliti, dengan ekosistem produk merangkumi penyongsang solar, penyongsang hibrid, penyongsang storan, bateri, pengecas EV, perisian dan aksesori.',
        'GoodWe ialah pilihan kukuh apabila matlamatnya adalah menggabungkan penjanaan solar, storan tenaga, pemantauan dan penggunaan sendiri menjadi satu sistem pintar yang mengurangkan bil.',
      ],
    },
    {
      kind: 'image', src: '/images/goodwe-detail.png', alt: 'Penyongsang hibrid solar dipasang di dinding di sebelah bateri rumah padat', aspect: '16 / 9',
      caption: 'Penyongsang solar, hibrid dan storan — jambatan antara penjanaan, bateri dan beban pelanggan.',
    },
    {
      kind: 'cta',
      heading: 'Pasang penyongsang dan bateri GoodWe dengan yakin.',
      text: 'Daripada solar kediaman hingga bumbung C&I dan sistem solar + bateri, Solunar membantu anda memilih dan mengintegrasikan teknologi GoodWe yang sesuai.',
      actions: [{ label: 'Minta Sokongan Produk GoodWe', href: '/ms/contact' }, { label: 'Lihat Integrasi PCS & EMS', href: '/ms/pcs-ems-system-integration' }],
    },
  ],
};

export const msEve: PageContent = {
  slug: '/ms/eve-bess-integration',
  seoTitle: 'Integrasi BESS EVE Malaysia | Penyelesaian Storan Solunar',
  metaDescription: 'Solunar menyediakan integrasi BESS EVE untuk projek solar, C&I, skala utiliti dan ladang ESS — mengintegrasikan bateri, PCS, EMS, SCADA dan sistem grid menjadi penyelesaian lengkap.',
  navLabel: 'Integrasi BESS EVE',
  parent: home,
  eyebrow: 'Teknologi · EVE',
  h1: 'Integrasi BESS EVE untuk Projek Solar, C&I, Skala Utiliti & Ladang ESS',
  lead: 'Solunar menyediakan integrasi BESS EVE untuk projek komersial, industri, skala utiliti dan tenaga boleh diperbaharui — mengintegrasikan bateri, PCS, EMS, SCADA dan sistem grid menjadi penyelesaian storan tenaga yang lengkap dan boleh dibiayai.',
  heroActions: [{ label: 'Nilai Kesesuaian BESS EVE', href: '/ms/contact' }],
  image: { src: '/images/eve-bess.png', alt: 'Modul bateri LFP EVE dalam sistem storan tenaga berkontena', aspect: '4 / 3' },
  primaryKeyword: 'BESS EVE Malaysia',
  schema: { type: 'Service', serviceType: 'EVE BESS integration', brands: ['EVE'] },
  blocks: [
    {
      kind: 'prose',
      heading: 'Apakah integrasi BESS EVE?',
      paragraphs: [
        'Integrasi BESS EVE ialah kejuruteraan, reka bentuk, konfigurasi dan penggunaan sistem storan tenaga bateri EVE menjadi penyelesaian storan tenaga yang lengkap — merangkumi kontena bateri, penukaran kuasa, pengurusan tenaga, pengurusan haba, perlindungan kebakaran, seni bina komunikasi, sambungan grid, logik kawalan dan pemantauan.',
        'Kontena bateri semata-mata bukanlah projek BESS yang lengkap. Untuk beroperasi dengan selamat dan cekap, bateri mesti diintegrasikan dengan betul bersama seluruh sistem.',
      ],
    },
    {
      kind: 'image', src: '/images/eve-detail.png', alt: 'Sel bateri LFP prismatik besar di barisan pengeluaran yang bersih', aspect: '16 / 9',
      caption: 'EVE menekankan sel LFP, pengurusan haba, perlindungan keselamatan peringkat sistem dan pemantauan awan.',
    },
    {
      kind: 'cta',
      heading: 'Bina projek storan tenaga anda dengan rakan integrasi yang tepat.',
      text: 'Solunar menilai kesesuaian BESS EVE berdasarkan keperluan kapasiti, keselamatan dan komersial anda, kemudian mengintegrasikannya menjadi sistem lengkap.',
      actions: [{ label: 'Nilai Kesesuaian BESS EVE', href: '/ms/contact' }, { label: 'Terokai Integrasi Pelbagai Jenama', href: '/ms/multi-brand-bess-integration' }],
    },
  ],
};

export const msMultiBrand: PageContent = {
  slug: '/ms/multi-brand-bess-integration',
  seoTitle: 'Integrasi BESS Pelbagai Jenama Malaysia | Bateri, PCS & EMS',
  metaDescription: 'Solunar menyampaikan integrasi BESS pelbagai jenama untuk pemaju, EPCC dan pemilik aset — menggabungkan bateri, PCS, EMS, penyongsang, SCADA dan sistem grid menjadi satu penyelesaian yang boleh dipercayai.',
  navLabel: 'Integrasi Pelbagai Jenama',
  parent: home,
  eyebrow: 'Teknologi · Pelbagai Jenama',
  h1: 'Satu Pengintegrasi. Mana-mana Jenama BESS. Satu Sistem.',
  lead: 'Solunar menyediakan integrasi BESS pelbagai jenama untuk pemaju, kontraktor EPCC, pemilik aset dan pelanggan komersial yang memerlukan fleksibiliti — menggabungkan bateri, PCS, EMS, penyongsang, SCADA dan sistem grid daripada pembekal berbeza menjadi satu penyelesaian yang berfungsi.',
  heroActions: [{ label: 'Cadangkan Seni Bina yang Tepat', href: '/ms/contact' }],
  image: { src: '/images/multi-brand-integration.png', alt: 'Rak bateri, PCS dan EMS diintegrasi menjadi satu sistem storan di Malaysia', aspect: '4 / 3' },
  primaryKeyword: 'integrasi BESS pelbagai jenama Malaysia',
  schema: { type: 'Service', serviceType: 'Multi-brand BESS integration', brands: ['BYD', 'GoodWe', 'EVE'] },
  blocks: [
    {
      kind: 'prose',
      heading: 'Apakah integrasi BESS pelbagai jenama?',
      paragraphs: [
        'Integrasi pelbagai jenama bermaksud mereka bentuk dan mengintegrasikan projek BESS menggunakan komponen daripada pembekal teknologi berbeza, sambil memastikan keseluruhan sistem berfungsi dengan selamat, cekap dan boleh dipercayai.',
        'Cabarannya bukan membeli peralatan — tetapi memastikan semuanya berkomunikasi, beroperasi dan berprestasi sebagai satu sistem. Di sinilah peranan Solunar.',
      ],
    },
    {
      kind: 'image', src: '/images/multibrand-detail.png', alt: 'Beberapa kabinet storan bateri jenama berbeza disusun di gudang integrasi', aspect: '16 / 9',
      caption: 'Jenama berbeza, satu sistem terjurus — Solunar memilih dan mengintegrasikan gabungan terbaik bagi setiap projek.',
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Mengapa integrasi pelbagai jenama penting',
      lead: 'Storan tenaga bukan satu saiz untuk semua. Fleksibiliti membolehkan pelanggan:',
      items: ['Memilih bateri terbaik untuk projek', 'Mengoptimumkan kos dan prestasi', 'Mengelak kebergantungan pada satu pembekal', 'Memadankan keperluan grid tempatan', 'Menggunakan solar atau infrastruktur elektrik sedia ada', 'Meningkatkan fleksibiliti perolehan', 'Mengurangkan risiko penyampaian projek', 'Meningkatkan kebolehbiayaan dengan jenama terkenal'],
    },
    {
      kind: 'cta',
      heading: 'Biarkan Solunar mencadangkan seni bina BESS yang tepat.',
      text: 'Kongsi parameter projek anda dan Solunar akan membantu memilih dan mengintegrasikan konfigurasi bateri, PCS dan EMS yang paling sesuai.',
      actions: [{ label: 'Cadangkan Seni Bina yang Tepat', href: '/ms/contact' }, { label: 'Fahami PCS & EMS', href: '/ms/pcs-ems-system-integration' }],
    },
  ],
};

export const msPcsEms: PageContent = {
  slug: '/ms/pcs-ems-system-integration',
  seoTitle: 'PCS, EMS & Seni Bina Malaysia | Integrasi Solunar',
  metaDescription: 'Solunar mereka bentuk PCS, EMS dan seni bina BESS untuk projek komersial, industri, skala utiliti dan storan solar, termasuk sistem gandingan AC dan DC.',
  navLabel: 'PCS, EMS & Seni Bina',
  parent: home,
  eyebrow: 'Teknologi · Integrasi',
  h1: 'PCS, EMS & Seni Bina: Otak, Penukar dan Reka Bentuk Sistem di Sebalik BESS',
  lead: 'Prestasi BESS bukan hanya tentang bateri. Solunar mereka bentuk dan mengintegrasikan PCS, EMS dan seni bina keseluruhan yang menentukan cara sistem storan mengecas, menyahcas, berkomunikasi, kekal selamat dan memberikan nilai kewangan.',
  heroActions: [{ label: 'Minta Sokongan Seni Bina Sistem', href: '/ms/contact' }],
  image: { src: '/images/pcs-ems.png', alt: 'Kabinet PCS dan EMS dengan skrin SCADA di bilik elektrik BESS', aspect: '4 / 3' },
  primaryKeyword: 'integrasi PCS EMS Malaysia',
  schema: { type: 'Service', serviceType: 'PCS and EMS system integration' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Prestasi BESS bukan hanya tentang bateri',
      paragraphs: [
        'Ramai hanya menumpukan pada jenama bateri. Tetapi dalam projek sebenar, prestasi sangat bergantung pada tiga elemen kritikal: PCS (Sistem Penukaran Kuasa), EMS (Sistem Pengurusan Tenaga) dan seni bina sistem keseluruhan.',
        'Bersama-sama, ketiga-tiganya menentukan cara BESS mengecas, menyahcas, melindungi diri, mengintegrasi dengan solar, bersambung ke grid dan memberikan nilai kewangan.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Apakah PCS dalam BESS?',
      paragraphs: [
        'Bateri menyimpan tenaga sebagai DC, manakala grid dan kebanyakan sistem elektrik menggunakan AC. Sistem Penukaran Kuasa menukar antara DC dan AC, membolehkan bateri mengecas dan menyahcas, serta mengawal kuasa cas/nyahcas, penyegerakan grid, faktor kuasa, voltan dan respons frekuensi.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Apakah EMS dalam BESS?',
      paragraphs: [
        'EMS ialah otak BESS. Ia menentukan bila bateri mengecas, bila menyahcas, berapa banyak kuasa dilepaskan, dan bagaimana sistem bertindak balas terhadap perubahan beban, penjanaan solar dan keadaan grid — menguruskan peak shaving, pengecasan solar, anjakan beban, pengurusan SOC, had perlindungan dan pemantauan jauh. Tanpa strategi EMS yang kukuh, BESS mungkin tidak memberikan pulangan yang dijangka.',
      ],
    },
    {
      kind: 'image', src: '/images/pcs-ems-detail.png', alt: 'Bilik kawalan tenaga dengan papan pemuka pemantauan dan skid PCS', aspect: '16 / 9',
      caption: 'Bateri, PCS, EMS, perlindungan dan pemantauan diselaras dan dikendali sebagai satu sistem.',
    },
    {
      kind: 'cta',
      heading: 'Perlukan setiap komponen berfungsi sebagai satu sistem?',
      text: 'Solunar menyelaras PCS, EMS, BMS, pengubah, perlindungan dan pemantauan menjadi satu BESS bersepadu yang berkelakuan baik.',
      actions: [{ label: 'Minta Sokongan Seni Bina Sistem', href: '/ms/contact' }, { label: 'Lihat O&M untuk Projek ESS', href: '/ms/bess-om-malaysia' }],
    },
  ],
};

export const msMorePages: PageContent[] = [
  msCommercialIndustrial, msPeakShaving, msPowerExpansion, msUtilityScale,
  msBessOm, msBessSafety, msSolarBessDevelopers, msLocalAssembly,
  msBydBattery, msGoodwe, msEve, msMultiBrand, msPcsEms,
];

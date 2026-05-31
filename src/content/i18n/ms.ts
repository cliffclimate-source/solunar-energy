import type { PageContent } from '@/content/types';

/**
 * Bahasa Malaysia (ms) localized pages for the highest-value routes.
 * Rendered through the shared StandardPage layout. The English site at the
 * root is unchanged; these live under /ms.
 */

export const msHome: PageContent = {
  slug: '/ms',
  seoTitle: 'Solunar Energy | Rakan Teknologi Solar + BESS Malaysia',
  metaDescription:
    'Solunar Energy ialah pengedar dan rakan integrasi sistem solar + storan tenaga bateri (BESS) di Malaysia, menyokong syarikat EPCC, pemaju dan pemilik aset dengan bateri, PCS, EMS dan O&M.',
  navLabel: 'Laman Utama',
  eyebrow: 'Rakan Teknologi Solar + BESS · Malaysia',
  h1: 'Rakan Teknologi Solar + BESS di Sebalik Syarikat EPCC Malaysia',
  lead: 'Solunar Energy ialah pengedar dan rakan integrasi sistem Solar dan Storan Tenaga Bateri (BESS) di Malaysia. Kami membantu syarikat EPCC, pemaju dan pemilik aset menyampaikan projek storan tenaga yang lebih selamat, bijak dan boleh dibiayai — tanpa perlu membina keupayaan storan bateri sepenuhnya secara dalaman.',
  heroActions: [
    { label: 'Bekerjasama Dengan Solunar', href: '/ms/contact' },
    { label: 'Cara Kami Bantu EPCC', href: '/ms/for-epcc' },
  ],
  image: {
    src: '/images/hero-bg.png',
    alt: 'Kontena storan tenaga bateri di sebelah ladang solar pada waktu senja dengan kaki langit bandar Malaysia',
    aspect: '16 / 9',
  },
  primaryKeyword: 'integrasi sistem BESS Malaysia',
  schema: { type: 'WebPage' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Kami Tidak Bersaing Dengan EPCC. Kami Bantu EPCC Menang.',
      paragraphs: [
        'Kini semakin banyak syarikat EPCC solar diminta menyampaikan projek Solar + BESS, tetapi storan bateri memerlukan kepakaran berbeza daripada EPCC solar — melibatkan kimia bateri, pemilihan PCS, logik kawalan EMS, keselamatan kebakaran, pengurusan haba, struktur waranti, perancangan degradasi dan O&M jangka panjang.',
        'Solunar Energy merapatkan jurang itu. Kami menyediakan teknologi, sokongan integrasi dan kepakaran storan supaya syarikat EPCC boleh fokus pada hubungan pelanggan, pelaksanaan projek dan penyampaian di tapak.',
      ],
    },
    {
      kind: 'pullquote',
      text: 'Anda bawa projek. Kami bawa tulang belakang teknologi BESS.',
    },
    {
      kind: 'cards',
      heading: 'Enam bidang sokongan teras kami',
      lead: 'Solunar menyokong projek Solar + BESS merentasi enam bidang teras:',
      columns: 3,
      items: [
        { icon: 'battery', title: 'Pengedaran Teknologi BESS', text: 'Bekalan dan sokongan teknologi storan bateri terpilih untuk projek komersial, industri dan skala utiliti.' },
        { icon: 'inverter', title: 'Penyongsang & Bateri GoodWe', text: 'Pengedaran penyongsang solar, penyongsang hibrid dan penyelesaian bateri storan tenaga GoodWe.' },
        { icon: 'battery-charging', title: 'Integrasi Bateri BYD', text: 'Integrasi penyelesaian bateri BYD terpilih apabila keselamatan, kebolehpercayaan dan prestasi jangka panjang amat penting.' },
        { icon: 'layers', title: 'Integrasi BESS EVE', text: 'Integrasi penyelesaian BESS EVE bergantung pada keperluan projek dan konfigurasi teknikal.' },
        { icon: 'pcs', title: 'Integrasi PCS & EMS', text: 'Penyelarasan bateri, PCS, EMS, penyongsang, pengubah dan pemantauan menjadi satu sistem.' },
        { icon: 'om', title: 'O&M & Sokongan Selepas Jualan', text: 'Pemantauan jangka panjang, perancangan penyelenggaraan dan penyelesaian masalah teknikal untuk aset ESS.' },
      ],
    },
    {
      kind: 'cards',
      heading: 'Mengapa Pilih Solunar',
      lead: 'EPCC, pemaju dan pemilik aset memilih Solunar untuk mengurangkan risiko projek storan:',
      columns: 3,
      items: [
        { icon: 'proposal', title: 'Direka Untuk Dibiayai', text: 'Peralatan terbukti, integrasi mantap dan dokumentasi jelas yang boleh diyakini oleh pemberi pinjaman, dana dan pemilik aset.' },
        { icon: 'safety', title: 'Kejuruteraan Mengutamakan Keselamatan', text: 'Kimia LFP, pengurusan haba dan perlindungan kebakaran direka dari hari pertama — asas setiap projek yang boleh dipercayai dan diinsuranskan.' },
        { icon: 'layers', title: 'Bebas & Pelbagai Jenama', text: 'Kami tidak terikat pada satu jenama. Kami pilih dan integrasikan bateri, PCS dan EMS terbaik untuk projek anda.' },
      ],
    },
    {
      kind: 'cta',
      heading: 'Ada Projek Solar + BESS di Malaysia? Biar Solunar Menyokong Anda di Belakang Tabir.',
      text: 'Sama ada anda syarikat EPCC, pemaju solar atau pemilik aset, Solunar boleh menyokong projek anda dengan teknologi bateri, integrasi sistem dan perancangan O&M jangka panjang.',
      actions: [
        { label: 'Hubungi Solunar', href: '/ms/contact' },
        { label: 'Lihat Penyelesaian', href: '/ms/solutions' },
      ],
    },
  ],
};

export const msAbout: PageContent = {
  slug: '/ms/about',
  seoTitle: 'Tentang Kami | Solunar Energy — Rakan Solar + BESS Malaysia',
  metaDescription:
    'Solunar Energy ialah pengedar dan pengintegrasi sistem teknologi Solar + BESS di Malaysia — bekalan bateri, integrasi PCS/EMS dan O&M jangka panjang untuk projek storan yang boleh dibiayai.',
  navLabel: 'Tentang Kami',
  parent: { name: 'Laman Utama', path: '/ms' },
  eyebrow: 'Tentang Solunar',
  h1: 'Platform Teknologi Solar + BESS di Sebalik Projek Storan Malaysia',
  lead: 'Solunar Energy ialah pengedar dan rakan integrasi sistem teknologi Solar dan Storan Tenaga Bateri di Malaysia. Kami membekal storan, menyelaras PCS dan EMS, serta menyediakan O&M jangka panjang — membantu syarikat EPCC, pemaju dan pemilik aset menyampaikan storan yang boleh dibiayai tanpa membina keupayaan bateri yang mendalam secara dalaman.',
  heroActions: [{ label: 'Bekerjasama Dengan Solunar', href: '/ms/contact' }],
  image: {
    src: '/images/about-team.png',
    alt: 'Pasukan kejuruteraan Malaysia Solunar menyemak projek Solar + BESS di Kuala Lumpur',
    aspect: '4 / 3',
  },
  primaryKeyword: 'rakan solar BESS Malaysia',
  schema: { type: 'AboutPage' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Mengapa Solunar Energy Wujud',
      paragraphs: [
        'Pasaran solar Malaysia semakin kompetitif dan margin semakin terhimpit. Pelanggan kini mahukan lebih daripada panel — pemaju dan pemilik aset mahukan storan tenaga, manakala pelanggan industri mahukan peak shaving, peluasan kuasa dan ketahanan tenaga.',
        'Solunar Energy wujud untuk menyokong peralihan ini, memberi syarikat EPCC, pemaju dan pemilik aset akses kepada teknologi yang lebih baik, sokongan integrasi yang lebih kukuh dan keupayaan operasi jangka panjang — tanpa perlu membina pasukan storan bateri sepenuhnya secara dalaman.',
      ],
    },
    {
      kind: 'cards',
      heading: 'Apa yang kami lakukan: tiga keupayaan teras',
      lead: 'Semua perkhidmatan Solunar terbahagi kepada tiga keupayaan teras:',
      columns: 3,
      items: [
        { icon: 'battery', title: 'Pengedaran Teknologi', text: 'Bekalan teknologi BESS, penyongsang dan bateri GoodWe, serta penyelesaian bateri BYD dan EVE terpilih.' },
        { icon: 'integration', title: 'Integrasi Sistem', text: 'Menyelaras bateri, PCS, EMS, penyongsang, perlindungan dan pemantauan menjadi satu sistem storan yang selamat dan berfungsi.' },
        { icon: 'om', title: 'Sokongan O&M Jangka Panjang', text: 'Pemantauan, perancangan penyelenggaraan dan sokongan selepas jualan untuk aset ESS sepanjang hayatnya.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Nilai sebenar terletak pada integrasi, bukan sekadar bekalan',
      paragraphs: [
        'Membeli bateri ialah bahagian paling mudah. Nilai BESS datang daripada cara bateri, PCS, EMS, perlindungan, pemeteran dan beban tapak diintegrasikan supaya sistem beroperasi dengan selamat dan berprestasi sebagai satu.',
        'Solunar berada pada lapisan integrasi itu — memilih teknologi yang sesuai, menyelaras seni bina sistem dan menyokongnya menerusi pentauliahan dan O&M — supaya EPCC, pemaju dan pemilik aset boleh menyampaikan storan yang boleh dibiayai.',
      ],
    },
    {
      kind: 'list',
      variant: 'cards',
      columns: 2,
      heading: 'Misi dan visi kami',
      lead: 'Solunar Energy dipandu oleh misi yang jelas dan visi jangka panjang untuk rantau ini.',
      items: [
        { title: 'Misi', text: 'Menjadikan projek Solar + BESS lebih mudah, selamat dan berdaya maju dari segi komersial untuk syarikat EPCC, pemaju dan pemilik aset.' },
        { title: 'Visi', text: 'Menjadi platform integrasi dan pengedaran teknologi Solar + BESS terkemuka di Malaysia dan Asia Tenggara.' },
      ],
    },
    {
      kind: 'cta',
      heading: 'Merancang projek Solar + BESS? Libatkan Solunar lebih awal.',
      text: 'Lebih awal Solunar terlibat, lebih baik pemilihan bateri, PCS/EMS dan perancangan O&M di sebalik cadangan anda.',
      actions: [
        { label: 'Bekerjasama Dengan Solunar', href: '/ms/contact' },
        { label: 'Untuk Syarikat EPCC', href: '/ms/for-epcc' },
      ],
    },
  ],
};

export const msForEpcc: PageContent = {
  slug: '/ms/for-epcc',
  seoTitle: 'Untuk Syarikat EPCC | Menang Projek Solar + BESS | Solunar',
  metaDescription:
    'Solunar ialah rakan teknologi BESS di sebalik syarikat EPCC di Malaysia — bukan pesaing. Pemilihan bateri, integrasi PCS/EMS, sokongan cadangan dan O&M supaya anda menang dan menyampaikan projek Solar + BESS dengan yakin.',
  navLabel: 'Untuk EPCC',
  parent: { name: 'Laman Utama', path: '/ms' },
  eyebrow: 'Untuk Syarikat EPCC',
  h1: 'Menang Lebih Banyak Projek Solar + BESS — Kami Rakan di Sebalik EPCC Anda',
  lead: 'Solunar bukan EPCC dan tidak sesekali bersaing dengan anda. Kami ialah rakan teknologi BESS pakar di sebalik EPCC — membekal pemilihan bateri, integrasi PCS/EMS, sokongan cadangan dan O&M jangka panjang, supaya anda boleh membida dan menyampaikan projek Solar + BESS yang boleh dibiayai tanpa membina keupayaan storan yang mendalam secara dalaman.',
  heroActions: [{ label: 'Jadi Rakan EPCC Solunar', href: '/ms/contact' }],
  image: {
    src: '/images/bess-partner-epcc.png',
    alt: 'Kontraktor EPCC dan pakar Solunar bekerjasama di tapak solar tambah storan di Malaysia',
    aspect: '4 / 3',
  },
  primaryKeyword: 'rakan BESS EPCC solar Malaysia',
  schema: { type: 'Service', serviceType: 'BESS technology partner for EPCC companies' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Pelanggan anda kini mahukan storan — bukan sekadar solar',
      paragraphs: [
        'Apabila Malaysia memasuki fasa baharu solar, Sistem Storan Tenaga Bateri menjadi semakin penting untuk solar skala utiliti, solar C&I, LSS, CRESS, sokongan grid, peluasan kuasa dan pengurusan permintaan maksimum. Semakin banyak tender dan pelanggan kini menjangkakan Solar + BESS, bukan solar sahaja.',
        'Tetapi BESS ialah disiplin yang berbeza daripada EPCC solar. Ia memerlukan kimia dan pemilihan bateri, logik kawalan PCS dan EMS, keselamatan kebakaran dan haba, penyelarasan perlindungan, penjajaran waranti, perancangan degradasi dan O&M jangka panjang. Membina semua itu secara dalaman adalah perlahan dan berisiko — terutamanya pada beberapa projek pertama. Itulah jurang yang diisi oleh Solunar.',
      ],
    },
    {
      kind: 'pullquote',
      text: 'Anda bawa projek. Kami bawa tulang belakang teknologi BESS.',
    },
    {
      kind: 'table',
      heading: 'EPCC vs Solunar: siapa buat apa',
      lead: 'Pembahagian peranan yang jelas supaya anda sentiasa mengawal pelanggan dan projek.',
      columns: ['Tanggungjawab', 'Syarikat EPCC', 'Solunar Energy'],
      rows: [
        ['Hubungan pelanggan', '✅ Milik', 'Sokong'],
        ['Pelaksanaan tapak & kerja sivil/elektrik', '✅ Milik', '—'],
        ['Pemilihan bateri / PCS / EMS', 'Disokong Solunar', '✅ Pimpin'],
        ['Cadangan teknikal & saiz BESS', 'Disokong Solunar', '✅ Pimpin'],
        ['Integrasi sistem', 'Disokong Solunar', '✅ Pimpin'],
        ['O&M BESS jangka panjang', 'Pilihan', '✅ Sokong'],
      ],
      caption: 'Pembahagian tanggungjawab antara syarikat EPCC dan Solunar Energy.',
    },
    {
      kind: 'cards',
      heading: 'Mengapa EPCC bekerjasama dengan Solunar',
      lead: 'Enam cara perkongsian ini membantu anda menang lebih banyak kerja dengan risiko lebih rendah:',
      columns: 2,
      items: [
        { icon: 'proposal', title: '1. Perkukuh cadangan anda', text: 'Letakkan BESS untuk peak shaving, peluasan kuasa, anjakan tenaga, kuasa sandaran, sokongan grid, CRESS dan kes pelaburan — dengan nilai teknikal dan kewangan yang jelas.' },
        { icon: 'safety', title: '2. Kurangkan risiko teknikal', text: 'Kami menyusun seni bina BESS dari awal — mengelak ralat saiz, padanan bateri/penyongsang yang lemah, isu EMS dan pertikaian waranti.' },
        { icon: 'battery', title: '3. Akses produk yang boleh dipercayai', text: 'Penyelesaian bateri BYD terbukti, penyongsang dan bateri GoodWe, BESS EVE dan pilihan pelbagai jenama untuk semua saiz projek.' },
        { icon: 'layers', title: '4. Integrasi pelbagai jenama', text: 'Kami menyelaras bateri, PCS, EMS, SCADA, pengubah, suis dan grid — tanpa mengikat anda pada satu konfigurasi.' },
        { icon: 'developers', title: '5. Yakinkan dana & bank', text: 'Naratif teknikal dan komersial yang lebih meyakinkan tentang keselamatan, waranti, prestasi, degradasi dan O&M.' },
        { icon: 'om', title: '6. Sokongan O&M jangka panjang', text: 'Pemantauan, penyelenggaraan dan sokongan selepas jualan yang melindungi prestasi dan waranti — memastikan pelanggan anda gembira bertahun-tahun.' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Bagaimana perkongsian EPCC berjalan',
      lead: 'Laluan lima langkah yang jelas daripada perbincangan pertama hingga sokongan jangka panjang:',
      items: [
        { title: 'Perbincangan projek', text: 'Anda kongsi keperluan, objektif pelanggan, maklumat tapak, profil beban, reka bentuk solar atau dokumen tender.' },
        { title: 'Semakan penyelesaian BESS', text: 'Kami cadangkan konfigurasi, saiz sistem, pilihan produk dan pendekatan integrasi yang sesuai.' },
        { title: 'Sokongan cadangan', text: 'Kami bantu anda sediakan cadangan teknikal dan komersial yang lebih kukuh untuk pelanggan, pemaju, dana atau pemilik aset.' },
        { title: 'Penyelarasan produk & integrasi', text: 'Kami sokong bekalan produk, penyelarasan pembekal, seni bina sistem, integrasi PCS/EMS dan perancangan pentauliahan.' },
        { title: 'Sokongan jangka panjang', text: 'Selepas siap, kami sokong O&M, pemantauan, semakan prestasi, penyelesaian masalah dan peluasan masa depan.' },
      ],
    },
    {
      kind: 'cta',
      heading: 'Tambah tulang belakang teknologi BESS pada perniagaan EPCC anda.',
      text: 'Sama ada anda menyediakan projek C&I, ladang solar skala utiliti, penyerahan LSS, peluang CRESS atau projek tenaga perbandaran, pasukan kami sedia menyokong anda di belakang tabir.',
      actions: [
        { label: 'Jadi Rakan EPCC Solunar', href: '/ms/contact' },
        { label: 'Tentang Kami', href: '/ms/about' },
      ],
    },
  ],
};

export const msSolutions: PageContent = {
  slug: '/ms/solutions',
  seoTitle: 'Penyelesaian Solar + BESS Malaysia | Solunar Energy',
  metaDescription:
    'Terokai rangkaian penuh penyelesaian Solar + BESS Solunar — storan komersial & industri, ESS skala utiliti, peak shaving, peluasan kuasa, O&M, keselamatan dan banyak lagi — setiap satu sepadan dengan masalah perniagaan sebenar.',
  navLabel: 'Penyelesaian',
  parent: { name: 'Laman Utama', path: '/ms' },
  eyebrow: 'Penyelesaian',
  h1: 'Penyelesaian Solar + BESS untuk Setiap Cabaran Tenaga',
  lead: 'Daripada memotong caj permintaan maksimum hingga membina ladang storan skala grid, Solunar memadankan penyelesaian storan tenaga bateri yang sesuai dengan masalah anda. Terokai setiap penyelesaian di bawah — cabaran yang diselesaikannya, dan cara kami membantu.',
  heroActions: [{ label: 'Dapatkan Penilaian Percuma', href: '/ms/contact' }],
  image: {
    src: '/images/utility-scale-ess.png',
    alt: 'Kontena storan tenaga bateri di sebelah ladang solar di Malaysia',
    aspect: '4 / 3',
  },
  primaryKeyword: 'penyelesaian storan solar Malaysia',
  schema: { type: 'CollectionPage' },
  blocks: [
    {
      kind: 'cards',
      heading: 'Storan Komersial & Industri (C&I)',
      lead: 'Untuk kilang, pusat beli-belah dan bangunan komersial:',
      columns: 3,
      items: [
        { icon: 'gauge', title: 'BESS C&I', text: 'Cabaran: caj permintaan naik, kapasiti masuk terhad. Penyelesaian: peak shaving, simpan solar, sokong peluasan & ketahanan.' },
        { icon: 'peak', title: 'Peak Shaving Permintaan Maksimum', text: 'Cabaran: lonjakan ringkas menaikkan bil sebulan. Penyelesaian: EMS menyahcas pada puncak, mengurangkan caj permintaan.' },
        { icon: 'expansion', title: 'Peluasan Kuasa dengan BESS', text: 'Cabaran: perlu lebih kuasa tetapi naik taraf grid lambat. Penyelesaian: storan beri kuasa puncak atas permintaan.' },
      ],
    },
    {
      kind: 'cards',
      heading: 'Skala Utiliti & Pemaju',
      lead: 'Untuk projek solar besar, skala grid dan pemaju:',
      columns: 3,
      items: [
        { icon: 'utilities', title: 'Ladang ESS Skala Utiliti', text: 'Cabaran: keterputusan, pematuhan grid dan keselamatan berskala. Penyelesaian: sokongan menyeluruh bateri, PCS/EMS/SCADA, kebakaran & O&M.' },
        { icon: 'battery-charging', title: 'BYD BESS Skala Utiliti', text: 'Cabaran: solar skala grid & CRESS perlukan penyelesaian menyeluruh yang boleh dibiayai. Penyelesaian: penyelesaian storan skala utiliti lengkap berkuasa BYD.' },
        { icon: 'developers', title: 'Untuk Pemaju & Pemilik Aset', text: 'Cabaran: margin solar tipis, syarat pembiayaan ketat. Penyelesaian: lapisan teknologi storan yang menjadikan aset boleh dihantar & dibiayai.' },
      ],
    },
    {
      kind: 'cards',
      heading: 'Operasi, Keselamatan & Pelokalan',
      lead: 'Melindungi prestasi dan nilai projek jangka panjang:',
      columns: 3,
      items: [
        { icon: 'om', title: 'O&M untuk Projek ESS', text: 'Cabaran: tanpa penyelenggaraan, aset tersasar daripada spesifikasi. Penyelesaian: pemantauan jauh, kesihatan bateri, pemeriksaan haba & kebakaran serta pelaporan.' },
        { icon: 'safety', title: 'Keselamatan & Kebolehpercayaan BESS', text: 'Cabaran: keselamatan ialah syarat pelaburan. Penyelesaian: kimia, BMS, pengurusan haba & perlindungan kebakaran dari hari pertama.' },
        { icon: 'assembly', title: 'Pemasangan Tempatan Masa Depan', text: 'Cabaran: bergantung pada import melambatkan penghantaran. Penyelesaian: Solunar menuju ke arah pemasangan & sokongan storan tempatan.' },
      ],
    },
    {
      kind: 'cta',
      heading: 'Tidak pasti penyelesaian mana yang sesuai untuk projek anda?',
      text: 'Beritahu Solunar tapak, beban dan matlamat anda — kami akan tunjukkan pendekatan Solar + BESS yang sesuai dan kira nombornya, secara percuma.',
      actions: [
        { label: 'Dapatkan Penilaian Percuma', href: '/ms/contact' },
        { label: 'Untuk Syarikat EPCC', href: '/ms/for-epcc' },
      ],
    },
  ],
};

export const msContact: PageContent = {
  slug: '/ms/contact',
  seoTitle: 'Hubungi Solunar Energy | Penilaian Projek Solar + BESS',
  metaDescription:
    'Beritahu Solunar tentang projek anda dan dapatkan pandangan pakar Solar + BESS. Kongsi bil elektrik, profil beban atau ringkasan projek — percuma, sulit dan tanpa obligasi.',
  navLabel: 'Hubungi Kami',
  parent: { name: 'Laman Utama', path: '/ms' },
  eyebrow: 'Hubungi · Penilaian Projek Percuma',
  h1: 'Beritahu Kami Tentang Projek Anda — Dapatkan Pandangan Pakar Solar + BESS',
  lead: 'Kongsi bil elektrik, profil beban atau ringkasan projek anda. Solunar akan menilai penjimatan permintaan maksimum, saiz sistem dan kebolehbiayaan anda — percuma, sulit dan tanpa obligasi.',
  heroActions: [{ label: 'Hantar Keperluan Projek', href: '/contact' }],
  image: {
    src: '/images/contact-hero.png',
    alt: 'Perunding Solunar membincangkan projek Solar + BESS dengan pelanggan di Kuala Lumpur',
    aspect: '4 / 3',
  },
  primaryKeyword: 'hubungi Solunar Energy',
  schema: { type: 'ContactPage' },
  blocks: [
    {
      kind: 'list',
      variant: 'check',
      columns: 1,
      heading: 'Hubungi Solunar untuk:',
      lead: 'Kami menyokong EPCC, pemaju, pemilik aset dan pelanggan komersial:',
      items: [
        'Perkongsian EPCC',
        'Bekalan penyongsang dan bateri GoodWe',
        'Integrasi bateri BYD terpilih',
        'Integrasi BESS EVE',
        'Integrasi PCS dan EMS',
        'Storan komersial dan industri',
        'Sokongan ESS skala utiliti',
        'O&M dan selepas jualan',
        'Perkongsian pemasangan tempatan',
      ],
    },
    {
      kind: 'note',
      text: 'Nota: Borang pertanyaan dalam talian yang penuh kini dalam bahasa Inggeris. Anda juga boleh menghubungi kami terus melalui e-mel, telefon atau WhatsApp dalam Bahasa Malaysia — kami akan membalas dalam Bahasa Malaysia.',
    },
    {
      kind: 'cta',
      heading: 'Sedia untuk bermula?',
      text: 'Klik di bawah untuk mengisi borang keperluan projek, atau hubungi kami terus melalui WhatsApp. Kami biasanya membalas dalam satu hari bekerja.',
      actions: [
        { label: 'Isi Borang Keperluan Projek', href: '/contact' },
        { label: 'Kembali ke Laman Utama BM', href: '/ms' },
      ],
    },
  ],
};

import { msMorePages } from './ms-more';

export const msPages: PageContent[] = [
  msHome,
  msAbout,
  msForEpcc,
  msSolutions,
  msContact,
  ...msMorePages,
];

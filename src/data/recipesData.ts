import { Recipe } from '../types/culinary';

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'rendang-wagyu-karamelisasi',
    title: 'Rendang Daging Sapi Karamelisasi Minyak Kelapa',
    subtitle: 'Teknik Reduksi Lambat & Emulsi Minyak Kelapa Anti-Gosong',
    category: 'Nusantara Modern',
    difficulty: 'Mahir',
    cookTimeMinutes: 240,
    prepTimeMinutes: 45,
    servingsBase: 6,
    antiGagalRating: 99,
    image: '/src/assets/images/recipe_rendang_wagyu_1792735456751.jpg',
    description: 'Resep rendang tingkat maestro dengan teknik bertahap (Gulai -> Kalio -> Rendang). Menggunakan santan kelapa murni perasan pertama dan pengendalian panas mikro agar daging empuk meleleh tanpa hancur.',
    chefQuote: '"Kunci rendang bukan pada tingginya api, melainkan kesabaran dalam membiarkan minyak santan mengeluarkan pigmen gelap karamel secara alami."',
    equipmentNeeded: ['Wajan Kuali Baja Tebal (Cast Iron / Wajan Besi)', 'Spatula Kayu Lebar', 'Cobek Batu / Food Processor Kecepatan Rendah'],
    ingredients: [
      { name: 'Daging Sapi Sandung Lamur / Sengkel / Chuck Roll', amount: 1000, unit: 'gram', notes: 'Potong searah serat ukuran 4x4 cm tebal 2 cm' },
      { name: 'Santan Kental Kelapa Tua Murni (Perasan Pertama)', amount: 1200, unit: 'ml', notes: 'Wajib dari kelapa parut asli, hindari santan instan untuk minyak optimal' },
      { name: 'Santan Encer (Perasan Kedua)', amount: 800, unit: 'ml' },
      { name: 'Bawang Merah Lokal', amount: 150, unit: 'gram', notes: 'Dihaluskan' },
      { name: 'Bawang Putih Kating', amount: 60, unit: 'gram', notes: 'Dihaluskan' },
      { name: 'Cabai Merah Keriting', amount: 200, unit: 'gram', notes: 'Biji dibuang sebagian agar warna merah pekat tanpa terlalu membakar lidah' },
      { name: 'Jahe Segar', amount: 40, unit: 'gram', notes: 'Kupas dan haluskan' },
      { name: 'Lengkuas Tua', amount: 60, unit: 'gram', notes: 'Geprek memar' },
      { name: 'Batang Serai', amount: 3, unit: 'batang', notes: 'Memarkan bagian putihnya' },
      { name: 'Daun Kunyit', amount: 2, unit: 'lembar', notes: 'Simpulkan mati' },
      { name: 'Daun Jeruk Purut Segar', amount: 6, unit: 'lembar', notes: 'Buang tulang daunnya' },
      { name: 'Asam Kandis', amount: 2, unit: 'buah', notes: 'Masukkan di fase akhir kalio' },
      { name: 'Garam Laut Kasar', amount: 18, unit: 'gram' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Mendidihkan Santan & Ekstraksi Emulsi Aromatik (Fase Gulai)',
        instruction: 'Tuang santan kental, santan encer, bumbu halus, serai, daun kunyit, daun jeruk, dan lengkuas ke dalam kuali tebal. Nyalakan api sedang. Aduk perlahan terus menerus dengan gerakan menimba.',
        durationMinutes: 30,
        antiGagalSecret: 'PANTANGAN BESAR: Jangan berhenti mengaduk dengan gerakan menimba di awal sampai santan mendidih rata. Jika berhenti, protein kelapa akan pecah (curdling) dan rendang akan terasa berpasir/berminyak terpisah.',
        culinaryScience: 'Gerakan menimba mendistribusikan panas secara merata dan mencegah pemisahan fase air-minyak pada emulsi santan sebelum lemak kelapa mengikat bumbu aromatik.',
        temperatureOrFire: 'Api Sedang (100°C - Simmering Teratur)',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 2,
        title: 'Memasukkan Daging & Penguncian Enzimatis',
        instruction: 'Setelah santan mengeluarkan minyak tipis di permukaan dan aroma mentah bumbu hilang, masukkan potongan daging sapi. Kecilkan api ke tingkat sedang-kecil. Masak sambil sesekali diaduk.',
        durationMinutes: 60,
        antiGagalSecret: 'Potong daging searah serat dengan ketebalan minimal 2-2.5 cm. Jangan memotong terlalu tipis atau melawan serat pada tahap ini, karena daging akan hancur lebur menjadi serpihan selama 4 jam pemasakan.',
        culinaryScience: 'Kolagen pada jaringan ikat daging (terutama sengkel/chuck) memerlukan suhu stabil 70-85°C dalam waktu lama untuk terhidrolisis menjadi gelatin yang lembut dan juicy.',
        temperatureOrFire: 'Api Sedang-Kecil (85°C)',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 3,
        title: 'Transisi Menuju Kalio (Reduksi Cairan 70%)',
        instruction: 'Kuah akan mengental pekat, berwarna jingga kemerahan kecokelatan, dan minyak kelapa mulai memisah banyak ke permukaan. Masukkan asam kandis dan garam.',
        durationMinutes: 75,
        antiGagalSecret: 'Kunci Anti-Gagal: Masukkan asam kandis HANYA pada fase ini. Jika asam dimasukkan di awal, keasaman tinggi akan mengkoagulasi protein santan dan menghambat daging menjadi empuk.',
        culinaryScience: 'Garam dan asam kandis pada titik ini bertindak sebagai penyeimbang rasa (flavor balancer) saat konsentrasi padatan meningkat pesat akibat penguapan air.',
        temperatureOrFire: 'Api Kecil Berkala (75°C)',
        checkpointType: 'aroma'
      },
      {
        stepNumber: 4,
        title: 'Fase Karamelisasi Akhir (Menjadi Rendang Hitam Mengkilap)',
        instruction: 'Kecilkan api sekecil mungkin. Terus aduk perlahan bagian dasar wajan agar tidak berkerak gosong pahit. Bumbu akan berubah dari cokelat menjadi cokelat tua kehitaman berkilau.',
        durationMinutes: 75,
        antiGagalSecret: 'Jangan tinggalkan wajan! Gunakan spatula kayu untuk menyisir dasar wajan secara konstan. Warna hitam rendang otentik didapat dari reaksi Maillard dan karamelisasi gula kelapa alami, BUKAN dari gosong!',
        culinaryScience: 'Reaksi Maillard antara asam amino dari daging dan gula reduksi dalam santan pada suhu rendah berkepanjangan menghasilkan ratusan senyawa aroma aromatik kompleks (furans, pyrazines) dan pigmen melanoidin.',
        temperatureOrFire: 'Api Lilin / Sangat Kecil (70°C)',
        checkpointType: 'suhu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Santan pecah dan bumbu terasa memisah kasar',
        prevention: 'Gunakan kelapa tua segar, dan wajib diaduk gerakan menimba tanpa henti sampai mendidih pertama.'
      },
      {
        mistake: 'Bumbu pahit dan gosong di dasar wajan',
        prevention: 'Api di fase akhir harus sangat kecil (api lilin) dan gunakan spatula kayu yang menyapu rata dasar wajan.'
      },
      {
        mistake: 'Daging hancur berkeping-keping',
        prevention: 'Potongan daging jangan terlalu kecil (minimal 50-60 gram per potong) dan potong searah alur serat.'
      }
    ],
    flavorProfile: {
      umami: 96,
      spicy: 75,
      aroma: 98,
      complexity: 94,
      crispiness: 30
    }
  },
  {
    id: 'pan-seared-salmon-crispy-dabu',
    title: 'Salmon Crispy Skin dengan Sambal Dabu-Dabu Segar',
    subtitle: 'Teknik Presisi Pan-Seared Kulit Renyah Kaca & Daging Meleleh',
    category: 'Gourmet Seafood & Grill',
    difficulty: 'Menengah',
    cookTimeMinutes: 15,
    prepTimeMinutes: 20,
    servingsBase: 2,
    antiGagalRating: 98,
    image: '/src/assets/images/recipe_salmon_dabu_1792735458629.jpg',
    description: 'Masterclass mengolah ikan salmon: mendapatkan kulit yang renyah berderak seperti kerupuk (crispy crackling skin) dengan daging bagian dalam yang tetap moist, lembut, dan kemerahan sempurna.',
    chefQuote: '"Musuh terbesar kulit renyah adalah kelembapan air. Keringkan kulit ikan sampai benar-benar kering seperti kertas sebelum menyentuh minyak panas."',
    equipmentNeeded: ['Wajan Stainless Steel atau Cast Iron Tebal', 'Fish Spatula Fleksibel', 'Kitchen Paper Towel Berkualitas'],
    ingredients: [
      { name: 'Fillet Salmon Segar (Skin-on)', amount: 400, unit: 'gram', notes: 'Bagi 2 porsi @ 200g, pastikan sisik sudah dibersihkan bersih' },
      { name: 'Minyak Goreng Netral (Canola / Corn Oil)', amount: 25, unit: 'ml', notes: 'Smoke point tinggi' },
      { name: 'Garam Laut Halus & Lada Hitam', amount: 5, unit: 'gram' },
      { name: 'Unsalted Butter Dingin', amount: 20, unit: 'gram', notes: 'Untuk fase arrosé / basting aroma' },
      { name: 'Tomat Merah & Hijau Segar', amount: 150, unit: 'gram', notes: 'Buang biji berair, potong brunoise dadu kecil rapi' },
      { name: 'Bawang Merah Kupas', amount: 50, unit: 'gram', notes: 'Iris melintang tipis renyah' },
      { name: 'Cabai Rawit Merah & Hijau', amount: 20, unit: 'gram', notes: 'Iris tipis' },
      { name: 'Jeruk Limau / Kasturi Segar', amount: 3, unit: 'buah', notes: 'Peras saat akan disajikan' },
      { name: 'Minyak Kelapa Murni Panas', amount: 30, unit: 'ml', notes: 'Untuk menyiram bumbu sambal mentah' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pengeringan Total & Penekanan Kulit (The Dry Skin Protocol)',
        instruction: 'Gunakan pisau chef untuk mengikis sisa kelembapan pada kulit salmon (gerakan scraping). Keringkan kedua sisi menggunakan paper towel hingga benar-benar kesat. Taburi garam hanya sesaat sebelum masuk wajan.',
        durationMinutes: 5,
        antiGagalSecret: 'KUNCI EMAS ANTI-LEMBEK: Jangan garam kulit salmon lebih dari 1 menit sebelum memasak! Garam bersifat higroskopis dan akan menarik air dari dalam daging ke permukaan kulit, merusak kerenyahan.',
        culinaryScience: 'Air yang terperangkap pada kulit saat menyentuh minyak akan berubah menjadi uap air (steam) yang merebus kulit alih-alih menggorengnya renyah secara Maillard.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 2,
        title: 'Pemanasan Wajan & Kontak Pertama (The Press Down Technique)',
        instruction: 'Panaskan wajan dengan api sedang-tinggi hingga minyak mulai bergelombang tipis (shimmering). Letakkan salmon dengan sisi KULIT MENGHADAP KE BAWAH perlahan menjauhi badan Anda. Segera tekan punggung salmon dengan spatula fleksibel selama 25-30 detik.',
        durationMinutes: 1,
        antiGagalSecret: 'Wajib ditekan 30 detik pertama! Protein kulit ikan akan mengerut seketika saat terkena panas mendadak. Tanpa tekanan, bagian tengah kulit akan melengkung terangkat dan tidak akan renyah merata.',
        culinaryScience: 'Denaturasi termal protein kolagen pada kulit menyebabkan kontraksi elastis cepat. Tekanan mekanis memastikan 100% permukaan kulit menyentuh logam panas.',
        temperatureOrFire: 'Api Sedang-Tinggi (Wajan 190°C)',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 3,
        title: '85% Cooking on the Skin & Basting Butter',
        instruction: 'Turunkan ke api sedang. Biarkan 80-85% proses memasak terjadi pada sisi kulit. Perhatikan garis opaque putih susu yang merambat naik di sisi samping daging salmon. Masukkan butter dan miringkan wajan untuk menyendok mentega ke atas daging.',
        durationMinutes: 5,
        antiGagalSecret: 'JANGAN DIBALIK TERLALU CEPAT! Biarkan salmon matang perlahan dari bawah. Saat kulit sudah siap, ia akan melepaskan diri secara alami dari wajan tanpa lengket.',
        culinaryScience: 'Efek Leidenfrost dan pembentukan kerak renyah melepaskan ikatan ikutan protein dengan permukaan wajan stainless steel.',
        temperatureOrFire: 'Api Sedang (160°C)',
        checkpointType: 'waktu'
      },
      {
        stepNumber: 4,
        title: 'Flip Singkat (Kiss of Heat) & Resting Salmon',
        instruction: 'Balik salmon ke sisi daging HANYA selama 45-60 detik untuk mematangkan bagian atas tanpa mengeringkan daging. Angkat dan istirahatkan (rest) di atas cooling rack kulit menghadap atas selama 3 menit.',
        durationMinutes: 3,
        antiGagalSecret: 'PANTANGAN: Jangan letakkan salmon matang di atas piring datar atau paper towel dengan kulit di bawah! Uap panas dari daging akan membuat kulit yang renyah kembali lembek.',
        culinaryScience: 'Resting memungkinkan tegangan cairan dalam serat ikan mendistribusikan kelembapan kembali ke seluruh daging tanpa menetes keluar.',
        temperatureOrFire: 'Resting di Suhu Ruang',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 5,
        title: 'Peracikan Sambal Dabu-Dabu Segar Siram Panas',
        instruction: 'Campurkan irisan tomat, bawang merah, cabai rawit, garam, dan sedikit gula. Panaskan 30 ml minyak kelapa hingga berasap tipis, lalu siramkan langsung ke atas campuran bumbu. Beri perasan air jeruk limau.',
        durationMinutes: 4,
        antiGagalSecret: 'Minyak harus panas saat disiramkan untuk melepaskan minyak atsiri bawang dan cabai tanpa membuat tomat layu berair.',
        culinaryScience: 'Minyak kelapa panas mengekstraksi senyawa oleoresin cabai dan meredakan rasa langu mentah sulfur pada bawang.',
        temperatureOrFire: 'Minyak Panas (180°C)',
        checkpointType: 'aroma'
      }
    ],
    commonFailures: [
      {
        mistake: 'Kulit salmon lengket parah dan robek saat dibalik',
        prevention: 'Wajan belum cukup panas saat ikan dimasukkan, atau ikan dibalik secara paksa sebelum kerak melepaskan diri secara alami.'
      },
      {
        mistake: 'Daging salmon kering, berserat keras, dan keluar busa putih tebal (albumin)',
        prevention: 'Suhu api terlalu tinggi dan ikan dimasak terlalu lama. Targetkan doneness medium (suhu internal 50-52°C).'
      }
    ],
    flavorProfile: {
      umami: 92,
      spicy: 82,
      aroma: 88,
      complexity: 85,
      crispiness: 99
    }
  },
  {
    id: 'ayam-betutu-gilimanuk-slow-braise',
    title: 'Ayam Betutu Rempah Wewangen Tradisional',
    subtitle: 'Teknik Marinasi Base Genep & Slow-Steam Bungkus Daun Pisang',
    category: 'Nusantara Modern',
    difficulty: 'Menengah',
    cookTimeMinutes: 120,
    prepTimeMinutes: 40,
    servingsBase: 4,
    antiGagalRating: 99,
    image: '/src/assets/images/recipe_ayam_betutu_1792735457458.jpg',
    description: 'Resep Ayam Betutu otentik dengan 15 jenis rempah wewangen khas Bali. Menggunakan metode pembungkusan daun pisang berlapis dan pengukusan lambat agar bumbu meresap hingga sumsum tulang ayam.',
    chefQuote: '"Rempah base genep Bali jangan diblender hingga seperti pasta halus bayi, tetapi dicincang kasar (rajang) agar tekstur dan profil aromatiknya berlapis."',
    equipmentNeeded: ['Panci Kukusan / Steamer Besar', 'Panggangan Oven atau Wajan Bakar', 'Tali Kasur Alami / Tusuk Gigi'],
    ingredients: [
      { name: 'Ayam Kampung Utuh (Ukuran Sedang)', amount: 1, unit: 'ekor (~1.1 kg)', notes: 'Cuci bersih, keringkan, belah bagian dada (spatchcock) atau biarkan utuh' },
      { name: 'Bawang Merah Bali', amount: 120, unit: 'gram', notes: 'Cincang rajang halus' },
      { name: 'Bawang Putih', amount: 60, unit: 'gram', notes: 'Cincang rajang halus' },
      { name: 'Kencur Segar', amount: 40, unit: 'gram', notes: 'Rajang halus' },
      { name: 'Kunyit Bakar', amount: 50, unit: 'gram', notes: 'Parut halus' },
      { name: 'Lengkuas Muda & Jahe', amount: 60, unit: 'gram', notes: 'Rajang halus' },
      { name: 'Cabai Rawit Merah', amount: 40, unit: 'gram', notes: 'Rajang kasar' },
      { name: 'Ketumbar Sangrai & Merica Hitam', amount: 15, unit: 'gram', notes: 'Tumbuk kasar' },
      { name: 'Minyak Kelapa Tanusan (VCO / Kelapa Asli)', amount: 60, unit: 'ml' },
      { name: 'Terasi Bakar Khas Bali', amount: 10, unit: 'gram' },
      { name: 'Daun Pisang Batu Segar', amount: 4, unit: 'lembar lebar', notes: 'Layukan di atas api kompor agar lentur tidak robek' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Merajang Bumbu Base Genep & Ekstraksi Minyak Aromatis',
        instruction: 'Tumis bumbu rajang bersama ketumbar, merica, dan terasi dengan minyak kelapa murni di atas api sedang hingga harum semerbak dan matang tanpa kecokelatan berlebih.',
        durationMinutes: 15,
        antiGagalSecret: 'Wajib layukan dan tumis bumbu sampai benar-benar matang sebelum dilumurkan ke ayam. Jika bumbu mentah langsung dibungkus kukus, ayam akan berbau langu rempah mentah.',
        culinaryScience: 'Minyak kelapa mengikat molekul aroma lipofilik dari kencur dan kurkumin kunyit, mengintensifkan penetrasi rasa.',
        temperatureOrFire: 'Api Sedang (140°C)',
        checkpointType: 'aroma'
      },
      {
        stepNumber: 2,
        title: 'Pijatan Bumbu ke Bawah Kulit Ayam (Deep Massage)',
        instruction: 'Setelah bumbu dingin, lumuri ke seluruh permukaan ayam, rongga dalam, dan selipkan sebagian bumbu di bawah kulit bagian dada dan paha dengan hati-hati tanpa merobek kulit.',
        durationMinutes: 10,
        antiGagalSecret: 'Selipkan bumbu ke bawah lapisan kulit. Kulit ayam bertindak sebagai pelindung kedap air yang menghalangi bumbu masuk ke serat daging dada jika hanya dilumuri dari luar.',
        culinaryScience: 'Osmosis pasif berjalan lebih cepat saat bumbu langsung bersentuhan dengan jaringan otot polos daging tanpa sawar lipid kulit.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 3,
        title: 'Pembungkusan Daun Pisang Berlapis & Slow Steaming',
        instruction: 'Bungkus ayam rapat dengan 3-4 lapis daun pisang yang sudah dilayukan. Semat dengan lidi. Masukkan ke dalam kukusan yang sudah mendidih beruap banyak. Kukus api kecil selama 90 menit.',
        durationMinutes: 90,
        antiGagalSecret: 'Bungkus minimal 3 lapis daun pisang. Daun pisang bukan hanya pembungkus, tetapi melepaskan lilin polifenol alami saat dikukus yang memberikan wangi khas aroma Betutu Gilimanuk.',
        culinaryScience: 'Uap tertutup dalam bungkusan daun menciptakan efek bejana tekan lembut (micro-pressure chamber) yang melunakkan serat ayam kampung tanpa membuat cairannya menguap hilang.',
        temperatureOrFire: 'Api Kecil Berkukus (100°C Konsisten)',
        checkpointType: 'waktu'
      },
      {
        stepNumber: 4,
        title: 'Finishing Pemanggangan Kilat (Smoke Infusion)',
        instruction: 'Buka bungkusan terluar daun pisang, panggang ayam di atas bara arang atau oven bersuhu 200°C selama 15 menit hingga daun terluar sedikit gosong harum dan sari kuah mengental berkilau.',
        durationMinutes: 15,
        antiGagalSecret: 'Siramkan kembali sari kaldu yang keluar dari dalam bungkusan ke atas ayam sesaat sebelum disajikan.',
        culinaryScience: 'Proses pemanggangan akhir mengentalkan gelatin alami yang terlepas dari tulang ayam menjadi glaze berkilau.',
        temperatureOrFire: 'Oven 200°C / Bara Arang',
        checkpointType: 'suhu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Daging ayam kampung liat dan alot',
        prevention: 'Waktu mengukus tidak boleh kurang dari 80-90 menit dengan api stabil agar kolagen melunak.'
      },
      {
        mistake: 'Aroma langu dan rasa getir',
        prevention: 'Bumbu wajib ditumis matang terlebih dahulu dan kunyit harus dibakar sebelum dihaluskan.'
      }
    ],
    flavorProfile: {
      umami: 94,
      spicy: 88,
      aroma: 99,
      complexity: 97,
      crispiness: 45
    }
  },
  {
    id: 'croissant-artisanal-french-butter',
    title: 'Croissant Mentega Prancis 27 Lapis (Lamination Master)',
    subtitle: 'Presisi Suhu Mentega & Pembentukan Sarang Lebah (Honeycomb Crumb)',
    category: 'Artisanal Bakery',
    difficulty: 'Mahir',
    cookTimeMinutes: 20,
    prepTimeMinutes: 180,
    servingsBase: 8,
    antiGagalRating: 97,
    image: '/src/assets/images/recipe_sourdough_croissant_1792735459622.jpg',
    description: 'Panduan standar akademi pastry Prancis untuk menghasilkan croissant berongga honeycomb sempurna, kulit luar rapuh keemasan, dan aroma mentega fermentasi murni.',
    chefQuote: '"Dalam dunia lamination, suhu adalah segalanya. Jika mentega meleleh 1 derajat saja melewati titik kritisnya, Anda tidak sedang membuat croissant, Anda sedang membuat roti brioche mentega."',
    equipmentNeeded: ['Rolling Pin Kayu Berat', 'Penggaris Stainless Steel Bersih', 'Baking Sheet & Kertas Silpat / Parchment'],
    ingredients: [
      { name: 'Tepung Terigu Protein Tinggi (Bread Flour T55/T45)', amount: 500, unit: 'gram' },
      { name: 'Ragi Instan Aktif Berkualitas', amount: 10, unit: 'gram' },
      { name: 'Gula Pasir Halus', amount: 55, unit: 'gram' },
      { name: 'Garam Halus', amount: 10, unit: 'gram' },
      { name: 'Air Es Dingin (3-4°C)', amount: 140, unit: 'ml' },
      { name: 'Susu Cair UHT Dingin', amount: 140, unit: 'ml' },
      { name: 'Mentega Tawar Dingin dalam Adonan (Détrempe)', amount: 40, unit: 'gram' },
      { name: 'Mentega Prancis Kualitas Tinggi (Dry Butter 82-84% Fat)', amount: 250, unit: 'gram', notes: 'Untuk lempengan tourage laminasi' },
      { name: 'Kuning Telur + 1 sdm Susu', amount: 1, unit: 'butir', notes: 'Untuk egg wash halus' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pengadonan Détrempe & Fermentasi Dingin Semalam',
        instruction: 'Campurkan tepung, ragi, gula, garam, air es, dan susu. Uleni hanya sampai kalis awal (jangan over-knead). Bentuk persegi pipih, bungkus plastic wrap, istirahatkan di kulkas chiller (4°C) minimal 6-12 jam.',
        durationMinutes: 15,
        antiGagalSecret: 'JANGAN ULENI HINGGA KALIS ELASTIS PENUH seperti roti tawar! Gluten yang terlalu kuat akan melawan balik saat digilas nanti dan membuat adonan menyusut keras.',
        culinaryScience: 'Fermentasi dingin lambat (retardation) memungkinkan enzim amilase memecah pati menjadi gula sederhana tanpa memproduksi gas CO2 secara berlebihan, menciptakan rasa kompleks.',
        temperatureOrFire: 'Chiller Kulkas (4°C)',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 2,
        title: 'Pembuatan Beurrage (Lempeng Mentega) & Sinkronisasi Plastisitas',
        instruction: 'Pukul dan gilas 250g mentega dingin di antara dua lembar baking paper menjadi bujur sangkar 18x18 cm dengan ketebalan merata. Pastikan suhu mentega dan adonan sama-sama berada di 14-16°C (fleksibel tapi tidak lembek).',
        durationMinutes: 15,
        antiGagalSecret: 'HUKUM BESI LAMINASI: Tingkat kelenturan mentega dan adonan WAJIB IDENTIK! Jika mentega terlalu keras, mentega akan pecah berkeping di dalam adonan (shattering). Jika terlalu lembek, mentega akan terserap ke dalam tepung.',
        culinaryScience: 'Mentega dengan kadar lemak 82%+ memiliki titik leleh plastis spesifik yang menahan lapisan tipis tanpa terputus.',
        temperatureOrFire: 'Suhu Kerja (16°C)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 3,
        title: 'Tourage: Single & Double Fold (Pembentukan 27 Lapisan)',
        instruction: 'Bungkus lempeng mentega di dalam adonan (enveloping). Gilas memanjang hingga 60 cm tebal 7mm. Lakukan 1 kali Double Fold (Book fold), istirahatkan 30 menit di kulkas. Lanjut 1 kali Single Fold (Letter fold).',
        durationMinutes: 60,
        antiGagalSecret: 'Selalu istirahatkan adonan di chiller selama 30 menit di antara setiap lipatan untuk merilekskan tegangan gluten dan menjaga mentega tetap padat terlapis.',
        culinaryScience: 'Setiap lipatan mengalikan jumlah lapisan mentega dan adonan secara eksponensial (27 lapisan mentega terisolasi).',
        temperatureOrFire: 'Chiller Kulkas (4°C)',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 4,
        title: 'Pemotongan, Penggulungan & Proofing Suhu Presisi',
        instruction: 'Gilas adonan setebal 3.5mm, potong segitiga dasar 9cm panjang 25cm. Gulung lembut dari pangkal ke ujung. Proofing pada suhu 26-27°C dengan kelembapan 75% selama 2-2.5 jam hingga mengembang dua kali lipat dan bergoyang lembut seperti jeli saat disentuh.',
        durationMinutes: 130,
        antiGagalSecret: 'BAHAYA PROOFING: JANGAN SEKALI-KALI proofing di atas suhu 28°C! Mentega di dalam lapisan akan meleleh keluar menggenang di loyang sebelum croissant sempat dipanggang.',
        culinaryScience: 'Titik leleh lemak susu murni adalah 32-34°C. Suhu proofing 26-27°C memberi waktu ragi beraktivitas tanpa merusak struktur suspensi lemak.',
        temperatureOrFire: 'Ruang Proofing (26-27°C Maksimal)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 5,
        title: 'Pemanggangan Oven Panas & Steam Expansion',
        instruction: 'Oleskan egg wash hati-hati hanya pada permukaan atas (jangan mengenai garis lapisan samping!). Panggang di oven bersuhu 200°C selama 8 menit, lalu turunkan ke 175°C selama 12-14 menit hingga cokelat keemasan seragam.',
        durationMinutes: 22,
        antiGagalSecret: 'Jangan oleskan egg wash pada sisi potongan lapisan! Egg wash yang menetes ke samping akan bertindak seperti lem yang mengunci lapisan mekar mengembang.',
        culinaryScience: 'Air dalam mentega mendidih dan berubah menjadi uap bertekanan tinggi yang mengangkat lapisan adonan ke atas membentuk kantung sarang lebah (honeycomb) sebelum gluten mengeras permanen.',
        temperatureOrFire: 'Oven 200°C -> 175°C',
        checkpointType: 'waktu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Mentega meleleh membanjiri loyang saat dipanggang',
        prevention: 'Suhu ruang proofing terlalu panas (>28°C) atau mentega meleleh saat penggilasan adonan.'
      },
      {
        mistake: 'Bagian dalam padat seperti roti biasa (tidak ada sarang lebah honeycomb)',
        prevention: 'Mentega terserap ke dalam adonan karena adonan dan mentega tidak dijaga dingin selama proses penggilasan.'
      }
    ],
    flavorProfile: {
      umami: 80,
      spicy: 0,
      aroma: 98,
      complexity: 92,
      crispiness: 97
    }
  },
  {
    id: 'dubai-chewy-pistachio-kunafa',
    title: 'Dubai Chewy Pistachio Kunafa Lava Cookie',
    subtitle: 'Fudgy Dark Chocolate Cookie Berisi Kunafa Kataifi Renyah & 100% Pure Pistachio Cream',
    category: 'Viral Premium & Pastry',
    difficulty: 'Menengah',
    cookTimeMinutes: 12,
    prepTimeMinutes: 35,
    servingsBase: 6,
    antiGagalRating: 99,
    image: '/src/assets/images/recipe_dubai_chewy_cookie_1793325091153.jpg',
    description: 'Inovasi pastry viral paling diburu: perpaduan adonan dark chocolate cookie fudgy kenyal (chewy) ala New York dengan isian khas Dubai kunafa pastry renyah berderak dan pasta pistachio murni yang meleleh sensual saat dibelah hangat.',
    chefQuote: '"Rahasia Dubai Chewy Cookie bukan sekadar pasta pistachio biasa, melainkan sangraian pastry kataifi dengan brown butter hingga ultra-crunchy, lalu dibekukan kilat menjadi bola inti sebelum dibungkus cookie agar saat dipanggang bagian tengahnya tetap meleleh lava."',
    equipmentNeeded: ['Wajan Anti Lengket / Pan Tebal', 'Ice Cream Scoop Besar (Ukuran 50mm)', 'Baking Sheet & Silpat / Baking Paper', 'Freezer'],
    ingredients: [
      { name: 'Kataifi Pastry Threads (Adonan Kunafa Halus)', amount: 150, unit: 'gram', notes: 'Potong cincang pendek ukuran 1-2 cm' },
      { name: 'Brown Butter Prancis (Beurre Noisette)', amount: 45, unit: 'gram', notes: 'Mentega tawar dilelehkan hingga beraroma hazelnut panggang' },
      { name: 'Pure 100% Pistachio Butter (Tanpa Minyak Tambahan)', amount: 180, unit: 'gram', notes: 'Gunakan pasta pistachio murni warna hijau zamrud' },
      { name: 'Tahini (Pasta Wijen Panggang)', amount: 15, unit: 'gram', notes: 'Penyeimbang rasa nutty agar tidak enek' },
      { name: 'White Chocolate Couverture 34%', amount: 60, unit: 'gram', notes: 'Dilelehkan hangat untuk mengikat pasta kunafa' },
      { name: 'Unsalted Butter Dingin Potong Dadu', amount: 120, unit: 'gram', notes: 'Untuk adonan cookie' },
      { name: 'Dark Brown Sugar Asli', amount: 110, unit: 'gram', notes: 'Kunci kelembapan & tekstur chewy melar' },
      { name: 'Gula Pasir Halus', amount: 50, unit: 'gram' },
      { name: 'Telur Ayam Segar Dingin', amount: 1, unit: 'butir + 1 kuning telur' },
      { name: 'Tepung Terigu Protein Sedang', amount: 190, unit: 'gram' },
      { name: 'Bubuk Kakao Hitam Murni (Dutch Processed 100%)', amount: 35, unit: 'gram' },
      { name: 'Baking Powder & Baking Soda', amount: 4, unit: 'gram' },
      { name: 'Dark Chocolate Couverture 70% Callebaut', amount: 100, unit: 'gram', notes: 'Cincang kasar untuk lelehan kantung cokelat' },
      { name: 'Garam Laut Serpih Maldon (Flaky Sea Salt)', amount: 5, unit: 'gram', notes: 'Taburan wajib di atas cookie matang' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Penyangraian Pastry Kataifi dengan Brown Butter (The Golden Crunch)',
        instruction: 'Panaskan brown butter di wajan dengan api sedang-kecil. Masukkan potongan serat kataifi. Aduk terus menerus secara konsisten selama 7-9 menit hingga kataifi berubah menjadi warna keemasan merata dan berbunyi gemerisik renyah garing.',
        durationMinutes: 10,
        antiGagalSecret: 'JANGAN DITINGGALKAN! Kataifi memiliki serat yang sangat tipis dan mudah gosong dalam hitungan detik. Angkat segera dari wajan begitu warnanya mencapai golden amber, karena panas sisa wajan bisa membuatnya pahit.',
        culinaryScience: 'Kadar air kataifi yang teruapkan sempurna digantikan oleh lemak mentega beraroma kacang (Maillard beurré), menghasilkan kerenyahan tahan lama yang tidak akan lembek meski terendam krim pistachio selama berhari-hari.',
        temperatureOrFire: 'Api Sedang-Kecil (150°C)',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 2,
        title: 'Pencampuran Isian Pistachio Crema & Tahini (The Velvet Core)',
        instruction: 'Di dalam mangkuk, campurkan kataifi sangrai renyah yang sudah hangat-hangat kuku bersama pasta pistachio murni, tahini, dan white chocolate leleh. Aduk rata hingga seluruh helai kunafa terlapisi krim hijau kental.',
        durationMinutes: 5,
        antiGagalSecret: 'Pastikan kataifi sudah tidak panas mendidih saat dicampur ke pasta pistachio agar minyak alami kacang tidak memisah (oil separation).',
        culinaryScience: 'Penambahan sedikit tahini (sesame paste) menetralkan rasa manis berlebih dari cokelat putih dan memberikan kompleksitas rasa umami gurih yang autentik khas Dubai.',
        temperatureOrFire: 'Suhu Ruang (24°C)',
        checkpointType: 'aroma'
      },
      {
        stepNumber: 3,
        title: 'Pencetakan Bola Inti Kunafa & Pembekuan Kilat (Flash Freeze)',
        instruction: 'Gunakan sendok takar untuk membagi isian kunafa pistachio menjadi 6 bola @ 40-45 gram. Letakkan di atas nampan beralas baking paper. Masukkan ke dalam FREEZER selama 30 menit hingga membeku padat.',
        durationMinutes: 30,
        antiGagalSecret: 'TITIK KRITIS PALING FATAL: Isian kunafa WAJIB BEKU BATU sebelum dibungkus adonan cookie! Jika isian masih lembek, ia akan meledak bocor keluar dari cookie saat dipanggang di oven panas, mengotori loyang.',
        culinaryScience: 'Bola inti beku (-18°C) menahan kenaikan suhu internal selama 12 menit proses pemanggangan di oven 180°C. Ketika adonan luar sudah matang kenyal, inti pistachio baru saja mencair menjadi lava kental sempurna.',
        temperatureOrFire: 'Freezer (-18°C)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 4,
        title: 'Pembuatan Adonan Dark Cookie Fudgy (Creaming Dingin)',
        instruction: 'Kocok mentega dingin potong dadu bersama dark brown sugar dan gula pasir selama 2 menit (cukup menyatu, jangan mengembang berongga udara). Masukkan telur, aduk rata. Ayak tepung terigu, cokelat bubuk, baking soda, dan potongan dark chocolate cincang. Aduk lipat dengan spatula.',
        durationMinutes: 10,
        antiGagalSecret: 'JANGAN OVER-MIXING! Mengocok adonan cookie terlalu lama akan memasukkan banyak udara dan menghasilkan cookie yang mekar seperti kue bolu sponge cake, bukan chewy fudgy tebal.',
        culinaryScience: 'Kadar molase tinggi dalam dark brown sugar bersifat higroskopis, mengikat kelembapan air sehingga struktur gula tetap lentur dan menghasilkan tekstur chewy melar saat digigit.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 5,
        title: 'Enkapsulasi Bola Beku & Pemanggangan Suhu Kejut (180°C)',
        instruction: 'Ambil 70 gram adonan cookie cokelat, pipihkan di telapak tangan. Letakkan 1 bola kunafa beku di tengah. Rapatkan adonan hingga membungkus rapat tanpa ada celah udara. Panggang di oven bersuhu 180°C selama tepat 11-12 menit. Begitu keluar, langsung taburi serpihan garam Maldon sea salt.',
        durationMinutes: 12,
        antiGagalSecret: 'PANTANGAN BESAR: Jangan panggang lebih dari 12 menit! Bagian tengah cookie akan terasa masih lembut lembek saat keluar dari oven, dan itu NORMAL. Cookie akan mengeras kenyal selama 10 menit proses resting di atas loyang.',
        culinaryScience: 'Garam laut Maldon memberikan ledakan mineral kontras tinggi di lidah yang memotong rasa pekat lemak cokelat dan mengamplifikasi aroma gurih nutty pistachio.',
        temperatureOrFire: 'Oven Panas 180°C (Api Atas Bawah)',
        checkpointType: 'waktu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Isian kunafa pistachio meledak bocor dan menggenang di loyang',
        prevention: 'Bola isian kunafa belum dibekukan hingga benar-benar keras di freezer sebelum dibungkus adonan, atau adonan pembungkus memiliki retakan/celah tipis.'
      },
      {
        mistake: 'Kataifi di dalam cookie menjadi lembek basah tidak berbunyi renyah',
        prevention: 'Kataifi kurang lama disangrai dengan brown butter, atau dicampur saat mentega masih mengandung banyak uap air.'
      },
      {
        mistake: 'Cookie mengeras kering seperti biskuit kaleng',
        prevention: 'Memanggang terlalu lama (melebihi 13 menit) atau menggunakan mentega leleh hangat yang merusak struktur kristal gluten.'
      }
    ],
    flavorProfile: {
      umami: 88,
      spicy: 0,
      aroma: 99,
      complexity: 96,
      crispiness: 98
    }
  },
  {
    id: 'matcha-ceremonial-kunafa-chewy-bar',
    title: 'Matcha Uji Ceremonial Kunafa Chewy Bar',
    subtitle: 'Blondie Matcha Hijau Zamrud Lembut Berisi Kataifi Renyah & Pistachio White Chocolate',
    category: 'Viral Premium & Pastry',
    difficulty: 'Menengah',
    cookTimeMinutes: 20,
    prepTimeMinutes: 25,
    servingsBase: 8,
    antiGagalRating: 98,
    image: '/src/assets/images/recipe_matcha_kunafa_bar_1793325092174.jpg',
    description: 'Kreasi viral fusion Jepang dan Timur Tengah: bar blondie padat kenyal dengan warna hijau zamrud murni dari matcha ceremonial grade Uji Kyoto, diselingi lapisan kunafa gurih renyah dan lelehan cokelat putih.',
    chefQuote: '"Matcha asli Uji sangat sensitif terhadap panas tinggi. Jika dipanggang di atas 165°C, pigmen klorofilnya akan rusak menjadi cokelat kusam dan aroma bunga alaminya akan menguap."',
    equipmentNeeded: ['Loyang Persegi 20x20 cm', 'Whisk Balon Stainless', 'Spatula Silikon'],
    ingredients: [
      { name: 'Bubuk Ceremonial Matcha Asli Uji Kyoto', amount: 20, unit: 'gram', notes: 'Gunakan grade ceremonial untuk warna zamrud menyala tanpa rasa pahit sepat' },
      { name: 'Kataifi Pastry Sangrai Mentega', amount: 120, unit: 'gram', notes: 'Disangrai renyah keemasan' },
      { name: 'Pistachio Paste Murni', amount: 100, unit: 'gram' },
      { name: 'White Chocolate Couverture 30%', amount: 140, unit: 'gram', notes: 'Dilelehkan bersama butter' },
      { name: 'Unsalted Butter Dingin', amount: 90, unit: 'gram' },
      { name: 'Telur Ayam Segar', amount: 2, unit: 'butir' },
      { name: 'Gula Pasir Halus', amount: 75, unit: 'gram' },
      { name: 'Tepung Terigu Protein Sedang', amount: 110, unit: 'gram' },
      { name: 'Kacang Pistachio Cincang Kasar', amount: 30, unit: 'gram', notes: 'Untuk taburan tekstur atas' },
      { name: 'Garam Laut Halus', amount: 3, unit: 'gram' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pelelehan White Chocolate & Mentega Secara Lembut (Bain-Marie)',
        instruction: 'Lelehkan cokelat putih dan mentega di atas mangkuk tahan panas di atas panci air mendidih perlahan (metode tim / bain-marie). Jaga agar uap air tidak menetes ke dalam cokelat.',
        durationMinutes: 6,
        antiGagalSecret: 'Cokelat putih sangat mudah hangus (seizing) jika terkena panas lebih dari 45°C. Matikan api kompor begitu cokelat mulai melunak dan biarkan sisa panas melelehkannya.',
        culinaryScience: 'Lemak kakao cokelat putih memiliki titik leleh rendah (34°C). Pemanasan bertahap menjaga suspensi emulsi padatan susu tetap mulus sutra.',
        temperatureOrFire: 'Bain-Marie Air Panas (45°C)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 2,
        title: 'Larutkan Matcha Ceremonial ke Dalam Lemak Hangat',
        instruction: 'Ayak bubuk ceremonial matcha langsung ke dalam lelehan mentega dan cokelat putih hangat. Aduk rata menggunakan whisk kecil hingga tidak ada gumpalan matcha tersisa.',
        durationMinutes: 4,
        antiGagalSecret: 'Larutkan matcha ke dalam lemak mentega hangat, BUKAN ke dalam air atau adonan tepung kering! Lemak mengikat pigmen klorofil dan melindunginya dari degradasi oksidasi panas.',
        culinaryScience: 'Senyawa klorofil bersifat larut dalam lipid (lipofilik). Melarutkannya dalam lemak cokelat menciptakan dispersi warna hijau zamrud yang homogen dan berkilau alami.',
        temperatureOrFire: 'Suhu Hangat Kuku (38°C)',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 3,
        title: 'Pembuatan Lapisan Tengah Kunafa Pistachio Bar',
        instruction: 'Campurkan kataifi yang sudah disangrai renyah dengan pasta pistachio dan sedikit lelehan cokelat putih hingga berbentuk adonan pasta berserat padat renyah.',
        durationMinutes: 5,
        antiGagalSecret: 'Ratakan lapisan kunafa dengan punggung sendok secara padat agar saat dipotong nanti bar memiliki lapisan garis kontras yang tajam dan rapi.',
        culinaryScience: 'Tekanan mekanis menghilangkan kantung udara di antara serat kataifi sehingga tidak hancur berhamburan saat dipotong pisau tajam.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 4,
        title: 'Penyusunan Berlapis (Layering) & Pemanggangan Suhu Rendah (160°C)',
        instruction: 'Tuang separuh adonan matcha blondie ke dasar loyang. Letakkan lempeng kunafa pistachio renyah di tengah. Tutup dengan sisa adonan matcha. Taburi pistachio cincang. Panggang pada suhu 160°C selama 20-22 menit.',
        durationMinutes: 22,
        antiGagalSecret: 'Panggang pada suhu stabil 160°C, jangan naikkan ke 180°C! Suhu rendah menjaga bagian tengah tetap padat fudgy chewy meleleh dan warna matcha tetap hijau cerah bukan kecokelatan.',
        culinaryScience: 'Suhu di atas 165°C memicu karamelisasi gula laktosa yang menutupi warna klorofil hijau dengan pigmen melanoidin cokelat kusam.',
        temperatureOrFire: 'Oven 160°C (Api Bawah dan Atas Lembut)',
        checkpointType: 'suhu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Warna matcha berubah menjadi cokelat kusam kehijauan kotor',
        prevention: 'Suhu oven terlalu tinggi (>165°C) atau bubuk matcha dilarutkan ke bahan cair yang terlalu mendidih.'
      },
      {
        mistake: 'Bar terlalu kering dan rapuh seperti kue bolu',
        prevention: 'Terlalu lama dipanggang. Angkat saat bagian tengah masih sedikit basah dan biarkan set dingin di chiller selama 2 jam sebelum dipotong.'
      }
    ],
    flavorProfile: {
      umami: 92,
      spicy: 0,
      aroma: 98,
      complexity: 94,
      crispiness: 96
    }
  },
  {
    id: 'burnt-basque-cheesecake-black-truffle',
    title: 'Molten Basque Cheesecake with Black Winter Truffle',
    subtitle: 'Karamelisasi Kerak Gelap dengan Hati Keju Meleleh & Infusi Jamur Truffle Asli',
    category: 'Viral Premium & Pastry',
    difficulty: 'Mahir',
    cookTimeMinutes: 24,
    prepTimeMinutes: 20,
    servingsBase: 8,
    antiGagalRating: 98,
    image: '/src/assets/images/recipe_basque_truffle_cheesecake_1793325091923.jpg',
    description: 'Menu viral fine-dining anti-mainstream: kelembutan keju San Sebastian Spanyol yang dipanggang pada suhu ekstrem 240°C hingga membentuk kerak karamel gosong harum, menyembunyikan lava tengah yang lumer kaya aroma black winter truffle dan serpihan garam laut.',
    chefQuote: '"Pusat cheesecake harus tetap bergoyang jeli (jiggly) saat dikeluarkan dari oven panas 240°C. Pendinginan bertahap adalah kunci mendapatkan tekstur lava meleleh tanpa amis telur."',
    equipmentNeeded: ['Loyang Bongkar Pasang Bulat 18-20 cm', 'Kertas Parchment / Baking Paper (dilebihkan ke atas)', 'Food Processor / Whisk Tangan'],
    ingredients: [
      { name: 'Cream Cheese Full Fat (Suhu Ruang)', amount: 500, unit: 'gram', notes: 'Wajib suhu ruang agar tidak bergerindil' },
      { name: 'Pure Black Winter Truffle Paste / Carpaccio', amount: 25, unit: 'gram', notes: 'Bintik hitam asli dari pasta jamur truffle musim dingin' },
      { name: 'Minyak Truffle Hitam Murni (Black Truffle Oil)', amount: 10, unit: 'ml', notes: 'Untuk infus aroma harum mendalam' },
      { name: 'Gula Pasir Halus', amount: 140, unit: 'gram' },
      { name: 'Telur Ayam Segar Utuh', amount: 3, unit: 'butir' },
      { name: 'Kuning Telur Tambahan', amount: 1, unit: 'butir', notes: 'Memberikan kelembutan ekstra pada lava center' },
      { name: 'Heavy Cream Cair Dingin (Kadar Lemak 35%+)', amount: 250, unit: 'ml' },
      { name: 'Tepung Terigu Serbaguna', amount: 15, unit: 'gram', notes: 'Hanya sedikit sebagai stabilisator' },
      { name: 'Garam Laut Halus & Ekstrak Vanila', amount: 4, unit: 'gram' },
      { name: 'Edible Gold Leaf 24K (Hiasan Emas Murni)', amount: 1, unit: 'lembar', notes: 'Garnish mewah khas hotel bintang lima' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pelunakan Cream Cheese & Infusi Black Truffle',
        instruction: 'Kocok lembut cream cheese suhu ruang bersama gula pasir halus menggunakan spatula atau whisk hingga larut lembut tanpa udara berlebih. Masukkan pasta black truffle dan minyak truffle hitam. Aduk rata hingga bintik-bintik truffle tersebar merata.',
        durationMinutes: 6,
        antiGagalSecret: 'PANTANGAN BESAR: Jangan gunakan mixer listrik kecepatan tinggi! Memasukkan terlalu banyak udara akan membuat cheesecake mengembang tinggi seperti soufflé lalu runtuh amblas berkerut parah di oven.',
        culinaryScience: 'Senyawa aroma volatil dimetil sulfida dan bis(metiltio)metana pada truffle hitam larut sempurna di dalam matriks lemak susu cream cheese 33% fat.',
        temperatureOrFire: 'Suhu Ruang (25°C)',
        checkpointType: 'aroma'
      },
      {
        stepNumber: 2,
        title: 'Pengikatan Telur Satu per Satu & Heavy Cream',
        instruction: 'Masukkan telur satu per satu sambil diaduk perlahan hingga terserap sebelum memasukkan telur berikutnya. Tuangkan heavy cream dingin dan ayak 15 gram tepung terigu. Aduk lipat hingga adonan mengkilap seperti sutra cair.',
        durationMinutes: 5,
        antiGagalSecret: 'Saring adonan (straining) melalui saringan kawat halus sebelum dituang ke loyang! Langkah ini menjamin tidak ada serat putih telur yang menggumpal yang bisa merusak kelembutan lava center.',
        culinaryScience: 'Penyaringan memecah membran chalaza telur sehingga menciptakan dispersi protein yang halus rata di seluruh cairan emulsi.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 3,
        title: 'Persiapan Loyang Rustik Kertas Keriput (Baking Paper Ruffle)',
        instruction: 'Remas-remas selembar kertas baking paper lebar hingga lemas berkerut, lalu tempelkan menutupi dasar dan dinding loyang hingga ujung kertas menjulang 5 cm di atas bibir loyang. Tuang adonan saring ke dalam loyang.',
        durationMinutes: 4,
        antiGagalSecret: 'Kertas wajib menjulang lebih tinggi dari dinding loyang! Di oven 240°C, adonan akan naik menggelembung tinggi sebelum turun rata.',
        culinaryScience: 'Lipatan kerutan alami kertas baking menciptakan tekstur pinggiran bergelombang yang khas rustic ala kafe San Sebastian.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 4,
        title: 'Pemanggangan Suhu Ekstrem 240°C & The "Jiggly" Test',
        instruction: 'Panaskan oven hingga 240°C (sangat panas). Panggang loyang di rak tengah selama tepat 22-24 menit hingga bagian atas berwarna cokelat kehitaman gelap mengkilap dan beraroma karamel toffee.',
        durationMinutes: 24,
        antiGagalSecret: 'UJI GOYANG JELI (JIGGLY TEST): Begitu dikeluarkan dari oven, goyangkan loyang perlahan. Lingkar tepi 3 cm harus sudah padat kokoh, namun LINGKARAN TENGAH WAJIB MASIH BERGOYANG SEPERTI PUDING JELI! Jika tengahnya sudah kaku, artinya lava cheesecake sudah overcooked dan gagal meleleh.',
        culinaryScience: 'Panas radiasi tinggi 240°C memicu karamelisasi cepat gula dan protein susu di lapisan permukaan atas (kerak basque) sebelum panas konduksi sempat memadatkan inti telur di bagian tengah (koagulasi bertahap).',
        temperatureOrFire: 'Oven Ekstrem 240°C (Api Atas Bawah)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 5,
        title: 'Pendinginan Bertahap & Penyajian Suhu Ruang',
        instruction: 'Biarkan cheesecake mendingin di suhu ruang selama 3-4 jam di atas loyangnya. JANGAN langsung masukkan ke kulkas dingin mendadak! Potong dengan pisau yang dipanaskan air hangat, taburi serpihan edible gold leaf.',
        durationMinutes: 180,
        antiGagalSecret: 'Sajikan pada suhu ruang! Jika disajikan dingin langsung dari kulkas, lemak truffle dan cream cheese akan membeku padat dan tidak akan meleleh sensual di piring saji.',
        culinaryScience: 'Suhu 20-22°C adalah titik leleh optimal asam lemak palmitat dan oleat susu yang menghasilkan sensasi mulut meleleh (melt-in-the-mouth sensation).',
        temperatureOrFire: 'Pendinginan Suhu Ruang',
        checkpointType: 'waktu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Bagian tengah padat keras seperti kue keju biasa (tidak ada lava meleleh)',
        prevention: 'Waktu memanggang terlalu lama melebihi 25 menit atau oven tidak cukup panas saat loyang dimasukkan.'
      },
      {
        mistake: 'Cheesecake berbau amis telur yang menyengat',
        prevention: 'Menggunakan telur yang kurang segar, atau tidak menggunakan ekstrak vanila dan pasta truffle berkualitas tinggi.'
      }
    ],
    flavorProfile: {
      umami: 98,
      spicy: 0,
      aroma: 99,
      complexity: 97,
      crispiness: 40
    }
  },
  {
    id: 'country-sourdough-open-crumb',
    title: 'Country Sourdough Boule & Open Honeycomb Crumb',
    subtitle: 'Teknik Ragi Liar Levain, Autolisis 75% Hidrasi & Baking Panas Dutch Oven',
    category: 'Artisanal Bakery',
    difficulty: 'Mahir',
    cookTimeMinutes: 45,
    prepTimeMinutes: 240,
    servingsBase: 8,
    antiGagalRating: 98,
    image: '/src/assets/images/recipe_artisanal_sourdough_1793325431387.jpg',
    description: 'Mahakarya pembuatan roti ragi alami kuno: kulit roti yang garing merekah berderak (blistered ear), rongga sarang lebah (open crumb) yang kenyal mengkilap, dan aroma fermentasi asam laktat liar yang harum menggugah selera.',
    chefQuote: '"Sourdough yang berhasil ditandai dengan telinga kerak yang mencuat tajam (ear score) dan remah sarang lebah (open crumb) yang kenyal mengkilap bagai kaca, beraroma asam laktat yang lembut."',
    equipmentNeeded: ['Banneton Basket Rotan + Kain Linen', 'Dutch Oven Besi Cor Tebal Bertutup (Cast Iron Combo Cooker)', 'Pisau Silet Khusus Roti (Bread Lame)', 'Timbangan Digital Presisi 0.1g'],
    ingredients: [
      { name: 'Tepung Terigu Protein Tinggi (Bread Flour 12.5%+)', amount: 400, unit: 'gram', notes: 'Kekuatan gluten tinggi untuk menahan gas fermentasi' },
      { name: 'Tepung Gandum Utuh (Whole Wheat / Rye Flour)', amount: 50, unit: 'gram', notes: 'Nutrisi untuk ragi liar & aroma rustic kacang' },
      { name: 'Air Matang Dingin Suhu Ruang (75% Hidrasi)', amount: 340, unit: 'ml' },
      { name: 'Starter Levain Aktif Berbuih (100% Hidrasi)', amount: 90, unit: 'gram', notes: 'Di puncak keaktifannya (peak rise 3x lipat)' },
      { name: 'Garam Laut Murni Halus (Fine Sea Salt)', amount: 9, unit: 'gram' },
      { name: 'Tepung Beras Halus (Rice Flour)', amount: 20, unit: 'gram', notes: 'Untuk melumuri banneton agar adonan tidak lengket' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Autolisis Tanpa Garam & Pelarutan Gluten Alami',
        instruction: 'Campurkan tepung protein tinggi, tepung gandum utuh, dan 320 ml air (sisakan 20 ml air untuk garam nanti). Aduk kasar hanya sampai semua tepung basah. Tutup mangkuk dan istirahatkan (autolisis) selama 60 menit.',
        durationMinutes: 60,
        antiGagalSecret: 'JANGAN LANGSUNG MASUKKAN GARAM ATAU LEVAIN DI AWAL! Autolisis murni tanpa garam memberi waktu enzim protease melunakkan gluten secara alami, membuat adonan jauh lebih elastis dan menyerap air tanpa perlu diuleni keras (no-knead).',
        culinaryScience: 'Air menghidrasi molekul glutenin dan gliadin. Tanpa gangguan ion natrium garam, jalinan jaring gluten terbentuk secara spontan melalui ikatan hidrogen.',
        temperatureOrFire: 'Suhu Ruang (24-26°C)',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 2,
        title: 'Inkorporasi Levain Aktif & Garam (Metode Dimpling & Slap)',
        instruction: 'Ratakan 90g starter levain aktif di atas adonan. Lipat adonan dari tepi ke tengah. Istirahatkan 20 menit. Tambahkan sisa 20 ml air bersama 9g garam laut. Remas-remas lembut dengan jari (dimpling) hingga garam larut sempurna.',
        durationMinutes: 20,
        antiGagalSecret: 'Lakukan tes apung (Float Test): ambil 1 sendok teh levain dan jatuhkan ke mangkuk air. Jika mengapung di permukaan, levain siap dipakai. Jika tenggelam, levain belum menghasilkan gas CO2 cukup.',
        culinaryScience: 'Garam memperkuat jalinan ikatan silang gluten (disulfide bridges) dan mengontrol laju metabolisme ragi liar agar tidak over-ferment.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 3,
        title: 'Bulk Fermentation & 4 Kali Stretch and Fold',
        instruction: 'Lakukan teknik Stretch and Fold setiap 30 menit sebanyak 4 kali putaran selama 2 jam pertama. Basahi tangan dengan sedikit air, tarik ujung adonan ke atas lalu lipat ke tengah. Adonan akan mengembang 30-40% dan terasa ringan berbuih.',
        durationMinutes: 120,
        antiGagalSecret: 'Jangan mengempiskan adonan atau memukulnya! Setiap tarikan lembut menjebak gelembung udara mikro yang nantinya akan membesar menjadi rongga sarang lebah (honeycomb crumb).',
        culinaryScience: 'Bakteri asam laktat (Lactobacillus sanfranciscensis) memproduksi asam asetat dan laktat yang menurunkan pH adonan, memperkuat daya rekat dinding rongga roti.',
        temperatureOrFire: 'Suhu Ruang (26°C)',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 4,
        title: 'Pre-Shaping, Banneton Basket & Fermentasi Dingin (Retardation)',
        instruction: 'Bentuk adonan menjadi bola bundar dengan tarikan permukaan kencang (surface tension). Istirahatkan 15 menit, lalu kunci lipatan akhir dan masukkan ke dalam keranjang banneton yang sudah ditaburi tepung beras. Masukkan ke kulkas chiller (4°C) selama 12-16 jam.',
        durationMinutes: 15,
        antiGagalSecret: 'Wajib gunakan tepung beras (bukan tepung terigu!) untuk melapisi kain banneton. Tepung beras bebas gluten sehingga adonan tidak akan menempel pada kain saat dibalik ke loyang.',
        culinaryScience: 'Fermentasi dingin memperlambat produksi ragi tetapi membiarkan bakteri asam terus menghasilkan rasa kompleks aromatik yang khas tanpa membuat adonan asam berlebihan.',
        temperatureOrFire: 'Chiller Kulkas (4°C)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 5,
        title: 'Scoring dengan Pisau Silet (Bread Lame) & Baking Dutch Oven 240°C',
        instruction: 'Panaskan Dutch Oven besi cor kosong bertutup di oven bersuhu 240°C selama 45 menit. Keluarkan adonan langsung dari kulkas dingin, balik ke atas kertas baking. Sayat miring 30 derajat sedalam 1 cm dengan pisau silet (bread lame). Masukkan ke Dutch Oven panas, semprot 2 semprotan air, tutup rapat. Panggang 20 menit tertutup, lalu buka tutup dan panggang 20 menit lagi hingga cokelat tembaga gelap.',
        durationMinutes: 45,
        antiGagalSecret: 'TITIK KRITIS: Dutch oven WAJIB ditutup rapat selama 20 menit pertama! Uap air yang terperangkap menunda pengerasan kerak luar sehingga adonan dapat merekah mekar maksimal membentuk "telinga kelinci" (ear expansion).',
        culinaryScience: 'Uap air menggelatinisasi pati di permukaan kulit roti, menghasilkan gelembung-gelembung mikro renyah (blisters) dan kilau kaca saat dipanggang terbuka.',
        temperatureOrFire: 'Oven 240°C -> 220°C',
        checkpointType: 'suhu'
      }
    ],
    commonFailures: [
      {
        mistake: 'Roti pipih melebar seperti piring terbang (tidak mekar ear)',
        prevention: 'Adonan over-fermented atau tegangan permukaan (surface tension) saat shaping kurang kencang.'
      },
      {
        mistake: 'Remah dalam padat berair (gummy crumb)',
        prevention: 'Roti dipotong saat masih panas. Tunggu roti dingin minimal 2 jam di atas cooling rack agar uap air stabil.'
      }
    ],
    flavorProfile: {
      umami: 85,
      spicy: 0,
      aroma: 99,
      complexity: 98,
      crispiness: 99
    }
  },
  {
    id: 'clarified-yuzu-rosemary-cocktail',
    title: 'Smoked Rosemary & Clarified Yuzu Lychee Elixir',
    subtitle: 'Teknik Clarification Dingin Menghasilkan Cocktail Sebening Kristal dengan Asap Herba',
    category: 'Cocktail & Mixology Segar',
    difficulty: 'Menengah',
    cookTimeMinutes: 5,
    prepTimeMinutes: 45,
    servingsBase: 2,
    antiGagalRating: 99,
    image: '/src/assets/images/recipe_clarified_yuzu_cocktail_1793325431309.jpg',
    description: 'Kreasi mixology modern tingkat dunia: minuman segar berkelas fine-dining menggunakan teknik klarifikasi dingin (milk punch clarification) yang menyaring seluruh zat keruh, menghasilkan cairan emas muda sejernih kaca dengan rasa yuzu asam segar, manisnya leci, dan aroma asap rosemary hangat.',
    chefQuote: '"Teknik klarifikasi bukan hanya membuat minuman sejernih air mata kristal, tetapi membuang tanin pahit dan mengunci molekul aroma yuzu dan leci agar meletup bersih di langit-langit mulut."',
    equipmentNeeded: ['Saringan Kopi V60 / Kertas Filter Kopi', 'Gelas Rocks Tebal Minimalis', 'Torch Gas / Korek untuk Membakar Herba', 'Cetakan Es Balok Bening (Clear Ice Mold)'],
    ingredients: [
      { name: 'Jus Yuzu Segar Asli (atau Air Jeruk Nipis Kasturi Segar)', amount: 50, unit: 'ml', notes: 'Memberikan keasaman sitrus aromatik yang tajam bersih' },
      { name: 'Nektar / Jus Buah Leci Alami Manis', amount: 90, unit: 'ml' },
      { name: 'Sirup Bunga Elderflower / Sirup Gula Pandan Wangi', amount: 30, unit: 'ml' },
      { name: 'Susu Sapi Segar Full Cream Dingin', amount: 45, unit: 'ml', notes: 'Zat klarifikasi alami pembersih kekeruhan' },
      { name: 'Botanical Gin / Infusi Teh Earl Grey Dingin (Opsi Non-Alkohol)', amount: 80, unit: 'ml', notes: 'Pemberi aroma bunga & rempah herba' },
      { name: 'Ranting Rosemary Segar', amount: 2, unit: 'tangkai', notes: 'Dibakar berasap sesaat sebelum disajikan' },
      { name: 'Irisan Jeruk Yuzu / Lemon Kering (Dehydrated Wheel)', amount: 2, unit: 'irisan', notes: 'Garnish modern mengapung di atas es' },
      { name: 'Balok Es Kristal Bening (Clear Ice Cube 5x5 cm)', amount: 2, unit: 'buah' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pencampuran Basis Sitrus Aromatik & Sirup Bunga',
        instruction: 'Campurkan jus yuzu segar, nektar leci, sirup elderflower, dan botanical gin (atau seduhan teh earl grey kental) di dalam gelas ukur. Aduk hingga rata.',
        durationMinutes: 3,
        antiGagalSecret: 'Pastikan asam yuzu cukup dominan (pH sekitar 3.5 - 4.0). Tingkat keasaman yang cukup adalah kunci mutlak untuk memicu penggumpalan protein susu pada tahap klarifikasi berikutnya.',
        culinaryScience: 'Asam sitrat menurunkan pH larutan melewati titik isoelektrik kasein susu (pH 4.6), memicu denaturasi protein.',
        temperatureOrFire: 'Suhu Ruang',
        checkpointType: 'aroma'
      },
      {
        stepNumber: 2,
        title: 'Penyatuan Terbalik: Tuang Campuran Asam ke Susu Dingin',
        instruction: 'Siapkan susu sapi dingin di mangkuk. Tuangkan campuran koktail asam ke dalam susu secara perlahan sambil diaduk pelan satu putaran. Diamkan selama 15 menit tanpa diaduk.',
        durationMinutes: 15,
        antiGagalSecret: 'HUKUM BESI KLARIFIKASI: SELALU tuang cairan asam ke dalam susu, JANGAN tuang susu ke dalam cairan asam! Jika susu dituangkan ke asam, gumpalan kasein akan terlalu halus dan tidak mampu menyaring partikel keruh.',
        culinaryScience: 'Kasein susu mengikat partikel tannin, polifenol getir, dan pigmen keruh ke dalam gumpalan dadih (curds), bertindak sebagai filter membran alami biologis.',
        temperatureOrFire: 'Suhu Dingin Chiller (4-8°C)',
        checkpointType: 'teknik'
      },
      {
        stepNumber: 3,
        title: 'Penyaringan Menembus Lapisan Dadih (Curd Filtration Bed)',
        instruction: 'Letakkan kertas filter kopi di atas corong V60. Tuangkan cairan yang sudah menggumpal. Cairan tetesan pertama (sekitar 20 ml) mungkin masih agak keruh; ambil dan tuang kembali ke atas saringan hingga tetesan yang keluar menjadi BENING SEPERTI KACA KRISTAL.',
        durationMinutes: 25,
        antiGagalSecret: 'Jangan pernah menekan atau mengaduk saringan! Biarkan gravitasi yang bekerja. Gumpalan dadih kasein di dasar saringan justru adalah media penyaring terbaik.',
        culinaryScience: 'Mekanisme kedalaman filtrasi (depth filtration) menyaring partikel hingga skala mikron tanpa menghilangkan rasa esensial.',
        temperatureOrFire: 'Suhu Dingin',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 4,
        title: 'Asap Rosemary & Plating di Atas Es Balok Kristal',
        instruction: 'Letakkan balok es bening di dalam gelas rocks minimalis. Tuang cairan koktail jernih ke atas es. Letakkan irisan yuzu kering. Bakar ujung ranting rosemary dengan torch hingga berasap wangi, lalu letakkan di tepi gelas.',
        durationMinutes: 2,
        antiGagalSecret: 'Gunakan es batu bening bebas gelembung (clear ice). Es batu bening memiliki laju pelelehan yang sangat lambat sehingga tidak akan mengencerkan rasa koktail mewah ini.',
        culinaryScience: 'Asap pembakaran melepaskan senyawa fenolik cineol dan pinene dari daun rosemary yang memperkaya sensoris hidung saat bibir menyentuh gelas.',
        temperatureOrFire: 'Es Bening Kristal & Asap Hangat',
        checkpointType: 'aroma'
      }
    ],
    commonFailures: [
      {
        mistake: 'Cairan koktail tetap keruh keputihan dan tidak tembus pandang',
        prevention: 'Campuran kurang asam untuk menggumpalkan kasein susu, atau saringan kertas diangkat terlalu terburu-buru sebelum media dadih terbentuk rapi.'
      },
      {
        mistake: 'Rasa koktail terasa hambar berair',
        prevention: 'Menggunakan es batu biasa yang cepat meleleh alih-alih balok es kristal padat (clear ice).'
      }
    ],
    flavorProfile: {
      umami: 70,
      spicy: 0,
      aroma: 100,
      complexity: 97,
      crispiness: 50
    }
  },
  {
    id: 'viral-croissant-creme-brulee-tart',
    title: 'Viral Caramelized Croissant Crème Brûlée Tart',
    subtitle: 'Mangkok Croissant Laminated Berisi Custard Vanilla Bean dengan Kaca Karamel Terbakar',
    category: 'Viral Premium & Pastry',
    difficulty: 'Mahir',
    cookTimeMinutes: 22,
    prepTimeMinutes: 40,
    servingsBase: 4,
    antiGagalRating: 98,
    image: '/src/assets/images/recipe_croissant_brulee_tart_1793325431341.jpg',
    description: 'Fenomena pastry viral dunia bakery Hong Kong dan Paris: adonan croissant berlapis mentega Prancis dibentuk menjadi mangkok lingkaran spiral, dipanggang mekar renyah, lalu diisi krim custard vanila Madagaskar dan dibakar dengan torch membentuk kaca gula karamel yang berderak pecah saat diketuk sendok.',
    chefQuote: '"Sensasi dua tekstur paling dicari di dunia pastry: retakan kaca gula karamel yang berderak renyah saat diketuk sendok, diikuti lelehan custard vanila Madagaskar dan dinding croissant bermentega yang mekar."',
    equipmentNeeded: ['Cetakan Muffin / Tart Ring Baja 10 cm', 'Kitchen Blowtorch Butane', 'Piping Bag & Spatula'],
    ingredients: [
      { name: 'Adonan Croissant Laminated Dingin (Détrempe Bermentega)', amount: 350, unit: 'gram', notes: 'Gilas tebal 4mm, potong pita panjang 20x3 cm' },
      { name: 'Kuning Telur Ayam Segar', amount: 4, unit: 'butir', notes: 'Untuk custard sutra' },
      { name: 'Heavy Cream Cair 35% Lemak Dingin', amount: 200, unit: 'ml' },
      { name: 'Susu UHT Segar Full Cream', amount: 100, unit: 'ml' },
      { name: 'Batang Vanila Madagaskar (Vanilla Pod)', amount: 1, unit: 'batang', notes: 'Belah dan keruk butiran biji vanila hitam asli' },
      { name: 'Gula Pasir Halus untuk Custard', amount: 55, unit: 'gram' },
      { name: 'Tepung Maizena Halus', amount: 12, unit: 'gram', notes: 'Penstabil tekstur' },
      { name: 'Gula Pasir Kristal Ekstra untuk Brûlée', amount: 30, unit: 'gram', notes: 'Taburan pembentuk kaca karamel' },
      { name: 'Edible Gold Leaf 24K', amount: 1, unit: 'lembar', notes: 'Garnish mewah khas hotel bintang lima' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pembuatan Mangkok Croissant Spiral & Blind Baking',
        instruction: 'Gulung pita adonan croissant melingkari dinding dalam tart ring membentuk mangkok bertingkat. Proofing pada suhu 26°C selama 60 menit hingga mengembang. Masukkan mangkuk kertas tahan panas di tengah adonan agar tidak kolaps. Panggang pada suhu 195°C selama 15 menit hingga cokelat keemasan garing.',
        durationMinutes: 75,
        antiGagalSecret: 'Beri pemberat (pie weights / ring kecil) di bagian tengah saat 10 menit pertama pemanggangan agar bagian dasar croissant tidak membumbung naik menutup ruang isian custard.',
        culinaryScience: 'Uap air dalam mentega mengangkat lapisan adonan ke samping membentuk dinding mangkok berlapis renyah tanpa gosong.',
        temperatureOrFire: 'Oven 195°C',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 2,
        title: 'Pembuatan Custard Vanila Madagaskar Sutra',
        instruction: 'Panaskan susu, heavy cream, dan biji vanila hingga mendidih kecil di tepi panci. Di mangkuk terpisah, kocok kuning telur, gula, dan maizena. Tuangkan sepertiga susu panas ke telur sambil dikocok cepat (temper), lalu kembalikan ke panci. Masak api kecil sambil diaduk whisk kuat hingga mengental meletup lembut.',
        durationMinutes: 10,
        antiGagalSecret: 'Wajib lakukan teknik TEMPERING perlahan! Jika susu mendidih langsung diguyur sekaligus ke kuning telur, telur akan matang bergumpal seperti sup telur dadar.',
        culinaryScience: 'Pati maizena menstabilkan protein telur terhadap panas dan mencegah koagulasi kasar, menghasilkan tekstur krim kental yang meleleh lembut di mulut.',
        temperatureOrFire: 'Api Kecil (82°C)',
        checkpointType: 'suhu'
      },
      {
        stepNumber: 3,
        title: 'Pengisian Mangkok Croissant & Pemantapan Suhu Chiller',
        instruction: 'Semprotkan custard vanila hangat ke dalam mangkok croissant yang sudah dipanggang hingga hampir penuh rata ke bibir tart. Dinginkan di kulkas selama 30 menit agar permukaan custard membentuk lapisan tipis yang kokoh.',
        durationMinutes: 30,
        antiGagalSecret: 'Permukaan custard harus dingin dan agak mengering sebelum ditaburi gula pasir untuk brûlée. Jika permukaan masih basah berair, gula akan larut menjadi sirup dan tidak bisa mengeras menjadi kaca garing.',
        culinaryScience: 'Pendinginan membentuk lapisan gelatinisasi permukaan yang menahan butiran sukrosa tetap kering sebelum terkena lidah api torch.',
        temperatureOrFire: 'Chiller (4°C)',
        checkpointType: 'tekstur'
      },
      {
        stepNumber: 4,
        title: 'Pembakaran Karamel Gula Kaca (The Torched Crème Brûlée)',
        instruction: 'Taburkan selapis tipis gula pasir kristal secara merata ke seluruh permukaan custard. Nyalakan kitchen blowtorch dengan api biru runcing. Arahkan api berputar dari jarak 10 cm hingga gula mencair, mendidih berbusa, dan berubah menjadi warna cokelat karamel keemasan beraroma toffee. Diamkan 2 menit hingga membeku menjadi kaca.',
        durationMinutes: 4,
        antiGagalSecret: 'Gunakan gula berbutir halus dalam lapisan tipis 2 kali putaran, jangan menimbun gula tebal sekaligus! Lapisan tebal akan menghasilkan kerak yang keras alot seperti permen batu yang susah dipecahkan sendok.',
        culinaryScience: 'Pirolysis sukrosa pada suhu 160-180°C mengubah molekul gula menjadi karamel berstruktur amorf yang membeku seketika saat menyentuh custard dingin, menghasilkan suara derak "crack" yang renyah.',
        temperatureOrFire: 'Blowtorch Api Biru (Karamelisasi 180°C)',
        checkpointType: 'teknik'
      }
    ],
    commonFailures: [
      {
        mistake: 'Kaca karamel tidak mau garing dan malah meleleh becek',
        prevention: 'Custard terlalu encer atau torch dinyalakan terlalu lama hingga melelehkan krim di bawah gula.'
      },
      {
        mistake: 'Dinding mangkok croissant lembek tidak berderak',
        prevention: 'Pastikan croissant dipanggang hingga benar-benar kecokelatan kering sebelum diisi custard hangat.'
      }
    ],
    flavorProfile: {
      umami: 86,
      spicy: 0,
      aroma: 100,
      complexity: 96,
      crispiness: 99
    }
  }
];

import { QuizModule } from '../types/culinary';

export const QUIZ_MODULES: QuizModule[] = [
  {
    id: 'sains-dapur-anti-gagal',
    title: 'Sains Dapur & Kunci Anti-Gagal',
    subtitle: 'Uji pemahamanmu tentang reaksi kimia dan fisika di balik masakan lezat',
    level: 'Menengah',
    questionsCount: 6,
    timeLimitSeconds: 210,
    badgeName: 'Master Sains Kuliner',
    questions: [
      {
        id: 'q1',
        question: 'Mengapa ikan salmon atau steak daging WAJIB dikeringkan hingga benar-benar kering dengan kitchen towel sebelum menyentuh minyak panas di wajan?',
        options: [
          'Agar bumbu garam meresap lebih cepat ke pembuluh darah daging',
          'Karena air di permukaan akan mendidih jadi uap dan merebus kulit, menggagalkan reaksi Maillard renyah',
          'Untuk membunuh mikroba patogen yang hidup di cairan luar',
          'Agar daging salmon tidak menyusut volumenya lebih dari 50%'
        ],
        correctIndex: 1,
        explanation: 'Air memiliki titik didih 100°C. Reaksi Maillard (yang memberi kerak cokelat renyah nan gurih) memerlukan suhu minimal 140-165°C. Selama ada air di permukaan, energi panas wajan hanya dipakai menguapkan air (efek kukus/rebus), bukan menggoreng renyah.',
        chefNote: 'Selalu lakukan "Dry Skin Protocol" sebelum menyalakan api!',
        category: 'Sains Panas'
      },
      {
        id: 'q2',
        question: 'Saat memasak Rendang Daging, mengapa santan yang sedang dipanaskan di awal wajib diaduk terus dengan gerakan menimba tanpa jeda?',
        options: [
          'Agar daging sapi cepat matang dalam waktu 15 menit',
          'Untuk mencegah emulsi protein kelapa dan minyak pecah (curdling) akibat pemanasan lokal',
          'Supaya gula kelapa berubah menjadi karamel hitam dalam hitungan menit',
          'Untuk menguapkan kadar lemak agar rendang menjadi rendah kalori'
        ],
        correctIndex: 1,
        explanation: 'Santan murni adalah emulsi air dan minyak yang distabilkan oleh protein kelapa. Jika dipanaskan tanpa sirkulasi menimba, panas lokal di dasar wajan akan mendenaturasi protein dan memecah emulsi, membuat kuah berbutir kasar seperti pasir.',
        chefNote: 'Gerakan menimba adalah mantra sakral juru masak Minang.',
        category: 'Kimia Emulsi'
      },
      {
        id: 'q3',
        question: 'Apa fungsi utama mengistirahatkan (resting) daging steak atau unggas panggang selama 5-10 menit di atas rak sebelum dipotong?',
        options: [
          'Menurunkan suhu agar lidah konsumen tidak terbakar saat makan',
          'Membiarkan serat otot yang tegang mereda dan menyerap kembali cairan jus (juices) ke inti daging',
          'Membuat warna daging berubah dari merah menjadi cokelat matang',
          'Menghilangkan kelebihan minyak di permukaan luar daging'
        ],
        correctIndex: 1,
        explanation: 'Saat terkena panas tinggi, serat otot mengerut keras dan mendorong seluruh sari daging (juices) ke bagian tengah. Jika langsung dipotong, jus lezat ini akan membanjiri talenan dan daging menjadi kering sepah.',
        chefNote: 'Potong terlalu cepat = membuang rasa lezat ke talenan!',
        category: 'Fisiologi Daging'
      },
      {
        id: 'q4',
        question: 'Pada pembuatan croissant, mengapa suhu ruang fermentasi (proofing) dilarang keras melebihi 28°C?',
        options: [
          'Ragi roti akan mati total pada suhu 28°C',
          'Lemak mentega di antara lapisan adonan akan meleleh sebelum masuk oven, merusak rongga honeycomb',
          'Tepung terigu akan terfermentasi menjadi alkohol asam yang pahit',
          'Kulit croissant akan mengeras seperti batu saat dipanggang'
        ],
        correctIndex: 1,
        explanation: 'Titik leleh mentega murni (dairy butter) berkisar antara 30-34°C, dan mulai melembek drastis pada 28°C. Jika meleleh saat proofing, mentega menyatu ke adonan dan Anda hanya akan mendapatkan roti manis bantat biasa.',
        chefNote: 'Kendalikan termometer ruangan pastry Anda seperti dokter mengawasi pasien.',
        category: 'Pastry & Baking'
      },
      {
        id: 'q5',
        question: 'Apa tanda visual bahwa wajan stainless steel sudah mencapai suhu Leidenfrost ideal sebelum menuangkan minyak untuk menumis tanpa lengket?',
        options: [
          'Permukaan wajan mulai retak-retak rambut halus',
          'Tetesan air yang dipercikkan langsung meluncur bulat seperti kelereng dan tidak mendesis menguap seketika',
          'Wajan mengeluarkan asap tebal hitam pekat',
          'Warna logam wajan berubah menjadi ungu kebiruan'
        ],
        correctIndex: 1,
        explanation: 'Efek Leidenfrost terjadi ketika suhu wajan mencapai ~190°C. Tetesan air membentuk lapisan bantalan uap di bawahnya sehingga meluncur mulus seperti kelereng kaca tanpa menguap mendadak.',
        chefNote: 'Metode tes air kelereng adalah cara termudah mengecek panas wajan profesional tanpa termometer laser.',
        category: 'Peralatan & Suhu'
      },
      {
        id: 'q6',
        question: 'Pada pembuatan Dubai Chewy Pistachio Cookie yang viral, mengapa bola isian kunafa pistachio WAJIB dibekukan hingga beku keras (-18°C) sebelum dibungkus adonan cookie?',
        options: [
          'Agar rasa pistachio berubah menjadi lebih manis alami',
          'Untuk menahan kenaikan suhu internal selama 12 menit di oven 180°C sehingga adonan luar matang kenyal sementara isian tengah baru saja mencair lava tanpa meledak bocor',
          'Supaya kataifi menyerap seluruh minyak mentega di dalam freezer',
          'Untuk membunuh ragi yang ada pada tepung terigu'
        ],
        correctIndex: 1,
        explanation: 'Prinsip "Frozen Core Encapsulation": Suhu beku (-18°C) memberikan penundaan termal (thermal lag). Ketika panas oven 180°C mematangkan adonan cookie luar menjadi chewy selama 11-12 menit, inti beku baru saja melewati fase leleh menjadi lava krim lembut tanpa sempat mendidih dan meletup keluar merusak cookie.',
        chefNote: 'Jangan pernah bungkus isian kunafa saat masih lembek atau suhu ruang!',
        category: 'Sains Pastry Viral'
      }
    ]
  },
  {
    id: 'kitchen-rescue-troubleshooting',
    title: 'Kitchen Rescue: Pertolongan Pertama Masakan',
    subtitle: 'Keahlian sejati seorang chef diuji saat menyelamatkan masakan di saat kritis',
    level: 'Masterclass',
    questionsCount: 5,
    timeLimitSeconds: 180,
    badgeName: 'Spesialis Penyelamat Dapur',
    questions: [
      {
        id: 'kr1',
        question: 'Kuah sup kaldu sapi yang kamu buat terlanjur terlalu asin karena kuah tereduksi melebihi rencana. Apa tindakan cerdas tanpa merusak konsentrasi rasa gurihnya?',
        options: [
          'Tambahkan gula pasir sebanyak-banyaknya sampai rasa asin hilang',
          'Tambahkan potongan kentang mentah besar untuk menyerap garam dan encerkan kembali dengan kaldu tawar tanpa garam',
          'Tambahkan cuka asam pekat untuk menetralkan molekul natrium',
          'Tutup panci rapat dan biarkan dingin di freezer'
        ],
        correctIndex: 1,
        explanation: 'Menambahkan kaldu tawar (unsalted stock) mengencerkan konsentrasi ion natrium tanpa mengencerkan rasa gurih umami daging. Kentang mentah yang dimasak sebentar juga membantu mengikat sebagian garam larut sebelum diangkat.',
        chefNote: 'Jangan pernah menutupi keasinan berlebih dengan timbunan gula, karena hasil akhirnya akan terasa aneh seperti permen asin.',
        category: 'Balancing Rasa'
      },
      {
        id: 'kr2',
        question: 'Saus emulsi hangat (seperti Hollandaise atau Béarnaise) tiba-tiba pecah (broken sauce) menjadi minyak terpisah. Bagaimana langkah penyelamatan cepatnya?',
        options: [
          'Masukkan ke dalam microwave selama 2 menit dengan suhu tinggi',
          'Kocok 1 kuning telur segar baru bersama 1 sendok teh air hangat di mangkuk terpisah, lalu tuang saus yang pecah perlahan tetes demi tetes sambil terus dikocok kuat',
          'Tambahkan tepung maizena kering langsung ke dalam saus',
          'Buang saus dan mulai dari awal karena protein telur sudah mati'
        ],
        correctIndex: 1,
        explanation: 'Kuning telur baru menyediakan lesitin segar sebagai surfaktan alami. Meneteskan saus yang pecah secara bertahap ke dalam emulsi dasar baru akan mengikat kembali tetesan lemak minyak ke dalam fase air.',
        chefNote: 'Seorang sous-chef handal selalu bisa menyelamatkan hollandaise dalam waktu 90 detik!',
        category: 'Teknik Emulsi'
      },
      {
        id: 'kr3',
        question: 'Kari atau gulai ayam yang kamu masak terasa terlalu pedas menyengat hingga membakar lidah anak didik. Zat apa yang paling efektif mengikat kapsaisin cabai?',
        options: [
          'Air es dingin dalam jumlah banyak',
          'Produk berbasis susu/lemak (santan tambahan, yogurt, atau butter) karena kapsaisin larut dalam lemak bukan air',
          'Kecap manis kental',
          'Garam dapur kasar'
        ],
        correctIndex: 1,
        explanation: 'Kapsaisin adalah senyawa hidrofobik non-polar (tidak larut air, tetapi sangat larut dalam lemak dan alkohol). Kasein dalam susu atau lemak nabati santan membungkus molekul kapsaisin dan membilasnya dari reseptor TRPV1 di lidah.',
        chefNote: 'Air putih hanya akan menyebarkan partikel pedas ke seluruh rongga mulut!',
        category: 'Sains Rasa'
      },
      {
        id: 'kr4',
        question: 'Daging tumisan (stir-fry) di wajan mengeluarkan banyak air (berkuah keruh) dan gagal berwarna cokelat harum. Apa penyebab fatalnya?',
        options: [
          'Daging sapi mengandung terlalu banyak serat vitamin',
          'Wajan terlalu sesak (overcrowding) dan api kurang besar, sehingga suhu wajan anjlok drastis',
          'Spatula yang digunakan terbuat dari silikon',
          'Bawang putih dimasukkan terlalu awal'
        ],
        correctIndex: 1,
        explanation: 'Overcrowded pan adalah kesalahan paling umum pemula. Memasukkan terlalu banyak daging dingin sekaligus menyerap panas wajan seketika, menurunkan suhu di bawah 100°C sehingga daging melepaskan air seluler dan merebus dirinya sendiri.',
        chefNote: 'Masaklah secara bertahap (batch cooking) bila porsi Anda banyak!',
        category: 'Suhu & Teknik'
      },
      {
        id: 'kr5',
        question: 'Pada teknik pembuatan Clarified Cocktail (Milk Punch), mengapa cairan asam wajib dituangkan KE DALAM SUSU, dan bukan susu yang dituangkan ke dalam asam?',
        options: [
          'Agar alkohol di dalam minuman tidak menguap ke udara',
          'Karena bila susu dituangkan ke asam, kasein akan terkejut dan membentuk gumpalan renik yang terlalu halus sehingga lolos dari saringan dan minuman gagal jernih',
          'Agar warna susu berubah menjadi transparan seketika',
          'Untuk mencegah susu menjadi basi dalam waktu 5 menit'
        ],
        correctIndex: 1,
        explanation: 'Menuangkan asam secara perlahan ke dalam volume susu yang besar memungkinkan molekul kasein menggumpal dalam ukuran dadih (curds) yang besar dan kokoh. Gumpalan besar ini akan mengendap di dasar filter dan membentuk "ranjang filtrasi biologis" yang menyaring partikel keruh hingga minuman sejernih air mata kristal.',
        chefNote: 'Selalu ingat: "Asam masuk ke Susu, bukan sebaliknya!"',
        category: 'Sains Mixology'
      }
    ]
  },
  {
    id: 'rempah-bumbu-nusantara',
    title: 'Rahasia Rempah & Bumbu Nusantara',
    subtitle: 'Pelajari karakter esensial, minyak atsiri, dan paduan bumbu adiluhung',
    level: 'Dasar',
    questionsCount: 4,
    timeLimitSeconds: 150,
    badgeName: 'Pakar Rempah Nusantara',
    questions: [
      {
        id: 'rn1',
        question: 'Mengapa ketumbar, jintan, dan lada butiran sebaiknya disangrai (dry toast) di wajan tanpa minyak sebelum dihaluskan?',
        options: [
          'Agar rempah menjadi empuk dan mudah dicerna usus',
          'Untuk mengaktifkan dan melepaskan minyak atsiri esensial yang terkunci serta memunculkan aroma kacang panggang (nutty)',
          'Untuk membakar habis kandungan racun tanaman',
          'Agar warna bumbu berubah menjadi putih susu'
        ],
        correctIndex: 1,
        explanation: 'Panas kering memecah dinding sel tanaman dan memicu oksidasi ringan senyawa volatil pinene dan cymene, mengubah aroma mentah berumput menjadi aroma harum mendalam berkarakter rempah matang.',
        chefNote: 'Sangrai sebentar hingga terdengar letupan kecil dan tercium wangi semerbak, jangan sampai menghitam gosong.',
        category: 'Rempah'
      },
      {
        id: 'rn2',
        question: 'Apa perbedaan mendasar antara Asam Kandis dan Asam Jawa dalam kuliner rendang tradisional Minang?',
        options: [
          'Asam kandis memberikan rasa asam bersih tanpa mengubah warna kuah jadi keruh manis, sedangkan asam jawa mengandung gula alami yang dapat merusak profil rasa rendang',
          'Asam kandis hanya digunakan untuk menghilangkan bau amis ikan',
          'Asam jawa adalah bumbu wajib rendang sejak abad ke-15',
          'Keduanya sama persis dan bisa digantikan oleh cuka makan'
        ],
        correctIndex: 0,
        explanation: 'Asam kandis berasal dari buah Garcinia xanthochymus yang dikeringkan. Rasa asamnya tajam tajam bersih dan elegan tanpa kandungan pati/gula tebal yang berisiko membuat bumbu rendang terlalu manis dan mudah berkerak gosong.',
        chefNote: 'Pilih asam kandis yang hitam bersih dan kering berkilat.',
        category: 'Bahan Baku'
      },
      {
        id: 'rn3',
        question: 'Di dalam racikan bumbu khas Bali "Base Genep", rempah apa yang memberikan aroma tajam segar khas dan rasa hangat penawar rasa enek daging?',
        options: [
          'Kencur (Cekuh)',
          'Kayu Manis',
          'Pala',
          'Cengkeh'
        ],
        correctIndex: 0,
        explanation: 'Kencur (Kaempferia galanga) adalah pilar bumbu Bali yang memberikan tendangan aroma kamfer alami yang menyegarkan, sangat kontras dengan gurihnya lemak babi, ayam, atau bebek.',
        chefNote: 'Jangan gunakan kencur terlalu banyak agar tidak mendominasi rempah lainnya.',
        category: 'Bumbu Bali'
      },
      {
        id: 'rn4',
        question: 'Mengapa kunyit segar dianjurkan untuk dibakar atau disangrai terlebih dahulu sebelum dihaluskan ke dalam bumbu opor atau betutu?',
        options: [
          'Untuk melarutkan kurkumin dan melenyapkan bau getir langu khas getah tanah',
          'Agar warna kuningnya memudar menjadi bening',
          'Supaya kunyit tidak menyengat hidung tukang masak',
          'Untuk mengeringkan serat akar kunyit'
        ],
        correctIndex: 0,
        explanation: 'Kunyit mentah mengandung minyak atsiri cineol dan borneol dengan aroma getir tanah yang kuat. Pembakaran singkat menguapkan fraksi getah pahit dan mengintensifkan pigmen kurkumin alami.',
        chefNote: 'Kunyit bakar adalah rahasia kuah kuning yang harum dan tidak amis.',
        category: 'Teknik Tradisional'
      }
    ]
  }
];

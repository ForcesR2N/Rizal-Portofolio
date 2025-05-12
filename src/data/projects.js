// src/data/projects.js
// Struktur data untuk proyek

export const projects = [
  {
    id: 'city-connect',
    title: 'City Connect',
    description: 'Aplikasi mobile untuk memudahkan warga mengakses layanan publik dan melaporkan masalah infrastruktur kota.',
    shortDescription: 'Platform pelaporan infrastruktur kota dan layanan publik',
    coverImage: '/api/placeholder/1200/600?text=City+Connect+Cover',
    thumbnailImage: '/api/placeholder/400/240?text=City+Connect',
    category: 'Mobile App',
    primaryColor: 'cyan',
    featured: true,
    completionDate: '2024-06',
    client: 'Smart City Initiative',
    
    // Detail proyek
    overview: `
      City Connect adalah platform yang menghubungkan warga dengan pemerintah kota untuk mempercepat penanganan masalah perkotaan seperti jalan rusak, lampu jalan mati, atau masalah sampah. Aplikasi ini memiliki fitur pelaporan dengan geolokasi, pelacakan status laporan, dan notifikasi langsung dari pihak berwenang.
      
      Proyek ini bertujuan untuk meningkatkan partisipasi warga dalam pembangunan kota dan mempercepat respons pemerintah terhadap masalah infrastruktur.
    `,
    
    // Tags atau teknologi
    tags: [
      { name: 'Flutter', bg: 'bg-blue-500/20', textColor: 'text-blue-300' },
      { name: 'Mobile', bg: 'bg-indigo-500/20', textColor: 'text-indigo-300' }
    ],
    
    // Fitur utama
    features: [
      {
        title: "Pelaporan Cepat",
        description: "Laporkan masalah infrastruktur kota dengan foto dan lokasi GPS dalam beberapa langkah sederhana.",
        icon: "report" // Bisa digunakan untuk menentukan ikon
      },
      {
        title: "Status Tracking",
        description: "Lacak status laporan Anda dari submitted hingga resolved dengan timeline yang jelas.",
        icon: "track"
      },
      {
        title: "Notifikasi Real-time",
        description: "Dapatkan pembaruan instan saat ada kemajuan pada laporan Anda.",
        icon: "notification"
      },
      {
        title: "Integrasi Layanan",
        description: "Akses layanan publik seperti pembayaran pajak, pengajuan izin, dan informasi transportasi.",
        icon: "integration"
      }
    ],
    
    // Teknologi yang digunakan (lebih detail)
    technologies: [
      "Flutter", 
      "Dart", 
      "Firebase", 
      "Google Maps API", 
      "Cloud Firestore", 
      "Firebase Cloud Messaging"
    ],
    
    // Screenshot/Gallery - dapat berupa array path gambar atau objek dengan caption
    screenshots: [
      {
        image: "/projects/growell-app/signUp-growell.png",
        caption: "Sign Up Page"
      },
      {
        image: "/projects/growell-app/signIn-growell.png",
        caption: "Sign In Page"
      },
      {
        image: "/projects/growell-app/home-growell.png",
        caption: "Home Page"
      },
      {
        image: "/projects/growell-app/food_recommendation-growell.png",
        caption: "Food Recommendation Page"
      },
      {
        image: "/projects/growell-app/daily_recommendation-growell.png",
        caption: "Daily Food Recommendation Page"
      },
      {
        image: "/projects/growell-app/profile-growell.png",
        caption: "Daily Food Recommendation Page"
      }
    ],
    
    // Tantangan dan solusi
    challenges: [
      {
        challenge: "Sinkronisasi data offline dan online",
        solution: "Implementasi sistem caching dan queue untuk pelaporan pada area dengan koneksi internet terbatas."
      },
      {
        challenge: "Integrasi dengan sistem pemerintah",
        solution: "Membangun API adapter yang kompatibel dengan sistem legacy pemerintah kota."
      }
    ],
    
    // Timeline pengembangan
    timeline: [
      { phase: "Research & Planning", date: "Jan 2024", description: "User research, competitor analysis, dan perencanaan fitur" },
      { phase: "UI/UX Design", date: "Feb 2024", description: "Perancangan wireframe dan prototype aplikasi" },
      { phase: "Development", date: "Mar-Apr 2024", description: "Implementasi frontend dan backend services" },
      { phase: "Testing", date: "Mei 2024", description: "User testing dan bug fixing" },
      { phase: "Launch", date: "Jun 2024", description: "Soft launch dan pengumpulan feedback awal" }
    ],
    
    // Future plans
    futurePlans: [
      "Integrasi dengan sistem manajemen kota untuk pemrosesan laporan otomatis",
      "Fitur komunitas untuk memungkinkan warga berkolaborasi menyelesaikan masalah lokal",
      "Dashboard analitik untuk visualisasi tren laporan dan performa penanganan",
      "Sistem penghargaan untuk mendorong partisipasi aktif warga"
    ],
    
    // Link eksternal
    links: {
      github: "https://github.com/ForcesR2N/city-connect",
    },
    
    // Testimonial (opsional)
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Kepala Dinas Pekerjaan Umum",
        quote: "City Connect telah membantu kami menerima dan mengelola lebih dari 500 laporan infrastruktur dalam sebulan pertama implementasi.",
        image: "/api/placeholder/100/100?text=Budi"
      }
    ],
    
    // SEO metadata
    seo: {
      title: "City Connect - Aplikasi Pelaporan Infrastruktur Kota",
      description: "City Connect adalah aplikasi mobile yang memudahkan warga untuk melaporkan masalah infrastruktur kota dan mengakses layanan publik dengan cepat.",
      keywords: ["aplikasi kota cerdas", "pelaporan infrastruktur", "aplikasi mobile", "smart city"]
    }
  },
  
  // Proyek kedua
  {
    id: 'quizzy-viz',
    title: 'QuizzyViz',
    description: 'Platform pembelajaran interaktif dengan visualisasi data untuk tracking kemajuan dan analisis performa pengguna.',
    shortDescription: 'Platform pembelajaran dengan visualisasi data performa',
    coverImage: '/api/placeholder/1200/600?text=QuizzyViz+Cover',
    thumbnailImage: '/api/placeholder/400/240?text=QuizzyViz',
    category: 'Web App',
    primaryColor: 'purple',
    featured: true,
    completionDate: '2024-04',
    client: 'EdTech Startup',
    
    overview: `
      QuizzyViz adalah platform pembelajaran yang membantu siswa dan pengajar memvisualisasikan progres belajar. Dengan analitik yang komprehensif, QuizzyViz memudahkan pengguna untuk mengidentifikasi area yang perlu ditingkatkan.
      
      Platform ini dirancang untuk membantu meningkatkan retensi materi pembelajaran melalui metode gamifikasi dan visualisasi data yang menarik.
    `,
    
    tags: [
      { name: 'React', bg: 'bg-purple-500/20', textColor: 'text-purple-300' },
      { name: 'Web', bg: 'bg-orange-500/20', textColor: 'text-orange-300' }
    ],
    
    features: [
      {
        title: "Visualisasi Progres",
        description: "Dashboard interaktif untuk melacak kemajuan pembelajaran dengan grafik dan chart yang informatif.",
        icon: "chart"
      },
      {
        title: "Quiz Generator",
        description: "Pembuat kuis otomatis berdasarkan materi dan tingkat kesulitan yang dapat disesuaikan.",
        icon: "quiz"
      },
      {
        title: "Analisis Performa",
        description: "Analisis mendalam tentang kekuatan dan kelemahan berdasarkan hasil kuis dan waktu studi.",
        icon: "analysis"
      },
      {
        title: "Kolaborasi Tim",
        description: "Fitur untuk belajar bersama dan berkompetisi dalam grup untuk mendorong motivasi.",
        icon: "team"
      }
    ],
    
    technologies: [
      "React",
      "Next.js", 
      "TailwindCSS", 
      "Chart.js", 
      "Firebase", 
      "Node.js",
      "Express"
    ],
    
    screenshots: [
      {
        image: "/api/placeholder/800/600?text=Dashboard",
        caption: "Dashboard Utama"
      },
      {
        image: "/api/placeholder/800/600?text=Quiz+Generator",
        caption: "Quiz Generator"
      },
      {
        image: "/api/placeholder/800/600?text=Performance+Analysis",
        caption: "Analisis Performa"
      },
      {
        image: "/api/placeholder/800/600?text=Team+Collaboration",
        caption: "Kolaborasi Tim"
      }
    ],
    
    challenges: [
      {
        challenge: "Membuat visualisasi data yang mudah dipahami",
        solution: "Menerapkan desain UX yang fokus pada simplisitas dan kejelasan informasi."
      },
      {
        challenge: "Skalabilitas untuk jumlah pengguna yang besar",
        solution: "Implementasi arsitektur microservices dan caching untuk meningkatkan performa."
      }
    ],
    
    timeline: [
      { phase: "Ideation", date: "Nov 2023", description: "Brainstorming dan riset pasar" },
      { phase: "Design", date: "Dec 2023", description: "Wireframing dan UI/UX design" },
      { phase: "Development", date: "Jan-Mar 2024", description: "Pengembangan frontend dan backend" },
      { phase: "Beta Testing", date: "Mar 2024", description: "Pengujian dengan pengguna terbatas" },
      { phase: "Release", date: "Apr 2024", description: "Peluncuran versi 1.0" }
    ],
    
    futurePlans: [
      "Integrasi dengan platform pembelajaran populer seperti Moodle dan Google Classroom",
      "Fitur AI untuk rekomendasi pembelajaran personal",
      "Sistem ekspor data untuk analisis lebih lanjut",
      "Aplikasi mobile untuk akses di perangkat iOS dan Android"
    ],
    
    links: {
      github: "https://github.com/ForcesR2N/quizzy-viz",
      demo: "https://quizzyviz-demo.example.com",
      website: "https://quizzyviz.example.com"
    },
    
    testimonials: [
      {
        name: "Dr. Rina Wijaya",
        role: "Dosen Universitas Teknologi",
        quote: "QuizzyViz membantu saya melacak pemahaman mahasiswa dengan cara yang belum pernah saya alami sebelumnya. Fitur analitiknya sangat membantu.",
        image: "/api/placeholder/100/100?text=Dr.Rina"
      }
    ],
    
    seo: {
      title: "QuizzyViz - Platform Pembelajaran dengan Visualisasi Data",
      description: "QuizzyViz membantu siswa dan pengajar memvisualisasikan progres belajar dengan analitik komprehensif dan gamifikasi.",
      keywords: ["elearning", "edtech", "visualisasi data", "pembelajaran interaktif"]
    }
  },
  
  // Proyek ketiga
  {
    id: 'insight-vest',
    title: 'InsightVest',
    description: 'Aplikasi analisis investasi dengan fitur prediksi menggunakan machine learning untuk membantu investor mengambil keputusan.',
    shortDescription: 'Platform analisis investasi dengan prediksi ML',
    coverImage: '/api/placeholder/1200/600?text=InsightVest+Cover',
    thumbnailImage: '/api/placeholder/400/240?text=InsightVest',
    category: 'Web App',
    primaryColor: 'emerald',
    featured: true,
    completionDate: '2024-03',
    client: 'Fintech Startup',
    
    overview: `
      InsightVest adalah platform analisis investasi yang menggunakan machine learning untuk memprediksi tren pasar dan membantu investor membuat keputusan yang lebih informasi. Aplikasi ini menyediakan dashboard yang komprehensif dengan visualisasi data dan laporan analisis yang mendalam.
      
      Tujuan dari InsightVest adalah untuk demokratisasi analisis keuangan, membuatnya lebih mudah diakses oleh investor ritel dan tidak hanya terbatas untuk profesional keuangan.
    `,
    
    tags: [
      { name: 'Python', bg: 'bg-blue-500/20', textColor: 'text-blue-300' },
      { name: 'ML', bg: 'bg-green-500/20', textColor: 'text-green-300' },
      { name: 'React', bg: 'bg-cyan-500/20', textColor: 'text-cyan-300' }
    ],
    
    features: [
      {
        title: "Prediksi Pasar",
        description: "Algoritma ML yang memprediksi pergerakan harga saham dan aset lainnya berdasarkan data historis dan berita terkini.",
        icon: "prediction"
      },
      {
        title: "Portfolio Tracker",
        description: "Monitor kinerja portofolio investasi dengan metrik dan visualisasi yang komprehensif.",
        icon: "portfolio"
      },
      {
        title: "Analisis Sentimen",
        description: "Analisis sentimen pasar dari berita, media sosial, dan sumber lainnya untuk menginformasikan keputusan investasi.",
        icon: "sentiment"
      },
      {
        title: "Diversifikasi Rekomendasi",
        description: "Saran untuk diversifikasi portofolio berdasarkan profil risiko dan tujuan investasi pengguna.",
        icon: "diversification"
      }
    ],
    
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
    
    screenshots: [
      {
        image: "/api/placeholder/800/600?text=Dashboard",
        caption: "Dashboard Utama"
      },
      {
        image: "/api/placeholder/800/600?text=Prediction+Model",
        caption: "Model Prediksi"
      },
      {
        image: "/api/placeholder/800/600?text=Portfolio+Analysis",
        caption: "Analisis Portofolio"
      },
      {
        image: "/api/placeholder/800/600?text=Sentiment+Analysis",
        caption: "Analisis Sentimen"
      }
    ],
    
    challenges: [
      {
        challenge: "Akurasi prediksi dalam pasar yang volatile",
        solution: "Mengembangkan ensemble model yang menggabungkan beberapa algoritma ML untuk meningkatkan akurasi prediksi."
      },
      {
        challenge: "Penanganan data real-time dalam jumlah besar",
        solution: "Implementasi arsitektur streaming data dengan Apache Kafka dan processing pipeline yang efisien."
      }
    ],
    
    timeline: [
      { phase: "Riset & Desain", date: "Sep 2023", description: "Penelitian algoritma ML dan desain arsitektur" },
      { phase: "Pengembangan Backend", date: "Oct-Nov 2023", description: "Implementasi API dan model ML" },
      { phase: "Pengembangan Frontend", date: "Dec 2023-Jan 2024", description: "Pembangunan UI dan integrasi dengan backend" },
      { phase: "Testing", date: "Feb 2024", description: "Pengujian akurasi model dan user testing" },
      { phase: "Deployment", date: "Mar 2024", description: "Peluncuran platform beta" }
    ],
    
    futurePlans: [
      "Integrasi dengan platform trading untuk eksekusi otomatis",
      "Peningkatan akurasi model dengan deep learning",
      "Fitur sosial untuk diskusi dan berbagi strategi investasi",
      "Ekspansi ke aset kripto dan komoditas"
    ],
    
    links: {
      github: "https://github.com/ForcesR2N/insight-vest",
      demo: "https://insightvest-demo.example.com"
    },
    
    testimonials: [
      {
        name: "Alexander Wijaya",
        role: "Investor Ritel",
        quote: "InsightVest telah mengubah cara saya berinvestasi. Saya sekarang dapat membuat keputusan berdasarkan data, bukan hanya insting.",
        image: "/api/placeholder/100/100?text=Alexander"
      }
    ],
    
    seo: {
      title: "InsightVest - Platform Analisis Investasi dengan Machine Learning",
      description: "InsightVest membantu investor membuat keputusan lebih cerdas dengan analisis prediktif menggunakan machine learning dan visualisasi data.",
      keywords: ["fintech", "analisis investasi", "machine learning", "prediksi pasar"]
    }
  },
  
  // Proyek keempat
  {
    id: 'blog-forest',
    title: 'Blog Forest API',
    description: 'Backend API untuk platform blogging dengan fitur manajemen konten, autentikasi, dan analitik.',
    shortDescription: 'Backend API untuk platform blogging modern',
    coverImage: '/api/placeholder/1200/600?text=Blog+Forest+API+Cover',
    thumbnailImage: '/api/placeholder/400/240?text=Blog+Forest+API',
    category: 'Backend',
    primaryColor: 'blue',
    featured: false,
    completionDate: '2024-01',
    client: 'Content Platform',
    
    overview: `
      Blog Forest API adalah backend yang kuat untuk platform blogging modern, menyediakan API yang fleksibel dan dapat diskalakan untuk manajemen konten, autentikasi pengguna, dan analitik. Didesain dengan pendekatan microservices, API ini dapat dengan mudah berintegrasi dengan berbagai frontend dan aplikasi pihak ketiga.
      
      API ini menjadi tulang punggung untuk platform blogging yang memprioritaskan performa, keamanan, dan fleksibilitas.
    `,
    
    tags: [
      { name: 'Node.js', bg: 'bg-green-500/20', textColor: 'text-green-300' },
      { name: 'API', bg: 'bg-yellow-500/20', textColor: 'text-yellow-300' },
      { name: 'Firebase', bg: 'bg-orange-500/20', textColor: 'text-orange-300' }
    ],
    
    features: [
      {
        title: "Content Management",
        description: "API lengkap untuk membuat, membaca, memperbarui, dan menghapus konten blog dengan dukungan untuk berbagai format media.",
        icon: "content"
      },
      {
        title: "User Authentication",
        description: "Sistem autentikasi yang aman dengan JWT, OAuth, dan dukungan multi-factor authentication.",
        icon: "auth"
      },
      {
        title: "Analytics Engine",
        description: "Pengumpulan dan analisis data tentang tampilan, interaksi pengguna, dan metrik performa.",
        icon: "analytics"
      },
      {
        title: "Search & Tagging",
        description: "Fitur pencarian full-text dan sistem tagging yang kuat untuk mengorganisir konten.",
        icon: "search"
      }
    ],
    
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Elasticsearch",
      "Redis",
      "Docker",
      "GCP"
    ],
    
    screenshots: [
      {
        image: "/api/placeholder/800/600?text=API+Documentation",
        caption: "Dokumentasi API"
      },
      {
        image: "/api/placeholder/800/600?text=Content+Management",
        caption: "Manajemen Konten"
      },
      {
        image: "/api/placeholder/800/600?text=Analytics+Dashboard",
        caption: "Dashboard Analitik"
      },
      {
        image: "/api/placeholder/800/600?text=Authentication+Flow",
        caption: "Alur Autentikasi"
      }
    ],
    
    challenges: [
      {
        challenge: "Performa pada beban tinggi",
        solution: "Implementasi strategi caching dan optimasi database untuk menangani traffic dengan skala besar."
      },
      {
        challenge: "Keamanan API",
        solution: "Penerapan praktik keamanan terbaik termasuk rate limiting, validasi input ketat, dan enkripsi data sensitif."
      }
    ],
    
    timeline: [
      { phase: "Perancangan API", date: "Sep 2023", description: "Mendesain arsitektur dan endpoint API" },
      { phase: "Pengembangan Inti", date: "Oct-Nov 2023", description: "Implementasi fitur utama dan infrastruktur" },
      { phase: "Pengujian & Optimasi", date: "Dec 2023", description: "Testing performa dan keamanan" },
      { phase: "Dokumentasi", date: "Jan 2024", description: "Pembuatan dokumentasi API yang komprehensif" },
      { phase: "Peluncuran", date: "Jan 2024", description: "Deployment ke produksi" }
    ],
    
    futurePlans: [
      "Dukungan GraphQL untuk query yang lebih fleksibel",
      "Sistem plugin untuk memperluas fungsionalitas",
      "Implementasi API Webhooks untuk integrasi yang lebih baik",
      "Fitur analytics yang lebih mendalam dengan machine learning"
    ],
    
    links: {
      github: "https://github.com/ForcesR2N/blog-forest-api",
      documentation: "https://api-docs.blogforest.example.com"
    },
    
    testimonials: [
      {
        name: "Linda Wijaya",
        role: "CTO, Content Platform",
        quote: "Blog Forest API menyediakan backbone yang kokoh untuk platform kami. Dokumentasinya sangat lengkap dan performa sangat baik.",
        image: "/api/placeholder/100/100?text=Linda"
      }
    ],
    
    seo: {
      title: "Blog Forest API - Backend untuk Platform Blogging Modern",
      description: "API yang kuat dan dapat diskalakan untuk manajemen konten, autentikasi, dan analitik untuk platform blogging modern.",
      keywords: ["API", "backend", "blogging platform", "content management"]
    }
  }
];

// Fungsi untuk mendapatkan semua proyek
export function getAllProjects() {
  return projects;
}

// Fungsi untuk mendapatkan proyek berdasarkan ID
export function getProjectById(id) {
  return projects.find(project => project.id === id) || null;
}

// Fungsi untuk mendapatkan proyek unggulan
export function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}

// Fungsi untuk mendapatkan proyek berdasarkan kategori
export function getProjectsByCategory(category) {
  return projects.filter(project => project.category === category);
}

// Fungsi untuk mendapatkan proyek yang terkait (bisa berdasarkan tag/kategori yang sama)
export function getRelatedProjects(id, limit = 3) {
  const currentProject = getProjectById(id);
  if (!currentProject) return [];
  
  // Cari proyek dengan tag yang sama
  const relatedProjects = projects
    .filter(project => 
      project.id !== id && // Bukan proyek saat ini
      project.tags.some(tag => 
        currentProject.tags.some(currentTag => 
          currentTag.name === tag.name
        )
      )
    )
    .slice(0, limit);
    
  return relatedProjects;
}
// src/data/projects.js
// Struktur data untuk proyek

export const projects = [
  {
    id: 'Growell-App',
    title: 'Growell App',
    description: 'Aplikasi Panduan Nutrisi Bayi',
    shortDescription: 'Platform pelaporan infrastruktur kota dan layanan publik',
    coverImage: '/api/placeholder/1200/600?text=City+Connect+Cover',
    thumbnailImage: '/api/placeholder/400/240?text=City+Connect',
    category: 'Mobile App',
    primaryColor: 'cyan',
    featured: true,
    completionDate: '2024-06',
    client: 'Smart City Initiative',
    
    // Detail proyek
    overview: [
      "GroWell adalah aplikasi mobile yang dirancang khusus untuk membantu orang tua memantau dan mengelola nutrisi bayi mereka, khususnya untuk anak berusia 0-24 bulan. Aplikasi ini mengintegrasikan panduan medis WHO (World Health Organization) dengan teknologi modern untuk memberikan rekomendasi nutrisi yang personal dan akurat.",
      
      "Aplikasi ini lahir dari kebutuhan orang tua untuk memiliki panduan yang mudah diakses, akurat, dan personal dalam memberikan nutrisi terbaik bagi anak mereka. Dengan fokus pada fase-fase penting pertumbuhan bayi, mulai dari ASI eksklusif (0-6 bulan), pengenalan MPASI (6 bulan), variasi MPASI (7-12 bulan), hingga transisi ke makanan keluarga (13-24 bulan), GroWell hadir sebagai solusi digital yang comprehensive.",
      
      "Yang membuat GroWell unik adalah pendekatan personalisasinya - aplikasi ini tidak hanya memberikan informasi umum, tetapi menghitung kebutuhan nutrisi spesifik berdasarkan usia, berat badan, tingkat aktivitas, dan kondisi khusus bayi (seperti alergi). Setiap rekomendasi disesuaikan dengan karakteristik individu setiap bayi, sehingga orang tua mendapatkan panduan yang benar-benar relevan.",
      
      "Aplikasi ini juga sangat memperhatikan aspek edukatif, dengan informasi detail tentang pentingnya ASI eksklusif, cara pengenalan MPASI yang benar, dan tips praktis untuk memastikan bayi mendapatkan nutrisi yang optimal. GroWell tidak hanya menjadi aplikasi pencatat, tetapi juga menjadi pendamping edukasi bagi orang tua baru."
    ],
    
    // Tags atau teknologi
    tags: [
      { name: 'Flutter', bg: 'bg-blue-500/20', textColor: 'text-blue-300' },
      { name: 'Mobile', bg: 'bg-indigo-500/20', textColor: 'text-indigo-300' }
    ],
    
    // Fitur utama
    features: [
      {
        title: "Dashboard Profil Bayi Personal",
        description: "Kelola profil bayi Anda dengan detail lengkap termasuk data usia, berat badan, jenis kelamin, dan tingkat aktivitas yang akan digunakan untuk perhitungan nutrisi personal.",
      },
      {
        title: "Tracking Nutrisi Harian",
        description: "Lacak asupan makanan bayi Anda dengan mudah menggunakan database makanan lokal yang lengkap atau tambahkan makanan kustom dengan detail nutrisi yang akurat.",
      },
      {
        title: "Kalkulator Kebutuhan Nutrisi",
        description: "Hitung otomatis kebutuhan kalori, protein, karbohidrat, lemak, dan mikronutrien berdasarkan usia dan berat badan bayi sesuai standar WHO.",
      },
      {
        title: "Panduan MPASI & ASI Eksklusif",
        description: "Dapatkan panduan lengkap dari ASI eksklusif (0-6 bulan) hingga variasi MPASI (6-24 bulan) dengan rekomendasi makanan sesuai tahap perkembangan bayi.",
 
      }
    ],
    
    // Teknologi yang digunakan (lebih detail)
    technologies: [
      "Flutter", 
      "Dart", 
      "Firebase", 
      "Authentication", 
      "Cloud Storage", 
      "Firestore"
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
    
    // Link eksternal
    links: {      github: "https://github.com/ForcesR2N/growell-app",
    },
    
    
    // SEO metadata
    seo: {
      title: "City Connect - Aplikasi Pelaporan Infrastruktur Kota",
      description: "City Connect adalah aplikasi mobile yang memudahkan warga untuk melaporkan masalah infrastruktur kota dan mengakses layanan publik dengan cepat.",
      keywords: ["aplikasi kota cerdas", "pelaporan infrastruktur", "aplikasi mobile", "smart city"]
    }
  },
  
  // Proyek kedua
  {
    id: 'House-Price-Prediction-Machine-Learning',
    title: 'House Price Prediction Machine Learning',
    description: 'Model Machine Learning dengan 60.65% menggunakan feature engineering',
    shortDescription: 'Prediksi harga rumah menggunakan machine learning dan feature engineering',
    coverImage: '/api/placeholder/1200/600?text=QuizzyViz+Cover',
    thumbnailImage: '/api/placeholder/400/240?text=QuizzyViz',
    category: 'Web App',
    primaryColor: 'purple',
    featured: true,
    completionDate: '2025-05',
    client: 'Dibimbing',
    
    overview: ["Proyek prediksi harga rumah ini menggunakan teknik feature engineering yang komprehensif untuk meningkatkan akurasi model machine learning. Dengan mengolah data 538 properti, proyek ini berhasil mencapai akurasi 60.65% dalam memprediksi harga rumah.",

"Proyek ini mendemonstrasikan:",
"- Teknik data preprocessing dan outlier detection",
"- Feature engineering tingkat lanjut (binary encoding, one-hot encoding, standardization)",
"- Pembuatan fitur baru berdasarkan domain knowledge (luxury_score, size_category)",
"- Evaluasi model yang mendalam dengan visualisasi",

"Linear Regression model yang dibangun tidak mengalami overfitting dan menunjukkan performa yang stabil pada data testing, menjadikannya model yang dapat diandalkan untuk aplikasi real-world.,"
    ], 
    tags: [
      { name: 'Machine learning', bg: 'bg-purple-500/20', textColor: 'text-purple-300' },
      { name: 'Web', bg: 'bg-orange-500/20', textColor: 'text-orange-300' }
    ],
    
    features: [
      {
        title: "Advanced Feature Engineering",
        description: "Mengimplementasikan teknik feature engineering seperti Z-score outlier detection, binary encoding, one-hot encoding, dan standardization untuk mempersiapkan data optimal.",
        icon: "quiz"
      },
      {
        title: "Model Performance Optimization",
        description: "Mencapai R² score 60.65% dengan Linear Regression yang stabil dan tidak overfitting. Model menunjukkan performa konsisten antara training dan testing data.",
        icon: "analysis"
      },
      {
        title: "Business Intelligence",
        description: "Mengidentifikasi faktor-faktor kunci yang mempengaruhi harga rumah: ukuran properti, amenitas (AC, kamar tamu), dan lokasi strategis di jalan utama.",
        icon: "Business"
      },
      {
        title: "Data Visualization",
        description: "Membuat visualisasi komprehensif untuk analisis eksplorasi data, evaluasi model, dan feature importance menggunakan matplotlib dan seaborn.",
        icon: "chart"
      },
    ],
    
    technologies: [
      "Python",
      "Scikit-Learn", 
      "Pandas", 
      "NumPy", 
      "Matplotlib", 
      "Seaborn",
      "Jupyter Notebook"
    ],
    
    screenshots: [
      {
        image: "/projects/house_price_prediction_ml/data_visualization.png",
        caption: "Data Visualization"
      },
      {
        image: "/projects/house_price_prediction_ml/feature_engineering_code.png",
        caption: "Code Feature Engineering"
      },
      {
        image: "/projects/house_price_prediction_ml/model_evaluation_plot.png",
        caption: "Model Evaluation"
      },
      {
        image: "/projects/house_price_prediction_ml/top_10_importance_features.png",
        caption: "Top 10 Importance Featues"
      },
      {
        image: "/projects/house_price_prediction_ml/final_results.png",
        caption: "Final Results"
      },
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
    
    links: {
      github: "https://github.com/ForcesR2N/quizzy-viz",
      demo: "https://quizzyviz-demo.example.com",
      website: "https://quizzyviz.example.com"
    },
    
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
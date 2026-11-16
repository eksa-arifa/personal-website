export type Language = "en" | "id";

export interface ProfileCopy {
  seo: {
    title: string;
    description: string;
  };
  header: {
    role: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
  };
  about: {
    heading: string;
    paragraphs: readonly string[];
  };
}

export const PROFILE_COPY: Record<Language, ProfileCopy> = {
  en: {
    seo: {
      title: "Muhammad Eksa Arifa — Freelancer & Director of Development",
      description:
        "Portfolio of Muhammad Eksa Arifa, a Freelance Software Engineer and Director of Development at an IT company based in Yogyakarta, specializing in scalable full-stack web applications.",
    },
    header: {
      role: "Freelancer & Director of Development",
    },
    hero: {
      greeting: "Hi, my name is Muhammad Eksa Arifa",
      subtitle:
        "Freelance Software Engineer & Director of Development building scalable web applications and digital solutions.",
    },
    about: {
      heading: "About Me",
      paragraphs: [
        "I am a Freelance Software Engineer and Director of Development at an IT company based in Yogyakarta. In my leadership role, I oversee software architecture, technical strategy, and end-to-end engineering delivery so every product is built reliably and ready to scale.",
        "With a strong foundation in full-stack web development and back-end engineering, I build fast, maintainable systems using modern technologies including TypeScript, React, Next.js, Node.js, Laravel, PostgreSQL, and MySQL.",
        "Alongside leading development initiatives, I actively collaborate with businesses, startups, and institutions as an independent freelancer—transforming complex operational needs into clean, high-performing websites and custom web applications.",
      ],
    },
  },
  id: {
    seo: {
      title: "Muhammad Eksa Arifa — Freelancer & Direktur Pengembangan IT",
      description:
        "Portofolio Muhammad Eksa Arifa, Freelancer Web Developer dan Direktur Pengembangan di perusahaan IT berbasis di Yogyakarta. Spesialis pengembangan aplikasi web full-stack modern dengan React, Next.js, TypeScript, dan Laravel.",
    },
    header: {
      role: "Freelancer & Direktur Pengembangan IT",
    },
    hero: {
      greeting: "Halo, saya Muhammad Eksa Arifa",
      subtitle:
        "Freelancer Full-Stack Developer & Direktur Pengembangan di perusahaan IT — membangun aplikasi web modern, cepat, dan siap berkembang.",
    },
    about: {
      heading: "Tentang Saya",
      paragraphs: [
        "Saya adalah seorang Freelancer Software Engineer sekaligus Direktur Pengembangan di sebuah perusahaan IT yang berbasis di Yogyakarta. Dalam peran kepemimpinan teknis, saya mengarahkan arsitektur perangkat lunak, strategi pengembangan produk, serta eksekusi proyek teknologi secara end-to-end agar solusi digital yang dibangun tepat guna dan berkelanjutan.",
        "Berbekal pengalaman di bidang pengembangan aplikasi web full-stack dan back-end, saya merancang sistem yang cepat, aman, dan scalable menggunakan teknologi modern seperti TypeScript, React, Next.js, Node.js, Laravel, serta basis data PostgreSQL dan MySQL.",
        "Selain memimpin tim pengembangan di perusahaan IT, saya juga terbuka sebagai freelance web developer untuk membantu bisnis, instansi, maupun startup mewujudkan website profesional, aplikasi operasional, hingga sistem informasi khusus yang efisien dan mudah dikembangkan.",
      ],
    },
  },
};

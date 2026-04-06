export const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Journey", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Impact", href: "#initiatives" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" }
] as const;

export const stats = [
  { label: "Instagram Community", value: 3.9, suffix: "M+" },
  { label: "Facebook Community", value: 1.4, suffix: "M+" },
  { label: "Public Service Journey", value: 12, suffix: "Years" },
  { label: "Consecutive Lok Sabha Terms", value: 3, suffix: "Terms" }
] as const;

export type MediaCategory = "Lok Sabha Speeches" | "Public Rallies" | "Interviews";
export type MediaPlatform = "YouTube" | "Instagram";

export type MediaItem = {
  id: string;
  title: string;
  category: MediaCategory;
  platform: MediaPlatform;
  url: string;
  thumbnail: string;
  dateLabel: string;
  description: string;
};

export const featuredMedia = {
  title: "Parliament Voice: Policy, Employment and Growth",
  videoSrc: "/videos/chirag-featured-speech.mp4",
  embedUrl: "https://www.youtube.com/embed/Y2QSETTCkAQ",
  sourceLabel: "Featured Speech"
};

export const mediaItems: MediaItem[] = [
  {
    id: "ls-2026-no-confidence",
    title: "Lok Sabha Remarks on No-Confidence Motion",
    category: "Lok Sabha Speeches",
    platform: "YouTube",
    url: "https://sansadtv.nic.in/loksabha/ls-chirag-paswans-remarks-no-confidence-motion-against-ls-speaker-10-march-2026",
    thumbnail:
      "https://images.unsplash.com/photo-1534293230397-c067fc201ab8?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "10 Mar 2026",
    description: "Parliament-first messaging centered on democratic accountability and governance."
  },
  {
    id: "ls-2023-no-confidence-discussion",
    title: "Remarks During No-Confidence Motion Discussion",
    category: "Lok Sabha Speeches",
    platform: "YouTube",
    url: "https://sansadtv.nic.in/loksabha/chirag-paswans-remarks-discussion-on-motion-of-no-confidence-10-august-2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "10 Aug 2023",
    description: "National house intervention emphasizing policy clarity and leadership responsibility."
  },
  {
    id: "budget-2025-reaction",
    title: "Ministerial Remarks on Union Budget 2025",
    category: "Lok Sabha Speeches",
    platform: "YouTube",
    url: "https://sansadtv.nic.in/episode/food-processing-industries-minister-chirag-paswan-remarks-on-budget-2025",
    thumbnail:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "Feb 2025",
    description: "Food processing-led growth narrative tied to employment and value-chain development."
  },
  {
    id: "hajipur-oath",
    title: "Oath as MP, Hajipur (Lok Sabha)",
    category: "Lok Sabha Speeches",
    platform: "YouTube",
    url: "https://sansadtv.nic.in/loksabha/chirag-paswan-ljsprv-takes-oath-as-member-of-parliament-hajipur-sc-bihar-24-june-2024",
    thumbnail:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "24 Jun 2024",
    description: "A pivotal parliamentary moment marking representation of Hajipur at national level."
  },
  {
    id: "hajipur-rally-youth",
    title: "Hajipur Ground Connect Reel: Youth & Employment",
    category: "Public Rallies",
    platform: "Instagram",
    url: "https://www.instagram.com/ichiragpaswan/",
    thumbnail:
      "https://images.unsplash.com/photo-1469571486292-b53601020f90?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "Instagram Reel",
    description: "Mass outreach moment highlighting Bihar First, Youth First messaging."
  },
  {
    id: "jan-samvad-reel",
    title: "Jan Samvad Reel: Constituency Public Dialogue",
    category: "Public Rallies",
    platform: "Instagram",
    url: "https://www.instagram.com/ichiragpaswan/",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "Instagram Reel",
    description: "Community-first connect with local voices and development priorities."
  },
  {
    id: "samvaad-exclusive",
    title: "Sansad TV Samvaad Exclusive Interview",
    category: "Interviews",
    platform: "YouTube",
    url: "https://sansadtv.nic.in/episode/samvaad-exclusive-chirag-paswan-minister-for-food-processing-industries-09-march-2025",
    thumbnail:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "09 Mar 2025",
    description: "Long-form policy and leadership interview on national priorities and delivery."
  },
  {
    id: "national-interview-food-processing",
    title: "National Interview: Food Processing & Rural Growth",
    category: "Interviews",
    platform: "YouTube",
    url: "https://youtube.com/@chiragpaswanoffice",
    thumbnail:
      "https://images.unsplash.com/photo-1551818255-e6e10975cd17?auto=format&fit=crop&w=1200&q=80",
    dateLabel: "Official Channel",
    description: "Reform-focused conversation on agro-value chains, jobs and farmer incomes."
  }
];

export const timeline = [
  {
    year: "2014",
    title: "Elected MP from Jamui",
    description: "Entered Lok Sabha as one of the youngest national voices from Bihar."
  },
  {
    year: "2019",
    title: "Re-Elected to Parliament",
    description: "Strengthened mandate through grassroots engagement and youth outreach."
  },
  {
    year: "2021",
    title: "Became National President",
    description: "Led Lok Janshakti Party (Ram Vilas) with continuity of legacy and a modern roadmap."
  },
  {
    year: "2024",
    title: "Union Cabinet Minister",
    description:
      "Assumed office as Union Minister of Food Processing Industries and elected MP from Hajipur."
  }
] as const;

export const initiatives = [
  {
    title: "Chirag Ka Rojgar",
    description:
      "Employment initiative aligned with youth aspirations, skilling pathways and entrepreneurship.",
    icon: "Briefcase"
  },
  {
    title: "Bihar First, Youth First",
    description:
      "A development message that blends modern growth, jobs and equal opportunity for new India.",
    icon: "GraduationCap"
  },
  {
    title: "Food Processing Expansion",
    description:
      "Policy push for value-addition, rural industrialization and investment in processing ecosystems.",
    icon: "Factory"
  }
] as const;

export const constituencyItems = [
  {
    title: "Ground Visits in Hajipur",
    description: "Direct local engagement across villages and urban clusters through regular outreach."
  },
  {
    title: "Jan Samvad & Public Listening",
    description: "Citizen-facing dialogue focused on real issues, practical solutions and delivery tracking."
  },
  {
    title: "Development Priority Agenda",
    description: "Infrastructure, employment and social service improvements grounded in constituency needs."
  }
] as const;

export const galleryImages = [
  {
    title: "India Dairy Summit Engagement",
    image: "/images/gallery/gallery-1.jpg"
  },
  {
    title: "Meeting with Prime Minister Narendra Modi",
    image: "/images/gallery/gallery-2.jpg"
  },
  {
    title: "Oath Ceremony",
    image: "/images/gallery/gallery-3.webp"
  },
  {
    title: "Public Spiritual Gathering",
    image: "/images/gallery/gallery-4.jpg"
  },
  {
    title: "Meeting with Bihar CM Nitish Kumar",
    image: "/images/gallery/gallery-5.jpg"
  },
  {
    title: "Mass Connect Rally",
    image: "/images/gallery/gallery-6.jpg"
  },
  {
    title: "International Stakeholder Meeting",
    image: "/images/gallery/gallery-7.jpg"
  }
] as const;

export const socialCards = [
  {
    name: "Instagram",
    followers: "3.9M followers",
    link: "https://www.instagram.com/ichiragpaswan/"
  },
  {
    name: "Facebook",
    followers: "1.4M followers",
    link: "https://www.facebook.com/ichiragpaswan/"
  },
  {
    name: "YouTube",
    followers: "@chiragpaswanoffice",
    link: "https://youtube.com/@chiragpaswanoffice"
  },
  {
    name: "X",
    followers: "@iChiragPaswan",
    link: "https://x.com/iChiragPaswan"
  }
] as const;

export const profile = {
  name: "Chirag Paswan",
  line: "Minister of Food Processing Industries, National President and MP, Hajipur (Bihar)",
  legacy: "Son of Ram Vilas Paswan",
  email: "office.chiragpaswan@gmail.com",
  phone: "011-23794071"
} as const;

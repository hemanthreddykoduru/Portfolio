export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  userFlow?: string[];
  contactEmail?: string;
  role: string;
  year: string;
  stack: string[];
  live: string;
  github: string;
  image: string;
};

export const projects: Project[] = [
  {
    "slug": "quickxerox",
    "name": "QuickXerox",
    "tagline": "Online Xerox printing service with remote ordering",
    "description": "An online service that allows users to upload documents, choose print settings, select a nearby registered shop, and pay online.",
    "fullDescription": "QuickXerox is a modern solution that simplifies the document printing process. Users can upload their documents, configure preferences like color or B&W, and select a nearby shop for pickup. The platform handles secure online payments and provides shopkeepers with a dedicated dashboard to manage and fulfill orders efficiently.",
    "features": [
      "Multi-format File Upload (PDF, DOCX, Images)",
      "Dynamic Print settings (Color or B&W)",
      "Proximity-based registered shop selection",
      "Secure Online payments via Razorpay",
      "Robust Authentication using Firebase",
      "Dedicated Shopkeeper Dashboard for order management"
    ],
    "userFlow": [
      "User visits QuickXerox",
      "Uploads document and selects print preferences",
      "Chooses a nearby shop",
      "Pays securely online",
      "Collects the printed file from the shop"
    ],
    "contactEmail": "workwithquickxerox@gmail.com",
    "role": "Full-Stack Developer",
    "year": "2024",
    "stack": [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Razorpay"
    ],
    "live": "https://quickxerox.app",
    "github": "https://github.com/hemanthreddykoduru/quickxerox",
    "image": "/images/quickxerox_dashboard.png"
  },
  {
    "slug": "local-share",
    "name": "Local Share",
    "tagline": "GPS-based anonymous clipboard for nearby users",
    "description": "Drop text, links, or notes — anyone physically nearby can pick them up. No accounts, no tracking. Built with a GPS fallback to IP geolocation.",
    "fullDescription": "Local Share redefines proximity-based data exchange. By utilizing the browser's Geolocation API, it creates 'digital geo-cells' where users can anonymously share clips of text, URLs, or short notes with others in their immediate physical vicinity. It solves the friction of 'how do I send this link to everyone in the room?' without requiring shared networks or account creation.",
    "features": [
      "Precision GPS-based nearby user discovery",
      "IP-based geolocation fallback for desktop users",
      "Zero-account, privacy-first data sharing",
      "Real-time updates via Supabase Realtime",
      "Responsive mobile-first design"
    ],
    "userFlow": [
      "User opens the app in a browser",
      "Grants location permissions",
      "Drops a link or text into the clipboard",
      "Nearby users automatically see the new clip",
      "Data is cleared after a set period of inactivity"
    ],
    "role": "Lead Developer",
    "year": "2023",
    "stack": [
      "Next.js",
      "Supabase",
      "Cloudflare",
      "GPS API"
    ],
    "live": "https://local-share.tech",
    "github": "https://github.com/hemanthreddykoduru/local-share",
    "image": "/images/localshare.png"
  },
  {
    "slug": "notesbay",
    "name": "Notes Bay",
    "tagline": "Notes sharing platform for students",
    "description": "A collaborative platform where students can seamlessly share and access study notes, fostering a community of shared knowledge.",
    "fullDescription": "Notes Bay is a student-centric repository designed to make high-quality academic resources accessible to everyone. The platform allows users to upload their curated notes, search by subject or course code, and contribute to a growing community of knowledge. It focuses on clean document organization and easy discovery of peer-reviewed study materials.",
    "features": [
      "Subject-wise document categorization",
      "Search-optimized discovery for course codes",
      "Secure document hosting and preview",
      "Community contribution system",
      "Mobile-optimized reading experience"
    ],
    "userFlow": [
      "Student searches for a specific course or subject",
      "Browses through peer-uploaded notes",
      "Views a high-quality preview of the document",
      "Downloads or bookmarks for future study",
      "Optionally uploads their own notes to help others"
    ],
    "role": "Full-Stack Developer",
    "year": "2023",
    "stack": [
      "React",
      "Firebase",
      "Node.js"
    ],
    "live": "https://notesbay.in",
    "github": "https://github.com/hemanthreddykoduru/notes-bay",
    "image": "/images/notesbay.png"
  },
  {
    "slug": "blackfront",
    "name": "BlackFront",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/BlackFront",
    "image": "/images/localshare.png"
  },
  {
    "slug": "cal.diy",
    "name": "cal.diy",
    "tagline": "Scheduling infrastructure for absolutely everyone.",
    "description": "Scheduling infrastructure for absolutely everyone.",
    "fullDescription": "Scheduling infrastructure for absolutely everyone.",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [],
    "live": "https://cal.diy",
    "github": "https://github.com/hemanthreddykoduru/cal.diy",
    "image": "/images/localshare.png"
  },
  {
    "slug": "callforge",
    "name": "CallForge",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/CallForge",
    "image": "/images/localshare.png"
  },
  {
    "slug": "cricket25",
    "name": "Cricket25",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "HTML"
    ],
    "live": "https://cricket25.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/Cricket25",
    "image": "/images/localshare.png"
  },
  {
    "slug": "flappy-bird",
    "name": "flappy-bird",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "JavaScript"
    ],
    "live": "https://buffallo.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/flappy-bird",
    "image": "/images/localshare.png"
  },
  {
    "slug": "hemanthreddybot",
    "name": "hemanthreddybot",
    "tagline": "Contains the files for hemanthreddybot",
    "description": "Contains the files for hemanthreddybot",
    "fullDescription": "Contains the files for hemanthreddybot",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/hemanthreddybot",
    "image": "/images/localshare.png"
  },
  {
    "slug": "hemanthreddykoduru",
    "name": "hemanthreddykoduru",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/hemanthreddykoduru",
    "image": "/images/localshare.png"
  },
  {
    "slug": "insforge",
    "name": "InsForge",
    "tagline": "The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, compute, hosting, and AI gateway to ship full-stack apps end-to-end.",
    "description": "The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, compute, hosting, and AI gateway to ship full-stack apps end-to-end.",
    "fullDescription": "The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, compute, hosting, and AI gateway to ship full-stack apps end-to-end.",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "https://insforge.dev",
    "github": "https://github.com/hemanthreddykoduru/InsForge",
    "image": "/images/localshare.png"
  },
  {
    "slug": "isro-air",
    "name": "ISRO-AIR",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2025",
    "stack": [
      "TypeScript"
    ],
    "live": "https://isro-air.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/ISRO-AIR",
    "image": "/images/localshare.png"
  },
  {
    "slug": "local-share",
    "name": "Local-Share",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "https://local-share-sooty.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/Local-Share",
    "image": "/images/localshare.png"
  },
  {
    "slug": "n8n",
    "name": "n8n",
    "tagline": "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.",
    "description": "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.",
    "fullDescription": "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [],
    "live": "https://n8n.io",
    "github": "https://github.com/hemanthreddykoduru/n8n",
    "image": "/images/localshare.png"
  },
  {
    "slug": "notes-bay",
    "name": "Notes-Bay",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "JavaScript"
    ],
    "live": "https://student-notes-fawn.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/Notes-Bay",
    "image": "/images/localshare.png"
  },
  {
    "slug": "opencode",
    "name": "opencode",
    "tagline": "The open source coding agent.",
    "description": "The open source coding agent.",
    "fullDescription": "The open source coding agent.",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "https://opencode.ai",
    "github": "https://github.com/hemanthreddykoduru/opencode",
    "image": "/images/localshare.png"
  },
  {
    "slug": "pdf-helper",
    "name": "PDF-Helper",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "https://pdf-helper-one.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/PDF-Helper",
    "image": "/images/localshare.png"
  },
  {
    "slug": "plantml",
    "name": "PlantML",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "Python"
    ],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/PlantML",
    "image": "/images/localshare.png"
  },
  {
    "slug": "portfolio",
    "name": "Portfolio",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "https://portfolio-seven-sigma-iotndi0lko.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/Portfolio",
    "image": "/images/localshare.png"
  },
  {
    "slug": "prajna-personal",
    "name": "PRAJNA-PERSONAL",
    "tagline": "URL",
    "description": "URL",
    "fullDescription": "URL",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "https://prajna.hemanthreddykoduru.dev/",
    "github": "https://github.com/hemanthreddykoduru/PRAJNA-PERSONAL",
    "image": "/images/localshare.png"
  },
  {
    "slug": "quickxerox",
    "name": "QuickXerox",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/QuickXerox",
    "image": "/images/localshare.png"
  },
  {
    "slug": "sharescribe",
    "name": "ShareScribe",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/ShareScribe",
    "image": "/images/localshare.png"
  },
  {
    "slug": "smart-attendence",
    "name": "Smart-Attendence",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2025",
    "stack": [
      "TypeScript"
    ],
    "live": "https://smart-attendence-ten.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/Smart-Attendence",
    "image": "/images/localshare.png"
  },
  {
    "slug": "space-finder",
    "name": "space-finder",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2026",
    "stack": [
      "TypeScript"
    ],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/space-finder",
    "image": "/images/localshare.png"
  },
  {
    "slug": "static-website",
    "name": "Static-Website",
    "tagline": "College Project",
    "description": "College Project",
    "fullDescription": "College Project",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2025",
    "stack": [
      "HTML"
    ],
    "live": "",
    "github": "https://github.com/hemanthreddykoduru/Static-Website",
    "image": "/images/localshare.png"
  },
  {
    "slug": "weblab",
    "name": "WEBLAB",
    "tagline": "A GitHub repository",
    "description": "A GitHub repository",
    "fullDescription": "A GitHub repository",
    "features": [
      "GitHub Repo"
    ],
    "role": "Developer",
    "year": "2025",
    "stack": [
      "JavaScript"
    ],
    "live": "https://weblab-eight.vercel.app",
    "github": "https://github.com/hemanthreddykoduru/WEBLAB",
    "image": "/images/localshare.png"
  }
];

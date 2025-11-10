import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

import { ShareButton } from "@/components/share-button";

type HandleLink = {
  id: string;
  title: string;
  primaryLabel: string;
  primaryHref: string;
  iconSrc: string;
  accent: string;
  buttonAccent?: string;
  description?: string;
  extraLinks?: Array<{ label: string; href: string }>;
};

export const metadata: Metadata = {
  title: "Handles | Islami Jamiat-e-Talaba Pakistan",
  description:
    "Official social handles and digital platforms of Islami Jamiat-e-Talaba Pakistan.",
  keywords: [
    "Islami Jamiat-e-Talaba Pakistan",
    "Jamiat social media",
    "Jamiat digital handles",
    "Islami student organization Pakistan",
    "IJT contact",
    "Jamiat official WhatsApp",
    "Jamiat Linktree",
  ],
  metadataBase: new URL("https://handles.jamiat.org.pk"),
  alternates: {
    canonical: "https://handles.jamiat.org.pk/",
  },
  openGraph: {
    title: "Islami Jamiat-e-Talaba Pakistan | Official Digital Handles",
    description:
      "Connect with Islami Jamiat-e-Talaba Pakistan across verified digital platforms including Facebook, Instagram, TikTok, YouTube, and more.",
    url: "https://handles.jamiat.org.pk/",
    siteName: "Islami Jamiat-e-Talaba Pakistan",
    images: [
      {
        url: "https://handles.jamiat.org.pk/handles/web.png",
        width: 512,
        height: 512,
        alt: "Islami Jamiat-e-Talaba Pakistan Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islami Jamiat-e-Talaba Pakistan | Official Digital Handles",
    description:
      "Discover and share the verified social and digital platforms of Islami Jamiat-e-Talaba Pakistan.",
    images: ["https://handles.jamiat.org.pk/handles/web.png"],
  },
};

const handles: HandleLink[] = [
  {
    id: "facebook",
    title: "𝐕𝐢𝐬𝐢𝐭 𝐎𝐮𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞",
    primaryLabel: "Facebook",
    primaryHref: "https://www.facebook.com/JamiatPK",
    iconSrc: "/handles/facebook.avif",
    accent: "from-[#0A4D8C] to-[#2D9BF0]",
    buttonAccent: "from-[#0A4D8C] to-[#36A2FF]",
  },
  {
    id: "instagram",
    title: "𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦",
    primaryLabel: "@jamiatpk",
    primaryHref: "https://www.instagram.com/jamiatpk",
    iconSrc: "/handles/instagram.avif",
    accent: "from-[#F58529] to-[#DD2A7B]",
    buttonAccent: "from-[#F58529] to-[#8134AF]",
  },
  {
    id: "whatsapp-hq",
    title: "𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩",
    primaryLabel: "Message HQ",
    primaryHref: "https://wa.me/923349519657",
    iconSrc: "/handles/whatsapp.png",
    accent: "from-[#128C7E] to-[#25D366]",
    buttonAccent: "from-[#25D366] to-[#007A33]",
    description: "Official WhatsApp support line.",
  },
  {
    id: "tiktok",
    title: "𝐓𝐢𝐤𝐓𝐨𝐤",
    primaryLabel: "@jamiatpk",
    primaryHref: "https://www.tiktok.com/@jamiatpk",
    iconSrc: "/handles/tiktok.avif",
    accent: "from-[#FF0050] to-[#00F2EA]",
    buttonAccent: "from-[#FF3F81] to-[#00C6FF]",
  },
  {
    id: "website",
    title: "𝐖𝐞𝐛𝐬𝐢𝐭𝐞",
    primaryLabel: "jamiat.org.pk",
    primaryHref: "https://jamiat.org.pk/",
    iconSrc: "/handles/web.png",
    accent: "from-[#0A4D8C] to-[#008751]",
    description: "Official website of Islami Jamiat-e-Talaba Pakistan.",
  },
  {
    id: "youtube",
    title: "𝐘𝐨𝐮𝐓𝐮𝐛𝐞",
    primaryLabel: "@JamiatPK",
    primaryHref: "https://www.youtube.com/@JamiatPK",
    iconSrc: "/handles/youtube.avif",
    accent: "from-[#FF0000] to-[#C21807]",
  },
  {
    id: "x",
    title: "𝐗 (𝐅𝐨𝐫𝐦𝐞𝐫 𝐓𝐰𝐢𝐭𝐭𝐞𝐫)",
    primaryLabel: "@JamiatPK",
    primaryHref: "https://x.com/JamiatPK",
    iconSrc: "/handles/x.png",
    accent: "from-[#0F1419] to-[#38434F]",
  },
  {
    id: "echoreads",
    title: "ECHO READS",
    primaryLabel: "Open EchoReads",
    primaryHref: "https://echoreads.online/",
    iconSrc: "/handles/echoreads.png",
    accent: "from-[#FFA502] to-[#FFCE70]",
    description: "Digital reading companion by EchoReads.",
    extraLinks: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.iqbal.echoreads",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ie/app/echoreads/id6754093803",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/echoreads/",
      },
    ],
  },
  {
    id: "next",
    title: "NEXT - Nurture | Excel | Transform",
    primaryLabel: "Open NEXT",
    primaryHref: "https://nextijt.com/",
    iconSrc: "/handles/next.jpeg",
    accent: "from-[#000000] to-[#FFFFFF]",
    description: "NEXT - Mapping the Future",
    extraLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/people/NEXT-Mapping-the-Future/61571336774341/",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/next_mappingthefuture/",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/next%E2%80%93mapping-the-future/",
      },
    ],
  },
  {
    id: "whatsapp-gpt",
    title: "WhatsApp Jamiat ChatBot (JamiatGPT)",
    primaryLabel: "Chat on WhatsApp",
    primaryHref: "https://wa.me/923086946851",
    iconSrc: "/handles/web.png",
    accent: "from-[#0A4D8C] to-[#00A86B]",
  },
  {
    id: "horizon",
    title: "The Horizon",
    primaryLabel: "Facebook",
    primaryHref: "https://www.facebook.com/SaamaLhr/",
    iconSrc: "/handles/horizon.jpg",
    accent: "from-[#FF7E03] to-[#ffffff]",
    extraLinks: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/@Horizon-n3x",
      },
    ],
  },
  {
    id: "ink-digital",
    title: "INK Digital",
    primaryLabel: "Facebook",
    primaryHref: "https://www.facebook.com/profile.php?id=61571076449277",
    iconSrc: "/handles/ink.jpg",
    accent: "from-[#021B79] to-[#0575E6]",
    extraLinks: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=80Sq7e4MgOo",
      },
    ],
  },
  {
    id: "imtbooks",
    title: "Idara Matbuat e Talaba Lahore",
    primaryLabel: "Open IMT Books",
    primaryHref: "https://imtbooks.com.pk/",
    iconSrc: "/handles/imtbooks.png",
    accent: "from-[#94C41E] to-[#194F78]",
    extraLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/imtbooks/",
      },
    ],
  },
  {
    id: "hamqadam",
    title: "Monthly Hamqadam Lahore",
    primaryLabel: "Open IMT Hamqadam",
    primaryHref: "https://hamqadam.com.pk/",
    iconSrc: "/handles/hamqadam.jpg",
    accent: "from-[#03AC9E] to-[#000000]",
    extraLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/monthlyhamqadam/",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/hamqadam_magazine/",
      },
    ],
  },
  {
    id: "sama",
    title: "SAMA - Syed Abul Ala Maududi Academy",
    primaryLabel: "Open SAMA",
    primaryHref: "https://samaijt.com/",
    iconSrc: "/handles/sama.png",
    accent: "from-[#154873] to-[#F0F6FF]",
    extraLinks: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/@Horizon-n3x",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/SaamaLhr/",
      },
    ],
  },
  {
    id: "cerapa",
    title: "Cerapa Pakistan",
    primaryLabel: "Facebook",
    primaryHref: "https://www.facebook.com/cerapa.pakistan",
    iconSrc: "/handles/cerapa.jpg",
    accent: "from-[#FF6B6B] to-[#C9184A]",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Islami Jamiat-e-Talaba Pakistan",
      alternateName: "Islami Jamiat Talaba",
      url: "https://handles.jamiat.org.pk/",
      logo: "https://handles.jamiat.org.pk/handles/web.png",
      sameAs: [
        "https://www.facebook.com/JamiatPK",
        "https://www.instagram.com/jamiatpk",
        "https://wa.me/923349519657",
        "https://www.tiktok.com/@jamiatpk",
        "https://jamiat.org.pk/",
        "https://www.youtube.com/@JamiatPK",
        "https://x.com/JamiatPK",
        "https://echoreads.online/",
        "https://play.google.com/store/apps/details?id=com.iqbal.echoreads",
        "https://apps.apple.com/ie/app/echoreads/id6754093803",
        "https://www.linkedin.com/company/echoreads/",
        "https://nextijt.com/",
        "https://www.facebook.com/SaamaLhr/",
        "https://www.youtube.com/@Horizon-n3x",
        "https://www.facebook.com/profile.php?id=61571076449277",
        "https://imtbooks.com.pk/",
        "https://hamqadam.com.pk/",
        "https://samaijt.com/",
        "https://www.facebook.com/cerapa.pakistan",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+92-334-9519657",
          url: "https://wa.me/923349519657",
        },
      ],
    },
    {
      "@type": "WebSite",
      url: "https://handles.jamiat.org.pk/",
      name: "Islami Jamiat-e-Talaba Pakistan Digital Handles",
      description:
        "Official directory of verified social media and digital platforms managed by Islami Jamiat-e-Talaba Pakistan.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.google.com/search?q=Islami+Jamiat-e-Talaba+Pakistan+{search_term_string}",
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@type": "Organization",
        name: "Islami Jamiat-e-Talaba Pakistan",
        url: "https://jamiat.org.pk/",
      },
    },
  ],
};

export default function HandlesPage() {
  return (
    <>
      <Script id="handles-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#E6F3FF] via-[#F5F9F6] to-[#FFEFEF] text-slate-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-[#0A4D8C]/20 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-[#008751]/20 to-transparent blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#FF4E50]/20 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 pb-16 pt-12 sm:px-6 lg:px-10">
          <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/80 shadow-lg ring-2 ring-[#0A4D8C]/20 backdrop-blur">
                <Image
                  src="/handles/web.png"
                  alt="Jamiat Logo"
                  width={72}
                  height={72}
                  priority
                />
              </span>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A4D8C]">
                  Islami Jamiat-e-Talaba Pakistan
                </p>
                <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                  Official Digital Handles
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Stay connected with our mission, initiatives, and community
                  through the verified digital platforms curated below.
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center sm:w-auto sm:justify-end">
              <ShareButton />
            </div>
          </header>

        <main className="mt-10 flex-1">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {handles.map((handle) => (
              <article
                key={handle.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/90 p-6 shadow-lg shadow-slate-900/5 ring-1 ring-white/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${handle.accent}`}
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100">
                    <Image
                      src={handle.iconSrc}
                      alt={`${handle.title} icon`}
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {handle.title}
                    </h2>
                    <p className="text-sm text-slate-500">{handle.primaryLabel}</p>
                  </div>
                </div>

                {/* {handle.description ? (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {handle.description}
                  </p>
                ) : null} */}

                <div className="mt-6 flex flex-col gap-2">
                  <Link
                    href={handle.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4D8C] bg-gradient-to-r ${handle.buttonAccent ?? handle.accent} hover:brightness-105`}
                  >
                    {handle.primaryLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>

                  {handle.extraLinks?.map((extra) => (
                    <Link
                      key={extra.href}
                      href={extra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-transparent hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4D8C]"
                    >
                      {extra.label}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </main>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            Updated: November 10, 2025 · For media or press inquiries, visit{" "}
            <Link
              href="https://jamiat.org.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0A4D8C] hover:underline"
            >
              jamiat.org.pk
            </Link>
          </p>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0A4D8C]" />
            <span className="h-2 w-2 rounded-full bg-[#008751]" />
            <span className="h-2 w-2 rounded-full bg-[#FF4E50]" />
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}

"use client";

import { useState } from "react";

const content = {
  en: {
    nav: { about: "About", values: "Values", careers: "Careers", contact: "Contact" },
    badge: "Global Medical Platform",
    hero: {
      title: "XGMS ONE",
      desc: "XGMS is a healthcare technology company redefining hospital operations — one platform for safer, smarter, and trusted care delivery.",
      cta1: "Join Our Team",
      cta2: "Get in Touch",
    },
    about: {
      heading: "What is XGMS ONE?",
      desc: "XGMS ONE is a next-generation cloud-based EMR platform built for global healthcare. It brings together everything a hospital needs — from patient records to intelligent clinical insights — in one trusted, standards-driven SaaS solution.",
    },
    values: {
      heading: "Built on Three Pillars",
      p1: {
        title: "Clinical Safety",
        desc: "Every clinical workflow is designed to protect patient data integrity by default — with built-in safeguards and full audit traceability.",
      },
      p2: {
        title: "Privacy by Design",
        desc: "Privacy isn't an afterthought — it's engineered into the platform core. Patient consent, data minimization, and access boundaries are built in from day one.",
      },
      p3: {
        title: "Global Compliance",
        desc: "Built for multi-jurisdictional healthcare from the ground up. Region-aware data governance ensures compliance across global regulatory frameworks.",
      },
    },
    careers: {
      heading: "We're Hiring",
      subtitle: "Join us in building the future of global healthcare IT.",
      team: {
        title: "Engineering & Platform Team",
        badge: "Open",
        desc: "We're growing the core team behind XGMS ONE. If you're passionate about cloud-native architecture, healthcare data systems, or building products that serve hospitals worldwide — we'd love to hear from you.",
        tags: ["Cloud Architecture", "Healthcare IT", "EMR / EHR Systems", "Data Privacy", "Global SaaS"],
        apply: "Apply Now → careers@xgms.io",
      },
    },
    contact: {
      heading: "Contact",
      desc: "Interested in partnership, investment, or joining our mission?",
    },
    footer: {
      line1: "© 2025 XGMS. Privacy & Compliance First.",
      line2: "Seoul, South Korea · Building for the World",
    },
  },
  ko: {
    nav: { about: "소개", values: "핵심가치", careers: "채용", contact: "문의" },
    badge: "글로벌 의료 플랫폼",
    hero: {
      title: "XGMS ONE",
      desc: "XGMS는 병원 운영을 재정의하는 헬스케어 테크 기업입니다 — 더 안전하고, 더 스마트하며, 신뢰할 수 있는 의료 서비스를 위한 하나의 플랫폼.",
      cta1: "팀에 합류하기",
      cta2: "문의하기",
    },
    about: {
      heading: "XGMS ONE이란?",
      desc: "XGMS ONE은 글로벌 헬스케어를 위해 설계된 차세대 클라우드 기반 EMR 플랫폼입니다. 환자 기록부터 지능형 임상 인사이트까지, 병원에 필요한 모든 것을 하나의 신뢰할 수 있는 표준 기반 SaaS 솔루션으로 통합합니다.",
    },
    values: {
      heading: "세 가지 핵심 원칙",
      p1: {
        title: "임상 안전성",
        desc: "모든 임상 워크플로우는 기본적으로 환자 데이터 무결성을 보호하도록 설계되었습니다 — 내장된 안전장치와 완전한 감사 추적 기능을 갖추고 있습니다.",
      },
      p2: {
        title: "프라이버시 바이 디자인",
        desc: "프라이버시는 사후 대응이 아닙니다 — 플랫폼 핵심에 엔지니어링되어 있습니다. 환자 동의, 데이터 최소화, 접근 경계가 처음부터 내장되어 있습니다.",
      },
      p3: {
        title: "글로벌 규제 준수",
        desc: "처음부터 다중 관할권 헬스케어를 위해 설계되었습니다. 지역 인식 데이터 거버넌스가 글로벌 규제 프레임워크 전반의 준수를 보장합니다.",
      },
    },
    careers: {
      heading: "채용 중",
      subtitle: "글로벌 헬스케어 IT의 미래를 함께 만들어갈 인재를 찾습니다.",
      team: {
        title: "엔지니어링 & 플랫폼 팀",
        badge: "모집 중",
        desc: "XGMS ONE의 핵심 팀을 성장시키고 있습니다. 클라우드 네이티브 아키텍처, 헬스케어 데이터 시스템, 또는 전 세계 병원을 위한 제품 개발에 열정이 있다면 — 연락을 기다리겠습니다.",
        tags: ["클라우드 아키텍처", "헬스케어 IT", "EMR / EHR 시스템", "데이터 프라이버시", "글로벌 SaaS"],
        apply: "지원하기 → careers@xgms.io",
      },
    },
    contact: {
      heading: "문의",
      desc: "파트너십, 투자, 또는 미션에 합류하고 싶으신가요?",
    },
    footer: {
      line1: "© 2025 XGMS. Privacy & Compliance First.",
      line2: "대한민국 서울 · Building for the World",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ───────── Navigation Bar ───────── */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <span className="text-xl font-bold tracking-tight">
          XGMS<span className="text-blue-400">.io</span>
        </span>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">
            {t.nav.about}
          </a>
          <a href="#values" className="hover:text-white transition">
            {t.nav.values}
          </a>
          <a href="#careers" className="hover:text-white transition">
            {t.nav.careers}
          </a>
          <a href="#contact" className="hover:text-white transition">
            {t.nav.contact}
          </a>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            className="ml-2 px-3 py-1.5 text-xs font-semibold border border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-full transition cursor-pointer"
          >
            {lang === "en" ? "한국어" : "EN"}
          </button>
        </div>
      </nav>

      {/* ───────── Hero Section ───────── */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-300 bg-blue-950 rounded-full border border-blue-800">
          {t.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
          {t.hero.title}
          <br />
          <span className="text-blue-200 text-3xl md:text-3xl">
            The e<span className="text-blue-400 font-bold">X</span>tended{" "}
            <span className="text-blue-400 font-bold">G</span>lobal{" "}
            <span className="text-blue-400 font-bold">M</span>edical{" "}
            <span className="text-blue-400 font-bold">S</span>tandard
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
          {t.hero.desc}
        </p>
        <div className="flex gap-4 mt-10">
          <a
            href="#careers"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition"
          >
            {t.hero.cta2}
          </a>
        </div>
      </section>

      {/* ───────── About Section ───────── */}
      <section id="about" className="px-8 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t.about.heading}</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t.about.desc}
          </p>
        </div>
      </section>

      {/* ───────── Core Values Section ───────── */}
      <section id="values" className="px-8 py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-16">
          {t.values.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🛡️
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.values.p1.title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.values.p1.desc}</p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.values.p2.title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.values.p2.desc}</p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🌐
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.values.p3.title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.values.p3.desc}</p>
          </div>
        </div>
      </section>

      {/* ───────── Careers Section ───────── */}
      <section
        id="careers"
        className="px-8 py-24 border-t border-gray-800 bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t.careers.heading}</h2>
          <p className="text-gray-400 text-lg mb-10">{t.careers.subtitle}</p>

          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800 text-left">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{t.careers.team.title}</h3>
              <span className="px-3 py-1 text-xs font-medium text-green-300 bg-green-950 rounded-full border border-green-800">
                {t.careers.team.badge}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.careers.team.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {t.careers.team.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="mailto:careers@xgms.io"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
            >
              {t.careers.team.apply}
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Contact Section ───────── */}
      <section id="contact" className="px-8 py-24 border-t border-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t.contact.heading}</h2>
          <p className="text-gray-400 text-lg mb-8">{t.contact.desc}</p>
          <a
            href="mailto:contact@xgms.io"
            className="text-blue-400 hover:text-blue-300 text-lg font-medium transition"
          >
            contact@xgms.io
          </a>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="px-8 py-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>{t.footer.line1}</p>
        <p className="mt-1">{t.footer.line2}</p>
      </footer>
    </div>
  );
}

# XGMS.io 홈페이지 제작 완전 가이드 V3.0

> **목표:** Vercel + Next.js로 XGMS.io 랜딩 페이지를 무료로 제작·배포
> **소요 시간:** 약 2~3시간 (첫 셋업 포함)
> **비용:** 0원 (기존 도메인 비용·Google Workspace 비용 제외)
> **운영 환경:** Windows 10 / 11
> **전제:** XGMS.io 도메인 구매 완료, Google Workspace에서 ysg@xgms.io 사용 중

---

## 전체 흐름 요약

```
Phase 0  도구 설치 (Node.js, Git, VS Code) — Windows
   ↓
Phase 1  계정 생성 & 이메일 전략 세팅
   ↓
Phase 2  Next.js 프로젝트 생성
   ↓
Phase 3  프로젝트 구조 이해
   ↓
Phase 4  랜딩 페이지 코드 작성 → 로컬 미리보기
   ↓
Phase 5  GitHub에 코드 업로드
   ↓
Phase 6  Vercel에서 배포
   ↓
Phase 7  XGMS.io 도메인 연결
   ↓
Phase 8  수정 & 업데이트 루틴
   ↓
Phase 9  추가 권장 설정 (Analytics, Search Console 등)
```

---

---

# Phase 0: 사전 준비 — Windows에 필수 도구 설치

이 단계에서는 컴퓨터에 개발 도구 3가지를 설치합니다.
이미 설치되어 있다면 버전 확인만 하고 넘어가세요.

## 0-1. Node.js 설치

> **Node.js란?** JavaScript를 컴퓨터에서 실행할 수 있게 해주는 런타임(실행 환경)입니다.
> 홈페이지 프로젝트를 내 컴퓨터에서 미리보기하고 빌드하려면 반드시 필요합니다.

1. https://nodejs.org 접속
2. **LTS (Long Term Support)** 버전 다운로드 (2026년 3월 기준 v22.x 계열)
3. 다운로드된 `.msi` 설치 파일 실행
4. 설치 마법사에서 모든 옵션 기본값으로 **Next** 클릭 → **Install** → **Finish**
5. 설치 확인:

```
Windows키 누르고 "PowerShell" 검색 → Windows PowerShell 실행
아래 명령어를 한 줄씩 입력하고 Enter:

node --version
→ v22.x.x 가 출력되면 성공

npm --version
→ 10.x.x 가 출력되면 성공
```

> **PowerShell이란?** Windows에 기본 내장된 명령어 입력 도구입니다.
> 앞으로 모든 명령어는 PowerShell에서 실행합니다.
>
> **npm이란?** Node Package Manager의 약자로, JavaScript 라이브러리(패키지)를
> 설치·관리하는 도구입니다. Node.js를 설치하면 자동으로 함께 설치됩니다.

## 0-2. Git 설치

> **Git이란?** 코드의 변경 이력을 추적하는 버전 관리 도구입니다.
> GitHub에 코드를 올리려면 반드시 필요합니다.

1. https://git-scm.com 접속
2. **Download for Windows** 클릭 → 설치 파일 다운로드
3. 설치 마법사 실행 → **모든 옵션 기본값 그대로** Next 클릭 → Install → Finish
   - 옵션이 많이 나오지만 하나도 바꾸지 않아도 됩니다
4. 설치 확인:

```
PowerShell을 닫았다가 새로 열고 (중요! 닫았다 새로 열어야 Git이 인식됨):

git --version
→ git version 2.x.x 가 출력되면 성공
```

## 0-3. VS Code (코드 편집기) 설치

> **VS Code란?** Microsoft가 만든 무료 코드 편집기입니다.
> 파일 탐색, 코드 색상 표시, 터미널 내장 등 개발에 필요한 기능이 모두 들어있습니다.

1. https://code.visualstudio.com 접속
2. **Download for Windows** 클릭 → 설치 파일 다운로드
3. 설치 마법사 실행 시 아래 옵션을 **체크**하세요:
   - ✅ "Add to PATH" (다른 프로그램에서 VS Code를 실행할 수 있게 함)
   - ✅ "Register Code as an editor for supported file types"
   - ✅ "Add 'Open with Code' action to Windows Explorer file context menu"
   - ✅ "Add 'Open with Code' action to Windows Explorer directory context menu"
4. Install → Finish

---

---

# Phase 1: 계정 생성 & 이메일 전략 세팅

이 단계가 가장 중요합니다.
지금 계정 구조를 올바르게 잡아두면, CTO가 합류할 때 "초대 한 번"으로 모든 권한 공유가 끝납니다.

## 1-1. 계정 전략 원칙

```
┌─────────────────────────────────────────────────────┐
│  핵심 원칙: "사람 계정"과 "회사 조직"을 분리한다      │
│                                                      │
│  ysg@xgms.io (사람)  ──▶  GitHub 개인 계정 가입      │
│                            │                         │
│                            ▼                         │
│                      GitHub Organization "xgms"      │
│                      (회사 = 코드 저장소의 집)         │
│                            │                         │
│                            ▼                         │
│                      Vercel 개인 계정 (Hobby, 무료)   │
│                      → CTO 합류 시 Pro + Team 전환    │
│                                                      │
│  ✅ CTO 합류 시: Organization/Team에 초대만 하면 끝   │
│  ❌ 개인 Gmail(yang.xxx@gmail.com)은 절대 사용 금지   │
└─────────────────────────────────────────────────────┘
```

> **왜 ysg@xgms.io 하나로 충분한가?**
>
> GitHub 정책은 계정을 "사람(human)" 단위로 만들도록 요구합니다.
> admin@xgms.io 같은 공용 계정을 만들어 여러 사람이 공유하는 것은 정책 위반입니다.
>
> 대신, GitHub에는 **Organization(조직)**이라는 기능이 있습니다.
> Organization은 "회사"에 속하고, 개인 계정은 "사람"에 속합니다.
> 코드 저장소를 Organization 아래에 만들면, 사람이 바뀌어도 코드는 회사에 남습니다.

## 1-2. GitHub 가입 + Organization 생성

### GitHub 개인 계정 가입

1. https://github.com 접속
2. **Sign up** 클릭
3. 이메일: **ysg@xgms.io** 입력
4. 비밀번호 설정, 사용자명(username) 설정
   - 사용자명 추천: `ysg-xgms` 또는 원하는 이름
   - 이 사용자명은 나중에 변경 가능합니다
5. 이메일 인증 (ysg@xgms.io로 온 인증 메일 확인)
6. 무료 플랜(Free) 선택 → 가입 완료

### GitHub Organization 생성 (무료)

가입 직후 바로 Organization을 만듭니다. 이것이 회사의 코드 저장소 "집"입니다.

1. GitHub 로그인 상태에서 오른쪽 위 프로필 아이콘 클릭
2. **Your organizations** 클릭
3. **New organization** 클릭
4. **Free** 플랜 선택 → **Create a free organization**
5. Organization name: **xgms** (또는 xgms-io)
   - 이 이름이 URL에 들어갑니다: `github.com/xgms/`
6. Contact email: ysg@xgms.io
7. 소속: **A business or institution** 선택
8. **Next** → 멤버 초대 화면은 **Skip** → 완료

> **결과:** 이제 `github.com/xgms` 라는 회사 조직이 생겼습니다.
> 앞으로 모든 코드 저장소는 이 Organization 아래에 만듭니다.
> CTO가 합류하면 이 Organization에 초대만 하면 됩니다.

## 1-3. Vercel 가입

1. https://vercel.com 접속
2. **Sign Up** 클릭
3. **Continue with GitHub** 선택 → GitHub 계정으로 자동 연결
4. GitHub 권한 허용 → 플랜 선택 화면이 나옴
5. Plan Type: **"I'm working on personal projects" (Hobby)** 선택 ← 무료
6. Your Name: 영문 이름 입력 (예: Seunggyu Yang)
7. **Continue** → Vercel 대시보드 진입

> **Vercel Team은 지금 만들지 않습니다.**
> Team 기능은 Pro 플랜(월 $20) 이상에서만 가능합니다.
> 현재 1인 체제에서는 Hobby 개인 계정으로 충분합니다.
> CTO 합류 시 Pro로 업그레이드하고 Team을 생성하면 됩니다.
> 기존 프로젝트를 Team으로 이전(Transfer)하는 기능이 Vercel에 있으므로 걱정 불필요합니다.

## 1-4. 홈페이지용 이메일 별칭 만들기 (Google Workspace)

홈페이지에 공개할 이메일 주소를 만듭니다.
"별칭(alias)"으로 추가하면 **추가 비용 0원**이고, ysg@xgms.io 받은편지함에서 바로 수신됩니다.

> **별칭(alias)이란?** 하나의 Gmail 계정에 여러 이메일 주소를 연결하는 기능입니다.
> contact@xgms.io로 온 메일이 ysg@xgms.io 받은편지함에 그대로 도착합니다.
> 별도 로그인이 필요 없습니다.

### Google Workspace 관리자 콘솔에서 별칭 추가

1. https://admin.google.com 접속 (관리자 계정으로 로그인)
2. 좌측 메뉴 → **디렉터리** → **사용자**
3. **ysg@xgms.io** 사용자 클릭
4. **사용자 정보** 섹션 → **대체 이메일 주소(이메일 별칭)** 클릭
5. **대체 이메일** 추가:
   - `contact` 입력 → 저장 (contact@xgms.io 생성됨)
   - `careers` 입력 → 저장 (careers@xgms.io 생성됨)

### Gmail에서 별칭으로 발신 설정

별칭으로 메일을 "받는 것"은 자동이지만, "보내는 것"은 별도 설정이 필요합니다.

1. Gmail (ysg@xgms.io) 접속
2. 오른쪽 위 톱니바퀴 → **모든 설정 보기**
3. **계정 및 가져오기** 탭
4. "다른 주소에서 메일 보내기" 섹션 → **다른 이메일 주소 추가**
5. 이름: XGMS, 이메일: contact@xgms.io → **다음**
6. 확인 메일이 ysg@xgms.io로 오면 인증 링크 클릭
7. careers@xgms.io도 같은 방식으로 추가

> **결과:** 이제 Gmail에서 메일 작성 시 "보내는 사람"을 contact@xgms.io 또는
> careers@xgms.io로 선택할 수 있습니다.

## 1-5. 계정 구조 최종 정리

```
현재 (1인 체제)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
이메일              유형      용도                추가 비용
──────────────────────────────────────────────
ysg@xgms.io        실제 계정  GitHub, Vercel,     기존
                              일상 업무
contact@xgms.io    별칭       홈페이지 외부 문의   0원
careers@xgms.io    별칭       채용 문의 수신       0원
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTO 합류 시 (지금은 실행하지 않음, 기록만)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Google Workspace에서 admin@xgms.io 사용자 추가
□ GitHub Organization "xgms"에 CTO 개인 계정을 Owner로 초대
□ Vercel Pro 업그레이드 → Team "xgms" 생성 → CTO를 Admin으로 초대
□ Google Analytics, Search Console에 CTO를 관리자로 추가
□ 도메인 DNS 관리 권한 공유
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

---

# Phase 2: Next.js 프로젝트 생성

## 2-1. 프로젝트 만들기

PowerShell을 열고 아래를 입력합니다.

```powershell
# 바탕화면으로 이동
cd ~\Desktop

# Next.js 프로젝트 자동 생성
npx create-next-app@latest xgms-homepage
```

> 처음 실행하면 "Need to install the following packages" 라는 메시지가 나올 수 있습니다.
> **y** 를 입력하고 Enter를 누르세요.

> **npx란?** npm에 포함된 도구로, 패키지를 설치하지 않고 바로 실행할 수 있게 해줍니다.
> **create-next-app이란?** Next.js 공식 프로젝트 생성 도구입니다.
> 필요한 파일과 설정을 자동으로 만들어줍니다.

## 2-2. 설치 중 질문 답변

명령어를 실행하면 몇 가지 질문이 나옵니다.
키보드 화살표(↑↓)로 이동하고 Enter로 선택합니다:

```
✔ Would you like to use TypeScript?                  → No
✔ Would you like to use ESLint?                      → Yes
✔ Would you like to use Tailwind CSS?                → Yes    ← 반드시 Yes
✔ Would you like your code inside a `src/` directory? → No
✔ Would you like to use App Router? (recommended)     → Yes
✔ Would you like to use Turbopack for next dev?       → Yes
✔ Would you like to customize the import alias?       → No
```

> **Tailwind CSS란?** CSS(웹페이지 스타일링 언어)를 클래스 이름만으로 적용하는 도구입니다.
> 예: `className="text-white bg-blue-600"` → 흰 글자 + 파란 배경
> 별도의 CSS 파일을 작성할 필요가 없어서 초보자에게 매우 편합니다.

설치가 끝나면 "Success!" 메시지와 함께 완료됩니다.

## 2-3. 프로젝트 실행 & 확인

```powershell
# 프로젝트 폴더로 이동
cd xgms-homepage

# 개발 서버 실행 (내 컴퓨터에서 미리보기)
npm run dev
```

PowerShell에 아래 메시지가 나옵니다:
```
  ▲ Next.js 15.x.x
  - Local:   http://localhost:3000
```

**브라우저(Chrome 등)에서 http://localhost:3000 을 열면** Next.js 기본 페이지가 보입니다.
이것이 여러분의 첫 번째 로컬 웹사이트입니다!

> **localhost:3000이란?** 내 컴퓨터에서만 볼 수 있는 임시 주소입니다.
> 아직 인터넷에 공개된 것이 아닙니다.

> **개발 서버를 끄려면:** PowerShell에서 `Ctrl + C` 를 누르세요.
> 다시 켜려면 `npm run dev` 를 다시 입력하면 됩니다.

## 2-4. VS Code에서 프로젝트 열기

방법 1 — PowerShell에서 (xgms-homepage 폴더 안에서):
```powershell
code .
```

방법 2 — Windows 탐색기에서:
바탕화면의 `xgms-homepage` 폴더를 **우클릭** → **"Open with Code"** 선택

VS Code가 열리면 왼쪽에 파일 목록이 보입니다.

---

---

# Phase 3: 프로젝트 구조 이해

VS Code 왼쪽 파일 탐색기에 아래 구조가 보입니다:

```
xgms-homepage/
├── app/                    ← ★ 핵심! 페이지와 레이아웃이 여기에 들어감
│   ├── layout.js           ← 전체 사이트의 "틀" (HTML 구조, 폰트, 제목 등)
│   ├── page.js             ← 메인 페이지 (xgms.io 접속 시 보이는 화면)
│   ├── globals.css         ← 전체 사이트에 적용되는 스타일
│   └── favicon.ico         ← 브라우저 탭에 보이는 작은 아이콘
├── public/                 ← 이미지, 로고 등 정적 파일을 넣는 곳
├── package.json            ← 프로젝트 설정 파일 (사용하는 라이브러리 목록)
├── tailwind.config.js      ← Tailwind CSS 설정
└── next.config.mjs         ← Next.js 설정
```

**핵심 파일 2개만 기억하세요:**

- `app/page.js` → 메인 페이지의 내용을 작성하는 곳
- `app/layout.js` → 사이트 전체 설정 (브라우저 탭 제목, 폰트 등)

나머지 파일은 당분간 건드릴 필요 없습니다.

---

---

# Phase 4: 랜딩 페이지 코드 작성

이제 실제 XGMS 랜딩 페이지를 만듭니다.
3개의 파일만 수정하면 됩니다.

## 4-1. globals.css 정리

VS Code에서 `app/globals.css` 파일을 열고, **기존 내용을 모두 지운 뒤** 아래 한 줄만 남깁니다:

```css
@import "tailwindcss";
```

> 기존 기본 스타일이 우리 디자인과 충돌하므로 깨끗하게 초기화합니다.
> 파일 선택: VS Code 왼쪽 파일 목록에서 app 폴더 클릭 → globals.css 클릭

## 4-2. layout.js 수정

VS Code에서 `app/layout.js` 파일을 열고, **전체 내용을 지우고 아래로 교체**합니다:

> **교체 방법:** 파일을 열고 → Ctrl+A (전체 선택) → 아래 코드를 붙여넣기(Ctrl+V)

```jsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XGMS — Global EMR SaaS Platform",
  description:
    "Cloud-based Electronic Medical Record platform with Clinical Safety, Privacy by Design, and Global Compliance.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

> **metadata란?** 브라우저 탭에 표시되는 제목과 검색엔진에 표시되는 설명을 설정합니다.
> **Inter 폰트:** Google이 제공하는 깔끔한 무료 폰트입니다. Next.js가 자동으로 최적화합니다.

## 4-3. page.js 작성 — 랜딩 페이지 본문

이 파일이 **xgms.io에 접속했을 때 보이는 메인 화면**입니다.
VS Code에서 `app/page.js` 를 열고, **Ctrl+A → 아래 코드 전체 붙여넣기**:

```jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ───────── Navigation Bar ───────── */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <span className="text-xl font-bold tracking-tight">
          XGMS<span className="text-blue-400">.io</span>
        </span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#values" className="hover:text-white transition">
            Values
          </a>
          <a href="#careers" className="hover:text-white transition">
            Careers
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* ───────── Hero Section ───────── */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-300 bg-blue-950 rounded-full border border-blue-800">
          Now Building · Launching 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          The Global Standard for
          <br />
          <span className="text-blue-400">Hospital Data Platform</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
          XGMS ONE is a cloud-based EMR SaaS platform built on regulatory
          compliance, clinical safety, and privacy-preserving architecture —
          from Day 1.
        </p>
        <div className="flex gap-4 mt-10">
          <a
            href="#careers"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
          >
            Join Our Team
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ───────── Core Values Section ───────── */}
      <section id="values" className="px-8 py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-16">
          Built on Three Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🛡️
            </div>
            <h3 className="text-xl font-semibold mb-3">Clinical Safety</h3>
            <p className="text-gray-400 leading-relaxed">
              Fail-closed architecture ensures patient data integrity. Every
              clinical workflow is governed by the Technical Constitution with
              mandatory audit trails.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy by Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Consent management, purpose limitation, pseudonymization, and
              export controls are embedded in the platform core — not bolted on
              later.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🌐
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Compliance</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed for multi-jurisdictional operation from the ground up.
              HIPAA, GDPR, and Korean PIPA compliance built into every data
              flow.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── About Section ───────── */}
      <section id="about" className="px-8 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What is XGMS ONE?</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            XGMS ONE is a next-generation cloud-based Electronic Medical Record
            (EMR) platform that unifies clinical workflows, AI-driven decision
            support, and privacy-preserving data analytics into a single global
            SaaS solution. We are building the standard hospital database that
            healthcare institutions worldwide can trust.
          </p>
        </div>
      </section>

      {/* ───────── Careers Section ───────── */}
      <section
        id="careers"
        className="px-8 py-24 border-t border-gray-800 bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">We&apos;re Hiring</h2>
          <p className="text-gray-400 text-lg mb-10">
            Join us in building the future of global healthcare IT.
          </p>

          {/* CTO Position Card */}
          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800 text-left">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">
                Chief Technology Officer (CTO)
              </h3>
              <span className="px-3 py-1 text-xs font-medium text-green-300 bg-green-950 rounded-full border border-green-800">
                Open
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              We are looking for a visionary CTO to lead the architecture and
              engineering of XGMS ONE. You will own the Technical Constitution,
              drive cloud infrastructure decisions, and build a world-class
              engineering team for a platform designed to serve hospitals
              globally.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Cloud Architecture
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Healthcare IT
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                EMR / EHR Systems
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Data Privacy
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Global SaaS
              </span>
            </div>
            <a
              href="mailto:careers@xgms.io"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
            >
              Apply Now → careers@xgms.io
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Contact Section ───────── */}
      <section id="contact" className="px-8 py-24 border-t border-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 text-lg mb-8">
            Interested in partnership, investment, or joining our mission?
          </p>
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
        <p>© 2026 XGMS. Privacy & Compliance First.</p>
        <p className="mt-1">Seoul, South Korea · Building for the World</p>
      </footer>
    </div>
  );
}
```

## 4-4. 로컬에서 확인

PowerShell에서 `npm run dev` 가 실행 중이면, 브라우저에서 http://localhost:3000 을 새로고침(F5)합니다.

XGMS 다크 테마 랜딩 페이지가 보이면 성공입니다!

> **Tip:** 코드를 수정하고 저장(Ctrl+S)하면 브라우저가 자동으로 새로고침됩니다.
> 이를 "Hot Reload"라고 합니다. 수정 → 저장 → 즉시 확인, 이 사이클로 작업하세요.

> **개발 서버가 꺼져 있다면:** PowerShell에서 `cd ~\Desktop\xgms-homepage` 후
> `npm run dev` 를 다시 실행하면 됩니다.

---

---

# Phase 5: GitHub에 코드 업로드

## 5-1. GitHub Organization에 저장소(Repository) 만들기

> **Repository(저장소)란?** 하나의 프로젝트 코드를 담는 폴더입니다.
> Organization 아래에 만들어야 회사 자산이 됩니다.

1. https://github.com 로그인
2. 오른쪽 위 `+` 버튼 → **New repository** 클릭
3. **Owner 드롭다운에서 `xgms` (Organization)를 선택** ← 매우 중요!
   - ⚠️ 자신의 개인 계정이 아닌 **xgms Organization**을 선택해야 합니다
4. Repository name: `xgms-homepage`
5. 공개 범위: **Public** 또는 **Private** (둘 다 Vercel 배포 가능)
6. "Add a README file" → 체크 **하지 않음** (이미 로컬에 파일이 있으므로)
7. **Create repository** 클릭

> **결과:** `github.com/xgms/xgms-homepage` 저장소가 생성됩니다.

## 5-2. 로컬 코드를 GitHub에 업로드

PowerShell을 열고, `xgms-homepage` 폴더 안에서 아래 명령어를 **한 줄씩** 입력합니다:

```powershell
# xgms-homepage 폴더로 이동 (이미 이 폴더에 있다면 생략)
cd ~\Desktop\xgms-homepage

# 1) Git 초기화 (이미 되어 있으면 "Reinitialized" 메시지가 뜸 — 정상)
git init

# 2) 모든 파일을 스테이징 (업로드 준비)
git add .

# 3) 첫 번째 커밋 (변경 사항을 "스냅샷"으로 기록)
git commit -m "Initial commit: XGMS landing page"

# 4) 메인 브랜치 이름 설정
git branch -M main

# 5) GitHub 저장소 연결
git remote add origin https://github.com/xgms/xgms-homepage.git

# 6) 코드 업로드!
git push -u origin main
```

> **각 명령어 설명:**
> - `git init` → 이 폴더를 Git이 관리하도록 초기화
> - `git add .` → 모든 파일을 "업로드 대기 목록"에 추가 (`.`은 "전부"를 의미)
> - `git commit -m "메시지"` → 대기 목록의 파일들을 하나의 "버전"으로 묶어 저장
> - `git branch -M main` → 기본 브랜치 이름을 `main`으로 설정
> - `git remote add origin URL` → 이 폴더를 GitHub 저장소와 연결
> - `git push` → 내 컴퓨터의 코드를 GitHub로 업로드

> **GitHub 로그인 팝업이 뜨면:** "Sign in with your browser" 를 클릭하거나,
> GitHub 사용자명과 Personal Access Token을 입력합니다.
> (비밀번호가 아닌 Token이 필요합니다. 아래 FAQ 참고)

완료 후 브라우저에서 `https://github.com/xgms/xgms-homepage` 를 새로고침하면 코드가 올라와 있습니다.

---

---

# Phase 6: Vercel에서 배포

## 6-1. 프로젝트 가져오기

1. https://vercel.com 로그인
2. 대시보드에서 **Add New…** → **Project** 클릭
3. "Import Git Repository" 목록에서 `xgms/xgms-homepage` 가 보임 → **Import** 클릭
   - 안 보이면: **"Adjust GitHub App Permissions"** 클릭 → xgms Organization에 권한 허용
4. 설정 화면:
   - Framework Preset: **Next.js** (자동 감지됨)
   - Root Directory: `./` (기본값 유지)
   - 나머지 모두 기본값 유지
5. **Deploy** 클릭

배포가 시작되고 **1~2분 후** 완료됩니다.

완료되면 `https://xgms-homepage.vercel.app` 같은 임시 URL이 발급됩니다.
이 URL로 접속하면 **전 세계 어디서든** XGMS 랜딩 페이지를 볼 수 있습니다!

## 6-2. 자동 배포 확인

이제부터는 **GitHub에 코드를 push할 때마다 Vercel이 자동으로 새 버전을 배포**합니다.
즉, 코드를 수정하고 `git push`만 하면 홈페이지가 자동 업데이트됩니다.

---

---

# Phase 7: XGMS.io 도메인 연결

## 7-1. Vercel에서 커스텀 도메인 추가

1. Vercel 대시보드 → `xgms-homepage` 프로젝트 클릭
2. 상단 **Settings** 탭 → 왼쪽 메뉴 **Domains** 클릭
3. 입력창에 `xgms.io` 입력 → **Add** 클릭
4. `www.xgms.io`도 추가할지 묻는 화면 → **Add** (www 접속도 지원)
5. Vercel이 DNS 설정 안내를 보여줍니다. 아래 값을 메모하세요:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

> 위 값은 Vercel 표준값이지만, **실제 안내 화면에 표시되는 값을 우선 따르세요.**

## 7-2. Squarespace Domains에서 DNS 설정

> **중요:** Google Domains 사업부는 Squarespace로 이관되었습니다.
> 따라서 DNS 설정은 Squarespace Domains 관리 콘솔에서 합니다.

1. https://domains.squarespace.com 접속 (기존 Google Domains 계정으로 로그인)
2. `xgms.io` 도메인 클릭
3. 왼쪽 메뉴 **DNS** → **DNS Settings** 클릭
4. **Custom records** 섹션에서 기존 불필요한 레코드 삭제 (기본 파킹 레코드 등)
5. 새 레코드 추가:

```
첫 번째 레코드:
  Type:  A
  Host:  @
  Data:  76.76.21.21
  TTL:   3600

두 번째 레코드:
  Type:  CNAME
  Host:  www
  Data:  cname.vercel-dns.com
  TTL:   3600
```

6. **Save** 클릭

## 7-3. 연결 확인

DNS 전파(propagation)에 최대 24~48시간이 걸릴 수 있지만, **보통 10분~1시간 내에 완료**됩니다.

확인 방법:
1. Vercel → Settings → Domains 페이지에서 `xgms.io` 옆에 **초록색 체크 ✓** 표시되면 성공
2. SSL 인증서(https)도 Vercel이 **자동 발급** (별도 작업 불필요)
3. 브라우저에서 **https://xgms.io** 접속 → 랜딩 페이지가 보이면 완료!

> **아직 연결이 안 된다면?**
> https://dnschecker.org 에서 `xgms.io`를 검색하면 전 세계 DNS 전파 상태를 확인할 수 있습니다.

---

---

# Phase 8: 수정 & 업데이트 루틴

앞으로 홈페이지 내용을 바꾸고 싶을 때, 아래 4단계를 반복합니다:

```powershell
# 1) VS Code에서 app/page.js (또는 다른 파일) 수정 → Ctrl+S로 저장

# 2) 로컬에서 확인
npm run dev
# → 브라우저에서 http://localhost:3000 확인

# 3) 만족하면 GitHub에 업로드
git add .
git commit -m "Update: CTO JD 문구 수정"
git push

# 4) 1~2분 후 Vercel이 자동 배포 → xgms.io에 반영 완료!
```

이 4단계가 앞으로의 **표준 업데이트 루틴**입니다.

> **커밋 메시지 작성 팁:** `-m` 뒤의 메시지는 "무엇을 바꿨는지"를 간단히 적습니다.
> 예: "Add: 새 포지션 Backend Engineer 추가"
> 예: "Fix: Contact 이메일 주소 오타 수정"
> 예: "Update: Hero 섹션 문구 변경"

---

---

# Phase 9: 추가 권장 설정

홈페이지가 올라간 후 설정하면 좋은 것들입니다.
당장 하지 않아도 사이트는 정상 작동합니다.

## 9-1. 파비콘(Favicon) 교체

> 파비콘은 브라우저 탭에 보이는 작은 아이콘입니다.

1. XGMS 로고 이미지 준비 (정사각형 권장)
2. https://favicon.io 접속 → 이미지 업로드 → .ico 파일 다운로드
3. 다운로드된 `favicon.ico` 파일을 프로젝트의 `app/favicon.ico` 에 덮어쓰기
4. `git add .` → `git commit -m "Update: favicon"` → `git push` 로 배포

## 9-2. Google Analytics 연결 (무료, 방문자 통계)

1. https://analytics.google.com 에서 계정 생성 (ysg@xgms.io로 로그인)
2. 속성(Property) 생성 → 웹사이트 URL: `xgms.io`
3. 측정 ID 발급 (G-XXXXXXXXXX 형태)
4. `app/layout.js`에 스크립트 추가 (별도 안내 가능)

## 9-3. Google Search Console 등록 (무료, 검색엔진 노출)

1. https://search.google.com/search-console 접속 (ysg@xgms.io로 로그인)
2. `xgms.io` 도메인 등록
3. DNS TXT 레코드로 소유권 인증 (Squarespace Domains에서 추가)

## 9-4. KR/EN 다국어 대응 (필요 시)

현재 영문 우선으로 작성되어 있습니다.
한국어 페이지가 필요하면 별도 안내 드리겠습니다.

## 9-5. 이메일 수신 테스트

홈페이지의 `careers@xgms.io`, `contact@xgms.io` 링크가 실제로 작동하는지 확인:
- 다른 이메일에서 `contact@xgms.io`로 메일 발송
- ysg@xgms.io 받은편지함에 도착하는지 확인

---

---

# 트러블슈팅 FAQ (Windows)

**Q: `npx create-next-app` 실행 시 에러가 발생합니다.**
→ PowerShell을 **관리자 권한으로** 실행해보세요.
  시작 메뉴 → PowerShell 우클릭 → "관리자 권한으로 실행"
→ `node --version` 이 18 이상인지 확인하세요.

**Q: `npm run dev` 실행 시 "포트가 이미 사용 중" 에러가 납니다.**
→ `npm run dev -- -p 3001` 로 다른 포트를 사용하세요.
  브라우저에서 http://localhost:3001 로 접속합니다.

**Q: `git push` 할 때 인증 오류(403/Authentication failed)가 납니다.**
→ GitHub에서 Personal Access Token(PAT)을 발급받아야 합니다:
  1. GitHub 로그인 → 오른쪽 위 프로필 → Settings
  2. 왼쪽 맨 아래 Developer settings 클릭
  3. Personal access tokens → Tokens (classic) → Generate new token
  4. 이름: "XGMS Homepage", 만료: 90 days 또는 No expiration
  5. 권한: `repo` 체크 → Generate token
  6. 생성된 토큰을 복사 (한 번만 보여주므로 메모장에 저장!)
  7. git push 시 비밀번호 대신 이 토큰을 입력

**Q: PowerShell에서 "execution policy" 관련 에러가 납니다.**
→ PowerShell을 관리자 권한으로 열고 아래 명령어 실행:
  `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
  → Y 입력 → Enter

**Q: Vercel에서 xgms Organization의 저장소가 안 보입니다.**
→ Vercel이 xgms Organization에 접근 권한이 없어서입니다:
  1. Vercel의 "Import Git Repository" 화면에서 **"Adjust GitHub App Permissions"** 클릭
  2. GitHub 설정 화면 → Organization access 섹션에서 **xgms** 옆의 **Grant** 클릭
  3. Vercel로 돌아와서 새로고침하면 저장소가 보입니다

**Q: Vercel 배포 실패(Build Error)가 뜹니다.**
→ Vercel 대시보드에서 해당 배포의 **Build Logs** 확인
→ 로컬에서 `npm run build` 를 먼저 실행해서 에러를 잡을 수도 있습니다.
  대부분 코드 오타(괄호 누락, 따옴표 불일치 등)가 원인입니다.

**Q: xgms.io 접속 시 "DNS_PROBE_FINISHED_NXDOMAIN" 에러가 납니다.**
→ DNS 전파가 아직 완료되지 않았습니다.
  https://dnschecker.org 에서 xgms.io 검색 → 전파 상태 확인
  최대 48시간 기다려야 할 수 있지만, 보통 1시간 이내에 됩니다.

**Q: VS Code에서 `code .` 명령이 안 됩니다.**
→ VS Code 설치 시 "Add to PATH" 옵션을 체크하지 않았을 수 있습니다.
  VS Code를 다시 설치하면서 해당 옵션을 체크하거나,
  VS Code를 먼저 열고 → File → Open Folder → 폴더 선택으로 대체하세요.

---

---

# 부록: CTO 합류 시 인프라 인수인계 체크리스트

> 이 섹션은 **지금 실행하지 않습니다.**
> CTO가 합류할 때를 대비하여 기록해두는 문서입니다.

```
CTO 합류 시 실행할 인수인계 체크리스트
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ 1. Google Workspace에서 admin@xgms.io 사용자 계정 추가
     (이 시점에는 팀 규모가 비용을 정당화함)

□ 2. GitHub Organization "xgms"에 CTO 개인 GitHub 계정을 Owner로 초대
     GitHub → xgms → Settings → People → Invite member → Owner 권한 부여

□ 3. Vercel Pro 플랜으로 업그레이드 (월 $20)
     → Team "xgms" 생성
     → 기존 프로젝트를 Team으로 Transfer
     → CTO를 Admin으로 초대

□ 4. Google Analytics에 CTO를 관리자로 추가
     Analytics → Admin → Account Access Management → 추가

□ 5. Google Search Console에 CTO를 소유자로 추가
     Search Console → Settings → Users and permissions → 추가

□ 6. Squarespace Domains (DNS 관리) 접근 권한 공유
     방법: Squarespace 계정에 CTO를 contributor로 추가하거나,
     DNS를 Cloudflare로 이전하여 팀 관리 가능하게 전환

□ 7. 이메일 포워딩 업데이트
     careers@xgms.io → CTO 또는 채용 담당자에게 포워딩 변경
     contact@xgms.io → 적절한 담당자에게 포워딩 변경

※ 위 모든 단계에서 "비밀번호 공유"는 하지 않습니다.
  각 서비스의 초대/권한 부여 기능을 사용합니다.
  이것이 감사 추적성(Audit Trail)을 유지하는 방법입니다.
```

---

*이 가이드는 2026년 3월 기준으로 작성되었습니다.*
*가이드 진행 중 막히는 부분이 있으면 에러 메시지 스크린샷과 함께 알려주세요.*

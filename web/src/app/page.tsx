export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-900">LMS Platform</h1>
      <p className="text-lg text-slate-600">
        Phase 0 &mdash; Project Scaffold (React + Laravel + MySQL)
      </p>
      <div className="mt-4 rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm text-slate-500 shadow-sm">
        Frontend: Next.js (static export) &middot; Backend: Laravel REST API
      </div>
    </main>
  );
}

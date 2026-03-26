import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-7xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-lg text-dark-muted mb-8">
        お探しのページは見つかりませんでした。
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-accent-from/25"
      >
        トップへ戻る
      </Link>
    </div>
  );
}

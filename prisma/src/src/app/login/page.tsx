"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-sm space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <div className="text-center text-2xl font-semibold">🍀 Green 15</div>
        <p className="text-center text-sm text-slate-400">
          Sign in to see your ranked clovers
        </p>
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm font-medium transition hover:bg-slate-700"
        >
          Continue with GitHub
        </button>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

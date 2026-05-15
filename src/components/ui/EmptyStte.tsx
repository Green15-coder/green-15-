type Props = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
      <div className="text-lg font-semibold">{title}</div>
      {description ? (
        <div className="mt-2 text-sm text-slate-400">{description}</div>
      ) : null}
    </div>
  );
}

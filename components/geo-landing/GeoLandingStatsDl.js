export default function GeoLandingStatsDl({ rows }) {
  if (!rows?.length) return null;

  return (
    <dl className="mt-8 space-y-0 divide-y divide-base-content/10 border-t border-base-content/10">
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <dt className="shrink-0 text-xs uppercase tracking-wider text-base-content/50">
            {row.label}
          </dt>
          <dd className="text-right text-sm font-medium leading-snug text-base-content sm:max-w-[68%]">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

interface TechnologyListProps {
  items: string[];
}

export const TechnologyList = ({ items }: TechnologyListProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex rounded-full border border-vertex-border bg-white px-3 py-1 text-sm text-slate-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

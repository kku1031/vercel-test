interface Category {
  value: string;
  label: string;
}

interface CategorySelectProps {
  categories: Category[];
  value: string;
  onChange: (value: string) => void;
}

export default function CategorySelect({
  categories,
  value,
  onChange,
}: CategorySelectProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.3em]">
        Search Category
      </label>
      <select
        className="w-full sm:w-auto rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 focus:border-gray-400 focus:outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {categories.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}


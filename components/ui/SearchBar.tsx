import PlusIcon from "@/components/icons/PlusIcon";
import MicIcon from "@/components/icons/MicIcon";
import SoundWaveIcon from "@/components/icons/SoundWaveIcon";
import CategorySelect from "./CategorySelect";

interface Category {
  value: string;
  label: string;
}

interface SearchBarProps {
  question: string;
  category: string;
  categories: Category[];
  isLoading: boolean;
  message: string | null;
  error: string | null;
  onQuestionChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  question,
  category,
  categories,
  isLoading,
  message,
  error,
  onQuestionChange,
  onCategoryChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="w-full relative">
      <div className="flex flex-col gap-3 px-4 py-4 border border-gray-300 rounded-2xl bg-white shadow-sm hover:border-gray-400 transition-colors">
        <CategorySelect
          categories={categories}
          value={category}
          onChange={onCategoryChange}
        />

        <div className="flex items-center gap-3">
          <PlusIcon />

          <input
            type="text"
            placeholder="무엇이든 물어보세요"
            className="flex-1 outline-none text-gray-500 placeholder:text-gray-400 bg-transparent"
            value={question}
            onChange={(event) => onQuestionChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !isLoading) {
                onSearch();
              }
            }}
          />

          <MicIcon />

          <button
            type="button"
            className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
            onClick={onSearch}
            disabled={isLoading}
          >
            <SoundWaveIcon />
          </button>
        </div>

        <button
          type="button"
          className="mt-1 flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onSearch}
          disabled={isLoading}
        >
          {isLoading ? "검색 중..." : "검색 실행"}
        </button>
      </div>

      {message && (
        <p className="mt-3 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </p>
      )}

      {error && (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}


export default function MainHeader() {
  return (
    <header className="px-2 py-6 flex items-center justify-between">
      <div className="flex items-center gap-1 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
        <h1 className="font-bold">Who Am Codeliner</h1>
      </div>
      <div className="font-semibold tracking-wider text-sm">
        Codeliner@gmail.com
      </div>
    </header>
  );
}

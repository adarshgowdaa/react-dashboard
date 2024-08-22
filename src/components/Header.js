export default function Header() {
  return (
    <div
      className={`flex flex-wrap items-center justify-between self-stretch bg-white px-10 pb-4 pt-4 text-left text-lg font-semibold leading-7 text-slate-700 min-[1910px]:flex-nowrap`}
    >
      <div className="flex items-center pt-1">
        <div className="header-logo h-8 w-32 bg-no-repeat bg-contain" />
      </div>
      
      <div className="flex items-center gap-x-6">
        <div className="cursor-pointer">Demos</div>
        <div className="cursor-pointer">Pages</div>
        <div className="cursor-pointer">Projects</div>
        <div className="cursor-pointer">Blog</div>
        <div className="cursor-pointer">Blocks</div>
        <div className="cursor-pointer">Documentation</div>
      </div>

      <div className="flex items-center">
        <button className="flex items-center justify-center rounded-full border-2 border-solid border-sky-400 bg-sky-400 px-6 py-2 text-white">
          Contact
        </button>
      </div>
    </div>
  );
}
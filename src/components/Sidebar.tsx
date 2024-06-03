import { Home, Library, Search } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Home />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search /> Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4">
        <a className="text-sm text-zinc-400" href="#">
          Phonk main
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">
          Rock 1970
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">
          Rap 2024
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">
          My play list
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">
          Funk
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">
          Phonk 2024
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">
          Phonk 2023
        </a>
      </nav>
    </aside>
  );
};

import * as elements from "typed-html";

export function HeaderComponent() {
    return (
        <header class="flex w-full justify-center border-b border-slate-800 py-3 shadow-sm">
            <nav class="flex gap-6">
                <a
                    href="#"
                    class="font-semibold uppercase tracking-wide text-slate-600 transition-colors duration-300 hover:text-slate-500"
                >
                    Header Link
                </a>
            </nav>
        </header>
    );
}

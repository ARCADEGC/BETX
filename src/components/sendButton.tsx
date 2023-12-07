import * as elements from "typed-html";

export function BaseButton() {
    return (
        <button
            hx-post="/clicked"
            hx-swap="outerHTML"
            class="rounded-full border border-transparent bg-slate-700 px-8 py-2 text-slate-100 transition-colors duration-300 hover:border-slate-500 hover:bg-slate-600"
        >
            Click ME
        </button>
    );
}

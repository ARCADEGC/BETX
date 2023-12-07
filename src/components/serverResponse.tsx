import * as elements from "typed-html";
import { Elysia } from "elysia";

export const getBoxImage = new Elysia().get("box.svg", () =>
    Bun.file("./src/assets/img/box.svg")
);

export function ClickedComponent() {
    return (
        <div class="flex flex-col items-center gap-2">
            <div class="grid gap-2">
                <img
                    src="box.svg"
                    alt="box"
                    class="w-12 rounded-lg bg-white"
                />
                <p class="text-slate-100">Server responded with:</p>
                <code class="block whitespace-pre-wrap rounded-xl bg-slate-700 p-4">
                    this code
                </code>
            </div>
            <button
                hx-post="/back"
                hx-swap="outerHTML"
                hx-target="closest div"
                class="text-slate-100 underline"
            >
                back
            </button>
        </div>
    );
}

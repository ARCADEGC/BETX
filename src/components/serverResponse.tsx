import * as elements from 'typed-html';

export function ClickedComponent() {
    return (
        <div class="flex gap-2 flex-col items-center">
            <div class="flex gap-2">
                <img
                    src="box.svg"
                    alt="box"
                    class="w-12"
                />
                <h2 class="text-green-500 text-5xl font-semibold">
                    Server Responded on /Clicked
                </h2>
            </div>
            <button
                hx-post="/back"
                hx-swap="outerHTML"
                hx-target="closest div"
                class="underline"
            >
                back
            </button>
        </div>
    );
}

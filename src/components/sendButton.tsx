import * as elements from 'typed-html';

export function BaseButton() {
    return (
        <button
            hx-post="/clicked"
            hx-swap="outerHTML"
            class="bg-signature border rounded-full px-8 py-3"
        >
            Click ME
        </button>
    );
}

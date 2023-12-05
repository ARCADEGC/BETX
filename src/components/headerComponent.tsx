import * as elements from 'typed-html';

export function HeaderComponent() {
    return (
        <header class="w-full border-b shadow-sm py-3 flex justify-center">
            <nav class="flex gap-6">
                <a
                    href="#"
                    class="font-bold hover:text-neutral-500 text-neutral-400 transition-colors uppercase tracking-wider visited:text-neutral-300"
                >
                    link
                </a>
                <a
                    href="#"
                    class="font-bold hover:text-neutral-500 text-neutral-400 transition-colors uppercase tracking-wider visited:text-neutral-300"
                >
                    link
                </a>
                <a
                    href="#"
                    class="font-bold hover:text-neutral-500 text-neutral-400 transition-colors uppercase tracking-wider visited:text-neutral-300"
                >
                    link
                </a>
                <a
                    href="#"
                    class="font-bold hover:text-neutral-500 text-neutral-400 transition-colors uppercase tracking-wider visited:text-neutral-300"
                >
                    link
                </a>
            </nav>
        </header>
    );
}

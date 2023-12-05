// ||   Import plugins  ||
import Elysia from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

// ||   Importing Components    ||
import { BaseHtml } from './components/BaseHtml.tsx';
import { HeaderComponent } from './components/headerComponent.tsx';
import { FooterComponent } from './components/footerComponent.tsx';
import { ClickedComponent } from './components/serverResponse.tsx';
import { BaseButton } from './components/sendButton.tsx';

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Init Elysia                                  ||
// ! ||--------------------------------------------------------------------------------||
const app = new Elysia()

    // * ||--------------------------------------------------------------------------------||
    // * ||                                  Init Plugins                                  ||
    // * ||--------------------------------------------------------------------------------||
    .use(html())

    // ? ||--------------------------------------------------------------------------------||
    // ? ||                                  Get Requests                                  ||
    // ? ||--------------------------------------------------------------------------------||
    .get('/', ({ html }) =>
        html(
            <BaseHtml>
                <body class="flex flex-col items-center gap-4">
                    <HeaderComponent />
                    <h1 class="text-3xl font-bold">Hello</h1>
                    <BaseButton />
                    <FooterComponent />
                </body>
            </BaseHtml>
        )
    )

    // ? ||--------------------------------------------------------------------------------||
    // ? ||                                  Post Reuqests                                 ||
    // ? ||--------------------------------------------------------------------------------||
    .post('/clicked', () => ClickedComponent)
    .post('/back', () => BaseButton)

    // ? ||--------------------------------------------------------------------------------||
    // ? ||                              Getting Static Assets                             ||
    // ? ||--------------------------------------------------------------------------------||
    .get('styles.css', () => Bun.file('./src/assets/css/output.css'))
    .get('box.svg', () => Bun.file('./src/assets/img/box.svg'))

    // ! ||  Init Port Litening  ||
    .listen(3000);

// ! ||--------------------------------------------------------------------------------||
// ! ||           console log Elysia running host and port for easier access           ||
// ! ||--------------------------------------------------------------------------------||
console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

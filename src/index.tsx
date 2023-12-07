// ||   Import plugins  ||
import Elysia from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

// ||   Importing Components    ||
import { BaseHtml } from "./components/BaseHtml.tsx";
import { ClickedComponent, getBoxImage } from "./components/serverResponse.tsx";
import { BaseButton } from "./components/sendButton.tsx";

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Init Elysia                                  ||
// ! ||--------------------------------------------------------------------------------||
const app = new Elysia()

    // * ||--------------------------------------------------------------------------------||
    // * ||                                  Init Plugins                                  ||
    // * ||--------------------------------------------------------------------------------||
    .use(html())
    .use(getBoxImage)

    // ? ||--------------------------------------------------------------------------------||
    // ? ||                                  Get Requests                                  ||
    // ? ||--------------------------------------------------------------------------------||
    .get("/", ({ html }) => html(<BaseHtml />))

    // ? ||--------------------------------------------------------------------------------||
    // ? ||                                  Post Reuqests                                 ||
    // ? ||--------------------------------------------------------------------------------||
    .post("/clicked", () => ClickedComponent)
    .post("/back", () => BaseButton)

    // ? ||--------------------------------------------------------------------------------||
    // ? ||                                Get static assets                               ||
    // ? ||--------------------------------------------------------------------------------||
    .get("styles.css", () => Bun.file("./src/assets/css/output.css"))

    // ! ||  Init Listening on hostname and port then proceed to console.log for easier access  ||
    .listen(
        {
            hostname: "127.0.0.1",
            port: 6969,
        },
        ({ hostname, port }) => {
            console.log(`🦊 Elysia is running at http://${hostname}:${port}`);
        }
    );

// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $addheroe from "./routes/addheroe.tsx";
import * as $heroename from "./routes/heroename.tsx";
import * as $heroesearch from "./routes/heroesearch.tsx";
import * as $index from "./routes/index.tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $SearchForm from "./islands/SearchForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/addheroe.tsx": $addheroe,
    "./routes/heroename.tsx": $heroename,
    "./routes/heroesearch.tsx": $heroesearch,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/SearchForm.tsx": $SearchForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

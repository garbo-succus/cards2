# File format

Each card is an individual file. These files are linked in the Probability game state, just like a GLTF.
They can also be embedded directly using a `data:` URL.

Cards have 2 sides, a face side and a back side.
There will be some sort of in-game option to hide the face side, as it may be secret information.

Raster image formats are always rendered on a rectangular card with rounded corners.
If a SVG image is used for the front side, it will be used for shape of the the 3D card cut-out.

We want SVG to be the preferred image format.

## What should the file format look like?

### TP
[https://tabletop-playground.com/knowledge-base/cards/]

### Patchwork (Ink & Switch)
```json
# 
{
  "content": {
    "type": "text",
    "value": "{\n  \"name\": \"@patchwork/amb-poker\",\n  \"version\": \"0.0.1\",\n  \"description\": \"A poker simulator\",\n  \"type\": \"module\",\n  \"main\": \"src/index.ts\",\n  \"exports\": {\n    \".\": \"./dist/index.js\"\n  },\n  \"scripts\": {\n    \"build\": \"vite build\",\n    \"push\": \"pnpm build && jacquard push\",\n    \"watch\": \"nodemon --watch src -e js,tsx,ts,tsx,css,json --exec 'pnpm build && pnpm push'\"\n  },\n  \"keywords\": [],\n  \"author\": \"Ink & Switch\",\n  \"dependencies\": {\n    \"@automerge/automerge\": \"2.2.9-alpha.2\",\n    \"@automerge/automerge-repo\": \"2.0.0-alpha.7\",\n    \"@automerge/automerge-repo-react-hooks\": \"2.0.0-alpha.7\",\n    \"@patchwork/sdk\": \"workspace:*\",\n    \"@types/lodash-es\": \"^4.17.12\",\n    \"d3\": \"^7.9.0\",\n    \"lodash-es\": \"^4.17.21\",\n    \"ohm-js\": \"^17.1.0\",\n    \"react\": \"^18.3.1\",\n    \"react-dom\": \"^18.3.1\",\n    \"recharts\": \"^2.14.1\"\n  },\n  \"devDependencies\": {\n    \"@rollup/plugin-commonjs\": \"^26.0.1\",\n    \"@rollup/plugin-node-resolve\": \"^15.2.3\",\n    \"@rollup/plugin-typescript\": \"^11.1.6\",\n    \"@types/d3\": \"^7.4.3\",\n    \"@types/react\": \"^18.3.3\",\n    \"@types/react-dom\": \"^18.3.0\",\n    \"@vitejs/plugin-react\": \"^4.3.1\",\n    \"autoprefixer\": \"^10.4.20\",\n    \"nodemon\": \"^3.1.9\",\n    \"rollup\": \"^4.19.0\",\n    \"rollup-plugin-postcss\": \"^4.0.2\",\n    \"tailwindcss\": \"^3.4.6\",\n    \"vite\": \"^5.3.4\",\n    \"vite-plugin-css-injected-by-js\": \"^3.5.2\",\n    \"vite-plugin-top-level-await\": \"^1.4.4\",\n    \"vite-plugin-wasm\": \"^3.3.0\"\n  }\n}\n"
  },
  "extension": "json",
  "mimeType": "application/octet-stream",
  "name": "package.json",
  "type": "json"
}
```

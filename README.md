# File format

Each card is an individual file. These files are linked in the Probability game state, just like a GLTF.
They can also be embedded directly using a `data:` URL.

Cards have 2 sides, a face side and a back side.
There will be some sort of in-game option to hide the face side, as it may be secret information.

Raster image formats are always rendered on a rectangular card with rounded corners.
If a SVG image is used for the front side, it will be used for shape of the the 3D card cut-out.

We want SVG to be the preferred image format.

## Non-goals
* Support for normal maps. By default, cards will have a tiling "Linen Finish" normal map.
* Card color (beyond existing Probability color support) -- default white.

## What should the file format look like?

### TP
[https://tabletop-playground.com/knowledge-base/cards/]

### Patchwork (Ink & Switch)
We will need an automerge file container once we support multi-file.
We don't need to figure this out yet as we can directly embed JSON, but it would be good if the card file looked like a patchwork image/spreadsheet/whatever.
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
```json
{
  "@patchwork": {
    "suggestedImportUrl": "@patchwork/tldraw",
    "type": "tldraw"
  },
  "changeGroupSummaries": {},
  "discussions": {},
  "schema": {
    "recordVersions": {
      "asset": {
        "subTypeKey": "type",
        "subTypeVersions": {
          "bookmark": 0,
          "image": 2,
          "video": 2
        },
        "version": 1
      },
      "camera": {
        "version": 1
      },
      "document": {
        "version": 2
      },
      "instance": {
        "version": 21
      },
      "instance_page_state": {
        "version": 5
      },
      "instance_presence": {
        "version": 5
      },
      "page": {
        "version": 1
      },
      "pointer": {
        "version": 1
      },
      "shape": {
        "subTypeKey": "type",
        "subTypeVersions": {
          "arrow": 1,
          "bookmark": 1,
          "draw": 1,
          "embed": 4,
          "frame": 0,
          "geo": 7,
          "group": 0,
          "highlight": 0,
          "image": 2,
          "line": 1,
          "note": 4,
          "text": 1,
          "video": 1
        },
        "version": 3
      }
    },
    "schemaVersion": 1,
    "storeVersion": 4
  },
  "store": {
    "camera:page:page": {
      "id": "camera:page:page",
      "meta": {},
      "typeName": "camera",
      "x": 0,
      "y": 0,
      "z": 1
    },
    "document:document": {
      "gridSize": 10,
      "id": "document:document",
      "meta": {},
      "name": "",
      "typeName": "document"
    },
    "instance:instance": {
      "brush": null,
      "canMoveCamera": true,
      "chatMessage": "",
      "currentPageId": "page:page",
      "cursor": {
        "rotation": 0,
        "type": "default"
      },
      "devicePixelRatio": 2,
      "exportBackground": true,
      "followingUserId": null,
      "highlightedUserIds": [],
      "id": "instance:instance",
      "isChangingStyle": false,
      "isChatting": false,
      "isCoarsePointer": false,
      "isDebugMode": false,
      "isFocusMode": false,
      "isFocused": true,
      "isGridMode": false,
      "isHoveringCanvas": false,
      "isPenMode": false,
      "isReadonly": false,
      "isToolLocked": false,
      "meta": {},
      "opacityForNextShape": 1,
      "openMenus": [],
      "screenBounds": {
        "h": 400,
        "w": 720,
        "x": 0,
        "y": 0
      },
      "scribble": null,
      "stylesForNextShape": {},
      "typeName": "instance",
      "zoomBrush": null
    },
    "instance_page_state:page:page": {
      "croppingShapeId": null,
      "editingShapeId": null,
      "erasingShapeIds": [],
      "focusedGroupId": null,
      "hintingShapeIds": [],
      "hoveredShapeId": null,
      "id": "instance_page_state:page:page",
      "meta": {},
      "pageId": "page:page",
      "selectedShapeIds": [],
      "typeName": "instance_page_state"
    },
    "page:page": {
      "id": "page:page",
      "index": "a1",
      "meta": {},
      "name": "Drawing",
      "typeName": "page"
    },
    "pointer:pointer": {
      "id": "pointer:pointer",
      "lastActivityTimestamp": 0,
      "meta": {},
      "typeName": "pointer",
      "x": 0,
      "y": 0
    },
    "shape:HU9glHc8aqtA3MVti6f0v": {
      "id": "shape:HU9glHc8aqtA3MVti6f0v",
      "index": "a2",
      "isLocked": false,
      "meta": {},
      "opacity": 1,
      "parentId": "page:page",
      "props": {
        "color": "black",
        "dash": "draw",
        "fill": "none",
        "isClosed": false,
        "isComplete": true,
        "isPen": false,
        "segments": [
          {
            "points": [
              {
                "x": 0,
                "y": 0,
                "z": 0.5
              },
              {
                "x": 1.33,
                "y": -1.33,
                "z": 0.5
              },
              {
                "x": 6,
                "y": -6,
                "z": 0.5
              },
              {
                "x": 12,
                "y": -8.67,
                "z": 0.5
              },
              {
                "x": 16,
                "y": -8.67,
                "z": 0.5
              },
              {
                "x": 19.33,
                "y": -7.33,
                "z": 0.5
              },
              {
                "x": 22,
                "y": -2.67,
                "z": 0.5
              },
              {
                "x": 23.33,
                "y": 6.67,
                "z": 0.5
              },
              {
                "x": 20.67,
                "y": 18.67,
                "z": 0.5
              },
              {
                "x": 15.33,
                "y": 28,
                "z": 0.5
              },
              {
                "x": 8.67,
                "y": 33.33,
                "z": 0.5
              },
              {
                "x": 0.67,
                "y": 36,
                "z": 0.5
              },
              {
                "x": -8,
                "y": 36,
                "z": 0.5
              },
              {
                "x": -16.67,
                "y": 34.67,
                "z": 0.5
              },
              {
                "x": -20.67,
                "y": 30.67,
                "z": 0.5
              },
              {
                "x": -21.33,
                "y": 26,
                "z": 0.5
              },
              {
                "x": -19.33,
                "y": 17.33,
                "z": 0.5
              },
              {
                "x": -15.33,
                "y": 9.33,
                "z": 0.5
              },
              {
                "x": -11.33,
                "y": 3.33,
                "z": 0.5
              },
              {
                "x": -10,
                "y": 1.33,
                "z": 0.5
              },
              {
                "x": -9.33,
                "y": 0.67,
                "z": 0.5
              }
            ],
            "type": "free"
          }
        ],
        "size": "m"
      },
      "rotation": 0,
      "type": "draw",
      "typeName": "shape",
      "x": 502.66668701171875,
      "y": 310.6666717529297
    },
    "shape:Kkgsd36RWmeBsQClqWARj": {
      "id": "shape:Kkgsd36RWmeBsQClqWARj",
      "index": "a1",
      "isLocked": false,
      "meta": {},
      "opacity": 1,
      "parentId": "page:page",
      "props": {
        "color": "black",
        "dash": "draw",
        "fill": "none",
        "isClosed": false,
        "isComplete": true,
        "isPen": false,
        "segments": [
          {
            "points": [
              {
                "x": 0,
                "y": 0,
                "z": 0.5
              },
              {
                "x": 0,
                "y": -0.67,
                "z": 0.5
              },
              {
                "x": 11.33,
                "y": -14,
                "z": 0.5
              },
              {
                "x": 22,
                "y": -21.33,
                "z": 0.5
              },
              {
                "x": 30,
                "y": -23.33,
                "z": 0.5
              },
              {
                "x": 35.33,
                "y": -22,
                "z": 0.5
              },
              {
                "x": 39.33,
                "y": -14.67,
                "z": 0.5
              },
              {
                "x": 42.67,
                "y": -1.33,
                "z": 0.5
              },
              {
                "x": 42,
                "y": 13.33,
                "z": 0.5
              },
              {
                "x": 31.33,
                "y": 29.33,
                "z": 0.5
              },
              {
                "x": 16,
                "y": 36,
                "z": 0.5
              },
              {
                "x": 2,
                "y": 36.67,
                "z": 0.5
              },
              {
                "x": -14.67,
                "y": 33.33,
                "z": 0.5
              },
              {
                "x": -23.33,
                "y": 29.33,
                "z": 0.5
              },
              {
                "x": -26.67,
                "y": 22.67,
                "z": 0.5
              },
              {
                "x": -23.33,
                "y": 12.67,
                "z": 0.5
              },
              {
                "x": -14,
                "y": 4,
                "z": 0.5
              },
              {
                "x": -4,
                "y": -1.33,
                "z": 0.5
              },
              {
                "x": 3.33,
                "y": -2,
                "z": 0.5
              },
              {
                "x": 7.33,
                "y": -2,
                "z": 0.5
              },
              {
                "x": 8.67,
                "y": -2,
                "z": 0.5
              }
            ],
            "type": "free"
          }
        ],
        "size": "m"
      },
      "rotation": 0,
      "type": "draw",
      "typeName": "shape",
      "x": 390,
      "y": 317.3333282470703
    },
    "shape:gw7ebcQgDqXeE-IxWJF6C": {
      "id": "shape:gw7ebcQgDqXeE-IxWJF6C",
      "index": "a3",
      "isLocked": false,
      "meta": {},
      "opacity": 1,
      "parentId": "page:page",
      "props": {
        "color": "black",
        "dash": "draw",
        "fill": "none",
        "isClosed": false,
        "isComplete": true,
        "isPen": false,
        "segments": [
          {
            "points": [
              {
                "x": 0,
                "y": 0,
                "z": 0.5
              },
              {
                "x": 0,
                "y": 0.67,
                "z": 0.5
              },
              {
                "x": 1.33,
                "y": 4,
                "z": 0.5
              },
              {
                "x": 3.33,
                "y": 8,
                "z": 0.5
              },
              {
                "x": 7.33,
                "y": 15.33,
                "z": 0.5
              },
              {
                "x": 12.67,
                "y": 23.33,
                "z": 0.5
              },
              {
                "x": 21.33,
                "y": 34.67,
                "z": 0.5
              },
              {
                "x": 33.33,
                "y": 44.67,
                "z": 0.5
              },
              {
                "x": 46,
                "y": 51.33,
                "z": 0.5
              },
              {
                "x": 68.67,
                "y": 59.33,
                "z": 0.5
              },
              {
                "x": 91.33,
                "y": 64,
                "z": 0.5
              },
              {
                "x": 123.33,
                "y": 65.33,
                "z": 0.5
              },
              {
                "x": 153.33,
                "y": 64.67,
                "z": 0.5
              },
              {
                "x": 188,
                "y": 58,
                "z": 0.5
              },
              {
                "x": 210,
                "y": 50.67,
                "z": 0.5
              },
              {
                "x": 226.67,
                "y": 40,
                "z": 0.5
              },
              {
                "x": 234.67,
                "y": 31.33,
                "z": 0.5
              },
              {
                "x": 238,
                "y": 24.67,
                "z": 0.5
              },
              {
                "x": 242,
                "y": 13.33,
                "z": 0.5
              },
              {
                "x": 243.33,
                "y": 4.67,
                "z": 0.5
              },
              {
                "x": 243.33,
                "y": -2.67,
                "z": 0.5
              },
              {
                "x": 240.67,
                "y": -8,
                "z": 0.5
              },
              {
                "x": 238.67,
                "y": -11.33,
                "z": 0.5
              },
              {
                "x": 238.67,
                "y": -13.33,
                "z": 0.5
              },
              {
                "x": 238.67,
                "y": -14.67,
                "z": 0.5
              }
            ],
            "type": "free"
          }
        ],
        "size": "m"
      },
      "rotation": 0,
      "type": "draw",
      "typeName": "shape",
      "x": 337.33331298828125,
      "y": 368.6666717529297
    }
  },
  "tags": [],
  "versionControlMetadataUrl": "automerge:2YHvDohgMZtX8wcYmySZmKXE8CLy"
}
```

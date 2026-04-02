window.BENCHMARK_DATA = {
  "lastUpdate": 1775117685302,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Real-World Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "56b4a06bd9fc6f2bed96134bdea34f968795a24c",
          "message": "fix: add bench-real-world.yml to zizmor superfluous-actions ignore list",
          "timestamp": "2026-03-27T07:46:07Z",
          "url": "https://github.com/fallow-rs/fallow/commit/56b4a06bd9fc6f2bed96134bdea34f968795a24c"
        },
        "date": 1774598734152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 106,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 90,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 420,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 336,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 321,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 217,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 210,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1910,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1753,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "9e65ad1327a908010b3815c3411e8e7e2348d680",
          "message": "chore: release v2.5.0",
          "timestamp": "2026-03-28T00:11:56Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9e65ad1327a908010b3815c3411e8e7e2348d680"
        },
        "date": 1774684361653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 60,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 113,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 430,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 417,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 321,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 210,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1874,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1777,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "9a10769adcd44174a91945238758424486f8d81e",
          "message": "fix: gate parser-invoking extract tests with #[cfg(not(miri))]\n\nThe sfc, astro, and mdx parse_*_to_module tests invoke the Oxc parser\nwhich is ~1000x slower under Miri, causing the 30-minute CI timeout.\nGate these 11 tests so only string-extraction tests run under Miri.",
          "timestamp": "2026-03-28T22:39:21Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9a10769adcd44174a91945238758424486f8d81e"
        },
        "date": 1774771141146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 31,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 427,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 346,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 330,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 219,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1900,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1820,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "1b89cd86611bd85a1c0ebdef7678f56ffd3f95e1",
          "message": "docs: mark trend reporting as shipped in roadmap",
          "timestamp": "2026-03-30T08:11:11Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1b89cd86611bd85a1c0ebdef7678f56ffd3f95e1"
        },
        "date": 1774859239349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 59,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 96,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 346,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 335,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 215,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1927,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1826,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "1c685b1a3e1aad0cd10adacd136d2898f3541109",
          "message": "test: improve health scoring coverage",
          "timestamp": "2026-03-30T21:43:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1c685b1a3e1aad0cd10adacd136d2898f3541109"
        },
        "date": 1774944951402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 113,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 480,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 346,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 339,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 245,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2072,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2001,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "38ce08ade8ead8635595db67d232ceeb787b3f7e",
          "message": "chore: release v2.8.0",
          "timestamp": "2026-04-01T07:55:32Z",
          "url": "https://github.com/fallow-rs/fallow/commit/38ce08ade8ead8635595db67d232ceeb787b3f7e"
        },
        "date": 1775031778816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 30,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 88,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 326,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 312,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 299,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 281,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 192,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 179,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1553,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1445,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "181f611ec3433b99dada91ea4aa26885e18b54ad",
          "message": "refactor: use Display for EntryPointSource and relative paths in list output\n\nAdd Display impl for EntryPointSource with human-readable strings\n(e.g. \"package.json main\" instead of \"PackageJsonMain\"). Switch list\ncommand human output to relative paths and Display formatting.",
          "timestamp": "2026-04-02T07:42:06Z",
          "url": "https://github.com/fallow-rs/fallow/commit/181f611ec3433b99dada91ea4aa26885e18b54ad"
        },
        "date": 1775117684097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 112,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 461,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 320,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 213,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1950,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1883,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
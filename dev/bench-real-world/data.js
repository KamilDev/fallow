window.BENCHMARK_DATA = {
  "lastUpdate": 1777709983780,
  "repoUrl": "https://github.com/KamilDev/fallow",
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
          "id": "b82e6eab66c63d51f7cf1f19f575699414ebb9b9",
          "message": "fix: use slurpfile for PR files to avoid ARG_MAX on large PRs\n\nThe --argjson flag inlines the entire PR files JSON on the command line,\nwhich exceeds ARG_MAX for PRs with 100+ files (each carrying patch data).\nSwitch to --slurpfile which reads from a temp file instead. The jq script\nnormalizes both formats so tests using --argjson still work.",
          "timestamp": "2026-04-03T08:05:37Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b82e6eab66c63d51f7cf1f19f575699414ebb9b9"
        },
        "date": 1775203775536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 59,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
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
            "value": 111,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 92,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 448,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 425,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 337,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 321,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 225,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 215,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1938,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1854,
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
          "id": "fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8",
          "message": "chore: release v2.12.0",
          "timestamp": "2026-04-03T22:37:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8"
        },
        "date": 1775289303653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 565,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 358,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 348,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 241,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2076,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1991,
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
          "id": "31ad2b795659f758b0815386fdacc05d56844e61",
          "message": "chore: release v2.13.0",
          "timestamp": "2026-04-04T10:03:19Z",
          "url": "https://github.com/fallow-rs/fallow/commit/31ad2b795659f758b0815386fdacc05d56844e61"
        },
        "date": 1775376139968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 56,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 96,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 435,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 349,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 328,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1976,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1868,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1775635805917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 106,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 451,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 433,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3345,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3185,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1775722372633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 125,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 481,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 456,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 427,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 253,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3390,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3157,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1775809062586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 28,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 87,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 348,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 311,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 379,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 362,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 184,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2348,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2154,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1775893512446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 120,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 498,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 472,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 451,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 419,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 258,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 232,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2998,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2917,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1775980766051,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 455,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3484,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3149,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776070872650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 110,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 471,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 261,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 230,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3411,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3208,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776154953103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 41,
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
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 474,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 421,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 219,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3188,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3161,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776241462723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 63,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 497,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 451,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 468,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 418,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 219,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3353,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3106,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776327852585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 466,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3361,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3212,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776414271686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 504,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 476,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 451,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 430,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 273,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 236,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3062,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2996,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776498952493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 488,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 451,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 221,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3317,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3223,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776585778590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 477,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 457,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 423,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 221,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3310,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3167,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776676052289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 31,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 476,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 434,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 419,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 251,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 220,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3234,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3126,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776760133573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 94,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 482,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 442,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 455,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3377,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3137,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776846413269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 58,
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
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 114,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 535,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 471,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 270,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 238,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3041,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2996,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1776933057089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 65,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 475,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 454,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 468,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 440,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 261,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3427,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3275,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777021108638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 110,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 91,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 366,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 333,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 394,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 374,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 215,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 190,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2342,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2222,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777104116230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 513,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 484,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 447,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 432,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 262,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 234,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3048,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2903,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777191214266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
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
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 110,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 498,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 425,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 258,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3096,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2941,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777281357057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 59,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 448,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 452,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 427,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 253,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3309,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3175,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777367842103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 457,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 459,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 431,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 254,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3376,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3214,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777453676258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 507,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 482,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 455,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 426,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 269,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 235,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3155,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2975,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777540271336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 34,
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
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 31,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 96,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 87,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 413,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 375,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 343,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 208,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2400,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2400,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777625857665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 62,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 118,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 475,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 452,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 429,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3253,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3202,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T13:38:46Z",
          "url": "https://github.com/KamilDev/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1777709983202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 106,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 513,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 490,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 482,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 440,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 272,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 244,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3101,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2999,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1782640424390,
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
        "date": 1777797166085,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
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
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 445,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 463,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 431,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3317,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3265,
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
        "date": 1777886067429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 28,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 41,
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
            "value": 353,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 323,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 385,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 362,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 213,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 186,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2273,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2186,
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
        "date": 1777972042736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 66,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 124,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 529,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 496,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 459,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 271,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 241,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3201,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2974,
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
        "date": 1778059117061,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
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
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 118,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 475,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 440,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 454,
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
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3459,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3246,
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
        "date": 1778146065759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 28,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 95,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 87,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 411,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 396,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 372,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 365,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 211,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2384,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2383,
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
        "date": 1778228417818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 60,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 48,
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
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 507,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 490,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 463,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 262,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3203,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3011,
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
        "date": 1778315272021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
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
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 498,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 477,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 452,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 259,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 232,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3394,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3322,
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
        "date": 1778403133068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 43,
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
            "value": 39,
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
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 441,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 437,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 253,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 228,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3382,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3254,
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
        "date": 1778495449700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
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
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 443,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 460,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3317,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3192,
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
        "date": 1778578353542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 54,
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
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 499,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 475,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 430,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 259,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 234,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3064,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2902,
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
        "date": 1778665070218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
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
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 473,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 461,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 422,
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
            "value": 3280,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3269,
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
        "date": 1778750975495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 540,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 506,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 456,
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
            "value": 238,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3040,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2993,
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
        "date": 1778838066820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 39,
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
            "value": 491,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 425,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 254,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 230,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3371,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3156,
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
        "date": 1778920415601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 505,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 483,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 467,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 265,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 238,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3182,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2924,
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
        "date": 1779008426364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
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
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 522,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 456,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 431,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 262,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 236,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3151,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2965,
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
        "date": 1779101776897,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 47,
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
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 110,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 520,
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
            "value": 254,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3322,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3193,
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
        "date": 1779186782639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
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
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 125,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 481,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 456,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 434,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 276,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 261,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3060,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2947,
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
        "date": 1779272367480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
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
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 118,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 488,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 442,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 451,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 427,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3273,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3184,
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
        "date": 1779359478774,
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
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 118,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 480,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 444,
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
            "value": 252,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3491,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3221,
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
        "date": 1779444986851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 106,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 88,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 379,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 340,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 405,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 367,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 216,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 186,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2382,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2232,
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
        "date": 1779526846741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 114,
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
            "value": 469,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 448,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 424,
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
            "value": 2981,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2930,
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
        "date": 1779614164236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 493,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 454,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 434,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 265,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3293,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3307,
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
        "date": 1779707143303,
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
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 114,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 476,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 436,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 459,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 246,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3350,
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
        "date": 1779878872505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 33,
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
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 65,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 218,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 426,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 407,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 379,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 364,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 217,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 229,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2446,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2394,
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
        "date": 1779965224631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
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
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 501,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 475,
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
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3162,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2925,
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
        "date": 1780051265238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 32,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 56,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 47,
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
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 485,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 455,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 461,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 446,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 268,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3328,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3273,
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
        "date": 1780132285633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 31,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 32,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 83,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 350,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 319,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 380,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 352,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 214,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 184,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2274,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2160,
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
        "date": 1780220609426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 54,
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
            "value": 39,
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
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 468,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 432,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 422,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 220,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3366,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3168,
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
        "date": 1780317024420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 502,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 476,
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
            "value": 261,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3173,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2943,
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
        "date": 1780398873899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 137,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 110,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 515,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 473,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 476,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 465,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 267,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 241,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3423,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3374,
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
        "date": 1780487586168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 124,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 474,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 432,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 228,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3422,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3211,
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
        "date": 1780569312633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 111,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 93,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 358,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 396,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 370,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 218,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 188,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2406,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2194,
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
        "date": 1780656159038,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 41,
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
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 127,
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
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 456,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 437,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 273,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 240,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3005,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2988,
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
        "date": 1780737584111,
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
            "value": 56,
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
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 490,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 460,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 474,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 445,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3327,
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
        "date": 1780826262076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
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
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 107,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 506,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 465,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 454,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 265,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3286,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3220,
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
        "date": 1780919464891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 507,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 487,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 473,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 271,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 246,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3185,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3022,
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
        "date": 1781000987072,
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
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
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
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 515,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 471,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 458,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 259,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 240,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3095,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2938,
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
        "date": 1781088584159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
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
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 483,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 436,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 457,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3330,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3168,
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
        "date": 1781176801009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
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
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 111,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 515,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 494,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 465,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 267,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 242,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3143,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2970,
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
        "date": 1781261955220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
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
            "value": 49,
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
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 484,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 442,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3478,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3206,
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
        "date": 1781344342752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
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
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 494,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 463,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 252,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 228,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3520,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3236,
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
        "date": 1781432472422,
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
            "value": 49,
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
            "value": 44,
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
            "value": 501,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 472,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 447,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 260,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2992,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2929,
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
        "date": 1781528355838,
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
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 481,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 442,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3453,
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
        "date": 1781611402271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 529,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 455,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 443,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 259,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3392,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3245,
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
        "date": 1781695736439,
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
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 454,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 421,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 244,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3408,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3172,
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
        "date": 1781781148632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
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
            "value": 118,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 487,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 435,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 221,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3375,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3231,
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
        "date": 1781867614842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 124,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 456,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 431,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3350,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3254,
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
        "date": 1781949553506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 472,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 446,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 458,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 448,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3351,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3213,
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
        "date": 1782037568984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 26,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 22,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 27,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 28,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 27,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 72,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 69,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 328,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 325,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 280,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 268,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 169,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 168,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1767,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1840,
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
        "date": 1782132202501,
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
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 107,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 507,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 480,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 426,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 260,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 235,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3078,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2989,
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
        "date": 1782210557440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
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
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 488,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 251,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3497,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3085,
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
        "date": 1782296089337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
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
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 470,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 468,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 427,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 264,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 235,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3149,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2944,
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
        "date": 1782381802163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
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
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 129,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 523,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 500,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 499,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 454,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 276,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 252,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3106,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3043,
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
        "date": 1782468946320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 499,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 464,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 473,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 254,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3568,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3318,
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
        "date": 1782552228737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 97,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 472,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 444,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 227,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3434,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3224,
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
        "date": 1782640423762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 120,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 479,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 447,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 452,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 420,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3252,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3179,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
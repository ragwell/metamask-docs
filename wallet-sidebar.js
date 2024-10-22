// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  walletSidebar: [
    "index",
    {
      type: "category",
      label: "Connect to MetaMask",
      link: { type: "doc", id: "connect/index" },
      items: [
        {
          type: "category",
          label: "MetaMask SDK",
          link: { type: "doc", id: "connect/metamask-sdk/index" },
          items: [
            {
              type: "category",
              label: "JavaScript",
              link: { type: "doc", id: "connect/metamask-sdk/javascript/index" },
              items: [
                {
                  type: "category",
                  label: "React",
                  link: { type: "doc", id: "connect/metamask-sdk/javascript/react/index" },
                  items: [
                    "connect/metamask-sdk/javascript/react/react-ui",
                  ],
                },
                "connect/metamask-sdk/javascript/pure-js",
                "connect/metamask-sdk/javascript/other-web-frameworks",
                "connect/metamask-sdk/javascript/nodejs",
                "connect/metamask-sdk/javascript/electron",
              ],
            },
            {
              type: "category",
              label: "Mobile",
              link: { type: "doc", id: "connect/metamask-sdk/mobile/index" },
              items: [
                "connect/metamask-sdk/mobile/ios",
                "connect/metamask-sdk/mobile/android",
                "connect/metamask-sdk/mobile/react-native",
              ],
            },
            {
              type: "category",
              label: "Gaming",
              link: { type: "doc", id: "connect/metamask-sdk/gaming/index" },
              items: [
                "connect/metamask-sdk/gaming/unity",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Third-party libraries",
          items: [{ type: "autogenerated", dirName: "connect/3rd-party-libraries" }],
        },
        {
          type: "doc",
          id: "connect/wallet-api",
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "How to",
      link: { type: "generated-index", slug: "/how-to" },
      items: [{ type: "autogenerated", dirName: "how-to" }],
    },
    {
      type: "category",
      label: "Concepts",
      link: { type: "generated-index", slug: "/concepts" },
      items: [{ type: "autogenerated", dirName: "concepts" }],
    },
    {
      type: "category",
      label: "Tutorials",
      link: { type: "generated-index", slug: "/tutorials" },
      items: [{ type: "autogenerated", dirName: "tutorials" }],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "generated-index", slug: "/reference" },
      items: [
        {
          type: "doc",
          id: "reference/sdk-js-options",
        },
        {
          type: "doc",
          id: "reference/sdk-unity-api",
        },
        {
          type: "category",
          label: "Non-EVM APIs",
          link: { type: "generated-index", slug: "/reference/non-evm-apis" },
          items: [{ type: "autogenerated", dirName: "reference/non-evm-apis" }],
        },
        {
          type: "doc",
          id: "reference/provider-api",
        },
        {
          type: "doc",
          id: "reference/multichain-api-events",
        },
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebar;

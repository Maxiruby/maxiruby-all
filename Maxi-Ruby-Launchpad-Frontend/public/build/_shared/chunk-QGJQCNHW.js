import {
  cn
} from "/build/_shared/chunk-IEEYB6LV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PGEV6FY.js";
import {
  createHotContext
} from "/build/_shared/chunk-HBGEQ2HX.js";
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __export,
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/components/shared/Image.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/Image.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/Image.tsx"
  );
  import.meta.hot.lastModified = "1691945345601.3015";
}
var Image = _s(import_react.default.memo(_c = _s(function Image2({
  src,
  alt,
  loading = "lazy",
  objectFit,
  width,
  height,
  onLoad
}) {
  _s();
  const id = import_react.default.useId();
  const image = import_react.default.useRef(null);
  const [imageLoaded, setImageLoaded] = import_react.default.useState(true);
  const handleImageLoaded = () => {
    setImageLoaded(true);
    if (typeof onLoad === "function") {
      onLoad();
    }
  };
  (0, import_react.useEffect)(() => {
    if (!image.current)
      return;
    if (image.current.complete) {
      handleImageLoaded();
    }
  }, [image.current]);
  const props = {
    src,
    alt,
    loading,
    ...width && {
      width
    },
    ...height && {
      height
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { ref: image, id, className: cn("opacity-0 transition-opacity duration-75", {
    "!opacity-100": imageLoaded,
    "max-w-full": !width,
    "object-cover": objectFit === "cover",
    "object-contain": objectFit === "contain",
    "object-fill": objectFit === "fill"
  }), style: width && height ? {
    width,
    height
  } : {}, onLoad: handleImageLoaded, ...props }, id, false, {
    fileName: "app/components/shared/Image.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}, "uFAAyTGojiCHhdfei0Xce7uKXko=", false, function() {
  return [import_react.default.useId];
})), "uFAAyTGojiCHhdfei0Xce7uKXko=", false, function() {
  return [import_react.default.useId];
});
_c2 = Image;
var Image_default = Image;
function ImageContainer({
  className,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("flex flex-1 bg-gray-100 dark:bg-gray-800 animate-pulse", className), children }, void 0, false, {
    fileName: "app/components/shared/Image.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
_c3 = ImageContainer;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Image$React.memo");
$RefreshReg$(_c2, "Image");
$RefreshReg$(_c3, "ImageContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/static/images/maxiruby.svg
var maxiruby_default = "/build/_assets/maxiruby-FWK445G7.svg";

// app/static/images/home-bg.svg
var home_bg_default = "/build/_assets/home-bg-DET6QM4I.svg";

// app/static/images/fcfs.png
var fcfs_default = "/build/_assets/fcfs-RVNDUSML.png";

// app/static/images/fcfs-bg.svg
var fcfs_bg_default = "/build/_assets/fcfs-bg-T22CXWG6.svg";

// app/static/images/brave.png
var brave_default = "/build/_assets/brave-V2XTY4UB.png";

// app/static/images/circle.png
var circle_default = "/build/_assets/circle-ZIKJD65O.png";

// app/static/images/discord.png
var discord_default = "/build/_assets/discord-S6DPGCGB.png";

// app/static/images/google.png
var google_default = "/build/_assets/google-PEZM4EAH.png";

// app/static/images/jump.png
var jump_default = "/build/_assets/jump-CDIU4TRN.png";

// app/static/images/lolla.png
var lolla_default = "/build/_assets/lolla-POURSDFF.png";

// app/static/images/magiceden.png
var magiceden_default = "/build/_assets/magiceden-BOQVHWZ6.png";

// app/static/images/google.svg
var google_default2 = "/build/_assets/google-3ITJK2QW.svg";

// app/static/images/twitter.svg
var twitter_default = "/build/_assets/twitter-4OQWYISN.svg";

// app/static/images/email-success.svg
var email_success_default = "/build/_assets/email-success-TZFVWYEP.svg";

// app/config/images.config.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/config/images.config.ts"
  );
  import.meta.hot.lastModified = "1691945345602.1763";
}
var Images = {
  Logo: maxiruby_default,
  HomeBackground: home_bg_default,
  FCFS: fcfs_default,
  FCFS_BG: fcfs_bg_default,
  Brave: brave_default,
  Circle: circle_default,
  Discord: discord_default,
  Google: google_default,
  Jump: jump_default,
  Lolla: lolla_default,
  MagicEden: magiceden_default,
  GoogleG: google_default2,
  Twitter: twitter_default,
  EmailSuccess: email_success_default
};

// app/config/meta.config.ts
var meta_config_exports = {};
__export(meta_config_exports, {
  Features: () => Features,
  HelpfulLinks: () => HelpfulLinks,
  Partners: () => Partners,
  Social: () => Social,
  Tiers: () => Tiers
});
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/config/meta.config.ts"
  );
  import.meta.hot.lastModified = "1691945345602.4";
}
var Social = [
  {
    id: 7,
    title: "Discord",
    icon: "discord",
    path: "https://discord.com/"
  },
  {
    id: 6,
    title: "Telegram",
    icon: "telegram",
    path: "https://telegram.com/"
  },
  {
    id: 5,
    title: "Twitter",
    icon: "twitter",
    path: "https://twitter.com/"
  },
  {
    id: 0,
    title: "Reddit",
    icon: "reddit",
    path: "https://reddit.com/"
  },
  {
    id: 4,
    title: "Instagram",
    icon: "instagram",
    path: "https://instagram.com/"
  },
  {
    id: 3,
    title: "Linkedin",
    icon: "linkedin",
    path: "https://linkedin.com/"
  },
  {
    id: 1,
    title: "Medium",
    icon: "medium",
    path: "https://reddit.com/"
  }
];
var HelpfulLinks = {
  "about us": [
    {
      title: "Whitepaper",
      path: "#",
      target: "_blank"
    },
    {
      title: "Blog",
      path: "#",
      target: "_blank"
    },
    {
      title: "Terms of Use",
      path: "#",
      target: "_blank"
    },
    {
      title: "Privacy Policy",
      path: "#",
      target: "_blank"
    }
  ],
  support: [
    {
      title: "Help & Support",
      path: "#",
      target: "_blank"
    },
    {
      title: "Author Profile",
      path: "#",
      target: "_blank"
    },
    {
      title: "Contact",
      path: "#",
      target: "_blank"
    }
  ],
  community: [
    {
      title: "Twitter",
      path: "#",
      target: "_blank"
    },
    {
      title: "Telegram",
      path: "#",
      target: "_blank"
    },
    {
      title: "Discord",
      path: "#",
      target: "_blank"
    }
  ]
};
var Features = [
  {
    title: "Selective Curation of Valuable Projects",
    description: "MaxiRuby Launchpad offers meticulously curated projects to provide the community access to the most valuable opportunities. This curation ensures secure and profitable investment opportunities for investors.",
    count: "000000",
    mark: "XXXXXXX"
  },
  {
    title: "Fast and Secure Token Purchase",
    description: "MaxiRuby facilitates swift and secure token purchases through smart contracts and reliable payment methods. Participants can easily acquire tokens with a high level of security.",
    count: "000000",
    mark: "XXXXXXX"
  },
  {
    title: "Accessibility with Low Gas Fees",
    description: "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
    count: "000000",
    mark: "XXXXXXX"
  },
  {
    title: "Community-Centric Interaction",
    description: "MaxiRuby Launchpad fosters interaction between the community, projects, and teams. Users can contribute to project developments, ask questions, and provide feedback. The community plays a pivotal role in the success of projects.",
    count: "000000",
    mark: "XXXXXXX"
  }
];
var Tiers = [
  {
    tier: "bronze",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0"
  },
  {
    tier: "silver",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0"
  },
  {
    tier: "gold",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0"
  },
  {
    tier: "platinum",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0"
  },
  {
    tier: "diamond",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0"
  },
  {
    tier: "blue diamond",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0"
  }
];
var Partners = [
  {
    partner: "brave",
    source: Images.Brave
  },
  {
    partner: "circle",
    source: Images.Circle
  },
  {
    partner: "discord",
    source: Images.Discord
  },
  {
    partner: "google",
    source: Images.Google
  },
  {
    partner: "jump",
    source: Images.Jump
  },
  {
    partner: "lolla",
    source: Images.Lolla
  },
  {
    partner: "magiceden",
    source: Images.MagicEden
  }
];

// app/config/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/config/index.ts"
  );
  import.meta.hot.lastModified = "1691945345602.246";
}

export {
  Image_default,
  Images,
  Features,
  Partners,
  meta_config_exports
};
//# sourceMappingURL=/build/_shared/chunk-QGJQCNHW.js.map

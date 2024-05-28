const DATA = {
  test: {
    implicits: { d6d49f4e3ba7f1a: { name: "# Fire Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
    affixes: {
      "9e0f6beb241c536": { name: "# All Stats", isPercent: !1, level: { 0: [5, 6], 150: [6, 8], 340: [8, 11], 460: [13, 17], 625: [16, 22], 780: [20, 28] } },
      fe509fdbe049591: { name: "# Damage Over Time", isPercent: !0, level: { 0: [0.01, 0.04], 150: [0.04, 0.9], 340: [0.06, 0.12], 460: [0.08, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } },
      a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.014, 0.018], 150: [0.015, 0.025], 340: [0.018, 0.03], 460: [0.021, 0.035], 625: [0.025, 0.045], 780: [0.032, 0.06] } },
      "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
    },
    uniqueEffect: { ec995a0ac8283db: { name: "Lucky Hit: Your damage over time effects have up to a 50% chance to erupt, dealing # damage of the same type to Nearby enemies.", isPercent: !1 } },
  },
  druid: {
    "amulet": {
      "dolmen-stone": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          ea5c74731806acd: { name: "# to Wrath Skills", isPercent: !1, level: { 0: 1, 625: 2, 780: [2, 3] } },
          "2ac3010790a3e3b": { name: "# Nature Magic Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          a32568c23be33ec: { name: "# Resource Generation", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
        },
        uniqueEffect: { "7d7927ae7987a50": { name: "Casting Boulder while Hurricane is active will cause your boulders to rotate around you.", isPercent: !1 } },
      },
    },
    axe: {
      "waxing-gibbous": {
        implicits: { "3c67f92e605b534": { name: "# Damage to Healthy Enemies", isPercent: !0 } },
        affixes: {
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.05, 0.075], 340: [0.07, 0.1], 460: [0.095, 0.135], 625: [0.115, 0.165], 780: [0.165, 0.235] } },
          "3167907d405cfe6": { name: "# Damage to Injured Enemies", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          "0d52c65c0cbda09": { name: "# Spirit On Kill", isPercent: !1, level: {} },
        },
        uniqueEffect: {
          "4f8dcc716f4b05b": {
            name: "Gain Stealth for 2 seconds when killing enemies with Shred. Breaking Stealth with an attack grants Ambush which guarantees Critical Strikes for # seconds.",
            isPercent: !1,
            level: { 0: [1, 2.5] },
          },
        },
      },
      "the-butchers-cleaver": {
        implicits: { "3c67f92e605b534": { name: "# Damage to Healthy Enemies", isPercent: !0 } },
        affixes: {
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "7f67edb50b9841e": {
            name: "# Damage to Crowd Controlled Enemies",
            isPercent: !0,
            level: { 0: [0.015, 0.045], 150: [0.05, 0.01], 340: [0.075, 0.135], 460: [0.11, 0.18], 625: [0.125, 0.225], 780: [0.0175, 0.315] },
          },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "4781e4165646f42": {
            name: "# Critical Strike Chance Against Injured Enemies",
            isPercent: !0,
            level: { 0: [0.015, 0.03], 150: [0.03, 0.06], 340: [0.035, 0.075], 460: [0.045, 0.085], 625: [0.045, 0.105], 780: [0.045, 0.12] },
          },
        },
        uniqueEffect: { a7c037c8e1bc7d3: { name: "Lucky Hit: When you Critically Strike an enemy you have up to a 100% chance to Fear and Slow them by # for 4 seconds.", isPercent: !0, level: { 0: [0.61, 0.75] } } },
      },
    },
    boots: {
      "wildheart-hunger": {
        implicits: { "39f31f7e1838349": { name: "Attacks Reduce Evade's Cooldown by # Seconds", isPercent: !1 } },
        affixes: {
          "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0, level: { 0: [0.09, 0.18], 150: [0.26, 0.41], 340: [0.36, 0.54], 460: [0.51, 0.72], 625: [0.6, 0.9], 780: [0.84, 1.26] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.06], 150: [0.06, 0.135], 340: [0.09, 0.18], 460: [0.135, 0.24], 625: [0.15, 0.3], 780: [0.21, 0.42] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
        },
        uniqueEffect: {
          "1b63c40252d9d2d": {
            name: "When you Shapeshift into a Werewolf or a Werebear, you gain Wildheart for 5 seconds. Wildheart grants you # increased damage every 0.0 seconds, stacking 20 times.",
            isPercent: !1,
          },
        },
      },
    },
    chestarmor: {
      "insatiable-fury": {
        affixes: {
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0, level: { 0: [0.09, 0.18], 150: [0.26, 0.41], 340: [0.36, 0.54], 460: [0.51, 0.72], 625: [0.6, 0.9], 780: [0.84, 0.126] } },
          "1d503ff056eb09a": {
            name: "# Damage Reduction while Fortified",
            isPercent: !0,
            level: { 0: [0.01, 0.014], 150: [0.015, 0.035], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.049, 0.105] },
          },
          "06731ede99c37fc": {
            name: "# Total Armor while in Werebear Form",
            isPercent: !0,
            level: { 0: [0.02, 0.065], 150: [0.075, 0.15], 340: [0.11, 0.2], 460: [0.16, 0.265], 625: [0.185, 0.335], 780: [0.255, 0.465] },
          },
        },
        uniqueEffect: { bb7fad142a0eb1a: { name: "Werebear form is now your true form, and you gain +3 Ranks to all Werebear Skills.", isPercent: !1 } },
      },
      "mad-wolfs-glee": {
        affixes: {
          "24f47b5f1a03086": { name: "# Damage", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.05, 0.075], 340: [0.07, 0.1], 460: [0.095, 0.135], 625: [0.115, 0.165], 780: [0.165, 0.235] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          aa9638aad95e3cf: {
            name: "# Damage Reduction from Poisoned Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] },
          },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
        },
        uniqueEffect: { "47cb4f040824bee": { name: "Werewolf form is now your true form, and you gain +3 Ranks to all Werewolf Skills.", isPercent: !1 } },
      },
    },
    gloves: {
      "unsung-ascetics-wraps": {
        affixes: {
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
          "8e9c43b62349412": { name: "# to Lightning Storm", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } },
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] } },
          b0bc3ea715dca9b: { name: "# to Defiance", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: {
          "10d83213b1375c2": {
            name: "Lightning Storm gains 1 additional strike each times it grows. Lightning Storm Critical Strikes cause lightning to strike twice, dealing # increased damage.",
            isPercent: !0,
            level: { 0: [0.1, 0.2] },
          },
        },
      },
    },
    helm: {
      "vasilys-prayer": {
        affixes: {
          "5ed3beab25f2a5f": { name: "# Damage while Shapeshifted", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0, level: { 0: [0.045, 0.09], 150: [0.13, 0.205], 340: [0.18, 0.27], 460: [0.255, 0.36], 625: [0.3, 0.45], 780: [0.42, 0.63] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "80138a8e286e9f9": { name: "# Lightning Resistance", isPercent: !0, level: { 0: [0.025, 0.055], 150: [0.055, 0.13], 340: [0.08, 0.17], 460: [0.12, 0.225], 625: [0.135, 0.285], 780: [0.19, 0.4] } },
        },
        uniqueEffect: { "13c3beaa08b5095": { name: "Your Earth Skills are now also Werebear Skills and Fortify you for #.", isPercent: !1, level: { 0: [14, 28] } } },
      },
      "tempest-roar": {
        affixes: {
          "5ed3beab25f2a5f": { name: "# Damage while Shapeshifted", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "10ddb17f52f19db": { name: "# Maximum Spirit", isPercent: !1, level: { 0: [3, 5], 150: [3, 6], 340: [4, 8], 460: [4, 9], 625: [5, 11], 780: [5, 13] } },
          "350d6e1c37d908e": { name: "# Poison Resistance", isPercent: !0, level: { 0: [0.025, 0.055], 150: [0.055, 0.13], 340: [0.08, 0.17], 460: [0.12, 0.225], 625: [0.135, 0.285], 780: [0.19, 0.4] } },
        },
        uniqueEffect: { "1d020b9d4f88493": { name: "Lucky Hit: Storm Skills have up to a # chance to grant 4 Spirit. Your base Storm Skills are now also Werewolf Skills", isPercent: !0, level: { 0: [15, 25] } } },
      },
    },
    mace: {
      fleshrender: {
        implicits: { "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0 } },
        affixes: {
          "5ed3beab25f2a5f": { name: "# Damage while Shapeshifted", isPercent: !0, level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          c66e455e18076a5: { name: "# Damage to Poisoned Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "23130cddd1fdbea": { name: "# Core Damage", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.035, 0.06], 340: [0.055, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
          ff55eb4a0db7737: { name: "# to Defensive Skills", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { "3e612187ec18843": { name: "Debilitating Roar and Blood Howl deal # damage to Nearby Poisoned enemies, increased by 10% for every 100 Willpower you have.", isPercent: !1 } },
      },
    },
    pants: {
      "‍storms-companion": {
        affixes: {
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          bc1885ef53ad33c: { name: "# Companion Movement Speed", isPercent: !0, level: { 0: [0.025, 0.07], 150: [0.085, 0.16], 340: [0.12, 0.21], 460: [0.175, 0.28], 625: [0.2, 0.35], 780: [0.28, 0.49] } },
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
          c8905a450fa5bc7: { name: "# to Wolves", isPercent: !1, level: { 0: 2, 340: [2, 3], 625: [3, 4], 780: [4, 5] } },
        },
        uniqueEffect: { cf020bdcdb83b59: { name: "Your Wolf Companions are infused with the power of the storm, dealing Lightning damage and gaining the Storm Howl ability.", isPercent: !1 } },
      },
    },
    ring: {
      "hunters-zenith": {
        implicits: { "001a7af241d1291": { name: "# Lightning Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "5ed3beab25f2a5f": { name: "# Damage while Shapeshifted", isPercent: !0, level: { 0: [0.01, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.08, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } },
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.012, 0.02], 340: [0.013, 0.025], 460: [0.014, 0.03], 625: [0.016, 0.04], 780: [0.018, 0.05] } },
          "76e997c2c495ab4": { name: "# to Heightened Senses", isPercent: !1, level: { 780: [2, 3] } },
          "5aa0fb1431122db": { name: "# to Quickshift", isPercent: !1, level: { 780: [2, 3] } },
        },
        uniqueEffect: {
          "3655fcd1bf4c453": {
            name:
            "Gain a bonus when you kill with a Shapeshifting Skill: Werewolf: Your next Non-Ultimate Werebear Skill costs no Resource and has no Cooldown. Werebear: Your next Werewolf Skill will Heal you for # when damage is first dealt.",
            isPercent: !1,
          },
        },
      },
      earthbreaker: {
        implicits: { "7066ef3c5a2e97f": { name: "# Cold Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "2b20c83902a094f": { name: "# Spirit Cost Reduction", isPercent: !0, level: { 780: [0.095, 0.165] } },
          "16559aa130f4d48": { name: "# Willpower", isPercent: !0, level: { 780: [0.049, 0.105] } },
          "99bada93159b444": { name: "Lucky Hit: Up to a # Chance to Slow", isPercent: !0, level: { 780: [0.13, 0.2] } },
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 780: [0.095, 0.165] } },
        },
        uniqueEffect: {
          "61c9b77517be985": {
            name:
            "Casting Landslide causes tectonic spikes to continue to deal # damage over 2 seconds. Summoning Landslide pillars in tectonic spikes has a # chance to causes extra Landslide pillars to spawn in the spikes.",
            isPercent: [!1, !0],
            level: [{ 0: [90, 135] }, { 0: [0.2, 0.3] }],
          },
        },
      },
      "airidahs-inexorable-will": {
        implicits: { "001a7af241d1291": { name: "# Lightning Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.05, 0.075], 340: [0.07, 0.1], 460: [0.095, 0.135], 625: [0.115, 0.165], 780: [0.165, 0.235] } },
          "16559aa130f4d48": { name: "# Willpower", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.015, 0.035], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.049, 0.105] } },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.014, 0.018], 150: [0.015, 0.025], 340: [0.018, 0.03], 460: [0.021, 0.035], 625: [0.025, 0.045], 780: [0.032, 0.06] } },
          a236e8c091ae840: { name: "# Ultimate Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
        },
        uniqueEffect: {
          "9ce763a545871cf": {
            name: "When casting an Ultimate Skill and again 5 seconds after, you Pull in Distant enemies and deal # Physical damage to them. This damage is increased by 1.0% per 1 point of Willpower you have.",
            isPercent: !1,
          },
        },
      },
    },
    staff: {
      "greatstaff-of-the-crone": {
        implicits: { "7f67edb50b9841e": { name: "# Damage to Crowd Controlled Enemies", isPercent: !0 } },
        affixes: {
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.1, 0.15], 340: [0.14, 0.2], 460: [0.19, 0.27], 625: [0.23, 0.33], 780: [0.33, 0.47] } },
          "7f67edb50b9841e": { name: "# Damage to Crowd Controlled Enemies", isPercent: !0, level: { 0: [0.02, 0.03], 150: [0.03, 0.07], 340: [0.04, 0.1], 460: [0.06, 0.13], 625: [0.07, 0.17], 780: [0.1, 0.24] } },
          "30193a17be5a73c": { name: "# Non-Physical Damage", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          "5d15963a6070749": { name: "# to Claw", isPercent: !1, level: { 780: [4, 6] } },
        },
        uniqueEffect: { "33d9320a1841385": { name: "Claw is now a Storm Skill and also casts Storm Strike at # normal damage.", isPercent: !0, level: { 0: [1.2, 1.5] } } },
      },
    },
  },
  necromancer: {
    amulet: {
      ebonpiercer: {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "2ade1ed95cddd9f": { name: "# Shadow Damage Over Time", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.035, 0.06], 340: [0.055, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
          ad84dcb90afe34d: {
            name: "# Damage Reduction from Shadow Damage Over Time-Affected Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] },
          },
          "5104c8cd613fec3": { name: "# Essence Cost Reduction", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.025, 0.05], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
        },
        uniqueEffect: { "0fb30601a4551e4": { name: "Blight also shoots 4 smaller projectiles that pierce enemies and deal # Shadow damage over 3 seconds.", isPercent: !1 } },
      },
      "deathspeaker_s-pendant": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "5104c8cd613fec3": { name: "# Essence Cost Reduction", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.025, 0.05], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
          a67bae3c7f1a913: { name: "# Summoning Damage", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          "8a711907ce587b7": { name: "# Blood Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          c0fee71983e2e12: { name: "# to Coalesced Blood", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { e22f2d2bdcd4865: { name: "Blood Surge casts a mini nova on your Minions, dealing # damage. Damage is increased by 10% per target drained by the initial cast, up to 50%.", isPercent: !1 } },
      },
    },
    boots: {
      "greaves-of-the-empty-tomb": {
        implicits: { "5be337b5c49348a": { name: "# Max Evade Charge", isPercent: !1 } },
        affixes: {
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "5104c8cd613fec3": { name: "# Essence Cost Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          e79b76558a60ade: { name: "# Shadow Lucky Hit Chance", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          ad84dcb90afe34d: {
            name: "# Damage Reduction from Shadow Damage Over Time-Affected Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] },
          },
        },
        uniqueEffect: { cba81b522af788a: { name: "Create Desecrated Ground beneath your Sever specters as they travel, damaging enemies for # Shadow damage over 2 seconds.", isPercent: !1 } },
      },
    },
    chestarmor: {
      "mutilator-plate": {
        affixes: {
          "16559aa130f4d48": { name: "# Willpower", isPercent: !1, level: { 0: [6, 8], 150: [9, 14], 340: [13, 19], 460: [18, 25], 625: [24, 34], 780: [28, 42] } },
          e5c72b5507a33fa: { name: "# Total Armor", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.035, 0.06], 340: [0.055, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
          "6d4e9c08961ac38": { name: "# Healing Received", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
        },
        uniqueEffect: {
          "584252bfd57358b": {
            name:
            "You are Blood Lanced, and when Blood Lance would deal damage to you, it instead Fortifies you for # of your Maximum Life and has a 5% chance to form a Blood Orb. Blood Lance deals # increased damage.",
            isPercent: [!0, !0],
            level: [{ 0: [0.01, 0.02] }, { 0: [0.1, 0.2] }],
          },
        },
      },
      "blood-artisan_s-cuirass": {
        affixes: {
          ebd8f311e0ed7e2: {
            name: "# Damage for 4 Seconds After Picking Up a Blood Orb",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] },
          },
          e9721cf81974638: { name: "# Blood Orb Healing", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "9605bd92f2e60a8": { name: "# to Bone Spirit", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } },
        },
        uniqueEffect: { "39bae03865a5b30": { name: "When you pick up # Blood Orbs, a free Bone Spirit is spawned, dealing bonus damage based on your current Life percent.", isPercent: !1, level: { 0: [5, 10] } } },
      },
    },
    gloves: {
      "howl-from-below": {
        affixes: {
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.04, 0.08], 780: [0.054, 0.11] } },
          "084d48f01963b74": { name: "# Corpse Attack Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "4ea75d4ea4fff67": {
            name: "Lucky Hit: Up to a # Chance to Stun for 2 Seconds",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
          "222fa44f6c94c6c": {
            name: "Lucky Hit: Up to a # Chance to Fear for 2 Seconds",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] },
          },
        },
        uniqueEffect: {
          "6dee07bff314b2c": {
            name: "Instead of detonating immediately, Corpse Explosion summons a Volatile Skeleton that charges at a random enemy and explodes. Corpse Explosion's damage is increased by #.",
            isPercent: !0,
            level: { 0: [0.3, 0.4] },
          },
        },
      },
      "cruors-embrace": {
        affixes: {
          "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0, level: { 0: [0.045, 0.09], 150: [0.13, 0.205], 340: [0.18, 0.27], 460: [0.255, 0.36], 625: [0.3, 0.45], 780: [0.42, 0.63] } },
          "23130cddd1fdbea": { name: "# Core Damage", isPercent: !0, level: { 0: [0.01, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.08, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } },
          "9bd2642fcef5f4e": { name: "Lucky Hit: Up to a 5% Chance to Heal # Life", isPercent: !1, level: {} },
          "07ada23388f308a": { name: "# to Blood Surge", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } },
        },
        uniqueEffect: {
          "652f4c3fb7348c7": {
            name:
            "Blood Surge consumes Corpses to cause mini novas, dealing # damage. Damage is increased by 10% per target drained by the initial cast, up to 50%. Damage is also increased by 20% for each Corpse consumed.",
            isPercent: !1,
          },
        },
      },
    },
    helm: {
      "deathless-visage": {
        affixes: {
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "6a7427045506e83": { name: "# Bone Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.09], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          db985db3af0f851: { name: "# Maximum Essence", isPercent: !1, level: { 0: [3, 5], 150: [3, 6], 340: [4, 8], 460: [4, 9], 625: [5, 11], 780: [5, 13] } },
        },
        uniqueEffect: { "61ea5837e3ef061": { name: "Bone Spear leaves behind echoes as it travels that explode, dealing # damage, increased by 5% for every 30% of your Critical Strike Damage Bonus.", isPercent: !1 } },
      },
    },
    pants: {
      "blood-moon-breeches": {
        affixes: {
          "2b6298b4bd2b670": { name: "# Damage Reduction from Enemies Affected by Curse Skills", isPercent: !0, level: { 780: [0.044, 0.086] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "3d4ead530a9a666": { name: "# to Amplify Damage", isPercent: !0, level: { 780: 1 } },
          ae094a4f9612372: { name: "# to Curse Skills", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: {
          "7265281585a1358": {
            name: "Your Minions have a # chance to curse enemies. Enemies affected by at least 1 of your curses take 70% increased Overpower damage from you.",
            isPercent: !0,
            level: { 0: [0.03, 0.07] },
          },
        },
      },
    },
    ring: {
      "ring-of-the-sacrilegious-soul": {
        implicits: { "350d6e1c37d908e": { name: "# Poison Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          a0171a402392f3b: { name: "# to Corpse Skills", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 780: [0.048, 0.09] } },
          db985db3af0f851: { name: "# Maximum Essence", isPercent: !1, level: { 0: [1, 2], 150: [1, 3], 340: [1, 4], 460: [2, 5], 625: [3, 7], 780: [3, 9] } },
        },
        uniqueEffect: {
          "026fe7c12f05f0a": {
            name: "You automatically activate the following equipped Skills on Corpses around you: Raise Skeleton every # seconds. Corpse Explosion every # seconds. Corpse Tendrils every # seconds.",
            isPercent: [!1, !1, !1],
            level: [{ 0: [1, 2] }, { 0: [1, 2] }, { 0: [16, 18] }],
          },
        },
      },
      "ring-of-mendeln": {
        implicits: { "2ab341c922541be": { name: "# Shadow Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.014, 0.018], 150: [0.015, 0.025], 340: [0.018, 0.03], 460: [0.021, 0.035], 625: [0.025, 0.045], 780: [0.032, 0.06] } },
          bda573ac01fc419: { name: "# Minion Attack Speed", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "59256d10f1371c6": { name: "# Maximum Minion Life", isPercent: !0, level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.085, 0.145], 460: [0.11, 0.19], 625: [0.13, 0.23], 780: [0.175, 0.315] } },
          "28d9abe06efb295": { name: "# Thorns", isPercent: !1, level: {} },
        },
        uniqueEffect: { b9a5d5a268325852b6cb: { name: "Every 6th attack from each Minion is empowered, exploding for # Physical damage.", isPercent: !1 } },
      },
    },
    scythe: {
      "black-river": {
        implicits: { "45d64a116f7c9aa": { name: "# Life On Kill", isPercent: !1 } },
        affixes: {
          "65303546e5ff2b4": { name: "# Intelligence", isPercent: !1, level: { 0: [8, 10], 150: [12, 17], 340: [20, 23], 460: [24, 31], 625: [32, 42], 780: [38, 52] } },
          bb213676dbfefab: { name: "# to Hewed Flesh", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
          a0171a402392f3b: { name: "# to Corpse Skills", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 3] } },
          "94691c6fd884826": { name: "# to Fueled by Death", isPercent: !1, level: { 780: 1 } },
        },
        uniqueEffect: {
          "777f0ed9c0d36f5": {
            name: "Corpse Explosion consumes up to 4 additional Corpses around the initial Corpse, dealing # increased damage and with a # larger radius per additional Corpse.",
            isPercent: [!0, !0],
            level: [{ 0: [1.22, 1.3] }, { 0: [0.21, 0.25] }],
          },
        },
      },
    },
    shield: {
      "lidless-wall": {
        implicits: {
          a2c6dc2e30ca2dc: { name: "# Blocked Damage Reduction", isPercent: !0 },
          "81c307b8f9af783": { name: "# Block Chance", isPercent: !0 },
          "628940abb250489": { name: "# Main Hand Weapon Damage", isPercent: !0 },
          "28d9abe06efb295": { name: "# Thorns", isPercent: !1 },
        },
        affixes: {
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
          db985db3af0f851: { name: "# Maximum Essence", isPercent: !1, level: { 0: [3, 5], 150: [3, 6], 340: [4, 8], 460: [4, 9], 625: [5, 11], 780: [5, 13] } },
        },
        uniqueEffect: {
          "36af0c634f5d0ab": {
            name:
            "Lucky Hit: While you have an active Bone Storm, hitting an enemy outside of a Bone Storm has up to a # chance to spawn an additional Bone Storm at their location. Each of your active Sacrifice bonuses increase the chance by 25% and the total additional Bone Storms you can have by +1.",
            isPercent: !0,
          },
        },
      },
    },
    twohandedscythe: {
      "bloodless-scream": {
        implicits: { "45d64a116f7c9aa": { name: "# Life On Kill", isPercent: !1 } },
        affixes: {
          "8161e98aa822fde": { name: "# Darkness Damage", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          a02e2533fa98145: { name: "# Damage to Chilled Enemies", isPercent: !0, level: { 0: [0.01, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.08, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } },
          "65303546e5ff2b4": { name: "# Intelligence", isPercent: !1, level: { 0: [16, 20], 150: [24, 34], 340: [40, 46], 460: [48, 62], 625: [64, 84], 780: [76, 104] } },
          "7066ef3c5a2e97f": { name: "# Cold Resistance", isPercent: !0, level: { 780: [0.38, 0.8] } },
        },
        uniqueEffect: {
          ba102345cc840ff: {
            name:
            "Your Darkness Skills Chill enemies for up to 100% and deal # increased damage to Frozen enemies. Lucky Hit: Your Darkness Skills have up to a 100% chance to generate # additional Essence against Frozen targets.",
            isPercent: [!0, !0],
            level: [{ 0: [0.2, 0.5] }, { 0: [7, 10] }],
          },
        },
      },
    },
  },
  rogue: {
    amulet: {
      "word-of-hakan": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          d1317948f16ff95: { name: "# Rain of Arrows Cooldown Reduction", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.09], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "0a64f0986bfec4d": { name: "# Ultimate Damage", isPercent: !0, level: { 0: [0.045, 0.09], 150: [0.13, 0.205], 340: [0.18, 0.27], 460: [0.255, 0.36], 625: [0.3, 0.45], 780: [0.42, 0.63] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "3b59fa883920344": { name: "# to Imbuement Skills", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { "0ea50527793ec07": { name: "Your Rain of Arrows is always Imbued with all Imbuements at once.", isPercent: !1 } },
      },
    },
    boots: {
      "beastfall-boots": {
        implicits: { "5be337b5c49348a": { name: "# Max Evade Charge", isPercent: !1 } },
        affixes: {
          "563ca246db453c3": { name: "# Maximum Energy", isPercent: !1, level: { 780: [15, 20] } },
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
        },
        uniqueEffect: {
          "33b3f3187bccb08": {
            name: "When you cast an Ultimate Skill, your next Core Skill consumes all of your Energy and deals # increased damage per Energy consumed. Using a Cooldown restores 5 Energy.",
            isPercent: !0,
            level: { 0: [0.005, 0.015] },
          },
        },
      },
    },
    bow: {
      windforce: {
        implicits: { adb02dbd9a7ba2c: { name: "# Damage to Distant Enemies", isPercent: !0 } },
        affixes: {
          "6b08d8d00e3edbc": { name: "# Vulnerable Damage", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.04, 0.12], 340: [0.11, 0.17], 460: [0.15, 0.22], 625: [0.18, 0.28], 780: [0.25, 0.39] } },
          "23130cddd1fdbea": { name: "# Core Damage", isPercent: !0, level: { 780: [0.28, 0.56] } },
          a3ecbe6fff3ea65: { name: "# to Concussive", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
          cb9649a75a55229: { name: "# to Impetus", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { "7b2f44542fd0de4": { name: "Lucky Hit: Hits with this weapon have up to a # chance to deal double damage and Knock Back the target.", isPercent: !0, level: { 0: [0.3, 0.4] } } },
      },
      skyhunter: {
        implicits: { ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0 } },
        affixes: {
          "36b12236210e596": { name: "# Dexterity", isPercent: !1, level: { 780: [38, 52] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.06], 150: [0.06, 0.135], 340: [0.09, 0.18], 460: [0.085, 0.24], 625: [0.15, 0.3], 780: [0.21, 0.42] } },
          "3b0bbf691067a02": { name: "# Marksman Damage", isPercent: !0, level: { 0: [0.01, 0.025], 150: [0.0325, 0.0575], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          a95ef05d669078f: { name: "# to Exploit", isPercent: !1, level: { 780: [0.5, 1] } },
        },
        uniqueEffect: {
          "55c38fb99468951": {
            name:
            "The first direct damage you deal to an enemy is a guaranteed Critical Strike. When you consume stacks of Precision casting a Skill, that Skill gains #[x] increased Critical Strike Damage and you gain # Energy.",
            isPercent: [!0, !1],
            level: [{ 0: [0.2, 0.4] }, { 0: [30, 50] }],
          },
        },
      },
      eaglehorn: {
        implicits: { adb02dbd9a7ba2c: { name: "# Damage to Distant Enemies", isPercent: !0 } },
        affixes: {
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 780: [0.036, 0.1] } },
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          "6b08d8d00e3edbc": { name: "# Vulnerable Damage", isPercent: !0, level: { 780: [0.25, 0.39] } },
          "7537136e2d99b55": { name: "# Damage to Elites", isPercent: !0, level: { 780: [0.35, 0.47] } },
        },
        uniqueEffect: {
          "55c38fb99468951": {
            name: "Penetrating Shot makes enemies hit Vulnerable for 3 seconds. Every 4 casts of Penetrating Shot will fire an arrow that bounces off walls and scenery and deals # more damage.",
            isPercent: !0,
            level: { 0: [0.4, 0.6] },
          },
        },
      },
    },
    chestarmor: {
      "scoundrels-leathers": {
        affixes: {
          "920ba08cb229d17": {
            name: "# Damage to Enemies Affected by Trap Skills",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
          "68972b90a58464e": {
            name: "# Damage Reduction from Enemies Affected by Trap Skills",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] },
          },
          ee0ad80f560ab2d: { name: "# Trap Damage", isPercent: !0, level: { 780: [0.42, 0.7] } },
          "0c0c18bd42b416f": { name: "# Dodge Chance", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
        },
        uniqueEffect: {
          f359e08e239e3c3: { name: "While you have unlimited Energy from Inner Sight, casting a Core Skill has a # chance to spawn Caltrops, Poison Trap, or Death Trap.", isPercent: !0, level: { 0: [0.6, 0.8] } },
        },
      },
    },
    dagger: {
      condemnation: {
        implicits: { e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0 } },
        affixes: {
          "43b2fb5bd688121": { name: "# Basic Attack Speed", isPercent: !0, level: { 0: [0.035, 0.065], 150: [0.065, 0.14], 340: [0.095, 0.185], 460: [0.135, 0.24], 625: [0.145, 0.295], 780: [0.185, 0.395] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "89d2456cb2c7d8a": {
            name: "# Damage with Dual-Wielded Weapons",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] },
          },
          "23130cddd1fdbea": { name: "# Core Damage", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.035, 0.06], 340: [0.055, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
        },
        uniqueEffect: {
          c6c40e80685fa89: {
            name: "Your Core Skills deal # increased damage when spending 3 Combo Points. Your Basic Skills using this weapon have a 30% chance to generate 3 Combo Points.",
            isPercent: !0,
            level: { 0: [0.2, 0.4] },
          },
        },
      },
      "ashearas-khanjar": {
        implicits: { e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0 } },
        affixes: {
          bca86006384f5c4: { name: "# Basic Damage", isPercent: !0, level: { 0: [0.035, 0.065], 150: [0.065, 0.14], 340: [0.095, 0.185], 460: [0.135, 0.24], 625: [0.145, 0.295], 780: [0.185, 0.395] } },
          "7f67edb50b9841e": {
            name: "# Damage to Crowd Controlled Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] },
          },
          "71c2f32dbe76858": {
            name: "# Movement Speed for 4 Seconds After Killing an Elite",
            isPercent: !0,
            level: { 0: [0.01, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.08, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] },
          },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.04, 0.08], 780: [0.054, 0.11] } },
        },
        uniqueEffect: { "9ca02c2b93eae87": { name: "Hits with this weapon increase your Attack Speed by # for 4 seconds, up to #.", isPercent: [!0, !0], level: [{ 0: [0.04, 0.06] }, { 0: [0.2, 0.3] }] } },
      },
    },
    gloves: {
      "grasp-of-shadow": {
        affixes: {
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "36b12236210e596": { name: "# Dexterity", isPercent: !1, level: { 0: [6, 8], 150: [9, 14], 340: [13, 19], 460: [18, 25], 625: [24, 34], 780: [28, 42] } },
          "3a5bcc84ffe3d98": { name: "# Shadow Clone Damage", isPercent: !0, level: { 780: [0.315, 0.525] } },
          "3deca3f217d39aa": { name: "# to Core Skills", isPercent: !1, level: { 780: [3, 4] } },
        },
        uniqueEffect: {
          "5ccd8fbfac50ab5": {
            name: "Lucky Hit: Damaging a Vulnerable enemy with a Marksman or Cutthroat Skill has up to a # chance to summon a Shadow Clone that mimics your attack.",
            isPercent: !0,
            level: { 0: [0.24, 0.34] },
          },
        },
      },
    },
    helm: {
      "cowl-of-the-nameless": {
        affixes: {
          "7b402a7ac6988ab": { name: "# Damage Reduction from Close Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          fbcfe26ea77a0d3: { name: "# Crowd Control Duration", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
          "3b59fa883920344": { name: "# to Imbuement Skills", isPercent: !1, level: { 780: [2, 3] } },
        },
        uniqueEffect: { "661223f52b28cc4": { name: "You gain # increased Lucky Hit Chance against Crowd Controlled enemies.", isPercent: !0, level: { 0: [0.15, 0.25] } } },
      },
    },
    pants: {
      "eyes-in-the-dark": {
        affixes: {
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
          "1697003a091afde": { name: "# Shadow Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "920ba08cb229d17": {
            name: "# Damage to Enemies Affected by Trap Skills",
            isPercent: !0,
            level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] },
          },
        },
        uniqueEffect: {
          e8924850e677c50: { name: "Death Trap deals # increased damage. Unless it hits a Boss or Player, Death Trap will continue to re-arm itself until it kills an enemy.", isPercent: !0, level: { 0: [0.5, 0.7] } },
        },
      },
    },
    ring: {
      "writhing-band-of-trickery": {
        implicits: { "2ab341c922541be": { name: "# Shadow Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.012, 0.02], 340: [0.013, 0.025], 460: [0.014, 0.03], 625: [0.016, 0.04], 780: [0.018, 0.05] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "7f67edb50b9841e": {
            name: "# Damage to Crowd Controlled Enemies",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] },
          },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
        },
        uniqueEffect: {
          "07fdcc824604033": {
            name: "Casting a Subterfuge Skill leaves behind a Decoy Trap that continuously Taunts and lures enemies. The Decoy Trap explodes after 3 seconds dealing # Shadow damage. Can occur every 10 seconds.",
            isPercent: !1,
          },
        },
      },
      "scoundrels-kiss": {
        implicits: { "350d6e1c37d908e": { name: "# Poison Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.012, 0.02], 340: [0.013, 0.025], 460: [0.014, 0.03], 625: [0.016, 0.04], 780: [0.018, 0.05] } },
          ed7c4b5eb4a7a5f: { name: "# to Rapid Fire", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } },
          "4b9152762c9cb1b": { name: "# Imbuement Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          "57cbbb82465c412": { name: "# Attack Speed for 4 seconds after Dodging an Attack", isPercent: !0, level: { 780: [0.095, 0.165] } },
        },
        uniqueEffect: { "214a91fa0e6dd43": { name: "Rapid Fire now lobs exploding arrows that deal # increased damage.", isPercent: !0, level: { 0: [0.15, 0.25] } } },
      },
      "saboteurs-signet": {
        implicits: { "2ab341c922541be": { name: "# Shadow Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "7f67edb50b9841e": {
            name: "# Damage to Crowd Controlled Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] },
          },
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
        },
        uniqueEffect: {
          a90780e90757315: {
            name: "Casting Flurry has a # chance to release Stun Grenades that deal # Physical damage and Stun enemies for 1.00 second.",
            isPercent: [!0, !1],
            level: [{ 0: [0.15, 0.3] }, { 0: [128, 150] }],
          },
        },
      },
    },
  },
  sorcerer: {
    amulet: {
      "fractured-winterglass": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          "30193a17be5a73c": { name: "# Non-Physical Damage", isPercent: !0, level: { 780: [0.19, 0.26] } },
          "709eb470c5201a3": { name: "# to Conjuration Mastery", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
          "6b08d8d00e3edbc": { name: "# Vulnerable Damage", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.06], 340: [0.55, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
        },
        uniqueEffect: {
          bcca66dd350f876: {
            name: "Casting Frozen Orb has a # chance to spawn a random Conjuration when it explodes. Lucky Hit: Your Conjurations have up to a # chance to launch a Frozen Orb at Nearby enemies.",
            isPercent: [!0, !0],
            level: [{ 0: [0.35, 0.5] }, { 0: [0.5, 0.7] }],
          },
        },
      },
      "esadoras-overflowing-cameo": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          f8e1ba999557741: { name: "# Crackling Energy Damage", isPercent: !0, level: { 0: [0.015, 0.06], 150: [0.06, 0.135], 340: [0.09, 0.18], 460: [0.135, 0.24], 625: [0.15, 0.3], 780: [0.21, 0.42] } },
          "7d479121a4822c6": { name: "# to Shocking Impact", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
        },
        uniqueEffect: {
          aa9180d3ca54964: {
            name: "Upon collecting Crackling Energy, there's a 15% chance to release a lightning nova, dealing # Lightning damage, increased by 50% for every 100 Intelligence you have.",
            isPercent: !1,
          },
        },
      },
    },
    boots: {
      "esus-heirloom": {
        implicits: { f115d2ddae4ef84: { name: "Evade Grants # Movement Speed for 1 Second", isPercent: !0 } },
        affixes: {
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "71c2f32dbe76858": {
            name: "# Movement Speed for 4 Seconds After Killing an Elite",
            isPercent: !0,
            level: { 0: [0.01, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.08, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] },
          },
          "8e2b925d6f94a42": { name: "# Mana Cost Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
        },
        uniqueEffect: { "04cb105bb050423": { name: "Your Critical Strike Chance is increased by # of your Movement Speed bonus.", isPercent: !0, level: { 0: [0.2, 0.3] } } },
      },
    },
    chestarmor: {
      "raiment-of-the-infinite": {
        affixes: {
          "65303546e5ff2b4": { name: "# Intelligence", isPercent: !1, level: { 0: [6, 8], 150: [9, 14], 340: [13, 19], 460: [18, 25], 625: [24, 34], 780: [28, 42] } },
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.05, 0.075], 340: [0.07, 0.1], 460: [0.095, 0.135], 625: [0.115, 0.165], 780: [0.165, 0.235] } },
          "175715233ddc2dc": { name: "# Damage to Stunned Enemies", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.05, 0.075], 340: [0.07, 0.1], 460: [0.095, 0.135], 625: [0.115, 0.165], 780: [0.165, 0.235] } },
          c840edf77885f7a: { name: "# to Glass Cannon", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { "72f141864378841": { name: "After using Teleport, Close enemies are Pulled to you and Stunned for # seconds, but Teleport's Cooldown is increased by 20%.", isPercent: !1, level: { 0: [2, 3] } } },
      },
    },
    gloves: {
      "gloves-of-the-illuminator": {
        affixes: {
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] } },
          "716c5087d21d569": { name: "# Fireball Attack Speed", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.015, 0.03], 150: [0.04, 0.065], 340: [0.06, 0.09], 460: [0.08, 0.115], 625: [0.095, 0.145], 780: [0.13, 0.2] },
          },
          "4b04c6b9a924241": { name: "# to Fireball", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } },
        },
        uniqueEffect: { "62fa3a077ca37a3": { name: "Fireball now bounces as it travels, exploding each time it hits the ground, but its explosion deals # less damage.", isPercent: !0, level: { 0: [0.25, 0.35] } } },
      },
      flameweaver: {
        affixes: {
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "9de383d905522aa": { name: "# Damage to Burning Enemies", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          fb54beee4438c55: { name: "# to Fire Bolt", isPercent: !1, level: { 780: [2, 3] } },
          "928968ae59cbed4": { name: "# to Devouring Blaze", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { "7270017c41db8c4": { name: "Casting Fire Bolt through your Firewall causes it to split into 3 bolts, each dealing # more damage.", isPercent: !0, level: { 0: [0.3, 0.7] } } },
      },
    },
    helm: {
      "starfall-coronet": {
        affixes: {
          "6ba47d6e9810b98": { name: "# to Meteor", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } },
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
        },
        uniqueEffect: {
          d693e3352f8238f: {
            name:
            "Meteor now has 2 charges with a # second Charge Cooldown instead of a Mana cost, and drops 3 additional meteors around the target. Meteor's Enchantment Effect and Enhanced Meteor drop 1 additional meteor.",
            isPercent: !1,
            level: { 0: [6, 11] },
          },
        },
      },
    },
    pants: {
      "iceheart-brais": {
        affixes: {
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "6f899d4e3f71a7b": { name: "# Damage to Frozen Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.025, 0.05], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } },
          cd2d189b5acbf5f: { name: "# Freeze Reduction", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
        },
        uniqueEffect: { cdce1cb8e6775b6: { name: "Enemies that die while Frozen have a # chance to unleash a Frost Nova.", isPercent: !0, level: { 0: [0.21, 0.3] } } },
      },
    },
    ring: {
      "tal-rashas-iridescent-loop": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "30193a17be5a73c": { name: "# Non-Physical Damage", isPercent: !0, level: { 0: [0.025, 0.035], 150: [0.045, 0.07], 340: [0.08, 0.11], 460: [0.105, 0.14], 625: [0.13, 0.18], 780: [0.19, 0.26] } },
          a32568c23be33ec: { name: "# Resource Generation", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.014, 0.018], 150: [0.015, 0.025], 340: [0.018, 0.03], 460: [0.021, 0.035], 625: [0.025, 0.045], 780: [0.032, 0.06] } },
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
        },
        uniqueEffect: {
          "7f97ef790bf18b1": {
            name: "For each type of Elemental damage you deal, gain # increased damage for 4 seconds, up to #. Dealing Elemental damage refreshes all bonuses.",
            isPercent: [!0, !0],
            level: { 0: [0.1, 0.15] },
          },
        },
      },
      "blue-rose": {
        implicits: { "7066ef3c5a2e97f": { name: "# Cold Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.014, 0.018], 150: [0.015, 0.025], 340: [0.018, 0.03], 460: [0.021, 0.035], 625: [0.025, 0.045], 780: [0.032, 0.06] } },
          "0e4d6f43694d3a8": { name: "# Ice Spike Damage", isPercent: !0, level: { 0: [0.015, 0.06], 150: [0.06, 0.135], 340: [0.09, 0.18], 460: [0.135, 0.24], 625: [0.15, 0.3], 780: [0.21, 0.42] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "8e2b925d6f94a42": { name: "# Mana Cost Reduction", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.025, 0.05], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
        },
        uniqueEffect: { bf93abb48895b89: { name: "Lucky Hit: Damaging an enemy has up to a 30% chance to form an exploding Ice Spike, dealing # Cold damage. Triple this chance if the enemy is Frozen.", isPercent: !1 } },
      },
    },
    staff: {
      "staff-of-lam-esen": {
        implicits: { "7f67edb50b9841e": { name: "# Damage to Crowd Controlled Enemies", isPercent: !0 } },
        affixes: {
          b9885fed26fcb4c: { name: "# Lightning Damage", isPercent: !0, level: { 0: [0.01, 0.025], 150: [0.0325, 0.0575], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "5c95139ec7051ee": { name: "# to Charged Bolts", isPercent: !1, level: { 780: [2, 3] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.45, 0.07], 340: [0.06, 0.09], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.005, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.04, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
        },
        uniqueEffect: { "2ab5b4dda9902ce": { name: "Your casts of Charged Bolts have a # chance to be attracted to enemies and last 300% longer.", isPercent: !0, level: { 0: [0.4, 0.6] } } },
      },
      "staff-of-endless-rage": {
        implicits: { "7f67edb50b9841e": { name: "# Damage to Crowd Controlled Enemies", isPercent: !0 } },
        affixes: {
          "78d354819651322": { name: "# to Core Damage", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.07, 0.12], 340: [0.11, 0.17], 460: [0.15, 0.22], 625: [0.18, 0.28], 780: [0.25, 0.39] } },
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.1, 0.15], 340: [0.14, 0.2], 460: [0.19, 0.26], 625: [0.23, 0.33], 780: [0.33, 0.47] } },
          cf3bb8b9d611f20: { name: "# Fire Damage", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          d0bf14043123580: { name: "# to Inner Flames", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
        },
        uniqueEffect: { "65a2e0577bcb22b": { name: "Every 3rd cast of Fireball launches 2 additional projectiles and deals # increased damage.", isPercent: !0, level: { 0: [0.2, 0.4] } } },
      },
    },
    wand: {
      "the-oculus": {
        implicits: { a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0 } },
        affixes: {
          fca7cf9fc6e0d885: { name: "# Maximum Evade Charges", isPercent: !1, level: { 780: 2 } },
          "39f31f7e1838349": { name: "Attacks Reduce Evade's Cooldown by # Seconds", isPercent: !1, level: { 780: [0.6, 0.8] } },
          "24f47b5f1a03086": { name: "# Damage", isPercent: !0, level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.085, 0.145], 460: [0.11, 0.19], 625: [0.13, 0.23], 780: [0.175, 0.315] } },
          "13f00236f05d2fa": { name: "# to Teleport", isPercent: !1, level: { 780: [5, 10] } },
        },
        uniqueEffect: { "84b303bc88e31bf": { name: "Gain the effect of the Teleport Enchantment for free. When you Evade using Teleport Enchantment you are taken to a random location.", isPercent: !1 } },
      },
      flamescar: {
        implicits: { a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0 } },
        affixes: {
          "9de383d905522aa": { name: "# Damage to Burning Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "8e2b925d6f94a42": { name: "# Mana Cost Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          "5f6297ebb9bc1a2": { name: "# Fire Lucky Hit Chance", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          c2ae821f9971e96: { name: "# to Incinerate", isPercent: !1, level: { 0: 2, 340: [2, 3], 625: [3, 4], 780: [4, 5] } },
        },
        uniqueEffect: { d0703dc88e6f8c0: { name: "While Channeling Incinerate, you periodically shoot embers that are attracted to enemies, each dealing # Fire damage.", isPercent: !1 } },
      },
    },
  },
  nonClassSpecific: {
    amulet: {
      "banished-lords-talisman": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          a32568c23be33ec: { name: "# Resource Generation", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
          "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0, level: { 0: [0.015, 0.06], 150: [0.06, 0.135], 340: [0.09, 0.18], 460: [0.135, 0.24], 625: [0.15, 0.3], 780: [0.21, 0.42] } },
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.012, 0.02], 340: [0.013, 0.025], 460: [0.014, 0.03], 625: [0.016, 0.04], 780: [0.018, 0.05] } },
          "3deca3f217d39aa": { name: "# to Core Skills", isPercent: !1, level: { 0: [1] } },
        },
        uniqueEffect: {
          ee03d0e78152dbd: {
            name: "After you spend 300 of your Primary Resource, your next Core Skill is guaranteed to Overpower. Your Critical Strikes that Overpower deal # increased damage.",
            isPercent: !0,
            level: { 0: [0.8, 1.2] },
          },
        },
      },
    },
    boots: {
      "yens-blessing": {
        implicits: { "5be337b5c49348a": { name: "# Max Evade Charge", isPercent: !0 } },
        affixes: {
          "7b402a7ac6988ab": { name: "# Damage Reduction from Close Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "6b08d8d00e3edbc": { name: "# Vulnerable Damage", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.06], 340: [0.55, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.015, 0.03], 150: [0.04, 0.065], 340: [0.06, 0.09], 460: [0.08, 0.115], 625: [0.095, 0.145], 780: [0.13, 0.2] },
          },
        },
        uniqueEffect: {
          e8ccf37c8ac1ca8: {
            name: "Casting a Skill has a # chance to cast a Non-Mobility, Non-Ultimate Skill that is currently on Cooldown. This effect can only occur once every 8 seconds.",
            isPercent: !0,
            level: { 0: [0.4, 0.6] },
          },
        },
      },
      "penitent-greaves": {
        implicits: { f115d2ddae4ef84: { name: "Evade Grants # Movement Speed for 1 Second", isPercent: !0 } },
        affixes: {
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          fbcfe26ea77a0d3: { name: "# Crowd Control Duration", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
          "32b73b9dc615cc6": { name: "# Slow Duration Reduction", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.04, 0.065], 340: [0.06, 0.09], 460: [0.08, 0.115], 625: [0.095, 0.145], 780: [0.13, 0.2] } },
          "7066ef3c5a2e97f": { name: "# Cold Resistance", isPercent: !0, level: { 0: [0.025, 0.055], 150: [0.055, 0.13], 340: [0.08, 0.17], 460: [0.12, 0.225], 625: [0.135, 0.285], 780: [0.19, 0.4] } },
        },
        uniqueEffect: { "0b023455f168486": { name: "You leave behind a trail of frost that Chills enemies. You deal # more damage to Chilled enemies.", isPercent: !0, level: { 0: [0.12, 0.15] } } },
      },
      flickerstep: {
        implicits: { f115d2ddae4ef84: { name: "Evade Grants # Movement Speed for 1 Second", isPercent: !0 }, f569624a8d303f0d: { name: "Attacks Reduce Evade's Colldown by 1.5 Seconds", isPercent: !0 } },
        affixes: {
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "9e0f6beb241c536": { name: "# All Stats", isPercent: !1, level: { 0: [3, 4], 150: [4, 6], 340: [5, 8], 460: [6, 10], 625: [8, 14], 780: [10, 18] } },
          "7b402a7ac6988ab": { name: "# Damage Reduction from Close Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "0a64f0986bfec4d": { name: "# Ultimate Damage", isPercent: !0, level: { 0: [0.03, 0.075], 150: [0.095, 0.17], 340: [0.135, 0.225], 460: [0.195, 0.3], 625: [0.225, 0.375], 780: [0.315, 0.525] } },
        },
        uniqueEffect: { "0b023455f168486": { name: "Each enemy you Evade through reduces your active Ultimate Cooldown by # seconds, up to 10 seconds.", isPercent: !1, level: { 0: [2, 4] } } },
      },
    },
    chestarmor: {
      soulbrand: {
        affixes: {
          f82f34f95b3a555: {
            name: "# Lucky Hit Chance while You Have a Barrier",
            isPercent: !0,
            level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] },
          },
          "41125ed8ac25ad1": { name: "# Barrier Generation", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "7b402a7ac6988ab": { name: "# Damage Reduction from Close Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
        },
        uniqueEffect: {
          "804ebaf0bab52be425": {
            name: "Your Healing Potion no longer Heals instantly, instead it grants a Barrier for 200% of the healing for 4 seconds. While you have a Barrier, you gain # Damage Reduction.",
            isPercent: !0,
            level: { 0: [0.1, 0.2] },
          },
        },
      },
      razorplate: {
        affixes: { "28d9abe06efb295": { name: "# Thorns", isPercent: !1, level: {}, amounts: 4 } },
        uniqueEffect: { "0d3bfb0c3a95df7": { name: "Thorns has a 10% chance to deal # increased damage. ", isPercent: !1 } },
      },
    },
    gloves: {
      "paingorgers-gauntlets": {
        affixes: {
          bca86006384f5c4: { name: "# Basic Damage", isPercent: !0, level: { 0: [0.035, 0.065], 150: [0.065, 0.14], 340: [0.095, 0.185], 460: [0.135, 0.24], 625: [0.145, 0.295], 780: [0.185, 0.395] } },
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "9e0f6beb241c536": { name: "# All Stats", isPercent: !1, level: { 0: [3, 4], 150: [4, 6], 340: [5, 8], 460: [6, 10], 625: [8, 14], 780: [10, 18] } },
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] } },
        },
        uniqueEffect: {
          fe1cbf6630f1e71: {
            name:
            "Damaging enemies with a Non-Basic Skill cast marks them for 3 seconds. When a Basic Skill first hits a marked enemy, the Basic Skill's damage is echoed to all marked enemies, dealing # increased damage.",
            isPercent: !0,
            level: { 0: [1, 2] },
          },
        },
      },
      frostburn: {
        affixes: {
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] } },
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "78d283b49cda48a": { name: "# Freeze Duration", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.04, 0.065], 340: [0.06, 0.09], 460: [0.08, 0.115], 625: [0.095, 0.145], 780: [0.13, 0.2] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
        },
        uniqueEffect: { "8a834904072c91e": { name: "Lucky Hit: Up to a # chance to Freeze enemies for 2 seconds.", isPercent: !0, level: { 0: [0.15, 0.25] } } },
      },
      "fists-of-fate": {
        affixes: {
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
          e3d03a5babac097: {
            name: "Lucky Hit: Up to a # Chance to Immobilize for 2 Seconds",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] },
          },
          bd9c3313b261d05: {
            name: "Lucky Hit: Up to a #% Chance to Gain #% Damage for 6 Seconds",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] },
          },
          "780f7e8ff3bf3eb": {
            name: "Lucky Hit: Up to a # Chance to Daze for 2 Seconds",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] },
          },
        },
        uniqueEffect: { b52009a8fc3c83a: { name: "Your attacks randomly deal 1% to # of their normal damage.", isPercent: !0, level: { 0: [2, 3] } } },
      },
    },
    helm: {
      "godslayer-crown": {
        affixes: {
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          fbcfe26ea77a0d3: { name: "# Crowd Control Duration", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "24f47b5f1a03086": { name: "# Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
        },
        uniqueEffect: {
          "9a2d78f55198a13": {
            name:
            "When you Stun, Freeze, or Immobilize an Elite enemy, or damage a Boss, it Pulls In Nearby enemies. You deal # increased damage to them for 3 seconds. This effect can only occur once every 12 seconds.",
            isPercent: !0,
            level: { 0: [0.3, 0.6] },
          },
        },
      },
    },
    pants: {
      "tibaults-will": {
        affixes: {
          "24f47b5f1a03086": { name: "# Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          add0815eb556472: { name: "# Potion Capacity", isPercent: !1, level: { 0: [1, 2], 350: [1, 3], 780: [2, 3] } },
          "29f0a2362453ea1": { name: "# Maximum Resource", isPercent: !1, level: { 0: [3, 5], 150: [3, 6], 340: [4, 8], 460: [4, 9], 625: [5, 11], 780: [5, 13] } },
          "7b402a7ac6988ab": { name: "# Damage Reduction from Close Enemies", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
        },
        uniqueEffect: {
          b3b94edf144b459: { name: "You deal # increased damage while Unstoppable and for 4 seconds after. When you become Unstoppable, gain 50 of your Primary Resource.", isPercent: !0, level: { 0: [0.2, 0.4] } },
        },
      },
      temerity: {
        affixes: {
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          c65d7e171d2f26f: { name: "# Potion Drop Rate", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.04, 0.09], 340: [0.055, 0.115], 460: [0.08, 0.15], 625: [0.09, 0.19], 780: [0.12, 0.26] } },
          "9bd2642fcef5f4e": {
            name: "Lucky Hit: Up to a 5% Chance to Heal # Life",
            isPercent: !1,
            level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.085, 0.145], 460: [0.11, 0.19], 625: [0.13, 0.23], 780: [0.175, 0.315] },
          },
          "6d4e9c08961ac38": { name: "# Healing Received", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
        },
        uniqueEffect: {
          "76f33a5869d9e23": {
            name: "Effects that Heal you beyond 100% Life grant you a Barrier up to # of your Maximum Life that lasts for 8 seconds. Potions can be used while at full Life.",
            isPercent: !0,
            level: { 0: [0.4, 0.8] },
          },
        },
      },
      "tassets-of-the-dawning-sky": {
        affixes: {
          "9e0f6beb241c536": { name: "# All Stats", isPercent: !1, level: { 0: [3, 4], 150: [4, 6], 340: [5, 8], 460: [6, 10], 625: [8, 14], 780: [10, 18] } },
          "35f5f061e723582": { name: "# Resistance to All Elements", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.04, 0.08], 780: [0.054, 0.11] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          "8d83dc336be1c84": { name: "# Impaired Reduction", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] } },
        },
        uniqueEffect: {
          f5320d17bd7187f: {
            name: "When you take damage from a Non-Physical damage type, you gain # Maximum Resistance to that damage type for 6 seconds. This effect can only apply to one damage type at a time.",
            isPercent: !0,
            level: { 0: [0.08, 0.12] },
          },
        },
      },
    },
    ring: {
      "xfals-corroded-signet": i,
      "xfals-correded-signet": i,
      "mothers-embrace": {
        implicits: { "2ab341c922541be": { name: "# Shadow Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "9e0f6beb241c536": { name: "# All Stats", isPercent: !1, level: { 0: [3, 4], 150: [4, 6], 340: [5, 8], 460: [6, 10], 625: [8, 14], 780: [10, 18] } },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.014, 0.018], 150: [0.015, 0.025], 340: [0.018, 0.03], 460: [0.021, 0.035], 625: [0.025, 0.045], 780: [0.032, 0.06] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
        },
        uniqueEffect: { "278f482c3098bff": { name: "If a Core Skill hits 4 or more enemies, # of the Resource cost is refunded.", isPercent: !0, level: { 0: [0.3, 0.5] } } },
      },
    },
    sword: {
      azurewrath: {
        implicits: { ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0 } },
        affixes: {
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "23130cddd1fdbea": { name: "# Core Damage", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.035, 0.06], 340: [0.055, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
          "30193a17be5a73c": { name: "# Non-Physical Damage", isPercent: !0, level: { 0: [0.03, 0.075], 150: [0.095, 0.17], 340: [0.135, 0.225], 460: [0.195, 0.3], 625: [0.225, 0.375], 780: [0.315, 0.525] } },
          "7f67edb50b9841e": {
            name: "# Damage to Crowd Controlled Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] },
          },
        },
        uniqueEffect: { bde7f64d97533e0: { name: "Lucky Hit: Your Core Skills have up to a 20% chance to Freeze enemies for 3 seconds and deal # Cold damage to them.", isPercent: !1 } },
      },
    },
  },
  barbarian: {
    amulet: {
      "battle-trance": {
        implicits: { "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "047928388f02e41": { name: "# Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.012], 150: [0.015, 0.023], 340: [0.018, 0.03], 460: [0.026, 0.04], 625: [0.03, 0.05], 780: [0.042, 0.07] } },
          "7b402a7ac6988ab": { name: "# Damage Reduction from Close Enemies", isPercent: !0, level: {} },
          "032d5bd0c1a327d": { name: "# Maximum Fury", isPercent: !1, level: { 0: [1, 2], 150: [1, 3], 340: [1, 4], 460: [2, 5], 625: [3, 7], 780: [3, 9] } },
          aa25f5182c3647a: { name: "# to Frenzy", isPercent: !1, level: { 780: [4, 6] } }
        },
        uniqueEffect: { ebb45dfd1c7d537: { name: "Increase Frenzy's maximum stacks by 2.  While you have maximum Frenzy, your other Skills gain # increased Attack Speed.", isPercent: !0, level: {} } }
      }
    },
    axe: {
      "the-butchers-cleaver": {
        implicits: { "3c67f92e605b534": { name: "# Damage to Healthy Enemies", isPercent: !0 } },
        affixes: {
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "7f67edb50b9841e": {
            name: "# Damage to Crowd Controlled Enemies",
            isPercent: !0,
            level: { 0: [0.015, 0.045], 150: [0.05, 0.01], 340: [0.075, 0.135], 460: [0.11, 0.18], 625: [0.125, 0.225], 780: [0.0175, 0.315] }
          },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.07], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } },
          "4781e4165646f42": {
            name: "# Critical Strike Chance Against Injured Enemies",
            isPercent: !0,
            level: { 0: [0.015, 0.03], 150: [0.03, 0.06], 340: [0.035, 0.075], 460: [0.045, 0.085], 625: [0.045, 0.105], 780: [0.045, 0.12] }
          }
        },
        uniqueEffect: { a7c037c8e1bc7d3: { name: "Lucky Hit: When you Critically Strike an enemy you have up to a 100% chance to Fear and Slow them by # for 4 seconds.", isPercent: !0, level: { 0: [0.61, 0.75] } } }
      }
    },
    boots: {
      "h-thousand-steps": {
        implicits: { "5be337b5c49348a": { name: "# Max Evade Charge", isPercent: !1 } },
        affixes: {
          "36b12236210e596": { name: "# Dexterity", isPercent: !1, level: { 0: [14, 16], 150: [23, 28], 340: [32, 38], 460: [43, 50], 625: [58, 68], 780: [70, 84] } },
          "21e09a82ad15053": { name: "# Damage when Swapping Weapons", isPercent: !0, level: { 0: [0.02, 0.05], 150: [0.065, 0.115], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          "5b71d6950556284": { name: "# Movement Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "7d9a9c3d883ec4e": { name: "# to Ground Stomp", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } }
        },
        uniqueEffect: {
          bf3ded7458a3fa4: {
            name: "After gaining the final damage bonus from the Walking Arsenal Key Passive, you automatically cast Ground Stomp and gain # Fury. This cannot happen more than once every 15 seconds.",
            isPercent: !1,
            level: { 0: [32, 50] }
          }
        }
      }
    },
    chestarmor: {
      "rage-of-harrogath": {
        affixes: {
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "18bc8090236c582": {
            name: "# Physical Critical Strike Chance Against Elites",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] },
          },
          "08cb26b5ed23cf8": {
            name: "# Damage Reduction from Bleeding Enemies",
            isPercent: !0,
            level: { 0: [0.1, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] },
          },
          "28d9abe06efb295": { name: "# Thorns", isPercent: !1, level: {} },
        },
        uniqueEffect: {
          a0e50fe5b1c0110: { name: "Lucky Hit: Up to a # chance to reduce the Cooldowns of your Non-Ultimate Skills by 1.5 seconds when you inflict Bleeding on Elites.", isPercent: !0, level: { 0: [0.2, 0.4] } },
        },
      },
    },
    gloves: {
      "gohrs-devastating-grips": {
        affixes: {
          "4ca4d378fc8ff6e": {
            name: "# Critical Strike Chance Against Close Enemies",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] }
          },
          a5f8fc9d6cf5506: { name: "# Lucky Hit Chance", isPercent: !0, level: { 0: [0.01, 0.015], 150: [0.015, 0.035], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.04, 0.08], 780: [0.054, 0.11] } },
          "24f47b5f1a03086": { name: "# Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          "596a939e0f2803f": { name: "# to Whirlwind", isPercent: !1, level: { 0: 1, 340: 2, 625: [2, 3], 780: [3, 4] } }
        },
        uniqueEffect: { b52009a8fc3c83a: { name: "Your attacks randomly deal 1% to # of their normal damage.", isPercent: !0, level: { 0: [2, 3] } } }
      },
      "twin-strikes": {
        affixes: {
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.04, 0.07], 460: [0.06, 0.095], 625: [0.07, 0.12], 780: [0.095, 0.165] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] }
          },
          "24f47b5f1a03086": { name: "# Damage", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          d62477be00d6ab5: { name: "# to Double Swing", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [2, 3] } }
        },
        uniqueEffect: { b52009a8fc3c83a: { name: "After casting Double Swing 4 times, your next Double Swing will hit 2 additional times, each dealing # increased damage.", isPercent: !0, level: { 0: [0.1, 0.25] } } }
      }
    },
    helm: {
      "tuskhelm-of-joritz-the-mighty": {
        affixes: {
          "278edc6d1581de8": { name: "# Damage while Berserking is Active", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] } },
          "032d5bd0c1a327d": { name: "# Maximum Fury", isPercent: !1, level: { 0: [3, 5], 150: [3, 6], 340: [4, 8], 460: [4, 9], 625: [5, 11], 780: [5, 13] } },
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "8f5fa98463bdb13": { name: "# to Aggressive Resistance", isPercent: !1, level: { 780: [2, 3] } }
        },
        uniqueEffect: {
          "0e04d0abbb2871b": {
            name: "When you gain Berserking while already Berserk, you have a # chance to become more enraged granting 15% increased damage, 2 Fury per second, and 10% Cooldown Reduction.",
            isPercent: !0,
            level: { 0: [0.4, 0.6] }
          }
        }
      }
    },
    pants: {
      "arreats-bearing": {
        affixes: {
          "9befc12052e030c": { name: "# Maximum Life", isPercent: !1, level: {} },
          a236e8c091ae840: { name: "# Ultimate Cooldown Reduction", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "6d15c9b009241b5": { name: "# Strength", isPercent: !1, level: { 0: [6, 8], 150: [9, 14], 340: [13, 19], 460: [18, 25], 625: [24, 34], 780: [28, 42] } },
          "78a7ed091c2a181": { name: "# Damage Reduction", isPercent: !0, level: { 0: 0.01, 150: [0.01, 0.025], 340: [0.012, 0.03], 460: [0.02, 0.041], 625: [0.021, 0.051], 780: [0.031, 0.073] } }
        },
        uniqueEffect: {
          "05e690d5cfc92d9": {
            name:
            "Ancients you summon are empowered. Korlic creates an Earthquake that deals # Physical damage over 4 seconds when he leaps. Talic leaves behind Dust Devils that deal # damage while he whirlwinds. Mawdac ignites the ground Burning enemies for an additional # damage over 4 seconds when he upheaves the ground.",
            isPercent: [!1, !1, !1],
            level: [{ 0: [0.2, 0.5] }, { 0: [7, 10] }, { 0: [7, 10] }]
          }
        }
      }
    },
    ring: {
      "ring-of-the-ravenous": {
        implicits: { "2ab341c922541be": { name: "# Shadow Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          cc00787d7742177: { name: "# Critical Strike Chance", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.04], 340: [0.025, 0.05], 460: [0.03, 0.06], 625: [0.03, 0.07], 780: [0.03, 0.08] } },
          "6b08d8d00e3edbc": { name: "# Vulnerable Damage", isPercent: !0, level: { 0: [0.01, 0.02], 150: [0.02, 0.06], 340: [0.55, 0.085], 460: [0.075, 0.11], 625: [0.09, 0.14], 780: [0.125, 0.195] } },
          "61d731a78e8b985": { name: "# to Brawling Skills", isPercent: !1, level: { 0: 1, 625: [1, 2], 780: [1, 2] } },
          "0a66c6fd5a9ad3e": { name: "# Damage to Bleeding Enemies", isPercent: !0, level: { 0: [0.015, 0.03], 150: [0.045, 0.07], 340: [0.06, 0.09], 460: [0.085, 0.12], 625: [0.1, 0.15], 780: [0.14, 0.21] } }
        },
        uniqueEffect: {
          "3c8086998df1299": {
            name: "Rend's duration is increased by # seconds. Damaging enemies with your Brawling Skills applies 2 stacks of Rend's Bleed. This can only affect each enemy once every 4 seconds.",
            isPercent: !1,
            level: { 0: [2, 4] }
          }
        }
      },
      "ring-of-red-furor": {
        implicits: { d6d49f4e3ba7f1a: { name: "# Fire Resistance", isPercent: !0 }, "9c377136ed21da8": { name: "# Resistance to All Elements", isPercent: !0 } },
        affixes: {
          "032d5bd0c1a327d": { name: "# Maximum Fury", isPercent: !1, level: { 0: [3, 5], 150: [3, 6], 340: [4, 8], 460: [4, 9], 625: [5, 11], 780: [5, 13] } },
          a32568c23be33ec: { name: "# Resource Generation", isPercent: !0, level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] } },
          ec77d5d3dbeea28: { name: "# Attack Speed", isPercent: !0, level: { 0: [0.01, 0.014], 150: [0.014, 0.03], 340: [0.021, 0.045], 460: [0.032, 0.06], 625: [0.035, 0.075], 780: [0.044, 0.1] } },
          "6d15c9b009241b5": { name: "# Strength", isPercent: !1, level: { 0: [6, 8], 150: [9, 14], 340: [13, 19], 460: [18, 25], 625: [24, 34], 780: [28, 42] } }
        },
        uniqueEffect: {
          "0afa202ad9edd85": {
            name:
            "After spending 100 Fury within 3 seconds, your next cast of Hammer of the Ancients, Upheaval, or Death Blow within 5 seconds is a guaranteed Critical Strike and deals # bonus Critical Strike Damage.",
            isPercent: !0,
            level: { 0: [0.1, 0.3] }
          }
        }
      }
    },
    sword: {
      "ramaladnis-magnum-opus": {
        implicits: { ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0 } },
        affixes: {
          "89d2456cb2c7d8a": {
            name: "# Damage with Dual-Wielded Weapons",
            isPercent: !0,
            level: { 0: [0.015, 0.025], 150: [0.03, 0.055], 340: [0.045, 0.075], 460: [0.065, 0.1], 625: [0.075, 0.125], 780: [0.105, 0.175] }
          },
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 0: [0.02, 0.035], 150: [0.05, 0.075], 340: [0.07, 0.1], 460: [0.095, 0.135], 625: [0.115, 0.165], 780: [0.165, 0.235] } },
          "032d5bd0c1a327d": { name: "# Maximum Fury", isPercent: !1, level: { 780: [12, 20] } },
          f79e3aeaadf8e3d: {
            name: "Lucky Hit: Up to a 5% Chance to Restore # Primary Resource",
            isPercent: !0,
            level: { 0: [0.01, 0.02], 150: [0.02, 0.045], 340: [0.03, 0.06], 460: [0.045, 0.08], 625: [0.05, 0.1], 780: [0.07, 0.14] }
          }
        },
        uniqueEffect: { fd49c754cecc8c6: { name: "Skills using this weapon deal # increased damage per point of Fury you have, but you lose 2 Fury every second.", isPercent: !0 } }
      }
    },
    twohandedaxe: {
      "ancients_-oath": {
        implicits: { "3c67f92e605b534": { name: "# Damage to Healthy Enemies", isPercent: !0 } },
        affixes: {
          e22e2e538113ac3: { name: "# Damage to Close Enemies", isPercent: !0, level: { 780: [0.33, 0.47] } },
          "7fe22f1cdb678dd": { name: "# Vulnerable Damage", isPercent: !0, level: { 780: [0.25, 0.39] } },
          "278edc6d1581de8": { name: "# Damage while Berserking is Active", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.09, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } },
          "1ab693f024a83c3": { name: "# to Steel Grasp", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [4, 6] } }
        },
        uniqueEffect: { beb97ac7b131333: { name: "Steel Grasp launches 2 additional chains. Enemies hit by Steel Grasp take # increased damage from you for 3 seconds.", isPercent: !0 } }
      }
    },
    twohandedmace: {
      overkill: {
        implicits: { "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0 } },
        affixes: {
          bce04caaf605da6: { name: "# Physical Damage", isPercent: !0, level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] } },
          "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0, level: { 780: [0.84, 1.26] } },
          "3167907d405cfe6": { name: "# Damage to Injured Enemies", isPercent: !0, level: { 780: [0.42, 0.7] } },
          "9d47f14c74f56a6": { name: "# to Death Blow", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [3, 4] } }
        },
        uniqueEffect: {
          "3c15f591a2555fe": {
            name: "Death Blow creates a shockwave, dealing # of its Base damage to enemies. Enemies who die to this effect also reset Death Blow’s Cooldown.",
            isPercent: !0,
            level: { 0: [0.24, 0.38] }
          }
        }
      },
      hellhammer: {
        implicits: { "632a246eb4e212a": { name: "# Overpower Damage", isPercent: !0 } },
        affixes: {
          d288df9c427be8a: {
            name: "# Damage with Two-Handed Bludgeoning Weapons",
            isPercent: !0,
            level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] }
          },
          "913d1cc1333d7b3": { name: "# to Upheaval", isPercent: !1, level: { 0: 1, 340: [1, 2], 625: 2, 780: [3, 4] } },
          "9de383d905522aa": { name: "# Damage to Burning Enemies", isPercent: !0, level: { 780: [0.42, 0.7] } },
          "7fd4a5ac122d1bb": {
            name: "# Damage Reduction from Burning Enemies ",
            isPercent: !0,
            level: { 0: [0.01, 0.015], 150: [0.015, 0.04], 340: [0.02, 0.05], 460: [0.03, 0.065], 625: [0.035, 0.085], 780: [0.05, 0.12] }
          }
        },
        uniqueEffect: { "5a2820a0ea80182": { name: "Upheaval ignites the ground Burning enemies for an additional # damage over 4 seconds.", isPercent: !1 } }
      }
    },
    twohandedsword: {
      "fields-of-crimson": {
        implicits: { ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0 } },
        affixes: {
          "13eff0341a02599": {
            name: "# Damage with Two-Handed Slashing Weapons",
            isPercent: !0,
            level: { 0: [0.03, 0.05], 150: [0.06, 0.11], 340: [0.09, 0.15], 460: [0.13, 0.2], 625: [0.15, 0.25], 780: [0.21, 0.35] }
          },
          fe509fdbe049591: { name: "# Damage Over Time", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.09, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } },
          ec7233d732f8602: { name: "# Critical Strike Damage", isPercent: !0, level: { 0: [0.03, 0.06], 150: [0.09, 0.14], 340: [0.12, 0.18], 460: [0.17, 0.24], 625: [0.2, 0.3], 780: [0.28, 0.42] } },
          cabec8bc3781b3a: { name: "# Rupture Cooldown Reduction", isPercent: !0, level: { 0: [0.02, 0.04], 150: [0.04, 0.09], 340: [0.06, 0.12], 460: [0.09, 0.16], 625: [0.1, 0.2], 780: [0.14, 0.28] } }
        },
        uniqueEffect: {
          eef08e0f5fc1419: {
            name:
            "While using this weapon, damaging at least one enemy with Rupture creates a blood pool that inflicts # Bleeding damage over 6 seconds. Enemies standing in the pool take 20% increased Bleeding damage.",
            isPercent: !1
          }
        }
      }
    }
  },
}

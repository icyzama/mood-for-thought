export const sampleDirections = [
  {
    id: "sunday-morning",
    theme: "yellow",
    title: "Sunday Morning",
    mood: "Warm / Nostalgic",
    headline: ["GOOD", "MORNING"],
    description: "Soft nostalgia, sunlit mornings, and the comfort of something made by hand.",
    guidance: "Pair warm yellow and cream with clay-orange accents. Try rounded display lettering, sunlit photos, and uncoated paper for a handmade feel.",
  },
  {
    id: "counter-culture",
    theme: "pink",
    title: "Counter Culture",
    mood: "Bold / Playful",
    headline: ["BAKE", "SOME", "NOISE"],
    description: "Big personality, bright contrast, and a bakery that refuses to blend in.",
    guidance: "Put hot pink, cobalt blue, and golden yellow together. Try oversized lettering, short punchy copy, and high-contrast stickers that stand out on packaging.",
  },
  {
    id: "the-good-garden",
    theme: "green",
    title: "The Good Garden",
    mood: "Fresh / Organic",
    headline: ["GROWN", "WITH", "LOVE"],
    description: "Fresh ingredients, easy optimism, and a little neighborhood charm.",
    guidance: "Lead with mint green and warm cream, then add a touch of yellow. Try simple ingredient illustrations, natural light, and generous space around the type.",
  },
] as const;

export type SampleDirection = (typeof sampleDirections)[number];

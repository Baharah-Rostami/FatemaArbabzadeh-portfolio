import { ProjectImages } from "../assets/Images";

export const projects = [
  {
    slug: "rolex-campaign",
    title: "Rolex Campaign",
    category: "Brand Identity",

    cover: ProjectImages.rolexAdds[0],

    images: ProjectImages.rolexAdds,

    description:
      "Luxury advertising campaign showcasing Rolex products."
  },

  {
    slug: "ice-cream-ads",

    title: "Ice Cream Advertisements",

    category: "Advertising",

    cover: ProjectImages.mangoIceCream,

    images: [
      ProjectImages.mangoIceCream,
      ProjectImages.strawberryIceCream,
      ProjectImages.iceCream,
    ],

    description:
      "Creative social media advertisements for ice cream products."
  },

  {
    slug: "logos",

    title: "Logo Collection",

    category: "Brand Identity",

    cover: ProjectImages.arbabZadehLogo,

    images: [
      ProjectImages.arbabZadehLogo,
      ProjectImages.arbabZadehLogo2,
      ProjectImages.letterF,
    ],

    description:
      "A collection of branding and logo concepts."
  },

  {
    slug: "illustrations",

    title: "Illustrations",

    category: "Illustration",

    cover: ProjectImages.illustrator,

    images: [
      ProjectImages.illustrator,
      ProjectImages.illustrator2,
      ProjectImages.mandala,
      ProjectImages.mandala2,
    ],

    description:
      "Creative illustration and mandala artwork."
  },

  {
    slug: "advertising-designs",

    title: "Advertising Designs",

    category: "Advertising",

    cover: ProjectImages.perfume,

    images: [
      ProjectImages.perfume,
      ProjectImages.spicyKitchup,
      ProjectImages.resturantMolana,
      ProjectImages.teachersDay,
    ],

    description:
      "Promotional and advertising design projects."
  },
];
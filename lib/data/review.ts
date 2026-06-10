export type CargoReview = {
  id: string;
  productId: string;
  productName: string;
  category: string;
  rating: number;
  reviewerType: "buyer" | "driver" | "warehouse" | "business";
  reviewText: string;
  pros: string[];
  cons: string[];
  tags: string[];
  createdAt: string;
};

export const cargoReviews: CargoReview[] = [
  {
    id: "review_001",
    productId: "cargo_box_001",
    productName: "AeroShield Roof Cargo Box",
    category: "roof_cargo_box",
    rating: 4.7,
    reviewerType: "buyer",
    reviewText:
      "Used it during heavy rain on a Boston to Buffalo drive. Clothes and electronics stayed dry. The lock felt secure, but the box was noisy above 70 mph.",
    pros: ["waterproof", "secure lock", "large capacity"],
    cons: ["wind noise at high speed"],
    tags: ["waterproof", "road_trip", "family_travel", "secure"],
    createdAt: "2026-05-01",
  },
  {
    id: "review_002",
    productId: "cargo_bag_002",
    productName: "FlexHaul Soft Cargo Bag",
    category: "soft_cargo_bag",
    rating: 3.8,
    reviewerType: "buyer",
    reviewText:
      "Good for light luggage, but I would not use it for fragile items. The fabric flexes too much and one corner leaked in strong rain.",
    pros: ["cheap", "foldable", "easy to store"],
    cons: ["not ideal for fragile goods", "minor leaking"],
    tags: ["budget", "soft_bag", "not_fragile", "water_resistant"],
    createdAt: "2026-04-12",
  },
  {
    id: "review_003",
    productId: "cargo_crate_003",
    productName: "SafeStack Commercial Cargo Crate",
    category: "commercial_crate",
    rating: 4.9,
    reviewerType: "warehouse",
    reviewText:
      "Excellent for fragile goods. The rigid frame and internal straps kept glass inventory stable during local delivery. Not convenient for personal cars.",
    pros: ["rigid frame", "good for fragile goods", "internal straps"],
    cons: ["bulky", "not good for small cars"],
    tags: ["fragile", "commercial", "rigid", "safe_transport"],
    createdAt: "2026-03-28",
  },
  {
    id: "review_004",
    productId: "cargo_box_001",
    productName: "AeroShield Roof Cargo Box",
    category: "roof_cargo_box",
    rating: 4.5,
    reviewerType: "buyer",
    reviewText:
      "The shell is strong enough for camping gear and ski equipment. I would still add padding for cameras or glass because the inside is hard plastic.",
    pros: ["durable shell", "good capacity", "weatherproof"],
    cons: ["needs padding for fragile items"],
    tags: ["durable", "weatherproof", "ski", "needs_padding"],
    createdAt: "2026-04-19",
  },
];
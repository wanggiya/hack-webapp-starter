import { tool } from "ai";
import { z } from "zod";

/**
 * Demo product review data.
 *
 * This is fake hackathon data. Later you can replace it with:
 * - database rows
 * - API calls
 * - vector search
 * - product review scraping/search
 * - Cloudflare Worker
 */
const productReviews = [
  {
    id: "review_001",
    productId: "sofa_001",
    productName: "Harbor Performance Fabric Sofa",
    category: "sofa",
    material: "performance fabric",
    rating: 4.7,
    reviewerType: "pet_owner",
    reviewText:
      "I have two cats and the fabric has held up better than expected. Their claws do not seem to catch easily, and cat hair comes off with a lint roller. One small stain wiped off with mild soap.",
    pros: ["tight weave", "easy to clean", "pet hair removable", "stain resistant"],
    cons: ["firm cushions"],
    tags: ["pet_owner", "performance_fabric", "durable", "easy_clean"],
  },
  {
    id: "review_002",
    productId: "sofa_002",
    productName: "CloudSoft Chenille Sofa",
    category: "sofa",
    material: "chenille",
    rating: 3.9,
    reviewerType: "buyer",
    reviewText:
      "Very soft and comfortable, but my cat's claws pulled some threads within the first week. It also holds onto pet hair more than I expected.",
    pros: ["soft", "comfortable", "cozy"],
    cons: ["snags easily", "holds pet hair", "not ideal for cats"],
    tags: ["chenille", "soft", "snagging", "pet_hair"],
  },
  {
    id: "review_003",
    productId: "sofa_003",
    productName: "Metro Leather Apartment Sofa",
    category: "sofa",
    material: "top grain leather",
    rating: 4.4,
    reviewerType: "pet_owner",
    reviewText:
      "The leather is easy to wipe clean and does not trap cat hair. However, visible scratch marks can happen if the cat jumps on it aggressively.",
    pros: ["easy to wipe", "does not trap hair", "good for allergies"],
    cons: ["visible scratches possible", "expensive"],
    tags: ["leather", "easy_clean", "pet_hair_resistant", "scratch_marks"],
  },
  {
    id: "review_004",
    productId: "sofa_004",
    productName: "Budget Linen Lounge Sofa",
    category: "sofa",
    material: "linen blend",
    rating: 3.6,
    reviewerType: "buyer",
    reviewText:
      "Looks nice, but the linen texture catches fur and the arms started pilling after a few months. I would not recommend it for homes with active pets.",
    pros: ["affordable", "nice design"],
    cons: ["catches fur", "pilling", "not good for active pets"],
    tags: ["linen", "budget", "pilling", "fur"],
  },
  {
    id: "review_005",
    productId: "chair_001",
    productName: "OakFrame Reading Chair",
    category: "chair",
    material: "microfiber",
    rating: 4.6,
    reviewerType: "pet_owner",
    reviewText:
      "The microfiber is surprisingly forgiving with pets. My cat sleeps on it every day, and fur vacuums off quickly. No obvious claw damage so far.",
    pros: ["microfiber", "fur vacuums off", "pet friendly", "durable"],
    cons: ["limited colors"],
    tags: ["microfiber", "pet_friendly", "easy_clean", "durable"],
  },
  {
    id: "review_006",
    productId: "rug_001",
    productName: "FlatWeave Washable Rug",
    category: "rug",
    material: "flat weave polyester",
    rating: 4.5,
    reviewerType: "pet_owner",
    reviewText:
      "Great with pets because the weave is low and tight. Cat hair does not sink in deeply, and small messes clean up fast.",
    pros: ["low pile", "tight weave", "washable", "pet hair easy to remove"],
    cons: ["thin padding"],
    tags: ["rug", "washable", "pet_owner", "tight_weave"],
  },
  {
    id: "review_007",
    productId: "roof_box_001",
    productName: "AeroShield Roof Cargo Box",
    category: "roof_cargo_box",
    material: "hard shell polymer",
    rating: 4.7,
    reviewerType: "buyer",
    reviewText:
      "Used it during heavy rain on a Boston to Buffalo drive. Clothes and electronics stayed dry. The lock felt secure, but the box was noisy above 70 mph.",
    pros: ["waterproof", "secure lock", "large capacity"],
    cons: ["wind noise at high speed"],
    tags: ["waterproof", "road_trip", "family_travel", "secure"],
  },
  {
    id: "review_008",
    productId: "soft_bag_001",
    productName: "FlexHaul Soft Cargo Bag",
    category: "soft_cargo_bag",
    material: "coated fabric",
    rating: 3.8,
    reviewerType: "buyer",
    reviewText:
      "Good for light luggage, but I would not use it for fragile items. The fabric flexes too much and one corner leaked in strong rain.",
    pros: ["cheap", "foldable", "easy to store"],
    cons: ["not ideal for fragile goods", "minor leaking"],
    tags: ["budget", "soft_bag", "not_fragile", "water_resistant"],
  },
  {
    id: "review_009",
    productId: "crate_001",
    productName: "SafeStack Commercial Cargo Crate",
    category: "commercial_crate",
    material: "reinforced plastic frame",
    rating: 4.9,
    reviewerType: "warehouse",
    reviewText:
      "Excellent for fragile goods. The rigid frame and internal straps kept glass inventory stable during local delivery. Not convenient for personal cars.",
    pros: ["rigid frame", "good for fragile goods", "internal straps"],
    cons: ["bulky", "not good for small cars"],
    tags: ["fragile", "commercial", "rigid", "safe_transport"],
  },
  {
    id: "review_010",
    productId: "cooler_001",
    productName: "ColdVault Insulated Cargo Cooler",
    category: "insulated_cargo",
    material: "insulated hard shell",
    rating: 4.6,
    reviewerType: "business",
    reviewText:
      "Worked well for temperature-sensitive goods during a six-hour delivery window. Ice packs stayed cold and the lid seal felt strong.",
    pros: ["insulated", "good seal", "temperature protection"],
    cons: ["heavy when full"],
    tags: ["cold_chain", "temperature_sensitive", "food_delivery", "sealed"],
  },
];

/**
 * Demo paid merchandise order/status data.
 *
 * This is fake hackathon data. Later you can replace it with:
 * - real order DB
 * - Shopify/WooCommerce API
 * - carrier tracking API
 * - warehouse management system
 */
const paidMerchandiseOrders = [
  {
    orderId: "ORD-1001",
    customerName: "J Qi",
    email: "gx538@example.com",
    productId: "roof_box_001",
    productName: "AeroShield Roof Cargo Box",
    paymentStatus: "paid",
    orderStatus: "in_transit",
    carrier: "Demo Freight",
    trackingNumber: "DF-884201",
    currentLocation: {
      city: "Albany",
      state: "NY",
      country: "USA",
      latitude: 42.6526,
      longitude: -73.7562,
      timestamp: "2026-05-26T09:40:00-04:00",
    },
    destination: {
      city: "Boston",
      state: "MA",
      country: "USA",
      latitude: 42.3601,
      longitude: -71.0589,
    },
    estimatedDelivery: "2026-05-27T18:00:00-04:00",
    statusHistory: [
      {
        status: "paid",
        location: "Online Checkout",
        timestamp: "2026-05-24T14:22:00-04:00",
        note: "Payment confirmed.",
      },
      {
        status: "packed",
        location: "Chicago Warehouse, IL",
        timestamp: "2026-05-25T08:10:00-05:00",
        note: "Order packed and labeled.",
      },
      {
        status: "shipped",
        location: "Chicago Warehouse, IL",
        timestamp: "2026-05-25T16:45:00-05:00",
        note: "Package handed to carrier.",
      },
      {
        status: "in_transit",
        location: "Albany, NY",
        timestamp: "2026-05-26T09:40:00-04:00",
        note: "Arrived at regional transfer hub.",
      },
    ],
  },
  {
    orderId: "ORD-1002",
    customerName: "Demo Client",
    email: "client@example.com",
    productId: "crate_001",
    productName: "SafeStack Commercial Cargo Crate",
    paymentStatus: "paid",
    orderStatus: "out_for_delivery",
    carrier: "Metro Courier",
    trackingNumber: "MC-771903",
    currentLocation: {
      city: "Cambridge",
      state: "MA",
      country: "USA",
      latitude: 42.3736,
      longitude: -71.1097,
      timestamp: "2026-05-26T11:20:00-04:00",
    },
    destination: {
      city: "Boston",
      state: "MA",
      country: "USA",
      latitude: 42.3601,
      longitude: -71.0589,
    },
    estimatedDelivery: "2026-05-26T16:30:00-04:00",
    statusHistory: [
      {
        status: "paid",
        location: "Online Checkout",
        timestamp: "2026-05-23T10:15:00-04:00",
        note: "Payment confirmed.",
      },
      {
        status: "packed",
        location: "Newark Warehouse, NJ",
        timestamp: "2026-05-24T13:00:00-04:00",
        note: "Commercial crate prepared for delivery.",
      },
      {
        status: "in_transit",
        location: "Worcester, MA",
        timestamp: "2026-05-26T06:45:00-04:00",
        note: "Package reached local delivery network.",
      },
      {
        status: "out_for_delivery",
        location: "Cambridge, MA",
        timestamp: "2026-05-26T11:20:00-04:00",
        note: "Driver is heading toward destination.",
      },
    ],
  },
];

/**
 * Expands natural language requirements into implied search terms.
 *
 * Example:
 * "cat friendly sofa" expands into:
 * scratch resistant, tight weave, easy clean, pet hair, microfiber, leather, etc.
 */
function expandRequirementTerms(requirement: string) {
  const text = requirement.toLowerCase();

  const expansionMap: Record<string, string[]> = {
    cat: [
      "cat",
      "cats",
      "kitten",
      "feline",
      "pet",
      "pets",
      "claw",
      "claws",
      "scratch",
      "scratches",
      "scratch resistant",
      "snag",
      "snagging",
      "tight weave",
      "low pile",
      "pet hair",
      "fur",
      "easy clean",
      "easy to clean",
      "lint roller",
      "vacuum",
      "durable",
      "stain resistant",
      "microfiber",
      "leather",
      "performance fabric",
    ],
    dog: [
      "dog",
      "dogs",
      "puppy",
      "pet",
      "pets",
      "fur",
      "mud",
      "easy clean",
      "washable",
      "durable",
      "stain resistant",
      "odor",
      "performance fabric",
      "microfiber",
      "leather",
    ],
    child: [
      "kid",
      "kids",
      "child",
      "children",
      "stain resistant",
      "easy clean",
      "spill",
      "durable",
      "washable",
      "soft corners",
      "family",
    ],
    waterproof: [
      "waterproof",
      "water resistant",
      "rain",
      "leak",
      "sealed",
      "stayed dry",
      "moisture",
    ],
    fragile: [
      "fragile",
      "glass",
      "camera",
      "electronics",
      "padding",
      "rigid",
      "internal straps",
      "protection",
      "stable",
    ],
    small_apartment: [
      "small apartment",
      "compact",
      "apartment",
      "small space",
      "low profile",
      "narrow",
      "lightweight",
    ],
    easy_clean: [
      "easy clean",
      "easy to clean",
      "wipe clean",
      "washable",
      "vacuum",
      "lint roller",
      "stain resistant",
      "soap",
    ],
    temperature_sensitive: [
      "temperature sensitive",
      "cold",
      "cooler",
      "insulated",
      "ice packs",
      "food delivery",
      "cold chain",
      "sealed",
    ],
  };

  const baseWords = text
    .replace(/[^a-z0-9\s_-]/g, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length >= 3);

  const expanded = new Set<string>(baseWords);

  if (text.includes("cat") || text.includes("kitten") || text.includes("feline")) {
    expansionMap.cat.forEach((term) => expanded.add(term));
  }

  if (text.includes("dog") || text.includes("puppy")) {
    expansionMap.dog.forEach((term) => expanded.add(term));
  }

  if (text.includes("kid") || text.includes("child") || text.includes("family")) {
    expansionMap.child.forEach((term) => expanded.add(term));
  }

  if (text.includes("waterproof") || text.includes("rain") || text.includes("water")) {
    expansionMap.waterproof.forEach((term) => expanded.add(term));
  }

  if (text.includes("fragile") || text.includes("glass") || text.includes("camera")) {
    expansionMap.fragile.forEach((term) => expanded.add(term));
  }

  if (
    text.includes("small apartment") ||
    text.includes("small space") ||
    text.includes("compact")
  ) {
    expansionMap.small_apartment.forEach((term) => expanded.add(term));
  }

  if (
    text.includes("easy clean") ||
    text.includes("easy to clean") ||
    text.includes("washable")
  ) {
    expansionMap.easy_clean.forEach((term) => expanded.add(term));
  }

  if (
    text.includes("temperature") ||
    text.includes("cold") ||
    text.includes("insulated") ||
    text.includes("food")
  ) {
    expansionMap.temperature_sensitive.forEach((term) => expanded.add(term));
  }

  return Array.from(expanded);
}

function scoreProductReview(
  review: {
    productName: string;
    category: string;
    material: string;
    reviewText: string;
    tags: string[];
    pros: string[];
    cons: string[];
  },
  expandedTerms: string[]
) {
  const searchableText = [
    review.productName,
    review.category,
    review.material,
    review.reviewText,
    ...review.tags,
    ...review.pros,
    ...review.cons,
  ]
    .join(" ")
    .toLowerCase();

  let score = 0;
  const matchedTerms: string[] = [];

  for (const term of expandedTerms) {
    const normalizedTerm = term.toLowerCase();

    if (searchableText.includes(normalizedTerm)) {
      matchedTerms.push(term);

      if (review.tags.join(" ").toLowerCase().includes(normalizedTerm)) {
        score += 4;
      } else if (review.pros.join(" ").toLowerCase().includes(normalizedTerm)) {
        score += 3;
      } else if (review.material.toLowerCase().includes(normalizedTerm)) {
        score += 3;
      } else if (review.reviewText.toLowerCase().includes(normalizedTerm)) {
        score += 2;
      } else {
        score += 1;
      }
    }
  }

  return {
    score,
    matchedTerms: Array.from(new Set(matchedTerms)),
  };
}

/**
 * Original hackathon demo tool.
 */
export const getWeather = tool({
  description: "Get the current weather for a city",
  inputSchema: z.object({
    city: z.string().describe("City name, e.g. Boston"),
    units: z
      .enum(["fahrenheit", "celsius"])
      .optional()
      .describe("Temperature units"),
  }),
  execute: async ({ city, units = "fahrenheit" }) => {
    const tempF = 55 + Math.floor(Math.random() * 30);
    const tempC = Math.round(((tempF - 32) * 5) / 9);
    return {
      city,
      condition: ["sunny", "cloudy", "rainy", "windy"][
        Math.floor(Math.random() * 4)
      ],
      temperature: units === "celsius" ? tempC : tempF,
      units,
      source: "demo-tool",
    };
  },
});

/**
 * Original hackathon demo tool.
 */
export const calculate = tool({
  description:
    "Evaluate a basic math expression (numbers and + - * / parentheses)",
  inputSchema: z.object({
    expression: z
      .string()
      .describe("Math expression, e.g. (17 * 23) + 4"),
  }),
  execute: async ({ expression }) => {
    const sanitized = expression.replace(/[^0-9+\-*/().\s]/g, "");
    if (!sanitized.trim()) {
      return { error: "Invalid expression" };
    }
    const result = Function(`"use strict"; return (${sanitized})`)();
    return { expression, result };
  },
});

/**
 * Original hackathon demo tool.
 */
export const webSearch = tool({
  description:
    "Search the web for information. Replace this stub with Tavily, SerpAPI, or your own search API.",
  inputSchema: z.object({
    query: z.string().describe("Search query"),
    maxResults: z.number().min(1).max(10).optional(),
  }),
  execute: async ({ query, maxResults = 3 }) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      query,
      results: Array.from({ length: maxResults }, (_, i) => ({
        title: `Result ${i + 1} for "${query}"`,
        url: `https://example.com/search?q=${encodeURIComponent(query)}&r=${
          i + 1
        }`,
        snippet:
          "Replace lib/tools/index.ts webSearch with a real API call during the hackathon.",
      })),
      note: "Stub — wire up a real search provider to go further.",
    };
  },
});

/**
 * New tool 1:
 * Review/product-fit/synthetic review evidence.
 *
 * Supports implied requirements:
 * - "cat friendly sofa" -> scratch resistance, tight weave, easy clean, pet hair, durable upholstery
 * - "waterproof cargo box" -> rain, sealed, stayed dry, water resistant
 * - "fragile goods carrier" -> padding, rigid frame, internal straps
 */
export const gatherReviewEvidence = tool({
  description:
    "Gather requirement keywords, infer implied product needs, search existing product reviews, and return evidence for generating a new synthetic review or product recommendation. Use this when the client describes a desired product like cat friendly sofa, waterproof cargo box, easy-clean rug, fragile goods carrier, or small apartment chair.",
  inputSchema: z.object({
    requirement: z
      .string()
      .describe(
        "The client's natural language requirement, e.g. cat friendly sofa, waterproof cargo box, or easy-clean rug for pets"
      ),
    productId: z
      .string()
      .optional()
      .describe("Optional product id, e.g. sofa_001"),
    category: z
      .string()
      .optional()
      .describe(
        "Optional product category, e.g. sofa, chair, rug, roof_cargo_box"
      ),
    material: z
      .string()
      .optional()
      .describe(
        "Optional material filter, e.g. microfiber, leather, linen, performance fabric"
      ),
    tone: z
      .enum(["positive", "balanced", "critical", "casual", "professional"])
      .optional()
      .describe("Desired tone for generated synthetic review"),
    limit: z.number().min(1).max(10).optional(),
  }),
  execute: async ({
    requirement,
    productId,
    category,
    material,
    tone = "balanced",
    limit = 5,
  }) => {
    const expandedTerms = expandRequirementTerms(requirement);

    let candidates = productReviews;

    if (productId) {
      candidates = candidates.filter((review) => review.productId === productId);
    }

    if (category) {
      candidates = candidates.filter(
        (review) => review.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (material) {
      candidates = candidates.filter((review) =>
        review.material.toLowerCase().includes(material.toLowerCase())
      );
    }

    const matchingReviews = candidates
      .map((review) => {
        const scored = scoreProductReview(review, expandedTerms);

        return {
          ...review,
          relevanceScore: scored.score,
          matchedTerms: scored.matchedTerms,
        };
      })
      .filter((review) => review.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);

    const productSummaryMap = new Map<
      string,
      {
        productId: string;
        productName: string;
        category: string;
        material: string;
        reviewCount: number;
        ratingTotal: number;
        pros: Set<string>;
        cons: Set<string>;
        tags: Set<string>;
        matchedTerms: Set<string>;
        evidenceSnippets: string[];
      }
    >();

    for (const review of matchingReviews) {
      if (!productSummaryMap.has(review.productId)) {
        productSummaryMap.set(review.productId, {
          productId: review.productId,
          productName: review.productName,
          category: review.category,
          material: review.material,
          reviewCount: 0,
          ratingTotal: 0,
          pros: new Set<string>(),
          cons: new Set<string>(),
          tags: new Set<string>(),
          matchedTerms: new Set<string>(),
          evidenceSnippets: [],
        });
      }

      const summary = productSummaryMap.get(review.productId)!;

      summary.reviewCount += 1;
      summary.ratingTotal += review.rating;

      review.pros.forEach((pro) => summary.pros.add(pro));
      review.cons.forEach((con) => summary.cons.add(con));
      review.tags.forEach((tag) => summary.tags.add(tag));
      review.matchedTerms.forEach((term) => summary.matchedTerms.add(term));
      summary.evidenceSnippets.push(review.reviewText);
    }

    const productSummaries = Array.from(productSummaryMap.values()).map(
      (summary) => ({
        productId: summary.productId,
        productName: summary.productName,
        category: summary.category,
        material: summary.material,
        matchedReviewCount: summary.reviewCount,
        averageRating:
          summary.reviewCount > 0
            ? Number((summary.ratingTotal / summary.reviewCount).toFixed(2))
            : null,
        pros: Array.from(summary.pros),
        cons: Array.from(summary.cons),
        tags: Array.from(summary.tags),
        matchedTerms: Array.from(summary.matchedTerms),
        evidenceSnippets: summary.evidenceSnippets,
      })
    );

    return {
      requirement,
      expandedTerms,
      tone,
      filters: {
        productId: productId ?? null,
        category: category ?? null,
        material: material ?? null,
      },
      matchedReviewCount: matchingReviews.length,
      matchingReviews,
      productSummaries,
      reviewGenerationGuidance:
        matchingReviews.length > 0
          ? "Generate a synthetic review or recommendation using only the returned evidence. Explain inferred requirements such as cat friendly = scratch resistance, tight weave, easy cleaning, and pet hair removal. Do not claim the generated review is a real customer review."
          : "No matching review evidence found. Ask for more details or generate only a clearly labeled generic synthetic review.",
    };
  },
});

/**
 * New tool 2:
 * Paid merchandise status/location lookup.
 */
export const getMerchandiseStatus = tool({
  description:
    "Get the current paid merchandise order status, current location, carrier, tracking number, and delivery estimate. Use this when the client asks where their paid cargo, goods, product, package, shipment, order, or merchandise is.",
  inputSchema: z.object({
    orderId: z
      .string()
      .optional()
      .describe("The client's order id, e.g. ORD-1001"),
    trackingNumber: z
      .string()
      .optional()
      .describe("The carrier tracking number, e.g. DF-884201"),
    customerEmail: z
      .string()
      .optional()
      .describe("Optional customer email for lookup"),
  }),
  execute: async ({ orderId, trackingNumber, customerEmail }) => {
    const order = paidMerchandiseOrders.find((item) => {
      const matchesOrderId = orderId
        ? item.orderId.toLowerCase() === orderId.toLowerCase()
        : false;

      const matchesTracking = trackingNumber
        ? item.trackingNumber.toLowerCase() === trackingNumber.toLowerCase()
        : false;

      const matchesEmail = customerEmail
        ? item.email.toLowerCase() === customerEmail.toLowerCase()
        : false;

      return matchesOrderId || matchesTracking || matchesEmail;
    });

    if (!order) {
      return {
        found: false,
        message:
          "No matching paid merchandise order was found. Ask the client for an order ID, tracking number, or purchase email.",
        searchedBy: {
          orderId: orderId ?? null,
          trackingNumber: trackingNumber ?? null,
          customerEmail: customerEmail ?? null,
        },
      };
    }

    return {
      found: true,
      orderId: order.orderId,
      productId: order.productId,
      productName: order.productName,
      paymentStatus: order.paymentStatus,
      orderStatus: order.orderStatus,
      carrier: order.carrier,
      trackingNumber: order.trackingNumber,
      currentLocation: order.currentLocation,
      destination: order.destination,
      estimatedDelivery: order.estimatedDelivery,
      statusHistory: order.statusHistory,
      guidance:
        "Use this order status to answer the client clearly. If paymentStatus is paid, confirm the item is already paid. Mention current location, latest status, carrier, tracking number, and estimated delivery.",
    };
  },
});

/**
 * Original hackathon demo tool.
 */
export const runLongTask = tool({
  description:
    "Run a multi-step background task. Use for demos of long-running agent work.",
  inputSchema: z.object({
    taskName: z.string().describe("Short label for the task"),
    steps: z
      .number()
      .min(1)
      .max(8)
      .optional()
      .describe("Number of simulated steps"),
  }),
  execute: async ({ taskName, steps = 4 }) => {
    const log: string[] = [];
    for (let i = 1; i <= steps; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      log.push(`Step ${i}/${steps}: processed "${taskName}"`);
    }
    return {
      taskName,
      status: "complete",
      stepsCompleted: steps,
      log,
    };
  },
});

export const chatTools = {
  getWeather,
  calculate,
  gatherReviewEvidence,
  getMerchandiseStatus,
};

export const agentTools = {
  getWeather,
  calculate,
  webSearch,
  runLongTask,
  gatherReviewEvidence,
  getMerchandiseStatus,
};
const recipes = [
  {
    title: "Lemon Garlic Salmon",
    time: "15 mins",
    calories: "350",
    ingredients: [
      "2 Fresh salmon fillets",
      "3 cloves garlic, finely minced",
      "1 large lemon (half sliced, half juiced)",
      "2 tbsp extra virgin olive oil",
      "1 tsp dried oregano",
      "Salt and cracked black pepper to taste"
    ],
    instructions: "1. Pat the salmon fillets completely dry with paper towels to ensure a crispy sear.\n2. Season both sides generously with salt, pepper, and oregano.\n3. Heat olive oil in a non-stick skillet over medium-high heat until shimmering.\n4. Place salmon skin-side down in the pan. Press gently with a spatula and sear for 5 minutes without moving it.\n5. Flip the fillets. Add the minced garlic and lemon slices to the pan.\n6. Cook for another 3-4 minutes while spooning the garlic-infused oil over the fish.\n7. Remove from heat, drizzle with fresh lemon juice, and let rest for 2 minutes before serving."
  },
  {
    title: "Mediterranean Quinoa Bowl",
    time: "12 mins",
    calories: "410",
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 English cucumber, diced",
      "1/2 cup cherry tomatoes, halved",
      "1/4 red onion, thinly sliced",
      "1/4 cup crumbled feta cheese",
      "2 tbsp kalamata olives",
      "1 tbsp balsamic glaze"
    ],
    instructions: "1. Start by fluffing your pre-cooked quinoa with a fork to remove any clumps.\n2. In a large serving bowl, create a base of quinoa.\n3. Arrange the diced cucumber, halved tomatoes, and sliced red onions in separate sections on top of the quinoa.\n4. Add the kalamata olives and sprinkle the feta cheese over the center.\n5. Drizzle the entire bowl with balsamic glaze and a touch of olive oil.\n6. Toss gently right before eating to combine flavors while keeping the vegetables crisp."
  },
  {
    title: "Spicy Honey Garlic Chicken",
    time: "20 mins",
    calories: "450",
    ingredients: [
      "500g Chicken breast, cubed",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp sriracha or chili flakes",
      "1 tbsp ginger, grated",
      "Sesame seeds for garnish"
    ],
    instructions: "1. In a small bowl, whisk together honey, soy sauce, sriracha, and grated ginger until smooth.\n2. Lightly season chicken cubes with salt and pepper.\n3. Heat a skillet over medium-high heat with a teaspoon of oil.\n4. Add chicken to the pan in a single layer. Sear until golden brown on all sides (about 8-10 minutes).\n5. Pour the sauce mixture over the chicken.\n6. Reduce heat to medium and stir constantly for 2-3 minutes until the sauce thickens into a sticky glaze.\n7. Garnish with sesame seeds and serve over steamed greens or cauliflower rice."
  },
  {
    title: "Avocado & Egg Power Toast",
    time: "8 mins",
    calories: "320",
    ingredients: [
      "2 slices whole-grain sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "Red pepper flakes",
      "1 tsp lime juice"
    ],
    instructions: "1. Toast your bread slices until golden and firm.\n2. In a small bowl, mash the avocado with lime juice and a pinch of salt until slightly chunky.\n3. Bring a small pot of water to a simmer. Gently crack eggs into the water and poach for 3 minutes for a runny yolk.\n4. Spread the avocado mash thick and evenly across both pieces of toast.\n5. Carefully lift the eggs out of the water with a slotted spoon and place one on each slice.\n6. Top with red pepper flakes and a dash of black pepper. Serve immediately."
  },
  {
    title: "Roasted Sweet Potato Salad",
    time: "25 mins",
    calories: "380",
    ingredients: [
      "2 medium sweet potatoes, cubed",
      "2 cups baby kale or spinach",
      "1/4 cup pumpkin seeds (pepitas)",
      "1/2 tsp smoked paprika",
      "Apple cider vinegar dressing"
    ],
    instructions: "1. Preheat your oven (or air fryer) to 200°C.\n2. Toss sweet potato cubes with olive oil, salt, and smoked paprika.\n3. Roast for 20 minutes, flipping halfway through, until edges are caramelized and centers are soft.\n4. Place baby kale in a large bowl. While the potatoes are still warm, toss them with the kale so the leaves slightly wilt.\n5. Add pumpkin seeds for crunch.\n6. Drizzle with apple cider vinegar dressing and toss thoroughly to ensure every leaf is coated."
  },
 
  // ... (Keep your previous 5 recipes here)
  {
    title: "Sheet Pan Pesto Chicken",
    time: "25 mins",
    calories: "390",
    ingredients: [
      "2 Chicken breasts, sliced",
      "1 cup cherry tomatoes",
      "1 bunch asparagus, trimmed",
      "3 tbsp basil pesto",
      "1 tbsp parmesan cheese"
    ],
    instructions: "1. Preheat oven to 200°C.\n2. Place chicken, tomatoes, and asparagus on a large sheet pan.\n3. Spread pesto evenly over the chicken and vegetables.\n4. Roast for 20 minutes until chicken is cooked through.\n5. Sprinkle with parmesan cheese and serve directly from the pan."
  },
  {
    title: "Black Bean & Corn Tacos",
    time: "15 mins",
    calories: "310",
    ingredients: [
      "1 can black beans, rinsed",
      "1 cup frozen corn, thawed",
      "4 small corn tortillas",
      "1 lime, juiced",
      "Fresh cilantro and salsa"
    ],
    instructions: "1. In a small pan, warm the black beans and corn with a splash of water and taco seasoning.\n2. Warm the tortillas in a dry skillet for 30 seconds per side.\n3. Fill tortillas with the bean and corn mixture.\n4. Top with salsa, fresh cilantro, and a heavy squeeze of lime juice."
  },
  {
    title: "Garlic Butter Shrimp",
    time: "10 mins",
    calories: "290",
    ingredients: [
      "400g Large shrimp, peeled",
      "3 tbsp butter or olive oil",
      "4 cloves garlic, minced",
      "1/2 tsp red pepper flakes",
      "Fresh parsley"
    ],
    instructions: "1. Melt butter in a large skillet over medium-high heat.\n2. Add garlic and red pepper flakes; sauté for 1 minute until fragrant.\n3. Add shrimp in a single layer. Cook for 2-3 minutes per side until pink and opaque.\n4. Toss with chopped parsley and serve over zoodles or a small portion of rice."
  },
  {
    title: "Turkey & Spinach Burgers",
    time: "20 mins",
    calories: "340",
    ingredients: [
      "500g Ground turkey",
      "1 cup fresh spinach, finely chopped",
      "1/4 red onion, minced",
      "1 tsp garlic powder",
      "Salt and pepper"
    ],
    instructions: "1. In a bowl, combine ground turkey, chopped spinach, onion, and spices.\n2. Form into 4 even patties.\n3. Heat a grill or skillet over medium heat.\n4. Cook patties for 5-6 minutes per side until the internal temperature reaches 75°C.\n5. Serve protein-style (wrapped in large lettuce leaves) for a low-carb finish."
  },
  {
    title: "Baked Cod with Gremolata",
    time: "18 mins",
    calories: "260",
    ingredients: [
      "2 Cod fillets",
      "1/4 cup breadcrumbs (optional)",
      "Lemon zest",
      "2 tbsp parsley, minced",
      "1 clove garlic, minced"
    ],
    instructions: "1. Preheat oven to 190°C.\n2. Place cod on a lined baking tray and season with salt.\n3. Mix lemon zest, parsley, garlic, and breadcrumbs in a small bowl.\n4. Press the mixture onto the top of the cod fillets.\n5. Bake for 12-15 minutes until the fish flakes easily with a fork."
  },
  {
    title: "Tofu Stir-Fry with Broccoli",
    time: "20 mins",
    calories: "320",
    ingredients: [
      "1 block extra-firm tofu, pressed",
      "2 cups broccoli florets",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sesame oil"
    ],
    instructions: "1. Cut pressed tofu into cubes.\n2. Heat sesame oil in a wok or large pan over high heat.\n3. Fry tofu until golden on all sides (about 8 minutes).\n4. Add broccoli and a splash of water; cover for 2 minutes to steam.\n5. Remove lid, add soy sauce and rice vinegar, and toss until the sauce coats everything."
  },
  {
    title: "Oatberry Overnight Bowl",
    time: "5 mins",
    calories: "350",
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "1/2 cup blueberries",
      "A pinch of cinnamon"
    ],
    instructions: "1. Combine oats, almond milk, and chia seeds in a jar or bowl.\n2. Stir in cinnamon and half of the blueberries.\n3. Cover and refrigerate for at least 4 hours (or overnight).\n4. In the morning, top with the remaining fresh berries and enjoy cold."
  }
];
  

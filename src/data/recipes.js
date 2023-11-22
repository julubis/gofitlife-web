const recipes = [
  {
    "id": 1,
    "name": "Easy Pea & Spinach Carbonara",
    "image": "assets/food-1.webp",
    "category": "lunch",
    "description": "Fresh pasta cooks up faster than dried, making it a must-have for fast weeknight dinners like this luscious yet healthy meal. Eggs are the base of the creamy sauce. They don't get fully cooked, so use pasteurized-in-the-shell eggs if you prefer.",
    "ingredients": [
      ["Extra-virgin olive oil", "½ tbsp"],
      ["Panko breadcrumbs", "½ cup"],
      ["Clove garlic, minced", "1 small"],
      ["Grated Parmesan cheese", "8 tbsp"],
      ["Finely chopped fresh parsley", "3 tbsp"],
      ["Large egg yolks", "3"],
      ["Ground pepper", "½ tbsp"],
      ["Salt", "¼ tbsp"],
      ["Package fresh tagliatelle", "9 ounce"],
      ["Baby spinach", "8 cups"],
      ["Peas", "1 cup"]
    ],
    "direction": [
      "Put 10 cups of water in a large pot and bring to a boil over high heat.",
      "Meanwhile, heat oil in a large skillet over medium-high heat. Add breadcrumbs and garlic; cook, stirring frequently, until toasted, about 2 minutes. Transfer to a small bowl and stir in 2 tablespoons Parmesan and parsley. Set aside.",
      "Whisk the remaining 6 tablespoons Parmesan, egg yolks, egg, pepper and salt in a medium bowl.",
      "Cook pasta in the boiling water, stirring occasionally, for 1 minute. Add spinach and peas and cook until the pasta is tender, about 1 minute more. Reserve 1/4 cup of the cooking water. Drain and place in a large bowl.",
      "Slowly whisk the reserved cooking water into the egg mixture. Gradually add the mixture to the pasta, tossing with tongs to combine. Serve topped with the reserved breadcrumb mixture."
    ],
    "calorie": 430,
    "carbs": 54,
    "protein": 20,
    "fat": 15,
    "serving": 4,
    "time": 20
  },
  {
    "id": 2,
    "name": "Breakfast Naan Pizza",
    "image": "assets/food-2.webp",
    "category": "breakfast",
    "description": "Give your morning eggs a tasty spin by building an easy individual pizza on a prepared naan.",
    "ingredients": [
      ["Whole-wheat naan", "1"],
      ["Part-skim ricotta cheese", "2 tbsp"],
      ["Low-sodium marinara", "1 tbsp"],
      ["Lemon zest", "½ tbsp"],
      ["Large egg", "1"],
      ["Grated Parmesan cheese", "1 tbsp"],
      ["Chopped fresh basil", ""]
    ],
    "direction": [
      "Preheat oven to 425°F. Coat a rimmed baking sheet with cooking spray.",
      "Place naan on the prepared pan. Mix ricotta, marinara (or pesto) and lemon zest in a small bowl. Spread the mixture onto the naan, creating a well in the center. Carefully crack egg into the well. Sprinkle with Parmesan. Bake until the naan is golden, the egg white is set and the cheese is melted, 8 to 10 minutes. Garnish with basil and pepper, if desired."],
    "calorie": 458,
    "carbs": 52,
    "protein": 24,
    "fat": 17,
    "serving": 1,
    "time": 10
  },
  {
    "id": 3,
    "name": "Quick Shrimp Puttanesca",
    "category": "dinner",
    "image": "assets/food-3.webp",
    "description": "Because refrigerated fresh pasta cooks much faster than dried pasta, this Italian-inspired pasta dish will be on the table lickety-split! Puttanesca, traditionally made with tomatoes, olives, capers, anchovies and garlic, gets shrimp for extra protein and artichoke hearts to boost the vegetable servings (and the fiber!). If you can't find frozen artichoke hearts, sub in drained canned artichoke hearts.",
    "ingredients": [
      ["refrigerated fresh linguine noodles", "8 ounces"],
      ["preferably whole-wheat","1 pound peeled"],
      ["deveined large shrimp","15 ounce"],
      ["can no-salt-added tomato sauce","1 ¼ cups"], 
      ["frozen quartered artichoke hearts thawed","8 ounces"],
      ["chopped pitted Kalamata olives","¼ cup"],
      ["capers rinsed", "1 tablespoon"],
      ["salt","¼ teaspoon"]
    ],
    "direction": [
      "Bring a large pot of water to a boil. Cook linguine according to package instructions. Drain.",
      "Meanwhile, heat oil in a large skillet over high heat. Add shrimp in a single layer and cook, undisturbed, until browned on the bottom, 2 to 3 minutes. Stir in tomato sauce. Add artichoke hearts, olives, capers and salt; cook, stirring often, until the shrimp is cooked through and the artichoke hearts are hot, 2 to 3 minutes longer.",
      "Add the drained noodles to the sauce and stir to combine. Divide among 4 pasta bowls. Serve hot."
    ],
    "calorie": 390,
    "carbs": 43,
    "protein": 37,
    "fat": 8,
    "serving": 4,
    "time": 15
  },
  {
    "id": 4,
    "name": "Philly Cheese Steak Sloppy Joes",
    "category": "lunch",
    "image": "assets/food-4.webp",
    "description": "Two of our favorite comfort-food sandwiches join forces in these family-friendly dinner sandwiches. We found that softer buns make this easier to eat, and it's all the better when wrapped takeout-style in a sheet of foil.",
    "ingredients": [
      ["organic canola oil or avocado oil","2 teaspoons"],
      ["lean ground beef","1 pound"],
      ["dried oregano","1 teaspoon"],
      ["salt","¼ teaspoon"],
      ["no-salt-added tomato sauce","1 cup"],
      ["Sautéed Peppers & Onions (see associated recipe)","1 cup"],
      ["whole-wheat sub rolls, split","4 (6 inch)"],
      ["reduced-sodium provolone cheese","4 slices"]
    ],
    "direction": [
      "Arrange oven rack in upper third of the oven. Preheat broiler. Line a baking sheet with foil.",
      "Heat oil in a large skillet over medium-high heat. Add beef, oregano and salt; cook, crumbling with a wooden spoon, until cooked through, 4 to 6 minutes. Add tomato sauce and cook until bubbling, 1 to 2 minutes.",
      "Meanwhile, warm peppers and onions in a small skillet over medium heat, stirring often. (Alternatively, microwave for 1 minute to reheat.)",
      "Lay rolls, split-side open, on the prepared baking sheet. Broil, rotating the pan as necessary, until just starting to brown and toast, 1 to 2 minutes. Remove from the oven.",
      "Top toasted buns with the beef mixture, dividing evenly. Top with the peppers and onions and then cheese. Broil just until the cheese is melted, 30 seconds to 1 minute. Wrap each sub in foil until ready to eat. Serve hot."],
    "calorie": 413,
    "carbs": 29,
    "protein": 30,
    "fat": 20,
    "serving": 4,
    "time": 20
  },
  {
    "id": 5,
    "name": "Vegan Coconut Chickpea Curry",
    "category": "breakfast",
    "image": "assets/food-5.webp",
    "description": "To make this 20-minute vegan curry even faster, buy precut veggies from the salad bar at the grocery store. To make it a full, satisfying dinner, serve over cooked brown rice. When shopping for simmer sauce, look for one with 400 mg of sodium or less and check the ingredient list for cream or fish sauce if you want to keep this vegan. If you like a spicy kick, add a few dashes of your favorite hot sauce at the end.",
    "ingredients": [
      ["avocado oil or canola oil","2 teaspoons"],
      ["chopped onion","1 cup"],
      ["diced bell pepper","1 cup"],
      ["medium zucchini,halved and sliced","1"],
      ["can chickpeas, drained and rinsed","1 (15 ounce)"],
      ["coconut curry simmer sauce (see Tip)","1 ½ cups"],
      ["vegetable broth","½ cup"],
      ["baby spinach","4 cups"],
      ["precooked brown rice, heated according to package instructions","2 cups"]
    ],
    "direction": [
      "Heat oil in a large skillet over medium-high heat. Add onion, pepper and zucchini; cook, stirring often, until the vegetables begin to brown, 5 to 6 minutes.",
      "Add chickpeas, simmer sauce and broth and bring to a simmer, stirring. Reduce heat to medium-low and simmer until the vegetables are tender, 4 to 6 minutes. Stir in spinach just before serving. Serve over rice."],
    "calorie": 417,
    "carbs": 66,
    "protein": 11,
    "fat": 18,
    "serving": 4,
    "time": 20
  },
  {
    "id": 6,
    "name": "Beef Pad Thai",
    "category": "lunch",
    "image": "assets/food-6.webp",
    "description": "We've bulked up the serving size of beef pad thai by adding in lots of healthy veggies like matchstick carrots, snap peas and scallions. Look for whole-grain brown-rice pad thai noodles to add an additional 3 grams fiber to each serving.",
    "ingredients": [
      ["pad thai rice noodles, preferably brown rice noodles","8 ounces"],
      ["canola oil","2 teaspoons"],
      ["lean ground beef","¾ pound"],
      ["stringless snap peas","2 cups"],
      ["matchstick carrots","2 cups"],
      ["chopped scallions","½ cup"],
      ["pad thai sauce (see Tip)","½ cup"],
      ["Chopped peanuts and lime wedges for serving",""]
    ],
    "direction": [
      "Bring a pot of water to a boil. Cook noodles in boiling water according to package instructions until al dente. Reserve 1 cup cooking liquid and drain the noodles.",
      "Meanwhile, heat oil in a large nonstick skillet over medium-high heat. Add beef, and cook, crumbling with a wooden spoon, until browned, 4 to 5 minutes. Add snap peas, carrots and scallions, and cook, stirring often, until the peas are bright green, 2 to 3 minutes.",
      "Add sauce, the noodles and about half of the reserved cooking liquid; stir with tongs to coat. Reduce heat to medium-low; simmer, adding more of the reserved cooking liquid to moisten if necessary and stirring occasionally, until the vegetables are crisp-tender, 2 to 3 minutes longer. Serve hot with chopped peanuts and lime wedges."
    ],
    "calorie": 465,
    "carbs": 65,
    "protein": 23,
    "fat": 13,
    "serving": 3,
    "time": 25
  },
  {
    "id": 9,
    "name": "Waffles",
    "category": "snack",
    "image": "assets/food-9.jpg",
    "description": "Waffles are a dish enjoyed throughout the world, especially in the United States and Belgium, where there are dozens of variations in different regions.",
    "ingredients": [
      ["baking powder","2 g"],
      ["corn starch flour", "20 g"],
      ["unsalted butter", "60 g"],
      ["egg","1/2 large"],
      ["white flour","120 grams"],
      ["milk","240 ml"],
      ["salt","1/2 tsp"],
      ["vanilla extract","1/2 tsp"],
      ["granulated sugar", "10 grams"]
    ],
    "direction": [
      "Warm the milk but don't boil it, add the butter, stir until the butter melts, set aside.",
      "Mix the dry ingredients together.",
      "Add the eggs to the milk then add the vanilla extract.\n4. Mix everything until smooth. Leave it for 15 minutes.",
      "Cook in a waffle iron until golden.\nServe with fruit or your desired toppings."
    ],
    "calorie": 967,
    "carbs": 26.41,
    "protein": 4.78,
    "fat": 11.32,
    "serving": 5,
    "time": 20
  },
  {
    "id": 10,
    "name": "Banana cake",
    "category": "snack",
    "image": "assets/food-10.jpg",
    "description": "Banana cake is a cake made using bananas as the main ingredient and a typical cake ingredient.",
    "ingredients":[
      ["stevia sweetener","3 g"],
      ["wpro milk tea","15 g"],
      ["instant oatmeal","50 g"],
      ["egg","1 large"],
      ["cinnamon","1 tsp"],
      ["salt","1/4 tsp"],
      ["extra large banana","1"],
      ["baking soda","1 tsp"]
    ],
    "direction": [
      "Mash the banana.",
      "Stir the eggs until foamy, add them to the bananas.",
      "Add the remaining ingredients and mix well.",
      "Divide the dough into molds and bake in the oven at 210°C for 15-20 minutes."
    ],
    "calorie": 118,
    "carbs": 19.31,
    "protein": 6.3,
    "fat": 2.76,
    "serving": 4,
    "time": 20
  },
  {
    "id": 11,
    "name": "Banana oatmeal cakes",
    "category": "snack",
    "image": "assets/food-11.jpg",
    "description": "Banana oat cakes are a healthier version of traditional banana cakes and are made with whole wheat flour instead of refined flour.",
    "ingredients": [
      ["baking powder","10 g"],
      ["milk","30 grams"],
      ["wheat rolls","80 g"],
      ["extra large egg","1"],
      ["honey","1 tbsp"],
      ["banana","175 grams"],
      ["white wheat flour (all needed)","50 grams"]
    ],
    "direction" :[
      "Peel and mash the banana. Mix with eggs, milk and honey.",
      "Add dry ingredients and mix well.",
      "Transfer to a baking sheet and cook in the oven at 180°C for 30 minutes.",
      "Let cool, unmold, and cut into pieces."
    ],
    "calorie": 103,
    "carbs": 19.26,
    "protein": 3.18,
    "fat": 1.93,
    "serving": 8,
    "time": 30
  },
  {
    "id": 12,
    "name": "Oats with fruit",
    "category": "breakfast",
    "image": "assets/food-12.jpg",
    "description": "This processed wheat menu is included in the list of salad dishes.",
    "ingredients":[
      ["honey","1 tbsp"],
      ["oats","3 tbsp"],
      ["strawberry yogurt","1 glass"],
      ["dragon fruit","100 g"],
      [" apples","100 g"]
    ],
    "direction": [
      "Cook the wheat with water according to the package.",
      "Transfer to a bowl then add the yogurt.",
      "Slice the fruit and add to the bowl. Drizzle with honey."
    ],
    "calorie": 251,
    "carbs": 50.22,
    "protein": 4.57,
    "fat": 3.8,
    "serving": 2,
    "time": 10
  },
  {
    "id": 13,
    "name": "Omelet sandwiches",
    "category": "breakfast",
    "image": "assets/food-13.jpg",
    "description": "Sarapan atau snack menggunakan 4 bahan.",
    "ingredients": [
      ["medium leaf lettuce","1"],
      ["whole wheat bread","1 slice"],
      ["large omelet","1"],
      ["whole medium red tomato","1"]
    ],
    "direction": [
      "Toast the bread in a nonstick skillet for one minute on each side.",
      "Arrange the omelet and vegetables on the bread.",
      "Slice and serve."
    ],
    "calorie": 306,
    "carbs": 36.48,
    "protein": 13.63,
    "fat": 11.59,
    "serving": 1,
    "time": 15
  },
  {
    "id": 14,
    "name": "Black pepper squid",
    "category": "lunch",
    "image": "assets/food-14.png",
    "description": "Made specially with fresh squid.",
    "ingredients": [
      ["black pepper sauce","1 spoon"],
      ["cooking oil","1 tablespoon"],
      ["squid","300 grams"],
      ["cherry tomatoes","2"],
      ["onions","100 grams"],
      ["large red chilies","50 gram"],
      ["water","50 ml"]
    ],
    "direction": [
      "Split the onion in half and slice it in half lengthwise and sauté in oil until fragrant.",
      "Add squid, chili, black pepper sauce and water.",
      "Then add the tomatoes, sauté everything until cooked."
    ],
    "calorie": 107,
    "carbs": 6.46,
    "protein": 12.17,
    "fat": 3.36,
    "serving": 4,
    "time": 15
  },
  {
    "id": 15,
    "name": "Fried Shirataki Noodles",
    "category": "lunch",
    "image": "assets/food-15.jpg",
    "description": "So delicious and easy to cook",
    "ingredients": [
      ["Cooking oil", "3 ml"],
      ["Onion chili sauce", "8 g"],
      ["Sweet soy sauce", "1 tbsp"],
      ["Chicken breast", "45 g"],
      ["Omega eggs", "65 g"],
      ["Cherry tomatoes", "30 g"],
      ["Dry shirataki noodles", "75 g"],
      ["Salt", "1 pinch"],
      ["Wholepcportable mushrooms", "1"]
    ],
    "direction": [
      "Heat a frying pan with oil and sauté sliced chicken breast and mushrooms.",
      "Add the previously scrambled eggs, tomato slices and other ingredients, cook until cooked.",
      "Transfer to a plate and serve. Enjoy."
    ],
    "calorie": 175,
    "carbs": 19.04,
    "protein": 9.13,
    "fat": 5.92,
    "serving": 2,
    "time": 10
  },
  {
    "id": 16,
    "name": "Vegetable Fried Rice",
    "category": "lunch",
    "image": "assets/food-16.jpg",
    "description": "A filling dish, loaded with nutrients",
    "ingredients": [
      ["fried chili sauce", "1 tbsp"],
      ["Large egg", "1"],
      ["Cook white rice", "1 bowl"],
      ["Carrots", "100 g"],
      ["Coleslaw", "100 g"],
      ["Green mustard greens", "100 g"]
    ],
    "direction": [
      "In a nonstick skillet, beat the eggs.",
      "Add rice and chili sauce. Stirring.",
      "Add vegetables and stir well.",
      "Season to taste."
    ],
    "calorie": 416,
    "carbs": 70.19,
    "protein": 15.58,
    "fat": 8.87,
    "serving": 1,
    "time": 10
  },
  {
    "id": 17,
    "name": "Vermicelli With Vegetables",
    "category": "lunch",
    "image": "assets/food-17.jpg",
    "description": "Simple, low calorie dish.",
    "ingredients": [
      ["Chicken onion flavored vermicelli", "55 g"],
      ["Carrots", "60 g"],
      ["Broccoli (with salt, drained, cooked, boiled)", "60 g"]
    ],
    "direction": [
      "Cook the noodles according to the packaging instructions.",
      "Boil vegetables for 5 minutes.",
      "Mix noodles and vegetables, season as desired, and serve."
    ],
    "calorie": 242,
    "carbs": 47.79,
    "protein": 4.35,
    "fat": 3.85,
    "serving": 1,
    "time": 10
  },
  {
    "id": 18,
    "name": "Banana And Cheese Bread",
    "category": "snack",
    "image": "assets/food-18.jpg",
    "description": "Easy to prepare snack with 3 ingredients",
    "ingredients": [
      ["Quick melted cheese", "30 gram"],
      ["Slice of whole wheat bread", "1 slice"],
      ["Banana", "100 g"]
    ],
    "direction": [
      "Banana slices and grated cheese.",
      "Arrange on bread.",
      "Cook in an air fryer at 190°C for 5 minutes."
    ],
    "calorie": 280,
    "carbs": 41.5,
    "protein": 9,
    "fat": 8.75,
    "serving": 1,
    "time": 5
  }
];

export default recipes;
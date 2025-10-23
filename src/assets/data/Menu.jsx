const foodData={
  "menu": [
   
    {
      "category": "Most Wanted",
      "items": [
        {
          "name": "Dragon Roll",
          "name_jp": "ドラゴンロール",
          "description": "Avocado, eel, cucumber with sweet soy glaze.",
          "quantity": "8 pieces",
          "ingredients": ["Eel", "Avocado", "Cucumber", "Sushi rice", "Eel sauce"],
          "price": 13.99,
          "image": "https://example.com/images/dragon-roll.jpg"
        },
        {
          "name": "Volcano Roll",
          "name_jp": "ボルケーノロール",
          "description": "Spicy baked scallop over California roll.",
          "quantity": "8 pieces",
          "ingredients": ["Scallop", "Spicy mayo", "Crab", "Avocado"],
          "price": 14.5,
          "image": "https://example.com/images/volcano-roll.jpg"
        },
        {
          "name": "Crunchy Tempura Roll",
          "name_jp": "カリカリ天ぷらロール",
          "description": "Tempura shrimp with crunchy flakes and spicy sauce.",
          "quantity": "8 pieces",
          "ingredients": ["Shrimp tempura", "Cucumber", "Crunch flakes", "Spicy mayo"],
          "price": 12.99,
          "image": "https://example.com/images/crunchy-tempura-roll.jpg"
        },
        {
          "name": "Rainbow Roll",
          "name_jp": "レインボーロール",
          "description": "California roll topped with assorted sashimi.",
          "quantity": "8 pieces",
          "ingredients": ["Assorted sashimi", "Crab", "Avocado", "Rice"],
          "price": 15.0,
          "image": "https://example.com/images/rainbow-roll.jpg"
        },
        {
          "name": "Spicy Salmon Roll",
          "name_jp": "スパイシーサーモンロール",
          "description": "Spicy salmon mix with scallions rolled inside rice.",
          "quantity": "8 pieces",
          "ingredients": ["Salmon", "Spicy sauce", "Scallions", "Rice"],
          "price": 11.99,
          "image": "https://example.com/images/spicy-salmon-roll.jpg"
        },
        {
          "name": "Crunch Avocado Maki",
          "name_jp": "クリスピーアボカド巻き",
          "description": "Avocado maki topped with crunchy tempura bits.",
          "quantity": "6 pieces",
          "ingredients": ["Avocado", "Rice", "Nori", "Tempura flakes"],
          "price": 8.99,
          "image": "https://example.com/images/crunch-avocado-maki.jpg"
        },
        {
          "name": "Firecracker Roll",
          "name_jp": "ファイアクラッカーロール",
          "description": "Jalapeño, spicy tuna and a hot chili drizzle.",
          "quantity": "8 pieces",
          "ingredients": ["Tuna", "Jalapeño", "Spicy sauce", "Rice"],
          "price": 14.25,
          "image": "https://example.com/images/firecracker-roll.jpg"
        },
        {
          "name": "Crispy Ebi Roll",
          "name_jp": "クリスピー海老ロール",
          "description": "Crispy fried shrimp roll with tangy slaw.",
          "quantity": "8 pieces",
          "ingredients": ["Shrimp", "Cabbage slaw", "Mayo", "Rice"],
          "price": 12.5,
          "image": "https://example.com/images/crispy-ebi-roll.jpg"
        },
        {
          "name": "Garlic Butter Salmon Roll",
          "name_jp": "ガーリックバターサーモンロール",
          "description": "Seared garlic-butter salmon atop a roll.",
          "quantity": "8 pieces",
          "ingredients": ["Salmon", "Garlic butter", "Rice", "Avocado"],
          "price": 16.0,
          "image": "https://example.com/images/garlic-butter-salmon-roll.jpg"
        },
        {
          "name": "Veggie Deluxe Roll",
          "name_jp": "ベジーデラックスロール",
          "description": "A vegetarian favorite with grilled veggies and sesame.",
          "quantity": "8 pieces",
          "ingredients": ["Grilled vegetables", "Sesame", "Avocado", "Rice"],
          "price": 10.5,
          "image": "https://example.com/images/veggie-deluxe-roll.jpg"
        }
      ]
    },
    {
      "category": "New",
      "items": [
        {
          "name": "Truffle Salmon Sushi",
          "name_jp": "トリュフサーモン寿司",
          "description": "Seared salmon with truffle oil and yuzu.",
          "quantity": "2 pieces",
          "ingredients": ["Salmon", "Truffle oil", "Yuzu", "Rice"],
          "price": 15.5,
          "image": "https://example.com/images/truffle-salmon-sushi.jpg"
        },
        {
          "name": "Crispy Tempura Uramaki",
          "name_jp": "クリスピーテンパウラ巻き",
          "description": "Deep-fried sushi roll with spicy sauce.",
          "quantity": "8 pieces",
          "ingredients": ["Tempura shrimp", "Spicy mayo", "Rice", "Nori"],
          "price": 12.99,
          "image": "https://example.com/images/crispy-tempura-uramaki.jpg"
        },
        {
          "name": "Yuzu Citrus Tuna",
          "name_jp": "柚子シトラスタマグロ",
          "description": "Tuna sashimi with a fresh yuzu-citrus dressing.",
          "quantity": "6 slices",
          "ingredients": ["Tuna", "Yuzu", "Soy sauce", "Scallion"],
          "price": 13.0,
          "image": "https://example.com/images/yuzu-citrus-tuna.jpg"
        },
        {
          "name": "Miso Butter Clams",
          "name_jp": "味噌バターのあさり",
          "description": "Clams simmered in a rich miso-butter sauce.",
          "quantity": "1 bowl",
          "ingredients": ["Clams", "Miso", "Butter", "Garlic"],
          "price": 9.99,
          "image": "https://example.com/images/miso-butter-clams.jpg"
        },
        {
          "name": "Black Garlic Ramen Bowl",
          "name_jp": "黒にんにくラーメン",
          "description": "Ramen with black garlic oil and tender pork slices.",
          "quantity": "1 bowl",
          "ingredients": ["Noodles", "Pork", "Black garlic oil", "Egg"],
          "price": 12.5,
          "image": "https://example.com/images/black-garlic-ramen.jpg"
        },
        {
          "name": "Matcha Tiramisu",
          "name_jp": "抹茶ティラミス",
          "description": "Creamy tiramisu with matcha-soaked layers.",
          "quantity": "1 serving",
          "ingredients": ["Mascarpone", "Matcha", "Ladyfingers", "Sugar"],
          "price": 6.5,
          "image": "https://example.com/images/matcha-tiramisu.jpg"
        },
        {
          "name": "Crispy Tofu Bao",
          "name_jp": "クリスピートーフバオ",
          "description": "Soft bao filled with crispy tofu and pickled veg.",
          "quantity": "2 pieces",
          "ingredients": ["Tofu", "Bao buns", "Pickled vegetables", "Sauce"],
          "price": 7.99,
          "image": "https://example.com/images/crispy-tofu-bao.jpg"
        },
        {
          "name": "Wasabi Lobster Roll",
          "name_jp": "ワサビロブスターロール",
          "description": "Lobster with a hint of wasabi mayo in a soft roll.",
          "quantity": "6 pieces",
          "ingredients": ["Lobster", "Wasabi mayo", "Lettuce", "Brioche"],
          "price": 21.0,
          "image": "https://example.com/images/wasabi-lobster-roll.jpg"
        },
        {
          "name": "Charred Scallop Nigiri",
          "name_jp": "炙りホタテ握り",
          "description": "Lightly torched scallop on seasoned rice.",
          "quantity": "2 pieces",
          "ingredients": ["Scallop", "Sushi rice", "Light soy glaze"],
          "price": 9.5,
          "image": "https://example.com/images/charred-scallop-nigiri.jpg"
        },
        {
          "name": "Citrus Poke Bowl",
          "name_jp": "シトラスポケボウル",
          "description": "Fresh sashimi cubes with citrus ponzu over rice.",
          "quantity": "1 bowl",
          "ingredients": ["Tuna", "Rice", "Ponzu", "Avocado"],
          "price": 11.5,
          "image": "https://example.com/images/citrus-poke-bowl.jpg"
        }
      ]
    },
    {
      "category": "Appetiser and Salad",
      "items": [
        {
          "name": "Edamame",
          "name_jp": "枝豆",
          "description": "Steamed soybeans with sea salt.",
          "quantity": "1 bowl",
          "ingredients": ["Edamame", "Sea salt"],
          "price": 4.99,
          "image": "https://example.com/images/edamame.jpg"
        },
        {
          "name": "Seaweed Salad",
          "name_jp": "海藻サラダ",
          "description": "Fresh seaweed with sesame dressing.",
          "quantity": "1 plate",
          "ingredients": ["Seaweed", "Sesame oil", "Rice vinegar", "Sesame seeds"],
          "price": 5.99,
          "image": "https://example.com/images/seaweed-salad.jpg"
        },
        {
          "name": "Agedashi Tofu",
          "name_jp": "揚げ出し豆腐",
          "description": "Crispy fried tofu in dashi broth with green onion.",
          "quantity": "3 pieces",
          "ingredients": ["Tofu", "Dashi", "Flour", "Green onion"],
          "price": 6.5,
          "image": "https://example.com/images/agedashi-tofu.jpg"
        },
        {
          "name": "Goma-ae Spinach",
          "name_jp": "ほうれん草の胡麻和え",
          "description": "Blanched spinach tossed in sesame dressing.",
          "quantity": "1 plate",
          "ingredients": ["Spinach", "Sesame paste", "Soy sauce", "Sugar"],
          "price": 5.5,
          "image": "https://example.com/images/goma-ae.jpg"
        },
        {
          "name": "Tuna Tartare",
          "name_jp": "ツナタルタル",
          "description": "Finely diced tuna with ponzu and avocado.",
          "quantity": "1 serving",
          "ingredients": ["Tuna", "Avocado", "Ponzu", "Scallion"],
          "price": 8.99,
          "image": "https://example.com/images/tuna-tartare.jpg"
        },
        {
          "name": "Shishito Peppers",
          "name_jp": "ししとう",
          "description": "Blistered shishito peppers with sea salt.",
          "quantity": "6 pieces",
          "ingredients": ["Shishito peppers", "Sea salt", "Soy"],
          "price": 6.0,
          "image": "https://example.com/images/shishito-peppers.jpg"
        },
        {
          "name": "Pickled Vegetables",
          "name_jp": "漬物盛り合わせ",
          "description": "Assortment of Japanese pickled vegetables.",
          "quantity": "1 plate",
          "ingredients": ["Daikon", "Cucumber", "Carrot", "Pickling brine"],
          "price": 4.5,
          "image": "https://example.com/images/pickled-veg.jpg"
        },
        {
          "name": "Octopus Sunomono",
          "name_jp": "たこの酢の物",
          "description": "Chilled octopus with vinegared cucumber salad.",
          "quantity": "1 bowl",
          "ingredients": ["Octopus", "Cucumber", "Rice vinegar", "Sugar"],
          "price": 7.5,
          "image": "https://example.com/images/octopus-sunomono.jpg"
        },
        {
          "name": "Japanese Potato Salad",
          "name_jp": "ポテトサラダ",
          "description": "Creamy potato salad with carrot and cucumber.",
          "quantity": "1 serving",
          "ingredients": ["Potato", "Carrot", "Cucumber", "Mayonnaise"],
          "price": 5.0,
          "image": "https://example.com/images/japanese-potato-salad.jpg"
        },
        {
          "name": "Crispy Seaweed Chips",
          "name_jp": "海苔チップス",
          "description": "Crunchy seaweed chips lightly salted.",
          "quantity": "1 basket",
          "ingredients": ["Nori", "Oil", "Salt"],
          "price": 3.99,
          "image": "https://example.com/images/seaweed-chips.jpg"
        }
      ]
    },
    {
      "category": "Set",
      "items": [
        {
          "name": "Sushi Set A",
          "name_jp": "寿司セットA",
          "description": "6 sushi pieces, 1 roll, miso soup.",
          "quantity": "1 set",
          "ingredients": ["Assorted sushi", "1 roll", "Miso soup"],
          "price": 18.99,
          "image": "https://example.com/images/sushi-set-a.jpg"
        },
        {
          "name": "Deluxe Bento",
          "name_jp": "デラックス弁当",
          "description": "Includes rice, meat, veggies, and side dish.",
          "quantity": "1 box",
          "ingredients": ["Rice", "Meat", "Vegetables", "Pickles"],
          "price": 21.99,
          "image": "https://example.com/images/deluxe-bento.jpg"
        },
        {
          "name": "Vegetarian Set",
          "name_jp": "ベジタリアンセット",
          "description": "A balanced set with veggie sushi and sides.",
          "quantity": "1 set",
          "ingredients": ["Vegetable rolls", "Salad", "Soup"],
          "price": 16.5,
          "image": "https://example.com/images/vegetarian-set.jpg"
        },
        {
          "name": "Family Feast Set",
          "name_jp": "ファミリーフィーストセット",
          "description": "Large platter for 3-4 people with assorted rolls.",
          "quantity": "Serves 3-4",
          "ingredients": ["Assorted rolls", "Sashimi", "Sides"],
          "price": 48.0,
          "image": "https://example.com/images/family-feast.jpg"
        },
        {
          "name": "Lunch Combo B",
          "name_jp": "ランチコンボB",
          "description": "1 main, rice, small salad, and miso soup.",
          "quantity": "1 combo",
          "ingredients": ["Main dish", "Rice", "Salad", "Soup"],
          "price": 13.99,
          "image": "https://example.com/images/lunch-combo-b.jpg"
        },
        {
          "name": "Sashimi Set",
          "name_jp": "刺身セット",
          "description": "10 slices of assorted sashimi with rice.",
          "quantity": "1 set",
          "ingredients": ["Tuna", "Salmon", "Yellowtail", "Rice"],
          "price": 26.5,
          "image": "https://example.com/images/sashimi-set.jpg"
        },
        {
          "name": "Tempura Set",
          "name_jp": "天ぷらセット",
          "description": "Tempura platter with rice and dipping sauce.",
          "quantity": "1 set",
          "ingredients": ["Shrimp", "Seasonal veg", "Rice", "Sauce"],
          "price": 17.99,
          "image": "https://example.com/images/tempura-set.jpg"
        },
        {
          "name": "Ramen & Gyoza Set",
          "name_jp": "ラーメンと餃子セット",
          "description": "Bowl of ramen with 5 pieces of gyoza.",
          "quantity": "1 set",
          "ingredients": ["Noodles", "Broth", "Gyoza", "Vegetables"],
          "price": 14.5,
          "image": "https://example.com/images/ramen-gyoza-set.jpg"
        },
        {
          "name": "Sushi & Sake Pair",
          "name_jp": "寿司と酒のペア",
          "description": "Small sushi platter with a glass of sake.",
          "quantity": "1 set",
          "ingredients": ["Sushi", "Sake"],
          "price": 20.0,
          "image": "https://example.com/images/sushi-sake-pair.jpg"
        },
        {
          "name": "Kids Bento",
          "name_jp": "キッズ弁当",
          "description": "Child-friendly portions with rice and fruit.",
          "quantity": "1 box",
          "ingredients": ["Rice", "Chicken nugget", "Fruit", "Veggies"],
          "price": 9.99,
          "image": "https://example.com/images/kids-bento.jpg"
        }
      ]
    },
    {
      "category": "Rolls and Maki",
      "subcategories": {
        "Roll": [
          {
            "name": "California Roll",
            "name_jp": "カリフォルニアロール",
            "description": "Crab, avocado, cucumber.",
            "quantity": "8 pieces",
            "ingredients": ["Crab", "Avocado", "Cucumber", "Rice"],
            "price": 7.99,
            "image": "https://example.com/images/california-roll.jpg"
          },
          {
            "name": "Philadelphia Roll",
            "name_jp": "フィラデルフィアロール",
            "description": "Smoked salmon, cream cheese, cucumber.",
            "quantity": "8 pieces",
            "ingredients": ["Smoked salmon", "Cream cheese", "Cucumber", "Rice"],
            "price": 9.5,
            "image": "https://example.com/images/philadelphia-roll.jpg"
          },
          {
            "name": "Spicy Tuna Roll",
            "name_jp": "スパイシーツナロール",
            "description": "Spicy tuna with scallion.",
            "quantity": "8 pieces",
            "ingredients": ["Tuna", "Spicy mayo", "Scallion", "Rice"],
            "price": 9.0,
            "image": "https://example.com/images/spicy-tuna-roll.jpg"
          },
          {
            "name": "Dragonfly Roll",
            "name_jp": "ドラゴンフライロール",
            "description": "Eel and avocado topped roll.",
            "quantity": "8 pieces",
            "ingredients": ["Eel", "Avocado", "Cucumber", "Eel sauce"],
            "price": 14.0,
            "image": "https://example.com/images/dragonfly-roll.jpg"
          },
          {
            "name": "Tempura Crunch Roll",
            "name_jp": "天ぷらクランチロール",
            "description": "Tempura shrimp with crunchy topping.",
            "quantity": "8 pieces",
            "ingredients": ["Shrimp tempura", "Crunch", "Cucumber", "Rice"],
            "price": 12.0,
            "image": "https://example.com/images/tempura-crunch-roll.jpg"
          },
          {
            "name": "Green Goddess Roll",
            "name_jp": "グリーンゴッドロール",
            "description": "Avocado, cucumber, and herb mix.",
            "quantity": "8 pieces",
            "ingredients": ["Avocado", "Cucumber", "Herb mix", "Rice"],
            "price": 10.0,
            "image": "https://example.com/images/green-goddess-roll.jpg"
          },
          {
            "name": "BBQ Eel Roll",
            "name_jp": "バーベキューウナギロール",
            "description": "Grilled eel with barbecue glaze.",
            "quantity": "8 pieces",
            "ingredients": ["Eel", "Barbecue glaze", "Rice"],
            "price": 13.5,
            "image": "https://example.com/images/bbq-eel-roll.jpg"
          },
          {
            "name": "Crispy Chicken Roll",
            "name_jp": "クリスピーチキンロール",
            "description": "Fried chicken with spicy slaw.",
            "quantity": "8 pieces",
            "ingredients": ["Chicken", "Slaw", "Spicy mayo", "Rice"],
            "price": 11.25,
            "image": "https://example.com/images/crispy-chicken-roll.jpg"
          },
          {
            "name": "Mango Tango Roll",
            "name_jp": "マンゴータンゴロール",
            "description": "Mango and coconut cream roll.",
            "quantity": "6 pieces",
            "ingredients": ["Mango", "Coconut", "Rice"],
            "price": 9.75,
            "image": "https://example.com/images/mango-tango-roll.jpg"
          },
          {
            "name": "Teriyaki Beef Roll",
            "name_jp": "照り焼きビーフロール",
            "description": "Teriyaki beef and scallion roll.",
            "quantity": "8 pieces",
            "ingredients": ["Beef", "Teriyaki sauce", "Scallion", "Rice"],
            "price": 12.5,
            "image": "https://example.com/images/teriyaki-beef-roll.jpg"
          }
        ],
        "Hot roll": [
          {
            "name": "Spicy Tuna Tempura Roll",
            "name_jp": "スパイシーツナ天ぷらロール",
            "description": "Fried roll with spicy tuna inside.",
            "quantity": "8 pieces",
            "ingredients": ["Tuna", "Tempura batter", "Spicy mayo", "Rice"],
            "price": 9.5,
            "image": "https://example.com/images/spicy-tuna-tempura.jpg"
          },
          {
            "name": "Baked Salmon Roll",
            "name_jp": "焼きサーモンロール",
            "description": "Baked salmon with a creamy glaze.",
            "quantity": "8 pieces",
            "ingredients": ["Salmon", "Creamy glaze", "Rice"],
            "price": 13.0,
            "image": "https://example.com/images/baked-salmon-roll.jpg"
          },
          {
            "name": "Volcano Baked Roll",
            "name_jp": "ボルケーノ焼きロール",
            "description": "Baked scallop and spicy topping.",
            "quantity": "8 pieces",
            "ingredients": ["Scallop", "Spicy mayo", "Cheese", "Rice"],
            "price": 14.5,
            "image": "https://example.com/images/volcano-baked-roll.jpg"
          },
          {
            "name": "Dynamite Roll",
            "name_jp": "ダイナマイトロール",
            "description": "Hot baked mix with seafood and chili.",
            "quantity": "8 pieces",
            "ingredients": ["Mixed seafood", "Chili", "Mayo", "Rice"],
            "price": 13.75,
            "image": "https://example.com/images/dynamite-roll.jpg"
          },
          {
            "name": "Spicy Scallop Hot Roll",
            "name_jp": "スパイシーホタテホットロール",
            "description": "Scallop with hot chili glaze, baked to perfection.",
            "quantity": "8 pieces",
            "ingredients": ["Scallop", "Chili glaze", "Rice"],
            "price": 14.0,
            "image": "https://example.com/images/spicy-scallop-hot-roll.jpg"
          },
          {
            "name": "Cheesy Crab Hot Roll",
            "name_jp": "チーズクラブホットロール",
            "description": "Crab mix with melted cheese layer.",
            "quantity": "8 pieces",
              "ingredients": ["Crab", "Cheese", "Mayo", "Rice"],
            "price": 12.99,
            "image": "https://example.com/images/cheesy-crab-hot-roll.jpg"
          },
          {
            "name": "Teriyaki Salmon Hot Roll",
            "name_jp": "照り焼きサーモンホットロール",
            "description": "Salmon with teriyaki glaze, briefly baked.",
            "quantity": "8 pieces",
            "ingredients": ["Salmon", "Teriyaki", "Rice"],
            "price": 13.25,
            "image": "https://example.com/images/teriyaki-salmon-hot-roll.jpg"
          },
          {
            "name": "Cajun Shrimp Hot Roll",
            "name_jp": "ケイジャンシュリンプホットロール",
            "description": "Spicy cajun-seasoned shrimp baked on top.",
            "quantity": "8 pieces",
            "ingredients": ["Shrimp", "Cajun spice", "Rice"],
            "price": 13.5,
            "image": "https://example.com/images/cajun-shrimp-hot-roll.jpg"
          },
          {
            "name": "Wasabi Mayo Hot Roll",
            "name_jp": "ワサビマヨホットロール",
            "description": "Baked roll with wasabi-mayo topping for a kick.",
            "quantity": "8 pieces",
            "ingredients": ["Wasabi mayo", "Seafood mix", "Rice"],
            "price": 12.5,
            "image": "https://example.com/images/wasabi-mayo-hot-roll.jpg"
          },
          {
            "name": "Garlic Butter Hot Roll",
            "name_jp": "ガーリックバターホットロール",
            "description": "Garlic-butter seared topping on a tempura roll.",
            "quantity": "8 pieces",
            "ingredients": ["Garlic butter", "Tempura shrimp", "Rice"],
            "price": 13.99,
            "image": "https://example.com/images/garlic-butter-hot-roll.jpg"
          }
        ],
        "Maki": [
          {
            "name": "Cucumber Maki",
            "name_jp": "かっぱ巻き",
            "description": "Fresh cucumber and rice roll.",
            "quantity": "6 pieces",
            "ingredients": ["Cucumber", "Rice", "Nori"],
            "price": 4.99,
            "image": "https://example.com/images/cucumber-maki.jpg"
          },
          {
            "name": "Avocado Maki",
            "name_jp": "アボカド巻き",
            "description": "Creamy avocado rolled with rice.",
            "quantity": "6 pieces",
            "ingredients": ["Avocado", "Rice", "Nori"],
            "price": 5.5,
            "image": "https://example.com/images/avocado-maki.jpg"
          },
          {
            "name": "Salmon Skin Maki",
            "name_jp": "鮭皮巻き",
            "description": "Crispy salmon skin with cucumber.",
            "quantity": "6 pieces",
            "ingredients": ["Salmon skin", "Cucumber", "Rice"],
            "price": 6.5,
            "image": "https://example.com/images/salmon-skin-maki.jpg"
          },
          {
            "name": "Spicy Cucumber Maki",
            "name_jp": "スパイシーかっぱ巻き",
            "description": "Cucumber with a spicy sesame dressing.",
            "quantity": "6 pieces",
            "ingredients": ["Cucumber", "Spicy sesame", "Rice"],
            "price": 5.25,
            "image": "https://example.com/images/spicy-cucumber-maki.jpg"
          },
          {
            "name": "Pickled Plum Maki",
            "name_jp": "梅しそ巻き",
            "description": "Pickled plum with shiso leaf for a tart bite.",
            "quantity": "6 pieces",
            "ingredients": ["Pickled plum", "Shiso", "Rice"],
            "price": 5.0,
            "image": "https://example.com/images/pickled-plum-maki.jpg"
          },
          {
            "name": "Sweet Potato Maki",
            "name_jp": "サツマイモ巻き",
            "description": "Roasted sweet potato in a sushi roll.",
            "quantity": "6 pieces",
            "ingredients": ["Sweet potato", "Rice", "Nori"],
            "price": 5.75,
            "image": "https://example.com/images/sweet-potato-maki.jpg"
          },
          {
            "name": "Ume Shiso Maki",
            "name_jp": "梅しそ巻き（定番）",
            "description": "Classic ume and shiso rolled.",
            "quantity": "6 pieces",
            "ingredients": ["Umeboshi", "Shiso", "Rice"],
            "price": 5.25,
            "image": "https://example.com/images/ume-shiso-maki.jpg"
          },
          {
            "name": "Pickled Radish Maki",
            "name_jp": "沢庵巻き",
            "description": "Crunchy pickled radish roll.",
            "quantity": "6 pieces",
            "ingredients": ["Takuan", "Rice", "Nori"],
            "price": 4.75,
            "image": "https://example.com/images/takuan-maki.jpg"
          },
          {
            "name": "Mentaiko Maki",
            "name_jp": "明太子巻き",
            "description": "Spicy cod roe rolled with rice.",
            "quantity": "6 pieces",
            "ingredients": ["Mentaiko", "Rice", "Nori"],
            "price": 6.0,
            "image": "https://example.com/images/mentaiko-maki.jpg"
          },
          {
            "name": "Soy Marinated Mushroom Maki",
            "name_jp": "きのこの醤油漬け巻き",
            "description": "Savory marinated mushrooms rolled in rice.",
            "quantity": "6 pieces",
            "ingredients": ["Mushrooms", "Soy marinade", "Rice"],
            "price": 6.25,
            "image": "https://example.com/images/mushroom-maki.jpg"
          }
        ],
        "Spring roll": [
          {
            "name": "Vegetable Spring Roll",
            "name_jp": "野菜の春巻き",
            "description": "Crispy spring roll with vegetable filling.",
            "quantity": "2 pieces",
            "ingredients": ["Cabbage", "Carrot", "Mushroom", "Wrapper"],
            "price": 5.5,
            "image": "https://example.com/images/vegetable-spring-roll.jpg"
          },
          {
            "name": "Chicken Spring Roll",
            "name_jp": "チキン春巻き",
            "description": "Fried roll with seasoned chicken filling.",
            "quantity": "2 pieces",
            "ingredients": ["Chicken", "Cabbage", "Carrot", "Wrapper"],
            "price": 6.0,
            "image": "https://example.com/images/chicken-spring-roll.jpg"
          },
          {
            "name": "Prawn Spring Roll",
            "name_jp": "海老春巻き",
            "description": "Crispy prawn-filled spring rolls served hot.",
            "quantity": "2 pieces",
            "ingredients": ["Prawn", "Cabbage", "Garlic", "Wrapper"],
            "price": 6.5,
            "image": "https://example.com/images/prawn-spring-roll.jpg"
          },
          {
            "name": "Sweet Chili Spring Roll",
            "name_jp": "スイートチリ春巻き",
            "description": "Spring rolls served with sweet chili dip.",
            "quantity": "2 pieces",
            "ingredients": ["Mixed veg", "Wrapper", "Sweet chili sauce"],
            "price": 5.75,
            "image": "https://example.com/images/sweet-chili-spring-roll.jpg"
          },
          {
            "name": "Tofu Spring Roll",
            "name_jp": "豆腐春巻き",
            "description": "Pan-fried tofu spring roll with sesame dip.",
            "quantity": "2 pieces",
            "ingredients": ["Tofu", "Cabbage", "Sesame dip", "Wrapper"],
            "price": 5.99,
            "image": "https://example.com/images/tofu-spring-roll.jpg"
          },
          {
            "name": "Kimchi Spring Roll",
            "name_jp": "キムチ春巻き",
            "description": "Korean-inspired kimchi filling with crunch.",
            "quantity": "2 pieces",
            "ingredients": ["Kimchi", "Cabbage", "Carrot", "Wrapper"],
            "price": 6.25,
            "image": "https://example.com/images/kimchi-spring-roll.jpg"
          },
          {
            "name": "Cheese Spring Roll",
            "name_jp": "チーズ春巻き",
            "description": "Melty cheese wrapped and deep fried.",
            "quantity": "2 pieces",
            "ingredients": ["Cheese", "Wrapper", "Herbs"],
            "price": 6.0,
            "image": "https://example.com/images/cheese-spring-roll.jpg"
          },
          {
            "name": "Mushroom Spring Roll",
            "name_jp": "きのこ春巻き",
            "description": "Umami-packed mushroom filling.",
            "quantity": "2 pieces",
            "ingredients": ["Mushroom", "Soy", "Wrapper"],
            "price": 5.9,
            "image": "https://example.com/images/mushroom-spring-roll.jpg"
          },
          {
            "name": "Crab Stick Spring Roll",
            "name_jp": "カニカマ春巻き",
            "description": "Crab stick and vegetable mix, crispy fried.",
            "quantity": "2 pieces",
            "ingredients": ["Crab stick", "Cabbage", "Wrapper"],
            "price": 6.1,
            "image": "https://example.com/images/crabstick-spring-roll.jpg"
          },
          {
            "name": "Vegetable & Noodle Spring Roll",
            "name_jp": "野菜と麺の春巻き",
            "description": "Spring roll with glass noodles and veg.",
            "quantity": "2 pieces",
            "ingredients": ["Glass noodles", "Cabbage", "Carrot", "Wrapper"],
            "price": 6.2,
            "image": "https://example.com/images/noodle-spring-roll.jpg"
          }
        ],
        "Sweet rolls": [
          {
            "name": "Mango Cream Roll",
            "name_jp": "マンゴークリームロール",
            "description": "Mango, coconut, and cream in sweet roll.",
            "quantity": "6 pieces",
            "ingredients": ["Mango", "Coconut cream", "Rice"],
            "price": 6.99,
            "image": "https://example.com/images/mango-cream-roll.jpg"
          },
          {
            "name": "Banana Tempura Roll",
            "name_jp": "バナナ天ぷらロール",
            "description": "Fried banana with caramel drizzle.",
            "quantity": "6 pieces",
            "ingredients": ["Banana", "Tempura batter", "Caramel"],
            "price": 6.5,
            "image": "https://example.com/images/banana-tempura-roll.jpg"
          },
          {
            "name": "Chocolate Drip Roll",
            "name_jp": "チョコレートドリップロール",
            "description": "Sweet roll topped with chocolate sauce.",
            "quantity": "6 pieces",
            "ingredients": ["Chocolate", "Cream", "Rice"],
            "price": 7.0,
            "image": "https://example.com/images/chocolate-drip-roll.jpg"
          },
          {
            "name": "Strawberry Cream Roll",
            "name_jp": "ストロベリークリームロール",
            "description": "Fresh strawberry and cream-filled roll.",
            "quantity": "6 pieces",
            "ingredients": ["Strawberry", "Cream", "Rice"],
            "price": 6.75,
            "image": "https://example.com/images/strawberry-cream-roll.jpg"
          },
          {
            "name": "Sweet Red Bean Roll",
            "name_jp": "あんこロール",
            "description": "Traditional red bean paste sweet roll.",
            "quantity": "6 pieces",
            "ingredients": ["Red bean paste", "Rice", "Sugar"],
            "price": 6.25,
            "image": "https://example.com/images/red-bean-roll.jpg"
          },
          {
            "name": "Green Tea Cream Roll",
            "name_jp": "抹茶クリームロール",
            "description": "Matcha-flavored cream with sweet rice.",
            "quantity": "6 pieces",
            "ingredients": ["Matcha", "Cream", "Rice"],
            "price": 7.25,
            "image": "https://example.com/images/matcha-cream-roll.jpg"
          },
          {
            "name": "Apple Cinnamon Roll",
            "name_jp": "アップルシナモンロール",
            "description": "Apple slices with cinnamon and cream.",
            "quantity": "6 pieces",
            "ingredients": ["Apple", "Cinnamon", "Cream"],
            "price": 6.8,
            "image": "https://example.com/images/apple-cinnamon-roll.jpg"
          },
          {
            "name": "Caramel Banana Roll",
            "name_jp": "キャラメルバナナロール",
            "description": "Banana with rich caramel sauce.",
            "quantity": "6 pieces",
            "ingredients": ["Banana", "Caramel", "Rice"],
            "price": 6.6,
            "image": "https://example.com/images/caramel-banana-roll.jpg"
          },
          {
            "name": "Coconut Cream Roll",
            "name_jp": "ココナッツクリームロール",
            "description": "Tropical coconut cream filling.",
            "quantity": "6 pieces",
            "ingredients": ["Coconut", "Cream", "Sugar"],
            "price": 6.9,
            "image": "https://example.com/images/coconut-cream-roll.jpg"
          },
          {
            "name": "Sweet Azuki & Chestnut Roll",
            "name_jp": "あずきと栗のロール",
            "description": "Azuki red bean paired with candied chestnut.",
            "quantity": "6 pieces",
            "ingredients": ["Azuki", "Chestnut", "Rice"],
            "price": 7.15,
            "image": "https://example.com/images/azuki-chestnut-roll.jpg"
          }
        ]
      }
    },
    {
      "category": "Sushi, Sashimi, Gunkan",
      "subcategories": {
        "Sushi": [
          {
            "name": "Salmon Nigiri",
            "name_jp": "サーモン握り",
            "description": "Fresh salmon on sushi rice.",
            "quantity": "2 pieces",
            "ingredients": ["Salmon", "Sushi rice", "Wasabi"],
            "price": 3.0,
            "image": "https://example.com/images/salmon-nigiri.jpg"
          },
          {
            "name": "Tuna Nigiri",
            "name_jp": "マグロ握り",
            "description": "Lean tuna on perfectly seasoned rice.",
            "quantity": "2 pieces",
            "ingredients": ["Tuna", "Sushi rice", "Soy sauce"],
            "price": 3.5,
            "image": "https://example.com/images/tuna-nigiri.jpg"
          },
          {
            "name": "Ebi Nigiri",
            "name_jp": "海老握り",
            "description": "Plump shrimp on sushi rice.",
            "quantity": "2 pieces",
            "ingredients": ["Shrimp", "Sushi rice", "Soy"],
            "price": 2.75,
            "image": "https://example.com/images/ebi-nigiri.jpg"
          },
          {
            "name": "Hamachi Nigiri",
            "name_jp": "はまち握り",
            "description": "Yellowtail nigiri with a touch of lemon.",
            "quantity": "2 pieces",
            "ingredients": ["Yellowtail", "Rice", "Lemon"],
            "price": 3.75,
            "image": "https://example.com/images/hamachi-nigiri.jpg"
          },
          {
            "name": "Unagi Nigiri",
            "name_jp": "うなぎ握り",
            "description": "Grilled eel glazed with sweet sauce.",
            "quantity": "2 pieces",
            "ingredients": ["Eel", "Eel sauce", "Rice"],
            "price": 4.5,
            "image": "https://example.com/images/unagi-nigiri.jpg"
          },
          {
            "name": "Tamago Nigiri",
            "name_jp": "玉子握り",
            "description": "Sweet Japanese omelette on rice.",
            "quantity": "2 pieces",
            "ingredients": ["Egg", "Rice", "Sugar", "Soy"],
            "price": 2.25,
            "image": "https://example.com/images/tamago-nigiri.jpg"
          },
          {
            "name": "Ikura Nigiri",
            "name_jp": "いくら握り",
            "description": "Salmon roe on rice with delicate seaweed.",
            "quantity": "2 pieces",
            "ingredients": ["Ikura", "Rice", "Nori"],
            "price": 4.0,
            "image": "https://example.com/images/ikura-nigiri.jpg"
          },
          {
            "name": "Scallop Nigiri",
            "name_jp": "ホタテ握り",
            "description": "Sweet scallop nigiri served raw.",
            "quantity": "2 pieces",
            "ingredients": ["Scallop", "Rice", "Light soy"],
            "price": 4.25,
            "image": "https://example.com/images/scallop-nigiri.jpg"
          },
          {
            "name": "Anago Nigiri",
            "name_jp": "穴子握り",
            "description": "Salt-water eel with sweet glaze.",
            "quantity": "2 pieces",
            "ingredients": ["Anago", "Eel sauce", "Rice"],
            "price": 4.0,
            "image": "https://example.com/images/anago-nigiri.jpg"
          },
          {
            "name": "Vegetable Nigiri Set",
            "name_jp": "野菜握りセット",
            "description": "Assorted vegetable-topped nigiri for vegetarians.",
            "quantity": "6 pieces",
            "ingredients": ["Grilled pepper", "Avocado", "Pickled radish", "Rice"],
            "price": 7.5,
            "image": "https://example.com/images/veg-nigiri-set.jpg"
          }
        ],
        "Gunkan": [
          {
            "name": "Ikura Gunkan",
            "name_jp": "いくら軍艦",
            "description": "Salmon roe in seaweed cup.",
            "quantity": "1 piece",
            "ingredients": ["Ikura", "Nori", "Rice"],
            "price": 4.5,
            "image": "https://example.com/images/ikura-gunkan.jpg"
          },
          {
            "name": "Uni Gunkan",
            "name_jp": "ウニ軍艦",
            "description": "Creamy sea urchin served on rice.",
            "quantity": "1 piece",
            "ingredients": ["Uni", "Rice", "Nori"],
            "price": 6.5,
            "image": "https://example.com/images/uni-gunkan.jpg"
          },
          {
            "name": "Tobiko Gunkan",
            "name_jp": "とびこ軍艦",
            "description": "Flying fish roe in a nori cup.",
            "quantity": "1 piece",
            "ingredients": ["Tobiko", "Rice", "Nori"],
            "price": 3.75,
            "image": "https://example.com/images/tobiko-gunkan.jpg"
          },
          {
            "name": "Corn Mayo Gunkan",
            "name_jp": "コーンマヨ軍艦",
            "description": "Sweetcorn mixed with mayonnaise atop rice.",
            "quantity": "1 piece",
            "ingredients": ["Corn", "Mayonnaise", "Rice", "Nori"],
            "price": 2.99,
            "image": "https://example.com/images/corn-mayo-gunkan.jpg"
          },
          {
            "name": "Spicy Salmon Gunkan",
            "name_jp": "スパイシーサーモン軍艦",
            "description": "Spicy salmon salad in a seaweed cup.",
            "quantity": "1 piece",
            "ingredients": ["Salmon", "Spicy mayo", "Rice", "Nori"],
            "price": 3.95,
            "image": "https://example.com/images/spicy-salmon-gunkan.jpg"
          },
          {
            "name": "Crab Salad Gunkan",
            "name_jp": "クラブサラダ軍艦",
            "description": "Creamy crab salad served gunkan-style.",
            "quantity": "1 piece",
            "ingredients": ["Crab", "Mayonnaise", "Rice", "Nori"],
            "price": 3.9,
            "image": "https://example.com/images/crab-salad-gunkan.jpg"
          },
          {
            "name": "Ebi Mayo Gunkan",
            "name_jp": "エビマヨ軍艦",
            "description": "Mini shrimp salad in nori cup.",
            "quantity": "1 piece",
            "ingredients": ["Shrimp", "Mayonnaise", "Rice", "Nori"],
            "price": 3.5,
            "image": "https://example.com/images/ebi-mayo-gunkan.jpg"
          },
          {
            "name": "Spicy Scallop Gunkan",
            "name_jp": "スパイシーホタテ軍艦",
            "description": "Scallop mix with chili atop rice.",
            "quantity": "1 piece",
            "ingredients": ["Scallop", "Spicy sauce", "Rice", "Nori"],
            "price": 4.25,
            "image": "https://example.com/images/spicy-scallop-gunkan.jpg"
          },
          {
            "name": "Avocado Gunkan",
            "name_jp": "アボカド軍艦",
            "description": "Creamy avocado in a seaweed cup.",
            "quantity": "1 piece",
            "ingredients": ["Avocado", "Rice", "Nori"],
            "price": 2.75,
            "image": "https://example.com/images/avocado-gunkan.jpg"
          },
          {
            "name": "Salmon Roe & Uni Gunkan Duo",
            "name_jp": "いくらとウニの軍艦デュオ",
            "description": "Half ikura and half uni gunkan for a rich bite.",
            "quantity": "1 piece",
            "ingredients": ["Ikura", "Uni", "Rice", "Nori"],
            "price": 7.5,
            "image": "https://example.com/images/ikura-uni-gunkan.jpg"
          }
        ],
        "Sashimi": [
          {
            "name": "Tuna Sashimi",
            "name_jp": "マグロ刺身",
            "description": "Slices of fresh tuna.",
            "quantity": "6 slices",
            "ingredients": ["Tuna", "Daikon", "Soy sauce"],
            "price": 8.5,
            "image": "https://example.com/images/tuna-sashimi.jpg"
          },
          {
            "name": "Salmon Sashimi",
            "name_jp": "サーモン刺身",
            "description": "Fresh salmon slices served chilled.",
            "quantity": "6 slices",
            "ingredients": ["Salmon", "Daikon", "Wasabi"],
            "price": 7.99,
            "image": "https://example.com/images/salmon-sashimi.jpg"
          },
          {
            "name": "Yellowtail Sashimi",
            "name_jp": "ハマチ刺身",
            "description": "Tender yellowtail slices with citrus.",
            "quantity": "6 slices",
            "ingredients": ["Yellowtail", "Yuzu", "Soy"],
            "price": 9.0,
            "image": "https://example.com/images/yellowtail-sashimi.jpg"
          },
          {
            "name": "Octopus Sashimi",
            "name_jp": "たこ刺身",
            "description": "Thinly sliced octopus with sesame oil.",
            "quantity": "6 slices",
            "ingredients": ["Octopus", "Sesame oil", "Soy"],
            "price": 7.25,
            "image": "https://example.com/images/octopus-sashimi.jpg"
          },
          {
            "name": "Mixed Sashimi Platter",
            "name_jp": "刺身盛り合わせ",
            "description": "Assorted sashimi for sharing.",
            "quantity": "12 slices",
            "ingredients": ["Tuna", "Salmon", "Yellowtail", "Octopus"],
            "price": 18.5,
            "image": "https://example.com/images/mixed-sashimi-platter.jpg"
          },
          {
            "name": "Seared Tuna Sashimi",
            "name_jp": "炙りマグロ刺身",
            "description": "Lightly seared tuna slices with sesame.",
            "quantity": "6 slices",
            "ingredients": ["Tuna", "Sesame", "Soy"],
            "price": 9.5,
            "image": "https://example.com/images/seared-tuna-sashimi.jpg"
          },
          {
            "name": "Kingfish Sashimi",
            "name_jp": "カンパチ刺身",
            "description": "Firm-textured kingfish slices.",
            "quantity": "6 slices",
            "ingredients": ["Kingfish", "Lemon", "Soy"],
            "price": 9.25,
            "image": "https://example.com/images/kingfish-sashimi.jpg"
          },
          {
            "name": "Truffle Salmon Sashimi",
            "name_jp": "トリュフサーモン刺身",
            "description": "Salmon sashimi with a light truffle drizzle.",
            "quantity": "6 slices",
            "ingredients": ["Salmon", "Truffle oil", "Yuzu"],
            "price": 12.5,
            "image": "https://example.com/images/truffle-salmon-sashimi.jpg"
          },
          {
            "name": "Mackerel Sashimi",
            "name_jp": "サバ刺身",
            "description": "Marinated mackerel slices with ginger.",
            "quantity": "6 slices",
            "ingredients": ["Mackerel", "Vinegar", "Ginger"],
            "price": 6.75,
            "image": "https://example.com/images/mackerel-sashimi.jpg"
          },
          {
            "name": "Salmon & Tuna Duo",
            "name_jp": "サーモンとマグロの二重奏",
            "description": "Three slices each of salmon and tuna.",
            "quantity": "6 slices",
            "ingredients": ["Salmon", "Tuna", "Daikon"],
            "price": 10.5,
            "image": "https://example.com/images/salmon-tuna-duo.jpg"
          }
        ],
        "Sushi sandwich": [
          {
            "name": "Salmon Avocado Sushi Sandwich",
            "name_jp": "サーモンアボカド寿司サンド",
            "description": "Sushi rice layered with salmon and avocado.",
            "quantity": "1 sandwich",
            "ingredients": ["Salmon", "Avocado", "Rice", "Nori"],
            "price": 7.99,
            "image": "https://example.com/images/salmon-avocado-sandwich.jpg"
          },
          {
            "name": "Spicy Tuna Sushi Sandwich",
            "name_jp": "スパイシーツナ寿司サンド",
            "description": "Spicy tuna between pressed rice layers.",
            "quantity": "1 sandwich",
            "ingredients": ["Tuna", "Spicy mayo", "Rice", "Nori"],
            "price": 8.5,
            "image": "https://example.com/images/spicy-tuna-sandwich.jpg"
          },
          {
            "name": "Grilled Eel Sushi Sandwich",
            "name_jp": "焼きうなぎ寿司サンド",
            "description": "Sweet grilled eel between rice layers.",
            "quantity": "1 sandwich",
            "ingredients": ["Eel", "Eel sauce", "Rice"],
            "price": 9.25,
            "image": "https://example.com/images/grilled-eel-sandwich.jpg"
          },
          {
            "name": "Vegetable Sushi Sandwich",
            "name_jp": "野菜寿司サンド",
            "description": "Layered rice sandwich filled with grilled veg.",
            "quantity": "1 sandwich",
            "ingredients": ["Grilled vegetables", "Rice", "Nori"],
            "price": 7.0,
            "image": "https://example.com/images/veg-sushi-sandwich.jpg"
          },
          {
            "name": "Crab Mayo Sushi Sandwich",
            "name_jp": "カニマヨ寿司サンド",
            "description": "Crab salad pressed between rice layers.",
            "quantity": "1 sandwich",
            "ingredients": ["Crab", "Mayonnaise", "Rice"],
            "price": 8.0,
            "image": "https://example.com/images/crab-mayo-sandwich.jpg"
          },
          {
            "name": "Smoked Salmon Sushi Sandwich",
            "name_jp": "スモークサーモン寿司サンド",
            "description": "Smoked salmon with cream cheese in rice layers.",
            "quantity": "1 sandwich",
            "ingredients": ["Smoked salmon", "Cream cheese", "Rice"],
            "price": 8.75,
            "image": "https://example.com/images/smoked-salmon-sandwich.jpg"
          },
          {
            "name": "Crispy Oyster Sushi Sandwich",
            "name_jp": "カキのクリスピー寿司サンド",
            "description": "Fried oyster with tangy slaw in rice sandwich.",
            "quantity": "1 sandwich",
            "ingredients": ["Oyster", "Slaw", "Rice"],
            "price": 9.5,
            "image": "https://example.com/images/oyster-sushi-sandwich.jpg"
          },
          {
            "name": "Tempura Veg Sushi Sandwich",
            "name_jp": "天ぷら野菜寿司サンド",
            "description": "Tempura vegetables layered with rice.",
            "quantity": "1 sandwich",
            "ingredients": ["Tempura veg", "Rice", "Nori"],
            "price": 7.5,
            "image": "https://example.com/images/tempura-veg-sandwich.jpg"
          },
          {
            "name": "Avocado Mango Sushi Sandwich",
            "name_jp": "アボカドマンゴー寿司サンド",
            "description": "Sweet and creamy fruit-savory fusion sandwich.",
            "quantity": "1 sandwich",
            "ingredients": ["Avocado", "Mango", "Rice"],
            "price": 8.25,
            "image": "https://example.com/images/avocado-mango-sandwich.jpg"
          },
          {
            "name": "Teriyaki Chicken Sushi Sandwich",
            "name_jp": "テリヤキチキン寿司サンド",
            "description": "Teriyaki-glazed chicken pressed between rice.",
            "quantity": "1 sandwich",
            "ingredients": ["Chicken", "Teriyaki", "Rice"],
            "price": 8.9,
            "image": "https://example.com/images/teriyaki-chicken-sandwich.jpg"
          }
        ]
      }
    },
    {
      "category": "Dishes",
      "subcategories": {
        "Soup": [
          {
            "name": "Miso Soup",
            "name_jp": "味噌汁",
            "description": "Traditional soup with tofu and seaweed.",
            "quantity": "1 bowl",
            "ingredients": ["Miso", "Tofu", "Seaweed", "Scallion"],
            "price": 2.99,
            "image": "https://example.com/images/miso-soup.jpg"
          },
          {
            "name": "Clear Dashi Soup",
            "name_jp": "だし汁",
            "description": "Light broth with seasonal mushrooms.",
            "quantity": "1 bowl",
            "ingredients": ["Dashi", "Mushrooms", "Scallion"],
            "price": 3.5,
            "image": "https://example.com/images/dashi-soup.jpg"
          },
          {
            "name": "Spicy Seafood Soup",
            "name_jp": "スパイシーシーフードスープ",
            "description": "Hot and tangy broth with mixed seafood.",
            "quantity": "1 bowl",
            "ingredients": ["Mixed seafood", "Chili", "Broth", "Veggies"],
            "price": 7.99,
            "image": "https://example.com/images/spicy-seafood-soup.jpg"
          },
          {
            "name": "Tofu & Wakame Soup",
            "name_jp": "豆腐とわかめの汁",
            "description": "Silky tofu with wakame seaweed.",
            "quantity": "1 bowl",
            "ingredients": ["Tofu", "Wakame", "Dashi"],
            "price": 3.25,
            "image": "https://example.com/images/tofu-wakame-soup.jpg"
          },
          {
            "name": "Clam Miso Soup",
            "name_jp": "あさりの味噌汁",
            "description": "Miso soup enriched with clams.",
            "quantity": "1 bowl",
            "ingredients": ["Clams", "Miso", "Scallion"],
            "price": 4.5,
            "image": "https://example.com/images/clam-miso-soup.jpg"
          },
          {
            "name": "Hot & Sour Soup",
            "name_jp": "酸辣湯",
            "description": "Tangy and spicy soup with bamboo and tofu.",
            "quantity": "1 bowl",
            "ingredients": ["Tofu", "Bamboo shoots", "Vinegar", "Chili"],
            "price": 5.0,
            "image": "https://example.com/images/hot-sour-soup.jpg"
          },
          {
            "name": "Creamy Corn Soup",
            "name_jp": "コーンクリームスープ",
            "description": "Sweet corn blended into a creamy soup.",
            "quantity": "1 bowl",
            "ingredients": ["Corn", "Cream", "Butter"],
            "price": 4.25,
            "image": "https://example.com/images/corn-soup.jpg"
          },
          {
            "name": "Chicken Udon Soup",
            "name_jp": "鶏肉うどんスープ",
            "description": "Udon in clear broth with shredded chicken.",
            "quantity": "1 bowl",
            "ingredients": ["Udon", "Chicken", "Broth", "Scallion"],
            "price": 8.5,
            "image": "https://example.com/images/chicken-udon-soup.jpg"
          },
          {
            "name": "Seafood Chowder",
            "name_jp": "シーフードチャウダー",
            "description": "Creamy chowder with shrimp and clams.",
            "quantity": "1 bowl",
            "ingredients": ["Shrimp", "Clams", "Cream", "Potato"],
            "price": 9.0,
            "image": "https://example.com/images/seafood-chowder.jpg"
          },
          {
            "name": "Matsutake Soup",
            "name_jp": "松茸のスープ",
            "description": "Aromatic matsutake mushroom clear soup.",
            "quantity": "1 bowl",
            "ingredients": ["Matsutake mushroom", "Dashi"],
            "price": 12.0,
            "image": "https://example.com/images/matsutake-soup.jpg"
          }
        ],
        "Rice": [
          {
            "name": "Steamed Rice",
            "name_jp": "白ご飯",
            "description": "Plain steamed rice.",
            "quantity": "1 bowl",
            "ingredients": ["Rice", "Water"],
            "price": 2.5,
            "image": "https://example.com/images/steamed-rice.jpg"
          },
          {
            "name": "Garlic Fried Rice",
            "name_jp": "ガーリックチャーハン",
            "description": "Wok-tossed rice with garlic and scallions.",
            "quantity": "1 plate",
            "ingredients": ["Rice", "Garlic", "Scallion", "Soy"],
            "price": 5.99,
            "image": "https://example.com/images/garlic-fried-rice.jpg"
          },
          {
            "name": "Tamago Don",
            "name_jp": "卵丼",
            "description": "Egg and dashi simmered over rice.",
            "quantity": "1 bowl",
            "ingredients": ["Egg", "Dashi", "Rice"],
            "price": 6.5,
            "image": "https://example.com/images/tamago-don.jpg"
          },
          {
            "name": "Unagi Don",
            "name_jp": "うなぎ丼",
            "description": "Grilled eel glazed on a bed of rice.",
            "quantity": "1 bowl",
            "ingredients": ["Eel", "Eel sauce", "Rice"],
            "price": 14.99,
            "image": "https://example.com/images/unagi-don.jpg"
          },
          {
            "name": "Tuna Mayo Don",
            "name_jp": "ツナマヨ丼",
            "description": "Tuna salad served over steamed rice.",
            "quantity": "1 bowl",
            "ingredients": ["Tuna", "Mayonnaise", "Rice"],
            "price": 7.5,
            "image": "https://example.com/images/tuna-mayo-don.jpg"
          },
          {
            "name": "Teriyaki Chicken Don",
            "name_jp": "照り焼きチキン丼",
            "description": "Glazed chicken atop rice with sesame.",
            "quantity": "1 bowl",
            "ingredients": ["Chicken", "Teriyaki", "Rice"],
            "price": 9.99,
            "image": "https://example.com/images/teriyaki-chicken-don.jpg"
          },
          {
            "name": "Vegetable Fried Rice",
            "name_jp": "野菜チャーハン",
            "description": "Mixed veggies wok-fried with rice.",
            "quantity": "1 plate",
            "ingredients": ["Rice", "Carrot", "Peas", "Soy"],
            "price": 6.99,
            "image": "https://example.com/images/vegetable-fried-rice.jpg"
          },
          {
            "name": "Curry Rice",
            "name_jp": "カレーライス",
            "description": "Japanese-style curry served over rice.",
            "quantity": "1 plate",
            "ingredients": ["Beef", "Curry roux", "Rice", "Potato"],
            "price": 10.5,
            "image": "https://example.com/images/curry-rice.jpg"
          },
          {
            "name": "Seafood Fried Rice",
            "name_jp": "シーフードチャーハン",
            "description": "Rice wok-fried with shrimp and squid.",
            "quantity": "1 plate",
            "ingredients": ["Shrimp", "Squid", "Rice", "Egg"],
            "price": 9.5,
            "image": "https://example.com/images/seafood-fried-rice.jpg"
          },
          {
            "name": "Onigiri Trio",
            "name_jp": "おにぎりトリオ",
            "description": "Three rice balls with different fillings.",
            "quantity": "3 pieces",
            "ingredients": ["Rice", "Salmon", "Umeboshi", "Seaweed"],
            "price": 5.99,
            "image": "https://example.com/images/onigiri-trio.jpg"
          }
        ],
        "Wok": [
          {
            "name": "Chicken Teriyaki Wok",
            "name_jp": "鶏の照り焼き炒め",
            "description": "Stir-fried chicken with teriyaki sauce.",
            "quantity": "1 plate",
            "ingredients": ["Chicken", "Teriyaki sauce", "Veggies"],
            "price": 9.99,
            "image": "https://example.com/images/chicken-teriyaki-wok.jpg"
          },
          {
            "name": "Beef & Broccoli",
            "name_jp": "ビーフとブロッコリー",
            "description": "Tender beef with garlic broccoli.",
            "quantity": "1 plate",
            "ingredients": ["Beef", "Broccoli", "Soy", "Garlic"],
            "price": 11.5,
            "image": "https://example.com/images/beef-broccoli.jpg"
          },
          {
            "name": "Vegetable Stir Fry",
            "name_jp": "野菜炒め",
            "description": "Mixed seasonal vegetables wok-tossed.",
            "quantity": "1 plate",
            "ingredients": ["Seasonal vegetables", "Soy", "Sesame oil"],
            "price": 8.25,
            "image": "https://example.com/images/vegetable-stir-fry.jpg"
          },
          {
            "name": "Spicy Tofu Wok",
            "name_jp": "スパイシートーフ炒め",
            "description": "Crispy tofu with spicy glaze and veggies.",
            "quantity": "1 plate",
            "ingredients": ["Tofu", "Chili sauce", "Veggies"],
            "price": 8.99,
            "image": "https://example.com/images/spicy-tofu-wok.jpg"
          },
          {
            "name": "Garlic Prawn Wok",
            "name_jp": "ガーリックエビ炒め",
            "description": "Prawns sautéed in garlic sauce with peppers.",
            "quantity": "1 plate",
            "ingredients": ["Prawns", "Garlic", "Peppers", "Soy"],
            "price": 12.99,
            "image": "https://example.com/images/garlic-prawn-wok.jpg"
          },
          {
            "name": "Sesame Beef Wok",
            "name_jp": "ゴマビーフ炒め",
            "description": "Beef with sesame and scallion over rice.",
            "quantity": "1 plate",
            "ingredients": ["Beef", "Sesame", "Scallion", "Rice"],
            "price": 11.99,
            "image": "https://example.com/images/sesame-beef-wok.jpg"
          },
          {
            "name": "Sticky Soy Chicken",
            "name_jp": "スティッキーソイチキン",
            "description": "Caramelized soy chicken with greens.",
            "quantity": "1 plate",
            "ingredients": ["Chicken", "Soy", "Sugar", "Greens"],
            "price": 10.5,
            "image": "https://example.com/images/sticky-soy-chicken.jpg"
          },
          {
            "name": "Mushroom Garlic Wok",
            "name_jp": "きのこガーリック炒め",
            "description": "Savory mushrooms sautéed in garlic oil.",
            "quantity": "1 plate",
            "ingredients": ["Mushrooms", "Garlic", "Soy"],
            "price": 8.75,
            "image": "https://example.com/images/mushroom-garlic-wok.jpg"
          },
          {
            "name": "Spicy Beef Noodles",
            "name_jp": "スパイシービーフヌードル炒め",
            "description": "Stir-fried noodles with tender beef and spice.",
            "quantity": "1 plate",
            "ingredients": ["Noodles", "Beef", "Chili", "Veggies"],
            "price": 11.0,
            "image": "https://example.com/images/spicy-beef-noodles.jpg"
          },
          {
            "name": "Yuzu Vegetable Wok",
            "name_jp": "柚子野菜炒め",
            "description": "Lightly tossed veg with yuzu zest.",
            "quantity": "1 plate",
            "ingredients": ["Seasonal veg", "Yuzu", "Soy"],
            "price": 9.25,
            "image": "https://example.com/images/yuzu-veg-wok.jpg"
          }
        ],
        "Ramen": [
          {
            "name": "Tonkotsu Ramen",
            "name_jp": "豚骨ラーメン",
            "description": "Rich pork broth with noodles and egg.",
            "quantity": "1 bowl",
            "ingredients": ["Pork broth", "Noodles", "Egg", "Pork slices"],
            "price": 11.5,
            "image": "https://example.com/images/tonkotsu-ramen.jpg"
          },
          {
            "name": "Shoyu Ramen",
            "name_jp": "醤油ラーメン",
            "description": "Soy-based broth with bamboo shoots.",
            "quantity": "1 bowl",
            "ingredients": ["Soy broth", "Noodles", "Pork", "Bamboo shoots"],
            "price": 10.0,
            "image": "https://example.com/images/shoyu-ramen.jpg"
          },
          {
            "name": "Miso Ramen",
            "name_jp": "味噌ラーメン",
            "description": "Savory miso broth with corn and butter.",
            "quantity": "1 bowl",
            "ingredients": ["Miso", "Noodles", "Corn", "Butter"],
            "price": 10.5,
            "image": "https://example.com/images/miso-ramen.jpg"
          },
          {
            "name": "Spicy Miso Ramen",
            "name_jp": "辛味噌ラーメン",
            "description": "Miso broth with an extra chili kick.",
            "quantity": "1 bowl",
            "ingredients": ["Miso", "Chili", "Noodles", "Pork"],
            "price": 11.25,
            "image": "https://example.com/images/spicy-miso-ramen.jpg"
          },
          {
            "name": "Vegetarian Ramen",
            "name_jp": "ベジラーメン",
            "description": "Umami-rich veggie broth with noodles.",
            "quantity": "1 bowl",
            "ingredients": ["Veg broth", "Noodles", "Tofu", "Veggies"],
            "price": 9.99,
            "image": "https://example.com/images/vegetarian-ramen.jpg"
          },
          {
            "name": "Tantanmen",
            "name_jp": "担々麺",
            "description": "Creamy spicy sesame broth ramen.",
            "quantity": "1 bowl",
            "ingredients": ["Sesame paste", "Noodles", "Chili oil", "Pork"],
            "price": 11.75,
            "image": "https://example.com/images/tantanmen.jpg"
          },
          {
            "name": "Seafood Ramen",
            "name_jp": "シーフードラーメン",
            "description": "Broth loaded with shrimp and squid.",
            "quantity": "1 bowl",
            "ingredients": ["Shrimp", "Squid", "Noodles", "Broth"],
            "price": 12.5,
            "image": "https://example.com/images/seafood-ramen.jpg"
          },
          {
            "name": "Curry Ramen",
            "name_jp": "カレーラーメン",
            "description": "Japanese curry-flavored ramen bowl.",
            "quantity": "1 bowl",
            "ingredients": ["Curry", "Noodles", "Pork", "Veggies"],
            "price": 11.25,
            "image": "https://example.com/images/curry-ramen.jpg"
          },
          {
            "name": "Shio Ramen",
            "name_jp": "塩ラーメン",
            "description": "Light, salty broth highlighting delicate flavors.",
            "quantity": "1 bowl",
            "ingredients": ["Salt broth", "Noodles", "Chicken", "Scallion"],
            "price": 9.75,
            "image": "https://example.com/images/shio-ramen.jpg"
          },
          {
            "name": "Pork Bone Black Ramen",
            "name_jp": "黒豚骨ラーメン",
            "description": "Tonkotsu with black garlic oil for depth.",
            "quantity": "1 bowl",
            "ingredients": ["Pork bone broth", "Black garlic oil", "Noodles"],
            "price": 12.0,
            "image": "https://example.com/images/black-garlic-ramen-2.jpg"
          }
        ],
        "Yaki": [
          {
            "name": "Yakisoba",
            "name_jp": "焼きそば",
            "description": "Fried noodles with vegetables and sauce.",
            "quantity": "1 plate",
            "ingredients": ["Noodles", "Cabbage", "Sauce", "Pork"],
            "price": 9.5,
            "image": "https://example.com/images/yakisoba.jpg"
          },
          {
            "name": "Okonomiyaki",
            "name_jp": "お好み焼き",
            "description": "Savory pancake with cabbage and toppings.",
            "quantity": "1 piece",
            "ingredients": ["Cabbage", "Batter", "Sauce", "Bonito flakes"],
            "price": 8.99,
            "image": "https://example.com/images/okonomiyaki.jpg"
          },
          {
            "name": "Takoyaki",
            "name_jp": "たこ焼き",
            "description": "Octopus-filled batter balls with sauce.",
            "quantity": "6 pieces",
            "ingredients": ["Octopus", "Batter", "Sauce", "Bonito flakes"],
            "price": 6.5,
            "image": "https://example.com/images/takoyaki.jpg"
          },
          {
            "name": "Grilled Miso Eggplant",
            "name_jp": "なすの味噌焼き",
            "description": "Silky eggplant grilled with miso glaze.",
            "quantity": "1 plate",
            "ingredients": ["Eggplant", "Miso", "Sugar"],
            "price": 7.0,
            "image": "https://example.com/images/grilled-miso-eggplant.jpg"
          },
          {
            "name": "Yaki Onigiri",
            "name_jp": "焼きおにぎり",
            "description": "Grilled rice ball brushed with soy.",
            "quantity": "1 piece",
            "ingredients": ["Rice", "Soy sauce"],
            "price": 3.5,
            "image": "https://example.com/images/yaki-onigiri.jpg"
          },
          {
            "name": "Teriyaki Salmon Yaki",
            "name_jp": "照り焼きサーモン焼き",
            "description": "Salmon grilled with teriyaki glaze.",
            "quantity": "1 piece",
            "ingredients": ["Salmon", "Teriyaki", "Sesame"],
            "price": 13.5,
            "image": "https://example.com/images/teriyaki-salmon-yaki.jpg"
          },
          {
            "name": "Grilled Chicken Skewers",
            "name_jp": "焼き鳥",
            "description": "Charred skewers brushed with tare sauce.",
            "quantity": "3 skewers",
            "ingredients": ["Chicken", "Tare sauce", "Scallion"],
            "price": 7.5,
            "image": "https://example.com/images/grilled-chicken-skewers.jpg"
          },
          {
            "name": "Beef Teppanyaki",
            "name_jp": "牛鉄板焼き",
            "description": "Sliced beef cooked on hotplate with veg.",
            "quantity": "1 plate",
            "ingredients": ["Beef", "Vegetables", "Soy", "Garlic"],
            "price": 16.0,
            "image": "https://example.com/images/beef-teppanyaki.jpg"
          },
          {
            "name": "Squid Yaki",
            "name_jp": "イカ焼き",
            "description": "Grilled whole squid glazed with soy.",
            "quantity": "1 piece",
            "ingredients": ["Squid", "Soy", "Lemon"],
            "price": 9.75,
            "image": "https://example.com/images/squid-yaki.jpg"
          },
          {
            "name": "Vegetable Yakitori Mix",
            "name_jp": "野菜串焼き",
            "description": "Assorted grilled vegetable skewers.",
            "quantity": "3 skewers",
            "ingredients": ["Bell pepper", "Mushroom", "Onion", "Tare"],
            "price": 6.99,
            "image": "https://example.com/images/veg-yakitori.jpg"
          }
        ],
        "Poke": [
          {
            "name": "Tuna Poke Bowl",
            "name_jp": "マグロポケボウル",
            "description": "Fresh tuna, rice, and salad mix.",
            "quantity": "1 bowl",
            "ingredients": ["Tuna", "Rice", "Avocado", "Ponzu"],
            "price": 10.99,
            "image": "https://example.com/images/tuna-poke-bowl.jpg"
          },
          {
            "name": "Salmon Poke Bowl",
            "name_jp": "サーモンポケボウル",
            "description": "Salmon cubes with sesame and rice.",
            "quantity": "1 bowl",
            "ingredients": ["Salmon", "Rice", "Sesame", "Cucumber"],
            "price": 11.5,
            "image": "https://example.com/images/salmon-poke-bowl.jpg"
          },
          {
            "name": "Tofu Poke Bowl",
            "name_jp": "豆腐ポケボウル",
            "description": "Marinated tofu with mixed greens and rice.",
            "quantity": "1 bowl",
            "ingredients": ["Tofu", "Rice", "Greens", "Sesame"],
            "price": 9.5,
            "image": "https://example.com/images/tofu-poke-bowl.jpg"
          },
          {
            "name": "Spicy Tuna Poke",
            "name_jp": "スパイシーツナポケ",
            "description": "Spicy tuna with jalapeño and rice.",
            "quantity": "1 bowl",
            "ingredients": ["Tuna", "Spicy sauce", "Jalapeño", "Rice"],
            "price": 11.0,
            "image": "https://example.com/images/spicy-tuna-poke.jpg"
          },
          {
            "name": "Shrimp Poke Bowl",
            "name_jp": "エビポケボウル",
            "description": "Cooked shrimp with citrus ponzu.",
            "quantity": "1 bowl",
            "ingredients": ["Shrimp", "Ponzu", "Rice", "Avocado"],
            "price": 10.75,
            "image": "https://example.com/images/shrimp-poke-bowl.jpg"
          },
          {
            "name": "Avocado Poke Bowl",
            "name_jp": "アボカドポケボウル",
            "description": "Creamy avocado with seaweed salad.",
            "quantity": "1 bowl",
            "ingredients": ["Avocado", "Rice", "Seaweed", "Sesame"],
            "price": 9.99,
            "image": "https://example.com/images/avocado-poke-bowl.jpg"
          },
          {
            "name": "Mixed Seafood Poke",
            "name_jp": "ミックスシーフードポケ",
            "description": "Assorted seafood with ponzu and rice.",
            "quantity": "1 bowl",
            "ingredients": ["Tuna", "Salmon", "Shrimp", "Ponzu"],
            "price": 12.5,
            "image": "https://example.com/images/mixed-seafood-poke.jpg"
          },
          {
            "name": "Spicy Salmon Poke",
            "name_jp": "スパイシーサーモンポケ",
            "description": "Salmon marinated in spicy sesame sauce.",
            "quantity": "1 bowl",
            "ingredients": ["Salmon", "Spicy sesame", "Rice"],
            "price": 11.25,
            "image": "https://example.com/images/spicy-salmon-poke.jpg"
          },
          {
            "name": "Citrus Tuna Poke",
            "name_jp": "シトラスタマグロポケ",
            "description": "Tuna with citrus ponzu and greens.",
            "quantity": "1 bowl",
            "ingredients": ["Tuna", "Ponzu", "Greens", "Rice"],
            "price": 11.5,
            "image": "https://example.com/images/citrus-tuna-poke.jpg"
          },
          {
            "name": "Hawaiian Shoyu Poke",
            "name_jp": "ハワイアン醤油ポケ",
            "description": "Shoyu-marinated fish with sesame oil.",
            "quantity": "1 bowl",
            "ingredients": ["Tuna", "Shoyu", "Sesame oil", "Rice"],
            "price": 10.99,
            "image": "https://example.com/images/hawaiian-shoyu-poke.jpg"
          }
        ]
      }
    },
    {
      "category": "Drink",
      "items": [
        {
          "name": "Green Tea",
          "name_jp": "緑茶",
          "description": "Hot or cold Japanese green tea.",
          "quantity": "250ml",
          "ingredients": ["Green tea leaves", "Water"],
          "price": 2.0,
          "image": "https://example.com/images/green-tea.jpg"
        },
        {
          "name": "Ramune",
          "name_jp": "ラムネ",
          "description": "Classic Japanese soda.",
          "quantity": "200ml",
          "ingredients": ["Carbonated water", "Sugar", "Flavoring"],
          "price": 3.0,
          "image": "https://example.com/images/ramune.jpg"
        },
        {
          "name": "Matcha Latte",
          "name_jp": "抹茶ラテ",
          "description": "Creamy matcha with milk.",
          "quantity": "350ml",
          "ingredients": ["Matcha", "Milk", "Sugar"],
          "price": 4.5,
          "image": "https://example.com/images/matcha-latte.jpg"
        },
        {
          "name": "Cold Brew Sencha",
          "name_jp": "冷煎茶",
          "description": "Smooth cold-brewed sencha tea.",
          "quantity": "300ml",
          "ingredients": ["Sencha leaves", "Cold water"],
          "price": 3.75,
          "image": "https://example.com/images/cold-brew-sencha.jpg"
        },
        {
          "name": "Yuzu Soda",
          "name_jp": "柚子ソーダ",
          "description": "Refreshing soda with yuzu citrus.",
          "quantity": "300ml",
          "ingredients": ["Yuzu", "Carbonated water", "Sugar"],
          "price": 3.5,
          "image": "https://example.com/images/yuzu-soda.jpg"
        },
        {
          "name": "Sake (small)",
          "name_jp": "酒（小）",
          "description": "Small serving of premium sake.",
          "quantity": "90ml",
          "ingredients": ["Rice", "Water", "Koji"],
          "price": 6.0,
          "image": "https://example.com/images/sake-small.jpg"
        },
        {
          "name": "Sake (glass)",
          "name_jp": "酒（グラス）",
          "description": "Glass of chilled sake.",
          "quantity": "150ml",
          "ingredients": ["Rice", "Water", "Koji"],
          "price": 9.5,
          "image": "https://example.com/images/sake-glass.jpg"
        },
        {
          "name": "Japanese Beer",
          "name_jp": "日本のビール",
          "description": "Bottled Japanese lager.",
          "quantity": "330ml",
          "ingredients": ["Barley", "Hops", "Water", "Yeast"],
          "price": 5.5,
          "image": "https://example.com/images/japanese-beer.jpg"
        },
        {
          "name": "Oolong Tea",
          "name_jp": "烏龍茶",
          "description": "Traditional oolong tea served hot or cold.",
          "quantity": "250ml",
          "ingredients": ["Oolong leaves", "Water"],
          "price": 2.75,
          "image": "https://example.com/images/oolong-tea.jpg"
        },
        {
          "name": "Sparkling Yuzu",
          "name_jp": "スパークリング柚子",
          "description": "Bubbly yuzu-flavored non-alcoholic drink.",
          "quantity": "330ml",
          "ingredients": ["Yuzu", "Carbonation", "Sugar"],
          "price": 3.99,
          "image": "https://example.com/images/sparkling-yuzu.jpg"
        }
      ]
    },
    {
      "category": "Sauces",
      "items": [
        {
          "name": "Soy Sauce",
          "name_jp": "醤油",
          "description": "Salty dipping sauce.",
          "quantity": "20ml",
          "ingredients": ["Soybeans", "Wheat", "Salt", "Water"],
          "price": 0.5,
          "image": "https://example.com/images/soy-sauce.jpg"
        },
        {
          "name": "Spicy Mayo",
          "name_jp": "スパイシーマヨネーズ",
          "description": "Spicy creamy sauce.",
          "quantity": "20ml",
          "ingredients": ["Mayonnaise", "Chili sauce", "Lemon"],
          "price": 0.75,
          "image": "https://example.com/images/spicy-mayo.jpg"
        },
        {
          "name": "Eel Sauce",
          "name_jp": "うなぎのたれ",
          "description": "Sweet and savory glaze ideal for unagi.",
          "quantity": "25ml",
          "ingredients": ["Soy", "Sugar", "Mirin"],
          "price": 0.75,
          "image": "https://example.com/images/eel-sauce.jpg"
        },
        {
          "name": "Ponzu",
          "name_jp": "ポン酢",
          "description": "Citrus soy sauce for dipping.",
          "quantity": "25ml",
          "ingredients": ["Soy", "Citrus", "Vinegar"],
          "price": 0.75,
          "image": "https://example.com/images/ponzu.jpg"
        },
        {
          "name": "Teriyaki Sauce",
          "name_jp": "照り焼きソース",
          "description": "Sweet teriyaki glaze for grilling.",
          "quantity": "30ml",
          "ingredients": ["Soy", "Sugar", "Mirin"],
          "price": 0.8,
          "image": "https://example.com/images/teriyaki-sauce.jpg"
        },
        {
          "name": "Goma Dressing",
          "name_jp": "ごまドレッシング",
          "description": "Creamy sesame dressing for salads.",
          "quantity": "30ml",
          "ingredients": ["Sesame", "Soy", "Vinegar", "Sugar"],
          "price": 0.9,
          "image": "https://example.com/images/goma-dressing.jpg"
        },
        {
          "name": "Wasabi Paste",
          "name_jp": "わさびペースト",
          "description": "Sharp horseradish-style condiment.",
          "quantity": "5g",
          "ingredients": ["Wasabi", "Horseradish", "Salt"],
          "price": 0.6,
          "image": "https://example.com/images/wasabi-paste.jpg"
        },
        {
          "name": "Yuzu Kosho",
          "name_jp": "柚子胡椒",
          "description": "Spicy citrus paste that adds heat and aroma.",
          "quantity": "10g",
          "ingredients": ["Yuzu peel", "Chili", "Salt"],
          "price": 1.25,
          "image": "https://example.com/images/yuzu-kosho.jpg"
        },
        {
          "name": "Sweet Chili Sauce",
          "name_jp": "スイートチリソース",
          "description": "Sweet and tangy dipping sauce.",
          "quantity": "25ml",
          "ingredients": ["Chili", "Sugar", "Vinegar"],
          "price": 0.7,
          "image": "https://example.com/images/sweet-chili-sauce.jpg"
        },
        {
          "name": "Garlic Butter Sauce",
          "name_jp": "ガーリックバターソース",
          "description": "Rich garlic butter perfect for seafood.",
          "quantity": "30ml",
          "ingredients": ["Butter", "Garlic", "Parsley"],
          "price": 1.0,
          "image": "https://example.com/images/garlic-butter-sauce.jpg"
        }
      ]
    }
  ]
}



export const uniqueCategories = ["Sauces","Drink","Poke","Yaki","Soup","Rice","Spring roll","Hot roll","Sweet rolls","Maki","Roll","Set","Appetiser and Salad"]
export default foodData;

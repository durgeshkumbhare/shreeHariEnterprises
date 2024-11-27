import { nanoid } from "nanoid";
import hero1 from "./assets/images/hero1.jpg";
import hero2 from "./assets/images/hero2.jpg";
import hero3 from "./assets/images/hero3.jpg";
import hero4 from "./assets/images/hero4.jpg";
import BNR999 from "./assets/images/bnr-99.jpg";
import radar from "./assets/images/radar-exo.png";
import nagastra from "./assets/images/nagastra.jpg";
import express from "./assets/images/express-d.jpg";
import nutri627 from "./assets/images/side-g-6-27-0.png.webp";
import fertisil1060 from "./assets/images/fertisilhydra1060.jpg";
import fertisil2828 from "./assets/images/fertisilhydra2828.jpg";
import fertisi4847l from "./assets/images/fertisilhydra4847.jpg";
import fertisil946 from "./assets/images/fertisilhydra946.jpg";
import novaSolub from "./assets/images/novSolub21.webp";
import basfoliar from "./assets/images/basfoliar-0-40-37-sp_0.png.webp";
import cabmax from "./assets/images/caBMax.webp";
import azfrasco from "./assets/images/tradecorp-AZ-fresco-1.jpg";
import fertilionCombi from "./assets/images/fetrilon-combi2-alu-bag-1kg.png.webp";
import Zing from "./assets/images/Basfoliar-Zing.png.webp";
import nutri946 from "./assets/images/0-9-46.png.jpg";
import phylgree200 from "./assets/images/Phylgreen-200.png.webp";
import intake from "./assets/images/intake.jpeg";
import humistartWG from "./assets/images/Humitsar-WG.png.jpg";
import basfoliarBORO from "./assets/images/Basfoliar boro sl.png.webp";
import basfoliarSL from "./assets/images/basfoliar-cabmg-sl_rev1.png.webp";
import nova1448 from "./assets/images/nov1448.webp";
import proPotash from "./assets/images/proPotash.png";

import basfoliaralgae from "./assets/images/basfoliar-algae-2-sl-etk-10l.png.jpg";
import basfoliarkelp from "./assets/images/basfoliarKelpOSl.jpg";

export const heroImages = [
  {
    id: nanoid(),
    img: hero1,
  },
  {
    id: nanoid(),
    img: hero2,
  },
  {
    id: nanoid(),
    img: hero3,
  },
  {
    id: nanoid(),
    img: hero4,
  },
];

export const pesticides = [
  {
    id: nanoid(),
    img: BNR999,
    model: "BNR-999",
    description:
      "It is naturally Derived Organic product growth and imporves resistance for Crop/ It is controlled mites and thrips. This product in liquid concentrate from along with Bio-element for complete crop protection. It promotes higher  yeilds. It is a microbial combo product. BNR 999 increase immunization in plants.",
    reccomendedCrops:
      "Chilli, Cotton, Soyabean, Radgram, Greengram, Bengalgram, Tomato, Bhendi, Brinja, Melons, Tobacco, Onion, Pomegrante, Mango other fruits, Flowers & Vegetable crops",
    packaging: " 25ml, 50ml, 100ml, 250ml, 500ml & 1000ml",
  },
  {
    id: nanoid(),
    img: radar,
    model: "RADAR EXO",
    description:
      "It is naturally Derived Organic product. Orgainc Product growth and improves resistance for Crop. It is controlled mites and thirps. This product in liquid concentrate from along with Bio-element for complete crop protection. It promotes higher yields. It is a microbial Combo product. Radar Exo increase immunization in plants",
    reccomendedCrops:
      "Chilli, Cotton, Tomato, All fruit Crops, Flowers & Vegetable crops",
    packaging: " 100ml, 250ml, 500ml & 1000ml",
  },
  {
    id: nanoid(),
    img: nagastra,
    model: "NAGASTRA",
    description:
      "Nagastra is a natural, eco-friendly pesticide designed to protect crops from pests and diseases without harming the environment. Made from plant-based ingredients, it is safe for humans, animals, and beneficial insects. Nagastra offers a broad spectrum of pest control, enhancing crop yield and quality while promoting sustainable agricultural practices. Ideal for organic farming and conventional crops, it supports healthier ecosystems by minimizing chemical residues in soil and water.",
    reccomendedCrops:
      "Paddy, Chilli, Cotton, Banana, Sugarcane, Grapes, Spices, Oilseeds, Pulses, Cereals, Vegetables, Leafy",
    packaging: " 100ml, 250ml, 500ml & 1000ml",
  },
  {
    id: nanoid(),
    img: express,
    model: "EXPRESS-D",
    description:
      "Nagastra is a natural, eco-friendly pesticide designed to protect crops from pests and diseases without harming the environment. Made from plant-based ingredients, it is safe for humans, animals, and beneficial insects. Nagastra offers a broad spectrum of pest control, enhancing crop yield and quality while promoting sustainable agricultural practices. Ideal for organic farming and conventional crops, it supports healthier ecosystems by minimizing chemical residues in soil and water.",
    reccomendedCrops:
      "Paddy, Chilli, Cotton, Banana, Sugarcane, Grapes, Spices, Oilseeds, Pulses, Cereals, Vegetables, Leafy vegetables, tubers, Tobbaco, Ornamental and Horticultural Crops",
    packaging: " 100ml, 250ml, 500ml & 1000ml",
  },
];

export const stimulant = [
  {
    id: nanoid(),
    img: phylgree200,
    model: "Phylgreen 200",
    description:
      "Phylgreen 200 is a high-quality biostimulant made from Ascophyllum nodosum seaweed, specifically designed to enhance crop resilience and productivity. It improves root growth, nutrient uptake, and stress resistance, helping plants thrive under adverse conditions like heat, drought, or salinity",
    reccomendedCrops:
      "Wheat, Rice, Maize, Soybean, Cotton, Tomato, Potato, Cucumber, Peppers, Leafy Greens, Grapes, Citrus, Bananas, Apples, Mangoes, Ornamental Plants and Flowers",
    packaging: " 100ml, 250ml, 500ml & 1000ml",
  },
  {
    id: nanoid(),
    img: intake,
    model: "Tradecorp Intake",
    description:
      "Tradecorp Intake is a high-performance liquid fertilizer enriched with essential nutrients and biostimulants to optimize plant growth and development. Its advanced formulation ensures maximum nutrient absorption, enhancing crop vigor, quality, and yield. Tradecorp Intake is particularly effective during critical growth stages, helping plants withstand environmental stress and improve overall productivity",
    reccomendedCrops:
      "Wheat, Corn, Rice, Cotton, Soybean, Tomatoes, Potatoes, Carrots, Cucumbers, Peppers,  Citrus, Grapes, Apples, Bananas, Mangoes, Berries, Horticulture and Ornamentals",
    packaging: " 100ml, 250ml, 500ml & 1000ml",
  },
  {
    id: nanoid(),
    img: basfoliarkelp,
    model: "Basofilar Kalp O SL",
    description:
      "Basofilar Kalp O SL is a specialized soil amendment solution designed to improve soil fertility and enhance nutrient availability for crops. Its unique formulation helps regulate soil pH, optimize nutrient uptake, and boost root development, leading to healthier plant growth and improved yields. This product is especially effective in correcting calcium and pH imbalances in the soil",
    reccomendedCrops:
      "Wheat, Rice, Maize, Soybean, Cotton, Tomato, Potato, Cucumber, Peppers, Leafy Greens, Grapes, Citrus, Bananas, Apples, Mangoes, Ornamental Plants and Flowers",
    packaging: " 100ml, 250ml, 500ml & 1000ml",
  },
  {
    id: nanoid(),
    img: basfoliaralgae,
    model: "Basfoliar Algae SL",
    description:
      "Basfoliar Algae SL is a premium liquid biostimulant derived from natural seaweed extracts, designed to enhance plant growth, resilience, and productivity. Its rich composition of bioactive compounds, including natural hormones, amino acids, and micronutrients, helps plants combat environmental stress, improve nutrient uptake, and support vigorous development throughout the growth cycl",
    reccomendedCrops:
      " Corn, Wheat, Rice, Soybean, Cotton,Tomato, Potato, Cucumber, Peppers, Carrots, Grapes, Apples, Citrus, Mangoes, Bananas, Berries",
    packaging: " 100ml, 250ml, 500ml 1000ml",
  },
  {
    id: nanoid(),
    img: basfoliarSL,
    model: "Basfoliar CaB Mg SL",
    description:
      "Basfoliar CaB Mg SL is a liquid fertilizer specially formulated to supply essential nutrients—Calcium (Ca), Boron (B), and Magnesium (Mg)—to crops, ensuring balanced nutrition for optimal growth and productivity. This product is ideal for preventing and correcting nutrient deficiencies that can hinder plant development, particularly in crops requiring high levels of calcium and magnesium for fruit and leaf quality.",
    reccomendedCrops:
      "Maize, Wheat, Rice, Soybean, Tomatoes, Peppers, Potatoes, Leafy Greens,Apples, Citrus, Grapes, Mangoes, Bananas, Berries",
    packaging: " 100ml, 250ml, 500ml 1000ml",
  },
  {
    id: nanoid(),
    img: humistartWG,
    model: "Hamstr WG",
    description:
      "Hamstr WG is a water-dispersible granule (WG) formulation that provides superior pest and disease management. It is specially developed to protect crops from a wide range of threats, ensuring better plant health and higher yields. Hamstr WG is designed for easy application and rapid action, making it an excellent choice for modern farming practices.",
    reccomendedCrops:
      "Wheat, Rice, Maize, Cotton, Tomato, Cabbage, Onion, Brinja, Grapes, Citrus, Apples, Mangoes",
    packaging: " 100ml, 250ml, 500ml 1000ml",
  },
  {
    id: nanoid(),
    img: basfoliarBORO,
    model: "Basfoliar Borosol",
    description:
      "Basfoliar Borosol is a liquid boron fertilizer designed to address boron deficiencies in crops, ensuring better growth, development, and yield. Boron plays a vital role in cell wall formation, nutrient transport, flowering, and fruit set. This product provides highly soluble boron that is easily absorbed and utilized by plants, making it ideal for foliar application",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: " 100ml, 250ml, 500ml 1000ml",
  },
];
export const fertliser = [
  {
    id: nanoid(),
    img: nutri627,
    model: "Nutricomplex 6.27.00",
    description:
      "Nutricomplex 6.27.00 is a water-soluble fertilizer with a balanced blend of essential nutrients designed for high-performance crop nutrition. Its unique formulation, containing 6% Nitrogen (N), 27% Phosphorus (P₂O₅), and additional micronutrients, ensures efficient nutrient uptake, promotes vigorous root development, and supports flowering and fruiting stages. Use as per the crop and growth stage requirements. Dilute with water and spray during critical growth phases like flowering and fruiting.",
    reccomendedCrops:
      "Wheat, Rice, Maize, Cotton, Soybean, Tomato, Potato, Onion, Cucumber, Carrots, Grapes, Citrus, Mangoes, Apples, Berries",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: nutri946,
    model: "NutriComplex 00.09.46",
    description:
      "NutriComplex 00.09.46 is a water-soluble fertilizer formulated with 9% Phosphorus (P₂O₅) and 46% Potassium (K₂O). It is designed to meet the specific nutrient demands during critical stages like flowering and fruit development. The high potassium content enhances fruit quality, size, color, and shelf life, while phosphorus supports energy transfer and root development. Apply through irrigation systems at recommended rates based on crop needs. Dilute in water and apply during flowering and fruiting for maximum benefit.",
    reccomendedCrops:
      "Wheat, Corn, Rice, Cotton, Soybean, Tomatoes, Potatoes, Carrots, Cucumbers, Peppers,  Citrus, Grapes, Apples, Bananas, Mangoes, Berries, Horticulture and Ornamentals",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: fertisil946,
    model: "Fertisil Hydra 00.09.46",
    description:
      "Fertisil Hydra 00.09.46 is a high-performance, water-soluble fertilizer with a balanced nutrient composition of 9% Phosphorus (P₂O₅) and 46% Potassium (K₂O). This formulation is specially designed for crops that require enhanced flowering, fruit setting, and overall quality during critical growth stages. Its rich potassium content improves fruit quality, size, and color, while phosphorus supports root development and energy transfer",
    reccomendedCrops:
      "Wheat, Rice, Maize, Soybean, Cotton, Tomato, Potato, Cucumber, Peppers, Leafy Greens, Grapes, Citrus, Bananas, Apples, Mangoes, Ornamental Plants and Flowers",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: fertisi4847l,
    model: "Fertisil Hydra 00.48.47",
    description:
      "Fertisil Hydra 00.48.47 is a high-quality, water-soluble fertilizer formulated with 48% Potassium (K₂O) and 47% Phosphorus (P₂O₅), making it ideal for crops in their critical stages of flowering and fruiting. This combination of nutrients is designed to boost crop performance, improve fruit quality, and enhance stress resistance. The high potassium content promotes the development of healthy, high-quality fruit, while the phosphorus encourages strong root systems and improves energy transfer within the plant.",
    reccomendedCrops:
      " Corn, Wheat, Rice, Soybean, Cotton,Tomato, Potato, Cucumber, Peppers, Carrots, Grapes, Apples, Citrus, Mangoes, Bananas, Berries",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: fertisil1060,
    model: "Fertisil Hydra 10.60.10",
    description:
      "Fertisil Hydra 10.60.10 is a water-soluble fertilizer formulated with 10% Nitrogen (N), 60% Phosphorus (P₂O₅), and 10% Potassium (K₂O), designed to promote robust root development and enhance flowering and fruiting stages. The high phosphorus content supports energy transfer, root growth, and plant metabolism, while potassium helps improve overall plant health and stress tolerance. This formulation is ideal for crops in the vegetative and reproductive stages that need strong root systems and better nutrient availability",
    reccomendedCrops:
      "Maize, Wheat, Rice, Soybean, Tomatoes, Peppers, Potatoes, Leafy Greens,Apples, Citrus, Grapes, Mangoes, Bananas, Berries",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: fertisil2828,
    model: "Fertisil Hydra 28.28.00",
    description:
      "Fertisil Hydra 28.28.00 is a high-performance, water-soluble fertilizer designed with a balanced ratio of 28% Nitrogen (N), 28% Phosphorus (P₂O₅), and 0% Potassium (K₂O), making it ideal for crops that require significant nutrient support during early growth and development stages. The combination of nitrogen and phosphorus promotes strong vegetative growth, root development, and energy transfer within plants.",
    reccomendedCrops:
      "Wheat, Rice, Maize, Cotton, Tomato, Cabbage, Onion, Brinja, Grapes, Citrus, Apples, Mangoes",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: novaSolub,
    model: "Compo Expert Nova Tech Solub 21",
    description:
      "Compo Expert Nova Tech Solub 21 is a high-quality, water-soluble fertilizer with a balanced nutrient formulation of 21% Nitrogen (N) and 21% Phosphorus (P₂O₅). It is designed to support crops during key growth stages by providing essential macronutrients, which promote vigorous plant growth, improved root development, and increased energy transfer. This fertilizer is ideal for both fertigation and foliar applications, ensuring quick nutrient absorption and plant response.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: nova1448,
    model: "Compo Expert NovaTec 14-48",
    description:
      "Compo Expert NovaTec 14-48 is a high-phosphorus, water-soluble fertilizer (NPK: 14-48-0) designed to enhance root development, flowering, and crop yields. Powered by NovaTec technology, it ensures efficient nutrient uptake and reduced losses. Packaged in 25 kg moisture-resistant bags, it is suitable for vegetables, fruits, cereals, and ornamental plants. Easily applied via soil, drip irrigation, or foliar spray, its high solubility and phosphorus content make it ideal for boosting early growth and overall plant performance.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: basfoliar,
    model: "Compo Expert Basfoliar SP 00.40.37",
    description:
      "Compo Expert Basfoliar SP 00.40.37 is a high-quality, water-soluble fertilizer designed for foliar application, providing a rich nutrient mix with 40% Potassium (K₂O) and 37% Phosphorus (P₂O₅). This product is specially formulated to enhance plant growth during critical stages, such as flowering and fruiting, where high potassium and phosphorus requirements are essential. It is ideal for improving fruit quality, enhancing stress tolerance, and boosting plant performance.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: cabmax,
    model: "Compo Expert Hydrospeed CaBMax",
    description:
      "Compo Expert Hydrospeed CaBMax is a specialized liquid fertilizer designed to supply essential nutrients, specifically Calcium (Ca) and Boron (B), to crops for improved growth and quality. This formulation is particularly effective in promoting healthy fruit development, preventing disorders such as blossom end rot, and enhancing overall plant resilience. The combination of Calcium and Boron in the Hydrospeed range is optimized for efficient absorption and fast action, making it ideal for foliar application or fertigation systems.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "1L, 5L, 25L",
  },
  {
    id: nanoid(),
    img: azfrasco,
    model: "AZ Fresco",
    description:
      "AZ Fresco is a specialized agricultural product, and based on the information provided, it seems to be a plant growth regulator, fertilizer, or a nutrient supplement designed to enhance plant health and productivity. However, specific details on the exact composition and usage of AZ Fresco are not widely available in general sources. It may be applied through fertigation or directly to the leaves for rapid absorption.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "1L, 5L, 25L",
  },
  {
    id: nanoid(),
    img: fertilionCombi,
    model: "Fertilton Combi 2",
    description:
      "Fertilton Combi 2 is a premium-grade micronutrient fertilizer produced by Compo Expert, specially designed to correct and prevent micronutrient deficiencies in a wide range of crops. It contains a balanced mix of essential micronutrients chelated by EDTA, ensuring efficient absorption and availability to plants even under challenging soil conditions. The product is highly soluble in water and suitable for foliar application, fertigation, or soil drenching.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "1kg, 5kg, 25kg",
  },
  {
    id: nanoid(),
    img: Zing,
    model: "Basfoliar Zing WP",
    description:
      "Basfoliar Zing WP is a high-quality, water-soluble fertilizer containing Zinc (Zn) in a concentrated form, designed to prevent and correct zinc deficiencies in crops. Zinc plays a crucial role in enzyme activation, protein synthesis, and growth hormone production, making it essential for plant growth, root development, and yield improvement. This product is ideal for foliar applications, ensuring rapid absorption and effectiveness.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "500g, 1kg, 5kg",
  },
  {
    id: nanoid(),
    img: proPotash,
    model: "Adasca Pro Potash",
    description:
      "Adasca Pro Potash is a premium potassium fertilizer formulated to enhance crop quality, resilience, and yield. With a high potassium content (typically 50-60% K₂O), it supports critical processes like sugar synthesis, water regulation, and stress tolerance in plants. Chloride-free and highly soluble, it is ideal for sensitive crops like tobacco, berries, and potatoes. Adasca Pro Potash can be applied via soil, fertigation, or foliar spray, making it versatile for various farming practices. Suitable for fruits, vegetables, and field crops, it ensures improved flowering, fruit development, and overall productivity.",
    reccomendedCrops:
      "Wheat, Maize, Rice, Soybean, Cotton, Tomato, Potato, Onion, Cucumber, Leafy Greens, Grapes, Citrus, Apples, Mangoes, Bananas, Berries, Groundnut, Mustard, Sunflower",
    packaging: "500g, 1kg, 5kg",
  },
];

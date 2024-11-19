import { Recipe } from '../models/recipe';

export const veganRecipeMock: Recipe[] = [
  {
    id: '1',
    title: 'Curry de pois chiches et légumes',
    image: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe',
    description: 'Un curry végétal riche en saveurs et protéines',
    ingredients: [
      'Pois chiches',
      'Patates douces',
      'Épinards',
      'Lait de coco',
      'Pâte de curry',
      'Oignon',
      'Ail',
      'Riz basmati',
    ],
    instructions: [
      {
        step: '1',
        instruction: "Faire revenir l'oignon et l'ail dans une casserole.",
      },
      {
        step: '2',
        instruction:
          'Ajouter la pâte de curry et les patates douces coupées en dés.',
      },
      {
        step: '3',
        instruction: 'Verser le lait de coco et laisser mijoter 15 minutes.',
      },
      {
        step: '4',
        instruction:
          'Ajouter les pois chiches et les épinards, cuire 5 minutes de plus.',
      },
      { step: '5', instruction: 'Servir avec du riz basmati.' },
    ],
    tags: ['economic', 'spicy', 'gluten-free'],
  },
  {
    id: '2',
    title: 'Salade de quinoa aux légumes grillés',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38',
    description: 'Une salade nutritive et colorée',
    ingredients: [
      'Quinoa',
      'Courgettes',
      'Poivrons',
      'Aubergines',
      'Tomates cerises',
      "Huile d'olive",
      'Jus de citron',
      'Herbes fraîches',
    ],
    instructions: [
      {
        step: '1',
        instruction: 'Cuire le quinoa selon les instructions du paquet.',
      },
      {
        step: '2',
        instruction: 'Griller les légumes coupés en morceaux au four.',
      },
      { step: '3', instruction: 'Mélanger le quinoa et les légumes grillés.' },
      {
        step: '4',
        instruction:
          "Assaisonner avec l'huile d'olive, le jus de citron et les herbes.",
      },
      { step: '5', instruction: 'Servir tiède ou froid.' },
    ],
    tags: ['gluten-free', 'economic'],
  },
  {
    id: '3',
    title: 'Burger végétal aux haricots noirs',
    image: '',
    description: 'Un burger savoureux et riche en protéines',
    ingredients: [
      'Haricots noirs',
      "Flocons d'avoine",
      'Oignon',
      'Ail',
      'Épices',
      'Pain à burger',
      'Laitue',
      'Tomate',
      'Avocat',
    ],
    instructions: [
      {
        step: '1',
        instruction:
          "Écraser les haricots noirs et mélanger avec les flocons d'avoine.",
      },
      {
        step: '2',
        instruction:
          "Ajouter l'oignon, l'ail et les épices, former des galettes.",
      },
      { step: '3', instruction: 'Cuire les galettes à la poêle ou au four.' },
      {
        step: '4',
        instruction:
          "Assembler le burger avec la laitue, la tomate et l'avocat.",
      },
      { step: '5', instruction: 'Servir chaud avec une sauce de votre choix.' },
    ],
    tags: ['economic'],
  },
  {
    id: '4',
    title: 'Pad thaï végétalien',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    description: 'Une version végane du célèbre plat thaïlandais',
    ingredients: [
      'Nouilles de riz',
      'Tofu',
      'Carottes',
      'Pousses de soja',
      'Arachides',
      'Sauce soja',
      'Jus de citron vert',
      'Sucre de coco',
    ],
    instructions: [
      {
        step: '1',
        instruction: "Faire tremper les nouilles de riz dans l'eau chaude.",
      },
      {
        step: '2',
        instruction: 'Faire revenir le tofu et les légumes dans un wok.',
      },
      {
        step: '3',
        instruction:
          'Ajouter les nouilles égouttées et la sauce (soja, citron, sucre).',
      },
      {
        step: '4',
        instruction:
          "Faire sauter le tout jusqu'à ce que les nouilles soient cuites.",
      },
      { step: '5', instruction: "Garnir d'arachides concassées et servir." },
    ],
    tags: ['spicy', 'gluten-free'],
  },
  {
    id: '5',
    title: 'Tarte aux légumes sans gluten',
    image: '',
    description: 'Une tarte savoureuse et légère',
    ingredients: [
      'Farine de pois chiches',
      'Eau',
      "Huile d'olive",
      'Courgettes',
      'Tomates',
      'Oignon',
      'Herbes de Provence',
    ],
    instructions: [
      {
        step: '1',
        instruction:
          "Mélanger la farine de pois chiches, l'eau et l'huile pour former la pâte.",
      },
      {
        step: '2',
        instruction:
          'Étaler la pâte dans un moule à tarte et précuire 10 minutes.',
      },
      { step: '3', instruction: 'Couper les légumes en fines tranches.' },
      {
        step: '4',
        instruction: "Disposer les légumes sur la pâte et saupoudrer d'herbes.",
      },
      { step: '5', instruction: 'Cuire au four 25-30 minutes à 180°C.' },
    ],
    tags: ['gluten-free', 'economic'],
  },
  {
    id: '6',
    title: 'Smoothie bowl vert',
    image: '',
    description: 'Un petit-déjeuner sain et énergisant',
    ingredients: [
      'Épinards',
      'Banane',
      'Mangue',
      "Lait d'amande",
      'Graines de chia',
      'Granola',
      'Fruits frais pour la garniture',
    ],
    instructions: [
      {
        step: '1',
        instruction:
          "Mixer les épinards, la banane, la mangue et le lait d'amande.",
      },
      { step: '2', instruction: 'Verser le smoothie dans un bol.' },
      {
        step: '3',
        instruction: 'Saupoudrer de graines de chia et de granola.',
      },
      {
        step: '4',
        instruction: 'Ajouter des fruits frais coupés en morceaux.',
      },
      { step: '5', instruction: 'Servir immédiatement.' },
    ],
    tags: ['gluten-free'],
  },
  {
    id: '7',
    title: 'Lasagnes aux légumes',
    image: '',
    description: 'Des lasagnes végétales riches et réconfortantes',
    ingredients: [
      'Feuilles de lasagne sans œufs',
      'Courgettes',
      'Aubergines',
      'Épinards',
      'Sauce tomate',
      'Béchamel végétale',
      'Levure nutritionnelle',
    ],
    instructions: [
      {
        step: '1',
        instruction: 'Préparer la sauce tomate et la béchamel végétale.',
      },
      {
        step: '2',
        instruction: "Griller les tranches de courgettes et d'aubergines.",
      },
      {
        step: '3',
        instruction: 'Alterner les couches : sauce, pâtes, légumes.',
      },
      {
        step: '4',
        instruction:
          'Terminer par une couche de béchamel et de levure nutritionnelle.',
      },
      { step: '5', instruction: 'Cuire au four 30-35 minutes à 180°C.' },
    ],
    tags: ['economic'],
  },
  {
    id: '8',
    title: 'Falafels maison',
    image: '',
    description: 'Des falafels croustillants et parfumés',
    ingredients: [
      'Pois chiches secs',
      'Oignon',
      'Ail',
      'Persil',
      'Coriandre',
      'Cumin',
      'Huile pour la friture',
    ],
    instructions: [
      {
        step: '1',
        instruction: 'Faire tremper les pois chiches pendant une nuit.',
      },
      {
        step: '2',
        instruction: 'Mixer les pois chiches avec les épices et les herbes.',
      },
      {
        step: '3',
        instruction: 'Former des petites boules avec la préparation.',
      },
      {
        step: '4',
        instruction: "Faire frire les falafels jusqu'à ce qu'ils soient dorés.",
      },
      {
        step: '5',
        instruction: 'Égoutter sur du papier absorbant et servir chaud.',
      },
    ],
    tags: ['economic', 'gluten-free', 'spicy'],
  },
  {
    id: '9',
    title: 'Ramen végétalien',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
    description: 'Un bol de ramen réconfortant et savoureux',
    ingredients: [
      'Nouilles ramen',
      'Tofu',
      'Champignons shiitake',
      'Épinards',
      'Maïs',
      'Bouillon de légumes',
      'Sauce soja',
      'Huile de sésame',
    ],
    instructions: [
      {
        step: '1',
        instruction: 'Préparer le bouillon avec les légumes et la sauce soja.',
      },
      { step: '2', instruction: 'Faire revenir le tofu et les champignons.' },
      {
        step: '3',
        instruction: 'Cuire les nouilles selon les instructions du paquet.',
      },
      {
        step: '4',
        instruction: 'Assembler le bol : nouilles, bouillon, tofu, légumes.',
      },
      { step: '5', instruction: "Garnir d'huile de sésame et de cébettes." },
    ],
    tags: ['spicy'],
  },
  {
    id: '10',
    title: "Mousse au chocolat à l'avocat",
    image: '',
    description: 'Un dessert chocolaté et onctueux',
    ingredients: [
      'Avocats mûrs',
      'Cacao en poudre',
      "Sirop d'érable",
      'Lait végétal',
      'Extrait de vanille',
    ],
    instructions: [
      {
        step: '1',
        instruction: "Mixer les avocats jusqu'à obtenir une texture lisse.",
      },
      {
        step: '2',
        instruction: "Ajouter le cacao, le sirop d'érable et la vanille.",
      },
      {
        step: '3',
        instruction:
          'Mixer à nouveau en ajoutant du lait végétal si nécessaire.',
      },
      { step: '4', instruction: 'Répartir la mousse dans des verrines.' },
      {
        step: '5',
        instruction: 'Réfrigérer au moins 2 heures avant de servir.',
      },
    ],
    tags: ['gluten-free'],
  },
];

export type Tags = 'economic' | 'spicy' | 'gluten-free';
export interface Recipe {
  id: string;
  title: string;
  image: string; // url
  description?: string;
  ingredients: string[];
  instructions: Instruction[];
  tags: Tags[];
}

export interface Instruction {
  step: string;
  instruction: string;
}

export interface Parameter {
  id: number;
  text: string;
  photo: string;
  voice?: boolean;
  name: string;
  description: string;
  shadow?: string;
}

export const assistantParams: Parameter[] = [
  {
    id: 1,
    text: 'Обрати',
    photo: '/images/uai/assistant-man.png',
    voice: true,
    name: 'Alex',
    description: 'Енергійна білка з життєвим досвідом',
    shadow: 'shadow-orange-drop'
  },
  {
    id: 2,
    text: 'Обрати',
    photo: '/images/uai/assisant-woman-white.png',
    voice: true,
    name: 'Alex',
    description: 'Енергійна білка з життєвим досвідом',
    shadow: 'shadow-violet-drop'
  },
  {
    id: 3,
    text: 'Обрати',
    photo: '/images/uai/assisant-woman-black.png',
    voice: true,
    name: 'Alex',
    description: 'Енергійна білка з життєвим досвідом',
    shadow: 'shadow-green-drop'
  },
];

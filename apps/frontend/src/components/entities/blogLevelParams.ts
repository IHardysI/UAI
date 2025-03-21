export interface Parameter { 
  id: number;
  text: string;
  photo: string;
  voice?: boolean;
  name?: string;         
  description?: string;  
  shadow?: string;       
}

export const blogLevelParams: Parameter[] = [
  {
    id: 1,
    text: 'Обрати',
    photo: '/images/uai/beginner.png',
    name: 'Новачок',
    description: 'Опис рівня парою слів, щоб було зрозуміло',
    shadow: 'shadow-orange-drop' 
  },
  {
    id: 2,
    text: 'Обрати',
    photo: '/images/uai/experienced.png',
    name: 'Новачок',
    description: 'Опис рівня парою слів, щоб було зрозуміло',
    shadow: 'shadow-violet-drop'
  },
  {
    id: 3,
    text: 'Обрати',
    photo: '/images/uai/master.png',
    name: 'Новачок',
    description: 'Опис рівня парою слів, щоб було зрозуміло',
    shadow: 'shadow-green-drop'
  },
];


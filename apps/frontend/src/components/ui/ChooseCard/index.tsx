import React, { FC } from 'react';
import VoiceIcon from '~/icons/voice.svg'; 
import { Button } from '../button';

interface CardProps {
  id: number;
  text: string;
  photo: string;  
  voice?: boolean;
  shadow?: string;
}

const ChooseCard: FC<CardProps> = ({ id, text, photo, voice, shadow }) => {
  return (
    <div
      className={`
        w-[300px] 
        h-[400px] 
        bg-cover
        bg-center 
        p-[10px] 
        pt-[20px] 
        relative
        rounded-[20px]
        flex
        flex-shrink-0
        items-end
        justify-center
        hover:${shadow}
        duration-200
        hover:-translate-y-2.5
      `}
      style={{ backgroundImage: `url(${photo})` }}
    >
      {voice && (
        <div
          className="
            absolute 
            top-[20px] 
            right-[10px] 
            cursor-pointer
          "
          onClick={() => console.log(`Voice button on card ${id} clicked`)}
        >
          <VoiceIcon className='hover:scale-110 duration-200 cursor-pointer' />
        </div>
      )}

      <Button variant="white" size="lg">{text}</Button>
    </div>
  );
};

export default ChooseCard;

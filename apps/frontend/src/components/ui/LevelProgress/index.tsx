"use client"

import * as React from 'react';
import { Progress } from '../progress';
import { Badge } from '../badge';

import Star from '../../../../public/icons/star.svg'

export default function LevelProgress() {
  return (
    <div className='flex items-center gap-[13px] relative w-[430px]'>
      <div className='text-cWhite flex flex-col items-center'>
        <Badge variant={'level'}>0</Badge>
        <p className='-bottom-[14.53px] text-cBlack font-light text-smallLarge absolute'>рівень</p>
      </div>
      <Progress value={88} />
      <div className='flex flex-col items-center'>
        <Badge variant={'level'}>
          <Star />
        </Badge>
        <p className='-bottom-[14.53px] text-cBlack font-light text-smallLarge absolute'>Нагорода</p>
      </div>
    </div>
  )
}
'use client';

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import CheckCard from '@/components/ui/CheckCard';
import { CheckCardSm } from '@/components/ui/CheckCardSm';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { assistantParams } from '@/components/entities/assistantParams.ts';
import { blogLevelParams } from '@/components/entities/blogLevelParams';

import DefaultAvatar from '~/images/uai/blankAvatar.png';
import CheckCardBig from '@/components/ui/CheckCardBig';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import LevelProgress from '@/components/ui/LevelProgress';
import { Calendar } from '@/components/ui/calendar';
import CalendarPage from '../../components/ui/Calendar/index';
import DragCard from '@/components/ui/DragCard';
import CheckCardSimple from '@/components/ui/CheckCardSimple';
import { Textarea } from '@/components/ui/textarea';
import { DotsPagination } from '@/components/ui/DotsPagination';
import ChooseCard from '@/components/ui/ChooseCard';

export default function Ui() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = 7;

  const handleDotClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main className={'p-2'}>
        <h1 className={'text-xl'}>Если нет такого тенанта или урл без него</h1>
        <Button size={'default'} variant={'default'}>
          ShadCN component
        </Button>

        <div>
          <Button size={'sm'} variant={'outline'}>
            Реестрація
          </Button>
          <Input placeholder="Напиши своє ім'я..." />
          <CheckCardBig
            id="check1"
            label="Понеділок | 01.02"
            labelColor="primary"
            variant={'green'}
          />
          <CheckCardBig
            id="check1"
            label="Вівторок  | 01.02"
            labelColor="primary"
            variant={'gray'}
          />
          <CheckCardBig
            id="check1"
            label="Середа  | 01.02"
            labelColor="primary"
            variant={'yellow'}
            indicatorType="cross"
          />
          <CheckCardBig
            id="check1"
            label="Четвер  | 01.02"
            labelColor="primary"
            variant={'orange'}
            bulletPoints={['Першы пункт', 'Другі пункт']}
          />
          <CheckCardBig
            id="check1"
            label="П'ятниця  | 01.02"
            labelColor="secondary"
            variant={'default'}
          />
          <RadioGroup defaultValue="less-than-1-hour" name="time-selection">
            <CheckCard id="check" label="Менше 1 год на день" variant={'green'} value="less-than-1-hour" />
            <CheckCard
              id="check"
              label="Більше 2 годин на день"
              variant={'default'}
              value="more-than-2-hours"
            />
          </RadioGroup>
          <CheckCardSm
            id="check1"
            label="Іншае пытанне: чаму смеласць важней за розум?"
            labelColor="primary"
            variant={'gray'}
          />
          <CheckCardSm
            id="check2"
            label="Іншае пытанне: чаму смеласць важней за розум?"
            labelColor="secondary"
            variant={'default'}
          />
          <CheckCardSm
            id="check2"
            label="Іншае пытанне: чаму смеласць важней за розум?"
            labelColor="primary"
            variant={'green'}
          />
          <CheckCardSm id="" label="" variant={'skeleton'} />
          <Avatar>
            <AvatarImage src="" alt="Default" />
            <AvatarFallback>
              <Image alt="" src={DefaultAvatar} />
            </AvatarFallback>
          </Avatar>
          <div className="w-full flex justify-center">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-[30px] flex justify-center">
                <CarouselPrevious />
                <CarouselPagination />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
          <Progress value={33} />

          <div className="flex justify-center">
            <LevelProgress />
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className=""
          />

          <div className="flex justify-center">
            <CalendarPage />
          </div>

          <div className="flex items-center flex-col">
            <DragCard
              id="card2"
              title="Праверка"
              description="Усё ок?"
              iconChoice="check"
              variant={'default'}
            />
            <DragCard
              id="card2"
              title="Праверка"
              description="Усё ок?"
              iconChoice="check"
              variant={'sun'}
            />
            <DragCard
              id="card2"
              title="Праверка"
              description="Усё ок?"
              iconChoice="edit"
              variant={'green'}
            />
            <DragCard
              id="card2"
              title="Праверка"
              description="Усё ок?"
              iconChoice="check"
              variant={'purple'}
            />
            <DragCard id="card2" title="" description="" variant={'skeleton'} />
          </div>

          <CheckCardSimple id="" />

          <Textarea placeholder="Напиши відповідь..." />

          <div className="flex justify-center">
            <DotsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onDotClick={handleDotClick}
            />
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
        {assistantParams.map((item) => (
          <ChooseCard
            key={item.id}
            {...item}
            voice={item.voice === true}
          />
        ))}
        {blogLevelParams.map((item) => (
          <ChooseCard
            key={item.id}
            {...item}
            voice={item.voice === false}
          />
        ))}
      </div>
        </div>
      </main>
    </>
  );
}

"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"

import { cn } from "@/components/lib/utils"

/**
 * Асноўны інпут, які абгортвае логіку з бібліятэкі `input-otp`.
 */
const InputOTP = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>((props, ref) => {
  const { className, containerClassName, ...restProps } = props

  return (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      // Для мабільных браўзараў: паказваць лічбавую клавіятуру
      inputMode="numeric"
      // HTML-pattern, каб браўзары (у тым ліку мабільныя) кантралявалі тып уводу
      pattern="[0-9]*"
      // Фільтрацыя любога не-лічбавага ўваходу (на ўсялякі выпадак, у т.л. copy-paste)
      onBeforeInput={(event: React.FormEvent<HTMLInputElement>) => {
        // Скашуем SyntheticEvent да роднага InputEvent
        const nativeEvent = event.nativeEvent as InputEvent
        const data = nativeEvent.data
      
        // Цяпер можна правяраць 'data'
        if (data && !/^\d+$/.test(data)) {
          event.preventDefault()
        }
      }}
      {...restProps}
    />
  )
})
InputOTP.displayName = "InputOTP"

/**
 * Група для аб’яднання некалькіх слотаў OTP.
 */
const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

/**
 * Слот, у якім адлюстроўваецца сімвал, уведзены карыстальнікам,
 * або паказваецца курсор, калі слот актыўны.
 */
const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  // Замяняем null на пусты радок
  const trimmedChar = (char ?? "").trim()
  const hasValue = trimmedChar.length > 0

  // Колер бордэра — фіялетавы, калі слот актыўны або ўжо ёсць лічба
  const borderColor = isActive || hasValue ? "border-[#B2A1FF]" : "border-cBlack/25"

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-[49px] w-[51px] items-center justify-center",
        "border-2 text-huge font-regular transition-colors rounded-[10px]",
        borderColor,
        className
      )}
      {...props}
    >
      {/* 
        1) Калі ў слоце ўжо ёсць лічба, паказваем яе
        2) Калі слот актыўны, але пусты, дэфіс прыбіраем, каб не перашкаджаць уводу
        3) Калі слот НЕ актыўны і пусты, паказваем дэфіс 
      */}
      {hasValue ? (
        trimmedChar
      ) : isActive ? (
        null // пры актыўным поле дэфіс не паказваем
      ) : (
        <span className="absolute bottom-[0px] left-1/2 -translate-x-1/2 text-muted-foreground">
          -
        </span>
      )}

      {/* Фэйкавы курсор, калі слот актыўны */}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

/**
 * Раздзяляльнік, калі вам трэба паставіць штосьці паміж слотамі —
 * тут выкарыстоўваецца іконка `Minus`.
 */
const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

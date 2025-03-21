import * as React from "react"

import { cn } from "@/components/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "resize-none flex min-h-[145px] w-[606px] rounded-[10px] bg-white p-5 text-regular font-regular shadow-base placeholder:text-cBlack/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-regular",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

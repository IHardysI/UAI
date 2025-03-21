import * as React from "react"
import { cn } from "@/components/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  shadow?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, shadow = "shadow-base", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[49px] w-full rounded-base bg-transparent px-5 py-4 text-regular transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring/0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          shadow,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }

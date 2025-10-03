import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

    const variants = {
      default: "bg-herb-green-500 text-white hover:bg-herb-green-600",
      outline: "border border-herb-green-500 text-herb-green-600 hover:bg-herb-green-50",
      ghost: "text-herb-green-600 hover:bg-herb-green-50",
    }

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return <button className={classes} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button }

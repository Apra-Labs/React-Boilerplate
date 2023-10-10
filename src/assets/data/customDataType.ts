export type variants = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";

export type buttonVariants = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark" |
"outline-primary" | "outline-secondary" | "outline-danger" | "outline-success" | "outline-warning" | "outline-info" | "outline-light" | "outline-dark";

export type columnTypes = boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };

export type imageShapeTypes = "fluid" | "rounded" | "roundedCircle" | "thumbnail";

export type rowTypes = number | 'auto' | { cols: number | 'auto' };

export type spinnerAnimationTypes = "border" | "grow";

export type toastPositionTypes = 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
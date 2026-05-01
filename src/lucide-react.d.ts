declare module "lucide-react" {
  import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

  type LucideProps = SVGProps<SVGSVGElement> & {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  };

  export type LucideIcon = ForwardRefExoticComponent<
    LucideProps & RefAttributes<SVGSVGElement>
  >;

  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const BrainCircuit: LucideIcon;
  export const Globe: LucideIcon;
  export const Menu: LucideIcon;
  export const Search: LucideIcon;
  export const Smartphone: LucideIcon;
  export const X: LucideIcon;
}

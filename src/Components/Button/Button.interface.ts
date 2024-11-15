export interface ButtonProps{
    children?:string;
    variant?:string;
    startIcon?:string;
    // endIcon?:React.ReactNode;
    endIcon?:string;
    href?:string;
    disabled?:boolean;
    onClick?:  (event: React.MouseEvent<HTMLButtonElement>) => void; 
    color?:string;
    size?:string;
}
export type PropsTypes = {
    input?: any;
    label?: string;
    step?: number; 
    min?: number; 
    max?: number; 
    withoutThumb?: boolean;
    color?: string;
    onChange?: (value: number) => void;
};
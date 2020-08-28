import { type } from "os";

export type ColorsTypes = {
    name: string;
    value: string;
};

export type ColorPickerTypes = {
    value: string;
    onChange: (color: string)=>void;
    colors: Array<ColorsTypes>
};

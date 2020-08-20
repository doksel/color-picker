import { type } from "os";

export type CoorsTypes = {
    name: string;
    value: string;
};

export type ColorPickerTypes = {
    value: string;
    onChange: ()=>void;
    colors: Array<CoorsTypes>
};

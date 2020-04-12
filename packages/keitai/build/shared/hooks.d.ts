import { St } from "./types";
export declare function makeUseSt<ThemeT>(theme: ThemeT): {
    useSt: (st: St<ThemeT>) => {};
};

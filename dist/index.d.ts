declare const appendationFactor: string[];
declare const bitsOrKibibits: string[];
declare const bytesOrBits: string[];
declare function returnAppendation(factor: number, bits?: boolean, kibi?: boolean): string;
declare const defaultOptions: {
    bits: boolean;
    kibibytes: boolean;
    precision: number;
    roundOffInt: boolean;
};

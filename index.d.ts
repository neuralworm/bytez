declare namespace bytez {
    const appendationFactor: string[];
    const bitsOrKibibits: string[];
    const bytesOrBits: string[];
    const defaultOptions: {
        bits: boolean;
        base2: boolean;
        precision: number;
        roundOffInt: boolean;
    };
    function bytez(bytes: number | string, optionsObject: any): string;
}

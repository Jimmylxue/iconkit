export type TUserInputArgument = {
    [key in string]: string;
};
export type TArgument = {
    '--input'?: string;
    pathType?: 'remote' | 'relative' | 'absolute';
    sourceBuffer?: Buffer;
    updateSourceBuffer: (buffer: Buffer) => void;
};
export type TGenerateError = {
    code: number;
    message: string;
};

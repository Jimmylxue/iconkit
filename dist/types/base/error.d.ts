import { TGenerateError } from 'src/types/type';
export declare class GenerateError extends Error {
    failMessage?: TGenerateError;
    originErrorMessage?: string;
    constructor(failMessage: TGenerateError, originErrorMessage: string);
}
export declare function buildFailHandle(error: GenerateError): void;

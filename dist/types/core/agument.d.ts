import { TArgument, TUserInputArgument } from 'src/types/type';
export declare const argument: TArgument;
/**
 * 检查是否是合法输入
 */
export declare function checkArgument(userInputArgs: TUserInputArgument): Promise<void>;
export declare function handleArgument(): Promise<void>;

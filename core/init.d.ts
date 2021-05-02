import { PushOptionType } from './types';
declare global {
    interface Window {
        notifyConfigs: any;
    }
}
export declare const init: (configs: PushOptionType) => void;

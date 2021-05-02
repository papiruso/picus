export declare type PanVariantType = 'success' | 'error' | 'warning' | 'info';
export declare type PositionDataType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export interface ContentPosition {
    position?: PositionDataType;
}
export interface PushDataType extends ContentPosition {
    position: PositionDataType;
    maxCount: number;
    lifetime: number;
}
export interface PushOptionType extends ContentPosition {
    position?: PositionDataType;
    maxCount?: number;
    lifetime?: number;
}
export interface PushType {
    (arg0: PanVariantType, arg1: string, arg2?: PushOptionType): void;
}
export interface ContentStyleType extends ContentPosition {
    className: string;
}
export interface PanStyleType {
    position: PositionDataType;
    backgroundColor: string;
    className: string;
}
export interface StyleOneVariant {
    backgroundColor: string;
    icon: string;
}
export interface PanVariantStylesType {
    success: StyleOneVariant;
    error: StyleOneVariant;
    warning: StyleOneVariant;
    info: StyleOneVariant;
}

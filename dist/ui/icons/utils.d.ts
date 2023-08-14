type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';
export type TIconProps = {
    type: TIconTypes;
    onClick?: () => void;
};
export declare const getIconColor: (type: TIconTypes) => string;
export {};

import React from 'react';
import { optionItemProps } from '../Props';
export interface InjectedInputProps {
    isActive: boolean;
    prevValue: string;
    activeIndex: number;
    focusIndex: boolean;
    isMouseHoverAllowed: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    onKeyDownHandler: (e: KeyboardEvent) => void;
    optionsRef: React.RefObject<HTMLUListElement>;
    isActiveHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onClickItemHandler: (item: optionItemProps, idx: number) => void;
    isMouseHoverAllowedHandler: React.Dispatch<React.SetStateAction<boolean>>;
    optionItemsRef: React.MutableRefObject<React.MutableRefObject<HTMLLIElement>[]>;
    focusIndexHandler: React.Dispatch<React.SetStateAction<number>>;
}
export interface ReceivedInputProps {
    value: string;
    placeholder: string;
    error?: {
        isError: boolean;
        errorText: string;
    };
    options: optionItemProps[];
    valueHandler: (val: string) => void;
    validator?: (val: string) => boolean;
    customInputStyles?: React.CSSProperties;
    customDropdownStyles?: React.CSSProperties;
    customDropdownItemStyles?: React.CSSProperties;
}
declare function withKeyboardNavigation<P extends ReceivedInputProps>(WrappedComponent: React.ComponentType<P>): (props: Omit<P, keyof InjectedInputProps>) => JSX.Element;
export default withKeyboardNavigation;

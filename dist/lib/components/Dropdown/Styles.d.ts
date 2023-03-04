/// <reference types="react" />
type DropdownItemProps = {
    isActive: boolean;
    isFocus: boolean;
    isMouseOn: boolean;
};
declare const Styled: {
    Dropdown: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
    DropdownItem: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & DropdownItemProps, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
};
export default Styled;

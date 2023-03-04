/// <reference types="react" />
type InputItemProps = {
    isActive: boolean;
};
declare const Styled: {
    Input: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & InputItemProps, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
    InputWpr: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    ErrorLabel: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
    InputCtr: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    IconCtr: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
};
export default Styled;

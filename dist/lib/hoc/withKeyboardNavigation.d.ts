import React from 'react';
import { InjectedInputProps, ReceivedInputProps } from './Props';
declare function withKeyboardNavigation<P extends ReceivedInputProps>(WrappedComponent: React.ComponentType<P>): (props: Omit<P, keyof InjectedInputProps>) => JSX.Element;
export default withKeyboardNavigation;

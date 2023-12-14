import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

type RowProps = {
    children: ReactNode;
    style?: object;
} & ViewProps;

const Row: React.FC<RowProps> = ({ children, ...props }) => {
    return <View style={{ ...props.style, flexDirection: 'row' }}>{children}</View>;
};

export default Row;

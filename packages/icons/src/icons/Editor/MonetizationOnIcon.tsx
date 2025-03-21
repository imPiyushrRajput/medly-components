import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MonetizationOnIconSvg from '../../assets/Editor/monetization_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MonetizationOnIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MonetizationOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MonetizationOnIcon.Style = SvgIcon;
MonetizationOnIcon.displayName = 'MonetizationOnIcon';

export default MonetizationOnIcon

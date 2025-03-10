import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderStyleIconSvg from '../../assets/Editor/border_style_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderStyleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderStyleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderStyleIcon.Style = SvgIcon;
BorderStyleIcon.displayName = 'BorderStyleIcon';

export default BorderStyleIcon

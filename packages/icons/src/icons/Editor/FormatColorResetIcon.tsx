import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatColorResetIconSvg from '../../assets/Editor/format_color_reset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatColorResetIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatColorResetIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatColorResetIcon.Style = SvgIcon;
FormatColorResetIcon.displayName = 'FormatColorResetIcon';

export default FormatColorResetIcon

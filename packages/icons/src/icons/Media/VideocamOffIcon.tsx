import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VideocamOffIconSvg from '../../assets/Media/videocam_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideocamOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VideocamOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VideocamOffIcon.Style = SvgIcon;
VideocamOffIcon.displayName = 'VideocamOffIcon';

export default VideocamOffIcon

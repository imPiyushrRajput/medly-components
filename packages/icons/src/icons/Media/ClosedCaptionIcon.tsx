import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ClosedCaptionIconSvg from '../../assets/Media/closed_caption_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClosedCaptionIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ClosedCaptionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ClosedCaptionIcon.Style = SvgIcon;
ClosedCaptionIcon.displayName = 'ClosedCaptionIcon';

export default ClosedCaptionIcon

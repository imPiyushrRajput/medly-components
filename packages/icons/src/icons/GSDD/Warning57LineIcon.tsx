import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning57LineIconSvg from '../../assets/GSDD/Warning_57_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning57LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning57LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning57LineIcon.Style = SvgIcon;
Warning57LineIcon.displayName = 'Warning57LineIcon';

export default Warning57LineIcon

import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage362LineIconSvg from '../../assets/GSDD/Storage_362_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage362LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage362LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage362LineIcon.Style = SvgIcon;
Storage362LineIcon.displayName = 'Storage362LineIcon';

export default Storage362LineIcon

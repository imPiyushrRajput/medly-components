import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation65LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_65_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation65LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation65LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation65LineIcon.Style = SvgIcon;
WarningLegalinformation65LineIcon.displayName = 'WarningLegalinformation65LineIcon';

export default WarningLegalinformation65LineIcon

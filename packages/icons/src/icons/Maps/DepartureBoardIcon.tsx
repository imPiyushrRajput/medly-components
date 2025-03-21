import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DepartureBoardIconSvg from '../../assets/Maps/departure_board_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DepartureBoardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DepartureBoardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DepartureBoardIcon.Style = SvgIcon;
DepartureBoardIcon.displayName = 'DepartureBoardIcon';

export default DepartureBoardIcon

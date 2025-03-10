import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TextRotationAngleUpIconSvg from '../../assets/Action/text_rotation_angle_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotationAngleUpIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextRotationAngleUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextRotationAngleUpIcon.Style = SvgIcon;
TextRotationAngleUpIcon.displayName = 'TextRotationAngleUpIcon';

export default TextRotationAngleUpIcon

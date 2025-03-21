import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CreditCardIconSvg from '../../assets/Action/credit_card_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CreditCardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CreditCardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CreditCardIcon.Style = SvgIcon;
CreditCardIcon.displayName = 'CreditCardIcon';

export default CreditCardIcon

import { SvgIcon } from '@medly-components/icons';
import { CheckboxSizes, CheckboxTheme } from '@medly-components/theme';
import { centerAligned, css, styled, WithThemeProp } from '@medly-components/utils';
import { rgba } from 'polished';
import { getSelectorLabelPositionStyle } from '../Selectors';
import Text from '../Text';
import { Props } from './types';

const getCheckboxSize = ({ theme, size }: { size?: CheckboxSizes } & WithThemeProp) =>
    theme.checkbox.sizes[size || theme.checkbox.defaultSize];

const activeStyle = ({ iconColor, hasError, disabled, bgColor }: Props & CheckboxTheme) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'active';

    return css`
        border-color: ${bgColor[checkboxState]};
        background-color: ${bgColor[checkboxState]};
        ${SvgIcon} {
            transform: scale(1);
            * {
                fill: ${iconColor[checkboxState]};
            }
        }
    `;
};

const nonActiveStyle = ({ borderColor, hasError, disabled }: Props & CheckboxTheme) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'default';

    return css`
        background-color: transparent;
        border-color: ${borderColor[checkboxState]};
    `;
};

export const StyledCheckbox = styled.div`
    border: 0.15rem solid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.checkbox.borderRadius};
    transition: all 100ms ease-out;

    ${centerAligned('flex')}

    ${SvgIcon} {
        pointer-events: none;
        z-index: 1;
        transition: all 200ms ease-in-out;
        transform: scale(0);
        width: 100%;
        height: 100%;
        margin-right: 0.05rem;
    }
`;

export const HiddenCheckbox = styled.input.attrs(({ theme }) => ({ type: 'checkbox', ...theme.checkbox }))<Props>`
    opacity: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    position: absolute;

    &:checked ~ ${StyledCheckbox} {
        ${activeStyle};
    }

    &:not(:checked) ~ ${StyledCheckbox} {
        ${({ indeterminate }) => (indeterminate ? activeStyle : nonActiveStyle)}
    }

    &:not(:disabled) {
        &:focus {
            & ~ ${StyledCheckbox} {
                box-shadow: ${({ hasError, borderColor }) => `0 0 0.8rem ${rgba(borderColor[hasError ? 'error' : 'active'], 0.35)}`};
            }

            &:not(:checked) ~ ${StyledCheckbox} {
                border-color: ${({ hasError, borderColor, indeterminate }) => !indeterminate && borderColor[hasError ? 'error' : 'active']};
            }
        }
    }
`;

export const CheckboxWrapper = styled('div')`
    margin: 0.3rem;
    flex-shrink: 0;
    width: ${getCheckboxSize};
    height: ${getCheckboxSize};
    position: relative;
`;

export const ErrorText = styled(Text)<{ disabled: boolean }>`
    display: block;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme, disabled }) => theme.checkbox.helperTextColor[disabled ? 'disabled' : 'error']};
    margin-bottom: 0.5rem;
`;

export const CheckboxWithLabelWrapper = styled('label').attrs(({ theme }) => ({ ...theme.checkbox }))<Props & { isActive: boolean }>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    * {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }

    ${getSelectorLabelPositionStyle}

    &:hover {
        ${StyledCheckbox} {
            box-shadow: ${({ disabled, hasError, borderColor }) =>
                !disabled && `0 0 0.8rem ${rgba(borderColor[hasError ? 'error' : 'active'], 0.35)}`};
            border-color: ${({ disabled, hasError, borderColor, isActive, bgColor }) =>
                !disabled && (isActive ? bgColor.hovered[hasError ? 'error' : 'active'] : borderColor[hasError ? 'error' : 'active'])};
            background-color: ${({ disabled, hasError, bgColor, isActive }) =>
                !disabled && isActive && bgColor.hovered[hasError ? 'error' : 'active']};
        }
    }
`;

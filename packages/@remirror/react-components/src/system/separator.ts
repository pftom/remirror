import { cx } from '@linaria/core';
import { SeparatorHTMLProps, SeparatorOptions } from 'reakit/Separator/Separator';

import { Components } from '@remirror/theme';

import { BootstrapRoleOptions } from './role';

export type BootstrapSeparatorOptions = BootstrapRoleOptions & SeparatorOptions;

export function useSeparatorProps(
  _: BootstrapSeparatorOptions,
  htmlProps: SeparatorHTMLProps = {},
): SeparatorHTMLProps {
  return { ...htmlProps, className: cx(htmlProps.className, Components.SEPARATOR) };
}
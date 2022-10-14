import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChield?: boolean;
}

export function Text({ asChield, size = 'md', children }: TextProps) {
    
    const Comp = asChield ? Slot : 'span';

    return (
        <Comp 
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                })}
        >
            {children}
        </Comp>
    )
}
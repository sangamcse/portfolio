import { forwardRef } from 'react';
import cn from 'classnames';

export const Notice = forwardRef(
  ({ children, className, ...restProps }, ref) => (
    <a
      ref={ref}
      className={cn(
        'block cursor-pointer text-center bg-purple-50 border border-purple-200 p-4 mb-2 rounded shadow-sm hover:shadow transition duration-300',
        className
      )}
      {...restProps}
    >
      {children}
    </a>
  )
);

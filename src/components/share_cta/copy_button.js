import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import LinkIcon from 'components/share_cta/link.svg';
import CheckIcon from 'components/share_cta/check.svg';

export const CopyButton = ({ url }) => {
  const [justCopied, setJustCopied] = useState(false);

  const handleClick = useCallback(async () => {
    await navigator.clipboard.writeText(url);

    setJustCopied(true);
  }, [url]);

  useEffect(() => {
    if (justCopied) {
      const timeout = setTimeout(() => {
        setJustCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
    return null;
  }, [justCopied]);

  return (
    <button
      type="button"
      className="inline-flex relative py-2 pl-4 pr-5 rounded shadow hover:shadow-md bg-purple-400 hover:bg-purple-500 text-white transition duration-300 ease-in-out"
      onClick={handleClick}
    >
      <span
        className={cn('flex items-center justify-center', {
          'opacity-0': justCopied,
        })}
      >
        <LinkIcon className="w-8 mr-2" /> copy link
      </span>
      <span
        className={cn('flex items-center justify-center absolute', {
          'opacity-0': !justCopied,
        })}
      >
        <CheckIcon className="w-8 mr-2 text-green-300" /> copied!
      </span>
    </button>
  );
};

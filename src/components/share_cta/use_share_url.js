import { useRouter } from 'next/router';

import { rootUrl } from 'utils/constants';

export const useShareUrl = () => {
  const { asPath } = useRouter();

  return `${rootUrl}${asPath.replace(/\?.+/, '')}`;
};

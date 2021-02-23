import cn from 'classnames';

import { CopyButton } from 'components/share_cta/copy_button';
import { TweetButton } from 'components/share_cta/tweet_button';
import { useShareUrl } from 'components/share_cta/use_share_url';

export const ShareCTA = ({ className, title, tags }) => {
  const shareUrl = useShareUrl();

  return (
    <aside
      className={cn(
        'text-center bg-white border border-gray-100 p-4 mb-2 rounded shadow-sm bg-opacity-75',
        className
      )}
    >
      <div className="mb-2">
        <span role="img" aria-label="">
          💜
        </span>{' '}
        sharing is caring{' '}
        <span role="img" aria-label="">
          💜
        </span>
      </div>
      <div className="flex items-center justify-center">
        <TweetButton
          className="mr-4"
          title={title}
          tags={tags}
          url={shareUrl}
        />
        <CopyButton url={shareUrl} />
      </div>
    </aside>
  );
};

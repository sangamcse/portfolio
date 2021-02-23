import Link from 'next/link';
import { Notice } from 'components/notice/notice';
import { ShareCTA } from 'components/share_cta/share_cta';

const BelowTheFold = ({ title, tags }) => (
  <div className="px-4">
    <ShareCTA title={title} tags={tags} />
    <Link href="/blog" passHref>
      <Notice>
        Check out{' '}
        <span className="underline text-purple-600 bg-opacity-75">
          all posts
        </span>
      </Notice>
    </Link>
  </div>
);

export default BelowTheFold;

import { NextSeo } from 'next-seo';
import cn from 'classnames';
import { rootUrl } from 'utils/constants';

import { getImageSrc } from 'components/blog/get_image_src';
import { getSeoProps } from 'components/next_seo_config';
import { AppearingImage } from 'components/appearing_image/appearing_image';

export const FeaturedImage = ({ title, description, withSeo, className }) => {
  const imageSrc = getImageSrc(title);

  return imageSrc ? (
    <>
      {!!withSeo && (
        <NextSeo
          {...getSeoProps({
            title: `${title} | sangamcse`,
            description,
            openGraph: {
              images: [
                {
                  url: `${rootUrl}${imageSrc}`,
                  width: 2048,
                  height: 1152,
                  alt: `Featured image for ${title}`,
                },
              ],
            },
            twitter: {
              cardType: 'summary_large_image',
            },
          })}
        />
      )}
      <div className={cn('max-w-full w-screen', className)}>
        <AppearingImage
          src={imageSrc}
          width={2048}
          height={1152}
          offset="3rem"
          className="sm:rounded shadow-lg"
          alt={`hero of "${title}"`}
        />
      </div>
    </>
  ) : null;
};

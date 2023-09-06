import React from 'react';

export const AdBanner = (props) => {
  return (
    <iframe
      sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
      src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sangam03d-21&language=en_IN&marketplace=amazon&region=IN&placement=B0C5N4RM5Z&asins=B0C5N4RM5Z&linkId=4972ad9b2d27b18b08d0e65a6fd9c0d2&show_border=true&link_opens_in_new_window=true"
      {...props}
    ></iframe>
  );
};

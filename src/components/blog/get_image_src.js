export const IMAGE_PREFIX = '/images/blog';

export const getImageSrc = title =>
  `${IMAGE_PREFIX}/${title.replace(/ /g, '-').replace(/\./g, '')}.jpg`;

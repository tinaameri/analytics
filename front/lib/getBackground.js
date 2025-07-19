export const getBackground = (backgroundData, size = 'cover') => {
  const imageUrl = backgroundData?.image?.url
    ? `url('${process.env.NEXT_PUBLIC_CMS_BASE_URL}${backgroundData.image.url}')`
    : null;

  const backgroundColor = backgroundData?.color || null;
  const sx = {};

  if (!imageUrl && !backgroundColor) {
    return sx;
  }

  if (imageUrl) {
    sx.background = `${imageUrl} center / ${size} no-repeat`;
    if (backgroundColor) {
      sx.background += ` ${backgroundColor}`;
    }
  } else {
    sx.backgroundColor = backgroundColor;
  }
  return sx;
};

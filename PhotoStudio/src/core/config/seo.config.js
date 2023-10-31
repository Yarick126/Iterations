const SITE_NAME = 'Photography site'

export const getTitle = title =>
{
  return title ? `${SITE_NAME} | ${title}` : `${SITE_NAME}`
}
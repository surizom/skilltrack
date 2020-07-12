export const formatEnum = (enumValue: string) => enumValue.replace(/_/g, ' ');

export const openExternalLink = (link: string) => {
  const newTab = window.open(link);
  //@ts-ignore
  newTab.focus();
};

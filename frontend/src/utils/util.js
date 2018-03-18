export const header = {
  headers: { Authorization: 'whatever-you-want' },
  credentials: 'include',
};
export const titleCheck = (title) => {
  if (title.length > 36) {
    const newString = title.substr(0, 35);
    return `${newString}...`;
  }
  return title;
};

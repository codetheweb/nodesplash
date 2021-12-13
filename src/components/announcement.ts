const makeAnnouncementLines = (message: string, now?: Date, expiration?: Date) => {
  if (message === '') {
    return null;
  }

  if (expiration && now && expiration.getTime() < now.getTime()) {
    return null;
  }

  return [`📣 ${message}`, ''];
};

export default makeAnnouncementLines;

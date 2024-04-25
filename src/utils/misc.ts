export const truncateValue = (value: string) => {
  return `${value?.slice(0, 6)}...${value?.slice(-4)}`;
};

export const formattedDate = (date: Date): string => {
  const nth = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  return `${month.split(',')[0]} ${day}${nth(day)}, ${date.getFullYear()}`;
};

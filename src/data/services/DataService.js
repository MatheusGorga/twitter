const RelativeFormat = new Intl.RelativeTimeFormat("pt", {
  style: "short",
});

export const DataService = {
  difference(date) {
    const now = new Date();
    let differnece = (now.getTime() - new Date(date).getTime()) / 1000;
    type = "";
    if (differnece < 60) {
      type = "seconds";
      differnece = Math.round(differnece);
    } else if (differnece < 60 * 60) {
      type = "minutes";
      differnece = Math.round(differnece / 60);
    } else if (differnece < 60 * 60 * 24) {
      type = "hours";
      differnece = Math.round(differnece / 60 / 60);
    } else {
      type = "days";
      differnece = Math.round(differnece / 60 / 60 / 24);
    }

    return {
      differnece,
      type,
    };
  },

  relativeTime(date) {
    const { difference, type } = this.difference(date);
    return RelativeFormat.format(-difference, type);
  },
};

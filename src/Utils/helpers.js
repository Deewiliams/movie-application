export function truncate(title) {
    if (typeof title !== "string") {
      return "";
    }
    return title.substring(0, 20) + " ...";
  }
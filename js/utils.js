export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

// export function storageID(token, userName) {
//   return const token = localStorage.getItem("token");
//   const userName = localStorage.getItem("username");

// }
export function dateFormat(listings) {
  console.log(listings);
  return {
    createDate: new Date(listings.created),
    updateDate: new Date(listings.updated),
    endDate: new Date(listings.endsAt),
  };
}

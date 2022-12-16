export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

export const token = localStorage.getItem("token");
export const userName = localStorage.getItem("username");
export const loginID = document.querySelector("#userNav");

export function dateFormat(date) {
  return {
    createDate: new Date(date.created),
    updateDate: new Date(date.updated),
    endDate: new Date(date.endsAt),
  };
}
export const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

export function sortListings(listings) {
  return [...listings].sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );
}

// export function searchInit(listings) {
//   const searchForm = document.getElementById("searchForm");

//   searchForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const form = event.target;
//     const searchTerm = form.term.value;
//   });
// }
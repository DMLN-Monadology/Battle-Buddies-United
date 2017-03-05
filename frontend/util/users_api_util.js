export const fetchUsers = (success) => {
  $.ajax ({
    url: 'api/users',
    method: "GET",
    success
  });
};

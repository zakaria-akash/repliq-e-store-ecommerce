export const getAllUsers = async () => {
  const response = await fetch(
    "https://repliq-e-store-default-rtdb.firebaseio.com/users.json"
  );
  const data = await response.json();
  const allUsers = [];

  for (const key in data) {
    allUsers.push({
      id: key,
      ...data[key],
    });
  }

  return allUsers;
};

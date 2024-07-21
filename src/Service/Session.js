// Function to set an item in local storage
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export function getLocalStorageItem(key) {
  const item = localStorage.getItem(key);
  return typeof item === "string" ? item : ""; // Ensure the value is always a string
}

export function removeLocalStorageItem(key) {
  localStorage.removeItem(key);
}

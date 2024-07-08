export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorageItem(key) {
  const item = localStorage.getItem(key);
  return typeof item === "string" ? item : ""; // Ensure the value is always a string
}

export function removeLocalStorageItem(key) {
  localStorage.removeItem(key);
}

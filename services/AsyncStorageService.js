import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS_KEY = "vetlab_users";
const SESSION_KEY = "vetlab_session";
const PRACTICES_KEY = "vetlab_practices";

/* ================= USERS ================= */

export const getUsers = async () => {
  const data = await AsyncStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveUsers = async (users) => {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const saveSession = async (user) => {
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const getSession = async () => {
  const data = await AsyncStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearSession = async () => {
  await AsyncStorage.removeItem(SESSION_KEY);
};

/* ================= PRACTICES ================= */

export const savePractices = async (practices) => {
  await AsyncStorage.setItem(PRACTICES_KEY, JSON.stringify(practices));
};

export const getPractices = async () => {
  const data = await AsyncStorage.getItem(PRACTICES_KEY);
  return data ? JSON.parse(data) : [];
};

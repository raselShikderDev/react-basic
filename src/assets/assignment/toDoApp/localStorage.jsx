const myToDoKey = "toDokey"
//LocalStorage get todo Data
export const getLocalStorageValue = () => {
    const initialToDo = localStorage.getItem(myToDoKey)
      if (!initialToDo) return []
        return JSON.parse(initialToDo)
}
  
//LocalStorage set todo Data
export const setLocalStorageValue = (userValue) => {
      // storing user Todo or Data in LocalStorage
  return localStorage.setItem(myToDoKey, JSON.stringify(userValue));
  }
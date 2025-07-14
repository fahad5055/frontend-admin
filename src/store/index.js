import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

import storage from "redux-persist/lib/storage";

<<<<<<< HEAD
import rootReducer from "./reducer/rootReducer";
=======
import rootReducer from "./reducers/rootReducer";
>>>>>>> 0c9eb2355c2059085b89fc82d3bb87aea3114ca6

const encryptor = encryptTransform({
  secretKey: "123",
  onError: (error) => {
    console.error("Encryption error:", error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  transforms: [encryptor],
};

// Apply the persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(persistedReducer, composeWithDevTools());

// Persistor to sync storage
const persistor = persistStore(store);

// Optional: Sync state across tabs
window.addEventListener("storage", (event) => {
  if (event.key === "persist:root") {
    persistor.persist();
  }
});

export { persistor, store };

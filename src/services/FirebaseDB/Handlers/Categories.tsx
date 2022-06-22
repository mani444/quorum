import { db } from "../../FirebaseService";
import { collection, getDocs } from "firebase/firestore";
import { E_COLLECTIONS } from "../../../enums/Enums";

export const GetAllCategories = async () => {
  try {
    const categories = await getDocs(collection(db, E_COLLECTIONS.CATEGORIES));
    return categories.docs.map((category) => {
      return { ...category.data(), id: category.id };
    });
  } catch (err) {
    throw err;
  }
};

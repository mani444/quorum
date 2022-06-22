import { ICategory } from "../../../interfaces/interfaces";
import { GetAllCategories } from "../Handlers/Categories";

const FirebaseDBService = () => {
  return {
    GetAllCategories: GetAllCategories,
  } as IFirebaseDBService;
};

export default FirebaseDBService;

interface IFirebaseDBService {
  GetAllCategories: () => Promise<ICategory[]>;
}

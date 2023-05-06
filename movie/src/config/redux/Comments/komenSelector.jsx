import { useSelector } from "react-redux";

export const useIsEdit = () => useSelector((state) => state.editKomen.isEdit);

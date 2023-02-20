const ListItems = {
    Lists: [],
  };
  
  const AddList = (state = ListItems, action) => {
    switch (action.type) {
      case "ADD":
        const productData = action.data;
        return {
          ...state,
          Lists: [...state.Lists, productData],
        };
      case "DELETE":
        const newList = state.Lists.filter(
          (element) => element.id !== action.id
        );
        return {
          ...state,
          Lists: newList,
        };
      default:
        return state;
    }
  };
  
  export default AddList;
  
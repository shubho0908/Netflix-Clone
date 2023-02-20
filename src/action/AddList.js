const AddToList = (data) => {
    return {
      type: "ADD",
      data: data,
    };
  };
  const Delete = (id) => {
    return {
      type: "DELETE",
      id: id,
    };
  };
  
  export { AddToList, Delete };
  
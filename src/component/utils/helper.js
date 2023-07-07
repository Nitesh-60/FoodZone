export function filterSearch(searchText,newRestruants){
    const filter_data = newRestruants.filter((res)=>
      res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    console.log(filter_data);
    return filter_data;
  }
const initState = {
    pages: [
      {id: '1', title: 'home', content: 'blah blah blah'},
      {id: '2', title: 'contact', content: 'blah blah blah'},
      {id: '3', title: 'about', content: 'blah blah blah'}
    ]
  }
  
  const pageReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PAGE_SUCCESS':
        console.log('create page success');
        return state;
      case 'CREATE_PAGE_ERROR':
        console.log('create page error');
        return state;
      default:
        return state;
    }
  };
  
  export default pageReducer;
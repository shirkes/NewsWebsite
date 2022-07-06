const reducer = (state, action) => {
       switch(action.type) {
           case "SET_LOADING":
           return{
            ...state,
            isLoading: true,
           };
           case "GET_STORIES":
           return {
                 ...state,
                 isLoading: false,
                 hits: action.payload.hits,
                 nbPages: action.payload.nbpages,
           };
           case "REMOVE_POST":
            return{
                ...state,
                hits : state.hits.filter(
                    (curElem) =>  curElem.objectID != action.payload
                ),
            };

            case "SEARCH_QUERY":
                return{
                    ...state,
                    query: action.thapa,
                };

            case "NEXT_PAGE":
                let pageNumInc = state.page + 1;
                if(pageNumInc >= state.nbPages){
                    pageNumInc = 0;
                }
                return{
                    ...state,
                    page: pageNumInc,
                };

                case "PREV_PAGE":
                    let pageNum = state.page;

                    if(pageNum <= 0){
                        pageNum = 0;
                    }else{
                        pageNum = pageNum - 1;
                    }
                    return{
                        ...state,
                        page: pageNum,
                    };

       }

       return state
    };
export default reducer;
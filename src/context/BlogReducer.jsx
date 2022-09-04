 
 const createBlog = (state,blog)=>{
        return [...state,blog];
 }
 const deleteBlog = (state,blog)=>{
        const deleteFiltered = state.filter((item)=>{
             return item.id !== blog.id
        })
        return deleteFiltered
 }

export const blogReducer = (state,action)=>{
 switch(action.type){
    case "BLOG_CREATE" :
        return createBlog(state,action.payload);
    case "BLOG_DELETE" :
        return deleteBlog(state,action.payload);
        default:
        return state;
 }
}

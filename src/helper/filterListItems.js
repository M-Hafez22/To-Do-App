const filteredList = (filtertype, list) => {
    switch (filtertype) {
        case 'SHOW_ALL_TODOS':
            return list;
        case 'SHOW_COMPLETED_TODOS':
            return list.filter(item => item.complete);
        case 'SHOW_ACTIVE_TODOS':
            return list.filter(item => !item.complete);
        default:
            return list
    }
}


export default filteredList;

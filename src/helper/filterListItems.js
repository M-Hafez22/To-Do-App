const filteredList = (filtertype, list) => {
    switch (filtertype) {
        case 'ALL':
            return list;
        case 'COMPLETED':
            return list.filter(item => item.complete);
        case 'ACTIVE':
            return list.filter(item => !item.complete);
        default:
            return list
    }
}


export default filteredList;

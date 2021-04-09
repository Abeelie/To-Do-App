function getTaskFromLocalStorage(nameVariable){
    return localStorage.getItem(nameVariable)
}

function saveInLocalStorage(nameVariable, objectToSave){
    localStorage.setItem(nameVariable, objectToSave)
}


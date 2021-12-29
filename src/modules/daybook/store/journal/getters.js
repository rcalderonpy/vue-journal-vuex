// export const myGetter = (state)=>{
    // return state.xxx
// }

export const getEntriesByTerm = (state)=>(term = '')=>{
    if (term.length === 0) return state.entries
    let resultado = state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
    return resultado
    
}

export const getEntriesById = (state)=>(id='')=>{
    const entry = state.entries.find(entry => entry.id === id)
    if (!entry) return
    // console.log('entry', entry);
    return {...entry}
    
}
import {createAction} from '@reduxjs/toolkit'

const setChecked = createAction('getChecked', (checked) => {
    return {
        payload:{
            continent: checked
        }
    }
})
const setSearched = createAction('getSearched', (searched) => {
    return {
        payload:{
            name: searched
        }
    }
})
const filterCitiesActions = {
    setChecked,
    setSearched
}
export default filterCitiesActions
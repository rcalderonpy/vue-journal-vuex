

import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-6a32f-default-rtdb.firebaseio.com'
})

export default journalApi
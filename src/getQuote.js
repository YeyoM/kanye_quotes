import axios from 'axios'

const getQuote = () => {
    return(
        axios.get('https://api.kanye.rest/')
            .then((response) => {
                const { data } = response
                return data
            })
    )
}

export default getQuote
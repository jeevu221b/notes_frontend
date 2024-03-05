
export const backendRoutes = {
    BASE_URL: "http://localhost:8000",
    CREATE_NOTES: {
        url: "/api/createnotes/",
        method: "POST"
    },
    GET_NOTES: {
        url: (id) => id ? `/api/getnotes/${id}/` : '/api/getnotes/',
        method: 'GET'
    },
    DELETE_NOTES: {
        url: '/api/deletenotes/',
        method: "POST"
    },
    EDIT_NOTES: {
        url: '/api/editnotes/',
        method: "POST"
    },
    LOGIN: {
        url: '/api/login/',
        method: "POST"
    },
    SIGN_UP: {
        url: '/api/signup/',
        method: "POST"
    },


}


export async function apiRequest(route, method, payload) {
    const token = localStorage.getItem("token")
    const url = backendRoutes.BASE_URL + route
    try {
        const params = {
            method: method,
            ...(token ? {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                }
            } : {}),
            ...(payload ? {
                body: JSON.stringify(payload)

            } : {}),
        }
        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status >= 300) {
            const error = new Error(result.error)
            error.status = response.status
            throw error
        } else {

            return result
        }

    }

    catch (error) {
        console.log("ERROR", error)
        window.honeybadger.notify(error)
        throw error
    }
}

export async function deleteNote(payload) {
    try {
        const userResponse = window.confirm("Do you want to delete? ")
        if (userResponse) {
            await apiRequest(backendRoutes.DELETE_NOTES.url, backendRoutes.DELETE_NOTES.method, payload)
        }
    }
    catch (error) {
        alert(error)
    }


}

export const config = {
    apiKey: "hbp_480wxirsfyNCclHmns8dentSFnlbjj4wmigC",
    environment: "production"
}


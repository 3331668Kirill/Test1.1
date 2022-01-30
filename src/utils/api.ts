import axios, {AxiosResponse} from 'axios'
import DevExpress from "devextreme/bundles/dx.all"


export const instance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
)

export const postsAPI = {
    getPosts() {
        return instance.get<TypeState[]>('posts')
    },
    addPosts(post: string) {
        return instance.post<{ post: string }, AxiosResponse<ResponseType>>('posts', post)
    },
    deletePost(id:number) {
        return instance.delete<ResponseType>(`posts/${id}`)
    }
}

export type TypeState = {
    userId: number
    id: number
    title: string
    body: string
}
export type TypeValidatingForm = {
    component?: DevExpress.ui.dxDataGrid
    element?: DevExpress.core.dxElement
    model?: any
    brokenRules?: Array<DevExpress.ui.RequiredRule
        | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule
        | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule
        | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule
        | DevExpress.ui.EmailRule>
    isValid?: boolean
    key?: any
    newData?: any
    oldData?: any
    errorText?: string
}

type ResponseType = {
    userId: number
    id: number
    title: string
    body: string
}

export type TypeValidatingFormDelete = {
    component?: DevExpress.ui.dxDataGrid
    element?: DevExpress.core.dxElement
    model?: any
    data?: any
    key?: any
    error?: Error
}
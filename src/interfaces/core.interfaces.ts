
export interface UserCredentials {
    email: string,
    firstName: string,
    lastName: string,
    password: string
}

export interface UsersData {
    id: number,
    firstName: string,
    lastName: string,
    date: string,
    phone: any
}

export interface TableColumn {
    fieldName: string
    title: string,
    isSortable?: boolean
}

export enum SortDirEnum {
    ASC = "ASC",
    DESC = "DESC"
}
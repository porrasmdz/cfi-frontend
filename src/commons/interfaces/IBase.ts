export interface ReadSchema {
    id: string;  // UUID as string
    is_archived: boolean;
    created_at: string;  // DateTime as string
    updated_at: string;  // DateTime as string
    deleted_at?: string;  // DateTime as string
}

export interface CreateSchema {
    is_archived?: boolean;
    created_at?: string;  // DateTime as string
    updated_at?: string;  // DateTime as string
    deleted_at?: string;  // DateTime as string
}

export interface UpdateSchema {
    is_archived?: boolean;
    deleted_at?: string;  // DateTime as string
}

// Enums
export enum MatchMode {
    CONTAINS = "contains",
    NOT_CONTAINS = "notContains",
    IN = "in",
    LIKE = "like",
    EQUALS = "eq",
    NOT_EQUALS = "ne",
    GREATER_THAN = "gt",
    LESS_THAN = "lt",
    GREATER_EQUALS = "ge",
    LESS_EQUALS = "le",
    IS_EMPTY = "isEmpty",
    IS_NOT_EMPTY = "isNotEmpty"
}

// Other models
export interface Filter {
    value?: any;
    match_mode: MatchMode;
}

export interface TableQueryBody {
    filters: { [key: string]: Filter };
    skip: number;
    limit: number;
    sort_by?: string;
    sort_order?: number;
}

export interface PaginatedResource<T> {
    totalResults: number;
    results: T[];
    skip: number;
    limit: number;
}


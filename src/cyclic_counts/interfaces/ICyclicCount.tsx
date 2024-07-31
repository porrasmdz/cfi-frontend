import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";

export interface ReadCyclicCount extends ReadSchema {
    name: string;
    status?: string;
    count_type: string;
    count_date_start: string;  // DateTime as string
    count_date_finish: string;  // DateTime as string
    // warehouses?: ReadWarehouse[];
    parent_id?: string;  // UUID as string
}

export interface DetailedCyclicCount extends ReadCyclicCount {
    parent?: ReadCyclicCount;
}

export interface CreateCyclicCount extends CreateSchema {
    name: string;
    status?: string;
    count_type: string;
    count_date_start: string;  // DateTime as string
    count_date_finish: string;  // DateTime as string
    warehouse_ids: string[];  // UUID as string[]
    parent_id?: string;  // UUID as string
}

export interface UpdateCyclicCount extends UpdateSchema {
    name?: string;
    status?: string;
    count_type?: string;
    count_date_start?: string;  // DateTime as string
    count_date_finish?: string;  // DateTime as string
    warehouse_ids?: string[];  // UUID as string[]
    parent_id?: string;  // UUID as string
}
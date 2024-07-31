import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadWarehouseType } from "./IWarehouseType";

export interface ReadWarehouse extends ReadSchema {
    id: string;  // UUID as string
    name?: string;
    country?: string;
    state?: string;
    city?: string;
    address?: string;
    company_id: string;  // UUID as string
    warehouse_type_id: string;  // UUID as string
}

export interface DetailedWarehouse extends ReadWarehouse {
    wh_locations?: ReadWarehouseType[];
}

export interface CreateWarehouse extends CreateSchema {
    name?: string;
    country?: string;
    state?: string;
    city?: string;
    address?: string;
    company_id: string;  // UUID as string
    warehouse_type_id: string;  // UUID as string
}

export interface UpdateWarehouse extends UpdateSchema {
    name?: string;
    country?: string;
    state?: string;
    city?: string;
    address?: string;
    company_id?: string;  // UUID as string
    warehouse_type_id?: string;  // UUID as string
}
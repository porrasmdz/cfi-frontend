import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";

export interface ReadProduct extends ReadSchema {
    id: string;  // UUID as string
    name: string;
    code?: string;
    sku?: string;
    unit_cost: number;
    measure_unit_id: string;  // UUID as string
    category_id: string;  // UUID as string
}

export interface CreateProduct extends CreateSchema {
    name: string;
    code?: string;
    sku?: string;
    unit_cost: number;
    measure_unit_id: string;  // UUID as string
    category_id: string;  // UUID as string
}

export interface UpdateProduct extends UpdateSchema {
    name?: string;
    code?: string;
    sku?: string;
    unit_cost?: number;
    measure_unit_id?: string;  // UUID as string
    category_id?: string;  // UUID as string
}
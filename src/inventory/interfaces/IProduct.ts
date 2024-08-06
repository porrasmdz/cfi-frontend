import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCountRegistry } from "../../cyclic_counts/interfaces/ICountRegistry";
import { ReadMeasureUnit } from "./IMeasureUnit";
import { ReadProductCategory } from "./IProductCategory";

export interface ReadProduct extends ReadSchema {
    id: string;  // UUID as string
    name: string;
    code?: string;
    sku?: string;
    unit_cost: number;
    measure_unit_id: string;  // UUID as string
    category_id: string;  // UUID as string
}

export interface DetailedProduct extends ReadProduct {
    measure_unit: ReadMeasureUnit;  
    category: ReadProductCategory; 
    count_registries: ReadCountRegistry
}

export interface CreateProduct extends CreateSchema {
    id?: string;
    name: string;
    code?: string;
    sku?: string;
    unit_cost: number;
    measure_unit_id: string;  // UUID as string
    category_id: string;  // UUID as string

    cyclic_count_ids : string[];
    warehouse_ids : string[];
    whlocation_ids : string[];
    system_units: number;
    registry_type: 'system' | 'physical' | 'consolidated';
}

export interface UpdateProduct extends UpdateSchema {
    id?: string;
    name?: string;
    code?: string;
    sku?: string;
    unit_cost?: number;
    measure_unit_id?: string;  // UUID as string
    category_id?: string;  // UUID as string
    cyclic_count_ids? : string[];
    warehouse_ids? : string[];
    whlocation_ids? : string[];
    system_units?: number;
    registry_type?: 'system' | 'physical' | 'consolidated';
}
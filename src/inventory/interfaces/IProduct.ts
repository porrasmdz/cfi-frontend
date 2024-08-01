import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
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
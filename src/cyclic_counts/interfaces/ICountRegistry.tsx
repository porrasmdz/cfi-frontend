import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCyclicCount } from "./ICyclicCount"
export interface ReadCountRegistry extends ReadSchema {
    id: string;  // UUID as string
    registry_type: "system" | "physical" | "consolidated";
    registry_units: number;
    registry_cost: number;
    difference_units: number;
    difference_cost: number;
    product_id: string;  // UUID as string
    cyclic_count_id: string;  // UUID as string
}

export interface DetailedCountRegistry extends ReadCountRegistry {
    // product: ReadProduct;
    cyclic_count: ReadCyclicCount;
}

export interface CreateCountRegistry extends CreateSchema {
    registry_type: "system" | "physical" | "consolidated";
    registry_units: number;
    registry_cost: number;
    difference_units: number;
    difference_cost: number;
    product_id: string;  // UUID as string
    cyclic_count_id: string;  // UUID as string
}

export interface UpdateCountRegistry extends UpdateSchema {
    id?: string;
    registry_type?: "system" | "physical" | "consolidated";
    registry_units?: number;
    registry_cost?: number;
    difference_units?: number;
    difference_cost?: number;
    product_id?: string;  // UUID as string
    cyclic_count_id?: string;  // UUID as string
}
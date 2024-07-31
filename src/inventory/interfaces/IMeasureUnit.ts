import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";

export interface ReadMeasureUnit extends ReadSchema {
    id: string;  // UUID as string
    name: string;
    conversion_formula?: string;
    parent_id?: string;  // UUID as string
}

export interface CreateMeasureUnit extends CreateSchema {
    name: string;
    conversion_formula?: string;
    parent_id?: string;  // UUID as string
}

export interface UpdateMeasureUnit extends UpdateSchema {
    name?: string;
    conversion_formula?: string;
    parent_id?: string;  // UUID as string
}
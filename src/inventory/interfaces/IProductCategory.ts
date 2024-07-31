import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";

export interface ReadProductCategory extends ReadSchema {
    id: string;  // UUID as string
    name: string;
    short_codename: string;
}

export interface CreateProductCategory extends CreateSchema {
    name: string;
    short_codename: string;
}

export interface UpdateProductCategory extends UpdateSchema {
    name?: string;
    short_codename?: string;
}
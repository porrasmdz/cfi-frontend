import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";

export interface ReadWHLocationType extends ReadSchema {
    id: string;  // UUID as string
    name: string;
}

export interface CreateWHLocationType extends CreateSchema {
    name: string;
}

export interface UpdateWHLocationType extends UpdateSchema {
    name?: string;
}
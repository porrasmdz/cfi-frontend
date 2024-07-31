import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCompany } from "./ICompany";
export interface ReadCorporateGroup extends ReadSchema {
    name: string;
    description?: string;
}

export interface DetailedCorporateGroup extends ReadCorporateGroup {
    companies?: ReadCompany[];
}

export interface CreateCorporateGroup extends CreateSchema {
    name: string;
    description?: string;
}

export interface UpdateCorporateGroup extends UpdateSchema {
    name?: string;
    description?: string;
}

import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCorporateGroup } from "./ICorporativeGroup";
import { ReadContact } from "./IContact";

export interface ReadCompany extends ReadSchema {
    name: string;
    codename?: string;
    phone_number?: string;
    cellphone_number?: string;
    email: string;
    ruc: string;
    foundation_date: string //Date as string
    

}   

export interface DetailedCompany extends ReadCompany {
    contacts?: ReadContact[]
    corporate_group: ReadCorporateGroup
    corporate_group_id: string
}

export interface CreateCompany extends CreateSchema {
    name: string;
    codename?: string;
    phone_number?: string;
    cellphone_number?: string;
    email: string;
    ruc: string;
    foundation_date?: string //Date as string
    corporate_group_id: string 
}

export interface UpdateCompany extends UpdateSchema {
    name?: string;
    codename?: string;
    phone_number?: string;
    cellphone_number?: string;
    email?: string;
    ruc?: string;
    foundation_date?: string //Date as string
    corporate_group_id?: string 
}

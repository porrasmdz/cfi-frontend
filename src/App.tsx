import {
  Admin,
  Resource,
  houseDarkTheme,
  ShowGuesser,
  ListGuesser,
  EditGuesser
} from "react-admin";
//TODO: Refactor this boilerplate code with index.ts per feature
import { Dashboard } from "./auth/pages/Dashboard";
// Companies Module
import { CorpGroupList } from "./companies/components/CorpGroupList";
import { CorpGroupCreate } from "./companies/components/CorpGroupCreate";
import { CorpGroupShow } from "./companies/components/CorpGroupShow";
import { CorpGroupEdit } from "./companies/components/CorpGroupEdit";

import { CompaniesList } from "./companies/components/CompaniesList";
import { CompaniesShow } from "./companies/components/CompaniesShow";
import { CompaniesEdit } from "./companies/components/CompaniesEdit";
import { CompaniesCreate } from "./companies/components/CompaniesCreate";

import { ContactsList } from "./companies/components/ContactsList";
import { ContactsShow } from "./companies/components/ContactsShow";
import { ContactsCreate } from "./companies/components/ContactsCreate";
import { ContactsEdit } from "./companies/components/ContactsEdit";
// Inventory Module
import { WHLocationTypesList } from "./inventory/components/WHLocationTypesList";
import { WHLocationTypesShow } from "./inventory/components/WHLocationTypesShow"; 
import { WHLocationTypesCreate } from "./inventory/components/WHLocationTypesCreate";
import { WHLocationTypesEdit } from "./inventory/components/WHLocationTypesEdit";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import { WHLocationList } from "./inventory/components/WHLocationList ";
import { WHLocationShow } from "./inventory/components/WHLocationShow";
import { WHLocationEdit } from "./inventory/components/WHLocationEdit";
import { WHLocationCreate } from "./inventory/components/WHLocationCreate";
import { WHTypeList } from "./inventory/components/WHTypeList";
import { WHTypeShow } from "./inventory/components/WHTypeShow";
import { WHTypeEdit } from "./inventory/components/WHTypeEdit";
import { WHTypeCreate } from "./inventory/components/WHTypeCreate";
import { WarehouseList } from "./inventory/components/WarehouseList";
import { WarehouseShow } from "./inventory/components/WarehouseShow";
import { WarehouseEdit } from "./inventory/components/WarehouseEdit";
import { WarehouseCreate } from "./inventory/components/WarehouseCreate";
import { ProductCategoryList } from "./inventory/components/ProductCategoryList";
import { ProductCategoryShow } from "./inventory/components/ProductCategoryShow";
import { ProductCategoryEdit } from "./inventory/components/ProductCategoryEdit";
import { ProductCategoryCreate } from "./inventory/components/ProductCategoryCreate";
import { ProductList } from "./inventory/components/ProductList";
import { ProductShow } from "./inventory/components/ProductShow";
import { ProductEdit } from "./inventory/components/ProductEdit";
import { ProductCreate } from "./inventory/components/ProductCreate";
import { MeasureUnitList } from "./inventory/components/MeasureUnitList";
import { MeasureUnitShow } from "./inventory/components/MeasureUnitShow";
import { MeasureUnitEdit } from "./inventory/components/MeasureUnitEdit";
import { MeasureUnitCreate } from "./inventory/components/MeasureUnitCreate";
//TODO: Automatically map resource to its api while editting and creating 
// child inside parent resource CorpGroup > Companies, companies > contacts
export const App = () => {
  return (
    <Admin layout={Layout} theme={houseDarkTheme} dataProvider={dataProvider} dashboard={Dashboard}>
      {/* Companies */}
      <Resource name="corporative_groups" 
      list={CorpGroupList}
      show={CorpGroupShow} 
      edit={CorpGroupEdit}
      create={CorpGroupCreate} />
      <Resource name="companies" 
      list={CompaniesList}
      show={CompaniesShow} 
      edit={CompaniesEdit}
      create={CompaniesCreate} />
      <Resource name="contacts" 
      list={ContactsList}
      show={ContactsShow} 
      edit={ContactsEdit}
      create={ContactsCreate} />
      
      {/* Inventory */}
      <Resource name="whlocation_types" 
       list={WHLocationTypesList}
       show={WHLocationTypesShow} 
       edit={WHLocationTypesEdit} 
       create={WHLocationTypesCreate}
        />
      <Resource name="whlocations" 
       list={WHLocationList}
       show={WHLocationShow} 
       edit={WHLocationEdit}
       create={WHLocationCreate}
        />
      <Resource name="warehouse_types" 
       list={WHTypeList}
       show={WHTypeShow} 
       edit={WHTypeEdit}
       create={WHTypeCreate}
        />
      <Resource name="warehouses" 
       list={WarehouseList}
       show={WarehouseShow} 
       edit={WarehouseEdit}
       create={WarehouseCreate}
        />
      <Resource name="product_categories" 
       list={ProductCategoryList}
       show={ProductCategoryShow} 
       edit={ProductCategoryEdit}
       create={ProductCategoryCreate}
        />

      <Resource name="products" 
      list={ProductList}
      show={ProductShow} 
      edit={ProductEdit}
      create={ProductCreate}
       />
      <Resource name="measure_units" 
       list={MeasureUnitList}
       show={MeasureUnitShow} 
       edit={MeasureUnitEdit}
       create={MeasureUnitCreate}
        />
      {/* Cyclic Counts */}
      
      <Resource name="cyclic_counts" 
       list={ListGuesser}
       show={ShowGuesser} 
       edit={EditGuesser}
        />
      <Resource name="count_registries" 
        list={ListGuesser}
        show={ShowGuesser} 
        edit={EditGuesser}
        />      
      <Resource name="activity_registries" 
      list={ListGuesser}
      show={ShowGuesser} 
      edit={EditGuesser}
      />
    </Admin>
  );
};

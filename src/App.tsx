import {
  Admin,
  Resource,
  houseDarkTheme,
  ShowGuesser,
  EditGuesser
} from "react-admin";
import { Dashboard } from "./auth/pages/Dashboard";
import { CorpGroupList } from "./companies/components/CorpGroupList";
import { CorpGroupCreate } from "./companies/components/CorpGroupCreate";
import { CorpGroupShow } from "./companies/components/CorpGroupShow";
import { CorpGroupEdit } from "./companies/components/CorpGroupEdit";

import { CompaniesList } from "./companies/components/CompaniesList";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import { CompaniesShow } from "./companies/components/CompaniesShow";
import { CompaniesEdit } from "./companies/components/CompaniesEdit";
import { CompaniesCreate } from "./companies/components/CompaniesCreate";
import { ContactsList } from "./companies/components/ContactsList";
import { ContactsShow } from "./companies/components/ContactsShow";
import { ContactsCreate } from "./companies/components/ContactsCreate";
import { ContactsEdit } from "./companies/components/ContactsEdit";
//TODO: Automatically map resource to its api while editting and creating 
// child inside parent resource CorpGroup > Companies, companies > contacts
export const App = () => {
  return (
    <Admin layout={Layout} theme={houseDarkTheme} dataProvider={dataProvider} dashboard={Dashboard}>
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
    </Admin>
  );
};

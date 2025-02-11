import { DefaultListView } from '@payloadcms/ui'
import { CustomTable } from './CustomTable'

export const CustomListView = (props: any) => (
  <DefaultListView
    Description={props.Description}
    BeforeList={props.BeforeList}
    BeforeListTable={props.BeforeListTable}
    AfterListTable={props.AfterListTable}
    AfterList={props.AfterList}
    collectionSlug={props.collectionSlug}
    columnState={props.columnState}
    disableBulkDelete={props.disableBulkDelete}
    disableBulkEdit={props.disableBulkEdit}
    enableRowSelections={props.enableRowSelections}
    hasCreatePermission={props.hasCreatePermission}
    listPreferences={props.listPreferences}
    newDocumentURL={props.newDocumentURL}
    preferenceKey={props.preferenceKey}
    renderedFilters={props.renderedFilters}
    Table={
      <CustomTable
        columns={props.columnState}
        docs={props.data.docs}
        enableRowSelections={props.enableRowSelections}
      />
    }
  />
)

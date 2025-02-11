import { Column, SelectAll, SelectRow } from '@payloadcms/ui'
import { ReactElement } from 'react'

type Props = {
  columns: Column[];
  docs: any[];
  enableRowSelections?: boolean;
};

export const CustomTable = (props: Props) => {
  const activeColumns = props.columns.filter((col) => col.active);

  if (!activeColumns || activeColumns.length === 0) {
    return <div>No columns selected</div>;
  }

  return (
    <div className="table">
      <div role="table">
        <div role="rowgroup">
          <ColumnHeadersRenderer columns={activeColumns} />
        </div>
        <div role="rowgroup">
          {props.docs.map((doc, i) => (
            <RowRenderer key={doc.id} doc={doc} index={i} columns={activeColumns} />
          ))}
        </div>
      </div>
    </div>
  );
};

type ColumnHeadersRendererProps = {
  columns: Column[];
};

const ColumnHeadersRenderer = (props: ColumnHeadersRendererProps) => (
  <div role="row" style={{ display: 'grid', gridAutoFlow: 'column' }}>
    <div id="heading-_select" role="columnheader">
      <SelectAll />
    </div>
    {props.columns.map((col, i) => (
      <div key={`table-header-${i}`} id={`heading-${col.accessor}`} role="columnheader">
        {col.Heading}
      </div>
    ))}
  </div>
);

type RowRendererProps = {
  doc: any;
  index: number;
  columns: Column[];
};

const RowRenderer = (props: RowRendererProps) => (
  <div role="row" style={{ display: 'grid', gridAutoFlow: 'column' }}>
    <div className="cell-_select" role="cell">
      <SelectRow rowData={props.doc} />
    </div>

    {props.columns.map((col) => {
      console.log(props)
      const cell = col.renderedCells[props.index] as ReactElement;
      const Component = cell.type;
      const cellProps = cell.props as any;

      return (
        <div key={cell.key} className={`cell-${col.accessor}`} role="cell">
          <Component {...cellProps} />
        </div>
      );
    })}
  </div>
);

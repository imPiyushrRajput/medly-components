import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Body from './Body';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import SelectableColumns from './SelectableColumns';
import { HiddenDiv, TableStyled } from './Table.styled';
import { ColumnConfig, Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';

const Table: React.SFC<Props> & WithStyle & StaticProps = props => {
    const { data, onRowClick, onSort, isSelectable, selectedRows, onRowSelection } = props,
        checkboxColumnConfig: ColumnConfig = { title: 'ch', field: 'medly-table-checkbox', formatter: 'checkbox', hide: !isSelectable };

    const hiddenDivRef = useRef(null),
        [ids, selectedIds, toggleId] = useRowSelector(data.map(({ id }) => id), selectedRows),
        [maxColumnSizes, setMaxColumnSizes] = useState({}),
        [columns, setColumns] = useState(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));

    useEffect(() => {
        setColumns(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));
    }, [props.columns]);

    useEffect(() => {
        ids.setValue(data.map(({ id }) => id));
    }, [data]);

    useEffect(() => {
        selectedIds.setValue(selectedRows);
    }, [selectedRows]);

    useEffect(() => {
        onRowSelection && onRowSelection(selectedIds.value);
    }, [selectedIds.value]);

    const changeMaxColumnSizes = (val: object) => {
        Object.keys(maxColumnSizes).length === 0 && setMaxColumnSizes(val);
    };

    const head = useMemo(
            () => (
                <Head
                    {...{
                        onSort,
                        columns,
                        setColumns,
                        maxColumnSizes,
                        onSelectAllClick: toggleId,
                        isAllRowSelected: ids.isAllSelected
                    }}
                />
            ),
            [maxColumnSizes, columns]
        ),
        body = useMemo(
            () => (
                <Body
                    {...{
                        columns,
                        data,
                        hiddenDivRef,
                        onRowClick,
                        changeMaxColumnSizes,
                        selectedRows: selectedIds.value,
                        onRowSelection: toggleId
                    }}
                />
            ),
            [hiddenDivRef, columns]
        );

    return (
        <TableStyled isRowClickable={onRowClick ? true : false}>
            <HiddenDiv ref={hiddenDivRef} />
            {head}
            {body}
        </TableStyled>
    );
};

Table.defaultProps = {
    data: [],
    selectedRows: [],
    isSelectable: false
};

Table.displayName = 'Table';
Table.SelectableColumns = SelectableColumns;
Table.Style = TableStyled;

export default Table;

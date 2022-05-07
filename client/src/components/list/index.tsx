import React, { ComponentType } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import styles from './styles.module.scss';

type Props<T> = {
  count: number;
  itemHeight: number;
  width?: number;
  RenderItem: ComponentType<ListChildComponentProps<T>>;
} & BaseComponentProps;

VirtualizedList.defaultProps = {
  itemHeight: 35,
};

function VirtualizedList<T>(props: Props<T>) {
  const { containerStyle, RenderItem, count, itemHeight, width } = props;

  return (
    <div className={clsx([styles.listContainer, containerStyle])}>
      <AutoSizer>
        {({ height, width: autoSizerWidth }) => (
          <List
            height={height}
            width={width ?? autoSizerWidth}
            className={styles.list}
            itemCount={count}
            itemSize={itemHeight}
            layout='vertical'>
            {RenderItem}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}

export default VirtualizedList;

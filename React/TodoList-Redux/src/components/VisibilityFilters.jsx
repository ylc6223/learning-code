import React from 'react';
import clsx from 'clsx';
import { VISIBILITY_FILTERS } from '../constants';
// 渲染一组简单的过滤器： all，completed 和 incomplete
// activeFilter指示用户当前选择了哪个过滤器
const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]; //example value 'all'
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={clsx('filter', {
              'filter--active': currentFilter === activeFilter,
            })}
            onClick={() => setFilter(currentFilter) /** waiting for setFilter handler*/}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;

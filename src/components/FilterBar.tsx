"use client";

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { FILTER_CATEGORIES } from '@/src/constants/filterItems';

export const FilterBar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('status');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleToggleFilter = (choosenFilter: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentCategoryValue = searchParams.get(selectedCategory);

    if (currentCategoryValue === choosenFilter) {
      params.delete(selectedCategory);
    } else {
      params.set(selectedCategory, choosenFilter);
    }

    params.set('page', '1');

    router.replace(`${pathname}?${params.toString()}`, {scroll: false});
  };

  return (
    <section>
      <div>
        <p>Fliters:</p>
        <div
          onClick={() => router.push(pathname, {scroll: false})}
        >Remove all filters</div>
      </div>
      <div>
        {FILTER_CATEGORIES.map((category) => {
          return (
            <div key={category.id}>
              <div
                onClick={() => setSelectedCategory(category.id)}
              >{category.title}</div>

              {
                selectedCategory === category.id && 
                <div>
                  {category.options.map((categoryOption) => {
                    return ( 
                    <div 
                      key={categoryOption.value}
                      onClick={() => handleToggleFilter(categoryOption.value)}
                    >
                      {categoryOption.label}
                    </div>
                    )
                  })}
                </div>
              }
            </div>
          );
        })}
      </div>
    </section>
  );
};

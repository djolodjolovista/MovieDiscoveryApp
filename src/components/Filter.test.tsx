import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter, { FilterOption, FilterComponentProps } from './Filter';

const mockOptions: FilterOption[] = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' }
];

const mockOnOptionChange = jest.fn();

const renderFilter = (props: Partial<FilterComponentProps> = {}) => {
  const defaultProps: FilterComponentProps = {
    options: mockOptions,
    selectedOption: undefined,
    onOptionChange: mockOnOptionChange
  };

  return render(<Filter {...defaultProps} {...props} />);
};

describe('Filter component', () => {
  test('renders the filter label', () => {
    const { getByText } = renderFilter();
    const filterLabel = getByText('Filter:');
    expect(filterLabel).toBeInTheDocument();
  });

  test('renders the filter options', () => {
    const { getByLabelText } = renderFilter();
    const filterSelect = getByLabelText('Filter:');
    expect(filterSelect.children.length).toBe(mockOptions.length + 1);
  });

  test('calls onOptionChange when an option is selected', () => {
    const { getByLabelText } = renderFilter();
    const filterSelect = getByLabelText('Filter:');
    fireEvent.change(filterSelect, { target: { value: '2' } });
    expect(mockOnOptionChange).toHaveBeenCalledWith(2);
  });
});

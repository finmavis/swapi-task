import React from 'react';
import { render } from '@testing-library/react';

import MovieDetailList from './MovieDetailList';

describe('<MovieDetailList />', () => {
  it('Should render list if have any list data', () => {
    const { getByText } = render(
      <MovieDetailList label='Lucky Number' list={['One', 'Two', 'Three']} />,
    );

    expect(getByText(/lucky number/i)).toBeInTheDocument();
    expect(getByText(/one/i)).toBeInTheDocument();
    expect(getByText(/two/i)).toBeInTheDocument();
    expect(getByText(/three/i)).toBeInTheDocument();
  });

  it("Should render no data text if there's no data", () => {
    const { getByText, getAllByText } = render(
      <MovieDetailList label='Planets' list={[]} />,
    );

    expect(getAllByText(/planets/i)).toHaveLength(2);
    expect(
      getByText(/We don't have any planets data yet!/i),
    ).toBeInTheDocument();
  });
});

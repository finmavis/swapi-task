import React from 'react';
import { render } from '@testing-library/react';

import MovieDescription from './MovieDescription';

describe('<MovieDescription />', () => {
  it('Should render properly', () => {
    const { getByText } = render(
      <MovieDescription description='Movie Description' />,
    );
    expect(getByText(/movie description.../i)).toBeInTheDocument();
  });

  it('Should render with suffix 3 dots', () => {
    const text =
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor facere aperiam sint explicabo mollitia error accusantium neque. Accusantium fugiat, odio illo vel labore eligendi! Ut error dolores earum nisi praesentium.';
    const { getByText } = render(<MovieDescription description={text} />);
    expect(getByText(/lorem/i)).toHaveTextContent(`${text}...`);
  });

  it('Should render text no more than 260 length and with suffix 3 dot', () => {
    const text =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis earum et odio architecto sit, fuga dolores qui mollitia. Eum odio voluptates cupiditate perspiciatis modi voluptatum at non aliquam laudantium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut esse, impedit recusandae amet commodi animi quaerat voluptatem? Ipsam aliquam, tenetur eos quasi id dicta vel nam? Hic, est ipsam.';
    const { getByText } = render(<MovieDescription description={text} />);
    expect(getByText(/lorem ipsum/i).textContent.length).toBe(263);
  });
});

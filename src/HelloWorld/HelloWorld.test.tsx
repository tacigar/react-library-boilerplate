import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('<HelloWorld />', () => {
  it('should render', () => {
    const { getByText } = render(<HelloWorld name="Tacigar" />);
    expect(getByText('Hello, Tacigar!')).toBeInTheDocument();
  });
});
